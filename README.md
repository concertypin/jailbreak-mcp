# MCP server Template

- Information: This document is for both humans and AI to understand the project. If you need more details, make a [AGENTS.md](https://agents.md/) file.
  Welcome to your super-cool Streamable HTTP MCP server starter! 🚀✨

## Features

- [Hono](https://hono.dev/) web framework
- [Zod](https://zod.dev/) schema validation
- [Muppet](https://www.muppet.dev/docs/server) and [@hono/mcp](https://honohub.dev/docs/hono-mcp) for building MCP servers
- Ready for Cloudflare Workers with Wrangler

## Getting Started

To get started with this MCP server template, follow these steps:

1. **Install Dependencies**: Run `pnpm install` to install all necessary packages.
2. **Run the Server Locally**: Use `pnpm run dev` to start the server in development mode.
3. **Deploy to Cloudflare Workers**: Use `pnpm run deploy` to deploy your MCP server to Cloudflare Workers.

## Project Structure

- `src/mcp.ts`: The main MCP server implementation.
- `wrangler.toml`: Configuration file for Cloudflare Workers deployment.
- `package.json`: Project metadata and scripts.

## License

This project is licensed under the Apache-2.0 License. For more details, see the [LICENSE](./LICENSE) file.
