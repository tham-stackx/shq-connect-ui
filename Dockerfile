FROM nginx:1.29-alpine

RUN apk add --no-cache apache2-utils

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /usr/local/bin/shq-connect-ui-entrypoint
COPY . /usr/share/nginx/html

RUN chmod 0755 /usr/local/bin/shq-connect-ui-entrypoint \
    && rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/nginx.conf \
    /usr/share/nginx/html/docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/shq-connect-ui-entrypoint"]
