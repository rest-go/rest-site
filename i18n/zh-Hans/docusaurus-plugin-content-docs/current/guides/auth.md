---
sidebar_position: 5
---

# Authentication & Authorization

``` bash
rest auth setup
```

## Register
``` bash
curl -XPOST localhost:3001/auth/register -d '{"username": "hello", "password":"world"}'
```

## Login
```bash
curl -i -XPOST localhost:3001/auth/login -d '{"username": "hello", "password":"world"}
```

username: admin
password: GNCEB25DWOI7
