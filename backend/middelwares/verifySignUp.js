
let User = require('../model/User');

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        user_name: req.body.user_name
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }

        // Email
        User.findOne({
            user_email: req.body.user_email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            }

            next();
        });


        //phone
        User.findOne({
            user_phone: req.body.user_phone
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(400).send({ message: "Failed! Mobile Number is already in use!" });
                return;
            }
            next();
        });



    });
};


const verifySignUp = {
    checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
