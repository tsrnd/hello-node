FROM node:10.15.3-alpine

RUN mkdir -p node/hello-node

ENV DIR node/hello-node

WORKDIR ${DIR}

ADD ./ node/hello-node

EXPOSE 3001

CMD npm run build-development

