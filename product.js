Pdel=(id)=>{
    const url='/product/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('DELETE',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           console.log(result);
           window.location.reload();   
        
    
        } 
    }
    xhr.send();
}

 
    Pedit=(id)=>{
        const url='/product/'+id;
        const xhr=new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onload=()=>{
            if(xhr.readStatus==4||xhr.status==200)
            {
               const result=JSON.parse(xhr.responseText);
    
              document.getElementById('updatePid').value=result.product.id;
             document.getElementById('updatePname').value=result.product.name;
             document.getElementById('updatePcost').value=result.product.cost;
             document.getElementById('updatePtype').value=result.product.type;
                } 
        }
        xhr.send();
    }
   
    updateproduct=(e)=>{
        e.preventDefault();
        const id=document.getElementById('updatePid').value;
        const name=document.getElementById('updatePname').value;
        const cost=document.getElementById('updatePcost').value;
        const type=document.getElementById('updatePtype').value;
        const data={name:name,cost:cost,type:type};
        const paramters=JSON.stringify(data);
        let url='/product/'+id;
        let xhr=new XMLHttpRequest();
        console.log(paramters);
        xhr.open('PUT',url,true);
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload=function(){
            if(xhr.readyState==4||xhr.status==200)
            {
                window.location.reload();
            }
            else
            {
                
            }
        }
        xhr.send(paramters);
    }
    let update_product_form=document.getElementById('update-product');
    update_product_form.addEventListener('submit',updateproduct);