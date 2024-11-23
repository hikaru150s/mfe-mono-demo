FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system clockv4 && \
          adduser --system -G clockv4 clockv4

COPY dist/apps/modules/clock-v4 .
RUN chown -R clockv4:clockv4 .

COPY apps/modules/clock-v4/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
