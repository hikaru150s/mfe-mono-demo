FROM nginx:stable-alpine3.20-perl

WORKDIR /usr/share/nginx/html

RUN addgroup --system shell && \
          adduser --system -G shell shell

COPY dist/apps/shell .
RUN chown -R shell:shell .

COPY apps/shell/nginx.conf /etc/nginx/templates/default.conf.template

ENV REMOTE_CALCULATOR=http://calculator:80
ENV REMOTE_TODOLIST=http://todolist:80
ENV REMOTE_CRUD=http://crud:80

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
