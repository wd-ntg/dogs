import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let dbConnection;

export const connectToDB = (cb) => {
    MongoClient.connect(process.env.MONGODB_APP, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    })
        .then((client) => {
            dbConnection = client.db('dog');
            return cb();
        })
        .catch((err) => {
            return cb(err);
        });
};

export const getDB = () => dbConnection;