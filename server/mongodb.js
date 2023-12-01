const db = require("mongoose");
const { TYcarpark } = require("../server/models/TaoyuanCarparkData");
const { TYavailability } = require("../server/models/TaoyuanParkingAvailability");
require('dotenv').config();

const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST,MONGODB_PORT,MONGODB_URI} = process.env;
const username = encodeURIComponent(MONGO_USERNAME);
const password = encodeURIComponent(MONGO_PASSWORD);
const host = encodeURIComponent(MONGO_HOST);
const port = encodeURIComponent(MONGODB_PORT);
const URI = encodeURIComponent(MONGODB_URI)
const url = URI || `mongodb://${username}:${password}@${host}:${port}`;


db.connect(url)
        .then(() => console.log('資料庫連線成功！'))
        .catch(err => console.error('資料庫連線失敗！', err));

