// import models
const User = require("../models/userModel")

exports.home = (req, res) => {
    res.send('Hello World! I am Aditya');
}

exports.createUser = async (req, res) => {
    // extract info
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "Please provide all fields" });
            throw  new Error("Please provide all the details");
        }
        /*The findOne method returns a promise, not the actual user object. 
        So, userExsists will always be truthy, even 
        if no user exists with that email. To fix this,
         you need to await the result of the findOne method. */
        const userExsists = await User.findOne({email});
        if (userExsists) {
            throw  new Error("User exsists");
        }
        const user = await User.create({
            name,
            email,
            password
        });

        
        res.status(201).json({ 
            success: true,
            message: 'User created successfully',
        user});
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//getUsers
exports.getUsers = async(req,res)=>{
    try {
        const users = await User.find({});
        if (!users) {
            return res.status(404).json({ msg: "No Users found" })
        }
        res.status(201).json({ 
            success: true,
            message: 'Users retrived successfully',
        users
    });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.editUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.Hululu , req.body, { new: true })
        res.status(200).json({
            success: true,
            message: 'Users updated successfully',
            user
        })
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete user
exports.deleteUser = async(req,res)=>{
    try {
        //req.body -> data through body
        //below is data through url
        const userId = req.params.Hululu
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}