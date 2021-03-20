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
        this._list = tasks;     
    }


    listTasks(){

        Object.keys(this._list).forEach((key,id) => {

            console.log();
            
            let tmp_task = this._list[key];

            let idx = `${id + 1}`.yellow;

            const { desc , completedIn} =  tmp_task;

            let status = (completedIn) ? 'Completada'.green : 'Pendiente'.red
            
            console.log(`${idx} ${desc} :: ${status}`);
            
        });

    }



}

module.exports = {
    Tasks
}