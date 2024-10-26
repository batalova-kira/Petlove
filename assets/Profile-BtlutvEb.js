import{u as t,b as n,a as d,c as o,F as c,r as l,G as h,j as e,I as i}from"./index-DuKwjm90.js";const p=t.div`
    width:100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${r=>r.theme.colors.secondBackground};

    @media only screen and (min-width: ${n.medium}) {
    
    }
`,x=t.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    
    @media only screen and (min-width: ${n.medium}) {
    
    }
`,m=t.button`
display:flex;
flex-direction:row;
gap:4px;

padding: 10px 14px;
border-radius: 30px;

    color: ${r=>r.theme.colors.secondBackground};
    background: ${r=>r.theme.colors.yellow};

    @media only screen and (min-width: ${n.medium}) {
    
    }
`,u=t.p`
    font-weight: 500;
font-size: 14px;

line-height: 1.29;
letter-spacing: -0.02em;
`,g=t.div`
    width:18px;
    height:18px;

    @media only screen and (min-width: ${n.medium}) {
    
    }
`,w=t.button`
display:flex;
align-items:center;

padding: 12px ;
border-radius: 50%;

    color: ${r=>r.theme.colors.yellow};
    background: ${r=>r.theme.colors.lightYellow};

    @media only screen and (min-width: ${n.medium}) {
    
    }
`,j=t.div`
display:flex;
justify-content: center;
align-items:center;

    width:94px;
    height:94px;
    border-radius:50%;

    background: ${r=>r.theme.colors.lightYellow};

    svg{
        width: 40px;
        height: 40px;
    }
    
    @media only screen and (min-width: ${n.medium}) {
    
    }
`,b=()=>{const r=d(),s=o(c);l.useEffect(()=>{r(h())},[r]);const a=()=>{console.log("User Data:",s)};return e.jsxs(p,{children:[e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsx(u,{children:"User"}),e.jsx(g,{children:e.jsx(i,{height:18,width:18,name:"user-card"})})]}),e.jsx(w,{children:e.jsx(i,{height:18,width:18,name:"edit-card"})})]}),e.jsxs("div",{children:[s.avatar?e.jsx("img",{src:s.avatar,alt:"User Avatar"}):e.jsx(j,{children:e.jsx(i,{name:"user-avatar"})}),s.avatar?"none":e.jsx("button",{onClick:a,children:"Upload photo"})]})]})},y=()=>e.jsx(e.Fragment,{children:e.jsx(b,{})});export{y as default};
