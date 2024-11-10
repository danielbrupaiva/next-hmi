FROM node:22-alpine
WORKDIR /data
# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
# Install dependencies
RUN npm install
RUN npm install bootstrap
RUN npm install tailwindcss postcss autoprefixer
RUN npm install sqlite3
RUN npm install mongodb
RUN npm install jsmodbus
RUN npm install node-opcua
# Copy the rest of the application code
COPY . .
# Build the Next.js application
RUN npm run build
# Expose port 3000 (default for Next.js)
EXPOSE 3000
# Start the Next.js application
CMD ["npm", "start"]