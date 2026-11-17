# DSH 原始测评证据（2026-11-16）

本目录保存 DSH 交付的可读原始测量数据及测评方法摘要，供综合报告复核。

## 文件

- bench_mediapipe.json：IMAGE / VIDEO 模式的 MediaPipe Lite、Full、Heavy 测量。
- poc_results.json：三段公开视频的姿态检测、延迟与不同深蹲计数规则结果。
- measurement-method.md：设备环境、依赖版本、样本来源、测量方法和已知局限。

## 环境

Mac mini M2（Mac14,3），8GB RAM；macOS 26.6；Python 3.10.0；MediaPipe 1.2.3（CPU/XNNPACK）；ONNX Runtime 1.23.2（CPUExecutionProvider）；OpenCV 5.0.0 headless。

## 重要限制

1. 真实公开视频样本没有人工逐次计数真值，不能据此声称计数准确率。
2. 测试未与课程播放、UI 渲染并发，不能视为整机持续 FPS。
3. 266.2MB 是测试进程峰值 RSS，不是整机 RAM 需求。
4. 测试视频与模型权重未随本目录提交；原始 DSH ZIP 中提供脚本，但需要重新取得视频/模型资产才能完整重放。
5. Mac M2 结果不能直接外推到低成本 ARM 主板。

本目录中的原始 JSON 数值在综合报告中按“可查验记录”引用；报告中其他未附原始记录的更快数字不作为验收依据。
