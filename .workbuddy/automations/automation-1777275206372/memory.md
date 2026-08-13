# AI Builders Digest 日报自动化 — 执行记忆

## 最近执行记录

### 2026-08-03（自动执行 10:00 Asia/Shanghai）
- 内容获取：13 Builders · 19 Tweets · 1 Podcast · 0 Blog
- `feedGeneratedAt = 2026-08-02T07:09:46Z`（滞后 1 天快照，但与 8/2 的 08-01T07:07 快照不同源，内容已刷新，非冻结）
- prepare-digest.js 首次运行即成功（95KB），未触发兜底
- Blog 判定：feed 唯一 blog 为 "How we contain Claude across products"（无 publishedAt），已于 **6/05、6/21、6/30** 三次收录 → 判为长期滞留旧条目，Blog 计 0
- 主线（与 8/2 的 harness 主题不同）：**AI 价值落点分叉**（Levie 深纵深领域垂直起飞 vs 日常生活几乎无感 / Dan Shipper AI 给专家「创造」而非减少工作 / Nikunj Kothari 模型解 NP 难题但企业还在争 token ROI，结论「未来几十年做的全是扩散落地」）
- 其他亮点：Karpathy 用《指环王》首段 + 1M token 让 Opus 5 跑 2 小时写 5500 行 three.js；Nan Yu 提议 issue 抵押 token（发起人付算力费）治理 slop PR；Garry Tan 称 2026 最大风向变化是 OpenAI 反而更像开放平台；Swyx 转「以 slop 治 slop」——slop 容忍度比反 slop 值钱 100 倍；Peter Yang 吐槽 Opus 5 不如 4.6（Claude 腔重/判断感强）
- Podcast：No Priors — Netic 创始人 Melisa Tokmak（前 Scale AI）：真实世界服务业 autonomous enterprise；70%+ 客户 AI-first；已为客户创造 $600M+ 收入；「实验室能不能自己做」= 十年前的「Google 能不能自己做」；批研究者「等 AGI 再解基础服务业」是运营和智识上都偷懒；三层（模型/harness+编排/产品）都要好；招人只看「持续一生的 agency」
- 生成方式：Python 脚本 `/tmp/gen_digest_0803.py`（双语 remix + URL 动态取自 JSON + 自检断言：20/20 链接真实、0 伪造、f-string 占位符零残留）
- ⚠️ 脚本自检踩坑：初版写了一个无意义断言（检查 CSS 里有无 `{`，CSS 必然含花括号）→ 首跑即 AssertionError。已改为正则扫描 `</style>` 之后正文的未解析 f-string 占位符，这才是有效校验
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit b4352aa
- 文件：`2026/08/03/AI_Builders_Digest_2026-08-03.html`

### 2026-08-02（自动执行 10:00 Asia/Shanghai）
- 内容获取：13 Builders · 21 Tweets · 1 Podcast · 0 Blog
- `feedGeneratedAt = 2026-08-01T07:07:44Z`（滞后 1 天快照，但与 8/1 的 07:16 快照不同源，内容已刷新，非冻结）
- prepare-digest.js 首次运行即成功（109KB），未触发兜底
- Blog 判定：feed 唯一 blog 为 "Claude Code now supports artifacts"（Jun 18），7/8 已收录 → 不重复计入，Blog 计 0
- 主线：harness / agent loop 高度收敛（Levie harness 是仅次于模型能力的变量 / Rauch Issue→Agent→PR→Release 工厂循环 / Nan Yu 实测 30% bug 跑完整链路 + Datadog·Sentry MCP 取证 / Garry Tan YC harness 开源 / Steinberger 5.5 后不用排队 / Swyx 仍用 /loop /goal / Zara Zhang Anthropic 65% PR 由 Claude Tag 提出）
- Podcast：Unsupervised Learning Ep 92 — Igor Babushkin（xAI 联创，新公司 River）：闭源两头被夹（做太好不许发 vs 开源每月逼近）、训练边际递减已近临界、企业该自训（领域纵深）、River 三赌注（RL/微调 API + 个体个性化「推荐系统×agent」+ 本地硬件跑前沿模型）
- 生成方式：Python 脚本 `/tmp/gen_digest_0802.py`（双语 remix + URL 动态取自 JSON + 自检断言：21/21 链接真实、0 伪造）
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit d7399db
- 文件：`2026/08/02/AI_Builders_Digest_2026-08-02.html`

