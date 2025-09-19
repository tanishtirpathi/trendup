import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import postRoutes from "./routes/post.routes.js"
import authRoutes from "./routes/auth.routes.js"
dotenv. config({
    path:'./.env'
})

connectDB()

app.listen(process.env.PORT, () => console.log("listining the port at 7000"))

app.use('/api/auth', authRoutes);
app.use("/api/posts", postRoutes);
