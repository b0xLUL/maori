const {MongoClient} = require('mongodb');
const config = require('../config.json');
import 'regenerator-runtime/runtime';

async function testConnection() {
//    Coming soon

    const uri = config.mongopath;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    try {
        await client.connect();
        console.log("Connected");
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

testConnection()

