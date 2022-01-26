// const User = require("../Models/User");
class UserController {
    
    constructor(name, email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    /**
     * 
     * @returns json object 
     */
    index() {
        this.user = {
        name: this.name,
        email: this.email,
        password : this.password
        }
        return this.user;
    }
}
var user1 = new UserController("samir", "mail", 2131231);
console.log(user1.index());