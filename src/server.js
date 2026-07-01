const http = require("http");

function responseFor(pathname) {
  if (pathname === "/health") {
    return { statusCode: 200, body: { status: "ok", service: "devops-fixture" } };
  }
  return { statusCode: 200, body: { name: "solo-agent-os-devops-fixture" } };
}

function handler(request, response) {
  const url = new URL(request.url || "/", "http://localhost");
  const result = responseFor(url.pathname);
  response.writeHead(result.statusCode, { "content-type": "application/json" });
  response.end(JSON.stringify(result.body));
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  http.createServer(handler).listen(port, () => {
    console.log(`devops fixture listening on ${port}`);
  });
}

module.exports = { handler, responseFor };
