import{a as y,r as S,j as a,I as i,l as b}from"./index-BrvqWY58.js";import{u as I,S as L,H as F,I as T,a as E}from"./index.esm-CCcJx3Nc.js";import{L as P,T as W,a as k,W as _,I as o,F as d,E as c,V as h,b as r,c as C,d as m,B as D,e as V,f as $,A as q}from"./Title-BkU8A1As.js";const B=()=>{const p=y(),[n,x]=S.useState(!1),{register:l,handleSubmit:g,reset:u,formState:{errors:e,isValid:s}}=I({mode:"onBlur",defaultValues:{email:"",password:""}}),j=t=>{const f={email:t.email,password:t.password};p(b(f)),u()},w=t=>{t.preventDefault(),g(j)()},v=()=>{x(!n)};return a.jsxs(P,{children:[a.jsx(W,{text:"Log in"}),a.jsx(k,{children:"Welcome! Please enter your credentials to login to the platform:"}),a.jsxs("form",{onSubmit:w,children:[a.jsxs(_,{children:[a.jsxs(o,{children:[a.jsx(d,{type:"email",placeholder:"Email",$isinvalid:e.email,$isvalid:!e.email&&s,...l("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(e==null?void 0:e.email)&&a.jsx(c,{children:e==null?void 0:e.email.message}),s&&!(e!=null&&e.email)&&a.jsx(h,{isValid:!0,children:"Email successfully validated!"}),(e==null?void 0:e.email)&&a.jsx(r,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.email)&&a.jsx(r,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(d,{type:n?"text":"password",placeholder:"Password",autoComplete:"off",$isinvalid:e==null?void 0:e.password,$isvalid:!(e!=null&&e.password)&&s,...l("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),a.jsx(C,{onClick:v,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.password)&&a.jsx(c,{children:e==null?void 0:e.password.message}),s&&!(e!=null&&e.password)&&a.jsx(h,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.password)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.password)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]})]}),a.jsx(D,{type:"submit",id:"loginBtn",children:"Log in"}),a.jsx(V,{children:a.jsxs($,{children:["Don’t have an account?"," ",a.jsxs(q,{to:"/registration",children:[" ","Register"]})]})})]})]})},M="/petlove/images/🐶avatar_dog.png",R="/petlove/images/🐶avatar_dog_x2.png",Z=()=>a.jsxs(L,{children:[a.jsxs(F,{children:[a.jsx(T,{}),a.jsx(E,{avatarSrc:M,avatarSrc2x:R,title:"Rich",birthDate:"21.09.2020",description:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]}),a.jsx(B,{})]});export{Z as default};
