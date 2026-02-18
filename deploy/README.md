# Compass X AI Studio — Release Deployment Guide

## Quick Start

### Option 1: Docker Compose (recommended for local/staging)
```bash
docker compose up --build -d
```
App runs at **http://localhost:8080**

### Option 2: Standalone Docker Build
```bash
# Build
docker build -t compass-x-ai-studio \
  --build-arg REACT_APP_BACKEND_URL="" \
  .

# Run (provide your own MongoDB)
docker run -d \
  -p 8080:8080 \
  -e MONGO_URL=mongodb://your-mongo-host:27017 \
  -e DB_NAME=compass_x \
  -e CORS_ORIGINS=https://yourdomain.com \
  --name compass-x \
  compass-x-ai-studio
```

### Option 3: AWS App Runner
1. Push image to ECR:
```bash
aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
docker tag compass-x-ai-studio:latest <account>.dkr.ecr.<region>.amazonaws.com/compass-x:latest
docker push <account>.dkr.ecr.<region>.amazonaws.com/compass-x:latest
```
2. Create App Runner service pointing to the ECR image
3. Set environment variables: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`
4. Set port to `8080`

---

## Architecture

```
┌─────────────────────────────┐
│         Port 8080           │
│         (nginx)             │
│                             │
│  /api/*  → FastAPI :8001    │
│  /*      → React SPA        │
└─────────────────────────────┘
```

- **nginx** serves the React build and proxies `/api/*` to the backend
- **uvicorn** runs the FastAPI backend on port 8001 (internal only)
- **supervisord** manages both processes

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGO_URL` | Yes | MongoDB connection string |
| `DB_NAME` | Yes | Database name (default: `compass_x`) |
| `CORS_ORIGINS` | No | Comma-separated allowed origins (default: `*`) |
| `REACT_APP_BACKEND_URL` | Build-time | Backend URL for frontend API calls. Leave empty when served from same origin. |

## Health Check

```bash
curl http://localhost:8080/api/
# {"message": "Hello World"}
```
