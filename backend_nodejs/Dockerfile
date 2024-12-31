# File V:\File\KIEM-THU-2\Dockerfile
# Pull the latest node image from docker hub
FROM node:latest

# Set the working directory inside the container
WORKDIR /app/backend_nodejs

# Copy the backend_nodejs folder to the working directory in the container
COPY backend_nodejs /app/backend_nodejs

# Install dependencies
RUN npm install

# Expose the port your app will run on (adjust if needed)
EXPOSE 3000

# Command to start the application
CMD ["node", "index.js"]

