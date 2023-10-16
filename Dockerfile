FROM node:18.12.1-alpine AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install certificates
#RUN apk add --no-cache ca-certificates

RUN npm ci

# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]