const Task = require("../models/Task");
class TaskController{
    /*
     * 
     * @returns json object of title and body of task
     */
    index() {
        return Task.task;
    }
}
//test task
// task1 = new TaskController();
// console.log(task1.index());