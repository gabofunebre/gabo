FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production
COPY app ./app
COPY data ./data
EXPOSE 3000
CMD ["npm", "start"]
