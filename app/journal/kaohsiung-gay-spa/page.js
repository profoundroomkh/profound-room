import Header from '../../../components/Header'

export const metadata = {
  title:
    '高雄 Gay SPA 如何選擇？｜PROFOUND ROOM 深寓',

  description:
    '第一次尋找高雄 Gay SPA？了解選擇男士放鬆空間時需要注意的重點。',
}

export default function Page() {
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
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: '300',
              marginBottom: '40px',
            }}
          >
            高雄 Gay SPA 如何選擇？
          </h1>

          <p style={{ lineHeight: '2' }}>
            對許多人來說，
            第一次接觸高雄 Gay SPA 時，
            最在意的往往不是按摩本身，
            而是空間是否舒適、
            是否具備隱私感，
            以及整體體驗是否讓人安心。
          </p>

          <p style={{ lineHeight: '2' }}>
            一個好的男士放鬆空間，
            除了專業按摩外，
            更重視環境氛圍、
            預約流程與服務品質。
          </p>

          <p style={{ lineHeight: '2' }}>
            PROFOUND ROOM 深寓位於高雄，
            提供預約制 Gay SPA 與男士放鬆空間，
            希望讓每位來訪者都能在安靜環境中，
            找回屬於自己的放鬆節奏。
          </p>
        </div>
      </main>
    </>
  )
}
