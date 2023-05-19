import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongooes');
        console.log('Database connected')
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    } catch (error) {
        console.error(`Failed to connect database`, error);
    }
}
bootstrap()


