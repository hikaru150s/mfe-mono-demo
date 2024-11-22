FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system calculator && \
          adduser --system -G calculator calculator

COPY dist/apps/modules/calculator .
RUN chown -R calculator:calculator .

COPY apps/modules/calculator/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
