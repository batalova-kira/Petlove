import{u as o,j as e}from"./index-DcullOVS.js";const n="/petlove/shape_bcgr_mob1.png",t="/petlove/shape_bcgr_tab1.png",i=o.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${r=>r.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }
`,a=o.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${n}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${t}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,d=o.div`
    display: inline-block;
`,c=({children:r})=>e.jsxs(i,{children:[e.jsx(a,{}),e.jsx(d,{children:r})]}),p="/petlove/images/dog_hero_mob_x1.png",s="/petlove/images/dog_hero_mob_x2.png",g="/petlove/images/dog_hero_tabx1.png",x="/petlove/images/dog_hero_tabx2.png",l=o.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${p}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${s}) no-repeat center center;
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
            background: url(${x}) no-repeat center center;
            background-size: cover;
        }
    }
`,h="/petlove/images/🐶avatar_dog.png",u="/petlove/images/🐶avatar_dog_x2.png",b=o.div`
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
        background: ${r=>r.theme.colors.secondBackground};
    }
`,m=o.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${r=>r.theme.colors.lightYellow};
`,v=o.div`
    width: 32px;
    height: 32px;
    background: url(${h}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${u}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`;o.div`
    
`;const _=()=>e.jsxs(b,{children:[e.jsx(m,{children:e.jsx(v,{})}),e.jsx(WrapperCardDesc,{children:e.jsx("div",{})})]}),w=()=>e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(l,{}),e.jsx(_,{})]})});export{w as default};
