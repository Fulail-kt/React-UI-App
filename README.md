# User & Role Management

This project is a Management system implemented using ReactJS for the frontend and Node.js/Express for the backend.

## Features

- **Role Management:**
  - CRUD operations for roles including create, read, update, and delete.
  - Form and table implementation for managing roles.

- **User Management:**
  - CRUD operations for users including create, read, update, and delete.
  - Form and table implementation for managing users.
  - Ability to assign multiple roles to users.

- **Authentication & Authorization:**
  - Implemented authentication logic for user login.
  - Implemented authorization logic to restrict access based on user roles.
  - Hid menus and protected routes based on user roles.

## Installation

1. Clone the repository:

   ```sh
     https://github.com/Fulail-kt/React-UI-App
  

2. Install dependencies for frontend and backend:
   ```sh
    cd server
    npm install
   ```

   ```sh
    cd client
    npm install
   ```

3. SetUp .env file

   Server
   ```sh
    JWT_SECRET="jwt-secret"
    PORT='Port number'
    FRONTEND_URL='frontend url'
    MONGO_URI='Mongodb URI'
    
   ```

 Client
  ```sh
   REACT_APP_BASE_URL="Backend URL"
  ```

4. Start
   ```sh
     npm start 


## API Documentation

The backend API endpoints are documented below:

- **GET /api/roles:** Retrieve all roles.
- **POST /api/create-role:** Create a new role.
- **GET /api/roles/:role:** Retrieve a specific role by ID.
- **PUT /api/roles/:id:** Update a role.
- **DELETE /api/roles/:id:** Delete a role.
- **GET /api/users:** Retrieve all users.
- **POST /api/create-users:** Create a new user.
- **GET /api/users/:id:** Retrieve a specific user by ID.
- **PUT /api/users/:id:** Update a user.
- **DELETE /api/users/:id:** Delete a user.
- **POST /api/login** User Login.


