---
sidebar_position: 1
---

# 介绍

**Rest** 可以作为一个独立运行的后端服务器，给任何SQL数据库提供完整的RESTful API接口，目前支持PostgreSQL、MySQL和SQLite，其他和PostgreSQL或MySQL协议兼容的数据库，例如CockroachDB和TiDB应该也可以工作，将来也可能会添加更多数据库。

## 动机
Rest是在实现一个类似SQLite数据库的时候的一个副产品，最初的想法是受到一个有趣的项目 [PostgREST](https://postgrest.org/en/stable/) 的启发，它可以将你的PostgreSQL数据库直接变成一个RESTful API服务器。Golang中有 `database/sql` 标准库提供了一个围绕SQL的通用接口，并且有很多[可用的驱动](https://github.com/golang/go/wiki/SQLDrivers)，所以Rest的想法是用Go实现一个类似PostgREST的API服务器，支持给任何SQL数据库提供一个完整的RESTful API接口。

## 特性
- 支持不同的SQL数据库 (PostgreSQL, MySQL, SQLite)
- 完整的RESTFul API接口
- 可选的用户验证和授权
- 使用Golang实现，优秀的内置并发模型和健壮的标准库
  - `net/http` 用来实现API server
  - `database/sql` 通用的SQL接口
  - `encoding/json` 处理JSON
  - 有良好的数据库和云原生生态

## 和其他项目的对比

### PostgREST

[PostgREST](https://postgrest.org/en/stable/index.html) 是一个独立的 Web 服务器，可将把PostgreSQL数据库直接转换为RESTful API。它是与Rest最相似的工具，它和 PostgreSQL进行了强绑定，可以利用强大的PG功能，例如使用PostgreSQL中角色的概念来提供身份验证。 Rest旨在为任何SQL数据库提供API接口，其设计原则是支持各种SQL数据库不同的功能，同时也尽量使用标准的SQL来实现应用相关的逻辑。

Rest的想法是受到PostgREST的启发，如你现在正在使用PostgreSQL，也需要一个类似的工具，它会是一个不错的的选择。

### Headless CMS

还有一些其他比较流行的Headless CMS 的项目，像 [Hasura](https://hasura.io/) 和 [Directus](https://directus.io/)。它们非常相似，都是用Node.js编写的，支持给不同的数据库提供REST和GraphSQL接口，具有复杂的授权机制和用于数据库管理的UI。除了开源代码，他们还有公司提供云环境来帮助你运行服务器。虽然功能更多，但使用起来会更复杂，不过也会比较适合非技术人员使用。

Rest旨在保持使用方式尽可能简单，让用户可以在两分钟内启动一个完整的RESTFul API后端服务。 以后可能会有更多的特性加进来，但是Rest的设计原则应该始终保持使用起来简单和傻瓜式。

