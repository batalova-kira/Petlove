import{u as w,b as p,a as $,r as S,j as a,I as i,x as T}from"./index-B2-9WcrK.js";import{u as z,T as C,S as E,H as F,a as I}from"./index.esm-LlA6uX5C.js";import{a as L,W as V,I as o,F as c,E as l,V as r,b as m,c as u,d as h,B as q,e as W,T as X,A as R}from"./LoginForm.styled-C5nAbgmT.js";const B="/petlove/images/cat-hero-mob-x1.png",H="/petlove/images/cat-hero-mob-x2.png",A="/petlove/images/cat-hero-tab-x1.png",D="/petlove/images/cat-hero-tab-x2.png",N="/petlove/images/cat-hero-desk-x1.png",M="/petlove/images/cat-hero-desk-x2.png",J=w.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${B}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${H}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${p.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${A}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${D}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${p.large}) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url(${N}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${M}) no-repeat center center;
            background-size: cover;
        }
    }
`,Z="/petlove/images/🐈avatar_cat.png",G="/petlove/images/🐈avatar_cat_x2.png",K=w.div`
    padding: 27px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${x=>x.theme.colors.secondBackground};

    @media only screen and (min-width: ${p.medium}) {
        padding: 30px 140px;

        width: 704px;
    }

    @media only screen and (min-width: ${p.large}) {
        margin-right: -32px;
        padding: 77px 84px;

        width: 592px;
    }
`,O=()=>{const x=$(),[n,j]=S.useState(!1),{register:d,handleSubmit:v,reset:b,watch:f,formState:{errors:e,isValid:s}}=z({mode:"onBlur",defaultValues:{name:"",email:"",password:""}}),k=t=>{const P={name:t.name,email:t.email,password:t.password};x(T(P)),console.log("Name:",t.name),console.log("Email:",t.email),console.log("Password:",t.password),b()},y=t=>{t.preventDefault(),v(k)()},g=()=>{j(!n)},_=f("password","");return a.jsxs(K,{children:[a.jsx(C,{text:"Registration"}),a.jsx(L,{children:"Thank you for your interest in our platform."}),a.jsxs("form",{onSubmit:y,children:[a.jsxs(V,{children:[a.jsxs(o,{children:[a.jsx(c,{type:"text",placeholder:"Name",$isinvalid:e.name,$isvalid:!e.name&&s,...d("name",{required:"This field is required",minLength:{value:3,message:"Name must be at least 3 characters"}})}),(e==null?void 0:e.name)&&a.jsx(l,{children:e==null?void 0:e.name.message}),s&&!(e!=null&&e.name)&&a.jsx(r,{isValid:!0,children:"Name successfully validated!"}),(e==null?void 0:e.name)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.name)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:"email",placeholder:"Email",$isinvalid:e.email,$isvalid:!e.email&&s,...d("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(e==null?void 0:e.email)&&a.jsx(l,{children:e==null?void 0:e.email.message}),s&&!(e!=null&&e.email)&&a.jsx(r,{isValid:!0,children:"Email successfully validated!"}),(e==null?void 0:e.email)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.email)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Password",autoComplete:"off",$isinvalid:e==null?void 0:e.password,$isvalid:!(e!=null&&e.password)&&s,...d("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),a.jsx(u,{onClick:g,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.password)&&a.jsx(l,{children:e==null?void 0:e.password.message}),s&&!(e!=null&&e.password)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.password)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.password)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Confirm password",autoComplete:"off",$isinvalid:e==null?void 0:e.confirmPassword,$isvalid:!(e!=null&&e.confirmPassword)&&s,...d("confirmPassword",{required:"Please confirm your password",validate:t=>t===_||"Passwords do not match"})}),a.jsx(u,{onClick:g,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.confirmPassword)&&a.jsx(l,{children:e==null?void 0:e.confirmPassword.message}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]})]}),a.jsx(q,{type:"submit",id:"loginBtn",children:"Registration"}),a.jsx(W,{children:a.jsxs(X,{children:["Already have an account?"," ",a.jsxs(R,{to:"/login",children:[" ","Login"]})]})})]})]})},ee=()=>a.jsxs(E,{children:[a.jsxs(F,{children:[a.jsx(J,{}),a.jsx(I,{avatarSrc:Z,avatarSrc2x:G,title:"Jack",birthDate:"18.10.2021",description:"Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."})]}),a.jsx(O,{})]});export{ee as default};
