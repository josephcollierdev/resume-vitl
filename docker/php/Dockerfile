FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
		libfreetype-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

RUN apt install libicu-dev -y \
        && docker-php-ext-install intl \
        && docker-php-ext-enable intl

RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev
RUN docker-php-ext-install zip

RUN pecl install excimer-1.2.1 \
    && docker-php-ext-enable excimer

# RUN pecl install redis-5.3.7 \
# 	&& pecl install xdebug-3.2.1 \
# 	&& docker-php-ext-enable redis xdebug

# RUN apt-get update && apt-get install -y libmemcached-dev libssl-dev zlib1g-dev \
# 	&& pecl install memcached-3.2.0 \
# 	&& docker-php-ext-enable memcached

RUN apt-get install zip unzip \
    && curl -sS https://getcomposer.org/installer -o composer-setup.php \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && unlink composer-setup.php

RUN echo 'date.timezone="America/New_York"' >> /usr/local/etc/php/conf.d/date.ini \
    && echo 'opcache.enable=1' >> /usr/local/etc/php/conf.d/opcache.conf \
    && echo 'opcache.validate_timestamps=1' >> /usr/local/etc/php/conf.d/opcache.conf \
    && echo 'opcache.fast_shutdown=1' >> /usr/local/etc/php/conf.d/opcache
