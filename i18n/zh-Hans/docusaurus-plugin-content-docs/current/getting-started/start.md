---
sidebar_position: 1
---
# 快速开始

## Docker镜像

在Docker中启动Rest server，连接到一个现有的数据库。

``` bash
# connect to postgres
docker run -p 3000:3000 restgo/rest -db.url "postgres://user:passwd@localhost:5432/db"

# connect to mysql
docker run -p 3000:3000 restgo/rest -db.url "mysql://user:passwd@tcp(127.0.0.1:3306)/db_name"

# connect to sqlite file with volume
docker run -p 3000:3000 -v $(pwd):/data restgo/rest -db.url "sqlite:///data/my.db"
```

## 使用 API

假设已经有一个 `todos` 表在数据库中，表中有 `id` 、`title` 和一个 `done` 字段，那么现在已经自动生成了CRUD的API可以直接使用。

#### 创建一个todo项
``` bash
curl -XPOST "localhost:3000/todos" -d '{"title": "setup api server", "done": false}'
```

#### 读取
``` bash
curl -XGET "localhost:3000/todos/1"
```

#### 更新
``` bash
curl -XPUT "localhost:3000/todos/1" -d '{"title": "setup api server", "done": true}'
```

#### 删除
``` bash
curl -XDELETE "localhost:3000/todos/1"
```


## 接下来
- 在 [安装](./installation) 页面可以找到不同的安装方法
- 在 [配置](./configuration) 页面了解怎么配置Rest server
- 在 [API手册](../guides/api) 中了解更详细的API使用方式
