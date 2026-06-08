# Polling Script for SenseWatch
# This script will take information from raspberryPi and format it to json
from sense_hat import SenseHat
import json
import time
import datetime

sense = SenseHat()

while True:
    # Reading things from SenseHat
    humidity = sense.get_humidity()
    temp = sense.get_temperature()
    pressure = sense.get_pressure()

    # Time stamping in UTC for MongoDB later on
    time_stamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

    data = {
        "timestamp": time_stamp,
        "humidity": humidity,
        "temperature": temp,
        "pressure": pressure
    }

    data_json = json.dumps(data)
    print(data_json)

    # 20 second delay between readings
    time.sleep(20)

