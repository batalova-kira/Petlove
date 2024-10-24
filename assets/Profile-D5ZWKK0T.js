import{u as n,b as d,j as r,I as o}from"./index-BODI_6D-.js";const i=n.div`
    width:100%;
    padding: 18px 20px 40px 20px;

    border-radius: 30px;
    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,s=n.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,t=n.button`
display:flex;
flex-direction:row;
gap:4px;

padding: 10px 14px;
border-radius: 30px;

    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,a=n.p`
    font-weight: 500;
font-size: 14px;

line-height: 1.29;
letter-spacing: -0.02em;
`,c=n.div`
    /* color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow}; */

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,l=n.button`
display:flex;
align-items:center;

padding: 12px ;
border-radius: 50%;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};

    @media only screen and (min-width: ${d.medium}) {
    
    }
`,m=()=>r.jsxs(i,{children:[r.jsxs(s,{children:[r.jsxs(t,{children:[r.jsx(a,{children:"User"}),r.jsx(c,{children:r.jsx(o,{height:18,width:18,name:"user-card"})})]}),r.jsx(l,{children:r.jsx(o,{height:18,width:18,name:"edit-card"})})]}),"UserCard"]}),h=()=>r.jsx(r.Fragment,{children:r.jsx(m,{})});export{h as default};
