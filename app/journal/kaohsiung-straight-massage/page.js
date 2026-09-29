import Header from '../../../components/Header'
import JournalCTA from '../../../components/JournalCTA'
import JournalArticleSchema from '../../../components/JournalArticleSchema'

export const metadata = {
  title: '高雄直男按摩是什麼？服務對象、方案與預約方式一次看｜深寓 PROFOUND ROOM',
  description:
    '想了解高雄直男按摩、直男同志按摩與直男師傅方案？本文整理服務特色、價格方向、師傅班表與預約流程。',
  keywords: [
    '高雄直男按摩',
    '直男按摩',
    '直男同志按摩',
    '高雄直男師傅',
    '高雄男士按摩',
    '高雄 Gay SPA',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/journal/kaohsiung-straight-massage',
  },
  openGraph: {
    title: '高雄直男按摩是什麼？服務對象、方案與預約方式一次看',
    description: '整理高雄直男按摩、直男同志按摩專屬方案與預約方式，先了解再安心安排體驗。',
    url: 'https://profoundroom.com/journal/kaohsiung-straight-massage',
    siteName: 'PROFOUND ROOM 深寓',
    locale: 'zh_TW',
    type: 'article',
  },
}

const linkStyle = {
  color: '#d7b79e',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <JournalArticleSchema
        headline="高雄直男按摩是什麼？服務對象、方案與預約方式一次看"
        description="想了解高雄直男按摩、直男同志按摩與直男師傅方案？本文整理服務特色、價格方向、師傅班表與預約流程。"
        url="https://profoundroom.com/journal/kaohsiung-straight-massage"
        keywords={['高雄直男按摩', '直男按摩', '直男同志按摩']}
      />
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '140px 24px',
          color: '#f2e1d0',
          background: '#050505',
          lineHeight: '2',
        }}
      >
        <p style={{ color: '#b9977d', letterSpacing: '4px', fontSize: '13px' }}>
          DEEP NIGHT JOURNAL
        </p>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 300,
            lineHeight: 1.35,
            margin: '18px 0 32px',
          }}
        >
          高雄直男按摩是什麼？
          <br />
          服務對象、方案與預約方式一次看
        </h1>
        <JournalCTA />

        <p>
          搜尋「高雄直男按摩」或「直男同志按摩」時，很多人想先了解的並不是複雜的名詞，
          而是服務內容、適合的方案，以及第一次預約要怎麼開始。深寓將直男師傅安排為獨立方案，
          讓客人可以先閱讀師傅資料與價格，再依自己的需求詢問時段。
        </p>

        <h2>直男按摩方案是什麼？</h2>
        <p>
          在深寓官網中，直男按摩是針對直男師傅所設計的專屬價目方案。服務仍以放鬆、舒壓與私人空間體驗為主，
          但價格與一般師傅方案不同，預約前需要先確認適用的課程與時間。
        </p>
        <p>
          這類方案不代表客人一定要符合某一種身分才能詢問。重點是先看清楚師傅資料、服務方案與預約規則，
          再透過官方 LINE 確認最適合的安排。
        </p>

        <h2>適合哪些正在找高雄直男按摩的人？</h2>
        <p>
          如果你想找高雄男士按摩，又希望先了解師傅風格、身材資料、角色與可預約時間，
          預約制的直男師傅方案會比較容易事前確認。第一次接觸的人，也可以先從閱讀師傅介紹與價格開始，
          不需要在還不了解內容時就急著決定。
        </p>
        <p>
          深寓重視安靜、隱私與雙方溝通。任何日期、時段與服務細節，都建議在預約前向官方 LINE 詢問清楚，
          讓整體流程更從容。
        </p>

        <h2>直男按摩與一般師傅方案有什麼不同？</h2>
        <p>
          最需要先確認的是價格與服務內容。直男師傅有專屬價目，與一般師傅的 90 分鐘、120 分鐘方案不同，
          因此不能直接混用。官網 Pricing 已將兩類資訊分開呈現，方便客人先查看。
        </p>
        <p>
          你可以先前往
          {' '}
          <a href="/#pricing" style={linkStyle}>
            Pricing 課程方案
          </a>
          {' '}
          查看直男專屬價目，再到
          {' '}
          <a href="/#therapists" style={linkStyle}>
            師傅列表
          </a>
          {' '}
          閱讀目前可預約與提前預約的師傅資料。
        </p>

        <h2>預約前可以先確認哪些事情？</h2>
        <p>
          建議先準備希望的日期、時段與指定師傅。如果是第一次預約，也要留意首次預約每位師傅都需要先支付 NT$500 訂金，
          完成當日消費後可全額折抵。詳細匯款方式與可預約時段，請以官方 LINE 回覆為準。
        </p>
        <p>
          班表會依日期更新。若官網顯示「提前預約」，代表本週有排班但不一定是今天值班；若顯示「暫停接單」，
          則表示目前沒有本週排班。這種設計可以讓客人提早安排後面的日期，不必只看當天狀態。
        </p>

        <h2>結語：先了解，再選擇適合自己的方案</h2>
        <p>
          高雄直男按摩的搜尋者，通常是希望在預約前先把價格、師傅與流程了解清楚。深寓建議先閱讀師傅資料，
          查看最新課程與班表，再透過官方 LINE 確認日期、時段與訂金資訊，讓第一次安排也能保有安心與隱私。
        </p>

        <JournalCTA />
      </main>
    </>
  )
}
