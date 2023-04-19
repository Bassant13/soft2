FROM node:14-alpine
WORKDIR /app
COPY app1.js package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node app1.js