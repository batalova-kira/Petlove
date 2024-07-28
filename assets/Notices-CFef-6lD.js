import{u as i,b as a,j as t,I as y,a as j,c as x,r as g,e as N,g as n}from"./index-DdE3f332.js";import{F as b}from"./Friends.styled-DtQ-eNhg.js";import{P as v}from"./Pagination-6X50zAXF.js";import"./HomePage.styled-ei9ql5cF.js";const $=e=>e.notices.notices,k=e=>e.notices.currentPage,C=e=>e.notices.hasMore,F=e=>e.notices.totalPages,I=i.li`
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 335px;
    padding: 24px;
    border-radius: 16px;

    background-color: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${a.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${a.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,W=i.div`
    width: 287px;
    height: 178px;
    border-radius: 16px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${a.medium}) {
    }
`,B=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,E=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,L=i.p`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.secondaryBlack};
`,M=i.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`,R=i.div`
    display: flex;
    align-items: center;

    color: ${e=>e.theme.colors.secondaryYellow};

    /* @media only screen and (min-width: ${a.medium}) {
        svg {
            margin-left: -17px;
        }
    } */
`,S=i.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${e=>e.theme.colors.secondaryBlack};
`,T=({noticesItem:e})=>{const{title:d,imgURL:l,popularity:p,_id:r}=e;return t.jsxs(I,{children:[t.jsx(W,{children:t.jsx(B,{src:l,alt:d})}),t.jsxs(E,{children:[t.jsx(L,{children:d}),t.jsxs(M,{children:[t.jsx(R,{children:t.jsx(y,{name:"star",width:16,height:16})}),t.jsx(S,{children:p})]})]})]},r)},z=i.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${a.medium}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px; */
    }

    @media only screen and (min-width: ${a.large}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px; */
    }
`,Y=()=>{const e=j(),d=x($),l=x(k),p=x(C),r=x(F),s=6,[m,c]=g.useState(1);g.useEffect(()=>{e(N()),e(n({page:1,limit:s}))},[e,s]);const h=o=>{c(o),e(n({page:o,limit:s}))},u=()=>{if(p){const o=m+1;c(o),e(n({page:o,limit:s}))}},f=()=>{if(l>1){const o=m-1;c(o),e(n({page:o,limit:s}))}},w=()=>{c(1),e(n({page:1,limit:s}))},P=()=>{c(r),e(n({page:r,limit:s}))};return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:"Find your favorite pet"}),t.jsx(z,{children:d.map(o=>t.jsx(T,{noticesItem:o},o._id))}),t.jsx(v,{currentPage:l,handleCurrentPage:h,handleNextPage:u,handlePrevPage:f,handleFirstPage:w,handleLastPage:P,hasMore:p,maxPages:r})]})};export{Y as default};
