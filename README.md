# Nextjs-hmi

App-Core-Database architecture

## Getting Started

```bash
git clone https://github.com/danielbrupaiva/nextjs-hmi.git
docker compose up --build --detach
```

Alternative:

```bash
docker build -t next-hmi:v0.1 ./next-hmi
docker run -d -p 3000:3000 next-hmi:v0.1
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker reference

docker build --platform=<linux/amd64> -t <image_name:tag> <dockerfile_folder>

docker run -d -p <port>:<port> <image_name:tag>

docker attach <image_name:tag>

docker exec -it <image_name:tag> /bin/bash

docker image rm -f <container-id-or-name>

docker image -rm <hashs>
docker system prune -a --volumes
