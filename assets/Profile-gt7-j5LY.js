import{u as t,b as n,a as c,c as l,F as m,r as h,G as p,j as o,I as a,o as u}from"./index-BAldPBw7.js";import{M as g,a as f,e as w}from"./AttentionModal.styled-BnUIAcXw.js";const y=t.div`
    width: 100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${n.medium}) {
    }
`,b=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media only screen and (min-width: ${n.medium}) {
    }
`,j=t.button`
    display: flex;
    flex-direction: row;
    gap: 4px;

    padding: 10px 14px;
    border-radius: 30px;

    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${n.medium}) {
    }
`,$=t.p`
    font-weight: 500;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
`,v=t.div`
    width: 18px;
    height: 18px;

    @media only screen and (min-width: ${n.medium}) {
    }
`,U=t.button`
    display: flex;
    align-items: center;

    padding: 12px;
    border-radius: 50%;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};

    @media only screen and (min-width: ${n.medium}) {
    }
`,k=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 28px;

    @media only screen and (min-width: ${n.medium}) {
    }
`,B=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    width: 94px;
    height: 94px;
    border-radius: 50%;

    background: ${e=>e.theme.colors.lightYellow};

    svg {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: ${n.medium}) {
    }
`,I=t.button`
    font-weight: 500;
    font-size: 12px;

    line-height: 1.33;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.black};
    background: none;
    @media only screen and (min-width: ${n.medium}) {
    }
`,M=t.h3`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;

    color: ${e=>e.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${n.medium}) {
    }
`,C=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 40px;
    @media only screen and (min-width: ${n.medium}) {
    }
`,d=t.input`
    width: 100%;

    border: 1px solid ${e=>e.theme.colors.lightestGrey};
    border-radius: 30px;
    padding: 12px;

    font-weight: 500;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    &:focus,
    &:hover {
        outline: none;
        border: 1px solid ${e=>e.theme.colors.yellow};
    }
    @media only screen and (min-width: ${n.medium}) {
    }
`,E=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
    @media only screen and (min-width: ${n.medium}) {
    }
`,z=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;

    line-height: 1.25;
    color: ${e=>e.theme.colors.secondaryBlack};
`,A=t.button`
    display: flex;
    gap: 4px;

    border-radius: 30px;
    padding: 10px 16px;

    font-size: 16px;
    line-height: 1.29;
    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    &:focus,
    &:hover {
        background: ${e=>e.theme.colors.secondaryHoverYellow};
    }
`,W=t.button`
    border-radius: 30px;
    padding: 12px 28px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};

    &:focus,
    &:hover {
        background: ${e=>e.theme.colors.hoverYellow};
    }
`,O=t.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;

    background: ${e=>e.theme.colors.lightYellow};

    svg {
        width: 40px;
        height: 40px;
    }

    @media only screen and (min-width: ${n.medium}) {
    }
`,Y=({isOpen:e,modalId:r})=>{const i=c(),s=l(m);return h.useEffect(()=>{i(p())},[i]),o.jsxs(g,{navigateTo:"/profile",isOpen:e,$styles:f,modalId:r,children:[o.jsx("h2",{children:"Edit information"}),s.avatar?o.jsx("img",{src:s.avatar,alt:"User Avatar"}):o.jsx(O,{children:o.jsx(a,{name:"user-avatar-profile"})})]})},P=()=>{const e=c(),r=l(m),i=l(x=>w(x,"editUserModal"));h.useEffect(()=>{e(p())},[e]);const s=()=>{console.log("User Data:",r),e(u("editUserModal"))};return o.jsxs(y,{children:[o.jsxs(b,{children:[o.jsxs(j,{children:[o.jsx($,{children:"User"}),o.jsx(v,{children:o.jsx(a,{height:18,width:18,name:"user-card"})})]}),o.jsx(U,{onClick:()=>s(),children:o.jsx(a,{height:18,width:18,name:"edit-card"})})]}),o.jsxs(k,{children:[r.avatar?o.jsx("img",{src:r.avatar,alt:"User Avatar"}):o.jsx(B,{children:o.jsx(a,{name:"user-avatar-profile"})}),r.avatar?"none":o.jsx(I,{onClick:()=>s(),children:"Upload photo"})]}),o.jsxs("div",{children:[o.jsx(M,{children:"My information"}),o.jsxs(C,{children:[o.jsx(d,{value:` ${r.name||"Name"}`,readOnly:!0}),o.jsx(d,{value:`${r.email||"name@gmail.com"}`,readOnly:!0}),o.jsx(d,{value:` ${r.phone||"+380"}`,readOnly:!0})]})]}),o.jsxs(E,{children:[o.jsx(z,{children:"My pets"}),o.jsxs(A,{children:["Add pet ",o.jsx(a,{name:"plus",height:18,width:18})]})]}),o.jsx(W,{children:"Log out"}),i&&o.jsx(Y,{isOpen:i,modalId:"editUserModal"})]})},F=()=>o.jsx(o.Fragment,{children:o.jsx(P,{})});export{F as default};
