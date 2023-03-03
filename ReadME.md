## Backend Test

## Quikstart

-  `npm install`
-  `npm run dev`

API Routes

### Add user

`POST`

```jsx
const body = {
	"first_name":"1231231231",
      "last_name":"123123",
      "address":"qweqweq",
      "postcode":"2312",
      "phone_number":"1231231231231231",
      "email":"email@rjwljr.com",
      "username":"uiuuuu",
      "password":"123123"
      'active':true
}

http://localhost:3000/api/users
```

### Edit a user

`PATCH`

```jsx
http://localhost:3000/api/user/2?active=false
```

### Delete a user

`DELETE`

```jsx
http://localhost:3000/api/user/24
```

### View list of all users in the system

`GET`

```jsx
http://localhost:3000/api/users
```

### Allow multiple users to be removed

`DELETE`

```jsx
http://localhost:3000/api/deluser/
```
