FROM node:15.8.0-jessie
WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["/bin/sh", "-c", "exec npm start"]