### 2026-08-01（自动执行 10:00 Asia/Shanghai）
- 内容获取：15 Builders · 35 Tweets · 1 Podcast · 0 Blog
- `feedGeneratedAt = 2026-07-31T07:16:44Z`（滞后 1 天的旧快照，非冻结；stats 通过照常生成）
- prepare-digest.js 首次运行即成功（104KB），未触发 fetch 兜底
- Podcast：The MAD Podcast w/ Matt Turck — "The Biggest AI Deployment Nobody Talks About" — Samsara CEO Sanjit Biswas；physical AI / 数据网络效应 / 边缘推理 / 人机混合现场作业 / 实体经济电网数据
- 重点推文：Sam Altman、Aaron Levie、Amjad Masad、Guillermo Rauch、Swyx、Zara Zhang、Thibault Sottiaux、Matt Turck、Aditya Agarwal、Dan Shipper、Peter Yang、Peter Steinberger、Josh Woodward、Garry Tan、Nikunj Kothari（共 35 条带真实 URL）
- 生成方式：Python 脚本 `/tmp/gen_digest_0801.py`（双语 remix + 真实 URL 校验：15 builders / 35 urls 全部渲染）
- 部署状态：✅ HTTP 200（首次轮询命中），commit 8cb5195
- 文件：`2026/08/01/AI_Builders_Digest_2026-08-01.html`
- 注：7/27–7/31 及 8/1 当日无独立 digest（中央 feed 滞后，按既有打法以最新快照生成 8/1 条目）

### 2026-07-26（自动执行 10:00 Asia/Shanghai / 手动续跑）
- 内容获取：14 Builders · 31 Tweets · 1 Podcast · 3 Blogs
- `feedGeneratedAt = 2026-07-26T07:10:56Z`（当日新鲜快照，非冻结）
- prepare-digest.js 首次运行即成功（149KB），无需健壮兜底脚本
- Podcast：Unsupervised Learning Ep 91 — Benedict Evans 谈 AI 炒作周期：瓶颈不是模型能力而是「识别并描述可自动化任务」的能力；多数人非工具构建者；企业 AI 卡在一次一个痛点的 pilot；企业转型/咨询承接重活
- Blog（3 篇均 Anthropic 系）：① April-23 postmortem（Claude Code/SDK/Cowork 三处回退已 4/20 修复）② Managed Agents 脑手解耦（harness 假设会过期、context anxiety）③ Managed Agents 自托管沙箱 + MCP 隧道
- 重点推文：Guillermo Rauch（工厂优先于 prompt，软件工厂即产品）、Thibault（ChatGPT Work 活跃超 Codex）、Madhu Guru（美国 AI 圈快速收敛到开源权重）、Aaron Levie（Google 加入=开源权重彻底背书）、Peter Steinberger（12 子 agent 端到端 QA 目标 200 bug）、Nan Yu（SoftwareFactoryFactory）
- 生成方式：Python 脚本 `/tmp/gen_digest_0726.py`（双语 remix + 真实 URL + 3 Blog 多 post 布局）
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit 3bac9e3
- 文件：`2026/07/26/AI_Builders_Digest_2026-07-26.html`
- 缺口：7/24–7/25 未生成（周末/自动化间隔）

### 2026-07-23（自动执行 10:00 Asia/Shanghai）
- 内容获取：17 Builders · 36 Tweets · 1 Podcast · 1 Blog
- `stats.feedGeneratedAt = 2026-07-22T07:11Z`（昨日快照，stats 通过则照常生成）
- Podcast：Training Data — Factory CEO Matan Grinberg 谈「暗工厂」/ droids 自主构建 / 按任务路由 / 90% token 将异步化
- Blog：Claude Blog — Claude 支持 Apple Foundation Models 框架
- 生成方式：Python 脚本 `/tmp/gen_digest_0723.py`（双语 remix + 真实 URL）
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit 055f246
- 文件：`2026/07/23/AI_Builders_Digest_2026-07-23.html`

