FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system todolist && \
          adduser --system -G todolist todolist

COPY dist/apps/modules/todolist .
RUN chown -R todolist:todolist .

COPY apps/modules/todolist/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
