---
sidebar_position: 3
---

# 安全

SQL查询有三部分可能由用户的输入构成。 **selection**、**table name**和**selection**。projection部分会检查是否含有**;'"**等无效字符，table name 会在数据库中验证是否存在，selection部分使用占位符（prepared statement）来避免[SQL注入](https://go.dev/doc/database/sql-injection)

```sql
SELECT <selection> FROM <table name> WHERE <selection>
```

