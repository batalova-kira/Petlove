import{u as n,b as d,j as e,I as i}from"./index-DUA7jB-2.js";const s=n.div`
    width:100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${r=>r.theme.colors.secondBackground};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,t=n.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,o=n.button`
display:flex;
flex-direction:row;
gap:4px;

padding: 10px 14px;
border-radius: 30px;

    color: ${r=>r.theme.colors.secondBackground};
    background: ${r=>r.theme.colors.yellow};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,a=n.p`
    font-weight: 500;
font-size: 14px;

line-height: 1.29;
letter-spacing: -0.02em;
`,c=n.div`
    width:18px;
    height:18px;
    
    @media only screen and (min-width: ${d.medium}) {
    
    }
`,l=n.button`
display:flex;
align-items:center;

padding: 12px ;
border-radius: 50%;

    color: ${r=>r.theme.colors.yellow};
    background: ${r=>r.theme.colors.lightYellow};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,m=()=>e.jsxs(s,{children:[e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(a,{children:"User"}),e.jsx(c,{children:e.jsx(i,{height:18,width:18,name:"user-card"})})]}),e.jsx(l,{children:e.jsx(i,{height:18,width:18,name:"edit-card"})})]}),"UserCard"]}),x=()=>e.jsx(e.Fragment,{children:e.jsx(m,{})});export{x as default};
