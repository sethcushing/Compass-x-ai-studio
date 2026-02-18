# ============================================
# Compass X AI Studio - Production Dockerfile
# Multi-stage build: React frontend + FastAPI backend
# ============================================

# Stage 1: Build React frontend
FROM node:20-alpine AS frontend-build
WORKDIR /build

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

COPY frontend/ .

# Build arg for backend URL at build time
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

RUN yarn build

# Stage 2: Production runtime
FROM python:3.11-slim AS production

# System dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx \
    supervisor \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend code
COPY backend/ ./backend/

# Copy built frontend from Stage 1
COPY --from=frontend-build /build/build /app/frontend/build

# Copy config files
COPY deploy/nginx.conf /etc/nginx/sites-available/default
COPY deploy/supervisord.conf /etc/supervisor/conf.d/app.conf

# Create log directories
RUN mkdir -p /var/log/supervisor /var/log/nginx

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080/api/ || exit 1

# Expose single port
EXPOSE 8080

# Start supervisor (manages nginx + uvicorn)
CMD ["supervisord", "-n", "-c", "/etc/supervisor/conf.d/app.conf"]
