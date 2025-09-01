const express = require("express");

const app = express();

app.get("/:id", (req, res) => {
  console.log("customer id: ", req.params.id);
  res.json({ message: "success" });
});
// Webhook endpoint for MyOperator
app.post("/webhook", (req, res) => {
  const data = req.body;
  console.log("Incoming Webhook:", JSON.stringify(data, null, 2));

  // Extract sender and message type
  const from = data.from; // Customer phone number
  const type = data.type; // "text" or "interactive"

  let userMessage = "";
  let buttonId = "";

  if (type === "text" && data.text) {
    userMessage = data.text.body;
  }

  if (type === "interactive" && data.interactive.button_reply) {
    buttonId = data.interactive.button_reply.id; // e.g., "marketing"
  }

//   // Decide next action based on state
//   if (buttonId) {
//     console.log(`User selected department: ${buttonId}`);
//     // Save state in DB or memory (for now, just respond)
//     sendWhatsAppMessage(from, "Please describe your issue in detail.");
//   } else if (userMessage) {
//     console.log(`User said: ${userMessage}`);
//     // If user is in 'waiting_for_issue' state, create ticket
//     sendWhatsAppMessage(
//       from,
//       "✅ Your ticket has been created. Ticket ID: #12345"
//     );
//   }

  res.sendStatus(200);
});
const port = 8000;

app.listen(port, () => {
  console.log("port listening on server: ", port);
});
