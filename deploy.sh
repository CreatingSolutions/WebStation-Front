#!bin/bash

docker push "${IMAGE_NAME}:latest"

echo "cd /home/damien/front &&
docker-compose stop &&
docker-compose pull &&
docker-compose up -d &&
docker-compose ps" | ssh damien@51.75.140.39;
