FROM node:18.18.0-alpine AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install certificates
#RUN apk add --no-cache ca-certificates

RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source

COPY . .
EXPOSE 8080

CMD ["npm", "start"]