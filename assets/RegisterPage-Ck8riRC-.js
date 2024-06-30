import{b as u,u as P,r as $,j as a,I as i,c as S}from"./index-BJ0EQHT-.js";import{u as T,T as z,a as C,W as E,I as o,F as c,E as l,V as r,b as m,c as g,d as h,B as F,e as I,f as L,A as V,S as q,H as W,h as X}from"./index.esm-B-mFZkRB.js";const R="/petlove/images/cat-hero-mob-x1.png",B="/petlove/images/cat-hero-mob-x2.png",H="/petlove/images/cat-hero-tab-x1.png",A="/petlove/images/cat-hero-tab-x2.png",D="/petlove/images/cat-hero-desk-x1.png",N="/petlove/images/cat-hero-desk-x2.png",M=u.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${R}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${B}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${H}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${A}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 1280px) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url(${D}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${N}) no-repeat center center;
            background-size: cover;
        }
    }
`,J="/petlove/images/🐈avatar_cat.png",Z="/petlove/images/🐈avatar_cat_x2.png",G=u.div`
    padding: 27px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${p=>p.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 30px 140px;

        width: 704px;
    }
`,K=()=>{const p=P(),[n,w]=$.useState(!1),{register:d,handleSubmit:j,reset:v,watch:b,formState:{errors:e,isValid:s}}=T({mode:"onBlur",defaultValues:{name:"",email:"",password:""}}),f=t=>{const _={name:t.name,email:t.email,password:t.password};p(S(_)),console.log("Name:",t.name),console.log("Email:",t.email),console.log("Password:",t.password),v()},k=t=>{t.preventDefault(),j(f)()},x=()=>{w(!n)},y=b("password","");return a.jsxs(G,{children:[a.jsx(z,{text:"Registration"}),a.jsx(C,{children:"Thank you for your interest in our platform."}),a.jsxs("form",{onSubmit:k,children:[a.jsxs(E,{children:[a.jsxs(o,{children:[a.jsx(c,{type:"text",placeholder:"Name",$isinvalid:e.name,$isvalid:!e.name&&s,...d("name",{required:"This field is required",minLength:{value:3,message:"Name must be at least 3 characters"}})}),(e==null?void 0:e.name)&&a.jsx(l,{children:e==null?void 0:e.name.message}),s&&!(e!=null&&e.name)&&a.jsx(r,{isValid:!0,children:"Name successfully validated!"}),(e==null?void 0:e.name)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.name)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:"email",placeholder:"Email",$isinvalid:e.email,$isvalid:!e.email&&s,...d("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(e==null?void 0:e.email)&&a.jsx(l,{children:e==null?void 0:e.email.message}),s&&!(e!=null&&e.email)&&a.jsx(r,{isValid:!0,children:"Email successfully validated!"}),(e==null?void 0:e.email)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.email)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Password",autoComplete:"off",$isinvalid:e==null?void 0:e.password,$isvalid:!(e!=null&&e.password)&&s,...d("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),a.jsx(g,{onClick:x,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.password)&&a.jsx(l,{children:e==null?void 0:e.password.message}),s&&!(e!=null&&e.password)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.password)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.password)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Confirm password",autoComplete:"off",$isinvalid:e==null?void 0:e.confirmPassword,$isvalid:!(e!=null&&e.confirmPassword)&&s,...d("confirmPassword",{required:"Please confirm your password",validate:t=>t===y||"Passwords do not match"})}),a.jsx(g,{onClick:x,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.confirmPassword)&&a.jsx(l,{children:e==null?void 0:e.confirmPassword.message}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]})]}),a.jsx(F,{type:"submit",id:"loginBtn",children:"Registration"}),a.jsx(I,{children:a.jsxs(L,{children:["Already have an account?"," ",a.jsxs(V,{to:"/login",children:[" ","Login"]})]})})]})]})},U=()=>a.jsxs(q,{children:[a.jsxs(W,{children:[a.jsx(M,{}),a.jsx(X,{avatarSrc:J,avatarSrc2x:Z,title:"Jack",birthDate:"18.10.2021",description:"Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."})]}),a.jsx(K,{})]});export{U as default};
