const userModel = require("../model/user.model");

exports.create = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const data = {
      name,
      phone,
    };
    console.log(data)
    if (!data.name|| !data.phone) {
      return res.status(400).json("can not created");
    }
    const user = new userModel(data);
    const data1 = await user.save();

    return res.status(201).json(data1);
  } catch (error) {
    console.log(error);
  }
};
exports.getAll = async (req, res) => {
  const data = await userModel.find();
  return res.status(200).json(data);
};
