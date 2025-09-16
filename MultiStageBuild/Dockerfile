# Build stage , let's complete script
FROM node:18 AS 
WORKDIR / #complete
COPY .json ./
RUN npm #complete
COPY . .
RUN npm run #complete

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/ #complete
