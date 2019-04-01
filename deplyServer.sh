#!/bin/bash

git pull

docker stop storeServer

docker rm storeServer

docker build -t store:prod .

docker run -p 80:8080 --name storeServer -d store:prod