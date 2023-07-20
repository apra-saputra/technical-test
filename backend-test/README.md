# BACKEND-API-TEST

- description : Ini merupakan RestFul API untuk mengakses user yang sedang login. menggunakan authentication, dan cookie untuk menyimpan access

## **GETTING START**

### _Install the dependancies_

```
npm install
```

### _Create Variable & connect to database_

create a _.env_ file at the root of the project base on _.example.env_
populate it with the url of your database

```
DATABASE_URL="postgresql://<username>:<password>@<host_name>:<port>/<database_name>?schema=public"
```

### _Command Line List_

| Command Line       | Description                                |
| ------------------ | ------------------------------------------ |
| npx prisma db push | populate database                          |
| npm run build      | To build from typescript to javascript es6 |
| npm run start      | To start javascript only                   |
| npm run compile    | run "build" and "start"                    |

## **TECH STACK**

- Typescript
- Express
- Prisma
- Postgresql
- Json Web Token
- Bcrypt
- Cors
- Cookie-parser

## **API-SPEC**

### Routes

- [POST /api/register](#Register)
- [POST /api/login](#Login)
- [GET /api/me](#Me)
- [DELETE /api/logout](#Logout)

## Register

Request

- body

  ```json
  {
    "email": "string",
    "name": "string",
    "password": "string"
  }
  ```

Response

- Success Register ( _201_ )

  ```json
  {
    "statusCode": "number",
    "statusText": "string",
    "payload": {
      "data": {
        "email": "string",
        "name": "string"
      }
    }
  }
  ```

- ERROR

  - ( _400_ )

  ```json
  "errorMessage": "Email is required"
  ```

  - ( _400_ )

  ```json
  "errorMessage": "Name is required"
  ```

  - ( _400_ )

  ```json
  "errorMessage": "Password is required"
  ```

  - ( _400_ )

  ```json
  "errorMessage": "Password min 5 char"
  ```

  ```json
  {
    "statusCode": "Integer",
    "status": "ERROR",
    "payload": {
      "errorMessage": "String"
    }
  }
  ```

## Login

Request

- body

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

- cookies

  ```json
  {
    "accesstoken": "string"
  }
  ```

Response

- Success Login ( _200_ )

  ```json
  {
    "statusCode": "number",
    "statusText": "string",
    "payload": {
      "message": {
        "email": "string",
        "name": "string"
      }
    }
  }
  ```

- ERROR

  - ( _400_ )

  ```json
  "errorMessage": "Email is required"
  ```

  - ( _400_ )

  ```json
  "errorMessage": "Password is required"
  ```

  - ( _400_ )

  ```json
  "errorMessage": "invalid email/password"
  ```

  ```json
  {
    "statusCode": "Integer",
    "status": "ERROR",
    "payload": {
      "errorMessage": "String"
    }
  }
  ```

## Me

Request

- cookie

  ```json
  {
    "accesstoken": "string"
  }
  ```

Response

- Success Get User ( _200_ )

  ```json
  {
    "statusCode": "number",
    "statusText": "string",
    "payload": {
      "data": {
        "email": "string",
        "name": "string"
      }
    }
  }
  ```

- ERROR

  - ( _401_ )

  ```json
  "errorMessage": "access denied"
  ```

  - ( _404_ )

  ```json
  "errorMessage": "data not found"
  ```

  ```json
  {
    "statusCode": "Integer",
    "status": "ERROR",
    "payload": {
      "errorMessage": "String"
    }
  }
  ```

## Logut

Request

- cookies

  ```json
  {
    "accesstoken": "string"
  }
  ```

Response

- Success Logout ( _200_ )

  ```json
  {
    "statusCode": "number",
    "statusText": "string",
    "payload": {}
  }
  ```

- ERROR

  - ( _401_ )

  ```json
  "errorMessage": "access denied"
  ```

  - ( _404_ )

  ```json
  "errorMessage": "data not found"
  ```

  ```json
  {
    "statusCode": "Integer",
    "status": "ERROR",
    "payload": {
      "errorMessage": "String"
    }
  }
  ```

## Global Error

- ERROR

  - ( _500_ )

  ```json
  "errorMessage": "internal server error"
  ```

  ```json
  {
    "statusCode": "Integer",
    "status": "ERROR",
    "payload": {
      "errorMessage": "String"
    }
  }
  ```
