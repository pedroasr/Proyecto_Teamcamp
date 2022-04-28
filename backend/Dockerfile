FROM node:16

ENV NODE_ENV production
ENV PORT 3090

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY ./dist ./

EXPOSE 3090

CMD ["npm", "start"]