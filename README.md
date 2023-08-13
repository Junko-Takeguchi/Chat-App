# Real-Time Chat Application

This is a real-time chat application built using React for the frontend and Express with WebSocket for the backend. The application allows users to create accounts, log in, and start chatting with other online users in real time. It features a responsive user interface with a sidebar showing online users, a main chat area displaying messages, and an input area to send new messages.

**Key Features:**
- User authentication using JWT tokens
- WebSocket integration for real-time messaging
- Dynamic sidebar showing online users
- Unique message IDs to prevent duplicate messages
- Intuitive user interface with chat display and input area
- Reactive state management using Recoil

**Tech Stack:**
- Frontend: React, Material-UI
- Backend: Express, WebSocket, MongoDB
- State Management: Recoil
- Styling: CSS
- Deployment: Localhost (for development)

This project serves as a practical example of building a real-time chat application using modern web technologies. It demonstrates how to manage user authentication, handle WebSocket communication, and manage state efficiently using Recoil. Feel free to explore the codebase and adapt it for your own use or as a foundation for more complex projects.

**Local Setup:**

1. Clone the repository
2. Install dependencies for both the client and server
3. Create a .env file in the server directory and provide your MongoDB connection string and JWT secret key
4. Run the server from the server directory and client in the src directory