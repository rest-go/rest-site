---
sidebar_position: 1
---

# Introduction

**Rest** serves a fully RESTful API from any SQL database, PostgreSQL, MySQL, and SQLite are supported, and databases that are wire compatible with PostgreSQL or MySQL, e.g. CockroachDB and TiDB should also be supported now, more databases might be added in the future.


## Motivation

Rest came out as a side project when implementing a toy database like SQLite, the idea was inspired by an interesting project [PostgREST](https://postgrest.org/en/stable/) which "is a standalone web server that turns your PostgreSQL database directly into a RESTful API". Golang has the `database/sql` package which provides a generic interface around SQL and there are a bunch of [drivers](https://github.com/golang/go/wiki/SQLDrivers) available, so the idea of Rest is to implement a similar API server that serves a fully RESTful API from any SQL database.

## Features
- Various SQL databases (PostgreSQL, MySQL, SQLite)
- Fully RESTful API
- Authentication and Authorization
- Written in Golang with built-in concurrency and a robust standard library
  - `net/http` for the API server
  - `database/sql` for the generic SQL interface
  - `encoding/json` for json operations
  - a large ecosystem in database and cloud

## Comparison with other tools

### PostgREST

[PostgREST](https://postgrest.org/en/stable/index.html) is a standalone web server that turns your PostgreSQL database directly into a RESTful API. It's the most similar tool to Rest, it binds to PostgreSQL to leverage powerful PG features, e.g. using PostgreSQL roles concept to provide authentication. Rest aims to serve API from any SQL database and the design principle is to support various SQL database features while using standard SQL tables for application logic.

The idea of Rest is inspired by PostgREST, and it's a great alternative if you are using PostgreSQL now.

### Headless CMS

There are also projects called headless CMS like [Hasura](https://hasura.io/) and [Directus](https://directus.io/). They are very similar, both are written in Node.js, provide REST and GraphSQL interfaces from different databases, has sophisticated authorization mechanisms and UI for database management. Besides the open-source code, they also have companies that provide a cloud environment to help you run the server. While having more functions they are also more complicated to get started using.

Rest aims to keep the usage as simple as possible to let users start a fully RESTFul API server in a minute. There might be more features coming to Rest, but the design principle should always keep it simple and stupid.

