import{u as n,b as s,j as i,I as r,r as g}from"./index-Bwa6Ix8m.js";import{F as u}from"./LoginForm.styled-D_SQxsvG.js";const j=n.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: ${s.medium}) {
        gap: 24px;
    }
`,w=n.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${s.medium}) {
        gap: 8px;
    }
`,t=n.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${e=>e.theme.colors.veryLightGrey};
    background-color: transparent;
    color: ${e=>e.theme.colors.black};

    &:focus,
    &:hover {
        border-color: transparent;
        color: ${e=>e.theme.colors.secondBackground};
        background-color: ${e=>e.theme.colors.yellow};
    }
`,m=n.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: ${s.medium}) {
        svg {
            margin-left: -17px;
        }
    }

    svg:first-child {
        margin-left: 0;
    }
`,x=n.div`
    display: flex;
    gap: 6px;
    justify-content: center;

    &:focus,
    &:hover {
        border-color: transparent;
        stroke: ${e=>e.theme.colors.secondBackground};
        color: transparent;
    }

    svg {
        width: 20px;
        height: 20px;
        viewport-fit: 20 20 0 0;
    }

    @media only screen and (min-width: ${s.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,$=({currentPage:e,handleCurrentPage:o,handleNextPage:l,handlePrevPage:a,handleFirstPage:c,handleLastPage:h,hasMore:d,maxPages:p})=>i.jsxs(j,{children:[i.jsxs(x,{children:[i.jsx(t,{onClick:c,disabled:e===1,children:i.jsxs(m,{children:[i.jsx(r,{name:"arrow-left",width:20,height:20}),i.jsx(r,{name:"arrow-left",width:20,height:20})]})}),i.jsx(t,{onClick:a,disabled:e===1,children:i.jsx(r,{name:"arrow-left",width:20,height:20})})]}),i.jsxs(w,{children:[e>1&&i.jsx(t,{onClick:()=>o(e-1),children:e-1}),i.jsx(t,{disabled:!0,children:e}),e<p&&i.jsxs(i.Fragment,{children:[i.jsx(t,{onClick:()=>o(e+1),children:e+1}),i.jsx(t,{disabled:!0,children:"..."})]})]}),i.jsxs(x,{children:[i.jsx(t,{onClick:l,disabled:!d,children:i.jsx(r,{name:"arrow-right",width:20,height:20})}),i.jsx(t,{onClick:h,disabled:e===p,children:i.jsxs(m,{children:[i.jsx(r,{name:"arrow-right",width:20,height:20}),i.jsx(r,{name:"arrow-right",width:20,height:20})]})})]})]}),b=n.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: ${({$isNoticesPage:e})=>e?"14px":"24px"};
    width: 100%;

    @media only screen and (min-width: ${s.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,f=n(u)`
    background: ${({$isNoticesPage:e,theme:o})=>e?o.colors.secondBackground:"transparent"};

    @media only screen and (min-width: ${s.medium}) {
        padding: 14px;
    }
`,y=n.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${s.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,C=({onFilterSubmit:e,$isNoticesPage:o})=>{const[l,a]=g.useState(""),c=d=>{a(d.target.value)},h=d=>{d.preventDefault(),e(l),a("")};return i.jsxs(b,{onSubmit:h,$isNoticesPage:o,children:[i.jsx(f,{type:"text",value:l,onChange:c,placeholder:"Search",$isNoticesPage:o}),i.jsx(y,{type:"submit",children:i.jsx(r,{name:"loupe",width:18,height:18})})]})};export{C as F,$ as P};
