import mongoose from "mongoose";

// let dbHome= mongoose.createConnection()
// let container_1= mongoose.createConnection()
// let container_2= mongoose.createConnection()
// let container_3= mongoose.createConnection()

const dbConnection = async () => {
    try {
        const DB = await mongoose.connect(`${process.env.DATABASE}`);
        console.log('DB: ', DB.connection.name);

        // const option = '?ssl=true&replicaSet=atlas-ula0hr-shard-0&authSource=admin&appName=Cluster1'
        // await dbHome.openUri(`${process.env.DATABASE}/${process.env.DB1}${option}`)
        // await container_1.openUri(`${process.env.DATABASE}/${process.env.DB2}${option}`)
        // await container_2.openUri(`${process.env.DATABASE}/${process.env.DB3}${option}`)
        // await container_3.openUri(`${process.env.DATABASE}/${process.env.DB4}${option}`)
        // console.log('db1: ', dbHome.name);
        // console.log('db2: ', container_1.name);
        // console.log('db3: ', container_2.name);
        // console.log('db4: ', container_3.name);
    } catch (error) {
        console.log('error is: ', error);
    }
}

export {
    dbConnection,
    // dbHome,
    // container_1,
    // container_2,
    // container_3
}