import{u as n,j as e}from"./index-B41R5OhF.js";const i="/petlove/images/bgr_home_mob_x1.webp",r="/petlove/images/bgr_home_mob_x2.webp",t="/petlove/images/bgr_home_tab_x1.webp",a="/petlove/images/bgr_home_tab_x2.webp",d=n.div`
    padding: 50px 20px;
    padding-top: 118px;
    margin-top: -70px;
    border-radius: 30px;
    width: 100%;
    background: ${o=>o.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        margin-top: -100px;
        padding: 44px 32px;
        padding-top: 178px;

        border-radius: 60px;
    }
`,c=n.h2`
    margin-bottom: 24px;

    font-weight: var(--font-weight-bold);
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: ${o=>o.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        margin-bottom: 32px;

        font-size: 80px;
    }
`,p=n.span`
    color: ${o=>o.theme.colors.accentWhite};
`,m=n.p`
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media only screen and (min-width: 768px) {
        max-width: 255px;
        margin-left: auto;
        font-size: 18px;
        line-height: 1.22;
    }
`,s=n.div`
    width: 335px;
    height: 402px;
    border-radius: 30px;

    /* background: url(${t}) no-repeat center center; */
    background-size: contain;

    @media (max-width: 767px) {
        background: url(${i}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${r}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        border-radius: 60px;
        width: 704px;
        height: 496px;

        background: url(${t}) no-repeat center center;
        background-size: cover;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${a}) no-repeat center center;
            background-size: cover;
        }
    }
    /* 
    @media only screen and (min-width: 1280px) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url() no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url() no-repeat center center;
            background-size: cover;
        } */
    /* } */
`,l=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsxs(c,{children:["Take good ",e.jsx(p,{children:"care"})," of your small pets"]}),e.jsx(m,{children:"Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness."})]}),e.jsx(s,{})]});export{l as default};
