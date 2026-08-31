import express from 'express';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.all('/player/growid/checktoken', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'html', 'login.html'));
});

app.get('/', (req, res) => {
  res.type('text/plain').send(`[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 185.149.27.57
www.growtopia2.com = 185.149.27.57
`);
});

app.all('/player/login/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'html', 'login.html'));
});


app.use((req, res, next) => {
  res.status(404).send('<h1 style="color:red; text-align:center;"><i>Page Not Found <br> (404)</i></h1>');
});

app.use((err, req, res, next) => {
  console.error('An error occurred:', err.message);
  res.status(500).send('Something went wrong.');
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
