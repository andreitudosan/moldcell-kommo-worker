export default {
  async fetch(request, env) {
    if (request.url.endsWith("/health")) {
      return new Response(
        JSON.stringify({ status: "ok", service: "moldcell-kommo-integration" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    if (request.url.endsWith("/webhook")) {
      return new Response(
        JSON.stringify({ received: true }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response("OK");
  }
};
