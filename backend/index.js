const express = require("express");
const server = express();
const cors = require('cors')
const bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const salt =  10;
const jwt = require('jsonwebtoken');
require('dotenv').config();
main().catch(err => console.log(err));

async function main() {
const uri = "mongodb+srv://mayursatkar2001:pass123@cluster0.oji3gky.mongodb.net/?retryWrites=true&w=majority";
  //await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connect(uri);
  console.log('db connected');
}

const userSchema = new mongoose.Schema({
    Name: String,
    Mobile:{ type: Number, unique: true },
    DOB: Date,
    Age:Number,
    Weight:Number,
    Address:String,  
    AdmitDate:Date,
    EndDate:Date,
    Gender:String,
    Treatments:String,
    Remarks:String,
    Password:String,
    role:String
});

const User = mongoose.model('User', userSchema);


const corsOptions = { 
    credentials: true,
  };
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(cookieParser());

// CRUD - Creates
server.post('/addMember', async (req, res) => {
    try {
        let user = new User();
        const existingUser = await User.findOne({ Mobile: req.body.mobilenum })
        if (existingUser) {
            console.log("Mobile number already exists.");
            return res.status(400).json({ success: false, message: 'Mobile number already exists.' });
        }
        user.Name = req.body.name;
        user.Mobile = req.body.mobilenum;
        user.DOB = req.body.birthdate;
        user.Age = req.body.age;
        user.Weight = req.body.weight;
        user.Address = req.body.address;
        user.AdmitDate = req.body.joindate;
        user.EndDate = req.body.enddate;
        user.Gender = req.body.gender;
        user.Treatments = req.body.treatment;
        user.Remarks = req.body.remark;
        user.Password = "Password@1234"
        user.role = "member"

        const doc = await user.save();

        res.json(doc);
    } catch (error) {
        console.error('Error adding member:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
})


// CRUD -  Read 
// http://localhost:8080/getMembers
server.get('/getMembers',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

// test update

server.put("/updateMember/:id", async (req, res) => {
    const id = req.params.id;
    const updateFields = {
        Name: req.body.Name,
        Mobile: req.body.Mobile, // Mobile number being updated
        DOB: req.body.DOB,
        Age: req.body.Age,
        Weight: req.body.Weight,
        Treatments: req.body.Treatments,  //
        Address: req.body.Address,
        AdmitDate: req.body.AdmitDate,
        EndDate: req.body.EndDate,
        Remarks : req.body.Remarks,
        Gender : req.body.Gender
    }
    
    try {
        // Find the existing user being updated
        const existingUser = await User.findById(id);

        if (!existingUser) {
            return res.status(404).json({ success: false, message: "Document not found." });
        }

        // Check if another document already has the same mobile number
        const existingUserWithMobile = await User.findOne({
            Mobile: updateFields.Mobile,
            _id: { $ne: id }, // Exclude the current document from the query
        });

        if (existingUserWithMobile) {
            console.log("Mobile number already in use.")
            return res.status(400).json({ success: false, message: "Mobile number already in use." });
        }

        // Update the document
        existingUser.set(updateFields); // Update the fields
        const updatedUser = await existingUser.save(); // Save the updated document
        res.json({ success: true, message: "Data updated.", updatedUser });
    } catch (error) {
        console.error('Error updating member:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})



//CRUD - Delete
// http://localhost:8080/deleteMember/:id
server.delete("/deleteMember/:id", async(req,res)=>{
    const id = req.params.id;
    const data = await User.deleteOne({_id:id});
    res.send({success:true, message:"Data Deleted Successfully.",data : data})

})

// login
server.post("/searchMember",async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const mem = await User.findOne({ Mobile: mobile });
        if (mem) {
            if (mem.Password === password) {
                const role = mem.role;
                const token = jwt.sign({role},process.env.TOKEN,{expiresIn:'1d'});
                res.send({ 
                    success: true, 
                    message: "Member Exists.", 
                    role: mem.role, 
                    id: mem._id, 
                    Token: token 
                });
            } else {
                res.send({ success: false, message: "Password not matched." });
            }
        } else {
            // if entered wrong mobile number while log in
            res.send({ success: false, message: "You are not Registered" });
        }
    } catch (error) {
        console.error('Error searching member:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// server started on port
server.listen(process.env.PORT,()=>{
    console.log('server started');
})

