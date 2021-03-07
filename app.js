const { inquirerMenu,next,readInput,saveData,readData } = require('./helpers/assistant');
const { Task } = require('./models/task');
const { Tasks } = require('./models/tasks');


const execute = async () => {

    
    let opt = '';

    const tasks = new Tasks();

    loadtasks =  readData();

    if(loadtasks){ // load  task from json
        tasks.loadTasksFromArray(loadtasks);
    }

    do{

        opt = await inquirerMenu();
        

        switch(opt){
            case '1':
            //create task
             const desc = await readInput('enter description: ');
             tasks.createTask(desc);
            break;

            case '2':
            //list tasks
            //console.log(tasks.list);
            console.log(tasks._list);
            break;
        }

        saveData(tasks._list);

        await next();

        
    }while(opt !== '0');
    
}

execute();