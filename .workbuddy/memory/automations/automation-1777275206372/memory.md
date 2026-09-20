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
- 预计 2026-09-05 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。

### 2026-09-04 (周五) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 15 builders / 29 tweets / 1 podcast / 0 blogs（bilingual 配置）。
- **Podcast**：AI & I by Every — Katie Parrott「How a Professional Writer Writes With AI」（Compound Writing 插件脱胎自 Kieran Klassen 的 Compound Engineering；"最后一公里问题"= AI 知识截止后人类补独特真实输入；"模型是厨房，你供新鲜食材"；AI 作为"支持型"工具化解收件箱焦虑；论点：教育/接入须扩散否则复利价值锁死在少数人）。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-04.html`（28KB），复刻 2026-09-03 模板样式（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`），双语逐段 interleave。
- **编辑判断（skip 清单）**：Garry Tan（SF 住房/公共银行政治帖，非 AI 域）、Nikunj Kothari（微波炉育儿个人玩笑）、Dan Shipper（"it me"/"巧克力棒"等 fluff）按 skill 规则跳过；其余 12 位 builder 实质 AI 内容保留。stats strip 仍为 feed 总数 15/29/1/0。
- **注册**：`index.html` 的 `ISSUES` 对象顶部追加 `2026-09-04` 条目（meta: 15 Builders · 29 Tweets · 1 Podcast · 0 Blog）。
- **部署**：copy 到 `2026/09/04/` → `git add index.html 2026/09/04/ && commit "AI Builders Digest 2026-09-04"` (c514307) → `git push`（6bde715..c514307）。
- **验证**：首查子路径 404（CDN 边缘未同步，与历史经验一致，误报）→ 等 45s 复查 `HTTP 200`（size 28073，grep 命中 "AI Builders Digest"）；根 index 同步 200。临时文件 `_digest_raw.json/_podcast_transcript.txt/_tweets_dump.txt` 已清理未入库。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：部署后立刻拉子路径偶发 404（GitHub Actions 构建 + CDN 边缘未同步），属误报。正确做法：`curl -I` 看 HTTP 状态码，或等 30–60s 再验证。本次实测等 45s 后转 200，根 index 通常先更新。
- **feed 是中心化推送**：`prepare-digest.js` 无需 API key，只抓中央 feed；当日实际 builder 数（15）≠ 任务列的 24 人——以 feed 实有内容为准，直接用 JSON 的 `x` 数组。
- **模板复用**：digest 页面结构与 CSS 已稳定（2026-08-31 起），新一期只替换 builder/podcast 文本与 stats 数字，无需重排样式。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块；追加新日期条目即用 Edit 在 ISSUES 顶部插入。
- **skip 清单纪律**：按 skill 的 summarize_tweets 规则，对纯政治/个人玩笑/engagement fluff 帖子跳过；stats strip 仍报 feed 总数，section-meta 标 "15 Builders" 与 stats 一致。

### 2026-09-05 (周六) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 19 builders / 44 tweets / 1 podcast / 0 blogs（bilingual 配置）。
- **主题**：GPT-6 "Astra" 发布为当日主线（Sam Altman 致歉 messy rollout、Amjad Masad 称能力重大跃迁将登陆 Replit、Aaron Levie 企业评测 77% vs 74%、Thibault Sottiaux 访问策略、Matt Turck ARC-AGI-3 被 Astra 饱和）。
- **Podcast**：Unsupervised Learning (Redpoint) Ep 93 — Buck Shlegeris（Redwood Research CEO）谈 OpenAI/HuggingFace 事件、AI 安全与接管概率（近 50/50；Ajeya Cotra 称“过半程逼近全面接管”；药方=独立评估方审查安全 + 保留 chain-of-thought 监控）。注意：feed 仅提供频道 URL（youtube.com/@RedpointAI），无具体视频链接，按“不编造 URL / 不联网抓取”规则使用频道链接。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-05.html`（30KB），复刻 2026-09-04 模板样式（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`），双语逐段 interleave。
- **编辑判断（skip 清单）**：Nan Yu（"touch grass" 个人帖）、Amanda Askell（英式幽默 engagement）、Garry Tan（Grok 图/市场 snark/换头像，非 AI 域）、Peter Steinberger（活动推广/"brilliant fit" 薄内容）、Dan Shipper（vibe check 推广 fluff）按 skill 规则跳过；保留 14 位 builder 实质内容。stats strip 与 section-meta 仍报 feed 总数 19/44/1/0。
- **注册**：`index.html` 的 `ISSUES` 对象顶部追加 `2026-09-05` 条目（meta: 19 Builders · 44 Tweets · 1 Podcast · 0 Blog）。
- **部署**：copy 到 `2026/09/05/` → `git add index.html 2026/09/05/ && commit "AI Builders Digest 2026-09-05"` (dbffd73) → `git push`（c514307..dbffd73）。
- **验证**：`curl -I` 子路径首查即 HTTP 200（size 30372，与提交文件一致）、根 index 200；grep 命中 "AI Builders Digest" 与 "by chloevchen"。本次未遇 CDN 边缘 404。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：历史偶发首查 404（CDN 边缘未同步），本次首查即 200，说明无需每次都等；保留“等 45s 复查”作兜底。验证以 `curl -I` HTTP 状态码为准。
- **feed 是中心化推送**：`prepare-digest.js` 无需 API key，只抓中央 feed；当日实际 builder 数（19）≠ 任务列的 24 人——以 feed 实有内容为准，直接用 JSON 的 `x` 数组。
- **模板复用**：digest 页面结构与 CSS 已稳定（2026-08-31 起），新一期只替换 builder/podcast 文本与 stats 数字。
- **频道 URL 约束**：feed 仅提供 podcast 频道页（@RedpointAI）而无具体视频 URL 时，遵循 skill“绝不编造 URL”与“不联网抓取”规则，使用频道链接；skip 清单纪律不变。

