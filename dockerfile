FROM node:19.6.0
RUN mkdir -p /usr/hurs/src
WORKDIR /usr/hurs/src
COPY package.json /usr/hurs/src
RUN npm install
COPY . /usr/hurs/src
CMD ["node", "src/index.js"]