import { Router } from "express";
import brandController from "../controllers/brandController.js";
import distributorController from "../controllers/distributorController.js";
import storeController from "../controllers/storeController.js";

const router = Router();

router.route("/brands").post(brandController.createBrand);
router.route("/distributors").post(distributorController.createDistributor);
router.route("/stores").post(storeController.createStore);

export default router;
