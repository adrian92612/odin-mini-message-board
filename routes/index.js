import { Router } from "express";

const messages = [
  {
    id: 1,
    user: "Amber",
    text: "Hello Chingu!",
    dateAdded: new Date(),
  },
];

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Mini Message Board", messages }));

router
  .route("/new")
  .get((req, res) => res.render("newMessageForm", { title: "Send Message" }))
  .post((req, res) => {
    messages.push({
      id: messages.length + 1,
      user: req.body.username,
      text: req.body.text,
      dateAdded: new Date(),
    });
    res.redirect("/");
  });

router.get("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id > messages.length) {
    res.send("This message does not exists");
    return;
  }
  const msg = messages.find((msg) => msg.id === id);
  res.render("messageDetails", { title: "Message Details", msg });
});

export { router, messages };
