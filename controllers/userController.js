//initialize
const models = require('../models')
const userController = {}



//sign up
userController.createUser = async (req,res) => {
    try{
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location,
            phone: req.body.phone,
            dob: req.body.dob
        })
        console.log(user)
        res.json(user)
    } catch (error) {
    res.send(error.message)
    }
}

module.exports = userController