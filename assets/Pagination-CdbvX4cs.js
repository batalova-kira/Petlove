import{u as o,b as r,j as i,I as s}from"./index-CF_oQxaD.js";const j=o.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: ${r.medium}) {
        gap: 24px;
    }
`,g=o.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${r.medium}) {
        gap: 8px;
    }
`,n=o.button`
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
`,l=o.div`
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
`,a=o.div`
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

    @media only screen and (min-width: ${r.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,f=({currentPage:e,handleCurrentPage:t,handleNextPage:h,handlePrevPage:c,handleFirstPage:x,handleLastPage:p,hasMore:m,maxPages:d})=>i.jsxs(j,{children:[i.jsxs(a,{children:[i.jsx(n,{onClick:x,disabled:e===1,children:i.jsxs(l,{children:[i.jsx(s,{name:"arrow-left",width:20,height:20}),i.jsx(s,{name:"arrow-left",width:20,height:20})]})}),i.jsx(n,{onClick:c,disabled:e===1,children:i.jsx(s,{name:"arrow-left",width:20,height:20})})]}),i.jsxs(g,{children:[e>1&&i.jsx(n,{onClick:()=>t(e-1),children:e-1}),i.jsx(n,{disabled:!0,children:e}),e<d&&i.jsxs(i.Fragment,{children:[i.jsx(n,{onClick:()=>t(e+1),children:e+1}),i.jsx(n,{disabled:!0,children:"..."})]})]}),i.jsxs(a,{children:[i.jsx(n,{onClick:h,disabled:!m,children:i.jsx(s,{name:"arrow-right",width:20,height:20})}),i.jsx(n,{onClick:p,disabled:e===d,children:i.jsxs(l,{children:[i.jsx(s,{name:"arrow-right",width:20,height:20}),i.jsx(s,{name:"arrow-right",width:20,height:20})]})})]})]});export{f as P};
