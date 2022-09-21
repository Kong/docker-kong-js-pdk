# Kong JS PDK development environment

This repo provides a development environment to help build Kong plugins using the JavaScript Plugin Development Kit (PDK).

Information on how to write your own plugins will be provided in an upcoming blog post.

# How to use this template

This Docker Compose template provisions a Kong container using Kong declarative config.

To run this template execute:

```shell
$ cd plugins
$ npm ci
$ docker-compose up
```

Kong will be available on port `8000` on your local machine.

Kong's documentation can be found at [https://docs.konghq.com/][kong-docs-url].

## Issues

If you have any problems with or questions about this image, please contact us through a [GitHub issue][github-new-issue].

## Contributing

You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive pull requests, and do our best to process them as fast as we can.

Before you start to code, we recommend discussing your plans through a [GitHub issue][github-new-issue], especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.

[kong-site-url]: https://konghq.com/
[kong-docs-url]: https://docs.konghq.com/
[github-new-issue]: https://github.com/Kong/docker-kong-js-pdk/issues/new
