import{u as t,b as i,j as o,D as r,N as p}from"./index-n2kt2n7z.js";import{I as l}from"./Filter.styled-DJE7rOvx.js";const c="/petlove/images/dog_hero_mob_x1.png",m="/petlove/images/dog_hero_mob_x2.png",x="/petlove/images/dog_hero_tabx1.png",g="/petlove/images/dog_hero_tabx2.png",h="/petlove/images/dog_hero_desk_x1.png",u="/petlove/images/dog_hero_desk_x2.png",H=t.div`
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
`,B=t.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${c}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${m}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${i.medium}) {
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

    @media only screen and (min-width: ${i.large}) {
        width: 490px;
        height: 640px;

        position: absolute;
        bottom: 0px;
        left: 45%;
        transform: translateX(-50%);

        background: url(${h}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${u}) no-repeat center center;
            background-size: cover;
        }
    }
`,b=t.div`
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
`,f=t.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,w=t.div`
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
`,v=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,y=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,$=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,k=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,_=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,z=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,j=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,I=({avatarSrc:e,avatarSrc2x:n,title:a,birthDate:d,description:s})=>o.jsxs(b,{children:[o.jsx(f,{children:o.jsx(w,{$avatarSrc:e,$avatarSrc2x:n,alt:"Hero Avatar"})}),o.jsxs(v,{children:[o.jsxs(y,{children:[o.jsx($,{children:a}),o.jsxs(k,{children:[o.jsx(_,{children:"Birthday: "}),o.jsx(z,{children:d})]})]}),o.jsx(j,{children:s})]})]}),W=t.h1`
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
`,F=({text:e,color:n})=>o.jsx(W,{color:n,children:e}),L=t.div`
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
`,S=t.div`
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
`,X=t.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: ${i.medium}) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,A=t(l)`
    ${({$isinvalid:e})=>e&&r`
            border-color: ${n=>n.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&r`
            border-color: ${n=>n.theme.colors.green};
        `} /* @media only screen and (min-width: ${i.medium}) {
    } */
`,E=t.div`
    position: relative;
    width: 100%;
`,M=t.div`
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
`,Y=t.div`
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
`,D=t.div`
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
`,G=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,N=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,V=t.button`
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
`,P=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,R=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: ${i.medium}) {
        font-size: 14px;
        line-height: 1.43;
    }
`,q=t(p)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;export{q as A,V as B,G as E,A as F,I as H,E as I,L,H as S,F as T,N as V,X as W,S as a,M as b,D as c,Y as d,P as e,R as f,B as g};
