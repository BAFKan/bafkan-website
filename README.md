# bafkan-website

BAFKan is a dynamic Kanban application facilitating seamless group project management across three stages (Todos, In Progress, Done), enhanced by real-time chat capabilities through socket.io integration.

Edit for Sabira Another One Updated

### 1. Available endpoints for **_Public Site_**

- [**_POST_** /register](#1-register)
- [**_POST_** /login](#2-userlogin)

* [**_POST_** /projects](#3-get-projects)
* [**_GET_** /projects](#4-get-projects)
* [**_GET_** /projects/:projectId](#5-get-projectsprojectId)
* [**_DELETE_** /projects/:projectId](#6-delete-projectsprojectId)

- [**_POST_** /todos](#7-post-todos)
- [**_GET_** /todos](#8-get-todos)
- [**_GET_** /todos/:todoId](#9-get-todosTodoid)
- [**_DELETE_** /todos/:todoId](#10-delete-todosTodoid)

- [**_POST_** /project-todos/:projectId](#11-post-Project-todosprojectId)
- [**_GET_** /project-todos](#12-get-project-todos)
- [**_GET_** /project-todos/:projectId](#13-get-project-todos)
- [**_DELETE_** /project-todos/:projectId](#14-get-project-todos)

### 2. Global Error

- [**_Global Error_**](#global-error)

&nbsp;

<!-- ## 1. POST /user/register -->

## 1. POST /register

Endpoint to create account user

#### Request - Body

```json
{
  "fullname": "string",
  "email": "string",
  "password": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "id": 3,
  "email": "adnan@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "fullname cannot be null"
}
OR;
{
  "message": "fullname cannot be empty"
}
OR;
{
  "message": "email cannot be null"
}
OR;
{
  "message": "email cannot be empty"
}
OR;
{
  "message": "Invalid email format"
}
OR;
{
  "message": "Email already registered"
}
OR;
{
  "message": "password cannot be null"
}
OR;
{
  "message": "password cannot be empty"
}
```

&nbsp;

</details>

<!-- ## 2. POST /user/login -->

## 2. POST /login

#### Request - Body

```json
{
  "email": "string",
  "password": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG5hbkBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWRuYW4gTnVncm9obyIsInBob3RvIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS81MDB4NTAwLz9wZXJzb24iLCJpYXQiOjE3MDAxNTg2NTl9.1T4jd_rWB5yK-QaQAMz65QZhE8V7Htbbv8yYOkWgyyc"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please Input Email/Password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email/Password"
}
```

&nbsp;

</details>

## 3. POST /projects

#### Request - Body

```json
{
  "name": "string",
  "description": "string",
  "UserId": "integer"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "newProject": [
    {
      "id": 1,
      "name_project": "Persimmon",
      "description": "Ebenaceae",
      "UserId": 1,
    },
    ...
  ]
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "name_project cannot be null"
}
OR;
{
  "message": "name_project cannot be empty"
}
OR;
{
  "message": "description cannot be null"
}
OR;
{
  "message": "description cannot be empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 4. GET /projects

#### Request - Body

```json
{
  "name": "string",
  "description": "string",
  "UserId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - Ok)_

```json
{
  "project": [
    {
      "id": 1,
      "name_project": "coba",
      "description": "Ebenaceae",
      "UserId": 1,
      "createdAt": "2023-11-21T10:54:01.511Z",
      "updatedAt": "2023-11-21T10:54:01.511Z"
    },
    {
      "id": 2,
      "name_project": "test",
      "description": "Ebenaceae",
      "UserId": 4,
      "createdAt": "2023-11-22T04:57:08.866Z",
      "updatedAt": "2023-11-22T04:57:08.866Z"
    }
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 5. GET /projects/:ProjectId

#### Request - Params

```json
{
  "ProjectId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "project": {
    "id": 2,
    "name_project": "kjwbj",
    "description": "kjwbf",
    "UserId": 1,
    "createdAt": "2023-11-21T10:54:01.511Z",
    "updatedAt": "2023-11-21T10:54:01.511Z"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

</details>

## 6. DELETE /projects/:ProjectId

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Success delete project with id 5"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

</details>

## 7. POST /todos

#### Request - Body

```json
{
  "name_todo": "string",
  "description": "string",
  "status": "string",
  "UserId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "todo": [
    {
      "id": 1,
      "name_todo": "Persimmon",
      "description": "Ebenaceae",
      "status": "Low",
      "ProjectId": 4,
      "updatedAt": "2023-11-21T10:54:01.511Z",
      "createdAt": "2023-11-21T10:54:01.511Z"

    },
    ...
  ]
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "name_todo cannot be null"
}
OR;
{
  "message": "name_todo cannot be empty"
}
OR;
{
  "message": "description cannot be null"
}
OR;
{
  "message": "description cannot be empty"
}
OR;
{
  "message": "status cannot be null"
}
OR;
{
  "message": "status cannot be empty"
}
OR;
{
  "message": "ProjectId cannot be null"
}
OR;
{
  "message": "ProjectId cannot be empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 8. GET /todos

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "todo": [
    {
      "id": 1,
      "name_todo": "Sloppy Joes",
      "description": "This beats canned or ...",
      "status": "Low",
      "createdAt": "2023-10-30T20:25:08.875Z",
      "updatedAt": "2023-10-30T20:25:08.875Z"
    },
    {
      "id": 2,
      "name_todo": "Sloppy Joes",
      "description": "This beats canned or ...",
      "status": "Low",
      "createdAt": "2023-10-30T20:25:08.875Z",
      "updatedAt": "2023-10-30T20:25:08.875Z"
    }
    ...
  ]
}
```

_Response (400 - Bad Request)_

```json
{
  "message": ""
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 9. GET /todos/:TodoId

#### Request - Params

```json
{
  "TodoId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "todo": {
    "id": 2,
    "name_todo": "kjwbj",
    "description": "kjwbf",
    "status": "Low",
    "ProjectId": 1,
    "createdAt": "2023-11-21T10:54:01.511Z",
    "updatedAt": "2023-11-21T10:54:01.511Z"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

</details>

## 10. DELETE /todos/:TodoId

#### Request - Params

```json
{
  "TodoId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Success delete todo with id 5"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

</details>

## 11. POST /project-todos/:projectId

#### Request - Params

```json
{
  "projectId": "<integer>"
}
```

#### Request - Login Info

```json
{
  "id": "<integer>"
}
```

_Response (201 - Created)_

```json
{
  "project_todo": [
    {
      "id": 1,
      "UserId": 2,
      "ProjectId": 1
    },
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

## 12. GET /project-todos

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - Ok)_

```json
{
  "data": [
    {
      "id": 8,
      "ProjectId": 2,
      "UserId": 4,
      "createdAt": "2023-11-22T07:23:16.318Z",
      "updatedAt": "2023-11-22T07:23:16.318Z",
      "Project": {
        "id": 2,
        "name_project": "kjwbj",
        "description": "kjwbf",
        "UserId": 1,
        "createdAt": "2023-11-21T10:54:01.511Z",
        "updatedAt": "2023-11-21T10:54:01.511Z"
      },
      "User": {
        "id": 4,
        "fullname": "bira",
        "email": "bira@mail.com"
      }
    }
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 13. GET /project-todos/:projectId

#### Request - Params

```json
{
  "projectId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "todo": {
    "id": 2,
    "name_todo": "kjwbj",
    "description": "kjwbf",
    "status": "Low",
    "ProjectId": 1,
    "createdAt": "2023-11-21T10:54:01.511Z",
    "updatedAt": "2023-11-21T10:54:01.511Z"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

_Response (500 - Global Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

</details>

## 14. DELETE /project-todos/:projectId

#### Request - Params

```json
{
  "projectId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Success delete project todos with id 5"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

</details>

<!-- GLOBAL ERROR -->

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
