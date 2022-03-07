let getPosts=()=>{
    let options ={
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
    let postRequest=fetch(`http://localhost:3000/user`,{
        ...options
    });
    postRequest.then(res=>res.json()).then(res=>{
        console.log(res.length);
        console.log(res);
        console.log(res.user);
        console.log(res.user.FW);
        console.log(res.user.tv);
            // console.log(document.getElementById("ID"));
            document.getElementById("ID").innerHTML = res.user.FW;
            // console.log(document.getElementById("name"));
            console.log(res.user.tf)
            document.getElementById("name").innerHTML = res.user.tf;
           
            document.getElementById("userdetails").innerHTML = res.user;
        
        
        
    }).catch(err=>{
        console.log(err);
    })
    
}
getPosts();