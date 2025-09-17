FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Install netcat (fixed package name)
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

# Wait for MySQL, then start Node
CMD sh -c "until nc -z $DB_HOST 3306; do echo 'Waiting for DB...'; sleep 2; done && node server.js"
