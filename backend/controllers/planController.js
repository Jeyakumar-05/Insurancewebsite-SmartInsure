import Plan from "../models/planModel.js";

// Get all plans
export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plans" });
  }
};

// Add a new plan
export const addPlan = async (req, res) => {
  try {
    const { name, type, price, coverageType, premium, term, conditions } = req.body;

    const plan = new Plan({
      name,
      type,
      price,
      coverageType,
      premium,
      term,
      conditions,
    });

    const createdPlan = await plan.save();
    res.status(201).json(createdPlan);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding plan", error: error.message });
  }
};

// Delete a plan
export const deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findByIdAndDelete(id);

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting plan", error: error.message });
  }
};
