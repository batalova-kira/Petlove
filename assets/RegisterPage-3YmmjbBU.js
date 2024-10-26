import{u as w,b as p,a as S,g as T,r as z,j as a,I as i,D as C}from"./index-DuKwjm90.js";import{u as E,T as F,a as I,W as L,I as o,F as c,E as l,V as r,b as m,c as u,d as h,B as q,e as V,f as W,A as X,S as R,H as B,h as D}from"./index.esm-Dz-m7ijP.js";import"./Filter.styled-BlRYm0du.js";const H="/petlove/images/cat-hero-mob-x1.png",N="/petlove/images/cat-hero-mob-x2.png",A="/petlove/images/cat-hero-tab-x1.png",M="/petlove/images/cat-hero-tab-x2.png",J="/petlove/images/cat-hero-desk-x1.png",Z="/petlove/images/cat-hero-desk-x2.png",G=w.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${H}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${N}) no-repeat center center;
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
            background: url(${M}) no-repeat center center;
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

        background: url(${J}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Z}) no-repeat center center;
            background-size: cover;
        }
    }
`,K="/petlove/images/🐈avatar_cat.png",O="/petlove/images/🐈avatar_cat_x2.png",Q=w.div`
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
`,U=()=>{const x=S(),j=T(),[n,v]=z.useState(!1),{register:d,handleSubmit:b,reset:f,watch:k,formState:{errors:e,isvalid:s}}=E({mode:"onBlur",defaultValues:{name:"",email:"",password:""}}),y=t=>{const $={name:t.name,email:t.email,password:t.password};x(C($)),console.log("Name:",t.name),console.log("Email:",t.email),console.log("Password:",t.password),f()},_=t=>{t.preventDefault(),b(y)(),j("/profile")},g=()=>{v(!n)},P=k("password","");return a.jsxs(Q,{children:[a.jsx(F,{text:"Registration"}),a.jsx(I,{children:"Thank you for your interest in our platform."}),a.jsxs("form",{onSubmit:_,children:[a.jsxs(L,{children:[a.jsxs(o,{children:[a.jsx(c,{type:"text",placeholder:"Name",$isinvalid:e.name,$isvalid:!e.name&&s,...d("name",{required:"This field is required",minLength:{value:3,message:"Name must be at least 3 characters"}})}),(e==null?void 0:e.name)&&a.jsx(l,{children:e==null?void 0:e.name.message}),s&&!(e!=null&&e.name)&&a.jsx(r,{isValid:!0,children:"Name successfully validated!"}),(e==null?void 0:e.name)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.name)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:"email",placeholder:"Email",$isinvalid:e.email,$isvalid:!e.email&&s,...d("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(e==null?void 0:e.email)&&a.jsx(l,{children:e==null?void 0:e.email.message}),s&&!(e!=null&&e.email)&&a.jsx(r,{isValid:!0,children:"Email successfully validated!"}),(e==null?void 0:e.email)&&a.jsx(m,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.email)&&a.jsx(m,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Password",autoComplete:"off",$isinvalid:e==null?void 0:e.password,$isvalid:!(e!=null&&e.password)&&s,...d("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),a.jsx(u,{onClick:g,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.password)&&a.jsx(l,{children:e==null?void 0:e.password.message}),s&&!(e!=null&&e.password)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.password)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.password)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]}),a.jsxs(o,{children:[a.jsx(c,{type:n?"text":"password",placeholder:"Confirm password",autoComplete:"off",$isinvalid:e==null?void 0:e.confirmPassword,$isvalid:!(e!=null&&e.confirmPassword)&&s,...d("confirmPassword",{required:"Please confirm your password",validate:t=>t===P||"Passwords do not match"})}),a.jsx(u,{onClick:g,children:n?a.jsx(i,{name:"open-eye",width:18,height:18}):a.jsx(i,{name:"close-eye",width:18,height:18})}),(e==null?void 0:e.confirmPassword)&&a.jsx(l,{children:e==null?void 0:e.confirmPassword.message}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(r,{isValid:!0,children:"Password is secure"}),(e==null?void 0:e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"red-false",width:18,height:18})}),s&&!(e!=null&&e.confirmPassword)&&a.jsx(h,{children:a.jsx(i,{name:"green-success",width:18,height:18})})]})]}),a.jsx(q,{type:"submit",id:"loginBtn",children:"Registration"}),a.jsx(V,{children:a.jsxs(W,{children:["Already have an account?"," ",a.jsxs(X,{to:"/login",children:[" ","Login"]})]})})]})]})},se=()=>a.jsxs(R,{children:[a.jsxs(B,{children:[a.jsx(G,{}),a.jsx(D,{avatarSrc:K,avatarSrc2x:O,title:"Jack",birthDate:"18.10.2021",description:"Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."})]}),a.jsx(U,{})]});export{se as default};
