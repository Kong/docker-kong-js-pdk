FROM kong:latest

# Install the js-pluginserver
USER root
RUN apk add --update nodejs npm python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install --unsafe -g kong-pdk@0.5.3

ENV term xterm
RUN apk add --update vim nano