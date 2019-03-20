# build for development
# make app-developmet
# 
NODE_APP_IMAGE = nodeapp/latest
NODE_APP_CONT = nodeapp
# 
MONGO_IMAGE = mongo/latest
MONGO_CONT = mongo
# 
app-development: clean mongo nodeapp log

mongo: 
	docker build --rm -f Dockerfiles/mongo.Dockerfile . -t ${MONGO_IMAGE}
	docker run -d -p 27017:27017 --name ${MONGO_CONT} ${MONGO_IMAGE}

nodeapp: 
	docker build --rm -f Dockerfiles/node.Dockerfile . -t ${NODE_APP_IMAGE}
	docker run -d -p 3001:3001 -p 9222:9222 --env-file ./config/local.env -v ~/node/hello-node:/node/hello-node --name ${NODE_APP_CONT} --link mongo:${MONGO_CONT} ${NODE_APP_IMAGE}

log:
	docker logs -f ${NODE_APP_CONT}

clean:
	-docker stop ${NODE_APP_CONT}
	-docker rm ${NODE_APP_CONT}
	-docker stop ${MONGO_CONT}
	-docker rm ${MONGO_CONT}

