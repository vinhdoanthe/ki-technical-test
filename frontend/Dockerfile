FROM node:alpine

# Set the working directory
WORKDIR /app

# Install any needed packages specified in package.json
COPY package.json /app/package.json 
RUN npm install -g @angular/cli@17.3.8
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app
