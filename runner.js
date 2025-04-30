const { handler } = require("./handler");
const event = require("./event.json");

(async () => {
  const result = await handler(event);
  console.log("📦 Resposta da Lambda:", result);
})();
