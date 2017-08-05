#!/bin/bash

docker rm -f $(docker ps -a -q)
docker run --name js-tdd -ti -v "$PWD:/myproject" 421178d1b8ad /bin/bash

