# Users

Basic CRUD for interacting with the JSON API's user resources.

## Create

### Request

```shell
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"new-user", "password":"my-password", "email":"my@email.com"}' \
  http://localhost:3000/users
```

### Response

```json
{
  "ok": true,
  "message": "User created",
  "user": {
    "id": 2,
    "username": "new-user",
    "email": "my@email.com",
    "created_at": "2018-04-03 14:43:02.183277-04",
    "updated_at": "2018-04-03 14:43:02.183277-04"
  }
}
```

## List

### Request

```shell
curl \
  -X GET \
  http://localhost:3000/users
```

### Response

```json
{
  "ok": true,
  "message": "Users found",
  "users": [
    {
      "id": 1,
      "username": "admin",
      "email": "admin@email.com",
      "created_at": "2018-04-03 14:43:02.183277-04",
      "updated_at": "2018-04-03 14:43:02.183277-04"
    },
    {
      "id": 2,
      "username": "new-user",
      "email": "my@email.com",
      "created_at": "2018-04-03 14:43:02.183277-04",
      "updated_at": "2018-04-03 14:43:02.183277-04"
    }
  ]
}
```

## Get

### Request

```shell
curl \
  -X GET \
  http://localhost:3000/users/2
```

### Response

```json
{
  "ok": true,
  "message": "User found",
  "user": {
    "id": 2,
    "username": "new-user",
    "email": "my@email.com",
    "created_at": "2018-04-03 14:43:02.183277-04",
    "updated_at": "2018-04-03 14:43:02.183277-04"
  }
}
```

## Update

### Request

```shell
curl \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username":"name-changed", "password":"new-password", "email":"new@email.com"}' \
  http://localhost:3000/users/2
```

### Response

```json
{
  "ok": true,
  "message": "User updated",
  "user": {
    "id": 2,
    "username": "name-changed",
    "email": "new@email.com",
    "created_at": "2018-04-03 14:43:02.183277-04",
    "updated_at": "2018-04-03 14:43:02.183277-04"
  }
}
```

## Delete

### Request

```shell
curl \
  -X DELETE \
  http://localhost:3000/users/2
```

### Response

```json
{
  "ok": true,
  "message": "User '2' deleted",
  "deleteCount": 1
}
```
