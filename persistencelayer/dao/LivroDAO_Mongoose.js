const mongoose = require('mongoose');

const ILivroDAO = require('./ILivroDAO.js');

const Livro = require('../models/livros');


class LivroDAO_Mongoose extends ILivroDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://belyaraujo:12345@cluster0.lgpwa4g.mongodb.net/?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const livros =  await Livro.create(req.body);
          return livros;
     }  
     async recovery(){ 
          let livros = await Livro.find();
          return livros; 
         }
     async update(req){
       let livros = await Livro.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return livros;
       
     }
     async delete(req){
        let livros = await    Livro.findByIdAndRemove(req.params.id);
        return livros; 
     } 
  
     async search(req){
        let livros = await Livro.find(
          { email : req.query.email}
                                   ); 
       return livros;
       
     } 
     
   
}
module.exports = LivroDAO_Mongoose;