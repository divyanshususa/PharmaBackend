import { Router } from "express";
import { registerUser, loginUser, logoutUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
import { verifyJWT as veriftjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([{ name: "Licence", maxCount: 1 }, { name: "Gstin", maxCount: 1 }]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(veriftjwt, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
export default router;
