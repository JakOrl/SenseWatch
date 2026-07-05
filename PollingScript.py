# Polling Script for SenseWatch
# This script will take information from raspberryPi and format it to json
from sense_hat import SenseHat
import requests
import json
import time
import datetime

sense = SenseHat()
server_url = "http://DESKTOP-MPSR5VJ.local:3000/data"
# offset of around 6c, due to raspberry pi temp
temp_offset = 6

while True:
    # Reading things from SenseHat
    humidity = sense.get_humidity()
    temp = sense.get_temperature() - temp_offset
    pressure = sense.get_pressure()

    # Time stamping in UTC for MongoDB later on
    time_stamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

    data = {
        "timestamp": time_stamp,
        "humidity": humidity,
        "temperature": temp,
        "pressure": pressure
    }

    # Posting the data to the server
    x = requests.post(server_url, json=data)
    data_json = json.dumps(data)
    print(data_json)

    # 30 second delay between readings
    time.sleep(30)

