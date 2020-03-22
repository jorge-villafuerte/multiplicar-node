//const mult = require('./mutiplicar/multiplicar'); -> valido
//const { crearArchivo: createArc } = require('./mutiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./mutiplicar/multiplicar');
const argv = require('./config/yargs').argv
const colors = require('colors');
//console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => {
                console.log(`archivo ha sido creado ${resp.green}`);
            }).catch(err => {
                console.log(err);
            })
        break;

    default:
        break;
}

/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
crearArchivo(base)
    .then(resp => {
        console.log(`archivo ha sido creado ${resp}`);
    }).catch(err => {
        console.log(err);
    })*/