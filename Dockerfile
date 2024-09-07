FROM node:14-alpine
WORKDIR /app
COPY . /app
RUN npm install
COPY my-app /var/www/html
EXPOSE 3000
ENV NAME dnproject
CMD ["npm","start"]