### 2026-07-22（手动续跑 / 自动任务）
- 内容获取：14 Builders · 29 Tweets · 1 Podcast · 0 Blog
- feedGeneratedAt: 2026-07-21T07:10Z（快照滞后 1 天，距 7/13 上次 digest 已 9 天间隔）
- Podcast：No Priors — Glenn Fogel（Booking Holdings CEO）谈 moat 不存在、Penny agentic 旅行助手每月翻倍、$700M AI 投资、AI 客服降本 10%
- 重点推文：Aaron Levie（Cursor 多模型 routing 15X 降本）、Madhu Guru（AGI 靠经济价值任务铺路）、Zara Zhang（两轮面试结构 + 后 coding agent 时代公司形态）、Nikunj Kothari（AI 无 moat 时资本不是替代品）、Guillermo Rauch（万物皆代码）
- 生成方式：Python 脚本 `/tmp/gen_digest_0722.py`（读取 JSON + 手工 remix 双语总结）
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit b205cd5
- 文件：`2026/07/22/AI_Builders_Digest_2026-07-22.html`

### 2026-07-08（自动执行，11:04 续跑）
- 内容获取：16 Builders · 34 Tweets · 1 Podcast · 1 Blog
- ⚠️ Feed 快照冻结于 2026-07-07T07:28Z（中央 feed 滞后一天），推文/播客均为 7/7 内容
- Podcast：AI & I by Every — Edwin（Surge CEO）谈「AGI 的学校」隐喻（数据/eval 即育人，靠品味差异化，不融资做到 ~$1B）
- Blog：Claude Blog — "Claude Code now supports artifacts"
- 重点：Claude Code 起源故事周（Boris Cherny/Cat Wu/Thariq/Claude）、Amjad Masad（Replit 自我改进闭环）、Guillermo Rauch（eve eval）、Nan Yu（agent 杠杆曲线 vs 996）
- 生成方式：Python 脚本 /tmp/gen_digest_0708.py（结构化双语 remix + 真实 URL）
- 部署状态：✅ HTTP 200（轮询第 2 次命中），commit 313aa01
- 文件：`2026/07/08/AI_Builders_Digest_2026-07-08.html`
- 缺口：7/4–7/7 连续 4 天未生成（自动化中断/周末）

### 2026-07-12（自动执行 10:00 Asia/Shanghai）
- 内容获取：10 Builders · 19 Tweets · 1 Podcast · 0 Blog
- `feedGeneratedAt = 2026-07-12T01:19Z`（当日新鲜快照，非冻结/重复，与 7/8 不同源）
- Podcast：The MAD Podcast w/ Matt Turck — Emily Sense（Stripe 数据与 AI 负责人）谈 agentic commerce：ACP 协议、L1–L3 自主度、令牌窃取（>1/6 注册为滥用）、Link Wallet、美国 500 万单人创业潮
- 重点推文：Sam Altman（AI 净创造就业、GPT-5.6 医学回答瑕疵少于医生手写）、Aaron Levie（企业 AI = 重构操作层而非聊天工具）、Thibault Sottiaux（Codex 单日增长>前两周总和）、Aditya Agarwal（云端 agent + 递归自改进循环）
- ⚠️ 获取层故障：原始 `prepare-digest.js` 用 `Promise.all` 无重试，部分远程 URL（`feed-blogs.json`/`prompts/translate.md`）间歇性 `fetch failed`（curl=000）导致整次失败 2 次。改用自写 `/tmp/fb-prepare-robust.mjs`（逐 URL 重试 6 次 + 本地兜底）后成功（103KB）
- 生成方式：Node 生成脚本 `/tmp/gen_digest_0712.mjs`（双语 remix + 动态从 JSON 取真实 URL，避免伪造链接）
- 部署状态：✅ HTTP 200（首次轮询命中），commit ad59ae9
- 文件：`2026/07/12/AI_Builders_Digest_2026-07-12.html`

