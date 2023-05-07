const states = require("../data/states.json");
const stateCodes = states.map((s) => s.code);

const verifyStates = (req, res, next) => {
  console.log("Validating State Code");
  if (!req?.params?.state) {
    return res.status(400).json({ message: "State Parameter is required." });
  }
  const code = req.params.state.toUpperCase();
  if (!stateCodes.includes(code)) {
    console.error('Invalid state code');
    return res
      .status(404)
      .json({ message: `Invalid state abbreviation parameter` });
  }
  console.log('Valid state code');
  req.name = states.find(s => s.code === code).state;
  req.code = code;
  next();
};

module.exports = verifyStates;