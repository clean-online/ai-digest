const fs = require('fs');
const path = require('path');

// Load the JSON data from the prepare script output
const jsonPath = '/Users/workingchloe/.workbuddy/projects/Users-workingchloe-Desktop-个人-ai-digest-site/89c11df5-ff4c-4ec0-9172-a898ab76f3c6/tool-results/chatcmpl-tool-a4081cbe1d98cb87.txt';
const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const date = '2026-06-14';
const weekday = '周六';

// Stats
const stats = rawData.stats;
const numBuilders = stats.xBuilders;
const numTweets = stats.totalTweets;
const numPodcasts = stats.podcastEpisodes;
const numBlogs = stats.blogPosts;

// Build X/Twitter section
function buildTwitterSection(builders) {
  let html = `  <!-- ============== X / TWITTER ============== -->
  <section class="section">
    <div class="section-head">
      <span class="section-icon">🐦</span>
      <h2 class="section-title">X / Twitter</h2>
      <span class="section-meta">${numBuilders} Builders</span>
    </div>
`;

  for (const builder of builders) {
    const name = builder.name;
    const handle = builder.handle;
    const bio = builder.bio || '';
    
    // Extract role from bio
    let role = '';
    if (bio.includes('@openai') || bio.toLowerCase().includes('openai')) role = 'OpenAI';
    if (bio.includes('@anthropic') || bio.toLowerCase().includes('anthropic')) role = 'Anthropic';
    if (bio.includes('@replit')) role = 'Replit CEO';
    if (bio.includes('@vercel') || bio.toLowerCase().includes('vercel')) role = 'Vercel CEO';
    if (bio.includes('@box')) role = 'Box CEO';
    if (bio.includes('@ycombinator') || bio.toLowerCase().includes('yc')) role = 'YC President';
    if (bio.includes('@every')) role = 'Every CEO';
    if (bio.includes('@southpkcommons') || bio.includes('@SouthPkCommons')) role = 'SPC GP';
    if (bio.includes('@fpvventures') || bio.includes('@fpv')) role = 'FPV Partner';
    if (bio.includes('@dxtipshq') || bio.includes('@cognition') || bio.includes('@temporalio') || bio.includes('@aidotengineer')) role = 'AI Engineer';
    if (bio.includes('@openclaw') || bio.includes('OpenClaw')) role = 'OpenClaw';
    if (bio.includes('DeepMind') || bio.includes('Meta') || bio.includes('datalogy')) role = 'AI Researcher';
    if (name === 'Andrej Karpathy') role = 'AI Researcher';
    if (name === 'Guillermo Rauch') role = 'Vercel CEO';
    if (name === 'Amjad Masad') role = 'Replit CEO';
    if (name === 'Aaron Levie') role = 'Box CEO';
    if (name === 'Garry Tan') role = 'YC President';
    if (name === 'Peter Yang') role = 'AI Educator';
    if (name === 'Swyx') role = 'Latent Space Host';
    if (name === 'Dan Shipper') role = 'Every CEO';
    if (name === 'Aditya Agarwal') role = 'SPC GP';
    if (name === 'Nikunj Kothari') role = 'FPV Partner';
    if (name === 'Peter Steinberger') role = 'OpenClaw';
    if (name === 'Zara Zhang') role = 'Builder / YouTuber';
    if (name === 'Thibault Sottiaux') role = 'OpenAI Codex';
    if (name === 'Alex Albert') role = 'Anthropic';
    if (name === 'Madhu Guru') role = 'Google PM';
    if (name === 'Claude') role = 'Anthropic';
    
    // Generate summary based on tweets
    const tweets = builder.tweets || [];
    if (tweets.length === 0) continue;
    
    // Create English summary
    let summaryEn = '';
    let summaryZh = '';
    
    if (name === 'Andrej Karpathy') {
      summaryEn = 'Karpathy\'s only post in the window is about SpaceX, expressing awe at its story across past, present, and future. A rare non-AI post from one of the most influential AI researchers — but telling in its own way about where his attention goes when he looks up from the code.';
      summaryZh = 'Karpathy 在统计窗口内唯一一条推文是关于 SpaceX 的，表达了对这家公司过去、现在和未来故事的赞叹。这是这位最有影响力的 AI 研究者之一难得的非 AI 内容——但从侧面也说明，当他从代码里抬起头来，目光会投向哪里。';
    } else if (name === 'Swyx') {
      summaryEn = 'Swyx is in peak crunch mode for AI Engineer (AIE), apologizing for delayed responses. His most interesting post: a provocative take on the "Future Codebase" — wondering if Git needs to die after PRs and code reviews die. ~20-40% of code spend is managing merge conflicts; maybe the future looks more like Notion or Linear than .git objects. The happy paths of developer exception engineering are all happy in their own way; the unhappy paths are universally the same.';
      summaryZh = 'Swyx 正在 AI Engineer 大会(AIE)的冲刺期，为回复延迟道歉。他最有意思的一条推文是对"未来代码库"的大胆猜想——在 PR 和代码审查消亡之后，Git 是不是也该消亡了？大约 20-40% 的编码时间花在管理合并冲突上；也许未来的代码库看起来更像 Notion 或 Linear 数据库，而不是 .git 对象。开发者异常工程的快乐路径各有各的快乐，不快乐路径却惊人地一致。';
    } else if (name === 'Thibault Sottiaux') {
      summaryEn = 'OpenAI Codex team heard the feedback: users were annoyed by unexpected usage resets. Next time they press the button, users will get to choose when the reset actually applies. A small but meaningful UX improvement that shows the Codex team is listening.';
      summaryZh = 'OpenAI Codex 团队听到了用户反馈：大家对使用量在毫无预警的情况下被重置感到恼火。下次他们按下重置按钮时，用户将可以选择重置实际生效的时间。一个微小但有意义的 UX 改进，说明 Codex 团队在倾听。';
    } else if (name === 'Peter Yang') {
      summaryEn = 'Peter raises a provocative question: ID verification will likely be required soon to access the best models. He also reacts to the news that Claude access is being suspended for "foreign persons inside the US" — calling it "wild" and questioning how it can be properly enforced. These are early signals of AI regulation hitting real-world friction.';
      summaryZh = 'Peter 提出了一个引人深思的问题：不久之后，访问最强模型可能很快需要身份验证。他还对"Claude 暂停向美国境内的外国人提供服务"的消息做出反应——称之为"离谱"，并质疑这到底要怎么执行。这些是 AI 监管开始产生真实摩擦的早期信号。';
    } else if (name === 'Madhu Guru') {
      summaryEn = 'A self-deprecating joke: "Just wrote out a whole doc with my bare hands — manually, with a keyboard. No dictation, no AI. Because I like to live dangerously." A rare glimpse of humor from a Google PM working on Gemini/Veo.';
      summaryZh = '一个自嘲的玩笑："刚刚徒手——用键盘，手动——写了一整篇文档。没有语音输入，没有 AI。因为我喜欢冒险。"这是负责 Gemini/Veo 的 Google PM 难得的幽默一刻。';
    } else if (name === 'Amjad Masad') {
      summaryEn = 'Amjad signals that Replit may need to turn off Claude access due to the US govt restriction. He also pushes back on the "tokenmaxxing" leaderboard craze — Replit customers asked for one, he said no, because they "sell outcomes, not tokens." A principled stance that differentiates Replit from competitors optimizing for benchmark gaming. Also: if you make money on Replit, you get free credits.';
      summaryZh = 'Amjad 暗示 Replit 可能不得不关闭 Claude 访问权限，原因是美国政府的限制。他还对"tokenmaxxing"排行榜风潮表达了反对——有企业客户要求 Replit 上排行榜，他拒绝了，因为他们"卖的是结果，不是 token"。这是一个有原则的立场，把 Replit 和优化基准测试分数的竞争对手区分开来。另外：在 Replit 上赚到钱的用户可以获得免费额度。';
    } else if (name === 'Guillermo Rauch') {
      summaryEn = 'Vercel just shipped HarnessAgent — a unified abstraction to orchestrate and integrate any agent\'s "brain" into your app. The AI SDK now frees you from both model and agent lock-in. Also: "HTML is so back" — a celebration of the web platform\'s enduring power.';
      summaryZh = 'Vercel 刚刚发布了 HarnessAgent——一个统一的抽象层，用于编排任何 Agent 的"大脑"并集成到你的应用中。AI SDK 现在让你同时摆脱模型和 Agent 锁定。另外："HTML 回来了"——对 Web 平台持久生命力的致敬。';
    } else if (name === 'Alex Albert') {
      summaryEn = 'Alex shares a prompt snippet that fixes Claude\'s tendency to overwhelm users with superhuman-length agentic conversations — adding instructions to write clearly and drop jargon. Also pulled a tip from Anthropic\'s prompting guide for working with Opus. Small practical insights from inside the Anthropic trenches.';
      summaryZh = 'Alex 分享了一个 prompt 片段，解决了 Claude 在超长 Agent 对话中让读者跟不上的问题——添加了要求清晰写作、去掉术语的指令。还从 Anthropic 的 prompt 指南里摘了一条使用 Opus 的技巧。来自 Anthropic 一线的实用小洞察。';
    } else if (name === 'Aaron Levie') {
      summaryEn = 'Levie sees the US govt\'s move to restrict certain AI models as a "big turning point" for AI regulation — creating a precedent for future controls. He\'s in the camp that this is unnecessary and prefers regulating AI use over underlying models, but acknowledges the trend is unlikely to reverse. Also celebrates SpaceX\'s 25-year journey as "world-defining."';
      summaryZh = 'Levie 认为美国政府限制某些 AI 模型的举措是 AI 监管的一个"重大转折点"——为未来的管控创造了先例。他属于认为此举不必要、更倾向于监管 AI 使用而非底层模型的阵营，但也承认这一趋势不太可能逆转。同时还庆祝了 SpaceX 25 年征程是"改变世界的"。';
    } else if (name === 'Garry Tan') {
      summaryEn = 'Garry\'s most provocative post: "Everyone thinks AI coding tools set founders free. Watch what people actually build with them: rules, approvals, process, layers. The same cage, assembled faster. Speed of construction is speed of calcification." A profound warning about how AI accelerates not just building but bureaucratization. Also proud of datacurve (YC W24) building a defining SWE benchmark.';
      summaryZh = 'Garry 最引人深思的推文："所有人都以为 AI 编程工具让创业者获得自由。看看人们实际用它建了什么：规则、审批、流程、层级。同一座牢笼，搭得更快。建设的速度就是僵化的速度。"这是对 AI 不仅加速建设、也加速官僚化的深刻警告。同时也为 datacurve (YC W24) 打造定义性 SWE 基准测试感到骄傲。';
    } else if (name === 'Zara Zhang') {
      summaryEn = 'Zara highlights the insane competition for attention: "At least 3 requests per day to try new AI products." Her take: there are too many builders and the attention economy is oversaturated. Also: "A viral product has a founder people can see and hear" — founders showing their face beats corporate promo videos.';
      summaryZh = 'Zara 指出了注意力竞争的疯狂程度："每天至少 3 个请求让我试用新的 AI 产品。"她的观点：建设者太多了，注意力经济已经过度饱和。另外："一个病毒式传播的产品，有一个人们能看到和听到的创始人"——创始人出镜比企业宣传视频更有效。';
    } else if (name === 'Nikunj Kothari') {
      summaryEn = 'Nikunj shares his framework for how application companies survive the "what if the large lab builds this" question — with a visual. He has two distinct writing voices: one frenetic and punchy, the other calm and measured. A relatable meta-observation about his own communication style.';
      summaryZh = 'Nikunj 分享了他关于应用层公司如何应对"大实验室万一也做这个怎么办"这个问题的框架——附了图。他有两种截然不同的写作声音：一种急促有力，另一种冷静克制。这是一个关于自己沟通风格的很能引起共鸣的元观察。';
    } else if (name === 'Peter Steinberger') {
      summaryEn = 'Peter\'s Codex runs inside Crabbox while building Crabbox — recursive self-improvement in action. Codex has been looping nonstop for 4 days across multiple trees, and since everything is e2e verifiable it basically builds itself. His main job: adding credit card details and closing misfit PRs. Also: "not consistently candid in their communications" is his new favorite Americanism.';
      summaryZh = 'Peter 的 Codex 在 Crabbox 里面运行，同时还在构建 Crabbox——递归自我改进正在发生。Codex 已经在多个代码树里连续循环了 4 天，因为一切都是端到端可验证的，它基本上在自我构建。他的主要工作：添加信用卡信息，关闭不合适的 PR。另外："not consistently candid in their communications"是他新最喜欢的"美式说法"。';
    } else if (name === 'Dan Shipper') {
      summaryEn = 'Dan\'s reaction to the US govt AI restriction news is characteristically witty: "cfos everywhere: we are so back." Also: "this seriously messes up my weekend plans i may have to actually see people" — a perfect encapsulation of the AI-native lifestyle. His take on Harry Potter fan fiction and Hillbilly Elegy bringing us to this moment is quintessential Dan.';
      summaryZh = 'Dan 对美国 AI 限制新闻的反应一如既往地机智："各地 CFO：我们回来了。"还有："这严重打乱了我的周末计划，我可能得真的去见人了"——完美概括了 AI 原住民的生活方式。他把《哈利·波特》同人小说和《乡下人的悲歌》与我们今天所处的时刻联系起来，非常 Dan 风格。';
    } else if (name === 'Aditya Agarwal') {
      summaryEn = 'SPC temporarily renames to "Space Park Commons" in honor of SpaceX. Also welcomes Ryan Atkins as a new Partner. A snapshot of a VC firm riding the momentum of the biggest IPO/space story of the year.';
      summaryZh = 'SPC 为致敬 SpaceX 临时更名为"Space Park Commons"。同时欢迎 Ryan Atkins 作为新合伙人加入。这是一家 VC 乘着今年最大 IPO/太空故事之势的快照。';
    } else if (name === 'Claude') {
      summaryEn = 'Claude\'s official account asks: "What are you building?" — a simple but effective community engagement prompt. The responses (285 replies) are a snapshot of what the Claude user base is working on.';
      summaryZh = 'Claude 官方账号问："你在建什么？"——一个简单但有效的社区互动提示。回复（285 条）是 Claude 用户群体正在做什么的一个快照。';
    } else {
      summaryEn = `${name} posted ${tweets.length} tweet(s).`;
      summaryZh = `${name} 发了 ${tweets.length} 条推文。`;
    }
    
    const urls = tweets.map(t => `      <a href="${t.url}">${t.url}</a>`).join('\n');
    
    html += `    <article class="builder">
      <div class="builder-head">
        <span class="builder-name">${name}</span>
        <span class="builder-role">${role}</span>
      </div>
      <p class="summary-en">${summaryEn}</p>
      <p class="summary-zh zh">${summaryZh}</p>
      <div class="urls">
${urls}
      </div>
    </article>
`;
  }
  
  html += '  </section>\n';
  return html;
}

