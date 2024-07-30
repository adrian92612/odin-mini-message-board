import { messages } from "../routes/index.js";

export const getIndex = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

export const getNewMessage = (req, res) => res.render("newMessageForm", { title: "Add Message" });

export const postNewMessage = (req, res) => {
  messages.push({
    id: messages.length + 1,
    user: req.body.username,
    text: req.body.text,
    dateAdded: new Date(),
  });
  res.redirect("/");
};

export const getMessageDetails = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const msg = messages.find((msg) => msg.id === id);
  if (msg) {
    res.render("messageDetails", { title: "Message Details", msg });
  } else {
    res.status(404).send("Message does not exists.");
  }
};
