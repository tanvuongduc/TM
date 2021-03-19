exports.checkToken = function (req,res,next) {
    let auth_Token = req.get("Authorization");
    let token = "";

    if (auth_Token === undefined) {
        res.status(401);
        res.send("Token does not exist");
        return;
    }else if (auth_Token.startsWith = "Bearer "){
        token = auth_Token.substring(7);
    }
    else {
        res.status(401);
        res.send("Token does not begin with Bearer");
        return;
    }

    //try-catch
    try {
        req.token = token;
        console.log(token);
        next();
    } catch (error) {
        console.error("Invaid Token");
        res.status(401);
    }
}