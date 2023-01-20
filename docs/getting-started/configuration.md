---
sidebar_position: 3
---

# Configuration

At the minimum, Rest requires a database URL to connect to be able to serve requests. Rest uses a unified format to connect to various databases. See the [Database config](#database-config) section below for the detailed format.

Config parameters are read in the following order:
1. From the config file.
2. From command-line flags, overriding values from the config file.


## Flags

Common settings can be set by command-line flags directly

``` bash
rest -addr :3000 -db.url sqlite://chinook.db
```

`-addr <ip:port>`

specify listen address

---

`-db.url <dsn>`

specify database URL

---


`-config <path>`

specify the config file path

---

`-help`

output help message


## Config File

Rest can read a config file, there is no predefined location for this file, if you want to use a config file, you have to specify the file path manually.

``` bash
$ rest -config config.yml
```

#### config.yml sample

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



## Database Config

`url`

Specify the database URL to connect to, the URL consists of the driver name and the actual DSN. Supported databases are listed below:

|  Database | URL Format |
|---|---|
| PostgreSQL | postgres://user:passwd@localhost:5432/db_name?search_path=schema_name |
| MySQL      | mysql://user:passwd@tcp(127.0.0.1:3306)/db_name |
| SQLite     | sqlite:///path/to/my.db |

## Auth config

By default, all the endpoints are public without any authentication. It's suitable to be used as an internal tool or put after a reverse proxy like Nginx. if you want to have user authentication for the API endpoints, you can turn on auth configs. Check the [Authentication and Authorization](../guides/auth) guide to understand how it works.

`enabled`

Whether to enable authentication and authorization, default false.

`secret`

The JWT secret. It is used to sign and parse the JWT token.
