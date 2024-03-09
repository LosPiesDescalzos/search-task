export interface IAddress {
    address: string;
    city: string;
    state: string;
}

export interface IUserShort {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUser extends IUserShort{
    birthDate: string;
    age: number;
    gender: string;
    address: IAddress;
    image: string;
}
