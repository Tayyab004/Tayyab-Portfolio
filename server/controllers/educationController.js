const Education = require("../models/Education");

exports.getEducation = async (req, res) => {
  try {
    const edu = await Education.find().sort({ createdAt: -1 });
    res.json(edu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const newEdu = new Education(req.body);
    const savedEdu = await newEdu.save();
    res.status(201).json(savedEdu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ msg: "Not Found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const removed = await Education.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ msg: "Not Found" });
    res.json({ msg: "Education record Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
