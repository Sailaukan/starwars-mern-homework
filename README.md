# StarWars Planets Viewer

This project is a homework assignment for the nFactorial Incubator summer program, where we are learning web development. The project utilizes the MERN stack (MongoDB, Express, React, Node) to fetch, store, and display data about planets from the StarWars universe.

## Overview

This project demonstrates a full-stack web application that interacts with an external API to fetch data about StarWars planets. The data is stored in a MongoDB database and displayed on a React frontend. Users can fetch data by pressing a button, and the data will be automatically saved to the database. Additionally, users can search for planets by name using a search bar.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **External API**: StarWars API (https://swapi.dev)

## Features

- Fetch data about planets from the StarWars API.
- Store fetched data in a MongoDB database.
- Display planets data on the frontend.
- Search for planets by name.
- Responsive design with cards displaying planet information.
- Loading and error handling.

## Setup and Installation

### Prerequisites

- Node.js and npm
- MongoDB instance
- Git

### Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:Sailaukan/starwars-mern-homework.git
    cd starwars-mern-homework
    ```

2. **Backend setup**:
    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add your MongoDB connection string and port:
    ```
    MONGO_URL=your_mongodb_connection_string
    PORT=4000
    ```

    Start the backend server:
    ```bash
    npm start
    ```

3. **Frontend setup**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## Usage

1. **Fetch and Store Data**: Click the "Fetch and Store Data" button to fetch planet data from the StarWars API and store it in the MongoDB database.
2. **Search for Planets**: Use the search bar to find planets by name.

### Backend

- **GET /planets/**: Retrieve all planets from the database.
- **GET /planets/:id**: Retrieve a specific planet by ID.
- **POST /planets/sw-share**: Fetch planets data from the StarWars API and store the first 10 planets in the database.
