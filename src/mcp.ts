import { Muppet } from "muppet";
import z from "zod";

const mcp = new Muppet<{ Variables: { surname: string } }>({
    name: "muppet-hono",
    version: "0.0.1",
});

mcp.tool(
    {
        name: "hello",
        description: "Say hello",
        inputSchema: z.object({
            name: z.string(),
        }),
    },
    (c) => {
        const name = c.message.params.arguments.name;
        return {
            content: [
                {
                    type: "text",
                    text: `Hello ${name}!`,
                },
            ],
        };
    }
);

export default mcp;
