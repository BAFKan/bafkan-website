# bafkan-website

BAFKan is a dynamic Kanban application facilitating seamless group project management across three stages (Todos, In Progress, Done), enhanced by real-time chat capabilities through socket.io integration.

Edit Readme Diba

### 1. Available endpoints for Public site

- POST /register
- POST /login

- POST /projects
- GET /projects
- GET /projects/:ProjectId
- DELETE /projects/:ProjectId

- POST /todos
- GET /todos
- GET /todos/:TodoId
- DELETE /todos/:TodoId

### 2. Global error

- 500

## 1. POST /register

Endpoint to create account user

#### Request-Body

```js
{
    fullname: "string",
    email: "string",
    password: "string"
}
```

Response (201- created)

```js
{
    User: {
        id : integer,
        fullname: "string",
        email: "string",
        password: "string"
    }
}
```

Response (400 - Bad Request)

```js
{
  message: "fullname cannot be null";
}
OR;
{
  message: "fullname cannot be empty";
}
OR;
{
  message: "email cannot be null";
}
OR;
{
  message: "email cannot be empty";
}
OR;
{
  message: "password cannot be null";
}
OR;
{
  message: "password cannot be empty";
}
```

Response (500 - Global Error)

```js
{
  message: "Internal Server Error";
}
```

## 2. POST /login

#### Request-Body

```js
{
    fullname: "string",
    email: "string",
    password: "string"
}
```

#### Response (200 - Ok)

```js
{
    fullname: "string",
    email: "string",
    password: "string"
}
```

#### Response ()
