export class UserModel{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public senha: string,
        public profile: string
    ){}
}