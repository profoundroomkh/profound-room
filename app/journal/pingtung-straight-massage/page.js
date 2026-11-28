import Header from '../../../components/Header'
import JournalCTA from '../../../components/JournalCTA'
import JournalArticleSchema from '../../../components/JournalArticleSchema'

export const metadata = {
  title: '屏東市直男按摩怎麼找？到府與外部場地預約指南｜深寓 PROFOUND ROOM',
  description:
    '尋找屏東市直男按摩、屏東市男士按摩或屏東市同志按摩？深寓無固定實體店面，依需求安排外出到府或臨時租借外部場地。',
  keywords: [
    '屏東市按摩',
    '屏東市男士按摩',
    '屏東市直男按摩',
    '屏東市直男同志按摩',
    '屏東市同志按摩',
    '屏東到高雄按摩',
    '屏東男士按摩推薦',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/journal/pingtung-straight-massage',
  },
  openGraph: {
    title: '屏東市直男按摩怎麼找？到府與外部場地預約指南',
    description: '深寓無固定實體店面，依客人需求提供到府服務或臨時租借外部場地；整理師傅、課程與 LINE 預約流程。',
    url: 'https://profoundroom.com/journal/pingtung-straight-massage',
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
        headline="屏東市直男按摩怎麼找？到府與外部場地預約指南"
        description="尋找屏東市直男按摩、屏東市男士按摩或屏東市同志按摩？深寓無固定實體店面，依需求安排外出到府或臨時租借外部場地。"
        url="https://profoundroom.com/journal/pingtung-straight-massage"
        keywords={['屏東市直男按摩', '屏東市男士按摩', '屏東市同志按摩']}
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
          屏東市直男按摩怎麼找？
          <br />
          到府與外部場地預約指南
        </h1>
        <JournalCTA />

        <p>
          如果你住在屏東市，正在搜尋屏東市直男按摩、屏東市男士按摩或屏東市同志按摩，
          可以先透過官方 LINE 詢問師傅、課程與可安排的服務地點。深寓提供預約制男士按摩與直男按摩專屬方案。
        </p>

        <h2>服務地點如何安排？</h2>
        <p>
          深寓無固定實體店面，依客人需求提供外出到府（飯店／旅館／客住處）或臨時租借外部場地（共享空間／計時工作室）。
          預約時請告知偏好的服務方式與區域，客服會協助確認時段、地點與可行安排。
        </p>
        <p>
          外出到府或外部場地的實際可行性，會依日期、時段、地點與場地狀況確認；請先等候官方 LINE 客服回覆，
          完成確認後再前往或安排到府。
        </p>

        <h2>屏東市直男按摩預約前要先看什麼？</h2>
        <p>
          第一個是師傅資料。可以先到
          {' '}
          <a href="/#therapists" style={linkStyle}>
            官網師傅列表
          </a>
          {' '}
          查看照片、簡介、方案標籤與目前班表。官網會依日期顯示「可預約」「提前預約」或「暫停預約等週更新」，
          讓你知道今天能否安排，以及是否可以先詢問本週其他日期。
        </p>
        <p>
          第二個是價格。直男師傅有獨立的專屬價目，與一般師傅方案不同；可以先查看
          {' '}
          <a href="/#pricing" style={linkStyle}>
            Pricing 課程方案
          </a>
          ，再向官方 LINE 說明希望預約的師傅、日期、課程與地點需求。
        </p>

        <h2>屏東市直男按摩的預約流程</h2>
        <p>
          建議先準備希望日期、時段與指定師傅，再透過官方 LINE 詢問服務地點與可否安排。
          客服確認課程、時間及地點後，依約定方式完成預約；請勿在客服確認前自行前往場地。
        </p>

        <h2>屏東市直男按摩價格怎麼看？</h2>
        <p>
          直男師傅目前有兩種專屬方案：90 分鐘 NT$2,500，內容為指壓、油壓與龍筋機能保養；
          120 分鐘 NT$2,900，內容為指壓、油壓、體推與龍筋機能保養。實際適用師傅與可預約時段，
          仍以官網最新資訊和官方 LINE 確認為準。
        </p>
        <p>
          如果你是第一次搜尋屏東市直男按摩價格，不確定該選哪一種時間，
          可以先把可接受的日期、預算與希望的放鬆節奏告訴客服，再由客服協助確認。
        </p>

        <h2>預約前的確認清單</h2>
        <p>
          預約前可以確認三件事：師傅是否能接、日期與時段是否已保留，以及服務方式與地點是否已由客服確認。
          完整預約流程可參考
          {' '}
          <a href="/reservation" style={linkStyle}>
            預約說明
          </a>
          ，有疑問時可直接透過官方 LINE 詢問。
        </p>

        <h2>屏東市直男按摩的預約提醒</h2>
        <p>
          搜尋屏東市直男按摩、屏東市男士按摩或屏東市同志按摩時，先查看師傅與課程，再透過官方 LINE 確認日期、
          時段及外出到府或外部場地的可行安排，能讓預約資訊更清楚。
        </p>

        <JournalCTA />
      </main>
    </>
  )
}
