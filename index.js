const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 5000;
let usrTkn = '';
const headers = { 'Authorization': 'key=AAAADBWWWX4:APA91bEQml5eNuz9p7PvKhBbQVkje94bLFrWYE_0rUesa6q7UgesDyLvod1FHHtKnvPbba4AX1Eeob7cc37CoRo2UaWToX-de9jqTRbmsfPRhTlTlxw5pJxFN6EjnbcTA2OPxYGBP9qe', 'Content-Type': 'application/json' }
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/usrtkn', (req, res) => {
    usrTkn = req.body.token;
    console.log(usrTkn);
    console.log(req.body.userid);
    setTimeout(() => {
        axios.post('https://fcm.googleapis.com/fcm/send', {
            "notification": {
                "title": "SimiCart",
                "body": "Test push notification",
                "click_action": "http://localhost:3000/",
                "icon": "https://i.imgur.com/5zO5cce.png"
            },
            "to": usrTkn
        }, { headers }).then((res) => res).catch((err) => console.log(err))

    }, 3000);
    res.send(req.body);
})
app.post('classifyImages', (req, res) => { 
    deviceId = req.body.deviceId;
    imageFile = req.body.imageFile;
    console.log(deviceId);
    //upload to firebase storage
    

})

app.listen(port, () => console.log('listening on port ' + port))