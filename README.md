# ๐ฅ Miniflare

**Miniflare** is a simulator for developing and testing
[**Cloudflare Workers**](https://workers.cloudflare.com/).

- ๐ **Fun:** develop workers easily with detailed logging, file watching and pretty error pages supporting source maps.
- ๐ **Full-featured:** supports most Workers features, including KV, Durable Objects, WebSockets, modules and more.
- โก **Fully-local:** test and develop Workers without an internet connection. Reload code on change quickly.

It's an alternative to `wrangler dev`, written in TypeScript, that runs your workers in a sandbox implementing Workers'
runtime APIs.

**See <https://miniflare.dev> for more detailed documentation.**

## โ TypeScript template for Cloudflare Workers

### ๐ Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already
familiar with the tool, we recommend that you install the tool and configure it to work with
your [Cloudflare account](https://dash.cloudflare.com). Documentation can be
found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

To generate using Wrangler, run this command:

```bash
wrangler generate my-ts-project https://github.com/cloudflare/worker-typescript-template
```

### ๐ฉ ๐ป Developing

[`src/index.ts`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return
the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### ๐งช Testing

This template comes with jest tests which simply test that the request handler can handle each request
method. `npm test` will run your tests.

### โ๏ธ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`.

### ๐ Previewing and Publishing

For information on how to preview and publish your worker, please see
the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## ๐คข Issues

If you run into issues with this specific project, please feel free to file an
issue [here](https://github.com/cloudflare/worker-typescript-template/issues). If the problem is with Wrangler, please
file an issue [here](https://github.com/cloudflare/wrangler/issues).

## โ?๏ธ Caveats

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime. It is a
general approximation. We recommend that you test end to end with `wrangler dev` in addition to
a [staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test
things before deploying.
