import { Router } from "express";
import * as controller from "../controller/indexController.js";

const router = Router();

const messages = [
  {
    id: 1,
    user: "Amber",
    text: "Hello Chingu!",
    dateAdded: new Date(),
  },
];

router.get("/", controller.getIndex);
router.get("/messages/:id", controller.getMessageDetails);
router.route("/new").get(controller.getNewMessage).post(controller.postNewMessage);

export { router, messages };
