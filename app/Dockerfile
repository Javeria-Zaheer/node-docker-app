# Step 1: Use Node.js official image as base
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json files first (for dependency caching)
COPY package*.json ./

# Step 4: Install node dependencies
RUN npm install

# Step 5: Copy the rest of the app files
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Start the app
CMD ["node", "app.js"]
