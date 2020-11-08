FROM node:12
WORKDIR /home/node/app
COPY app /home/node/app
RUN yarn
CMD yarn start app