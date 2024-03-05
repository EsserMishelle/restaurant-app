FROM node:16-alpine
WORKDIR /app
COPY backend/package.json backend/package-lock.json ./
RUN npm ci
COPY backend/ ./
EXPOSE 3001
CMD ["node", "server.js"]
