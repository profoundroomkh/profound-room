import Header from '../../../components/Header'
import JournalCTA from '../../../components/JournalCTA'
import JournalArticleSchema from '../../../components/JournalArticleSchema'

export const metadata = {
  title: '高雄直男按摩價格怎麼算？90 分鐘與 120 分鐘方案整理｜深寓 PROFOUND ROOM',
  description:
    '整理高雄直男按摩價格、90 分鐘與 120 分鐘直男師傅專屬方案、服務內容與首次預約訂金規則。',
  keywords: [
    '高雄直男按摩價格',
    '直男按摩價格',
    '直男師傅價格',
    '高雄直男同志按摩價格',
    '高雄男士按摩價格',
    '高雄 Gay SPA 價格',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/journal/kaohsiung-straight-massage-price',
  },
  openGraph: {
    title: '高雄直男按摩價格怎麼算？90 分鐘與 120 分鐘方案整理',
    description: '查看高雄直男按摩兩種專屬方案與首次預約訂金規則，預約前先了解服務內容。',
    url: 'https://profoundroom.com/journal/kaohsiung-straight-massage-price',
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

const priceCardStyle = {
  margin: '28px 0',
  padding: '28px 30px',
  border: '1px solid rgba(185, 151, 125, .38)',
  borderRadius: '18px',
  background: 'rgba(185, 151, 125, .06)',
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <JournalArticleSchema
        headline="高雄直男按摩價格怎麼算？90 分鐘與 120 分鐘方案整理"
        description="整理高雄直男按摩價格、90 分鐘與 120 分鐘直男師傅專屬方案、服務內容與首次預約訂金規則。"
        url="https://profoundroom.com/journal/kaohsiung-straight-massage-price"
        keywords={['高雄直男按摩價格', '直男按摩價格', '直男同志按摩價格']}
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
          高雄直男按摩價格怎麼算？
          <br />
          90 分鐘與 120 分鐘方案整理
        </h1>
        <JournalCTA />

        <p>
          查詢高雄直男按摩價格時，最重要的不只是看總金額，也要一起確認時間長度、服務內容與適用對象。
          深寓目前將直男師傅方案獨立列出，讓想找直男按摩或直男同志按摩的客人，可以先比較兩種課程，再向官方 LINE 確認時段。
        </p>

        <h2>直男師傅 90 分鐘方案｜NT$2,500</h2>
        <div style={priceCardStyle}>
          <p style={{ margin: 0, color: '#f2e1d0', fontSize: '22px' }}>
            90 分鐘　<strong>NT$2,500</strong>
          </p>
          <p style={{ margin: '12px 0 0', color: '#cbb79d' }}>
            服務內容：指壓、油壓、龍筋機能保養
          </p>
        </div>
        <p>
          90 分鐘適合希望安排一段完整放鬆時間，但想把流程控制在較精簡長度的客人。實際服務細節與可安排時段，
          仍需依指定師傅與當週班表向官方 LINE 確認。
        </p>

        <h2>直男師傅 120 分鐘方案｜NT$2,900</h2>
        <div style={priceCardStyle}>
          <p style={{ margin: 0, color: '#f2e1d0', fontSize: '22px' }}>
            120 分鐘　<strong>NT$2,900</strong>
          </p>
          <p style={{ margin: '12px 0 0', color: '#cbb79d' }}>
            服務內容：指壓、油壓、體推、龍筋機能保養
          </p>
        </div>
        <p>
          如果希望有更充裕的時間進行完整放鬆，可以考慮 120 分鐘方案。兩種方案價格與內容不同，
          預約前請先確認選擇的是直男師傅專屬價目，而不是一般師傅課程。
        </p>

        <h2>直男按摩價格與一般方案一樣嗎？</h2>
        <p>
          不一樣。直男師傅有自己的專屬價目，90 分鐘與 120 分鐘的價格分別為 NT$2,500 與 NT$2,900；
          一般師傅則使用官網 Pricing 上的另一組課程方案。為避免預約時產生誤會，建議先查看
          <a href="/#pricing" style={linkStyle}>
            官網最新 Pricing
          </a>
          ，再向官方 LINE 說明希望預約的師傅與方案。
        </p>

        <h2>首次預約訂金是多少？</h2>
        <p>
          首次預約的客人，每位師傅都需要先支付 NT$500 訂金，沒有例外；完成當日消費後，訂金可全額折抵。
          如果一次安排多位師傅，訂金會依每位師傅計算。匯款資訊請洽官方 LINE。
        </p>
        <p>
          不方便使用銀行轉帳時，也可以至超商使用中國信託無卡存款完整支付訂金，實際操作與帳戶資訊請先向官方 LINE 詢問，
          不要直接猜測或使用過期資訊。
        </p>

        <h2>如何確認最新價格與可預約時段？</h2>
        <p>
          官網文章用來整理方案與預約前須知，實際可預約日期、師傅班表與匯款資訊仍以官方 LINE 的最新回覆為準。
          你可以先到
          {' '}
          <a href="/#therapists" style={linkStyle}>
            師傅列表
          </a>
          {' '}
          查看資料，再提供希望日期、時段與課程，讓客服協助確認。
        </p>

        <h2>結語：先看內容，再選擇適合的時間</h2>
        <p>
          高雄直男按摩價格主要分為 90 分鐘 NT$2,500 與 120 分鐘 NT$2,900 兩種直男師傅專屬方案。
          先確認服務內容、訂金與班表，再安排最符合自己需求的時間，預約流程會更加清楚。
        </p>

        <JournalCTA />
      </main>
    </>
  )
}
