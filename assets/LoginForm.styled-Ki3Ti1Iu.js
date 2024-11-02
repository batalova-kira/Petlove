import{u as t,b as i,j as o,D as r,N as p}from"./index-zYB7A2L3.js";import{I as l}from"./Filter.styled-9YydpYeq.js";const c="/petlove/shape_bcgr_mob1.png",m="/petlove/shape_bcgr_tab1.png",x="/petlove/shape_bcgr_desk1.png",h=t.div`
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${i.medium}) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }

    @media only screen and (min-width: ${i.large}) {
        margin-left: -32px;
        width: 592px;
        height: 654px;
    }
`,g=t.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${c}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: ${i.medium}) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${m}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: ${i.large}) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${x}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,u=t.div`
    display: inline-block;
`,X=({children:e})=>o.jsxs(h,{children:[o.jsx(g,{}),o.jsx(u,{children:e})]}),b="/petlove/images/dog_hero_mob_x1.png",f="/petlove/images/dog_hero_mob_x2.png",w="/petlove/images/dog_hero_tabx1.png",v="/petlove/images/dog_hero_tabx2.png",y="/petlove/images/dog_hero_desk_x1.png",$="/petlove/images/dog_hero_desk_x2.png",A=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: ${i.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${i.large}) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`,D=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${b}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${f}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${i.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${w}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${v}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${i.large}) {
        width: 490px;
        height: 640px;

        position: absolute;
        bottom: 0px;
        left: 45%;
        transform: translateX(-50%);

        background: url(${y}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${$}) no-repeat center center;
            background-size: cover;
        }
    }
`,k=t.div`
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
`,_=t.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,z=t.div`
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
`,j=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,W=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,B=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,H=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,T=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,C=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,I=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,E=({avatarSrc:e,avatarSrc2x:n,title:a,birthDate:d,description:s})=>o.jsxs(k,{children:[o.jsx(_,{children:o.jsx(z,{$avatarSrc:e,$avatarSrc2x:n,alt:"Hero Avatar"})}),o.jsxs(j,{children:[o.jsxs(W,{children:[o.jsx(B,{children:a}),o.jsxs(H,{children:[o.jsx(T,{children:"Birthday: "}),o.jsx(C,{children:d})]})]}),o.jsx(I,{children:s})]})]}),S=t.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${e=>e.color||e.theme.colors.black};

    @media only screen and (min-width: ${i.medium}) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`,M=({text:e,color:n})=>o.jsx(S,{color:n,children:e}),Y=t.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }

    @media only screen and (min-width: 1280px) {
        margin-right: -32px;
        padding: 118px 84px;

        width: 592px;
    }
`,G=t.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${i.medium}) {
        margin-bottom: 32px;

        font-size: 18px;
        line-height: 1.22;
    }
`,N=t.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: ${i.medium}) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,V=t(l)`
    ${({$isinvalid:e})=>e&&r`
            border-color: ${n=>n.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&r`
            border-color: ${n=>n.theme.colors.green};
        `} /* @media only screen and (min-width: ${i.medium}) {
    } */
`,O=t.div`
    position: relative;
    width: 100%;
`,P=t.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,R=t.div`
    position: absolute;
    top: 19px;
    right: 42px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 46px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,q=t.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,J=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,K=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,Q=t.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 30px;
    padding: 12px 0;
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${i.medium}) {
        padding: 16px 0;
        margin-bottom: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,U=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Z=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: ${i.medium}) {
        font-size: 14px;
        line-height: 1.43;
    }
`,ee=t(p)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;export{ee as A,Q as B,J as E,V as F,X as H,O as I,Y as L,A as S,M as T,K as V,N as W,G as a,P as b,q as c,R as d,U as e,Z as f,D as g,E as h};
