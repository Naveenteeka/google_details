function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // var id_token = googleUser.getAuthResponse().id_token;//Send the ID token to your server
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
    window.open("home.html");
  //your code to be executed after 1 second
}, delayInMilliseconds);
   
    // document.getElementById("name").innerHTML = profile.getName();
    // loginID = profile.getId();
    // document.getElementById("ID").innerHTML = loginID;
    // console.log(loginID);
    function adduser(user){
      let body={
         user
      }
      console.log(body);
      let option={
          method: "post",
          headers:{
              'Content-Type': 'application/json;charset=utf-8'
          },
          body:JSON.stringify(body)
      };
      let addUserRequest = fetch('http://localhost:3000/user',{
         ...option
      })
      addUserRequest.then(res=>res.json()).then(res=>{
          console.log(res);
          return res;
          
      })
     
  }
  
 adduser(profile);
 console.log(adduser);
    // $("#name").text(profile.getName());
    // $("#email").text(profile.getEmail());
    // $("#image").attr('src', profile.getImageUrl());
    // $(".data").css("display", "block");
    // $(".g-signin2").css("display", "none");
  }
  
  // function details(){
    
  // }
  // // function signOut() {
  // //   var auth2 = gapi.auth2.getAuthInstance();
  // //   auth2.signOut().then(function () {
  // //     alert("you have been signed out succesfully");
  // //     $(".g-signin2").css("display", "none");
  // //     $(".data").css("display", "none");
  // //   });
  // }