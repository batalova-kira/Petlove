import{u as t,j as e}from"./index-qnBWPORg.js";import{S as a,H as r,a as o}from"./HeroCard-GYyvLwx3.js";const n="/petlove/images/cat-hero-mob-x1.png",i="/petlove/images/cat-hero-mob-x2.png",c="/petlove/images/cat-hero-tab-x1.png",s="/petlove/images/cat-hero-tab-x2.png",d="/petlove/images/cat-hero-desk-x1.png",p="/petlove/images/cat-hero-desk-x2.png",g=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${n}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${i}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${c}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${s}) no-repeat center center;
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

        background: url(${d}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${p}) no-repeat center center;
            background-size: cover;
        }
    }
`,m="/petlove/images/🐈avatar_cat.png",l="/petlove/images/🐈avatar_cat_x2.png",h=()=>e.jsxs(a,{children:[e.jsxs(r,{children:[e.jsx(g,{}),e.jsx(o,{avatarSrc:m,avatarSrc2x:l,title:"Jack",birthDate:"18.10.2021",description:"Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."})]}),e.jsx("div",{children:"RegisterForm"})]});export{h as default};
