---
sidebar_position: 2
---
# Installation

## Binary

### Precompiled binaries
Precompiled binaries for released versions are available in the [Releases page](https://github.com/rest-go/rest/releases), download it to your local machine and run it directly is the fastest way to using Rest.

### Go install
If you are familiar with Golang, you can use go install
``` bash
go install github.com/rest-go/rest
```

### Run server

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

