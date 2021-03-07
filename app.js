//const { showMenu,pause } = require('./helpers/assistant');
const { inquirerMenu,next } = require('./helpers/assistant');


const execute = async () => {

    let opt = '';

    do{

        //opt = await showMenu();
        opt = await inquirerMenu();
        console.log({opt});

        await next();
        //if( opt !== '0' ) await pause();
        
    }while(opt !== '0');
    
}

execute();