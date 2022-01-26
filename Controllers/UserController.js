const User = require("../Models/User");
class UserController {
    /**
     * 
     * @returns json object of title and body of task
     */
    index() {
        this.task = {
            title: this.title,
            body: this.body
        }
        return this.task;
    }
}