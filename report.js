const express =require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
app.get("/api/:name",async (req, res)=> {
  let name=req.params.name
  const baseURL=`https://uatspringmoney.frappe.cloud/api/resource/Health Check Form Result/${name}`;
  let response= await fetch(baseURL, {
    mode: "cors",
    method:"GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
    },
  })
  response= await response.json();
  res.json(response)
})
app.get("/",async (req, res)=> {
  const baseURL="https://uatspringmoney.frappe.cloud/api/resource/Health Check Form Result";
  let response= await fetch(baseURL, {
      mode: "cors",
      method:"GET",
      headers: {
        "Content-Type":"application/json",
        "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
      },
    })
    response= await response.json();
    res.json(response)
})

app.listen(8080,()=>{
    console.log("server running on 8080");
})