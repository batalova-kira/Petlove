import{u as t,j as e}from"./index-8N7OgS2d.js";const i="/petlove/shape_bcgr_mob1.png",r="/petlove/shape_bcgr_tab1.png",a="/petlove/shape_bcgr_desk1.png",d=t.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${o=>o.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }

    @media only screen and (min-width: 1280px) {
        margin-left: -32px;
        width: 590px;
        height: 654px;
    }
`,c=t.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${i}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${r}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${a}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,s=t.div`
    display: inline-block;
`,p=({children:o})=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(s,{children:o})]}),l="/petlove/images/dog_hero_mob_x1.png",x="/petlove/images/dog_hero_mob_x2.png",g="/petlove/images/dog_hero_tabx1.png",h="/petlove/images/dog_hero_tabx2.png",m="/petlove/images/dog_hero_desk_x1.png",u="/petlove/images/dog_hero_desk_x2.png",b=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: 768px) {
        gap: 16px;
    }

    @media only screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`,v=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${l}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${x}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${g}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${h}) no-repeat center center;
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

        background: url(${m}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${u}) no-repeat center center;
            background-size: cover;
        }
    }
`,w="/petlove/images/🐶avatar_dog.png",f="/petlove/images/🐶avatar_dog_x2.png",_=t.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 16px;

        position: absolute;
        bottom: 32px;
        left: 32px;

        width: 294px;
        height: 121px;
        border-radius: 20px;
        background: ${o=>o.theme.colors.secondBackground};
    }

    @media only screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 16px;

        position: absolute;
        bottom: 87px;
        left: 61px;
        z-index: 5;
    }
`,k=t.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${o=>o.theme.colors.lightYellow};
`,y=t.div`
    width: 32px;
    height: 32px;
    background: url(${w}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${f}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,j=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,z=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,$=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${o=>o.theme.colors.yellow};
`,C=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,H=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.lightGrey};
`,B=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.black};
`,W=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.mediumGrey};
`,L=()=>e.jsxs(_,{children:[e.jsx(k,{children:e.jsx(y,{})}),e.jsxs(j,{children:[e.jsxs(z,{children:[e.jsx($,{children:"Rich"}),e.jsxs(C,{children:[e.jsx(H,{children:"Birthday: "}),e.jsx(B,{children:"21.09.2020"})]})]}),e.jsx(W,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),T=t.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${o=>o.color||o.theme.colors.black};
`,X=({text:o,color:n})=>e.jsx(T,{color:n,children:o}),I=t.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${o=>o.theme.colors.secondBackground};
`,D=t.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.black};
`,F=()=>e.jsxs(I,{children:[e.jsx(X,{text:"Log in"}),e.jsx(D,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs("form",{children:[e.jsx("input",{type:"email",placeholder:"Email"}),e.jsx("input",{type:"password",placeholder:"Password"}),e.jsx("button",{type:"submit",children:"Login"})]})]}),R=()=>e.jsxs(b,{children:[e.jsxs(p,{children:[e.jsx(v,{}),e.jsx(L,{})]}),e.jsx(F,{})]});export{R as default};
