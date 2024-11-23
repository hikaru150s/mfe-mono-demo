FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system clockv5 && \
          adduser --system -G clockv5 clockv5

COPY dist/apps/modules/clock-v5 .
RUN chown -R clockv5:clockv5 .

COPY apps/modules/clock-v5/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
