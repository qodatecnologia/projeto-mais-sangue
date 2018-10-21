// configurando setup e chamando pacotes
let express = require('express'); 
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Recebedor = require('./app/models/recebedor')
let Doador = require('./app/models/doador')
// URI: mlab
mongoose.connect('mongodb://userdb:86nrTtRVKxRvbjv@ds157723.mlab.com:57723/projetos2b', { useNewUrlParser: true });
// local:
//mongoose.connect('mongodb://localhost:27017/s2b', { useNewUrlParser: true });  
// configurando variavel app para uso do bodyparser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// porta pra executar api
let port = process.env.port || 8000;
//ROTAS API
// instancia das rotas via express
let router = express.Router();
// Rotas API
router.use(function(req,res,next){
    console.log('rota acontecendo...')
    next();   
})
// rota de exemplo para o postman
router.get('/',function(req,res){
    res.json({message: "Sucesso!"})
});
//APIs DOADOR ======================================================================================
router.route('/doador')
//metodo criar doador
.post(function(req,res) {
    let doador = new Doador();
//campos de request
doador.nomed = req.body.nomed;
doador.sangued = req.body.sangued; 

doador.save(function(error){
    if(error)
        res.send('Erro ao tentar incluir recebedor '+ error)
    res.json({message: 'Doador cadastrado com sucesso!'})
})
})
//APIs RECEBEDOR ====================================================================================
router.route('/recebedor')
//metodo criar receptor 
.post(function(req,res) {
    let recebedor = new Recebedor();
    //campos de request
    recebedor.nome = req.body.nome;
    recebedor.sangue = req.body.sangue;
    recebedor.hospital = req.body.hospital;
    recebedor.desc = req.body.desc;

    recebedor.save(function(error){
        if(error)
            res.send('Erro ao tentar incluir recebedor '+ error)
        res.json({message: 'Receptor cadastrado com sucesso!'})
    })
})
//=====================================================================================================
//Metodo selecionar todos receptores GET
.get(function(req,res) {
    Recebedor.find(function(error, recebedor){
        if(error)
            res.send('Erro ao selecionar receptores '+ error);
        res.json(recebedor);
        });
    });


//rotas GET, PUT e DELETE por ID
router.route('/recebedor/recebedor_id')
// Selecionar por ID (http://localhost:8000/api/recebedor/:recebedor_id)

//definindo padrao das rotas
app.use('/api',router);
//iniciando o servidor
app.listen(port);
console.log('Iniciando app na porta '+port);