import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv. config({
    path:'./.env'
})

connectDB()
  .then(() =>
    app.listen(process.env.PORT, () => console.log("listining the port at 7000"))
  ).catch((err)=>{
  console.log("MONGO DB connnection failed bro now what to do", err)
});
