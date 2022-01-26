class Task { 
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    task = {
        title: this.title,
        body: this.body
    }
}
export Task;
//test controller
// var task1 = new Task("task1", "body1");
// console.log(task1.index());