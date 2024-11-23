FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system lodashv4 && \
          adduser --system -G lodashv4 lodashv4

COPY dist/apps/modules/lodash-v4 .
RUN chown -R lodashv4:lodashv4 .

COPY apps/modules/lodash-v4/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
