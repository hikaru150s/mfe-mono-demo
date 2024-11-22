FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system crud && \
          adduser --system -G crud crud

COPY dist/apps/modules/crud .
RUN chown -R crud:crud .

COPY apps/modules/crud/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
