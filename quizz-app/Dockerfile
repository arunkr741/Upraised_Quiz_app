# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose a port for the Next.js application to run on (the default is 3000)
EXPOSE 3000

# Start the Next.js application when the container starts
CMD ["npm", "start"]