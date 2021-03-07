const { inquirerMenu,next } = require('./helpers/assistant');


const execute = async () => {

    let opt = '';

    do{

        opt = await inquirerMenu();
        console.log({opt});

        await next();
        
    }while(opt !== '0');
    
}

execute();