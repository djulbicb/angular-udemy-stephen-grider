# https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/

# Use official node image as the base image
FROM node:latest as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:latest
COPY --from=build /usr/local/app/dist/app04_typing /usr/share/nginx/html
EXPOSE 80