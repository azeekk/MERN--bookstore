const Admin = require('../models/admin-models');

// create admin
const createAdmin = async (req, res) => {
  try {
    console.log(" Received data:", req.body);
    const admins = await Admin.create(req.body);
    res.status(200).json(admins);
  } catch (error) {
    console.error(" Error while creating admin:", error);
    res.status(500).json({ message: error.message });
  }
};

// login admin

const loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body; 
  
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
  
      if (admin.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      res.status(200).json({ message: "Login successful", admin });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = { createAdmin, loginAdmin };


