delType=(id)=>{
    const url='/type/'+id;
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

updatetype=(e)=>{
    e.preventDefault();
    const id=document.getElementById('updateTid').value;
    const name=document.getElementById('updateTname').value;
    const data={name:name};
    const paramters=JSON.stringify(data);
    let url='/type/'+id;
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
            console.log(this.responseText);
        }
    }
    xhr.send(paramters);
}
let update_type_form=document.getElementById('update-type');
update_type_form.addEventListener('submit',updatetype);
