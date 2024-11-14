const express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

// mongoose instance connection url  connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://atlas-ujpguo-shard-0@mongo.cms.gre.ac.uk/pm76');
// mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://userid:userid@fgwweb2.0uszz.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2',
    { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route
app.listen(port);
app.use((req, res) =>{
    res.status(404).send({ url: `${req.originalUrl} not found`})
});

console.log('Server started on: ' + port);