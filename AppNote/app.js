const validator_man = require('validator').default;
const chalk = require('chalk').default;
const fs = require('fs');
const { type } = require('os');
const { title } = require('process');
const { command, demandOption } = require('yargs');
const yargs = require('yargs');
const notes= require('./notes.js')

//creat command users

yargs.command({
    command : 'add',
    describe :' To add a note',
    builder:{
        title :{
            describe:'Title note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body);
    }
}
);

yargs.command({
    command : 'list',
    describe :' To show list notes',
    builder:{
        all:{
            type : 'string'
        }
    },
    handler (){
        notes.listNotes();
    }
}
);
yargs.command({
    command : 'remove',
    describe :' To remove a node',
    builder:{
        title:{
            describe:"Title of note need remove",
            demandOption :true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title);
    }
}
);
yargs.command({
    command : 'read',
    describe :' To read a node',
    builder :{
        title:{
            describe:"Read a note by title",
            demandOption :true,
            type :'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title);
    }
}
);
yargs.argv;