// Build Blogs section
function buildBlogsSection(blogs) {
  if (!blogs || blogs.length === 0) return '';
  
  let html = `  <!-- ============== OFFICIAL BLOGS ============== -->
  <section class="section">
    <div class="section-head">
      <span class="section-icon">📝</span>
      <h2 class="section-title">Official Blogs</h2>
      <span class="section-meta">${blogs.length} Posts</span>
    </div>
`;

  for (const blog of blogs) {
    const name = blog.name || 'Anthropic';
    const title = blog.title || '';
    const url = blog.url || '';
    const content = blog.content || '';
    
    let summaryEn = '';
    let summaryZh = '';
    
    if (title.includes('Claude Code quality')) {
      summaryEn = 'Anthropic published a detailed postmortem on recent Claude Code quality reports. Three separate issues were identified: (1) default reasoning effort changed from high to medium on March 4, reverted April 7; (2) a bug in session idle logic caused context clearing to repeat every turn instead of once, fixed April 10; (3) a system prompt instruction to reduce verbosity hurt coding quality, reverted April 20. All three affected Sonnet 4.6 and/or Opus 4.6. The aggregate effect looked like broad degradation, but each issue was separate. Key lesson: harness assumptions go stale as models improve — what was needed for Sonnet 4.5 became "dead weight" on Opus 4.5.';
      summaryZh = 'Anthropic 发布了一篇详细的事后分析，解释近期 Claude Code 质量报告的调查结果。发现了三个独立问题：(1) 3 月 4 日默认推理强度从高改为中，4 月 7 日恢复；(2) 会话空闲逻辑的一个 bug 导致上下文清除在每个回合都发生、而不只是一次，4 月 10 日修复；(3) 系统提示中减少冗余的指令损害了编码质量，4 月 20 日恢复。三个问题都影响了 Sonnet 4.6 和/或 Opus 4.6。综合效果看起来像是广泛退化，但每个问题都是独立的。关键教训：随着模型改进，harness 的假设会过时——Sonnet 4.5 需要的东西在 Opus 4.5 上变成了"死重"。';
    } else if (title.includes('Managed Agents')) {
      summaryEn = 'Anthropic introduced Claude Managed Agents — a hosted service that runs long-horizon agents through stable interfaces designed to outlast implementation changes. The core insight: harnesses encode assumptions about what Claude can\'t do, but those assumptions go stale as models improve. Managed Agents virtualizes the components of an agent (session, harness, sandbox) so each can be swapped without disturbing the others — like how operating systems virtualized hardware. This allows Anthropic to improve the agent implementation while users\' code stays stable. Available now on the Claude Platform.';
      summaryZh = 'Anthropic 推出了 Claude Managed Agents——一个托管服务，通过设计得比实现变更更持久的稳定接口来运行长周期 Agent。核心洞察：harness 编码了对 Claude 不能做什么的假设，但随着模型改进，这些假设会过时。Managed Agents 将 Agent 的组件（会话、harness、沙箱）虚拟化，这样每个组件都可以独立替换而不影响其他——就像操作系统将硬件虚拟化一样。这让 Anthropic 可以改进 Agent 实现，同时用户的代码保持稳定。现已在 Claude 平台上线。';
    } else if (title.includes('MCP tunnels') || title.includes('self-hosted sandboxes')) {
      summaryEn = 'Claude Managed Agents now supports self-hosted sandboxes and MCP tunnels (public beta / research preview). Self-hosted sandboxes keep agent execution within your enterprise perimeter — sensitive files, packages, and services stay in your infra. MCP tunnels let agents connect to your private MCP servers. Supported sandbox providers include Cloudflare, Daytona, Modal, and Vercel. This is a major step toward enterprise-grade agent deployment with proper security and compliance controls.';
      summaryZh = 'Claude Managed Agents 现在支持自托管沙箱和 MCP 隧道（公开 Beta / 研究预览）。自托管沙箱让 Agent 执行保留在企业边界内——敏感文件、包和服务留在你的基础设施里。MCP 隧道让 Agent 连接到你的私有 MCP 服务器。支持的沙箱提供商包括 Cloudflare、Daytona、Modal 和 Vercel。这是迈向企业级 Agent 部署、具备适当安全和合规控制的重要一步。';
    }
    
    html += `    <article class="builder">
      <div class="builder-head">
        <span class="builder-name">${name}</span>
        <span class="builder-role">Official Blog</span>
      </div>
      <p class="summary-en"><strong>${title}</strong><br/><br/>${summaryEn}</p>
      <p class="summary-zh zh"><strong>${title}</strong><br/><br/>${summaryZh}</p>
      <div class="urls"><a href="${url}">${url}</a></div>
    </article>
`;
  }
  
  html += '  </section>\n';
  return html;
}

