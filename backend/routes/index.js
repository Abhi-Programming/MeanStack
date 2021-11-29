module.exports = app => {
    try {

        app.get('/', (req, res) => {
            res.status(200).send("Welcome to Adventures");
        });

        app.post('/', (req, res) => {
            res.status(200).send("Welcome to Adventures");
        });

        app.use("/student", require('./student.route'));


    } catch (error) {
        console.log('Error: ', error);
        errorLog.error("Error in Index [ route ]:" + error.name + ' - ' + error.message + ' - ' + error.stack + ' - ' + error);
    }
}