import{u as t,j as e}from"./index-CT3jh8dM.js";const r="/petlove/shape_bcgr_mob1.png",n="/petlove/shape_bcgr_tab1.png",i=t.div`
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
`,a=t.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${r}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${n}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,d=t.div`
    display: inline-block;
`,c=({children:o})=>e.jsxs(i,{children:[e.jsx(a,{}),e.jsx(d,{children:o})]}),s="/petlove/images/dog_hero_mob_x1.png",p="/petlove/images/dog_hero_mob_x2.png",l="/petlove/images/dog_hero_tabx1.png",h="/petlove/images/dog_hero_tabx2.png",g=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${s}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${p}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${l}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${h}) no-repeat center center;
            background-size: cover;
        }
    }
`,x="/petlove/images/🐶avatar_dog.png",m="/petlove/images/🐶avatar_dog_x2.png",u=t.div`
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
`,b=t.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${o=>o.theme.colors.lightYellow};
`,v=t.div`
    width: 32px;
    height: 32px;
    background: url(${x}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${m}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,w=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,_=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,f=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${o=>o.theme.colors.yellow};
`,k=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,y=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.lightGrey};
`,j=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.black};
`,z=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.mediumGrey};
`,$=()=>e.jsxs(u,{children:[e.jsx(b,{children:e.jsx(v,{})}),e.jsxs(w,{children:[e.jsxs(_,{children:[e.jsx(f,{children:"Rich"}),e.jsxs(k,{children:[e.jsx(y,{children:"Birthday: "}),e.jsx(j,{children:"21.09.2020"})]})]}),e.jsx(z,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),C=()=>e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(g,{}),e.jsx($,{})]})});export{C as default};
