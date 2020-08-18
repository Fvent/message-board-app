export class User{
    name: String;
    alias: String; 
    password: String;

    constructor(name: String, alias: String, password: String){
        this.name = name;
        this.alias = alias;
        this.password = password;
    }
}