
import bcrypt from "bcrypt";
import generateToken from "../../utils/admin_generate_token.js";
import Admin from '../../model/admin/admin.js'

/* LOGIN STUDENT */
const loginAdmin= async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(404).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      token: generateToken(admin._id),
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default loginAdmin
