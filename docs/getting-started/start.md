---
sidebar_position: 1
---
# Quick start

## Docker image

Run the server in Docker and connect to an existing database

``` bash
# connect to postgres
docker run -p 3000:3000 restgo/rest -db.url "postgres://user:passwd@localhost:5432/db"

# connect to sqlite file with volume
docker run -p 3000:3000 -v $(pwd):/data restgo/rest -db.url "sqlite:///data/my.db"
```

## Use API
Assume there is a `todos` table in the database with `id`, `title` and `done` fields, the RESTFul CURD API is auto-generated for the table.

#### Create a todo item
``` bash
curl -XPOST "localhost:3000/todos" -d '{"title": "setup api server", "done": false}'
```

#### Read
``` bash
curl -XGET "localhost:3000/todos/1"
```

#### Update
``` bash
curl -XPUT "localhost:3000/todos/1" -d '{"title": "setup api server", "done": true}'
```

#### Delete
``` bash
curl -XDELETE "localhost:3000/todos/1"
```


## What's Next
- Check the [Installation](./installation) page for more ways to install Rest.
- Check the [Configuration](./configuration) page for how to configure Rest.
- Check the [API guide](../guides/api) page for detail API usage.
