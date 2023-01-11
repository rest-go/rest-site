---
sidebar_position: 3
---

# Golang library

## Use Rest as a Go library
It also works to embed rest server into an existing Go http server

``` go
package main

import (
	"log"
	"net/http"

	"github.com/rest-go/rest/pkg/server"
)

func main() {
	s := server.NewServer("sqlite://my.db")
	http.Handle("/", s)
	// or with prefix
	// http.Handle("/admin", s.WithPrefix("/admin"))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```
