FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g http-server
COPY WAREHOUSE-UI ./
RUN ls -l
RUN npm run build
EXPOSE 8080
CMD ["http-server","dist"]