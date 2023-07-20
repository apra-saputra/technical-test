import { Router } from "express";
import UserController from "../controllers/userController.js";
import { authentication } from "../middleware/authentication.js";

const router = Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/me", authentication, UserController.getUser);
router.delete("/logout", authentication, UserController.logout);

export default router;
