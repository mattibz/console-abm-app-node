const { 
    inquirerMenu,
    next,
    readInput,
    saveData,
    readData,
    deleteMenu,
    confirm,
    checklistMenu
} = require('./helpers/assistant');

const { Task } = require('./models/task');
const { Tasks } = require('./models/tasks');


const execute = async () => {

    
    let opt = '';

    const tasks = new Tasks();

    loadtasks =  readData();

    if(loadtasks){ // load  tasks from json
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

                tasks.listTasks();
            break;

            case '3':
            //list complete status task

                tasks.getStatusTask(true);
            break;

            case '4':
            //list pending status task

                tasks.getStatusTask(false);
            break;

            case '5':
                const ids = await checklistMenu(tasks._list);
                tasks.switchToCompleted(ids);
            break;

            case '6':
            //delete task

                let id = await deleteMenu(tasks._list);

                if(id !== '0'){
                    
                    let verify = await confirm('are you sure you want to delete this task?..'.yellow);
                
                    if(verify){

                         tasks.deleteTask(id);
                         console.log(`task ${id} deleted`.green);
                    }

                }

            break;
        }

        saveData(tasks._list);

        await next();

        
    }while(opt !== '0');
    
}

execute();