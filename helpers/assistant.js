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
