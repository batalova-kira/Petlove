import{u as o,b as a,j as e,I as r,r as j}from"./index-DgwMgEWD.js";import{W as g,I as f,B as w}from"./Filter.styled-xOWv3Cdi.js";const u=o.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: ${a.medium}) {
        gap: 24px;
    }
`,b=o.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${a.medium}) {
        gap: 8px;
    }
`,t=o.button`
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
`,p=o.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: ${a.medium}) {
        svg {
            margin-left: -17px;
        }
    }

    svg:first-child {
        margin-left: 0;
    }
`,m=o.div`
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

    @media only screen and (min-width: ${a.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,k=({currentPage:i,handleCurrentPage:n,handleNextPage:d,handlePrevPage:l,handleFirstPage:h,handleLastPage:c,hasMore:s,maxPages:x})=>e.jsxs(u,{children:[e.jsxs(m,{children:[e.jsx(t,{onClick:h,disabled:i===1,children:e.jsxs(p,{children:[e.jsx(r,{name:"arrow-left",width:20,height:20}),e.jsx(r,{name:"arrow-left",width:20,height:20})]})}),e.jsx(t,{onClick:l,disabled:i===1,children:e.jsx(r,{name:"arrow-left",width:20,height:20})})]}),e.jsxs(b,{children:[i>1&&e.jsx(t,{onClick:()=>n(i-1),children:i-1}),e.jsx(t,{disabled:!0,children:i}),i<x&&e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(i+1),children:i+1}),e.jsx(t,{disabled:!0,children:"..."})]})]}),e.jsxs(m,{children:[e.jsx(t,{onClick:d,disabled:!s,children:e.jsx(r,{name:"arrow-right",width:20,height:20})}),e.jsx(t,{onClick:c,disabled:i===x,children:e.jsxs(p,{children:[e.jsx(r,{name:"arrow-right",width:20,height:20}),e.jsx(r,{name:"arrow-right",width:20,height:20})]})})]})]}),C=({onFilterSubmit:i,$isNoticesPage:n})=>{const[d,l]=j.useState(""),h=s=>{l(s.target.value)},c=s=>{s.preventDefault(),i(d),l("")};return e.jsxs(g,{onSubmit:c,$isNoticesPage:n,children:[e.jsx(f,{type:"text",value:d,onChange:h,placeholder:"Search",$isNoticesPage:n}),e.jsx(w,{type:"submit",children:e.jsx(r,{name:"loupe",width:18,height:18})})]})};export{C as F,k as P};
