const app=require("./index");

var port =process.env.PORT || 4500

const connect=require("./configs/db");

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
})