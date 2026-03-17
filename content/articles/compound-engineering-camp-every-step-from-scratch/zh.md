---
title: 复合工程训练营：从零开始的每一步
date: '2026-03-17T14:42:03.957Z'
sourceUrl: >-
  https://every.to/source-code/compound-engineering-camp-every-step-from-scratch?metered_paywall=1
lang: zh
---
*TL;DR:* ***[Cora](https://cora.computer/)*** *总经理* ***[Kieran Klaassen](https://every.to/@kieran_1355)*** *撰写了大量关于[复合工程](https://every.to/source-code/compound-engineering-the-definitive-guide)的文章，这是他为 AI 时代提出的软件工程哲学。本文基于他几周前为付费订阅者举办的训练营，让我们首次深入了解 Kieran 如何使用复合工程插件进行开发的全过程。他一步步展示了如何从一个简单的提示词在一小时内构建出一个可用的应用。如果你一直好奇如何用复合工程进行开发，这就是你要读的文章。—[Kate Lee](https://residenceinnbymarriottphiladelphiabalacynwyd.reservationstays.com/hotels/lMVXOwZj?utm_source=adwords_semro&utm_campaign=G%3ARS%3AUS%3APMAX%3ADSA-Chains%3AUS%3AEN&gad_source=1&gad_campaignid=21191562182&gbraid=0AAAAAo1QcNk9-_L5jMXja7zRKGllt1NBQ&gclid=CjwKCAjw687NBhB4EiwAQ645dmbNhmZp29zw6xIQJVuhLZo6e0f98Lfj638CAlZ8EQfzpy7hQxr2vhoC3-oQAvD_BwE&redirect_auth_retry=true&expand_params=false)*

*这篇通讯是转发给你的吗？[](https://every.to/account)[点击这里](https://every.to/account)订阅，让它直接进入你的收件箱。*

* * *

去年的这个时候，每当 **[Kieran Klaassen](https://every.to/@kieran_1355)** 在 Claude Code 中打开一个新会话，他都是从头开始。过去代码审查的经验教训、他费尽心思解释的风格偏好、以及他已经标记过的 bug——Kieran 都记得，但从机器的角度来看，就好像什么都没发生过一样。

他一直在开发 **[Cora](https://cora.computer/)**，Every 的 AI 邮件助手，并且厌倦了复制粘贴相同的提示词、纠正同样的过度工程化测试、以及标记同样的 bug。"人类会记住，"Kieran 说，"AI 不会。"

于是他决定创建一个*能*记住的系统——一个在编码前会规划、会审查输出以强制执行他的品味、并存储每一个教训以便 AI 下次应用的系统。结果就是我们现在所知的[复合工程](https://every.to/guides/compound-engineering)，一种与 AI 一起编程的标志性方法，每一个 bug、修复和代码审查都会让系统永久变得更聪明。官方的[复合工程插件](https://github.com/EveryInc/compound-engineering-plugin)在 GitHub 上有超过 10,000 个 star，被越来越多的开发者社区使用，包括 Google 和 Amazon 的工程师，他们说这改变了他们对软件的看法。

在我们的第一次[复合工程训练营](https://every.to/events/compound-engineering-camp)中，Kieran 向订阅者现场演示了完整的循环，从一个单行提示词构建到一个可用的产品，用时不到一小时。以下是 Kieran 演示的工作流程，以及它对软件构建方式的意义。

##### **关键要点**

1.  **规划前先头脑风暴。** 插件有一个头脑风暴步骤，通过协作式访谈填补你模糊想法与详细规格之间的差距。
2.  **规划应该自动运行。** 一旦项目需求明确，插件就有一个规划步骤，研究你的代码库，检查现有模式，呈现过去的经验，并在无需额外输入的情况下生成实施计划。
3.  **在不同步骤使用不同模型。** Kieran 使用更快的模型——如 [Claude Haiku 4.5](https://every.to/vibe-check/vibe-check-claude-haiku-4-5-anthropic-cooked) 或 [Gemini 2.5 Flash](https://every.to/vibe-check/vibe-check-gemini-2-5-pro-and-gemini-2-5-flash)——进行头脑风暴，用 [Opus](https://every.to/vibe-check/opus-4-6) 进行规划，用 [Codex](https://every.to/vibe-check/vibe-check-codex-openai-s-new-coding-agent) 进行实施，有时用 Gemini 进行代码审查。
4.  **在上下文新鲜时进行复合。** 插件的复合步骤将教训存储为工件，未来的 agent 可以发现，这是复合工程的核心。在出问题或成功之后立即运行——在 AI 压缩你的对话、你失去具体细节之前。

[![上传的图片](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/advertisements/934/optimized_3de1259b-cd67-4c17-914e-6601715aef0a.png)](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/advertisements/934/optimized_3de1259b-cd67-4c17-914e-6601715aef0a.png)

#### **以思维的速度写作**

大脑和手指之间的鸿沟会扼杀动力。Monologue 让你自然地说出想法，以 3 倍速度获得完美的文字，同时保持你的语气、词汇和风格 intact。它会自动学习专有名词，处理句子中间的多语言代码切换，并编辑准确性。免费开始 1,000 字。

## **复合工程循环**

一个凡事亲力亲为的创始人会遇到天花板，Kieran 说。那些能够规模化的人，是那些构建系统的人——招聘、记录文档和培训——让工作在没有他们在场的情况下进行。

复合工程将这种逻辑应用于与 AI 一起编程。"你尽可能让自己从各个地方抽离，"Kieran 说，"这迫使你提取事物、自动化事物。这就是复合发生的地方。"

核心思想是一个四步循环：规划、工作、审查、复合。每一步都有特定的输入和特定的输出。一步的输出成为下一步的输入。

**规划**接收一个问题并产生一个详细的实施计划——一个 markdown 文件（带格式的简单文本文档），包含数据模型、文件引用、架构决策和来源。这个计划足够具体，AI agent 或人类工程师可以接手执行而无需提问。

**工作**接收该计划并产生一个 pull request（一组准备审查的代码变更）。代码被编写，测试被生成，文档被更新。

**审查**接收 pull request 并产生发现——评论、建议和标记的问题，作为文件系统中的待办事项存储。不同的 AI 模型可以审查同一段代码并发现不同的问题。

**复合**捕捉系统在规划、工作或审查期间学到的任何东西——新的编码偏好、要避免的 bug 模式，或值得保留的架构决策——并将其存储在未来的会话可以引用的文件中。这就是使循环自我改进的原因。

还有一个可选的上游步骤——**头脑风暴**——用于当你有一个模糊的想法而不是明确的需求时。"头脑风暴是当想法还不够详细的时候，"Kieran 说，"如果你有一个非常明确的需求——比如添加一个新的认证提供商——你就跳过头脑风暴直接进入规划。规划是关于细节和不犯错。"

## **从空白提示词到可用应用**

为了展示这些步骤在实践中如何连接，Kieran 在会议期间现场构建了一个应用。他想要一个让用户投票决定向 Cora 添加哪些新功能的系统——一个 [FeatureBase](https://www.featurebase.app/) 的克隆，一个用户可以提交和投票产品想法的平台。他从一个简单的提示词开始：

"构建一个 FeatureBase 克隆。我们将把它用作内部功能请求投票工具。用户可以提交功能想法，为其他想法投票，管理员可以更新状态。简单的 Rails 应用，使用 Tailwind。"

头脑风暴命令将其变成了一场对话。它问问题直到需求明确：用户应该如何登录？每个用户一票还是多票？想法应该如何排序？当 Kieran 想要特定的视觉方向时，他引导它："我想要瑞士设计风格的氛围，方形、黑色、白色、Helvetica 字体。"几分钟内，他就有了一个 markdown 文档，草图了数据模型、页面列表和设计方向大纲。

[![头脑风暴步骤从初始提示词生成了线框图和页面结构。（所有图片由 Kieran Klaassen 提供）](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_f6ec7dc8-ab08-48fb-9c9b-0e06745a87ba.jpg)](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_f6ec7dc8-ab08-48fb-9c9b-0e06745a87ba.jpg)

头脑风暴步骤从初始提示词生成了线框图和页面结构。（所有图片由 Kieran Klaassen 提供）

该文档成为规划的输入。

### **规划是工作的 70%**

Kieran 使用 Claude Code 配合 Opus 模型进行[规划阶段](https://every.to/source-code/stop-coding-and-start-planning)。"Opus 在创意工作、填补空白和规划方面很棒，"他说。他将头脑风暴文档传递给规划命令并让它运行。

规划器做了原始 AI 提示不会做的几件事。它研究现有代码库，这样就不会重复造轮子。它寻找边缘情况——用户可能采取的、头脑风暴没有预料到的步骤。它检查应该遵循的现有设计模式。它从复合工件（过去工作的存储教训）中提取，以避免陷阱。

输出是一个 markdown 文件，包含实施计划，包括开发阶段、关键细节的文件引用，以及对变更将如何影响整个系统的详细分析。它涵盖了大局系统影响和细粒度细节，并记录每个决策的来源，以便 agent 或人类工程师可以追踪为什么做出某个选择。还有一个"深化"选项，可以启动多达 80 个子 agent（专门研究问题不同方面的 AI 工作者），在风险更高时进行更深入的研究。

[![规划步骤生成了一个结构化的实施文档，概述了需求、架构和工作流程。](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_e8c16868-cc6d-40f6-8865-11b820a71619.jpg)](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_e8c16868-cc6d-40f6-8865-11b820a71619.jpg)

规划步骤生成了一个结构化的实施文档，概述了需求、架构和工作流程。

这一步是 Kieran 花费大部分脑力的地方。他估计比例是 70% 思考，30% 执行。"大多数工程师认为写代码是工作，"他说，"思考要做什么才是工作。"

### **并行工作和审查**

计划确定后，Kieran 转向实施。他为这一步切换到了更快的模型，把更复杂的模型留给规划和审查。工作命令接收计划并实施它：编写代码、创建测试、构建功能。如果计划有空白，工作步骤会标记它们而不是猜测。

在他原始提示词的一小时内，Kieran 就有了一个在本地运行的可用应用：一个干净、极简的功能投票工具，遵循他的设计指导。

[![Kieran 现场创建了一个可用的内部功能投票工具。](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_afdbdddb-c520-44c8-b5dc-fd283d57e41e.jpg)](https://d24ovhgu8s7341.cloudfront.net/uploads/editor/posts/3970/optimized_afdbdddb-c520-44c8-b5dc-fd283d57e41e.jpg)

Kieran 现场创建了一个可用的内部功能投票工具。

他没有手动测试，而是运行了复合工程插件的 test-browser 命令，它使用 AI 驱动的浏览器 agent 点击界面、验证功能是否工作并报告回来。

同时，他运行了审查命令，使用 [Gemini](https://every.to/vibe-check/vibe-check-gemini-3-pro-a-reliable-workhorse-with-surprising-flair) 获得对代码的不同视角。"有时我让不同的模型审查代码，因为我得到不同的结果，"他说，"一个模型发现一些东西，然后我把它给另一个模型说，'这实际上是可复现和正确的吗？'"审查步骤产生发现，作为待办文件存储用于分类。他最近使用 tmux（一个在后台保持会话活动的终端工具）并行运行了 25 个 agent，同时规划、工作和审查不同的功能。

### **复合：构建记忆**

第四步是将复合工程与复杂的提示习惯区分开来的。当你运行 `**/compound**` 时，它从当前会话收集上下文——你学到的任何东西、出错的任何东西、你表达的任何偏好——并将其存储为带有元数据的可发现工件。

这些工件不会膨胀你的上下文窗口，即 AI 模型在对话期间可以保存在内存中的信息量。它们作为文件存储，只在相关时由子 agent 检索，这意味着你可以积累数百条教训，而不会遇到将所有内容塞进单个提示词所带来的限制。

"在上下文新鲜时运行这一点非常重要，"Kieran 说，"你不希望在压缩之后运行它，"换句话说，在 AI 开始忘记对话的早期部分之后。

目前，复合步骤是手动触发的。Kieran 正在试验自动化，从 OpenAI 的[工具工程方法](https://openai.com/index/harness-engineering/)中汲取灵感，该方法跟踪反复出现的问题并在它们多次出现后将它们提升为永久规则。但他对自动生成工件持谨慎态度。"自动运行某些东西并产生大量混乱真的很容易，"他说，"我仍然想要控制。"

## **插件是现在，哲学是永恒**

Kieran 坦率地承认复合工程插件有过期日期。AI 实验室已经在整合复合工程开创的理念——例如，规划模式在他最初构建版本时不存在于大多数工具中。"理想情况下，有一天我们会删除整个东西，因为一切都内置了，"他说，"重点一直是哲学，而不是插件。"

工程师的工作正在从编写代码转变为设计编写代码并记住所学内容的系统。Every 凭借这一转变，用单人工程团队运行五个产品。现在开始复合的人将是后来难以追赶的人。

安装[复合工程插件](https://github.com/EveryInc/compound-engineering-plugin)并在你正在做的任何事情上运行 `/brainstorm`。阅读[复合工程指南](https://every.to/guides/compound-engineering)了解完整框架，如果你想去更深入，查看我们的[即将举行的课程](https://every.to/events)。

* * *

***[Katie Parrott](https://every.to/@katie.parrott12)*** *是 Every 的专职作家和 AI 编辑负责人。你可以在[她的通讯](https://katieparrott.substack.com/)中阅读更多她的作品。要阅读更多类似的文章，请订阅 [Every](https://every.to/subscribe)，并在 X 上关注 [@every](http://twitter.com/every)，在 [LinkedIn](https://www.linkedin.com/company/everyinc/) 上关注我们。*

*我们还为公司提供 AI 培训、采用和创新服务。[与我们一起工作](https://every.to/consulting?utm_source=emailfooter)，将 AI 带入你的组织。*

*发现 Every 的[即将举行的研讨会和训练营](https://every.to/events)，并访问过去活动的录音。*

*有关赞助机会，请联系 [\[email protected\]](https://every.to/cdn-cgi/l/email-protection)。*
