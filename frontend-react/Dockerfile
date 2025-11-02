# Use Node.js
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Copy the rest of the React app
COPY . .

# Start Vite dev server on all network interfaces
CMD ["npm", "run", "dev", "--", "--host"]
