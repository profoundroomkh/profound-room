'use client'

export default function JournalCTA() {
  return (
    <section
      style={{
        marginTop: "100px",
        padding: "72px 40px",
        borderRadius: "28px",
        background:
          "linear-gradient(180deg, rgba(18,18,18,.75), rgba(8,8,8,.95))",
        border: "1px solid rgba(255,255,255,.08)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#b9977d",
          letterSpacing: "4px",
          fontSize: "13px",
          marginBottom: "16px",
        }}
      >
        PROFOUND ROOM
      </p>

      <h2
        style={{
          fontSize: "36px",
          fontWeight: 300,
          marginBottom: "18px",
          color: "#f2e1d0",
        }}
      >
        準備開始您的放鬆時光？
      </h2>

      <p
        style={{
          maxWidth: "560px",
          margin: "0 auto 42px",
          color: "#cbb79d",
          lineHeight: "2",
          fontSize: "16px",
        }}
      >
        探索不同風格的療癒師，
        找到最適合自己的按摩體驗，
        或直接透過 LINE 完成預約。
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/#therapists"
          style={{
            minWidth: "190px",
            height: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#b9977d",
            color: "#050505",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          探索療癒師
        </a>

        <a
          href="https://line.me/R/ti/p/@637fbbyh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            minWidth: "190px",
            height: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(185,151,125,.45)",
            color: "#f2e1d0",
            borderRadius: "999px",
            textDecoration: "none",
            letterSpacing: "2px",
          }}
        >
          LINE 立即預約
        </a>
      </div>
    </section>
  )
}
