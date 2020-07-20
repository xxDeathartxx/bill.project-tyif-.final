const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {billinfo,total}=req.body;
    let billbody=JSON.stringify(billinfo);
    let date=Date.now();
    
    let sql='insert into transactions set ?';
    let body={billinfo:billbody,total:total,date:date};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
             res.status(200).json({msg:'transaction conducted'});
        }
        else
        {
             res.status(401).json({msg:'error ocurred',error:err});
        }
    });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from transactions where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'transcation details deleted'
            });
        }
        else
        {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
        }
    });
});
module.exports=router;