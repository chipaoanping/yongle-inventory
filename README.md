# 永樂庫存

永樂寄售商品的庫存、售出（含拍照）、出入庫紀錄與每月各品牌結算。手機網頁 App，可加到主畫面使用。

- 網站：GitHub Pages（這個 repository 的 `main` 分支根目錄）
- 資料與登入：Firebase（Firestore + Authentication 電子郵件/密碼）

## 第一次設定

1. **Firebase 設定**：把 Firebase 專案的 `firebaseConfig` 貼進 `firebase-config.js`。
2. **安全規則**：Firebase Console → Firestore Database → 規則，把 `firestore.rules` 的內容整段貼上並發佈。
3. **開網站**：GitHub repository → Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾選 `/ (root)`。
4. **授權網域**：Firebase Console → Authentication → 設定 → 授權網域，加入 `你的帳號.github.io`。
5. **負責人**：打開網址，用自己的 Email 註冊。第一個註冊的人會被問要不要成為負責人，按確認。
6. **搬資料**：負責人到「更多 → 搬入舊資料」，選擇從舊 Claude 頁面匯出的 JSON 檔。

## 店員怎麼加入

店員打開網址 → 按「註冊帳號」→ 填名字送出申請 → 負責人到「更多 → 店員」按「核准」。

## 加到手機主畫面

- iPhone：Safari 打開網址 → 分享 → 加入主畫面
- Android：Chrome 打開網址 → ⋮ → 加到主畫面／安裝應用程式
