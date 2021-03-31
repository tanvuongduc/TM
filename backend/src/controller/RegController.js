const Auth = require('../models/Auth')
const Task = require('../models/Task')
const md5 = require('md5')
class RegController {
    index(req, res) {
        let regx = /^[a-zA-Z0-9]{3,100}$/
        if (!regx.exec(req.body.user) || !regx.exec(req.body.password)){
            res.json("Format err")
            return
        }
        Auth.find({
            user: req.body.user,
        }, async (err, data) => {
            if(err)console.log(err)
            else {
                if(data.length===0){
                    await Auth.create(
                        {
                            user: req.body.user,
                            password: md5(req.body.password),
                            permission: 0,

                        }
                    )
                    res.json(
                        {
                            msg: 'Susccessfully Registed!'
                        }
                    )
                }
                else{
                    res.json(
                        {
                            msg: 'Your username existed!'
                        }
                    )
                }
            }
        }
        )
    }
}

module.exports = new RegController()