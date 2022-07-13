const { Carts } = require("./schemas/carts-schema");
const { NotFound } = require("../helpers/errors");

const getAllCarts = async () => {
  try {
    return await Carts.find();
  } catch (error) {
    console.log(error)
  }
};

const addCart = async (data) => {
try {
    const contact = new Carts(data);
    const saved = await contact.save();
    return saved;
} catch (error) {
  console.log(error)
}
};

module.exports = {
  getAllCarts,
  addCart,
};
