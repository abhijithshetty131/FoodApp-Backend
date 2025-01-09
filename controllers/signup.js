const User = require("../models/user");

const Signup = async (req, res) => {
  console.log(req.body);
  const { fullName, email, password } = req.body;
  const salt = "superman@123";
  const data = await User.create({
    fullName,
    email,
    salt,
    password,
    // profileImage,
    // role,
  });
  if (!data) return res.status(500).json({ msg: "User not able to signup" });
  return res.status(200).json({ msg: "User Signed in Successfully" });
};

module.exports = {
  Signup,
};
