FROM node:lts-alpine3.20

WORKDIR /srv/www/apostrophe

RUN chown -R node: /srv/www/apostrophe
USER node

COPY --chown=node package*.json /srv/www/apostrophe/

ENV NODE_ENV=production
RUN npm ci

COPY --chown=node . /srv/www/apostrophe/

RUN ./scripts/build-assets.sh

CMD ["node", "app.js"]
