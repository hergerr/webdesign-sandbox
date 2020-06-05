FROM node:latest

WORKDIR /app
COPY package-lock.json package.json 
RUN npm install

ENV PORT=8080
EXPOSE 8080
CMD ["npm", "run", "start:dev"]