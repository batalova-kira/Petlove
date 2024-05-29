import{u as t,j as e}from"./index-DKkfWKns.js";const n="/petlove/shape_bcgr_mob1.png",r="/petlove/shape_bcgr_tab1.png",i="/petlove/shape_bcgr_desk1.png",a=t.div`
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
`,d=t.div`
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

        background: url(${i}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,c=t.div`
    display: inline-block;
`,p=({children:o})=>e.jsxs(a,{children:[e.jsx(d,{}),e.jsx(c,{children:o})]}),s="/petlove/images/dog_hero_mob_x1.png",l="/petlove/images/dog_hero_mob_x2.png",x="/petlove/images/dog_hero_tabx1.png",g="/petlove/images/dog_hero_tabx2.png",h="/petlove/images/dog_hero_desk_x1.png",m="/petlove/images/dog_hero_desk_x2.png",u=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${s}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${l}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${x}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${g}) no-repeat center center;
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

        background: url(${h}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${m}) no-repeat center center;
            background-size: cover;
        }
    }
`,b="/petlove/images/🐶avatar_dog.png",v="/petlove/images/🐶avatar_dog_x2.png",_=t.div`
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
`,w=t.div`
    width: 32px;
    height: 32px;
    background: url(${b}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${v}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,f=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,y=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,z=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${o=>o.theme.colors.yellow};
`,j=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,$=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.lightGrey};
`,H=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.black};
`,B=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${o=>o.theme.colors.mediumGrey};
`,C=()=>e.jsxs(_,{children:[e.jsx(k,{children:e.jsx(w,{})}),e.jsxs(f,{children:[e.jsxs(y,{children:[e.jsx(z,{children:"Rich"}),e.jsxs(j,{children:[e.jsx($,{children:"Birthday: "}),e.jsx(H,{children:"21.09.2020"})]})]}),e.jsx(B,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),X=()=>e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx(u,{}),e.jsx(C,{})]})});export{X as default};
