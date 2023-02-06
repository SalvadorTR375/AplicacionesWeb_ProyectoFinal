// Inicializar letiables para que corran las librerias

let express = require("express");
let mongoose = require('mongoose');

let app = express()

let indexRoutes = require("../routes/routeindex") // Para importar las rutas

mongoose.set('strictQuery', true) // Con esta linea quitamos el mensaje de WARNING

// Conectarse a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/users') // la db se llama 'users'
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));

app.set("view engine", "ejs") // Temas de los middlewares

app.use(express.urlencoded({extended:false})) // Necesitamos esta linea porque los datos los vamos a dar de alta desde un formulario
app.use(express.json()) // Se usa si fueramos a generar un obj .json y se lo fueramos a mandar como un POST

/* La linea de abajo se usa de esta manera porque :

*/

app.use("/", indexRoutes); // Todo lo que vaya a la ruta home '/', utilizara estas rutas

// Para empezar a escuchar
app.listen(3000, ()=>{
    console.log(" Server is now online in port 3000 :D ")
})

/* (1:00:30) => "Podemos generar de una vez las rutas. Tip: las rutas las podemos
                definir en este mismo archivo 'app.js', pero lo que se recomienda
                es que app.js solo contenga lo indispensable (importaciones,
                configuraciones, etc), y que las rutas las tengas separadas en un
                archivo aparte en una carpeta llamada 'routes' */

