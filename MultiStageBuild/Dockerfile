# Build stage , let's complete script
FROM node:18 AS build1  
WORKDIR /app 
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build1 /app/dist /usr/share/nginx/html
