# Docker Deployment Guide

## Prerequisites
- Docker installed
- Docker Compose installed (optional)

## Build and Run

### Using Docker

1. **Build the image:**
```bash
docker build -t marche-innovation .
```

2. **Run the container:**
```bash
docker run -p 3000:3000 marche-innovation
```

3. **Access the application:**
Open your browser and navigate to `http://localhost:3000`

### Using Docker Compose

1. **Build and start:**
```bash
docker-compose up -d
```

2. **Stop the container:**
```bash
docker-compose down
```

3. **View logs:**
```bash
docker-compose logs -f
```

## Production Deployment

### Deploy to Cloud Platform

#### Docker Hub
```bash
# Tag the image
docker tag marche-innovation your-dockerhub-username/marche-innovation:latest

# Push to Docker Hub
docker push your-dockerhub-username/marche-innovation:latest
```

#### AWS ECR
```bash
# Login to ECR
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

# Tag the image
docker tag marche-innovation:latest aws_account_id.dkr.ecr.region.amazonaws.com/marche-innovation:latest

# Push to ECR
docker push aws_account_id.dkr.ecr.region.amazonaws.com/marche-innovation:latest
```

## Environment Variables

Create a `.env.production` file for production settings:
```
NODE_ENV=production
PORT=3000
```

## Health Check

The container includes a health check endpoint. Check container health:
```bash
docker inspect --format='{{.State.Health.Status}}' container-id
```

## Optimization Tips

1. **Multi-stage build:** The Dockerfile uses multi-stage builds to minimize image size
2. **Layer caching:** Dependencies are cached separately from source code
3. **Standalone output:** Next.js standalone output reduces the final image size
4. **Alpine base:** Using Alpine Linux for smaller image footprint

## Troubleshooting

### Container fails to start
```bash
docker logs container-id
```

### Check running containers
```bash
docker ps
```

### Remove all containers and images
```bash
docker-compose down
docker system prune -a
```
