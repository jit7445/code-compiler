
FROM docker:latest
RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 2375
ENV DOCKER_HOST=tcp://localhost:2375
CMD ["sh", "-c", "dockerd --host=tcp://0.0.0.0:2375 --tls=false & sleep 5 && node index.js"]