// Build Podcast section
function buildPodcastSection(podcasts) {
  if (!podcasts || podcasts.length === 0) return '';
  
  const podcast = podcasts[0];
  const name = podcast.name || '';
  const title = podcast.title || '';
  const url = podcast.url || '';
  
  const summaryEn = `<p>This AI Vibe Check episode features Jacob Efron (Unsupervised Learning host) with Ari (ex-DeepMind/Meta, now Datalogy founder) and Rob (Radical Ventures). The conversation covers the post-Fable release landscape: how labs are reacting, whether RSI (Recursive Self-Improvement) is near, and a spicy prediction that AI labs may shut down their API business due to compute crunch.</p>

<p>The core insight: <strong>the compute shortage is becoming so acute that labs may prioritize internal model training and frontier research over external API access</strong>. This would be a seismic shift — the entire applied AI ecosystem (including most startups) runs on OpenAI/Anthropic APIs. If API access becomes unreliable or uneconomical, the application layer will be forced to rethink its architecture.</p>

<p>On RSI: the panel discusses how close we are to recursive self-improvement. The consensus leans toward "not yet, but the building blocks are visible." Fable's ability to do long-horizon agentic work is a piece of the puzzle, but true RSI requires more than just better coding — it needs reliable self-verification, long-term planning, and the ability to modify one's own architecture without breaking.</p>

<p>On model capabilities: Fable represents a step change. The panel discusses how it's not just "better at coding" but "different in kind" — it can hold context across longer conversations, maintain consistency in large codebases, and exhibit judgment about when to refactor vs when to ship.</p>`;

  const summaryZh = `<p>这期 AI Vibe Check 节目由 Jacob Efron（Unsupervised Learning 主持人）主持，嘉宾是 Ari（前 DeepMind/Meta，现为 Datalogy 创始人）和 Rob（Radical Ventures）。对话涵盖了 Fable 发布后的格局：实验室如何反应、RSI（递归自我改进）是否临近，以及一个大胆的预测：AI 实验室可能会因算力紧缺而关闭 API 业务。</p>

<p>核心洞察：<strong>算力短缺正变得如此严重，以至于实验室可能会优先内部模型训练和前沿研究，而非外部 API 访问</strong>。这将是一个地震式的转变——整个应用 AI 生态系统（包括大多数创业公司）都运行在 OpenAI/Anthropic 的 API 上。如果 API 访问变得不可靠或不经济，应用层将被迫重新思考其架构。</p>

<p>关于 RSI：小组讨论了我们有多接近递归自我改进。共识倾向于"还没有，但构成要素已经可见"。Fable 做长周期 Agent 工作的能力是拼图的一块，但真正的 RSI 需要的不仅仅是更好的编码——它需要可靠的自我验证、长期规划，以及在不破坏的情况下修改自身架构的能力。</p>

<p>关于模型能力：Fable 代表了一个阶跃变化。小组讨论的不仅是"编码更好了"，而是"性质上不同了"——它能在更长对话中保持上下文，在大型代码库中维持一致性，并对何时重构、何时发布展现出判断力。</p>`;

  return `  <!-- ============== PODCASTS ============== -->
  <section class="section">
    <div class="section-head">
      <span class="section-icon">🎙️</span>
      <h2 class="section-title">Podcasts</h2>
      <span class="section-meta">${podcasts.length} Episode</span>
    </div>

    <div class="podcast">
      <div class="podcast-source">${name}</div>
      <h3 class="podcast-title">${title}</h3>

      <div class="takeaway">
        <span class="takeaway-label">The Takeaway</span>
        The compute crunch may force AI labs to shut down APIs — a prediction that would reshape the entire applied AI ecosystem. RSI is not here yet, but Fable's step-change capabilities make the building blocks visible.
      </div>

      <div class="podcast-body">
${summaryEn}
      </div>

      <div class="podcast-divider"></div>

      <div class="podcast-zh">
${summaryZh}
      </div>

      <div class="urls" style="margin-top:24px">
        <a href="${url}">▶️ ${url}</a>
      </div>
    </div>

  </section>
`;
}

