# Authentication

This being a sample application, this is by no means a proper authentication
implementation and is only meant to demonstrate some very basic concepts in
the context of knex and express.

## Login

### Request

```shell
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"admin", "password":"password"}' \
  http://localhost:3000/login
```

### Response

```json
{
  "ok": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@email.com",
    "created_at": "2018-04-03 14:43:02.183277-04",
    "updated_at": "2018-04-03 14:43:02.183277-04"
  }
}
```

## Register

```shell
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"new-user", "password":"my-password", "email":"my@email.com"}' \
  http://localhost:3000/register
```

### Response

```json
{
  "ok": true,
  "message": "Registration successful",
  "user": {
    "id": 2,
    "username": "new-user",
    "email": "my@email.com",
    "created_at": "2018-04-03 14:43:02.183277-04",
    "updated_at": "2018-04-03 14:43:02.183277-04"
  }
}
```
