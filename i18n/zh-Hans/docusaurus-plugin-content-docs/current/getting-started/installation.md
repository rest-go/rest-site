---
sidebar_position: 2
---
# 安装

## 二进制文件

### 预编译的二进制文件
版本的 [发布页面](https://github.com/rest-go/rest/releases) 提供了预先编译好的不同平台的二进制文件，可以直接下载运行。

### Go install

如果你对Go语言比较熟，也可以使用 `go install` 命令进行安装

``` bash
go install github.com/rest-go/rest
```

### 运行

``` bash
rest -db.url "mysql://username:password@tcp(localhost:3306)/db"
```

## Docker

``` bash
# connect to postgres
docker run -p 3000:3000 restgo/rest -db.url "postgres://user:passwd@localhost:5432/db"

# connect to sqlite file with volume
docker run -p 3000:3000 -v $(pwd):/data restgo/rest -db.url "sqlite:///data/my.db"
```

