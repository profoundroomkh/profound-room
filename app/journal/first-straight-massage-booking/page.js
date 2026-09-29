import Header from '../../../components/Header'
import JournalCTA from '../../../components/JournalCTA'
import JournalArticleSchema from '../../../components/JournalArticleSchema'

export const metadata = {
  title: '第一次直男按摩怎麼預約？訂金、時段與注意事項｜深寓 PROFOUND ROOM',
  description:
    '第一次預約直男按摩或直男同志按摩不用緊張，本文整理師傅選擇、班表確認、NT$500 訂金與 LINE 預約流程。',
  keywords: [
    '直男按摩預約',
    '高雄直男按摩預約',
    '直男同志按摩預約',
    '按摩訂金',
    'LINE 預約按摩',
    '高雄男士按摩預約',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/journal/first-straight-massage-booking',
  },
  openGraph: {
    title: '第一次直男按摩怎麼預約？訂金、時段與注意事項',
    description: '整理第一次直男按摩預約流程、師傅班表與每位師傅 NT$500 訂金規則。',
    url: 'https://profoundroom.com/journal/first-straight-massage-booking',
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

const stepStyle = {
  margin: '24px 0',
  padding: '22px 26px',
  borderLeft: '2px solid #b9977d',
  background: 'rgba(185, 151, 125, .06)',
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <JournalArticleSchema
        headline="第一次直男按摩怎麼預約？訂金、時段與注意事項"
        description="第一次預約直男按摩或直男同志按摩不用緊張，本文整理師傅選擇、班表確認、NT$500 訂金與 LINE 預約流程。"
        url="https://profoundroom.com/journal/first-straight-massage-booking"
        keywords={['直男按摩預約', '高雄直男按摩預約', '直男同志按摩預約']}
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
          第一次直男按摩怎麼預約？
          <br />
          訂金、時段與注意事項
        </h1>
        <JournalCTA />

        <p>
          第一次搜尋直男按摩預約或直男同志按摩預約時，很多人會擔心不知道該提供什麼資料、要不要先付訂金，
          或是今天休息的師傅能不能預約。其實只要依照幾個步驟準備，整個流程就能很清楚。
        </p>

        <h2>第一步：先選擇想了解的師傅</h2>
        <div style={stepStyle}>
          <p style={{ margin: 0 }}>
            前往
            {' '}
            <a href="/#therapists" style={linkStyle}>
              官網師傅列表
            </a>
            {' '}
            查看照片、身高、體重、年齡、角色、簡介與目前狀態，再決定想詢問的師傅。
          </p>
        </div>
        <p>
          如果官網顯示「可預約」，代表當天有排班；顯示「提前預約」，代表本週有排班，
          可以先詢問後續日期；只有「暫停預約等週更新」才代表目前沒有本週排班。即使不是今天值班，
          也可以先向官方 LINE 詢問接下來的日期。
        </p>

        <h2>第二步：準備日期、時段與課程</h2>
        <div style={stepStyle}>
          <p style={{ margin: 0 }}>
            提供希望的日期、可接受的時段、指定師傅與 90 分鐘或 120 分鐘課程，客服就能更快協助確認。
          </p>
        </div>
        <p>
          直男師傅使用專屬方案，90 分鐘為 NT$2,500，120 分鐘為 NT$2,900；如果還不確定要選哪一種，
          可以先閱讀
          {' '}
          <a href="/#pricing" style={linkStyle}>
            Pricing 課程方案
          </a>
          {' '}
          再詢問客服。
        </p>

        <h2>第三步：首次預約每位師傅都要支付 NT$500 訂金</h2>
        <div style={stepStyle}>
          <p style={{ margin: 0, color: '#f2e1d0' }}>
            首次預約的客人一律需要先支付訂金，沒有例外。訂金為 NT$500／每位師傅，完成當日消費後全額折抵。
          </p>
        </div>
        <p>
          如果一次預約兩位師傅，訂金會以每位師傅計算。匯款資訊請洽官方 LINE；不方便使用銀行轉帳，
          可至超商使用中國信託無卡存款完整支付訂金，詳細方式與帳戶資訊請先向官方 LINE 確認。
        </p>

        <h2>第四步：由官方 LINE 確認時段與位置</h2>
        <p>
          預約前請以官方 LINE 的最新回覆為準，確認師傅是否能接、課程內容、訂金方式與實際時段。
          預約完成後，官方會提供後續位置與到訪資訊；深寓採預約制，不建議未經確認直接前往。
        </p>

        <h2>改期與取消前要注意什麼？</h2>
        <p>
          預約時間前 6 小時以上通知，訂金可保留一次並於 30 天內改期；2–6 小時通知，訂金保留 50%，
          另 50% 轉為改期金。2 小時內取消、未通知或 No-show，訂金恕不退還；若遇重大緊急狀況，請主動聯繫官方 LINE 說明。
        </p>
        <p>
          完整規則可參考
          {' '}
          <a href="/reservation" style={linkStyle}>
            預約說明
          </a>
          ，實際安排仍以客服確認內容為準。
        </p>

        <h2>結語：把需求說清楚，就能安心開始</h2>
        <p>
          第一次直男按摩預約不需要準備複雜資料，只要先選擇想了解的師傅、提供日期與時段，
          再依官方 LINE 指示完成每位師傅 NT$500 訂金即可。先確認、再出發，能讓客人與師傅都保有舒適的安排空間。
        </p>

        <JournalCTA />
      </main>
    </>
  )
}
