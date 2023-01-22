---
sidebar_position: 4
---

# Security

The SQL query is constructed from three parts input by users. The **projection**, **table name**, and **selection**.
The projection is checked for invalid characters like **;'"**, the table name is verified to exist in the database, and the selection part uses parameter placeholders(prepared statement) to avoid [SQL injection](https://go.dev/doc/database/sql-injection)


```sql
SELECT <projection> FROM <table name> WHERE <selection>
```
