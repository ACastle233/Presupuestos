const postRequestBack = async (api,body) =>{
    const res = await fetch(`http://localhost:3000/api/${api}`, {
        method: "POST", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(body),
      });
    return res;
}

const putRequestBack = async (api,body) =>{
    const res = await fetch(`http://localhost:3000/api/${api}`, {
        method: "PUT", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(body),
      });
    return res;
}


const getRequestBack = async (api,params) =>{
    let res = await fetch(`http://localhost:3000/api/${api}`);
    let resultaData = await res.json();
    return resultaData;
}

const deleteRequestBack = async (api) => {
    let res = await fetch(`http://localhost:3000/api/${api}`, {
      method: "DELETE", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    });

    const result = await res.json(); //extract JSON from the http response
    return result
}