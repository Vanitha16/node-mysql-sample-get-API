var express = require('express');
var router = express.Router();
var Emp=require('../models/Employee');

router.get('/empdata',function(req,res,next){



    Emp.getAllEmp(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });

});

 


module.exports=router;