let jwt = require("jsonwebtoken")

// funcion que funcionara como middleware -> necesita 3 argumentos
function verifyToken(req, res, next) {
    let token = req.cookies.token || ''

    // si no hay token, regresalo a la pagina de login
    if (!token){
        return res.redirect("/sign_in")
    }

    else{
        // Validar el token
        return 0

    }

}

module.exports = verifyToken