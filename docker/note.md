## Command

* <https://docs.docker.com/engine/reference/commandline/>
* <https://docs.docker.com/engine/reference/commandline/cli/>
* <http://qiita.com/voluntas/items/68c1fd04dd3d507d4083>

## Dockerfile

<http://docs.docker.jp/engine/reference/builder.html>

```
FROM something/container-noe

LABEL name "my-node-app"

RUN mkdir -p /usr/src/app
WORKDIR /app

COPY package.json /usr/src/app/
RUN npm i

COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "start"]
```

## Run

```
docker run \
--name something-cool \
-v $(pwd):/var/www \
-p 80:80 \
-d hogehoge
```

## Docker Compose

<https://docs.docker.com/compose/compose-file/>