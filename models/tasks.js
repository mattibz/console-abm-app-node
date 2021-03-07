const { Task } = require('./task');

class Tasks{

    constructor(){
        this._list = {};
    }

    get list(){
        
        const list = [];

        Object.keys(this._list).forEach(key => {
            let tmp_task = this.list[key];
            list.push(tmp_task);
        });

        return list;
    } 

    createTask(desc = ''){

        const task = new Task(desc);
        this._list[task.id] = task;
    }

    loadTasksFromArray( tasks = []){
        
        if(typeof(tasks)){
            const tasks_arr = Object.keys(tasks).map((key) => [Number(key), obj[key]]);
        }

        tasks.forEach(task =>{
            this._list[task.id] = task;
        }); 

    }


}

module.exports = {
    Tasks
}