const Task = require("../Models/Task");
class TaskController{
    /*
     * 
     * @returns json object of title and body of task
     */
    index() {
        return Task.task;
    }
}