// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient;
import {MongoClient} from "mongodb";

async function testConnection() {
//    Coming soon

    // const uri = config.mongopath
    const uri = "mongodb+srv://admin:S5wQ3a6pXA8YRBQ@maoridb.1i93u.mongodb.net"
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    try {
        await client.connect();
        console.log("Connected");
        await listDatabases(client);
    } catch (e) {
        console.error(e);
        console.error("je moder, error catch in try")
    } finally {
        await client.close();
    }
}

// testConnection().catch((error) => {
//     console.error(error)
//     console.error("je moder, error catch in functioncall")
// })