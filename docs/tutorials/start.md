---
sidebar_position: 1
---
# Quick Start

## Start Rest in Docker
run server and connect to an existing database
``` bash
# connect to postgres
docker run -p 3000:3000 restgo/rest -db.url "postgres://user:passwd@localhost:5432/db"

# connect to sqlite file with volume
docker run -p 3000:3000 -v $(pwd):/data restgo/rest -db.url "sqlite:///data/my.db"
```

## Use API
Assume there is a `todos` table in the database with `id`, `title` fields:

``` bash
# Create a todo item
curl -XPOST "localhost:3000/todos" -d '{"title": "setup api server", "done": false}'

# Read
curl -XGET "localhost:3000/todos/1"

# Update
curl -XPUT "localhost:3000/todos/1" -d '{"title": "setup api server", "done": true}'

# Delete
curl -XDELETE "localhost:3000/todos/1"
```


## What's Next
- check [Installation](./installation) page for more ways to install Rest.
- check [Configuration](./configuration) page for how to configure Rest.
- check [API guide](../guides/api) page for different API operations.