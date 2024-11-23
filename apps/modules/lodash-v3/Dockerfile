FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system lodashv3 && \
          adduser --system -G lodashv3 lodashv3

COPY dist/apps/modules/lodash-v3 .
RUN chown -R lodashv3:lodashv3 .

COPY apps/modules/lodash-v3/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
