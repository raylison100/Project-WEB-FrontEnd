export class UserModel{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public profile: string
    ){}
}