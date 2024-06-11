
# Instant Messaging App # 

## Introduction ##
This project is an instant messaging application designed to provide users with the ability to communicate in real-time. Our app supports one-on-one messaging as well as group chats, integrating features such as user authentication and real-time notifications. 

### Technologies Used ###
- Frontend: React.js, TailwindCSS, Socket.IO Client 
- Backend: Node.js, Express, MongoDB, Socket.IO
- Testing: Jest for backend testing, React Testing Library for frontend tests

## Features ##
- Real-time one-on-one messaging
- Message timestamps 
- Notification system with ios sound
- Authenticated password hashing used with bycryptjs

## Project Structure ##
The application is structured into two main directories: `frontend` and `backend`. Each part is designed to operate independently yet communicate seamlessly via RESTful APIs and real-time sockets.

backend/
    controllers/        # Functions to handle requests
        auth.controllers.js
        message.controller.js
        user.controller.js

    models/             # Database models
        user.model.js
        message.model.js
        conversation.model.js

    routes/             # Route definitions
        auth.routes.js
        user.routes.js
        message.routes.js

    middleware/         # Middleware for routing and authentication
        protectRoute.js

    db/                 # Database connection utilities
        connectToMongoDB.js

    tests/              # Test suites for the backend
        auth.test.js
        message.test.js
        conversation.test.js

    socket/             # Socket.io configuration for real-time     communication
        socket.js
	
    server.js           # Entry point for the backend


frontend/

    public/             # Static files like index.html
        vite.svg
        bg photo

    src/                # React source files
    components/     # Reusable UI components
    assets/
    context/
    hooks/
    pages/ 
    utils/
    zustard/

    context/        # React context for state management
        AuthContext.js
        SocketContext.js

    hooks/          # Custom hooks for various functionalities
        useGetConversations.js
        useGetMessages.js
        useListenMessages.js
        useLogin.js
        useLogout.js
        useSendMessage.js
        useSignup.js
    pages/ 	         # Holds all the custom pages 
        home/
            home.jsx
        login/ 
            login.jsx
        signup/
            GenderCheckBox.jsx
            SignUp.jsx
    Utils/	        # Holds all utility functions like sound and random emojis
        Emojis.js
        extractTime.js
    Zustard/
        useConverssation.js
    Components/     # Location of react components
        Messages/
                Message.jsx
                MessageContainer.jsx
                MessageInput.jsx
                Messages.jsx
	Sidebar/
		Conversation.jsx
		Conversations.jsx
		LogoutButton.jsx
		SearchInput.jsx
		Sidebar.jsx
	Skeletons/
		MessageSkeleton.jsx
	
    useAuth.js
    useSocket.js
    useMessages.js

    App.jsx         # Main React application component
    index.js        # Entry point for the frontend
    Main.jsx

index.html
tailwind.config.js
vite.config.js
postcss.config.js


#### Backend ###
- Controllers: Handle incoming requests and return responses.
- Models: Define the schema of the database.
- Routes: Direct requests to the appropriate controller.
- Middleware: Provide routing guards and utility functions.
- Socket: Manage real-time communication.

#### Frontend ###
- Components: Reusable React components.
- Hooks: Custom React hooks for managing state and side effects.
- Pages: Components that correspond to application pages.
- Context: State management using React Context.

### Implementation Details ###
Our app utilizes React for the frontend to create a responsive and interactive user experience. The backend, powered by Node.js and Express, handles API requests and communicates with a MongoDB database for data persistence. Real-time capabilities are enabled through Socket.IO.

## Setup and Installation ##
To set up this project locally, follow the instructions below:
git clone https://github.com/LisCore/instant-messaging-app
cd instant-messaging-app
### Install backend dependencies ###
    npm init -y >> in package.json file change "main": "server.js"
    npm install express dotenv cookie-parser bycryptjs mongoose socket.io jsonwebtoken
    * to work locally, will need to go into frontend/context/SocketContext.jsx and change the link to this:
        <!-- useEffect(() => {
            if (authUser) {
                // const socket = io("http://localhost:3000", { --> *
    Start the backend server
    npm run server – (opens backend server http://localhost/3000) 

### Install frontend dependencies ###
    cd frontend
    npm install vite@latest . >> react >> javascript >> npm i 
    npm install -D tailwindcss postcss autoprefix
    npm install daisyui@latest
    npm i react-router-dom
    npm i react-hot-toast
    npm install zustard
    npm i socket.io-client
    Start the frontend client
    npm run dev – (opens up http://localhost/8000) 


## Testing ##
We used Jest along with the React Testing Library to ensure that both the backend logic and the frontend components function as expected.

### How to Run Tests ###
    Execute the following commands to run tests:
    bash
    Backend tests
    cd backend
    npm test

<!-- # Frontend tests
cd ../frontend
npm test -->


Deployment
The application is deployed at [Render](https://render.com). You can access the live application via the following link:
[Live Demo] https://instant-message-clone.onrender.com/login

Contributors
- Corey Lee
- Robert Krah
