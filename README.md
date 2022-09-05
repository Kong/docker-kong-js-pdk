# Kong JS PDK development environment

This repo provides a development environment to help build Kong plugins using the JavaScript Plugin Development Kit (PDK).

Information on how to write your own plugins will be provided in an upcoming blog post.

# How to use this template

This Docker Compose template provisions a Kong container using Kong declarative config.

To run this template execute:

```shell
$ docker-compose up
```

Kong will be available on port `8000` on your local machine.

Kong's documentation can be found at [https://docs.konghq.com/][kong-docs-url].

## Issues

Prior to executing the command above please ensure that the file `.gitkeep` is removed from the plugins directory, this will avoid an error which will stop the container from starting correctly.
If you see this error then you are hitting this issue
```
kong_1  | /usr/local/bin/kong-js-pluginserver --plugins-directory /usr/local/kong/js-plugins --dump-all-plugins
kong_1  | 2022-09-05T18:40:10.134Z [WARN] error loading plugin ".gitkeep" from /usr/local/kong/js-plugins/.gitkeep: TypeError: Cannot read properties of undefined (reading 'prototype')
kong_1  |     at new Module (/usr/local/lib/node_modules/kong-pdk/lib/mod.js:32:27)
kong_1  |     at Server.loadPlugins (/usr/local/lib/node_modules/kong-pdk/server.js:81:21)
```

If you have any problems with or questions about this image, please contact us through a [GitHub issue][github-new-issue].

## Contributing

You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive pull requests, and do our best to process them as fast as we can.

Before you start to code, we recommend discussing your plans through a [GitHub issue][github-new-issue], especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.

[kong-site-url]: https://konghq.com/
[kong-docs-url]: https://docs.konghq.com/
[github-new-issue]: https://github.com/Kong/docker-kong-js-pdk/issues/new
