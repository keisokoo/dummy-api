FROM node:18

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
COPY ./.env .
RUN yarn

COPY . .
RUN yarn build

CMD ["yarn", "start"]

EXPOSE 4000