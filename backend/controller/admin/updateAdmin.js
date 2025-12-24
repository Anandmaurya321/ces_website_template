
import Admin from "../../model/admin/admin.js";
import bcrypt from "bcrypt";


const updateAdmin = async (req, res) => {
  try {
   
    /* Matching with the token data i.e : if req.user.id != req.params.id __ Not allowed */
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Not allowed to update this profile" });
    }

    // we can update everything ::>> what is required ::>>> just with id::>>
    const { name, email, role, password, isActive } = req.body;

    const updateData = { name, email, role, isActive };

    if (password) {
      updateData.password = await bcrypt.hash(password, 12); /// new data 
    }

    const admin = await Admin.findByIdAndUpdate(
      req.params.id, // finding admin
      updateData,    // update with all new data 
      { new: true }
    ).select("-password");   // remove password from response which we are sending

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({
      message: "Admin updated successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateAdmin