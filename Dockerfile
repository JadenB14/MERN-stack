# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.51.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application and tests
COPY . .

# Expose necessary ports
EXPOSE 3000

# Run tests
CMD ["npm","run","test"]