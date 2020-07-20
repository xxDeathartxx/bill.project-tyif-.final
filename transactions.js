transactiondel=(id)=>{
    const url='/transactions/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('DELETE',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
        
           window.location.reload();   
        
          
        } 
    }
    xhr.send();


}