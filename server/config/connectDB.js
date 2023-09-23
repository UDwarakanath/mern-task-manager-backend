const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log("error",error)
        process.exit(1)
    }
}

module.exports = connectDB


// use below to connect DB

// const startServer = async ()=>{
//     try {
//         await connectDB()
//         const PORT = process.env.POR || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on Port ${PORT}`);
// });

//     } catch (error) {
//         console.log("error at connection",error)
//     }
// }

// startServer()