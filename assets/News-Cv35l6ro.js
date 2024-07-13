import{u as i,j as t,I as p,r as g,a as N,b as x,c as C,f as h,s as F}from"./index-BrvqWY58.js";import{F as W,T as $}from"./Title-BkU8A1As.js";const S=e=>e.news.news,I=e=>e.news.currentPage,P=e=>e.news.hasMore,B=e=>e.news.totalPages,z=e=>e.news.filterWord,T=i.ul`
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
`,M=i.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: 768px) {
        gap: 24px;
    }
`,D=i.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: 768px) {
        gap: 8px;
    }
`,c=i.button`
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
`,w=i.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -17px;
    }

    svg:first-child {
        margin-left: 0;
    }
`,f=i.div`
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

    @media only screen and (min-width: 768px) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,E=({currentPage:e,handleCurrentPage:s,handleNextPage:l,handlePrevPage:d,handleFirstPage:r,handleLastPage:n,hasMore:m,maxPages:a})=>t.jsxs(M,{children:[t.jsxs(f,{children:[t.jsx(c,{onClick:r,disabled:e===1,children:t.jsxs(w,{children:[t.jsx(p,{name:"arrow-left",width:20,height:20}),t.jsx(p,{name:"arrow-left",width:20,height:20})]})}),t.jsx(c,{onClick:d,disabled:e===1,children:t.jsx(p,{name:"arrow-left",width:20,height:20})})]}),t.jsxs(D,{children:[e>1&&t.jsx(c,{onClick:()=>s(e-1),children:e-1}),t.jsx(c,{disabled:!0,children:e}),e<a&&t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>s(e+1),children:e+1}),t.jsx(c,{disabled:!0,children:"..."})]})]}),t.jsxs(f,{children:[t.jsx(c,{onClick:l,disabled:!m,children:t.jsx(p,{name:"arrow-right",width:20,height:20})}),t.jsx(c,{onClick:n,disabled:e===a,children:t.jsxs(w,{children:[t.jsx(p,{name:"arrow-right",width:20,height:20}),t.jsx(p,{name:"arrow-right",width:20,height:20})]})})]})]}),L=i.li`
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
`,R=i.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 28px;
    }
`,_=i.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: 768px) {
        height: 226px;
    }
`,G=i.h2`
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
`,H=i.p`
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
`,U=i.div`
    flex: 1;
`,q=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding-bottom: 28px;
    }
`,A=i.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
`,J=i.button`
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
`,K=({newsItem:e})=>{const{title:s,text:l,date:d,imgUrl:r}=e,n=d.slice(0,10).replace(/-/g,"/");return t.jsxs(L,{children:[t.jsx(R,{children:t.jsx(_,{src:r,alt:"Image of news"})}),t.jsx(G,{children:s}),t.jsx(H,{children:l}),t.jsx(U,{}),t.jsxs(q,{children:[t.jsx(A,{children:n}),t.jsx(J,{children:"Read more"})]})]},e._id)},O=i.form`
    position: relative;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    }
`,Q=i(W)`
    background-color: transparent;

    /* @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    } */
`,V=i.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    /* @media only screen and (min-width: 1280px) {
        margin-bottom: 24px;
    } */
`,X=({onFilterSubmit:e})=>{const[s,l]=g.useState(""),d=n=>{l(n.target.value)},r=n=>{n.preventDefault(),e(s)};return t.jsxs(O,{onSubmit:r,children:[t.jsx(Q,{type:"text",value:s,onChange:d,placeholder:"Введіть слово для фільтрації"}),t.jsx(V,{type:"submit",children:t.jsx(p,{name:"green-success",width:18,height:18})})]})},ee=()=>{const e=N(),s=x(S),l=x(I),d=x(P),r=x(B);x(z);const n=6,[m,a]=g.useState(1);g.useEffect(()=>{e(C()),e(h({page:1,limit:n}))},[e,n]);const b=o=>{a(o),e(h({page:o,limit:n}))},u=()=>{if(d){const o=m+1;a(o),e(h({page:o,limit:n}))}},j=()=>{if(l>1){const o=m-1;a(o),e(h({page:o,limit:n}))}},y=()=>{a(1),e(h({page:1,limit:n}))},v=()=>{a(r),e(h({page:r,limit:n}))},k=o=>{e(F(o)),a(1),e(h({page:1,limit:n,filterWord:o}))};return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx($,{text:"News"}),t.jsx(X,{onFilterSubmit:k})]}),t.jsx(T,{children:s.map(o=>t.jsx(K,{newsItem:o,id:`news-${o._id}`},o._id))}),t.jsx(E,{currentPage:l,handleCurrentPage:b,handleNextPage:u,handlePrevPage:j,handleFirstPage:y,handleLastPage:v,hasMore:d,maxPages:r})]})};export{ee as default};
