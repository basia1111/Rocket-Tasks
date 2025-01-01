
# Rocket Tasks

🌌 **Welcome Aboard, Space Traveler!** 🚀

Rocket Tasks is a MERN (MongoDB, Express, React, Node.js) application designed to help users manage their tasks efficiently. This app serves as your mission control, allowing you to create, update, and delete tasks while ensuring secure user authentication. Stay on course in your journey through the cosmos of productivity!

<img width="800" alt="Zrzut ekranu 2024-12-23 o 14 58 31" src="https://github.com/user-attachments/assets/3b2a40ac-6126-4b1d-9aff-cfbb2176a44b" />
<img width="8s00" alt="Zrzut ekranu 2025-01-1 o 18 09 38" src="https://github.com/user-attachments/assets/82dcf02d-d5d8-44d2-92c2-a94adebd0526" />


## Features

### Current Features
- **User Authentication**: Securely register, log in, and log out.
- **Task Management**: Create, edit, delete and mark tasks with ease,
- **Tag Management**: Organize tasks with customizable tags for better categorization and retrieval.
- **Toast Notifications**: Inform users of important events (such as task creation, updates, or errors) with stylish toast notifications.
- **Responsive Design**: Built with Tailwind CSS for a sleek, modern, and responsive UI.
- **Animations**: Smooth transitions and effects powered by Framer Motion to make navigating your tasks feel seamless.
- **React Router**: Client-side routing to provide smooth navigation.

## Technologies Used

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **React Router**: For handling routing within the app.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Framer Motion**: For animations and transitions.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server.
  - **Express**: Web framework for Node.js.
  - **MongoDB**: NoSQL database for storing user and task data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

### Prerequisites

- Node.js (version 14 or later)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/basia1111/Rocket-Tasks.git
cd Rocket-Tasks
```

### Install Dependencies

1. Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

2. Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

### Environment Variables

#### Backend

Create a `.env` file in the `backend` directory and set up your environment variables. An example `.env` file may look like this:

```
DATABASE_URL=your_db_URL
JWT_SECRET=your_JWT_secret
NODE_ENV=development
```

#### Frontend

Create a `.env` file in the `frontend` directory and set up your environment variables. An example `.env` file may look like this:

```
VITE_API_URL=http://localhost:3000/api
```

## Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

2. In a new terminal, start the frontend application:

```bash
cd frontend
npm run dev
```

The application should now be running on `http://localhost:5173` for the frontend and `http://localhost:3000` for the backend.