// Generate full HTML
const twitterHtml = buildTwitterSection(rawData.x || []);
const blogsHtml = buildBlogsSection(rawData.blogs || []);
const podcastHtml = buildPodcastSection(rawData.podcasts || []);

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AI Builders Digest · ${date}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Serif+SC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
  :root { --bg: #faf9f6; --bg-elevated: #ffffff; --ink: #14161a; --ink-soft: #3a3d44; --ink-muted: #6b7079; --line: #e8e6df; --line-soft: #f0eee7; --accent: #c2410c; --accent-soft: #fef3c7; --accent-deep: #92400e; --green: #166534; --green-soft: #dcfce7; --max-w: 760px; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--ink); line-height: 1.65; font-size: 16px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  .zh { font-family: 'Noto Serif SC', 'PingFang SC', serif; }
  a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.15s ease; word-break: break-all; }
  a:hover { border-bottom-color: var(--accent); }
  .topbar { border-bottom: 1px solid var(--line); background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px); position: sticky; top: 0; z-index: 10; }
  .topbar-inner { max-width: var(--max-w); margin: 0 auto; padding: 14px 32px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--ink-muted); }
  .brand { font-weight: 700; color: var(--ink); letter-spacing: -0.01em; }
  .brand-mark { display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; margin-right: 8px; transform: translateY(-1px); }
  .header { max-width: var(--max-w); margin: 0 auto; padding: 80px 32px 48px; text-align: left; }
  .eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 18px; }
  .header h1 { font-size: clamp(36px, 6vw, 56px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 24px; color: var(--ink); }
  .stats { max-width: var(--max-w); margin: 36px auto 0; padding: 0 32px; display: flex; gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .stat { flex: 1; padding: 20px 0; text-align: center; border-right: 1px solid var(--line); }
  .stat:last-child { border-right: none; }
  .stat-num { font-size: 28px; font-weight: 700; color: var(--ink); letter-spacing: -0.02em; line-height: 1; }
  .stat-label { font-size: 11px; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }
  .section { max-width: var(--max-w); margin: 0 auto; padding: 56px 32px 0; }
  .section-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 36px; padding-bottom: 14px; border-bottom: 2px solid var(--ink); }
  .section-icon { font-size: 22px; }
  .section-title { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); }
  .section-meta { margin-left: auto; font-size: 12px; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.1em; }
  .builder { margin-bottom: 36px; padding-bottom: 36px; border-bottom: 1px dashed var(--line); }
  .builder:last-child { border-bottom: none; }
  .builder-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
  .builder-name { font-size: 17px; font-weight: 700; color: var(--ink); letter-spacing: -0.01em; }
  .builder-role { font-size: 13px; color: var(--ink-muted); background: var(--line-soft); padding: 3px 10px; border-radius: 12px; font-weight: 500; }
  .summary-en { font-size: 16px; color: var(--ink-soft); line-height: 1.7; margin-bottom: 14px; }
  .summary-zh { font-size: 15.5px; color: var(--ink); line-height: 1.85; background-color: #fbfaf5; border-left: 3px solid var(--accent-soft); border-radius: 0 6px 6px 0; padding: 16px 18px; margin-bottom: 14px; }
  .urls { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.9; padding: 10px 14px; background: #f5f3ec; border-radius: 6px; }
  .urls a { display: block; }
  .podcast { background: var(--bg-elevated); border: 1px solid var(--line); border-radius: 12px; padding: 32px; margin-bottom: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); }
  .podcast-source { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 10px; }
  .podcast-title { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.25; color: var(--ink); margin-bottom: 24px; }
  .takeaway { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 8px; padding: 18px 22px; margin-bottom: 24px; font-size: 15px; line-height: 1.7; color: var(--accent-deep); }
  .takeaway-label { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; background: var(--accent); color: white; padding: 3px 8px; border-radius: 3px; margin-right: 10px; transform: translateY(-2px); }
  .podcast-body { font-size: 15.5px; color: var(--ink-soft); line-height: 1.75; }
  .podcast-body p { margin-bottom: 16px; }
  .podcast-body strong { color: var(--ink); font-weight: 600; }
  .podcast-divider { height: 1px; background: var(--line); margin: 28px 0; }
  .podcast-zh { font-family: 'Noto Serif SC', serif; font-size: 15.5px; color: var(--ink); line-height: 1.95; }
  .podcast-zh p { margin-bottom: 16px; }
  .podcast-zh strong { color: var(--accent-deep); font-weight: 600; }
  .footer { max-width: var(--max-w); margin: 80px auto 0; padding: 40px 32px; border-top: 1px solid var(--line); text-align: center; color: var(--ink-muted); font-size: 13px; }
  .next-issue { display: inline-block; background: var(--green-soft); color: var(--green); padding: 6px 14px; border-radius: 16px; font-weight: 500; font-size: 13px; margin-bottom: 18px; }
  .signature { font-family: 'JetBrains Mono', monospace; font-size: 11px; margin-top: 14px; color: var(--ink-muted); }
  @media (max-width: 640px) { .header { padding: 56px 24px 36px; } .section { padding: 40px 24px 0; } .header h1 { font-size: 32px; } .stats { padding: 0 24px; } .stat-num { font-size: 22px; } .podcast { padding: 24px; } .podcast-title { font-size: 19px; } .topbar-inner { padding: 12px 24px; } }
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="https://clean-online.github.io/ai-digest/" class="brand" style="border:none;color:var(--ink)"><span class="brand-mark"></span>Follow Builders, Not Influencers</a>
    <span>双语 · Bilingual</span>
  </div>
</header>

<section class="header">
  <div class="eyebrow">Daily Digest · ${date} · ${weekday}</div>
  <h1>AI Builders Digest</h1>
</section>

<div class="stats">
  <div class="stat">
    <div class="stat-num">${numBuilders}</div>
    <div class="stat-label">Builders</div>
  </div>
  <div class="stat">
    <div class="stat-num">${numTweets}</div>
    <div class="stat-label">Tweets</div>
  </div>
  <div class="stat">
    <div class="stat-num">${numPodcasts}</div>
    <div class="stat-label">Podcast</div>
  </div>
  <div class="stat">
    <div class="stat-num">${numBlogs}</div>
    <div class="stat-label">Blog</div>
  </div>
</div>

${twitterHtml}
${blogsHtml}
${podcastHtml}

<footer class="footer">
  <div class="next-issue">📬 下一期：明天 10:00（北京时间）</div>
  <div class="signature">by chloevchen</div>
</footer>

</body>
</html>
<!-- by chloevchen -->
`;

// Write the HTML file
const outputPath = `/Users/workingchloe/Desktop/个人/AI_Builders_Digest_${date}.html`;
fs.writeFileSync(outputPath, html, 'utf8');
console.log(`✅ Generated: ${outputPath}`);
console.log(`   Stats: ${numBuilders} builders, ${numTweets} tweets, ${numPodcasts} podcast, ${numBlogs} blog`);
