FROM oven/bun

RUN apt-get update; apt-get install -y fontconfig
RUN fc-cache -f -v

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
CMD [ "cat" ]
