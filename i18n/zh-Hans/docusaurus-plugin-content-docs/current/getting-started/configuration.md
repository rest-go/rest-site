---
sidebar_position: 3
---

# 配置

Rest中的配置只有数据库的连接是必须的，只有连接到了数据库才能处理请求。Rest使用了统一的格式来连接数据库，支持的格式可以参见下面的 [数据库配置](#数据库配置) 一节。

配置参数会以以下顺序读取：
1. 从指定的配置文件中读取
2. 从命令行参数中读取, 覆盖配置文件中的相同的参数


## 命令行参数

常见的参数可以直接在命令行中指定

``` bash
rest -addr :3000 -db.url sqlite://chinook.db
```

`-addr <ip:port>`

指定服务器的监听地址

---

`-db.url <dsn>`

指定数据库的连接地址

---


`-config <path>`

指定配置文件路径

---

`-help`

输出帮助信息

## 配置文件

Rest 可以读取一个配置文件，没有默认的配置文件的路径，如果要用配置文件，需要手动指定文件路径。

``` bash
$ rest -config config.yml
```

#### config.yml 示例

```yml
# server listen addr
addr: :3000

# db config
db:
  url: sqlite://chinook.db

# auth config
auth:
  enabled: true
  secret: [replace-this-to-your-own-secret]
```



## 数据库配置

`url`

指定要连接的数据库地址，由支持的数据库驱动名和实际地址组成，下面是当前支持的数据库和对应的格式示例

|  数据库 | 地址格式 |
|---|---|
| PostgreSQL | postgres://user:passwd@localhost:5432/db_name?search_path=schema_name |
| MySQL      | mysql://user:passwd@tcp(127.0.0.1:3306)/db_name |
| SQLite     | sqlite:///path/to/my.db |

## 用户验证配置

默认情况下，所有的Rest接口都是可以直接访问，不需要任何验证信息的，比较适合作为一个内部服务，或者放在其他方向代理比如Nginx的后面。如果你想要验证用户，可以打开用户验证配置。查看 [验证和授权](../guides/auth) 页面了解它是怎么工作的。

`enabled`

是否要求验证，默认是否

`secret`

JWT 密钥，用来签名和解析JWT token
