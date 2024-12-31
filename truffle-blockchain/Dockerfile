# C

FROM node:latest

#
RUN npm install -g truffle

# Set the working directory inside the container
WORKDIR /app/truffle-blockchain

# Copy the truffle-blockchain folder to the working directory in the container
COPY . /app/truffle-blockchain

# EXPOSE 9546 
EXPOSE 9545

# Command to start the application
CMD ["truffle", "develop"]




