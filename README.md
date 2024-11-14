# Project Name

A brief description of your application and its purpose.

## Table of Contents

1. [About](#about)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Configuration](#configuration)
8. [Contact](#contact)

---

## About

- **Full-Stack Application**: A simple application featuring user authentication (sign up and sign in) built with NestJS (backend) and React (frontend).
- **User Authentication**: Includes a sign-up page with validation for email, name, and password, and a sign-in page for authentication.
- **Password Validation**: Ensures that passwords are at least 8 characters long and contain at least one letter, one number, and one special character.
- **MongoDB Integration**: Utilizes MongoDB as the database for storing user information, with Mongoose ORM for interacting with the database.
- **Frontend with React**: The frontend is built using React, with a clean and simple UI for user interaction.
- **Backend with NestJS**: The backend uses NestJS for handling API endpoints, authentication, and user management.
- **Security**: Follows security best practices for handling user credentials and passwords.
- **Logging**: Implements logging functionality using a logger service for monitoring activities on the backend.
- **Redirection**: After a successful signup, users are redirected to the application page with a welcome message.

---

## Technologies Used

- **Backend**: [NestJS](https://nestjs.com/), MongoDB
- **Frontend**: [React](https://reactjs.org/), [Yarn](https://yarnpkg.com/)
- **Database**: MongoDB via [mLab](https://mlab.com/) (for testing and development)
- **Other**: [dotenv](https://www.npmjs.com/package/dotenv) for environment configuration, [Logger Service] for logging

---

## Getting Started

To get the application running locally, follow these steps:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>

# Navigate to the backend folder
cd backend

# Install backend dependencies
yarn install

# Start the backend in development mode
yarn start:dev


2. Frontend Setup
# Navigate to the frontend folder
cd frontend

# Install frontend dependencies
yarn install

# Start the frontend in development mode
yarn start

```

### Configuration
Environment Variables
To configure the application, make sure to set up the environment variables in the .env files for both backend and frontend.

Backend: Update the /backend/.env.development file as needed.

PORT: The port for the backend server (default: 8000)
MONGO_URI: MongoDB URI, including mlab URI for testing if applicable.
Frontend: Update the /frontend/.env file as needed.

REACT_APP_API_URL: The base URL for the backend API.
PORT: The port for the frontend server (default: 3000)

env files are added as this is for test 


### Contact
For any issues or inquiries, please contact Bharat at bharatrose1@gmail.com

### Looking forward 
