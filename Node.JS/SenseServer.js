// Required modules
const express = require('express');
const mongo = require('mongoose');
const SensorData = require('./models/sensor_schema');
require('dotenv').config();

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server on port 3000
app.listen(3000, () =>{
    console.log('Server running on port 3000')
})

// Connect to MongoDB
mongo.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Connection error:', err))

// Endpoint to receive data from the Python script
app.post('/data', (req, res) => {
    const data = req.body;
    const sensorData = new SensorData(data);
    sensorData.save()
        .then(() => {
            console.log('Data saved to MongoDB');
            res.status(200).send('Data received and saved');
        })
        .catch((err) => {
            console.error('Error saving data to MongoDB:', err);
            res.status(500).send('Error saving data');
        });
});
