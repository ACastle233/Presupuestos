
function signIn() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    const userAction = async () => {
      
        console.log(user,pass)
      const res = await fetch(`http://localhost:3000/api/usuarios/login`, {
        method: "POST", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({email: user, password: pass})
      });
      const result = await res.json(); //extract JSON from the http response
      console.log(result);
      if(result.token){
        localStorage.setItem("token", result.token)
        window.location.href = "http://localhost:5500/public/index.html";
      }else{
        window.location.href = "http://localhost:5500/public/llogin.html"
      }
    };
    userAction();

}

