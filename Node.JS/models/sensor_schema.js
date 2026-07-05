const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sensorSchema = new Schema({
    timestamp: {
    type: String,
    required: true,
    trim: true
  },
    humidity: {
    type: Number,
    required: true,
    min: [0, "Humidity cannot be negative"],
    max: [100, "Humidity cannot exceed 100"]
  },
    temperature: {
    type: Number,
    required: true,
    min: [-100, "Temperature cannot be this low"],
    max: [100, "Temperature cannot exceed 100"]
  },
    pressure: {
    type: Number,
    required: true,
    min: [500, "Pressure cannot be this low"],
    max: [1100, "Pressure cannot exceed 1100"]
  }
});

const SensorData = mongoose.model('SensorData', sensorSchema);

module.exports = SensorData;
