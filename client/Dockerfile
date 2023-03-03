FROM node:18

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY index.html .
COPY src ./src
COPY public ./public

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev"]