### 2026-07-02（手动补做）
- 自动化任务在 6/30 后停止运行，7/1 和 7/2 均未自动执行
- 手动加载 follow-builders skill + 运行 prepare-digest.js 补做
- 内容获取：17 Builders · 35 Tweets · 1 Podcast · 0 Blog
- Podcast：AI & I by Every — Natalia（Every head of consulting）讲内部 AI agent Claudie 工作流
- 重点推文：
  - Aaron Levie（Box CEO）：Devin agentic mapreduce，100x AI inference 需求
  - Guillermo Rauch（Vercel CEO）：WordPress on Vercel Fluid + agentic deployment dry-run
  - Amjad Masad（Replit CEO）：从"构建容易"转向"帮创业者进入市场"，Replit + Whop 合作
  - Garry Tan（YC CEO）：Anthropic 挖角 UC Berkeley EECS 负责人
  - Nikunj Kothari（FPV Ventures）：OpenAI/Anthropic 人才虹吸效应
  - Peter Yang：Claude Fable 5 vibe check + 5用例教程
  - Matt Turck（FirstMark）：Lime 上市分析
  - Zara Zhang：Skill 构建方法论 + Codex 换 GLM 模型
  - Aditya Agarwal：SF 乐观主义文化
- 部署状态：✅ HTTP 200
- 文件：`2026/07/02/AI_Builders_Digest_2026-07-02.html`
- 生成方式：手动 Read JSON → Write HTML（非脚本生成）

### 2026-07-03（自动执行）
- 本次为自动化恢复后首次正常自动执行（10:00 Asia/Shanghai）
- 内容获取：17 Builders · 35 Tweets · 1 Podcast · 0 Blog
- ⚠️ 注意：feed 快照冻结于 2026-07-02 07:27 UTC，全部推文 createdAt 为 7/1-7/2、Podcast 为 7/1。即本日 feed 与 7/2 完全相同（中央 feed 未刷新）。
- 处理：按既有打法照常生成并部署，但将 7/2 未渲染的 5 位 builder（Thariq / Thibault Sottiaux / Alex Albert / Peter Steinberger / Dan Shipper）补齐，故 7/3 为该快照更完整的版本（17 位全渲染，7/2 仅 12 位）
- 生成方式：Node 生成脚本（/tmp/gen_digest_0703.js）→ 渲染全部 17 位 builder 双语卡 + Podcast + Takeaway
- 部署状态：✅ HTTP 200，Actions workflow `completed·success`（20s）
- 文件：`2026/07/03/AI_Builders_Digest_2026-07-03.html`
- 建议：Chloe 可评估是否保留 7/3 条目（内容与 7/2 同源，连续两日为同一快照）

### 2026-06-30
- 内容获取：12 Builders · 23 Tweets · 1 Podcast · 1 Blog
- Podcast：The MAD Podcast — Stephen Balaban (Lambda CTO) 谈 GPU 从未商品化、缩放定律无终点、物理层是真正瓶颈
- Blog：Anthropic Engineering — "How we contain Claude across products"（环境隔离、93% 审批疲劳、Claude Opus 4.5 爆炸半径过高）
- 重点推文：
  - Boris Cherny（Claude Code @ Anthropic）：团队五种原型（原型师/建造者/清理者/成长者/维护者），11,598 点赞
  - Thibault Sottiaux（Codex @ OpenAI）：周日作战室排查用量异常，硬重置所有人 Codex 限额
  - Guillermo Rauch（Vercel CEO）：「你不需要 LinkedIn，你需要的是在自己网站上放一个页面」
  - Aaron Levie（Box CEO）：反驳 AI 出口管制，开源模型是必然，限制发布只会让自己落后
  - Peter Yang：Anthropic PM 通过访问代码库深度理解产品；吐槽 Agentforce 不知道是什么
- 部署状态：✅ HTTP 200
- 文件：`2026/06/30/AI_Builders_Digest_2026-06-30.html`
- 生成脚本：`/tmp/genDigest.py`（Python，直接根据 JSON 数据 remix 成双语 HTML）

### 2026-06-28
- 内容获取：15 Builders · 34 Tweets · 1 Podcast · 0 Blog
- Podcast：No Priors — Noam Brown (OpenAI Research Scientist) 谈传统基准测试失效、test-time compute、GPT-5.5 效率提升、安全评估盲点
- 重点推文：
  - Sam Altman 暗示 API 定价重大变化（"not quite all-you-can-eat tokens"）、GPT-5.5 即时模型更新
  - Peter Yang：美国前沿模型 → 开源蒸馏 → 非美公司采用，质疑美国 AI 护城河可持续性；资金流向服务而非纯软件
  - Garry Tan：批评大实验室发布策略正在"salting the ground"扼杀小初创公司创新
  - Dan Shipper：GPT-5.6 访问受美国政府指令限制，仅 ~20 家预批准公司可用
  - Aditya Agarwal：AI 的副作用是对人类肤浅互动零容忍，渴望关系中的深度
