FROM node:16.16.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./
RUN  npm ci --only=production && npm cache clean --force

COPY . ./

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


CMD [ "npm", "start" ]