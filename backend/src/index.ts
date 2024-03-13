import app from "./app.js"
import connectToDatabase from "./db/connection.js"
const PORT=5000
const URL=process.env.MONGODB_URL
connectToDatabase(URL).then(()=>{
    app.listen(PORT,()=>console.log("server opened"))
}).catch(err=>console.log(err))