require('colors');
const inquirer = require('inquirer');


const menu_settings = [
  {
    type:'list',
    name:'option',
    message:'Select option',
    choices:[
      {
          value:'1',
          name:'1. Create new task'
      },
      {
          value:'2',
          name:'2. List task'
      },
      {
          value:'3',
          name:'3. List complete task'
      },
      {
          value:'4',
          name:'4. List pending task'
      },
      {
          value:'5',
          name:'5. Complete task(s)'
      },  
      {
          value:'6',
          name:'6. Delete task'
      },
      {
          value:'7',
          name:'7. Exit'
      },
    ]
  }
];


const inquirerMenu = async() => {

  console.clear();
  console.log('========================'.yellow);
  console.log('#    Select option     #'.yellow);
  console.log('========================\n'.yellow);

  const { option } = await inquirer.prompt(menu_settings);
  
  return option;

}


const next = async() => {

    const question = [
      {
          type:'input',
          name:'enter',
          message:`Press ${'enter'.blue} for continue...`
      }
    ];

    console.log('\n');
    
    await inquirer.prompt(question);

}


module.exports = {
  inquirerMenu,next
}

/*
const showMenu = () => {


     return new Promise(resolve =>{

       console.clear();
       console.log('========================'.yellow);
       console.log('#    Select option     #'.yellow);
       console.log('========================\n'.yellow);

       console.log(`${'1.'.green} Create new task`);
       console.log(`${'2.'.green} List task`);
       console.log(`${'3.'.green} List complete task`);
       console.log(`${'4.'.green} List pending task`);
       console.log(`${'5.'.green} Complete task(s)`);
       console.log(`${'6.'.green} Delete task`);
       console.log(`${'7.'.green} Exit\n`);

       const readline = require('readline').createInterface({
          input:process.stdin,
          output:process.stdout
        });

       readline.question('select an option: ',(opt)=>{
          readline.close();
          resolve(opt);
       });

    });

}


const pause = () => {

   return new Promise(resolve =>{

        const readline = require('readline').createInterface({
          input:process.stdin,
          output:process.stdout
        });

      readline.question('Please press any key to continue ...',(opt)=>{
          readline.close();
          resolve();
      });   

   });

}



module.exports = {
  showMenu,
  pause
}*/