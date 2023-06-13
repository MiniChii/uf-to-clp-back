const getAllConversions = (req, res) => {
  res.send("Get all history conversion");
};

const createConversion = (req, res) => {
  res.send(`CREATE history conversion  ${req.params.id}`);
};

module.exports = {
  getAllConversions,
  createConversion,
};
