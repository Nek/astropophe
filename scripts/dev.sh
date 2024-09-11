#!/bin/bash
cd $(dirname "$0")
PROJECT=$(pwd)/..
docker-compose --file docker-compose.yml --env-file .env --project-directory $PROJECT up;
docker-compose --file docker-compose.yml --env-file .env --project-directory $PROJECT down
cd -
