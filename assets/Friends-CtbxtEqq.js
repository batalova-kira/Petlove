import{u as r,b as n,j as e,a as w,c as u,r as f,e as b}from"./index-Diq7soD4.js";import{a as y}from"./HomePage.styled-Cqj-wl0V.js";const j=r.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: ${n.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }

    @media only screen and (min-width: ${n.large}) {
        row-gap: 28px;
        column-gap: 20px;
    }
`,$=r(y)`
    margin-bottom: 40px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${i=>i.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 44px;

        font-size: 54px;
    }

    @media only screen and (min-width: ${n.large}) {
        margin-bottom: 60px;

        /* font-size: 90px; */
    }
`,k=i=>i.friends.friends,F=r.li`
    position: relative;
    max-width: 335px;
    width: 100%;
    padding: 40px 20px;

    border-radius: 15px;
    background: ${i=>i.theme.colors.secondBackground};

    @media only screen and (min-width: ${n.medium}) {
        max-width: 342px;
    }

    @media only screen and (min-width: ${n.large}) {
        max-width: 370px;
    }
`,v=r.div`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;

    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;

    border-radius: 30px;
    color: ${i=>i.theme.colors.yellow};
    background: ${i=>i.theme.colors.lightYellow};

    @media only screen and (min-width: ${n.medium}) {
        font-size: 14px;
        line-height: 1.29;
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,z=r.div`
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media only screen and (min-width: ${n.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${n.large}) {
        gap: 20px;
    }
`,W=r.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${n.medium}) {
        width: 90px;
        height: 90px;
    }
`,T=r.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;
`,D=r.div`
    max-width: 185px;

    @media only screen and (min-width: ${n.medium}) {
        max-width: 196px;
    }
`,H=r.h3`
    margin-bottom: 14px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.04em;

    color: ${i=>i.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 20px;

        font-size: 20px;
        line-height: 1.3;
    }
`,A=r.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,s=r.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${i=>i.theme.colors.lightGrey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,a=r.span`
    color: ${i=>i.theme.colors.black};
`,E=({item:i})=>{const{title:o,workDays:t,imageUrl:x,address:l,phone:c,email:p}=i,m=t?(g=>{const d=g.find(h=>h.from&&h.to);return d?`${d.from} - ${d.to}`:null})(t):null;return e.jsxs(F,{children:[e.jsx(v,{children:m?e.jsx("p",{children:m}):e.jsx("p",{children:"Day and night"})}),e.jsxs(z,{children:[e.jsx(W,{children:e.jsx(T,{src:x,alt:o})}),e.jsxs(D,{children:[e.jsx(H,{children:o}),e.jsxs(A,{children:[e.jsxs(s,{children:["Email:"," ",e.jsx(a,{children:p||"website only"})]}),e.jsxs(s,{children:["Address:"," ",e.jsx(a,{children:l||"website only"})]}),e.jsxs(s,{children:["Phone:"," ",e.jsx(a,{children:c||"email only"})]})]})]})]})]},i._id)},B=()=>{const i=w(),o=u(k);return f.useEffect(()=>{i(b())},[]),e.jsxs(e.Fragment,{children:[e.jsx($,{children:"Our friends"}),e.jsx(j,{children:o.map(t=>e.jsx(E,{item:t},t._id))})]})};export{B as default};
