FROM node:latest

EXPOSE 8080
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install --no-progress --ignore-optional
COPY . ./

CMD npm run start:dev