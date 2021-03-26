const Token = require('../models/Token')

const CheckToken = (req, res, next)=>{
    Token.find({
        token: req.body.token,
    }, async (err, data)=>{
        if(err)console.log(err)
        else if(!data){
            res.json({
                msg:"Err token, please relogin!"
            })
        }
        else{

            if(data.length==1&&Date.now() - data[0].createdAt<10*60*1000){
                req.body.user=data[0].user
                return next()           //Check Token oke
            }
            else{
                data.forEach(d=>{
                    Token.deleteOne(d,(err)=>{
                        if(err) console.log(err)
                    })
                    
                })
                res.json({
                    msg: "relogin!!"
                })
            }
            
        }

    })
}
module.exports = CheckToken