import { StreamableHTTPTransport } from "@hono/mcp";
import { Hono } from "hono";
import mcp from "./mcp";

let app = new Hono();

app = app.all("/mcp", async (c) => {
    const transport = new StreamableHTTPTransport({
        sessionIdGenerator: undefined,
    });
    transport.handleRequest;
    await mcp.connect(transport);
    return transport.handleRequest(c);
});

app = app.get("/", (c) => c.text("Hello World"));

export default app;
