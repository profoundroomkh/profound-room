import Header from '../../components/Header'

export default function JournalPage() {
  const posts = [
    {
      title:
        '第一次體驗 Gay SPA 前，可以先知道的事',

      description:
        '第一次接觸男士 SPA 與 Gay SPA 時，許多人會感到緊張與陌生。這篇文章整理了第一次預約前，可以先了解的幾件事。',

      link:
        '/journal/first-gay-spa-experience',
    },

    {
      title:
        '高雄深夜放鬆空間與一般按摩有什麼不同？',

      description:
        '比起傳統按摩，深夜男士放鬆空間更重視氛圍、情緒與安靜感。',

      link:
        '/journal/kaohsiung-private-spa',
    },

    {
      title:
        '為什麼越來越多人選擇預約制男士 SPA？',

      description:
        '預約制空間能提供更好的隱私、安靜感與完整沉浸體驗。',

      link:
        '/journal/private-spa-for-men',
    },
    {
  title:
    '男士 SPA 與一般按摩最大的差別是什麼？',

  description:
    '從空間氛圍、預約制、沉浸感到情緒放鬆，男士 SPA 與一般按摩其實有很大的不同。',

  link:
    '/journal/mens-spa-vs-normal-massage',
},
  ]

  return (
    <>
      <Header />

      <main
        style={{
          background: '#050505',
          color: '#f2e1d0',
          minHeight: '100vh',
          padding: '140px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              color: '#cbb79d',
              letterSpacing: '4px',
              fontSize: '13px',
              marginBottom: '20px',
            }}
          >
            JOURNAL
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            Deep Night
            <br />
            Journal
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              maxWidth: '700px',
              marginBottom: '100px',
              fontSize: '18px',
            }}
          >
            關於男士放鬆空間、深夜情緒、
            預約制 Gay SPA 與沉浸式療癒體驗。
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                style={{
                  background: '#111',
                  borderRadius: '32px',
                  padding: '50px 40px',
                  border:
                    '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                }}
              >
                <h2
                  style={{
                    color: '#f2e1d0',
                    fontSize: '34px',
                    fontWeight: '300',
                    marginBottom: '18px',
                    lineHeight: '1.5',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: '2',
                    fontSize: '16px',
                  }}
                >
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
