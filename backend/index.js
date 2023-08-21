

const express = require("express");

const { connection } = require("./db")
const bcrypt = require("bcrypt")
const { UserModel } = require("./model/user.model")
const jwt = require("jsonwebtoken")

const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.use("/employee", postRouter)


//regiter user

app.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body
    try {
        bcrypt.hash(password, 8, async (err, hash) => {
            const user = new UserModel({ email, password: hash })
            await user.save()
            return res.json({ msg: "User Registered" })
        })
    } catch (error) {
        console.log(error)
    }
})

// login user

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ course: "backend" }, "masai")
                    res.json({ "msg": "Login Successfull", "token": token })
                } else {
                    res.json({ "msg": "Wrong Credentials" })
                }
            })

        } else {
            res.json({ msg: "Login Failed" })
        }

    } catch (error) {
        console.log(error)
    }
})







app.listen(8080, async () => {
    try {
        await connection
    } catch (err) {
        console.log(err)
    }
    console.log("Running at port 8080")
})