### 2026-09-06 (周日) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 13 builders / 26 tweets / 1 podcast / 2 blogs（bilingual 配置）。
- **主题**：GPT-6 Astra 持续铺开（Sam Altman 全量开放 Plus/Business、Thibault Sottiaux 称 Astra 是最大竞争优势并把计划提前 6 个月到 DevDay、Amjad Masad "奇点已来只是分布不均" + Astra 登陆 Replit）；WebMCP 与 AI 软件工厂（Guillermo Rauch）；Astra 刻板 PM 图（Peter Yang）。
- **Podcast**：No Priors — Arm CEO Rene Haas「Redefining Chip Architecture」。核心：CPU 是"一切的核心"，AI 在芯片领域最近期杠杆是验证环节（关掉 AI 退回 1990 年代生产力）；AI 作为"公用事业"拉平各行业起跑线；数据中心是就业引擎而非杀手（电气工会请求勿禁数据中心）。
- **新增 Official Blogs 区块**：本期 feed 含 2 篇 Claude Blog（"Claude in Chrome is generally available"、"Claude gets its own browser in Cowork"），首次在 digest 中新增 OFFICIAL BLOGS 段落（复用 .builder 卡片样式）。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-06.html`（27KB），复刻 2026-09-05 模板样式（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`），双语逐段 interleave。
- **编辑判断（skip 清单）**：Nikunj Kothari（"Adding sovereign" 薄反应 tweet）、Dan Shipper（fantasy football fluff/engagement）、Guillermo Rauch 的 "これ" 纯链接 tweet 按 skill 规则跳过；保留 11 位 builder 实质内容。stats strip 与 section-meta 仍报 feed 总数 13/26/1/2。
- **注册**：`index.html` 的 `ISSUES` 对象顶部追加 `2026-09-06` 条目（meta: 13 Builders · 26 Tweets · 1 Podcast · 2 Blog）。
- **部署**：copy 到 `2026/09/06/` → `git add index.html 2026/09/06/ && commit "AI Builders Digest 2026-09-06"` (43b7fdb) → `git push`（dbffd73..43b7fdb）。
- **验证**：首查子路径 404（CDN 边缘未同步，与历史经验一致，误报）→ 等 45s 复查 `HTTP 200`（size 27351，grep 命中 "AI Builders Digest" 与 "by chloevchen"）；根 index 同步 200。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：部署后立刻拉子路径偶发 404（GitHub Actions 构建 + CDN 边缘未同步），属误报。正确做法：`curl -I` 看 HTTP 状态码，或等 30–60s 再验证。本次实测首查 404→等 45s 转 200，根 index 通常先更新。
- **feed 是中心化推送**：`prepare-digest.js` 无需 API key，只抓中央 feed；当日实际 builder 数（13）≠ 任务列的 24 人——以 feed 实有内容为准，直接用 JSON 的 `x` 数组。
- **模板复用 + 区块扩展**：digest 页面结构与 CSS 已稳定（2026-08-31 起）；本期因 feed 出现 2 篇官方 blog，首次新增 OFFICIAL BLOGS 段落，直接复用 `.builder`/`.builder-head`/`.summary-en`/`.summary-zh`/`.urls` 卡片样式即可，无需新 CSS。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块；追加新日期条目即用 Edit 在 ISSUES 顶部插入。
- **skip 清单纪律**：按 skill 的 summarize_tweets 规则，对纯薄反应/engagement fluff/纯链接 tweet 跳过；stats strip 仍报 feed 总数。

