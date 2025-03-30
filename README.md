
# Binbag Backend Assignment

A RESTful API with endpoints for:

○ User registration/profile creation

○ Profile retrieval

○ Profile update



## Author

- Sagar Pandey (FullStack Web Developer)



## API Reference
You can use postman for invigilating the working of each route.

#### Register route

```http
  POST http://localhost:3000/api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |
| `address` | `string` | **Required**. Your current address |
| `bio` | `string` | Your bio |
| `profilePicture` | `string` | Your profile picture |

#### Login route

```http
  POST http://localhost:3000/api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Your entered email id |
| `password`      | `string` | **Required**. Your entered password |

#### get User profile information

```http
  GET http://localhost:3000/api/user/profile
```
Add authentication key or JWT token in Header and set route to get user information.

#### Update User Profile

```http
  PUT http://localhost:3000/api/user/profile-update
```
Add this url and add information like name, email, address or bio and profilePicture to the body in key-value fields and select PUT request. and press enter check in mongo database.