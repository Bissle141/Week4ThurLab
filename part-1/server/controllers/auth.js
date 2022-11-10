const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(5)

const users = [
  // {
  //   username: 'Bissle',
  //   email: 'gmail@gmail.com',
  //   firstName: 'gary',
  //   lastName: 'luis',
  //   password: '$2a$05$clclGGP8xlccGjl/CRWB8eeL/gvCAD2QbfHWP/6JvhJmp0CN4hEf2'
  // },
]

module.exports = {
  login: (req, res) => {
      const { username, password } = req.body
      console.log('Logging In User')
      console.log('USERS:', users)
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          let isPass = bcrypt.compareSync(password, users[i].password)
          
          if(isPass){
            let userCopy = users[i]
            delete userCopy.password

            res.status(200).send(userCopy)
            console.log('user successfully')
            return
          }
        }
      }
      res.status(400).send("User not found.")
    },
    
    register: (req, res) => {
      console.log('Registering User')

      const { username, email, firstName, lastName, password } = req.body

      const passHash = bcrypt.hashSync(password, salt)
      
      let userObj = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passHash
      }

      users.push(userObj)
      console.log(users)
      res.status(200).send(req.body)
    }
}