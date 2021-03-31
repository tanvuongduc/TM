const Auth = require('../models/Auth')
const Token = require('../models/Token')
const md5 = require('md5')

class LoginController {
    index(req, res) {
        let regx = /^[a-zA-Z0-9]{3,100}$/
        if (!regx.exec(req.body.user) || !regx.exec(req.body.password)){
            res.json("Errorr not found your acc")
            return
        }
        
        Auth.find({
            user: req.body.user,
            password: md5(req.body.password)
        }, async (err, data) => {
            if (err) console.log(err)
            else {
                if (data.length === 1) {
                    let date = Date.now()
                    let token = md5(date + req.body.user + 'deptraibigkhoai')
                    await Token.create(
                        {
                            user: req.body.user,
                            token: token,
                            createdAt: date
                        }
                    )
                    res.json(
                        {
                            token: token
                        }
                    )
                }
                else {
                    res.json(
                        {
                            token: ''
                        }
                    )
                }
            }
        }
        )
    }
}

module.exports = new LoginController()