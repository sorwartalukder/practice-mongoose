import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
import { Schema, model } from "mongoose";

const app: Application = express()

//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // interface -> schema -> model -> model(database query)

    // 1. Create an interface in MongoDB.
    interface IUser {
        id: string;
        role: 'student';
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string
        };
        dateOfBirth?: string;
        gender: 'male' | 'female';
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    };
    // 2. Create a Schema using interface.
    const userSchema = new Schema<IUser>({
        id: { type: String, required: true, unique: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true },
        },
        dateOfBirth: { type: String },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: { type: String },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
    });
    // 3. Create a Model.
    const User = model<IUser>('User', userSchema);

    const createUserToDB = async () => {

        const user = new User({
            id: '779',
            role: 'student',
            password: 'Jhakanaka',
            name: {
                firstName: 'x',
                middleName: 'sorwar',
                lastName: 'talukder'
            },
            gender: 'male',
            email: 'sorwar@gmail.com',
            contactNo: '01777777777',
            emergencyContactNo: '018888888',
            presentAddress: 'dhaka',
            permanentAddress: 'chandpur',
        });
        await user.save();
        console.log(user);
    };
    createUserToDB()
    // res.send('Hello World!')
    // next();
})


export default app;