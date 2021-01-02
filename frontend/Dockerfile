FROM node:15.5-alpine

# Set work directory
WORKDIR /usr/src/app

# Copy dependency list
COPY package.json package-lock.json /usr/src/app/

# Install dependencies
RUN npm install

# Move all file to the workdirectory
COPY ./ ./

# Start the react app
CMD [ "npm", "start" ]
