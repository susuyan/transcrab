# Translation Quality Fixtures

这个目录用于维护 TransCrab 翻译质量基准样本（M1）。

## 样本选择标准

- 总数目标：10 篇
- 覆盖面：
  - 短文（<1200 词）/中长文（1200–4000）/长文（>4000）
  - 技术文 / 观点文 / 叙事文
  - 含代码块 / 含表格 / 含列表 / 含复杂强调（**）
- 至少 2 篇是历史上容易翻车的结构（粗体、标点、术语漂移）

## 推荐文件结构

- `fixtures/index.json`：样本索引和元数据
- `fixtures/sources/<id>.md`：可选，落地源文快照
- `fixtures/notes/<id>.md`：人工评分备注

## index.json 字段建议

- `id`: 样本唯一标识
- `title`: 样本标题
- `url`: 来源 URL
- `domain`: 领域（tech/finance/general/...）
- `lengthBand`: `short|medium|long`
- `hasCode`: boolean
- `hasTable`: boolean
- `hasComplexEmphasis`: boolean
- `notes`: 可选备注
