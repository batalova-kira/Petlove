import{u as n,b as r,j as e,a as u,c as w,r as f,B as j}from"./index-BFBGjn-R.js";import{F as b,a as y}from"./Friends.styled-CYAFnHVz.js";import"./HomePage.styled-BTLc9Whj.js";const F=i=>i.friends.friends,$=n.li`
    position: relative;
    max-width: 335px;
    width: 100%;
    padding: 40px 20px;

    border-radius: 15px;
    background: ${i=>i.theme.colors.secondBackground};

    @media only screen and (min-width: ${r.medium}) {
        max-width: 342px;
    }

    @media only screen and (min-width: ${r.large}) {
        max-width: 370px;
    }
`,k=n.div`
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

    @media only screen and (min-width: ${r.medium}) {
        font-size: 14px;
        line-height: 1.29;
    }
`,v=n.div`
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media only screen and (min-width: ${r.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${r.large}) {
        gap: 20px;
    }
`,W=n.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${r.medium}) {
        width: 90px;
        height: 90px;
    }
`,z=n.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;
`,T=n.div`
    max-width: 185px;

    @media only screen and (min-width: ${r.medium}) {
        max-width: 196px;
    }
`,D=n.h3`
    margin-bottom: 14px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.04em;

    color: ${i=>i.theme.colors.black};

    @media only screen and (min-width: ${r.medium}) {
        margin-bottom: 20px;

        font-size: 20px;
        line-height: 1.3;
    }
`,A=n.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,d=n.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${i=>i.theme.colors.lightGrey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,a=n.span`
    color: ${i=>i.theme.colors.black};
`,E=({item:i})=>{const{title:s,workDays:t,imageUrl:m,address:l,phone:c,email:p}=i,h=t?(g=>{const o=g.find(x=>x.from&&x.to);return o?`${o.from} - ${o.to}`:null})(t):null;return e.jsxs($,{children:[e.jsx(k,{children:h?e.jsx("p",{children:h}):e.jsx("p",{children:"Day and night"})}),e.jsxs(v,{children:[e.jsx(W,{children:e.jsx(z,{src:m,alt:s})}),e.jsxs(T,{children:[e.jsx(D,{children:s}),e.jsxs(A,{children:[e.jsxs(d,{children:["Email:"," ",e.jsx(a,{children:p||"website only"})]}),e.jsxs(d,{children:["Address:"," ",e.jsx(a,{children:l||"website only"})]}),e.jsxs(d,{children:["Phone:"," ",e.jsx(a,{children:c||"email only"})]})]})]})]})]},i._id)},G=()=>{const i=u(),s=w(F);return f.useEffect(()=>{i(j())},[]),e.jsxs(e.Fragment,{children:[e.jsx(b,{children:"Our friends"}),e.jsx(y,{children:s.map(t=>e.jsx(E,{item:t},t._id))})]})};export{G as default};
