### BASE ###
FROM node:hydrogen-alpine as base

# Expose port & allow Node.js to use priviliged ports
EXPOSE 80
USER root
RUN apk add libcap && setcap CAP_NET_BIND_SERVICE=+eip /usr/local/bin/node


### RELEASE ###
FROM base as release
# Install dependencies
WORKDIR /app
COPY ./server/package.json ./server/package-lock.json ./
RUN npm install
# Copy app
COPY ./server ./
# Run as non-root user but with write permissions to the public folder
RUN chown -R node:node /app/public && chmod -R 755 /app/public
# Run app
CMD node bin/www



