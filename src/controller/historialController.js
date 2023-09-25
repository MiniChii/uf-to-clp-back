const historialServices = require("../services/historialServices");

const getAllConversions = (req, res) => {
  const allHistory = historialServices.getAllConversions();
  res.send("Get all history conversion");
};

const createConversion = (req, res) => {
  const history = historialServices.createConversion();
  res.send(`CREATE history conversion  ${req.params.id}`);
};

module.exports = {
  getAllConversions,
  createConversion,
};
