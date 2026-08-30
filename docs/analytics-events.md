# 深寓官網 GA4 匿名事件追蹤

## 追蹤原則

網站只記錄匿名的頁面互動與按鈕來源，不記錄姓名、電話、LINE 對話、預約內容或其他直接身分資訊。GA4 Measurement ID 由現有網站設定維持，事件由瀏覽器在使用者互動時送出。

## 核心預約事件

| 事件名稱 | 觸發時機 | 主要參數 |
|---|---|---|
| `reservation_intent` | 使用者點擊 LINE 預約或師傅預約按鈕 | `source`；師傅預約另含 `therapist`、`therapist_id` |
| `reservation_template_copy` | 師傅預約文字成功複製到剪貼簿 | `source`、`therapist`、`therapist_id` |
| `reservation_guide_click` | 點擊預約說明 | `source` |

`reservation_intent` 代表「有預約意圖」，不等同於客服已確認的正式預約。正式預約數仍需以 LINE 或客服紀錄核對。

## 其他行為事件

| 事件名稱 | 用途 | 主要參數 |
|---|---|---|
| `therapist_explore_click` | 觀察訪客是否進入師傅區 | `source` |
| `space_click` | 觀察空間區塊點擊 | `source` |
| `location_map_click` | 觀察 Google Maps 開啟 | `source` |
| `faq_click` | 觀察 FAQ 深入閱讀 | `source` |
| `journal_article_click` | 觀察 Journal 文章點擊 | `source`、`article` |
| `journal_index_click` | 觀察 Journal 索引點擊 | `source` |
| `social_click` | 觀察社群導流 | `platform`、`source` |
| `contact_click` | 觀察 Email 點擊 | `platform`、`source` |
| `menu_click` | 觀察 MENU 導覽使用 | `item`、`path` |
| `language_switch` | 觀察 EN／中文使用 | `language`、`source` |
| `age_confirmation` | 觀察 18+ 確認完成 | `source` |

## 日後從 GA4 取資料

1. 登入與網站相同的 Google Analytics 帳號，選擇深寓官網使用的 GA4 資源。
2. 到「報表」→「互動」→「事件」，設定日期區間，查看 `reservation_intent`、`reservation_template_copy`、`therapist_explore_click` 等事件。
3. 建議將 `reservation_intent` 標記為「關鍵事件」，方便後續觀察預約意圖。
4. 點擊報表右上角的匯出或下載，選擇 CSV；也可以截圖事件名稱、事件數、使用者數與日期區間。
5. 將 CSV 或截圖交給我，我可以分析來源、師傅、價格區塊、地圖、社群與預約入口的表現。

## 建議分析方式

初期先累積 2–4 週資料，再比較不同來源的 `reservation_intent` 使用者數與事件數。網站數據只能判斷預約意圖；若要計算真正的預約轉換率，請另外提供同期 LINE 實際詢問或確認預約數，才能計算：

`正式預約轉換率 = LINE 確認的正式預約數 ÷ 官網不重複使用者數 × 100%`

如果只有網站資料，則可先使用：

`預約意圖率 = 觸發 reservation_intent 的不重複使用者數 ÷ 官網不重複使用者數 × 100%`
