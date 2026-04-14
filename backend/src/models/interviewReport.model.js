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

const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        reqiured:[true,"technical question is required"]
    },
    intension:{
        type:String,
        reqiured:[true,"Intension is reqiured"]
    },
    answer:{
        type:String,
        reqiured:[true,"Answer is reqiured"]
    }

},{
    _id:false
})


const behavirolQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        reqiured:[true,"technical question is required"]
    },
    intension:{
        type:String,
        reqiured:[true,"Intension is reqiured"]
    },
    answer:{
        type:String,
        reqiured:[true,"Answer is reqiured"]
    }

},{
    _id:false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        reqiured:[true,"Skill is required"]
    },
    saverity:{
        type:String,
        enum:["low","medium","high"],
        reqiured:[true,"saverity is reqiured"]

    }
},{
    _id:false
})

const praperationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        reqiured:[true,"day is reqiured"]
    },
    focus:{
        type:String,
        reqiured:[true,"focus is reqiured"]
    },
    task:[{
        type:String,
        reqiured:[true,"task is reqiured"]
    }]
})
const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type:String,
        reqiured: [true,"Job description is required"]
    },
    resume:{
        type :String
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    },
     technicalQuestions: [technicalQuestionSchema],
     behavioralQuestions: [behavirolQuestionSchema],
     skillGaps: [skillGapSchema],
     preparationPlan: [praperationPlanSchema],


    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref :"users"
    }
},{
    timestamps:true
})

const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;  