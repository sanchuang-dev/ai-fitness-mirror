# AI 健身镜 · MIRRA 原型

> 状态：静态 H5 可操作原型，仅供设备现场与产品方案评审，不是已商用的健身指导服务。

本仓库独立承载三创 **AI 健身镜** 的原型素材，不覆盖 `sanchuang-dev/ai-mirror` 的闺蜜机及共享平台工程。

## 启动入口

- `prototype/index.html`：酒店/健身房场景选择屏
- `prototype/gym.html`：健身房版，课程、动作/组次倒计时、暂停、组间休息、完成
- `prototype/hotel.html`：酒店版，课程、训练阶段、暂停/恢复、完成
- `prototype/index.html?edition=gym` 和 `?edition=hotel`：直达对应场景

画面基准为 **1080×1920 竖屏**，图片均保存在 `prototype/assets/stock/`，权利/署名清单为 `prototype/assets/stock/credits.json`。

## 边界

- 课程与倒计时由本地 JS 预设驱动，教学画面使用授权图库照片模拟视频，不含真实运动视频流。
- 无摄像头、姿态识别、心率、热量、账号、真实课程服务、支付或云端数据。
- 公开可访问的原型仅用于功能与视觉沟通，不代表真机/Android WebView 验收。
- `prototype/` 保留交付的 HTML、CSS、JS、图片，不主动改写外观或行为。

## 来源与发布

- 上传原型文件：`智能健身镜原型设计.zip`
- 原 ZIP SHA-256：`fb30e9bcedf952ef8323b8f431490300e4a9dcd858c1e9be68638aee7a6edf8c`。
- 应用内容的事实源为本仓库 `prototype/`。
- 公司原型站 `fitness-mirror.proto.3cgroup.cn` 的 HTTPS、Caddy、固定源码版本、权限与发布归 `sanchuang-dev/proto-infra` 管理。发布必须使用 infra 的 `prod` 分支和手动工作流；此仓库提交不自动改变线上。

## 本地预览

```bash
cd prototype
python3 -m http.server 8080
```

访问 `http://localhost:8080/`。
