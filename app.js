const { inquirerMenu,next,readInput } = require('./helpers/assistant');
const { Task } = require('./models/task');
const { Tasks } = require('./models/tasks');


const execute = async () => {

    
    let opt = '';

    const tasks = new Tasks();

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
            console.log(tasks._list);
            break;
        }
        
        await next();

        
    }while(opt !== '0');
    
}

execute();