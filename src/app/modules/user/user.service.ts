import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save(); // built in instance methods

    console.log(user.fullName()) // custom instance methods
    return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1 });
    return user;
}

export const getAllAdminUserFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}