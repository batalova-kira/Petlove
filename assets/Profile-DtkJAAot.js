import{u as t,b as o,a,c as l,F as c,r as m,G as h,j as n,I as r}from"./index-CEWetdqZ.js";const p=t.div`
    width: 100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${o.medium}) {
    }
`,x=t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media only screen and (min-width: ${o.medium}) {
    }
`,u=t.button`
    display: flex;
    flex-direction: row;
    gap: 4px;

    padding: 10px 14px;
    border-radius: 30px;

    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${o.medium}) {
    }
`,g=t.p`
    font-weight: 500;
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
`,f=t.div`
    width: 18px;
    height: 18px;

    @media only screen and (min-width: ${o.medium}) {
    }
`,w=t.button`
    display: flex;
    align-items: center;

    padding: 12px;
    border-radius: 50%;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};

    @media only screen and (min-width: ${o.medium}) {
    }
`,y=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 28px;

    @media only screen and (min-width: ${o.medium}) {
    }
`,b=t.div`
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

    @media only screen and (min-width: ${o.medium}) {
    }
`,j=t.button`
    font-weight: 500;
    font-size: 12px;

    line-height: 1.33;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.black};
    background: none;
    @media only screen and (min-width: ${o.medium}) {
    }
`,$=t.h3`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;

    color: ${e=>e.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${o.medium}) {
    }
`,k=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 40px;
    @media only screen and (min-width: ${o.medium}) {
    }
`,s=t.input`
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
    @media only screen and (min-width: ${o.medium}) {
    }
`,U=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
    @media only screen and (min-width: ${o.medium}) {
    }
`,v=t.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;

    line-height: 1.25;
    color: ${e=>e.theme.colors.secondaryBlack};
`,B=t.button`
    display: flex;
    gap: 4px;

    border-radius: 30px;
    padding: 10px 16px;

    font-size: 16px;
    line-height: 1.29;
    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};
`,I=t.button`
    border-radius: 30px;
    padding: 12px 28px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};
`,C=()=>{const e=a(),i=l(c);m.useEffect(()=>{e(h())},[e]);const d=()=>{console.log("User Data:",i)};return n.jsxs(p,{children:[n.jsxs(x,{children:[n.jsxs(u,{children:[n.jsx(g,{children:"User"}),n.jsx(f,{children:n.jsx(r,{height:18,width:18,name:"user-card"})})]}),n.jsx(w,{children:n.jsx(r,{height:18,width:18,name:"edit-card"})})]}),n.jsxs(y,{children:[i.avatar?n.jsx("img",{src:i.avatar,alt:"User Avatar"}):n.jsx(b,{children:n.jsx(r,{name:"user-avatar-profile"})}),i.avatar?"none":n.jsx(j,{onClick:d,children:"Upload photo"})]}),n.jsxs("div",{children:[n.jsx($,{children:"My information"}),n.jsxs(k,{children:[n.jsx(s,{value:` ${i.name||"Name"}`,readOnly:!0}),n.jsx(s,{value:`${i.email||"name@gmail.com"}`,readOnly:!0}),n.jsx(s,{value:` ${i.phone||"+380"}`,readOnly:!0})]})]}),n.jsxs(U,{children:[n.jsx(v,{children:"My pets"}),n.jsxs(B,{children:["Add pet ",n.jsx(r,{name:"plus",height:18,width:18})]})]}),n.jsx(I,{children:"Log out"})]})},E=()=>n.jsx(n.Fragment,{children:n.jsx(C,{})});export{E as default};
