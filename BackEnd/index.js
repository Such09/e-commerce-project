import { dbConnection } from "./src/config/dbConnection.js";
import { app } from "./app.js";

dbConnection()
.then(() => {
    app.listen(4000, () => {
        console.log(`app is running on pont 4000`);
    })
})
.catch((err) => {
    console.log('error is: ', err);
    
})