- 部署状态：✅ HTTP 200
- 文件：`2026/06/28/AI_Builders_Digest_2026-06-28.html`
- 生成脚本：`/tmp/generate_digest.py`（Python，直接根据 JSON 数据生成双语 HTML）

### 2026-06-27
- 内容获取：14 Builders · 30 Tweets · 1 Podcast · 1 Blog
- Podcast：Cloudflare CEO Matthew Prince（bot流量超人类、AI网关战略）
- Blog：Anthropic Claude + Apple Foundation Models 框架集成
- 重点推文：Aaron Levie(AI监管)、Guillermo Rauch(Vercel AI Gateway)
- 部署状态：✅ HTTP 200
- 文件：`2026/06/27/AI_Builders_Digest_2026-06-27.html`

### 2026-08-04
- 内容获取：12 Builders · 21 Tweets（实际渲染 URL，原始 totalTweets=26，已剔除纯生活/纯链接低质推文）· 1 Podcast · 0 Blog
- feed 生成时间：2026-08-03（prepare-digest.js 拉取，状态 ok）
- Podcast：Training Data — Core Automation 的 Jerry Tworek（前 OpenAI 推理负责人）& Rohan Anil（前 Gemini 预训练负责人），主题：transformer 架构触顶、需要新架构 + 端到端预训练/RL + kernel 生成
- 重点推文：
  - Guillermo Rauch（Vercel CEO）：发布内部 agent @v，既是 agent 也是 router，端到端自主可控；"mastery + creativity + AI hits on a whole different level"
  - Aaron Levie（Box CEO）：最难的工作（数学/安全/代码）因可验证反而最先被自动化，应用层比模型本身更关键
  - Nikunj Kothari（FPV Ventures）：VC 已"完全变成 vibes capital"，预计 12–18 个月内持续
  - Garry Tan：AI 将带来难以想象的经济增长；"别把地图当疆域，市场里结果才是疆域"
  - Dan Shipper：AI 取代任务的"能动性断裂"三阶段模型（初始断裂→看见脚手架→能动性重建）
  - Thariq（Anthropic Claude Code）：数学领域已现杰文斯悖论，对懂数学的人需求会升
- 部署状态：✅ HTTP 200（两次 push：初次 26→修正 21）
- 文件：`2026/08/04/AI_Builders_Digest_2026-08-04.html`
- 生成脚本：`/tmp/gen-digest-0804.js`（Node，按 JSON 数据 remix 成双语 HTML）

### 2026-08-05（自动执行 10:00 Asia/Shanghai）
- 内容获取：10 Builders · 14 Tweets · 1 Podcast · 0 Blog
- `feedGeneratedAt = 2026-08-04T07:11:41Z`（与 8/4 快照不同源，内容已刷新，非冻结）
- prepare-digest.js 首次运行即成功（142KB），未触发兜底
- Blog 判定：feed 含 3 篇（April-23 postmortem / Scaling Managed Agents / New in Claude Managed Agents），全量 HTML grep 命中 5–6 次 → 长期滞留旧条目，Blog 计 0 不渲染
- 主线：应用层价值落点分化 + harness 自主化（Rauch 内部 @v agent+router / Levie 最难可验证任务最先自动化 / Nikunj VC 变 vibes capital）
- Podcast：Unsupervised Learning — Ari Morcos (Datalogy) + Rob Toews (Radical Ventures)：OpenAI-Hugging Face 入侵、中国开放权重模型、model vs harness 区分、政策许可制、xAI/Cursor 数据、Google 组织惯性
- 生成方式：Python 脚本 `/tmp/gen_digest_0805.py`（双语 remix + URL 动态取自 JSON + 自检断言：15/15 链接真实、0 伪造）
- 部署状态：✅ HTTP 200（digest 31927 bytes / index 25539 bytes，commit 3a6a7f4，Actions `completed·success` 20s）
- 文件：`2026/08/05/AI_Builders_Digest_2026-08-05.html`
- 注：gh run 出现 Node.js 20 deprecation annotation（强制跑 Node 24），仅告警，deploy 仍 success，无需处理
