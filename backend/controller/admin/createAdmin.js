
import Admin from "../../model/admin/admin.js";
import bcrypt from "bcrypt";


const  createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name , email , password);

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Email Already exist !")
      return res.status(400).json({ message: "Email already used" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default createAdmin


