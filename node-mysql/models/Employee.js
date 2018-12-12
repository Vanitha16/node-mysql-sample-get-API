var db=require('../dbconnection');

var Emp={

getAllEmp:((callback)=>{

return db.query("Select * from employee",callback);

}),

addEmp:((callback)=>{
    const schema = {
       
        name: req.body.name,
        password: req.body.password
    }
    connection.query('insert into emp set?', schema1, (err, rows) => {
        if (!err) {
            //console.log("query sucess");
            res.send(rows);
        }

        else {
            console.log(err);
        }

    })
})

};
module.exports=Emp;

