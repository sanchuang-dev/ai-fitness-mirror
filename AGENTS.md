# AI 健身镜原型仓库约束

- 继承三创组织当前 `sanchuang-dev/.github@main/AGENTS.md`。
- 单产品仓库：仅承载 AI 健身镜原型；不将这套界面混入 `ai-mirror` 闺蜜机的 `web/`。
- `prototype/` 是当前原型交付的单一源码来源，所有训练/视频/健康数据仅为演示。
- `main` 是初始原型资料与设计评审基线，不是生产环境。当前仅静态演示资产，无服务器应用。
- 专属域名的发布由 `sanchuang-dev/proto-infra` 使用经过审核、固定 SHA 的快照在 `prod` 明确派发；不得因为 main 更新就自动上线。
- 后续开发正式产品时，建立 `dev/test/prod` 并执行 `feat/* → dev → test → prod`，在相应 Issue 约束下实施。
- 公开演示不可声称摄像头、动作识别、真实视频课程、个人数据或商业交付已接通。
