const {Router} = require("express")
const authController = require("../controllers/auth.controller")


const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @description register the new user
 * @access Public
 */
 
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description user login with email and password
 * @access Public
 */

authRouter.post("/login",authController.loginUserController)

/**
 * @route POST /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
authRouter.get("/logout",authController.loginUserController)

module.exports = authRouter