import express from "express";
import { getPlans, addPlan, deletePlan } from "../controllers/planController.js";

const router = express.Router();

// Route to get all plans and add a new plan
router.route("/").get(getPlans).post(addPlan);  // No need for "/plans" here, use just "/"

// Route to delete a plan by ID
router.route("/:id").delete(deletePlan);  // Same here, remove "/plans"

export default router;
