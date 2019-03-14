FROM node:10.15.3-alpine

RUN mkdir -p node/hello-node

ENV DIR node/hello-node
ENV PORT 3001

WORKDIR ${DIR}

ADD ./ node/hello-node

EXPOSE ${PORT}

CMD npm run debug

