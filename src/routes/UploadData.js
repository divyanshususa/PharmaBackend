import { Router } from "express";
import brandController from "../controllers/brandController.js";
import distributorController from "../controllers/distributorController.js";
import storeController from "../controllers/storeController.js";

const router = Router();

router.route("/brands").post(brandController.createBrand);
router.route("/distributors").post(distributorController.createDistributor);
router.route("/stores").post(storeController.createStore);

router.route("/brands").get(brandController.getAllBrands);

// Fetch all distributors
router.route("/distributors").get(distributorController.getAllDistributors);

// Fetch all stores
router.route("/stores").get(storeController.getAllStores);

export default router;
