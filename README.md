# ChatIO

## Description

Exemple project using NodeJS, ReactJS, SocketIO, Docket e MongoDB.

## Dependencies

- Node.js 10+
- MongoDB - (I'm using Mongo Atlas to facilitate)

## Envs

### Server

- PORT=PORT
- MONGOURI=mongodb+srv://moreno:moreno@cluster0-nqtoh.mongodb.net/test?retryWrites=true&w=majority

### Client

- REACT_APP_API_URL=http://localhost:8080

## Running the project

### Server

1. `cd server`
2. `cp .env.default .env` (And alter vars as needed)
3. `npm i && npm start`

### Client

2. `cd client && npm i && npm start`

## Running the project with Docker compose

1. `docker-compose up`

## Running storybook

1. `npm run storybook`

## Consultation routes

Rooms

1. `/rooms` List of all rooms created
2. `/rooms/:name` List of room by name

Users

1. `/users` List of all user created
2. `/users/:id` List of room by id

Messages

1. `/messages` List of all messages sent
