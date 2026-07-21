# SenseWatch

Raspberry Pi 4 environmental monitoring project. Reads real-time temperature, 
humidity and pressure data from a Sense HAT and displays it on a web dashboard.

---

## Hardware Used
- Raspberry Pi 4 (4GB)
- Sense HAT

## Software Used
- Python 3 — sensor polling script
- Node.js / Express — REST API backend (POST to store, GET to retrieve sensor data)
- MongoDB Atlas — cloud database
- Chart.js — data visualisation
- HTML/CSS/JavaScript — frontend dashboard

---

## Pipeline
Sense HAT sensors → Python polling script → HTTP POST → Express API → 
MongoDB Atlas → GET request from frontend → Web dashboard (Chart.js graphs)

---

## Why the Project?
I wanted to build something that combined real hardware with a full software 
stack. Most student projects are purely software — I wanted something physical 
that actually does something useful. Also good prep for embedded systems work.

## What I Learned So Far
- Reading sensor data from physical hardware (Sense HAT) on a Raspberry Pi
- Building and consuming a REST API between two separate devices on a network
- Storing and querying time-series data in MongoDB
- Displaying live data visually using Chart.js
- The difference between writing code that works on your machine vs 
  deploying it to actual hardware

## Authorship:
- Jakub Orlowski - 2026