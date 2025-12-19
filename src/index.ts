import { StreamableHTTPTransport } from "@hono/mcp";
import { Hono, type Context } from "hono";
import { mcpBuilder } from "./mcp";
import { cors } from "hono/cors";
type Bindings = {
    PASSWORD?: string;
};
async function startMcp(c: Context) {
    const customDescription = c.req.header("X-TOOL-DESCRIPTION");
    const customResponseText = c.req.header("X-RESPONSE-TEXT");
    const transport = new StreamableHTTPTransport({
        sessionIdGenerator: undefined,
    });
    transport.handleRequest;
    await mcpBuilder({
        toolDescription: customDescription,
        toolResponseText: customResponseText,
    }).connect(transport);
    return transport.handleRequest(c);
}

let app = new Hono<{ Bindings: Bindings }>();
app = app.use(cors());
app = app.all("/password/:pw/mcp", async (c) => {
    const pw = c.req.param("pw");
    if (c.env.PASSWORD && c.env.PASSWORD.length > 0) {
        if (pw !== c.env.PASSWORD) {
            return c.json({ error: "Unauthorized" }, 401);
        }
    }
    return await startMcp(c);
});

app = app.all("/mcp", async (c) => {
    if (c.env.PASSWORD && c.env.PASSWORD.length > 0) {
        const password = c.req.header("X-PASSWORD");
        if (password !== c.env.PASSWORD) {
            return c.json({ error: "Unauthorized" }, 401);
        }
    }
    return await startMcp(c);
});

app = app.get("/", (c) =>
    c.text("Oh, hello world! This is Jailbreak MCP Server.")
);

export default app;
