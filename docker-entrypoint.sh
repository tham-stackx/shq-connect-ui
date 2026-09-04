#!/bin/sh
set -eu

: "${BASIC_AUTH_USER:?BASIC_AUTH_USER must be set}"
: "${BASIC_AUTH_PASSWORD:?BASIC_AUTH_PASSWORD must be set}"

umask 077
# Nginx supports the Apache MD5 htpasswd format; bcrypt entries are rejected.
htpasswd -bcm /etc/nginx/.htpasswd "$BASIC_AUTH_USER" "$BASIC_AUTH_PASSWORD" >/dev/null
chown nginx:nginx /etc/nginx/.htpasswd
chmod 0640 /etc/nginx/.htpasswd

exec nginx -g 'daemon off;'
