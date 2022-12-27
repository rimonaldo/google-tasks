const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cookieParser())
app.use(express.json())



app.use(express.json({ limit: '50mb',extended:true }));
app.use(express.urlencoded({ limit: '50mb' ,extended: true, parameterLimit: 50000 }));




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:5173', 'http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// rimon's changes
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DBconnection Successfull!"))
.catch((err) =>{
    console.log(err);
});




// app.get('/**', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })


const port = process.env.PORT || 3030
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})