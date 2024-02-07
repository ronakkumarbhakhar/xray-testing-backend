const express =require('express');
const cors=require('cors');
const app=express();
const UserAgent = require('user-agents');  

app.use(express.json());
app.use(cors());

app.get("/test",async (req, res)=> {
  const userAgent = new UserAgent(); 
  console.log(userAgent.toString());
  console.log(req.headers['x-forwarded-for']);
  res.json({data:req.socket.remoteAddress})
})

app.post("/incometax",async (req, res)=> {
  let url=req.body.url;
  const baseURL=url;
  let response= await fetch(baseURL, {
    mode: "cors",
    method:"GET",
    headers: {
      "Content-Type":"application/json",
      "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
    },
  })
  response= await response.json();
  const userAgent = new UserAgent(); 
  console.log(userAgent.toString());
  res.json(response)
})

app.post("/userdeletion",async (req, res)=> {
  let url=req.body.url;
  const baseURL=url;
  let response= await fetch(baseURL, {
    mode: "cors",
    method:"POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
    },
    body:JSON.stringify(req.body.data),
  })
  response= await response.json();
  res.json(response)
})

app.post("/userdeletion/verify",async (req, res)=> {
  let url=req.body.url
  const baseURL=url;
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

app.post("/userdeletion/otp/mobile",async (req, res)=> {
  let url=req.body.url;
  const baseURL=url;
  let response= await fetch(baseURL, {
    mode: "cors",
    method:"POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
    },
  })
  response= await response.json();
  res.json(response)
})

app.post("/userdeletion/otp/email",async (req, res)=> {
  let url=req.body.url;
  const baseURL=url;
  let response= await fetch(baseURL, {
    mode: "cors",
    method:"POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization":"token c94aaa32165ea3e:ee2011e98c07351"
    },
    body:JSON.stringify(req.body.data),
  })
  response= await response.json();
  res.json(response)
})

// xray server
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
  let baseURL='https://uatspringmoney.frappe.cloud/api/resource/Health Check Form Result';
  // let baseURL='https://uatspringmoney.frappe.cloud/api/resource/Health Check Form Result?fields=["name","user_name","user_email_id","phone_number", "total_score","total_progress","health_check_user", "health_check_lead_profile"]&order_by=creation desc&limit_page_length=100';
  baseURL=new URL(baseURL)
  let obj={fields:'["name","user_name","user_email_id","phone_number", "total_score","total_progress","health_check_user", "health_check_lead_profile"]',limit_page_length:100,order_by:'creation desc'}
  baseURL.search = new URLSearchParams(obj);
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