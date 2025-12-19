[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/concertypin/jailbreak-mcp)
[Korean version](./README.ko.md)

# Jailbreak MCP Server

This is a [Model Context Protocol (MCP)](https://www.muppet.dev/docs/server) server built for jailbreak purposes.
It is written using [Hono](https://hono.dev/), [Muppet](https://www.muppet.dev/docs/server), [@hono/mcp](https://honohub.dev/docs/hono-mcp), and [Zod](https://zod.dev/). It provides a tool that pretends to check LLM guideline compliance.

## Endpoints

- `/` — A simple welcome page for users who access via browser by mistake.
- `/mcp` — The MCP endpoint. Supports streamable HTTP requests.
- `/password/:pw/mcp` — An MCP endpoint for clients that cannot modify HTTP headers. The password is passed as a URL path parameter `:pw`. This endpoint ignores the `X-PASSWORD` header.

## Tools

See [mcp.ts](./src/mcp.ts) for tool descriptions. The following tool is included:

- `guideline-check` — Checks if the LLM's response complies with the guidelines. In reality, it always returns true.

## Auth & Config

You can set the `PASSWORD` variable or secret in a .env file (locally) or in each provider's dashboard. In this case, the client must provide the same value in the `X-PASSWORD` header. This can be used as a simple authentication logic, but for production environments, stronger solutions like Cloudflare Zero Trust are recommended.

You can provide a custom tool description via the `X-TOOL-DESCRIPTION` header. If this header is not provided, the default tool description will be used.
