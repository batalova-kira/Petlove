import{u as n,b as r,j as e,I as o,r as g}from"./index-Ctz4zhXg.js";import{F as u}from"./LoginForm.styled-PQPYA7Zm.js";const j=n.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: ${r.medium}) {
        gap: 24px;
    }
`,w=n.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${r.medium}) {
        gap: 8px;
    }
`,t=n.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${i=>i.theme.colors.veryLightGrey};
    background-color: transparent;
    color: ${i=>i.theme.colors.black};

    &:focus,
    &:hover {
        border-color: transparent;
        color: ${i=>i.theme.colors.secondBackground};
        background-color: ${i=>i.theme.colors.yellow};
    }
`,p=n.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: ${r.medium}) {
        svg {
            margin-left: -17px;
        }
    }

    svg:first-child {
        margin-left: 0;
    }
`,m=n.div`
    display: flex;
    gap: 6px;
    justify-content: center;

    &:focus,
    &:hover {
        border-color: transparent;
        stroke: ${i=>i.theme.colors.secondBackground};
        color: transparent;
    }

    svg {
        width: 20px;
        height: 20px;
        viewport-fit: 20 20 0 0;
    }

    @media only screen and (min-width: ${r.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,$=({currentPage:i,handleCurrentPage:s,handleNextPage:l,handlePrevPage:a,handleFirstPage:c,handleLastPage:d,hasMore:x,maxPages:h})=>e.jsxs(j,{children:[e.jsxs(m,{children:[e.jsx(t,{onClick:c,disabled:i===1,children:e.jsxs(p,{children:[e.jsx(o,{name:"arrow-left",width:20,height:20}),e.jsx(o,{name:"arrow-left",width:20,height:20})]})}),e.jsx(t,{onClick:a,disabled:i===1,children:e.jsx(o,{name:"arrow-left",width:20,height:20})})]}),e.jsxs(w,{children:[i>1&&e.jsx(t,{onClick:()=>s(i-1),children:i-1}),e.jsx(t,{disabled:!0,children:i}),i<h&&e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(i+1),children:i+1}),e.jsx(t,{disabled:!0,children:"..."})]})]}),e.jsxs(m,{children:[e.jsx(t,{onClick:l,disabled:!x,children:e.jsx(o,{name:"arrow-right",width:20,height:20})}),e.jsx(t,{onClick:d,disabled:i===h,children:e.jsxs(p,{children:[e.jsx(o,{name:"arrow-right",width:20,height:20}),e.jsx(o,{name:"arrow-right",width:20,height:20})]})})]})]}),b=n.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: ${r.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,f=n(u)`
    background-color: transparent;

    @media only screen and (min-width: ${r.medium}) {
        padding: 14px;
    }
`,y=n.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${r.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,C=({onFilterSubmit:i})=>{const[s,l]=g.useState(""),a=d=>{l(d.target.value)},c=d=>{d.preventDefault(),i(s),l("")};return e.jsxs(b,{onSubmit:c,children:[e.jsx(f,{type:"text",value:s,onChange:a,placeholder:"Search"}),e.jsx(y,{type:"submit",children:e.jsx(o,{name:"loupe",width:18,height:18})})]})};export{C as F,$ as P};
