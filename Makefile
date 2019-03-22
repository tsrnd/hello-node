# build for development
# make app-development
#
NODE_APP_IMAGE = nodeapp/latest
NODE_APP_CONT = nodeapp
#
MONGO_IMAGE = mongo/latest
MONGO_CONT = mongo
#
app-development: mongo nodeapp log

mongo:
docker build --rm -f dockerfile/mongo.dockerfile . -t $(MONGO_IMAGE)
docker run -d -p 27071:27071 --name $(MONGO_CONT) $(MONGO_IMAGE)
nodeapp:
docker build --rm -f dockerfile/node.dockerfile . -t $(NODE_APP_IMAGE)
docker run -d -p 3001:3001 -p 9222:9222 --env-file ./config/local.env -v ~/node/hello-node:/node/hello-node --name $(NODE_APP_CONT) --link mongo:$(MONGO_CONT) $(NODE_APP_IMAGE) 
log:
docker logs -f $(NODE_APP_CONT)
