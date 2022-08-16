const fs = require('fs');
const chalk = require('chalk').default;
const { title } = require('process');

const getString= () => {
    return 'Your note.....';
}

// add note function
const addNote = (title,body)=>{
    const notes=loadNote();
    const index = notes.find((value)=>{
        return value.title===title;
    });
    if(!index){
        notes.push({
        title :title,
        body: body
        });
        storeNotes(notes);
        console.log(chalk.green('The note was added'));
    }else{
        console.log(chalk.red('Note exsited!'));
    }
}


// remove note function
const removeNote =  (title) => {
    const notes = loadNote();
    const index = notes.findIndex((value)=>{
        return value.title===title;
    });
    if(index !== -1 ){
        notes.splice(index,1);
        storeNotes(notes);
        console.log(chalk.bgGreen('The note was removed'));
    }else{
        console.log(chalk.bgRed('Not found'));
    }
}

// list note function

const listNotes = ()=>{
    const notes =loadNote();
    if(notes.length===0){
        console.log(chalk.bgRed(' Notes is empty'));
    }else{
        console.log(chalk.bgGreenBright('Yours note'));
        notes.forEach(element => {
            console.log(chalk.bgBlue(element.title));
        });
    }
}

// read note


const readNote = (title) =>{
    const notes= loadNote();
    const noteTaken = notes.find((value)=> {
        return value.title===title;
    });
    if(noteTaken === undefined){
        console.log(chalk.bgRedBright("Not Found"));
    }else{
        console.log(chalk.bgGreenBright(`Title: ${noteTaken.title}`));
        console.log(chalk.bgBlueBright(`\tBody: ${noteTaken.body}`));
    }
}
const storeNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON= dataBuffer.toString();
        const data=JSON.parse(dataJSON);
        return data;
    } catch (error) {
        return [];
    }
}

module.exports={
    addNote : addNote,
    getString: getString,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
};