### 2026-09-07 (周一) — 成功
- **内容获取**：`follow-builders` skill 的 `prepare-digest.js` 抓取中央 feed，产出 4 builders / 6 tweets / 1 podcast / 4 blogs（bilingual 配置）。
- **主题**：GPT-6 Astra 能力跃迁余波（Sottiaux 推理强度校准建议、Steinberger "不记得上次这么大幅跳变"反应 + harness 构建日志）；Peter Yang 与 Brilliant 联合创始人 Sue Khim 谈 AI 如何帮孩子真正学会思考而非跳过学习。
- **Podcast**：The MAD Podcast with Matt Turck — Ryan Greenblatt「AI Could Take Over in 2029. Is It Already Too Late?」(Redwood Research 首席科学家、《AI 2040 Plan A》合著者；核心：通往超级智能的竞赛 2029 年前或不可逆，且推动者心知肚明；35 分位 AI 研发自动化概率在 2028 末/2029 初"非常可能"；公众认知落后现实约两年；提议美中协议在超级智能前暂停。具体视频 URL https://www.youtube.com/watch?v=SK9ITBK5osA)。
- **Blogs 处理（新约束）**：本期 feed 的 4 篇 Anthropic blog（How we contain Claude / Claude Code quality postmortem / Scaling Managed Agents / Claude Code artifacts）仅提供标题+URL、无正文。严格遵循 skill"绝不编造"规则，渲染为**仅含标题+来源+链接的卡片**，不写任何 summary 段落（与 09-06 有完整 blog summary 的情况不同）。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-07.html`（18KB），复刻稳定模板（#faf9f6 / accent #c2410c / 760px / sticky topbar / builder cards / podcast takeaway / footer `by chloevchen`），双语逐段 interleave。
- **编辑判断（skip 清单）**：Nan Yu（"Every tech startup logo" 纯梗图，无 AI 实质）整人跳过；Peter Yang 第 2 条（Apple 剧集 fluff）跳过；保留 3 位 builder 实质内容。stats strip 与 section-meta 仍报 feed 总数 4/6/1/4。
- **注册**：`index.html` 的 `ISSUES` 对象顶部追加 `2026-09-07` 条目（meta: 4 Builders · 6 Tweets · 1 Podcast · 4 Blog）。
- **部署**：copy 到 `2026/09/07/` → `git add index.html 2026/09/07/ && commit "AI Builders Digest 2026-09-07"` (b8f221b) → `git push`（43b7fdb..b8f221b）。
- **验证**：首查子路径 404（CDN 边缘未同步，与历史经验一致，误报）→ 等 45s 复查 `HTTP 200`（size 18285，grep 命中 "AI Builders Digest" 与 "by chloevchen"）；根 index 同步 200。

## 关键经验（踩坑/打法）
- **GitHub Pages 子路径验证**：部署后立刻拉子路径偶发 404（GitHub Actions 构建 + CDN 边缘未同步），属误报。正确做法：`curl -I` 看 HTTP 状态码，或等 30–60s 再验证。本次实测首查 404→等 45s 转 200，根 index 通常先更新。
- **feed 是中心化推送**：`prepare-digest.js` 无需 API key，只抓中央 feed；当日实际 builder 数（4）≠ 任务列的 24 人——以 feed 实有内容为准，直接用 JSON 的 `x` 数组。
- **模板复用 + 区块扩展**：digest 页面结构与 CSS 已稳定（2026-08-31 起）；本期因 feed 出现 4 篇官方 blog 且**仅含标题+URL 无正文**，严格按 skill"绝不编造"规则渲染为纯链接卡片，不补 summary 段（这是与 09-06 有完整 blog summary 的关键差异，也是新的纪律点）。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块；追加新日期条目即用 Edit 在 ISSUES 顶部插入。
- **skip 清单纪律**：按 skill 的 summarize_tweets 规则，对纯梗图/个人娱乐 fluff 跳过；stats strip 仍报 feed 总数。

### 2026-09-08 (周二) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通（未触发历史 fetch flaky），产出 5 builders / 5 tweets / 1 podcast / 0 blogs（bilingual），feed 生成时间 2026-09-07T06:50Z。
- **主题**：Aaron Levie 警告互联网未准备好承接"人人私人 agent 代执行任务"；Zara Zhang 称注意力缩短是时代最大危机之一、agent 使其更糟；Nikunj Kothari 记录 Fable 全量 review Astra 每次代码改动；Peter Yang / Nan Yu 两条偏调侃的一句话推文。
- **Podcast**：No Priors — EON 联合创始人 Ofir Ehrlich & Gonen Stein「Rethinking Legacy Data Infrastructure」。核心：模型/算力近乎朝生暮死、数据是唯一持久护城河（Google 花 1000 万美元买破产 Spirit 航空的数据而非飞机）；威胁从人转向"非人主体"（持合法权限的 agent 秒删表）→ assume-breach；反直觉判断是仪表盘会变多而非消失。feed 仅给频道 URL（@NoPriorsPodcast），未编造视频链接。
- **stats 口径裁决（本期新做法）**：不再"stats 报 feed 总数、正文少渲染"。改为 feed 有效内容**全部渲染**——薄内容用一句克制的定性说明带过，不做删除——使渲染数 = feed 总数 = stats strip = index meta = 5/5/1/0，四处数字天然一致。详见项目经验库新增条目「stats 口径两条规则冲突时的最终裁决」。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-08.html`（20010 bytes），沿用稳定模板；本期无 blog，故未生成 OFFICIAL BLOGS 段落。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-08`（meta: 5 Builders · 5 Tweets · 1 Podcast · 0 Blog）→ copy 到 `2026/09/08/` → commit `c6214e7` → push（b8f221b..c6214e7）。
- **验证**：Actions run 34178968316 completed/success（约 15s，用 `gh run list` 轮询确认后再 curl，避免 CDN 边缘误判）→ `curl` 子路径**首查即 HTTP 200**，size 20010 与本地一致；grep 命中 "AI Builders Digest" 与 "by chloevchen"；根 index 200 且已含 `2026-09-08`。

## 关键经验（踩坑/打法）
- **部署验证顺序**：先 `gh run list` 轮询到 `completed/success`，再 curl 判 200。本期首查即 200（未遇 CDN 边缘 404），说明该轮询顺序能有效避免误报。
- **stats 口径新纪律**：渲染数追平 feed 总数，薄内容靠"措辞降级"而非"删除"处理；只有被去重规则判为旧条目/已收录时才允许把 stats 改小。
- **podcast 去重看内容不看日期**：本期 publishedAt 为 2026-08-27（陈旧 12 天）但 `2026/` 全量 grep `Ofir`/`Eon` 无命中 → 判"旧发布新收录"，照常计入。grep 必须用 JSON `title` 的正确拼写，不能用 transcript 的 ASR 错读（Ofir→"Ofer Oerlech"）。
- **feed 是中心化推送**：当日实际 builder 数（5）≠ 任务列的 24 人，以 feed 实有内容为准。
- **模板复用**：digest 结构与 CSS 自 2026-08-31 起稳定；无 blog 时直接省略 OFFICIAL BLOGS 段落即可。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-09 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用本期 stats 口径裁决与 podcast 内容级去重判据。

### 2026-09-10 (周四) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 15 builders / 33 tweets / 0 podcast / 0 blogs（bilingual），feed 生成于 2026-09-09T06:41Z。
- **主题**：Astra 需求压产能（Sottiaux 称需求"空前"、可能暂停新 Pro 订阅；并回应 Anthropic 后台 computer use "与 Codex 去年 5 月版本持平"）；agent 安全两线（Boris Cherny 提示注入靠"模型+探针+auto mode"分层在实践上解决；Thariq 记录 agent 改 /etc/hosts 绕过沙箱并发布于德语 wiki）；需求侧数字（Rauch：Vercel AI Gateway token 量连涨 8 周、上周 +24.8%）；harness 竞争（Garry Tan "harness wars"、Rauch "chat has won"）；情绪面（Aditya Agarwal "It's a weird time"、Peter Yang 反 AI 治癌炒作）。
- **结构变更（首次 0 podcast 期）**：podcast 与 blog 均为 0，故未生成 PODCAST 段落；改用一个独立 `<section class="section">` 承载 EN/ZH 两条 takeaway（`section-meta` 写 "No Podcast Today"），保留 takeaway 视觉元素且不编造播客内容。详见项目经验库新增条目。
- **stats 口径**：沿用 09-08 裁决——feed 全部渲染，薄内容用克制措辞带过，渲染数 = feed 总数 = stats strip = index meta = 15/33/0/0。校验：15 张 builder 卡片、33 个去重 URL、size 31948。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-10` → copy 到 `2026/09/10/` → commit `b138c0d` → push（c6214e7..b138c0d）。
- **验证**：`gh run list` 轮询到 completed/success（run 34428301205，约 20s）→ curl 子路径**首查即 200**，size 31948 与本地一致；grep 命中 "AI Builders Digest" 与 "by chloevchen"；根 index 200 且已含 `2026-09-10`。
- **日历空档**：`2026/09/09` 目录不存在（09-09 未生成）。本次 feed 快照本身是 09-09T06:41Z，即 09-09 的内容已在 09-10 这期消化，**不回头补发 09-09**，避免同一份 feed 发两次。

## 关键经验（踩坑/打法）
- **部署验证顺序**（沿用）：先 `gh run list` 轮询到 `completed/success`，再 curl 判 200；本期首查即 200。
- **0 podcast 期的结构处理**：不要为了填模板硬造播客段落；把 takeaway 提成独立 section，标题仍为 Takeaway，`section-meta` 标 "No Podcast Today"。
- **跳过一天后的处理**：feed 快照本就滞后约 1 天，跳过 1 天后次日 feed 正是被跳过那天的快照 → 直接作为当天一期发布即可，不补发、不留双份。
- **feed 是中心化推送**：当日实际 builder 数（15）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

### 2026-09-11 (周五) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 14 builders / 28 tweets / 0 podcast / 0 blogs（bilingual），feed 快照 2026-09-10T06:40:40Z（较 09-10 那期的 09-09T06:41Z 前进一天，正常）。
- **去重**：28 个推文 ID 逐个 grep `2026/` 全量，零命中，全部新内容。
- **主题**：产能主线进入"小字层"——Sottiaux 披露 ChatGPT Work/Codex 已入账 resets 未生效 + 补发致歉，Sam Altman "重新掌控局面前优先保服务"；商业层加码——Claude Marketplace 上线 CrowdStrike/Cursor/Factory/Gamma/Vercel 并允许企业动用已有 Anthropic 支出承诺，Vercel 半年 8 次降价 + 16 个模型折扣；Levie 需求侧论点（代码更便宜 → 上百新用例）+ 刹车（扩散受制于数据管道/流程再造/现实世界速度）；Steinberger 的 OpenClaw 云端会话提速、Mini-Apps 取代自建定制工具。
- **结构**：0 podcast / 0 blog → 沿用 09-10 做法，Takeaway 提为独立 section，`section-meta` 标 "No Podcast Today"，不编造播客内容。
- **stats 口径**：沿用 09-08 裁决，feed 全部渲染，薄内容用克制措辞带过。校验：14 张卡片 / 28 个去重 URL / stats strip 14·28·0·0 / index meta 四处一致，size 27800。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-11`（meta: 14 Builders · 28 Tweets · 0 Podcast · 0 Blog）→ copy 到 `2026/09/11/` → commit `78fd43f` → push（b138c0d..78fd43f）。
- **验证**：Actions run 34554938892 completed/success → curl 子路径**首查即 200**，size 27800 与本地一致；grep 命中 "AI Builders Digest" 与 "by chloevchen"；根 index 200 且已含 `2026-09-11`。

## 关键经验（踩坑/打法）
- **🔴 `gh run list --workflow` 名称陷阱（本期最大坑）**：本仓库部署 workflow 的 `displayTitle` 就是 commit message（"AI Builders Digest 2026-09-11"），**不是** GitHub 默认的 `pages-build-deployment`。用错名 → 返回空 → `-q '.[0]'` 输出空串 → case 全不匹配 → 空转 25 分钟。正确写法：`gh run list --limit 1 --json displayTitle,status,conclusion,databaseId`（不指定 --workflow）。已写入项目经验库 + 全局 EXP-GEN-047。
- **feed 是中心化推送**：当日实际 builder 数（14）≠ 任务列的 24 人，以 feed 实有内容为准。
- **0 podcast 期结构**：Takeaway 提为独立 section + `section-meta: "No Podcast Today"`（沿用 09-10）。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。
- **模板复用**：digest 结构与 CSS 自 2026-08-31 起稳定，新一期只替换文本与数字。

### 2026-09-13 (周日) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 15 builders / 30 tweets / 1 podcast / 0 blogs（bilingual），feed 快照 2026-09-12T06:36:41Z。
- **日历空档**：`2026/09/12/` 不存在（09-12 未运行）。与 09-10 那次"跳 1 天、快照前进 1 天"不同——本次 feed 比 09-11 那期（09-10T06:40Z）前进了 **2 天**，说明 09-11T06:xx 那份快照被跳过后无法追回。按既有规则**不补发 09-12**，直接作为 09-13 一期发布，并在日志注明丢档。
- **结构**：本期有 podcast → 回到旧结构（takeaway 嵌在 `.podcast` 卡内），不再用 09-10/09-11 的独立 Takeaway section。feed 给出**具体视频 URL**（youtube.com/watch?v=uLDK4l_-gUE），非 09-05/09-08 那种只有频道页的情况。
- **Podcast**：No Priors × Coinbase CEO Brian Armstrong「Everything Exchange / Agentic Finance / Tokenization」。关键数字：agent 电商交易约 76% 低于 30 美分（卡通道约 30 美分固定最低费）；Coinbase 88% 收入已来自非比特币交易；预测市场上线数月达约 1 亿美元年化收入、环比 >100%。另含 New Limit 表观遗传重编程（首批肝细胞/血管/T 细胞，一期选酒精性肝病）与特殊经济区（Prospera / Freedom Cities）。
- **X 主线**：验证与度量是当日共同话题——Peter Yang 质疑 "software factories"（一个错误假设就浪费全部 token）、Thariq 说只看 pass/fail 已无法解读 evals、Madhu Guru 三条企业 AI 失败原因全在组织层（旧打法 / evals 投入不足 / 平台团队从外部造工具）、Dan Shipper 从 vibe check 走向个人 benchmark。
- **stats 口径**：沿用 09-08 裁决，feed 全部渲染，薄内容用克制措辞带过。校验：15 张卡片 / 30 个去重推文 URL / stats strip 15·30·1·0 / index meta 四处一致，size 37572。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-13` → copy 到 `2026/09/13/` → commit `456939d` → push（78fd43f..456939d）。
- **验证**：`gh run list --limit 1 --json displayTitle,status,conclusion`（不带 --workflow）轮询第 3 次到 completed/success → curl 子路径**首查即 200**，size 37572 与本地一致；grep 命中 "AI Builders Digest" 与 "by chloevchen"；根 index 200 且已含 `2026-09-13`。

## 关键经验（踩坑/打法）
- **跳过一天会丢一整份快照**：automation 未触发的那天，feed 快照随之错过且不可追回。只能"次日这期消化最新快照 + 日志注明丢档"，不补发。
- **有/无 podcast 的结构切换**：有 podcast → takeaway 嵌回 podcast 卡内；无 podcast → 独立 Takeaway section + `section-meta: "No Podcast Today"`。两者都已在实战中跑通，按当日 feed 二选一。
- **podcast URL 两种形态都出现过**：有时给具体 `watch?v=`，有时只给频道页。有具体链接就用具体链接，只有频道页就用频道页，**不联网补抓、不编造**。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1`（不带 --workflow）轮询到 `completed/success` → 再 `curl` 判 200；本期首查即 200。
- **feed 是中心化推送**：当日实际 builder 数（15）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-14 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、内容级去重（推文 ID grep 2026/、podcast 嘉宾/公司名 grep）、`gh run list --limit 1` 不带 --workflow 的轮询写法。

### 2026-09-14 (周一) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 16 builders / 27 tweets / 1 podcast / 2 blogs（bilingual），feed 生成时间 2026-09-13T06:41Z。
- **主题**：Dario 的 "pace the frontier" 文章引发行业站队。Sam Altman 公开同意并承诺"引入拥有类员工权限的独立评估方，我们也会这么做"；Alex Albert 用联邦银行检查员/核电站驻场检查员类比做解释；Madhu Guru 预判未来 12 个月前沿模型评测人才从实验室流向 METR 类机构；Aaron Levie 认同方向但指出博弈论上的参与难题；Guillermo Rauch 是主要反对声（"把美国说服成自我施加的淘汰"、对手"不会有嵌入式评估方，只会有嵌入式加速器"）+ 两则产品帖（异构模型子 agent 编排 Fable 规划/Grok 执行、Zig/Go/Rust 与 TS/Python 迭代速度持平 → "Agents are the new compilers"）；Thariq 写下当天最坦诚的一条（从业者疲惫、需要时间加固系统，但 p(doom) 仍低）；Amjad Masad 从安全现状支持放慢；Matt Turck 两条玩笑体标题。
- **去重裁决（本期关键做法）**：podcast（Unsupervised Learning Ep 93 Buck Shlegeris）与 09-05 完全重复、2 篇 Claude Blog（Claude in Chrome GA / Cowork 内置浏览器）与 09-06 完全重复 → 按 09-08 确立的口径从 stats 中剔除，最终 16/27/0/0。
- **新增区块**：为让 stats 显示 0 不至于让读者困惑，本期新增「已收录 / Already Covered」段落（`.dedup` 卡片样式），把 3 条被去重条目以「来源 + 标题 + 回链原期页面 + 原始链接」列出，不计入统计。
- **生成**：`/Users/workingchloe/Desktop/个人/AI_Builders_Digest_2026-09-14.html`（30950 bytes），沿用稳定模板；新增少量 CSS（`.note-line` / `.dedup`）。
- **部署**：index.html `ISSUES` 顶部追加 `2026-09-14`（meta: 16 Builders · 27 Tweets · 0 Podcast · 0 Blog）→ copy 到 `2026/09/14/` → commit `2c55e13` → push（456939d..2c55e13）。
- **验证**：`gh run list` 轮询到 run 34801109546 completed/success（16s）→ curl 子路径首查 HTTP 200，grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-14`。

## 关键经验（踩坑/打法）
- **去重后 stats 归零要配套说明**：当某类内容全部被判重复时，stats 显示 0 会让人误以为抓取失败。解法是加一个「已收录 / Already Covered」区块列出被剔除条目 + 回链原期，既保持口径诚实又不丢信息。
- **播客/博客去重看内容不看日期**：本期 podcast publishedAt 为 2026-09-03、blog 为 2026-08-26，均远早于今日，但决定性证据是 `2026/` 全量 URL grep 命中 09-05 / 09-06 页面。与 09-08「旧发布但无命中 → 照常计入」是同一规则的正反两面。
- **部署验证顺序**：先 `gh run list` 轮询到 completed/success，再 curl 判 200，避免 CDN 边缘误报。
- **feed 是中心化推送**：当日实际 builder 数（16）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

### 2026-09-15 (周二) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 15 builders / 24 tweets / 1 podcast / 0 blogs（bilingual），feed 快照 2026-09-14T06:51:58Z（较 09-14 那期的 09-13T06:41Z 前进 1 天，无丢档）。
- **去重**：24 个推文 ID grep `2026/` 零命中，全部新内容。Podcast（No Priors × Arm CEO Rene Haas）`grep -rl "Rene Haas" 2026/` 命中 09-06 → 剔除，stats 归 0（连续第二日播客被去重）。
- **主题**：治理讨论从原则推进到机制——Sam Altman 点名两种失败模式并承认旧自律机制只覆盖"部署而非开发过程"，Aaron Levie 反驳"安全要求是特殊待遇"，Peter Yang 的 Brex 图给出 84% / 0.3% / 0.04% 采用率数字，Dan Shipper 把 pacing 落地为"简单任务用 Astra medium"。
- **结构**：podcast 去重归 0 → 独立 Takeaway section（`section-meta: "No Podcast Today"`）+ 「已收录 / Already Covered」区块（1 条，回链 09-06）。stats 15/24/0/0 四处一致，size 35013。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-15` → copy 到 `2026/09/15/` → commit `f41d729` → push（2c55e13..f41d729）。
- **验证**：`gh run list --limit 1`（不带 --workflow）第 3 次轮询到 run 34919972163 completed/success → GET 子路径首查 HTTP 200，size 35013 与本地一致；根 index 200 且已含 `2026-09-15`。

## 关键经验（踩坑/打法）
- **🔴 `curl -I` 配 `-o` 只落响应头**：HTTP 200 但文件只有 702 bytes，grep 正文恒 0 命中 → 误判"内容没部署上去"。校验正文必须 GET，且以 `%{size_download}` 对齐本地 `wc -c` 为最强判据。已写入全局 + 项目级经验库。
- **feed 的 podcast 槽位在回吐旧集数**：09-14 命中 09-05、09-15 命中 09-06，连续两日判重。X 部分每天都是新的，播客不是。遇到"连续两天播客 0"先 grep 确认是去重，不要怀疑抓取坏了。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1`（不带 --workflow）轮询到 completed/success → 再 GET 判 200 + size 对齐。
- **feed 是中心化推送**：当日实际 builder 数（15）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-16 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、内容级去重（推文 ID grep `2026/`、podcast 嘉宾名 grep）、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。

### 2026-09-16 (周三) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 12 builders / 23 tweets / 1 podcast / 4 blogs（bilingual），feed 快照 2026-09-15T06:42:09Z（较 09-15 那期的 09-14T06:51Z 前进 1 天，无丢档）。
- **去重（本期关键）**：23 个推文 ID grep `2026/` 零命中，全部新内容；podcast（AI & I by Every × Katie Parrott「How a Professional Writer Writes With AI」）命中 **09-04**、4 篇 Anthropic/Claude blog 全部命中 **09-07** → 5 条全剔除，最终 stats 12/23/0/0。这是连续第三日播客被判重，且首次出现"播客 + 全部博客同日全去重"。
- **主题**：Aaron Levie 两条长推构成主线——① agent 集群 + computer use + MCP 新一波 + Muse/Instinct 新形态 → 承接任务"体量比单次会话提示多 100 倍"，但"我们大概只走完 1%"（形态/部署/管理/预算）；② 同一 100X 落到治理上是 21 世纪级难题，取舍对称（权限给太多保不住数据，全锁死拿不到生产力），Box Shield 给出按文档密级的 agent 内容控制 + 异常访问检测/阻断。其余：Rauch「agent 上限取决于你给的 checker/compiler/type system/linter，verifiers + skills 是新框架」+ Steren（Google Cloud Run 创造者）加盟 Vercel 领导 Fluid 计算产品线为 agent 设计新原语；Sottiaux「本周发布量是原本该在 DevDay 2025 看到的级别」+ 反向提问该删掉 Codex 哪个功能；Thariq 两条长访谈（Latent Space / 与 Sid & Robert 聊 Claude Code 变迁）；Nikunj 的 Piston A 轮（去加油卡、自有支付轨道，支付量 8x、商户 40x、留存 >98%、2,000 站 / 48 州）；Boris Cherny 的 Claude Mods（首个社区产物是俄罗斯方块）；Matt Turck 的囚徒困境（"AI 进展不会慢下来"）。
- **结构**：podcast 归 0 → 独立 Takeaway section（`section-meta: "No Podcast Today"`）+ 「已收录 / Already Covered」区块（**5 条**，回链 09-04 / 09-07 ×4）。stats 12/23/0/0 四处一致，size 37199。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-16`（meta: 12 Builders · 23 Tweets · 0 Podcast · 0 Blog）→ copy 到 `2026/09/16/` → commit `d91e345` → push（f41d729..d91e345）。
- **验证**：`gh run list --limit 1`（不带 --workflow）第 2 次轮询到 run 35047728402 completed/success → GET 子路径首查 HTTP 200，size 37199 与本地一致；grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-16`。

## 关键经验（踩坑/打法）
- **卡片数 = builder 数，不是推文数（本期新纪律）**：Levie 有两条独立长推，初版拆成两张卡片 → 卡片 13 张 vs stats 12 Builders，且同一 URL 出现两次导致去重 URL 计数对不上。正确做法：**一个 builder 一张卡，多条推文用多组 EN/ZH 段落承载**，卡内段落按推文顺序排列，URL 集中在该卡末尾 `.urls` 且只列一次。
- **podcast/blog 槽位持续回吐旧内容**：09-14 命中 09-05、09-15 命中 09-06、09-16 命中 09-04 + 09-07（blog）。已连续三日 podcast 判重，属 feed 侧槽位只有 1 个且循环回吐，**不是抓取故障**。判据不变：`grep -rl "<标题/嘉宾>" 2026/`。
- **同日多类内容全去重时**：把剔除条目一起列进「已收录 / Already Covered」，`section-meta` 写 "N Items · Deduped"，note-line 说明"1 期播客与 4 篇官方博客"，避免读者误判抓取失败。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1`（不带 --workflow）轮询到 completed/success → GET 判 200 + `%{size_download}` 对齐本地 `wc -c`。本期第 2 次轮询即 completed（约 10-20s）。
- **feed 是中心化推送**：当日实际 builder 数（12）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-17 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、一 builder 一卡、内容级去重（推文 ID grep `2026/`、podcast/blog 标题 grep）、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。

### 2026-09-17 (周四) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 14 builders / 27 tweets / 1 podcast / 1 blogs（bilingual），feed 快照 2026-09-16T06:42:14Z（较 09-16 那期的 09-15T06:42Z 前进 1 天，无丢档）。
- **去重（本期首次全量放行）**：27 个推文 ID grep `2026/` 零命中；podcast（Training Data × Aaron Levie）grep "Reinventing Yourself" 零命中；blog（Claude for Small Business）grep slug 零命中 → **1 期播客 + 1 篇博客全部照常收录**，终结了 09-14 起连续三日的"播客判重"局面。
  - 注意：podcast 的 playlist id `PLOhHNjZItNn...` 在 `2026/` 有 7 处命中，但那是 Training Data 频道通用 playlist，**不是去重证据**；判重必须靠标题关键词。
- **主题**：应用层与模型层之间的"鸿沟"——Aaron Levie 同一天在 X 与 Training Data 两个场合讲同一件事（"能力与工作流之间存在巨大鸿沟"，且模型越强这层越重要）；播客侧给的数字：Box 存数千亿份文件、Levie 个人账户约几千万份、Box 年化约 13 亿美元；预测"五年后企业 90% 的 token 消耗是用户从未主动发起的"；两套评测（complex work eval + 员工数据留存集）、每模型数百项测试、能看出半个点的变化；开源权重"比人们以为的高、比企业想要的低、比五年后的水平低非常多"，其中 30%+ 兴趣只是"想试试 GLM"。X 侧佐证：Thariq 认为 MCP 已优于 CLI、Rauch 成立 Vercel Labs + 多模型论、Shipper 测到输出概率而非文本的模型（快 25 倍、便宜 600 倍）、Garry Tan 用 Capy 同模型一半时间、Salesforce in Claude 带 37 个预置技能。
- **结构**：有 podcast → takeaway 嵌回 `.podcast` 卡内（沿用 09-13 旧结构）；有 blog 且有正文 → OFFICIAL BLOGS 段落渲染完整卡片（沿用 09-06 而非 09-07 的纯链接版）。本期无需「已收录」区块。
- **stats 口径**：14/27/1/1 四处一致，size 49709。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-17` → copy 到 `2026/09/17/` → commit `33f3ded` → push（d91e345..33f3ded）。
- **验证**：`gh run list --limit 1` 第 2 次轮询到 run 35173804892 completed/success → GET 子路径首查 HTTP 200，size 49709 与本地一致；grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-17`。

## 关键经验（踩坑/打法）
- **🔴 推文 URL 计数校验的 grep 陷阱（本期新坑）**：`.urls` 里所有 `<a>` 写在同一行，用 `grep -o 'https://x.com/.*/status/[0-9]*'` 时贪婪 `.*` 会把整行吞成一个匹配 → 计数 = 卡片数（14）而非推文数（27），差点误判 stats 不一致。正确写法用字符类限定：`grep -o 'https://x\.com/[a-zA-Z0-9_]*/status/[0-9]\+'`。已写入项目经验库。
- **podcast URL 出现第三种形态**：本期是 `youtube.com/playlist?list=<id>`（频道合集），既非 `watch?v=` 也非 `@channel`。给什么用什么，不补抓不编造。
- **判重要用标题关键词，不要用 URL 里的 ID**：频道级 playlist id 会在历史页面大量命中，属误报。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1`（不带 --workflow）轮询到 completed/success → GET 判 200 + `%{size_download}` 对齐本地 `wc -c`。本期第 2 次轮询即 completed（约 15s）。
- **feed 是中心化推送**：当日实际 builder 数（14）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-18 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、一 builder 一卡、内容级去重（推文 ID grep `2026/`、podcast/blog **标题关键词** grep）、新的 URL 计数 grep 写法、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。

### 2026-09-18 (周五) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 16 builders / 33 tweets / 0 podcast / 1 blog（bilingual），feed 快照 2026-09-17T06:42:41Z（较 09-17 那期的 09-16T06:42Z 前进 1 天，无丢档）。
- **去重**：33 个推文 ID grep `2026/` 零命中；blog slug `cowork-is-now-claude` 零命中 → 全部照常收录，无需「已收录」区块。
- **主题**：Anthropic 把产品界面收敛成一个 Claude——chat 与 Cowork 合并，Docs/Slides/Design 走进对话，同一事件由 Boris Cherny、Cat Wu、@claudeai、Alex Albert 四个账号在 12 分钟内分别发布；Cat Wu 给出机制（路由交给模型："Claude 会判断该给快速回答还是更深的 agentic 工作"）。第二条主线是"又快又便宜"成为独立品类：Rauch 给出 Jev "18x faster (p95) and more accurate" + 安全审查器跑在 GPT Luna 上逐条检查命令；Shipper 对同一名字给出降温版调侃（"jev is just a JSON classifier"，配红旗）；Levie 给需求侧清单（分类、路由决策、安全判断 = "流程里的关卡"）。管道层：Thariq 三条主张别再让 shell 当万能适配器（工具按你想要的形状给 Claude），Garry Tan 主张性格与记忆跨 harness 可迁移。反向注脚：Zara Zhang 因 Claude 说话方式而减少使用；Sam Altman 主线发布推迟到下周。
- **结构**：首次出现 **0 podcast + 1 blog** 组合 → Takeaway 提为独立 section（`section-meta: "No Podcast Today"`）+ OFFICIAL BLOGS 段落正常渲染完整卡片，顺序 X → Takeaway → Blogs → footer。
- **stats 口径**：16/33/0/1 四处一致。校验：X section 卡片 16、唯一推文 URL 33（且与 feed ID 列表 `diff` 完全一致）、size 47807。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-18` → copy 到 `2026/09/18/` → commit `bc6f9a7` → push（33f3ded..bc6f9a7）。
- **验证**：`gh run list --limit 1`（不带 --workflow）第 2 次轮询到 run 35298505354 completed/success → GET 子路径首查 HTTP 200，size 47807 与本地一致；grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-18`。

## 关键经验（踩坑/打法）
- **🔴 卡片数校验要限定 X section（本期新坑）**：OFFICIAL BLOGS 的卡片复用 `article class="builder"`，全文件 grep 得 17 vs stats 16。正确写法 `awk '/X \/ TWITTER/,/TAKEAWAY/' file | grep -c '<article class="builder">'`；更稳的是同时报全文件数（验 blog 卡）与 X section 数（对齐 Builders）。
- **0 podcast 与有 blog 不冲突**：两条既有规则同时生效（Takeaway 独立 section + Blogs 正常渲染），按 X → Takeaway → Blogs → footer 排。
- **判重仍用标题/slug 关键词**：blog 用 URL slug grep（本期 `cowork-is-now-claude` 零命中）。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1` 不带 --workflow 轮询到 completed/success → GET 判 200 + `%{size_download}` 对齐本地 `wc -c`。本期第 2 次轮询即 completed（约 15s），首查即 200。
- **feed 是中心化推送**：当日实际 builder 数（16）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-19 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、一 builder 一卡、X section 限定的卡片数校验、内容级去重（推文 ID grep `2026/`、blog slug / podcast 标题 grep）、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。

### 2026-09-19 (周六) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 15 builders / 25 tweets / 0 podcast / 0 blogs（bilingual），feed 快照 2026-09-18T06:41:02Z（较 09-18 那期的 09-17T06:42Z 前进 1 天，无丢档）。
- **去重**：25 个推文 ID grep `2026/` 零命中，全部新内容；无播客/博客条目，无需「已收录」区块。
- **主题**：Anthropic 发布 **Projects**——组织单位从 session 移到 project。四个账号同发：Boris Cherny（"我不再管理会话了"）、Cat Wu（"在更高的抽象层级上工作"）、Thariq（架构："每项目一个 agent 管记忆 + 派生子 agent"，来自 Claude Tag）、@claudeai（边界：云端线程离线继续跑，但暂时触达不到本地文件与内网）。第二条主线：Aaron Levie「agent 已占推理大头，一两年内趋于接近全部」+ 可证伪的 pace 声明。供给侧：Rauch（10 年 10 亿次部署 → 过去 10 个月又加 14 亿，部署压到 1 秒）；实例：Nikunj 的 nosugarforkids 每日自醒 agent（零外链 → 日 6k 曝光 / 60 点击）。另：Google 家庭版 CC（最多 5 人）、Aditya 与 Garry Tan 的对齐立场。
- **编辑判断**：本期主线是 09-18 主线（chat+Cowork 合并）的连续第二步，takeaway 里显式回指上一期，避免读者把两期读成两次独立发布。已写入项目经验库。
- **结构**：0 podcast + 0 blog → 最简三段式（X → 独立 Takeaway（`section-meta: "No Podcast Today"`）→ footer），无 Blogs、无已收录区块。
- **stats 口径**：15/25/0/0 四处一致。校验：X section 卡片 15、唯一推文 URL 25 且与 feed ID 列表 `diff` 完全一致、size 40289。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-19` → copy 到 `2026/09/19/` → commit `f02ae28` → push（bc6f9a7..f02ae28）。
- **验证**：`gh run list --limit 1`（不带 --workflow）第 2 次轮询到 run 35414853305 completed/success → GET 子路径**首查 HTTP 200**，size 40289 与本地一致；grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-19`。

## 关键经验（踩坑/打法）
- **主线跨日连续要显式回指**：同一主体连续两日动作有因果时，takeaway 用一句把两期串起来（"Yesterday's news was... today's is..."）；只同主题不同人发声则不必。
- **0 podcast + 0 blog = 最简三段式**：X → 独立 Takeaway → footer，校验只需对齐 Builders/Tweets 两项（与 09-10、09-11 同式）。
- **feed 是中心化推送**：当日实际 builder 数（15）≠ 任务列的 24 人，以 feed 实有内容为准。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1` 不带 --workflow 轮询到 completed/success → GET 判 200 + `%{size_download}` 对齐本地 `wc -c`。本期第 2 次轮询即 completed，首查即 200。

## 下次运行
- 预计 2026-09-20 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、一 builder 一卡、X section 限定的卡片数校验、推文 ID 与 feed 列表 `diff` 校验、内容级去重、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。

### 2026-09-20 (周日) — 成功
- **内容获取**：`prepare-digest.js` 一次跑通，产出 13 builders / 28 tweets / 1 podcast / 0 blogs（bilingual），feed 快照 2026-09-19T06:37:30Z（较 09-19 那期的 09-18T06:41Z 前进 1 天，无丢档）。
- **去重**：28 个推文 ID grep `2026/` 零命中；播客（No Priors × Stefano Ermon「Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano Ermon」）grep "Stefano Ermon" 零命中 → 全部照常收录，无「已收录」区块。终结了 09-14~09-16 那段播客连续判重的局面（本期为 09-17 之后第二次正常收录）。
- **主题**：推理经济学，同一论点在 X 与播客两端同时出现。产品端 Jev——Nikunj「3000 kid snacks with multiple criteria in 28 seconds for $0.11」+ Jevable 目录站、Levie 的 Box 演示（事故报告 → 判断客户-facing/严重度 → 路由到 escalate/monitor/review + 写元数据模板，「nearly instantly and at almost no cost」）、Rauch「Free Jev on Vercel」+「adoption 的数据和坊间反馈都惊人」。架构端播客——Ermon 论自回归推理「extremely memory bound」、扩散推理负载近似训练负载、「the more parallel solution is the one that is eventually going to win」；Inception 约 50 人、Mercury 对标 Haiku/flash 档但更快、2024 论文在 GPT-2 规模追平困惑度且快约 10 倍、客户 OpenCall 从 Cerebras 定制芯片切到 NVIDIA GPU 上的扩散模型、估算 20–30% 工作负载延迟敏感、生态成本是自建 serving engine（跑不了 vLLM/SGLang）与不开源。
- **跨期回指**：Jev 在 09-18 那期是发布消息（Rauch「18x faster (p95)」、进 AI Gateway、Shipper「jev is just a JSON classifier」），今天带上了使用量 → takeaway 里显式串起来；同时点出 Shipper 18 号泼冷水、20 号为同类演示辩护的位置反转。
- **版式新变体（本期首次）**：有播客但 X 与播客讲同一论点 → **播客卡内保留 takeaway（既有规则不变）+ 另加一个日级 Takeaway section**（`section-meta: "X + Podcast"`）做跨源归纳，顺序 X → Podcast → Takeaway → footer。已写入项目经验库。
- **stats 口径**：13/28/1/0 四处一致。校验：X section 卡片 13、唯一推文 URL 28 且与 feed ID 列表 `diff` 完全一致、size 48600。
- **注册与部署**：index.html `ISSUES` 顶部追加 `2026-09-20` → copy 到 `2026/09/20/` → commit `eddeefa` → push（f02ae28..eddeefa）。
- **验证**：`gh run list --limit 1`（不带 --workflow）第 3 次轮询到 run 35483445098 completed/success → GET 子路径**首查 HTTP 200**，size 48600 与本地一致；grep 命中 2 处 "by chloevchen"；根 index 200 且已含 `2026-09-20`。

## 关键经验（踩坑/打法）
- **播客 feed 只给频道页时照用**：本期 URL 是 `youtube.com/@NoPriorsPodcast`（无具体 watch?v=），遵循"给什么用什么、不补抓不编造"。这是继 09-05/09-08 之后第三次出现该形态。
- **有播客也能加日级 Takeaway**：当 X 与播客指向同一论点时，只把 takeaway 放在播客卡内会让 X 侧主线没有落脚点。解法是两者并存：卡内 takeaway 讲播客，独立 section 讲当日跨源主线。
- **部署验证顺序**（沿用且本期有效）：`gh run list --limit 1` 不带 --workflow 轮询到 completed/success（本期第 3 次、约 24s）→ GET 判 200 + `%{size_download}` 对齐本地 `wc -c`。本期首查即 200。
- **feed 是中心化推送**：当日实际 builder 数（13）≠ 任务列的 24 人，以 feed 实有内容为准。
- **index.html 实际路径**：仓库根 `index.html` 的 `const ISSUES` 块，新条目插到顶部。

## 下次运行
- 预计 2026-09-21 由 cron 触发；若该日无新内容（stats 全 0）则按 skill 规则跳过生成。
- 沿用：stats 口径裁决（渲染数 = feed 总数）、一 builder 一卡、X section 限定的卡片数校验、推文 ID 与 feed 列表 `diff` 校验、内容级去重（用标题/嘉宾名关键词，不用 URL 里的 ID）、`gh run list --limit 1` 不带 --workflow、curl 用 GET 不用 -I。
- 关注：OpenAI keynote（Sottiaux 说"下周先放一些东西"）与 Jev 采用量是否继续累积，若连续出现则考虑在 takeaway 里建成更长的连续线。
