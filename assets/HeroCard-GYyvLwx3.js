import{u as o,j as r}from"./index-qnBWPORg.js";const d="/petlove/shape_bcgr_mob1.png",p="/petlove/shape_bcgr_tab1.png",c="/petlove/shape_bcgr_desk1.png",s=o.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${e=>e.theme.colors.yellow};

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
`,l=o.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${d}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${p}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${c}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,x=o.div`
    display: inline-block;
`,S=({children:e})=>r.jsxs(s,{children:[r.jsx(l,{}),r.jsx(x,{children:e})]}),h="/petlove/images/dog_hero_mob_x1.png",g="/petlove/images/dog_hero_mob_x2.png",m="/petlove/images/dog_hero_tabx1.png",u="/petlove/images/dog_hero_tabx2.png",b="/petlove/images/dog_hero_desk_x1.png",v="/petlove/images/dog_hero_desk_x2.png",W=o.div`
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
`,X=o.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${h}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${g}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${m}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${u}) no-repeat center center;
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

        background: url(${b}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${v}) no-repeat center center;
            background-size: cover;
        }
    }
`,k=o.div`
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
        background: ${e=>e.theme.colors.secondBackground};
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
`,w=o.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,_=o.div`
    width: 32px;
    height: 32px;
    background: url(${e=>e.$avatarSrc}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${e=>e.$avatarSrc2x}) no-repeat center
            center;
        background-size: cover;
        z-index: 20;
    }
`,f=o.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,y=o.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,z=o.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,$=o.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,j=o.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,H=o.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,C=o.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,I=({avatarSrc:e,avatarSrc2x:n,title:t,birthDate:i,description:a})=>r.jsxs(k,{children:[r.jsx(w,{children:r.jsx(_,{$avatarSrc:e,$avatarSrc2x:n,alt:"Hero Avatar"})}),r.jsxs(f,{children:[r.jsxs(y,{children:[r.jsx(z,{children:t}),r.jsxs($,{children:[r.jsx(j,{children:"Birthday: "}),r.jsx(H,{children:i})]})]}),r.jsx(C,{children:a})]})]});export{S as H,X as I,W as S,I as a};
