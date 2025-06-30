const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 8000;

// middleware body-parser 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// connnecting to mongodb 

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactkmt');
}

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/authkmt');
}



// importing models with their own connection 


// const registeration = require('/registration')(authkmt);

// definning the mongoose sschema for authkmt

const registrationschema = new mongoose.Schema({
    name: String,
    name2: String,
    email: String,
    password: String,
    password2: String,
    city: String,
    country: String,
    state: String,
    zip: String,
    phone: String,
    address: String,
});



// definning the mongoose schema for contactkmt 

const kmtcontactschema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});


// making model of registerationschema

const registration = mongoose.model('registration', registrationschema);


// making model of kmtcontactschema 


const contact = mongoose.model('contact', kmtcontactschema);


// express specific content starts here 

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'assets')));
// express specific content ends here 


// endpoints starts here 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'home.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'contact.html'));
});

app.post('/', (req, res) => {
    var mydata = new contact(req.body);
    mydata.save().then(() => {
        res.send("This is item have been saved in the database");
    }).catch(() => {
        res.status(400).send("Item was not sent");
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'services.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'products.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'downloads.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'about.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'privacy-policy.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'members-login.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'registration.html'));
});

app.post('/registration', async (req, res) => {
    const { name, name2, email, password, password2, city, country, state, zip, phone, address } = req.body;

    const existingUser = await registration.findOne({ email });
    if (existingUser) {
    res.status(409).send("User registered Succesfully");
    }


    const newUser = new registration({ name, name2, email, password, password2, city, country, state, zip, phone, address });
    await newUser.save();
    res.send("User already exists");
});

app.post('/members-login', async (req, res) => {
    const { email, password } = req.body;

    const registration = await registration.findOne({ email });
    if (!registration || registration.password !== password) {
        return res.status(401).send("Invalid rmail or password");
    }
    res.send(`Welcome, ${registration.name}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'forgot-password.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'free-softwares.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients-softwares.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'ourteam.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients-chunian.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients-lahore.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients-pattoki.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'clients-talagang.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'sitemap.html'));
});



// starting the server 

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
