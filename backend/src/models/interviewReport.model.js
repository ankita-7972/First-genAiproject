const mongoose = require("mongoose")


/**
 * Job Description Schema :String
 * Resume text :String
 * self Description:String
 * 
 * technical questions:Number
 *                [{
 *                 question:"",
 *                 intension:"",
 *                 answer:"",
 * 
 *                  }]
 * behavirol questions:
 *    [{
 *                 question:"",
 *                 intension:"",
 *                 answer:"",
 * 
 *                  }]
 * Skill gaps:[{
 *              skill:"",
 *               saverity:{
 *               type:String,
 *               enum:["low","medium,"high"]
 *                  
 *  }
 * 
 * }]
 * Praperation Plan:[{
 *                day:Number,
 *                focus:String,
 *                task:[String]
 * }]
 */

