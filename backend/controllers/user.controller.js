//modal 
let User = require('../model/User');
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

class userController {

    signup = (req, res) => {
        const user = new User({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_phone: req.body.user_phone,
            password: bcrypt.hashSync(req.body.password, 8)
        });

        User.create(user, (error, data) => {
            if (error) {
                res.status(500).send({ message: error });
            } else {
                res.handler.success(data)
            }
        })
    };

    signin = (req, res) => {
        User.findOne({
            user_name: req.body.user_name
        })
            .populate("roles", "-__v")
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!user) {
                    return res.status(404).send({ message: "User Not found." });
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                var token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 86400 // 24 hours
                });

                var authorities = [];

                for (let i = 0; i < user.roles.length; i++) {
                    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
                }
                res.status(200).send({
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,
                    accessToken: token
                });
            });
    };

}

module.exports = userController;