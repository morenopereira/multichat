FROM node:10.15.3-alpine AS base

ARG SKIP_PREFLIGHT_CHECK
ARG REACT_APP_SOCKET_URL

ENV SKIP_PREFLIGHT_CHECK=$SKIP_PREFLIGHT_CHECK
ENV REACT_APP_SOCKET_URL=$REACT_APP_SOCKET_URL

WORKDIR /client/
COPY ./client/*.json ./client/*.lock /client/
RUN yarn --pure-lockfile
COPY ./client/src /client/src/
COPY ./client/public /client/public/
COPY ./client/.storybook /client/.storybook/

EXPOSE 3000

FROM base AS development

CMD ["yarn", "start"]

FROM base AS production

RUN yarn build
WORKDIR /client/build

CMD ["yarn", "start"]