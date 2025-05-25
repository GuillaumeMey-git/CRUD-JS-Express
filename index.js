import express from "express";

const app = express();
const port = 8787;

app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port} `);
});

// Ajout script dev dans package.json + installation de nodemon pour actualiser en direct: npm i --save-dev nodemon