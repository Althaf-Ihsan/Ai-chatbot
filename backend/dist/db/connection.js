import { connect, disconnect } from 'mongoose';
export default async function connectToDatabase(url) {
    try {
        await connect(url);
    }
    catch (err) {
        console.log(err);
        throw new Error("cannot connect to database");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (err) {
        console.log(err);
        throw new Error("could not  disconnect from database");
    }
}
//# sourceMappingURL=connection.js.map