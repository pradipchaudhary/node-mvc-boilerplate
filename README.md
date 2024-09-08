# node-mvc-boilerplate

A Simple Node JS Model View Controller boilerplate application

## Overview

This is a simple boilerplate project using the MVC (Model-View-Controller) pattern with Node.js, Express.js, MongoDB, and TypeScript. It provides a foundational setup to help you get started with building scalable and maintainable web applications.

## Features

-   **MVC Pattern**: Organized project structure following the Model-View-Controller design pattern.
-   **Node.js**: JavaScript runtime for building server-side applications.
-   **Express.js**: Web application framework for Node.js.
-   **MongoDB**: NoSQL database for storing data.
-   **TypeScript**: Superset of JavaScript that adds static typing.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (>= 14.x)
-   [MongoDB](https://www.mongodb.com/) (Local or cloud instance)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Navigate into the project directory:

    ```bash
    cd your-repo-name
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    ```

5. Compile TypeScript and start the server:

    ```bash
    npm run build
    npm start
    ```

    or

    ```bash
    yarn build
    yarn start
    ```

### Directory Structure

-   `src/`
    -   `controllers/` - Contains request handling logic for routes.
    -   `models/` - Contains Mongoose schemas and models.
    -   `routes/` - Defines the application's routes.
    -   `services/` - Contains business logic and data processing.
    -   `views/` - Contains view templates (if using server-side rendering).
    -   `middlewares/` - Custom middleware for the application.
    -   `config/` - Configuration files and setup (e.g., database connection).
    -   `utils/` - Utility functions and helpers.
    -   `app.ts` - Main application entry point.
-   `public/` - Publicly accessible files (e.g., images, static assets).
-   `tests/` - Contains test files.
-   `package.json` - Project metadata and dependencies.
-   `tsconfig.json` - TypeScript configuration.

### Scripts

-   `npm run build` or `yarn build`: Compiles TypeScript code.
-   `npm start` or `yarn start`: Starts the server in production mode.
-   `npm run dev` or `yarn dev`: Starts the server in development mode with hot-reloading.

### Contributing

1. Fork the repository.
2. Create a feature branch:

    ```bash
    git checkout -b feature/your-feature
    ```

3. Commit your changes:

    ```bash
    git commit -m "Add your message here"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature
    ```

5. Create a Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
