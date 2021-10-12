FROM kong:latest

# Install the js-pluginserver
USER root
RUN apk add --update nodejs npm python2 make g++
RUN npm install --unsafe -g kong-pdk@0.3.0

ENV term xterm
RUN apk add --update vim nano
