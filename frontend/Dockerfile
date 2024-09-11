FROM node:lts-alpine3.20 AS runtime

WORKDIR /app

COPY . .

RUN npm i --save-dev @rollup/rollup-linux-arm64-musl
RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=80
CMD node ./dist/server/entry.mjs
