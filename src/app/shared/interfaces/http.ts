export interface signUp {
    user_name: string;
    user_fullname: string;
    user_email: string;
    user_phone: number;
    password: string;
    gender: string;
    dob:Date
}

export interface signIn{
    user_name: string;
    password: string;
    
}