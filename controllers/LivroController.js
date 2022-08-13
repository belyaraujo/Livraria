const livro = require("../persistencelayer/models/livros")

const ILivroController = require('./ILivroController.js');


const config = require('../config.js');
const LivroDAO = require('../persistencelayer/dao/'+config.ILivroDAO);
let livrodao = new LivroDAO();

class LivroController extends ILivroController{
  constructor(){
    super();
       
  }

  
  async show(req, res)
    {
  
       let livros = await livrodao.recovery();
        return res.json(livros);
    }
  async store(req, res)
     {
        const livros =  await livrodao.create(req);
        return res.json(livros);
     }
   async destroy(req,res){
         let livros = await livrodao.delete(req);
         return res.json(livros);
    }
   async update(req,res){
        let livros = await livrodao.update(req);
        return res.json(livros);
    }

   async index(req,res)
    {
        let livros = await livrodao.search(req);
        return res.json(livros);
    }
  
}
module.exports = LivroController;