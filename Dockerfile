FROM nginx:alpine

WORKDIR /app

COPY build /usr/share/nginx/html

COPY /config/nginx.conf /etc/nginx/default.conf
