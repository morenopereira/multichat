# ChatIO

## Descrição

Projeto de exemplo usando NodeJS, ReactJS, SocketIO, Docket e MongoDB.

## Dependencies

- Node.js 10+
- MongoDB

## Envs

PORT=PORT
HOST=localhost
MONGOURI=mongodb+srv://moreno:moreno@cluster0-nqtoh.mongodb.net/test?retryWrites=true&w=majority

## Running the project

1. `cd server && npm i && npm start`
2. `cd client && npm i && npm start`

## Consultation routes

Rooms

1. `/rooms` List of all rooms created
2. `/rooms/:name` List of room by name

Users

1. `/users` List of all user created
2. `/users/:id` List of room by id

Messages

1. `/messages` List of all messages sent
