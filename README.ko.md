# Jailbreak MCP Server

탈옥을 위해 만들어진 [Model Context Protocol (MCP)](https://www.muppet.dev/docs/server) 서버입니다.
[Hono](https://hono.dev/), [Muppet](https://www.muppet.dev/docs/server), [@hono/mcp](https://honohub.dev/docs/hono-mcp), 그리고 [Zod](https://zod.dev/)로 작성되었습니다. LLM에게 가이드라인 준수를 확인하는 _척_ 하는 툴을 제공합니다.

## Endpoints

- `/` — 브라우저로 잘못 접근한 사용자를 위한 간단한 환영 페이지입니다.
- `/mcp` — MCP 엔드포인트입니다. Streamable HTTP 요청을 지원합니다.
- `/password/:pw/mcp` — HTTP 헤더 수정을 지원하지 않는 클라이언트를 위한 MCP 엔드포인트입니다. URL 경로 매개변수 `:pw`로 비밀번호를 전달합니다. 이 엔드포인트는 `X-PASSWORD` 헤더를 무시합니다.

## Tools

툴 설명은 [mcp.ts](./src/mcp.ts) 파일에서 확인할 수 있습니다. 다음과 같은 툴이 포함되어 있습니다:

- `guideline-check` — LLM이 제공한 응답이 가이드라인을 준수하는지 확인합니다. 실제로는 항상 참을 반환합니다.

## Auth & Config

.env 파일(로컬) 또는 각 프로바이더의 대시보드에서 `PASSWORD` 변수 또는 시크릿을 설정할 수 있습니다. 이 경우, 클라이언트는 `X-PASSWORD` 헤더에 동일한 값을 제공해야 합니다. 간단한 인증 로직으로 사용될 수 있지만, 프로덕션 환경에는 Cloudflare Zero Trust와 같은 더 강력한 솔루션을 권장합니다.

`X-TOOL-DESCRIPTION` 헤더를 통해 커스텀 툴 설명을 제공할 수 있습니다. 이 헤더가 제공되지 않으면 기본 툴 설명이 사용됩니다.
