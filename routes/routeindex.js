// Como le decimos a 'app.js' que las RUTAS estan definidas en otro lado?
/* Bueno. podemos hacerlo de esta forma : 
    let indexRoutes = require("../routes/routeindex")
*/

// Archivo de rutas
let express = require("express");
let router = express()  // Instancia de express 

// Tengo que importar el Schema de 'Users'
let User = require("../models/User")

// Ruta 'get' para ir a la home page
router.get("/", async function(req, res){
    res.render("index")
})

// Ruta 'get' para ir a la pagina de 'sign up'
router.get("/sign_up", async function(req, res){
    res.render("sign_up");
});

// Para enviarle datos al server, es por medio de un POST
// Si el cliente me esta enviando una peticion POST a esta ruta ('/sign_up'), lo primero que tengo
// que hacer es recuperar la info. La info viene en el CUERPO de la peticion.

// Agregamos nuevo usuario a la base de datos
router.post("/sign_up", async function(req, res){ // async sirve para que el codigo se detenga, hasta que se agregue el usuario
    
    let user = new User(req.body)
    await user.save()
    res.redirect("/sign_in")
})

// Ruta 'get' para ir a la pagina de 'sign in'
router.get("/sign_in", async function(req, res){
    res.render("sign_in");
});

module.exports = router // Esto es para que todos los objetos 'app' se puedan importar despues
                        // en otro lugar, el cual seria 'app.js'
