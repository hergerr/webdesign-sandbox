FROM node:12.18

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
EXPOSE 8080
CMD [ "node", "src/server.js" ]