# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.51.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application and tests
COPY . .

RUN npx playwright install

# Expose necessary ports
EXPOSE 8080

# Run tests
CMD sleep 5 && \
  npm run test