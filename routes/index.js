import { Router } from "express";

const messages = [
  {
    id: 1,
    user: "Amber",
    text: "Hello Chingu!",
    dateAdded: new Date(),
  },
];

export const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Mini Message Board", messages }));

router.get("/new", (req, res) => res.render("newMessageForm", { title: "Send Message" }));

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
