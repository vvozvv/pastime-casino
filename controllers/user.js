const User = require('../models/User')

module.exports.get = async (req, res) => {
  const user = await User.find().sort('-coin').sort('-operations')
  res.status(200).json(user)
}
module.exports.coin = async (req, res) => {
  const coin = await User.findById(req.body.id).select('coin')
  console.log(coin);
  res.status(200).json(coin)
}

