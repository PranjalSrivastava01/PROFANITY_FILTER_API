const mongoose=require('mongoose');
const userSchema=mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true,"please enter"]
        },
        count:{
            type:Number,
            required:true,
            default:0
        },
    },
    {
        timestamps:true
    }
);

const User=mongoose.model("User",userSchema);
module.exports=User;

//collection will be created with the name products