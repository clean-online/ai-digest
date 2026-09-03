# Automation: AI Builders Digest 每日生成 + GitHub Pages 部署

## 最近执行记录

### 2026-09-02 (周三) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 10 builders / 19 tweets / 1 podcast / 0 blogs（bilingual 配置）。
- **Podcast**：Training Data — Rich Sutton & Khurram Javed「Why AI Models Stop Learning, and How to Start It Again」（Oak Lab / 持续学习 / 大世界假说）。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-02.html`（25KB），复刻 2026-08-31 模板样式（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`）。
- **注册**：`index.html` 的 `ISSUES` 对象追加 `2026-09-02` 条目（meta: 10 Builders · 19 Tweets · 1 Podcast · 0 Blog）。
- **部署**：copy 到 `2026/09/02/` → `git add . && commit "AI Builders Digest 2026-09-02"` (e617155) → `git push`（6e2d513..e617155）。GitHub Actions `Deploy to GitHub Pages` 成功（run 33582778645）。
- **验证**：`curl -I` 返回 HTTP 200，确认线上可访问。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：部署后立刻用 WebFetch 拉子路径会偶发 404（CDN 边缘未同步 / 缓存 MISS），属误报。正确做法是用 `curl -I <url>` 看 HTTP 状态码（200 即成功），或等 30–60s 再验证。根 index.html 通常先更新。
- **feed 是中心化推送**：`prepare-digest.js` 无需任何 API key，只抓中央 feed；当日实际返回的 builder 数（10）≠ 任务里列的 24 人——以 feed 实有内容为准，自动化直接用 JSON 里的 `x` 数组。
- **模板复用**：digest 页面结构与 CSS 已稳定（2026-08-31 起），新一期只需替换 builder/podcast 文本与 stats 数字，无需重排样式。

### 2026-09-03 (周四) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 16 builders / 38 tweets / 1 podcast / 0 blogs（bilingual 配置）。
- **Podcast**：Training Data — Nick Noone & Ben Rudolph「Making Cities Awesome: Peregrine」（AI 保护城市、拒绝监控国家模式；前沿部署工程；反转 Flock/Axon 数据收集模型；佛州水上救援 / 犹太会堂反犹威胁语义搜索实战）。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-03.html`（29KB），复刻 2026-09-02 模板样式（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`）。本日返回的 builder 集与任务所列 24 人不同（feed 实有 16 人，含 Boris Cherny / Cat Wu / Thariq / Claude 官方号等，不含原列表部分人），以 feed 实有内容为准。
- **注册**：`index.html` 的 `ISSUES` 对象追加 `2026-09-03` 条目（meta: 16 Builders · 38 Tweets · 1 Podcast · 0 Blog），置于 09-02 之前。
- **部署**：copy 到 `2026/09/03/` → `git add . && commit "AI Builders Digest 2026-09-03"` (3089f6e) → `git push`（e617155..3089f6e）。
- **验证**：`curl -I` 子路径首查 404（CDN 边缘未同步，与历史经验一致，误报）→ 等 45s 复查 `HTTP 200`，grep 确认线上 HTML 含 "AI Builders Digest"。根 index 同步 200。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：部署后立刻拉子路径偶发 404（CDN 边缘未同步 / 缓存 MISS），属误报。正确做法：`curl -I` 看 HTTP 状态码，或等 30–60s 再验证。本次实操确认等 45s 后转 200。根 index 通常先更新。
- **feed 是中心化推送**：`prepare-digest.js` 无需 API key，只抓中央 feed；当日实际 builder 数（16）≠ 任务列的 24 人——以 feed 实有内容为准，直接用 JSON 的 `x` 数组。
- **模板复用**：digest 页面结构与 CSS 已稳定（2026-08-31 起），新一期只替换 builder/podcast 文本与 stats 数字，无需重排样式。
- **index.html 实际路径**：任务里写的 `.workbuddy/ai-digest-site/index.html` 不存在，真实路径是仓库根 `index.html`（`const ISSUES` 块）。追加新日期条目即用 Edit 在 ISSUES 顶部插入。

## 下次运行
- 预计 2026-09-04 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
