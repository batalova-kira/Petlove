import{u as t,I as x,j as i,a as m,b as h,r as w,c as g,f as d}from"./index-BoMDLY2g.js";const f=e=>e.news.news,b=e=>e.news.currentPage,y=e=>e.news.hasMore,j=t.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
    }

    @media only screen and (min-width: 1280px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px;
    }
`,u=t.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: 768px) {
        gap: 24px;
    }
`,v=t.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: 768px) {
        gap: 8px;
    }
`,l=t.button`
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
`;t(x)`
    stroke: ${e=>e.theme.colors.black};
`;const k=({currentPage:e,handleCurrentPage:o,handleNextPage:n,handlePrevPage:s,hasMore:r,maxPages:a=192})=>i.jsxs(u,{children:[i.jsx(l,{onClick:s,disabled:e===1,children:i.jsx(x,{name:"arrow-left",width:20,height:20})}),i.jsxs(v,{children:[e>1&&i.jsx(l,{onClick:()=>o(e-1),children:e-1}),i.jsx(l,{disabled:!0,children:e}),e<a&&i.jsxs(i.Fragment,{children:[i.jsx(l,{onClick:()=>o(e+1),children:e+1}),i.jsx(l,{disabled:!0,children:"..."})]})]}),i.jsx(l,{onClick:n,disabled:!r,children:"Next"})]}),N=t.li`
    display: flex;
    flex-direction: column;
    max-width: 335px;
    width: 100%;
    height: 379px;

    @media only screen and (min-width: 768px) {
        max-width: 340px;
        width: 340px;
        height: 476px;
    }

    @media only screen and (min-width: 1280px) {
        max-width: 361px;
        width: 361px;
    }
`,C=t.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 28px;
    }
`,$=t.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: 768px) {
        height: 226px;
    }
`,z=t.h2`
    margin-bottom: 12px;
    --line-height: 1.25;
    max-height: calc(2 * var(--line-height) * 1em);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-height);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: calc(2 * var(--line-height) * 1em);

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    &::after {
        content: "\00a0"; /* Додаємо пробіл */
        display: inline-block;
        width: 100%;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }

    @media only screen and (min-width: 768px) {
        font-size: 20px;
        --line-height: 1.3;
    }
`,I=t.p`
    margin-bottom: 19px;
    --line-height: 1.29;
    max-height: calc(4 * var(--line-height) * 1em);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-height);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: calc(4 * var(--line-height) * 1em);

    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: 768px) {
        font-size: 16px;
        --line-height: 1.25;
    }
`,B=t.div`
    flex: 1;
`,M=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding-bottom: 28px;
    }
`,E=t.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
`,R=t.button`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
    background: none;

    /* @media only screen and (min-width: 768px) {
    } */
`,S=({newsItem:e})=>{const{title:o,text:n,date:s,imgUrl:r}=e,a=s.slice(0,10).replace(/-/g,"/");return i.jsxs(N,{children:[i.jsx(C,{children:i.jsx($,{src:r,alt:"Image of news"})}),i.jsx(z,{children:o}),i.jsx(I,{children:n}),i.jsx(B,{}),i.jsxs(M,{children:[i.jsx(E,{children:a}),i.jsx(R,{children:"Read more"})]})]},e._id)},D=()=>{const e=m(),o=h(f),n=h(b),s=h(y);w.useEffect(()=>{e(g()),e(d({page:1,limit:6}))},[e]);const r=c=>{e(d({page:c,limit:6}))},a=()=>{s&&e(d({page:n+1,limit:6}))},p=()=>{n>1&&e(d({page:n-1,limit:6}))};return i.jsxs("div",{children:[i.jsx(j,{children:o.map(c=>i.jsx(S,{newsItem:c},c._id))}),i.jsx(k,{currentPage:n,hasMore:s,handleCurrentPage:r,handleNextPage:a,handlePrevPage:p})]})};export{D as default};
