const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db-name"
})


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`uname`,`email`,`password`) VALUES (?)"
    values = [
        req.body.uname,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data)
    })
})


app.post('/signin', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("error");
        }
        if (data.length > 0) {
            return res.json("success")
        } else {
            return res.json("failed")
        }
    })
})



app.listen(8080, () => {
    console.log("listening")
})