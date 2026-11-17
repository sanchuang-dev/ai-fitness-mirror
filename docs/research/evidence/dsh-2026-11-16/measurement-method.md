# 本机测评方法与原始数据说明

## 1. 测试环境

| 项目 | 值 |
|---|---|
| 机器 | Mac mini (Mac14,3)，Apple M2，8 核（4P+4E），8GB RAM |
| 系统 | macOS 26.6（Darwin arm64） |
| Python | 3.10.0（venv） |
| MediaPipe | 1.2.3（CPU / XNNPACK） |
| ONNX Runtime | 1.23.2（CPUExecutionProvider） |
| OpenCV | 5.0.0（headless） |

该平台用于算法 POC，不代表目标低成本 ARM 主板。

## 2. 模型与样本

- MediaPipe Lite：5,777,746 bytes。
- MediaPipe Full：9,398,198 bytes。
- MediaPipe Heavy：30,664,242 bytes。
- RTMPose-t ONNX：约 13.4 MB（报告引用，未出现在本目录原始 JSON）。
- 测试图片：Google MediaPipe 示例图，1000×667。
- 真实健身视频 3 段：来自 Hugging Face 数据集 Voxel51/qualcomm-exercise-video-dataset-benchmark，约 640×360、30 FPS。
- 合成深蹲片段：用于接口联调，不用于真实动作准确率结论。

## 3. 测量方法

- 单帧延迟：预热 8 次，再连续调用 60 次，记录 p50 / p95 / mean，使用高精度计时器。
- 视频链路：MediaPipe RunningMode.VIDEO，逐帧调用 detect_for_video(frame, timestamp_ms)，记录处理耗时和检测到姿态的帧占比。
- 内存：进程峰值 RSS。
- 深蹲计数：髋—膝—踝三点夹角；对照朴素两阈值状态机与“中值滤波 5 帧 + 最短驻留 4 帧”的稳健版本。
- 角度计算：三点向量夹角。

## 4. 已知局限

1. M2 与低成本 ARM 平台性能差异明显，不能直接外推。
2. 视频样本没有人工逐次计数真值，只能比较算法输出差异，不能计算准确率。
3. 公开视频多为较理想的教练示范视角，不能代表家庭环境。
4. 测试为单进程，没有与课程播放、UI、摄像头驱动并发。
5. 合成视频只用于接口联调，不能作为动作评价样本。
6. 测试视频和模型权重未随 Git 仓库提交；需要从原始来源重新获取并遵守其许可。

## 5. 复现线索

原始 DSH 交付 ZIP 中包含 bench_pose.py、poc_eval.py、analyze.py。运行前应创建隔离 Python 环境并安装对应依赖；从 Google AI Edge 官方地址下载 MediaPipe 模型权重，从 Hugging Face 数据集来源取得测试视频。复现时应固定版本、记录硬件、电源模式和输入视频哈希。
