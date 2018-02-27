/**
 * ClientsController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
         
        Clients.find({}).exec(function(err, clients){
            if(err){
                res.send(500,{error: 'Database Error'});
            }
        res.view('list',{clients:clients});
        });
        
    },
    add:function(req, res){
        res.view('add');
    },
    create: function(req, res){
        // var first_name = req.body.first_name;
        // var last_name = req.body.last_name;
        // var email = req.body.email;
        // var formData = {first_name:first_name,
        //                 last_name: last_name,
        //                 email:email};
        var data=req.body;
        Clients.create(data, function(err, result){
            console.log("message");
            res.redirect('/clients/list');
        });
    },
    delete: function(req, res){
        Clients.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500,{error: 'Database Error'});
            }
            res.redirect('/clients/list');
        });
    },
    edit: function(req, res){
        var id=req.params.id;
        Clients.findOne({id}, function(err,result){
            console.log(JSON.stringify(result));
            res.view('edit',{'id':id,model:result});
            
        });
        
    },
    update: function(req, res){
        var id = req.params.id;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var email = req.body.email;
        var formData = {first_name:first_name,
                        last_name: last_name,
                        email:email};
        Clients.update({id:id},formData, function(err, result){
            console.log("message");
            res.redirect('/clients/list');
        });
    }
};

