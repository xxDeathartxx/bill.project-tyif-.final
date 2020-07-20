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
tedit=(id)=>{
    const url='/type/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           

          document.getElementById('updateTid').value=result.type.id;
         document.getElementById('updateTname').value=result.type.name;
         
        }
 
    }
    xhr.send()
}
