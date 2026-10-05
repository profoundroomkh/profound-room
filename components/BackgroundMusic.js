'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './BackgroundMusic.module.css'

const VIDEO_ID = '9siU9aIPMEs'
const YOUTUBE_API_SRC = 'https://www.youtube.com/iframe_api'
const AGE_CONFIRMED_EVENT = 'profound:age-confirmed'

export default function BackgroundMusic() {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const playerReadyRef = useRef(false)
  const soundEnabledRef = useRef(false)
  const [isReady, setIsReady] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    let cancelled = false
    soundEnabledRef.current = window.sessionStorage.getItem('profound-age-confirmed') === 'true'

    const createPlayer = () => {
      if (cancelled || !window.YT?.Player || !iframeRef.current || playerRef.current) return

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            if (cancelled) return
            playerReadyRef.current = true
            event.target.setVolume(32)
            if (soundEnabledRef.current) {
              event.target.unMute()
            } else {
              event.target.mute()
            }
            event.target.playVideo()
            setIsReady(true)
            setIsMuted(!soundEnabledRef.current)
            setIsPlaying(true)
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true)
            if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false)
            }
          },
        },
      })
    }

    const previousReady = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.()
      createPlayer()
    }

    if (window.YT?.Player) {
      createPlayer()
    } else if (!document.querySelector(`script[src="${YOUTUBE_API_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = YOUTUBE_API_SRC
      script.async = true
      document.body.appendChild(script)
    }

    return () => {
      cancelled = true
      playerReadyRef.current = false
      if (window.onYouTubeIframeAPIReady === createPlayer) {
        window.onYouTubeIframeAPIReady = previousReady
      }
      playerRef.current?.destroy?.()
      playerRef.current = null
    }
  }, [])

  useEffect(() => {
    const enableSound = () => {
      soundEnabledRef.current = true
      const player = playerRef.current

      if (player && playerReadyRef.current) {
        player.unMute()
        player.setVolume(32)
        player.playVideo()
        setIsMuted(false)
        setIsPlaying(true)
      }
    }

    window.addEventListener(AGE_CONFIRMED_EVENT, enableSound)
    return () => window.removeEventListener(AGE_CONFIRMED_EVENT, enableSound)
  }, [])

  const handleToggle = () => {
    const player = playerRef.current
    if (!player || !isReady) return

    if (isMuted) {
      soundEnabledRef.current = true
      player.unMute()
      player.setVolume(32)
      player.playVideo()
      setIsMuted(false)
      setIsPlaying(true)
      return
    }

    if (isPlaying) {
      player.pauseVideo()
      setIsPlaying(false)
    } else {
      player.playVideo()
      setIsPlaying(true)
    }
  }

  const label = !isReady
    ? '音樂載入中'
    : isMuted
      ? '開啟背景音樂'
      : isPlaying
        ? '暫停背景音樂'
        : '播放背景音樂'

  return (
    <>
      <div className={styles.player} aria-hidden="true">
        <iframe
          ref={iframeRef}
          title="PROFOUND ROOM 背景氛圍音樂"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
          allow="autoplay; encrypted-media"
        />
      </div>
      <button
        type="button"
        className={`${styles.control} ${isPlaying && !isMuted ? styles.controlActive : ''}`}
        onClick={handleToggle}
        aria-label={label}
        title={label}
        disabled={!isReady}
      >
        <span className={styles.icon} aria-hidden="true">{isPlaying && !isMuted ? '♫' : '♪'}</span>
        <span>{label}</span>
      </button>
    </>
  )
}
