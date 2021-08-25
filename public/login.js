async function signIn() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  try {
      validarMail(user);
      console.log(user, pass);
      let body = {
        email: user, password: pass
      }
      const res = await postRequestBack('usuarios/login', body)
      
      const result = await res.json(); //extract JSON from the http response
      console.log(result);
      alert('HI')
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("usuario", JSON.stringify(result.usuario));
        window.location.href = "http://localhost:5500/public/index.html";
      } else {
        window.location.reload();
      }
  } catch (err) {
    console.log(err);
    alert(`Error: ${err.message}`);
  }
}
