const Token = require('../models/Token')
const Auth = require('../models/Auth')
const CheckToken = (req, res, next) => {
    let regx = /^[a-zA-Z0-9]{1,100}$/
    if (!regx.exec(req.body.token)){
        res.json("Format err")
        return
    }
    Token.find({
        token: req.body.token,
    }, async (err, data) => {
        if (err) console.log(err)
        else if (!data) {
            res.json({
                err: "Access denied!!"
            })
        }
        else {

            if (data.length == 1 && Date.now() - data[0].createdAt < 10 * 60 * 100000000) {
                let query = {
                    user: data[0].user
                }
                req.auth = await Auth.findOne(query)
                return next()           //Check Token oke
            }
            else {
                data.forEach(d => {
                    Token.deleteOne(d, (err) => {
                        if (err) console.log(err)
                    })

                })
                res.json({
                    err: "Access denied!!"
                })
            }

        }

    })
}
module.exports = CheckToken