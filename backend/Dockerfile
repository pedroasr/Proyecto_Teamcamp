FROM node:16-alpine

ENV NODE_ENV production
ENV PORT 9090

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY ./dist ./

EXPOSE 9090

CMD ["npm", "start"]