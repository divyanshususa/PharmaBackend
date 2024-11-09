import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "Licence", maxCount: 1 },
        { name: "Gstin", maxCount: 1 }
    ]),
    registerUser
);

router.route("/login").post(loginUser);

export default router;
