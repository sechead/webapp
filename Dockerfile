FROM node:lts-alpine

WORKDIR /opt/news
COPY . /opt/news
ENV NODE_ENV=production
RUN npm install
RUN yarn build
CMD ["yarn", "start"]
