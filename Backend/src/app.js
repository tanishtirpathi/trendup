import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'

import bodyParser from "body-parser"
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(
   { origin:process.env.CORS_ORIGIN,
    Credential:true 
   }
))
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("public"))
app.use(cookieParser())

export {app}