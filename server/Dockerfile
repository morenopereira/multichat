FROM node:10.15.3-alpine

ARG PORT

ENV PORT=$PORT

WORKDIR /server/
COPY ./server/*.json ./server/*.lock /server/
RUN yarn --pure-lockfile
COPY ./server/src /server/src/

EXPOSE 8080

CMD ["yarn", "start"]