const express = require('express')
const cookieParser = require('cookie-parser')
const {v4: uuidv4 } = require('uuid')

const app = express()

app.use(cookieParser());

app.listen(1234, ()=> console.log('the web server is running...'));

app.get('/createOrUpdateFPIDCookie', (req, res)=>{
    var fpidCookieValue = req.cookies['FPID'];
    if(!!fpidCookieValue)
    {
        console.log('Cookies: ', req.cookies, " --- FPID Cookie exists");
        res.cookie('FPID', fpidCookieValue, {maxAge: 63072000000});
    }
    else
    {
        console.log('Cookies: ', req.cookies, " +++ FPID Cookie doesn't exists");
        let uuid = uuidv4();
        res.cookie('FPID', uuid, {maxAge: 63072000000});
        console.log('++++++ FPID Cookie Created...');
    }
    res.send();
});

