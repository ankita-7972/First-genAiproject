const express = require ('express')
const cookieParser = require("cookie-parser")





const app = express()
// midleware to read the data
app.use(express.json())
app.use(cookieParser())
// require all the routers here
const authRouter = require("./routes/auth.routes")

// using all the routes here 
app.use("/api/auth",authRouter)




module.exports = app