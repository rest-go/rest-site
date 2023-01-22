---
sidebar_position: 5
---

# Golang library

## Use Rest as a Go library
It also works to embed the Rest server into an existing Go HTTP server. See more [example codes](https://github.com/rest-go/rest/tree/main/examples) in the Github repo.

``` go
package main

import (
	"log"
	"net/http"

	"github.com/rest-go/rest/pkg/server"
)

func main() {
	h := server.New(&server.DBConfig{URL: "sqlite://my.db"}, server.Prefix("/admin"))
	http.Handle("/admin/", h)
	log.Fatal(http.ListenAndServe(":3001", nil))
}
```
