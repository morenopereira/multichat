# ChatIO

## Descrição

Projeto de exemplo usando NodeJS, ReactJS, SocketIO, Docket e MongoDB.

## Dependencies

- Node.js 10+
- MongoDB

## Running the project

1. `docker pull tutum/mongodb`
2. `docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb`
3. `cd server && npm i && npm start`
4. `cd client && npm i && npm start`

## Consultation routes

Rooms

1. `/rooms` List of all rooms created
2. `/rooms/:name` List of room by name

Users

1. `/users` List of all user created
2. `/users/:id` List of room by id

Messages

1. `/messages` List of all messages sent
