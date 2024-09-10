# Node MVC Boilerplate

A Simple Node.js Model-View-Controller boilerplate application.

## Overview

This is a simple boilerplate project using the MVC (Model-View-Controller) pattern with Node.js, Express.js, MongoDB, and TypeScript. It provides a foundational setup to help you get started with building scalable and maintainable web applications.

## Features

-   MVC architecture for better organization and scalability.
-   Built with TypeScript for a type-safe and maintainable codebase.
-   Express.js for creating robust and flexible routes.
-   MongoDB with Mongoose for schema-based data modeling.
-   Environment configuration with `dotenv`.
-   Clean and maintainable folder structure.

## Directory Structure

```bash
src/
│
├── controllers/    # Contains request handling logic for routes
├── models/         # Contains Mongoose schemas and models
├── routes/         # Defines the application's routes
├── services/       # Contains business logic and data processing
├── views/          # Contains view templates (if using server-side rendering)
├── middlewares/    # Custom middleware for the application
├── config/         # Configuration files and setup (e.g., database connection)
├── utils/          # Utility functions and helpers
│
├── app.ts          # Main application entry point
└── public/         # Publicly accessible files (e.g., images, static assets)
```

## Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/node-mvc-boilerplate.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project with the following variables:

    ```bash
    MONGO_URI=mongodb://localhost:27017/yourdbname
    PORT=3000
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    The server will be running on `http://localhost:3000`.

## Available Scripts

-   `npm run build`: Compiles TypeScript into JavaScript.
-   `npm run watch`: Watches for file changes and automatically compiles TypeScript.
-   `npm run start`: Starts the application in production mode.
-   `npm run start:dev`: Starts the application in development mode with hot-reloading using `nodemon`.
-   `npm run dev`: Runs the development server by compiling TypeScript, watching for changes, and using `nodemon` to restart the app.
-   `npm run clean`: Cleans the `dist` directory.

## Technologies Used

-   **Node.js**: JavaScript runtime for building server-side applications.
-   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
-   **TypeScript**: A statically typed superset of JavaScript.
-   **MongoDB**: NoSQL database for high performance and scalability.
-   **Mongoose**: MongoDB object modeling for Node.js.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
