const bcrypt = require('bcrypt')
const fs = require("fs")

const rawData = fs.readFileSync("server/units.json")
const data = JSON.parse(rawData)

data.users.map(u => {
    const pwcrypt = bcrypt.hash(u.password, 10).then(result => console.log(u.username, result))
})