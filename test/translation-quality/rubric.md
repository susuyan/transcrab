# Translation Quality Rubric (v0)

每个维度 1–5 分，5 为最好。

## 1) 忠实度 (Faithfulness)

- 5: 事实、逻辑、语气完整保留，无误译漏译
- 4: 轻微措辞偏差，不影响事实与逻辑
- 3: 存在可感知语义偏移或轻度漏译
- 2: 多处误译，影响理解
- 1: 严重失真，无法用于发布

## 2) 术语一致性 (Terminology Consistency)

- 5: 核心术语译法稳定且符合上下文
- 4: 少量术语前后不统一
- 3: 中等频次漂移，需要人工统一
- 2: 多数关键术语不稳定
- 1: 术语混乱，无法信任

## 3) Markdown 正确性 (Markdown Integrity)

- 5: 标题/列表/链接/代码块/强调完全合法
- 4: 轻微格式瑕疵，不影响渲染
- 3: 存在明显问题（如强调符号错位）但可修
- 2: 多处结构错误，渲染受损
- 1: 结构严重损坏

## 4) 中文可读性 (Chinese Readability)

- 5: 行文自然，语句顺畅，标点规范
- 4: 基本自然，个别生硬
- 3: 可读但翻译腔明显
- 2: 多处不通顺，需重写
- 1: 难以阅读

## 评分输出格式建议

```json
{
  "sampleId": "sample-01",
  "mode": "normal",
  "run": 1,
  "scores": {
    "faithfulness": 4,
    "terminology": 4,
    "markdown": 5,
    "readability": 4
  },
  "notes": "..."
}
```
