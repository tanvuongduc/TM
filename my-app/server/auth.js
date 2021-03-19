exports.checkToken = function (req,res,next) {
    let authToken = req.get("Authorization");
    let token = ""

    if (authToken === undefined) {
        res.status(401);
        return;
    }
    else if (authToken.startsWith = "Bearer ") {
       token = authToken.substring(7) //Bearer_
    }

    else {
        res.status(401);
        return;
    }

    try {
        req.token = token;
        next()
    } catch (e) {
        res.status(401)
    }
}