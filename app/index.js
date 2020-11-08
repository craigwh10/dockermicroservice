const app = require('express')()
const appid = process.env.APPID;

app.get("/", (req,res) => {
    res.send(`appid: ${appid} home page`);
})

app.get("/app1", (req,res) => {
    res.send(`appid: ${appid} app1`);
})

app.get("/app2", (req,res) => {
    res.send(`appid: ${appid} app2`);
})

app.get("/admin", (req, res) => {
    res.send(`appid: ${appid} admin`);
})

app.listen(appid, () => {
    console.log(`${appid} is listening on port ${appid}`);
})