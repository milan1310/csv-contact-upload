const express = require('express');
const cluster = require('cluster');
const os = require('os');
const process = require('process');
const app = express();

const totalCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    const port = 3000 || process.env.PORT;
    app.listen(port, () => console.log(`server is running on pid ${process.pid}`))
}

app.use(express.json())

// connect database
const connectDB = require('./config/db');
connectDB();


app.use('/', require('./routers/auth'));
app.use('/savecontacts', require('./routers/contact'));




