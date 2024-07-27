import{u as i,b as h,j as t,I as x,r as w,a as $,c as g,d as C,f as p,s as F}from"./index-U9GKpFRi.js";import{F as S}from"./LoginForm.styled-PXzhtbpR.js";const I=e=>e.news.news,P=e=>e.news.currentPage,W=e=>e.news.hasMore,z=e=>e.news.totalPages,B=i.div`
    @media only screen and (min-width: ${h.medium}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 44px;
    }

    @media only screen and (min-width: ${h.large}) {
        margin-bottom: 60px;
    }
`,T=i.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${h.medium}) {
        margin-bottom: 0;
    }
`,M=i.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${h.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px;
    }

    @media only screen and (min-width: ${h.large}) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px;
    }
`,D=i.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;

    @media only screen and (min-width: 768px) {
        gap: 24px;
    }
`,E=i.div`
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
`,b=i.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: 768px) {
        svg {
            margin-left: -17px;
        }
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
`,H=({currentPage:e,handleCurrentPage:s,handleNextPage:l,handlePrevPage:d,handleFirstPage:r,handleLastPage:n,hasMore:m,maxPages:a})=>t.jsxs(D,{children:[t.jsxs(f,{children:[t.jsx(c,{onClick:r,disabled:e===1,children:t.jsxs(b,{children:[t.jsx(x,{name:"arrow-left",width:20,height:20}),t.jsx(x,{name:"arrow-left",width:20,height:20})]})}),t.jsx(c,{onClick:d,disabled:e===1,children:t.jsx(x,{name:"arrow-left",width:20,height:20})})]}),t.jsxs(E,{children:[e>1&&t.jsx(c,{onClick:()=>s(e-1),children:e-1}),t.jsx(c,{disabled:!0,children:e}),e<a&&t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>s(e+1),children:e+1}),t.jsx(c,{disabled:!0,children:"..."})]})]}),t.jsxs(f,{children:[t.jsx(c,{onClick:l,disabled:!m,children:t.jsx(x,{name:"arrow-right",width:20,height:20})}),t.jsx(c,{onClick:n,disabled:e===a,children:t.jsxs(b,{children:[t.jsx(x,{name:"arrow-right",width:20,height:20}),t.jsx(x,{name:"arrow-right",width:20,height:20})]})})]})]}),L=i.li`
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
`,U=i.p`
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
`,q=i.div`
    flex: 1;
`,A=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding-bottom: 28px;
    }
`,J=i.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
`,K=i.button`
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
`,O=({newsItem:e})=>{const{title:s,text:l,date:d,imgUrl:r}=e,n=d.slice(0,10).replace(/-/g,"/");return t.jsxs(L,{children:[t.jsx(R,{children:t.jsx(_,{src:r,alt:"Image of news"})}),t.jsx(G,{children:s}),t.jsx(U,{children:l}),t.jsx(q,{}),t.jsxs(A,{children:[t.jsx(J,{children:n}),t.jsx(K,{children:"Read more"})]})]},e._id)},Q=i.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: ${h.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,V=i(S)`
    background-color: transparent;

    @media only screen and (min-width: ${h.medium}) {
        padding: 14px;
    }
`,X=i.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${h.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,Y=({onFilterSubmit:e})=>{const[s,l]=w.useState(""),d=n=>{l(n.target.value)},r=n=>{n.preventDefault(),e(s)};return t.jsxs(Q,{onSubmit:r,children:[t.jsx(V,{type:"text",value:s,onChange:d,placeholder:"Search"}),t.jsx(X,{type:"submit",children:t.jsx(x,{name:"loupe",width:18,height:18})})]})},te=()=>{const e=$(),s=g(I),l=g(P),d=g(W),r=g(z),n=6,[m,a]=w.useState(1);w.useEffect(()=>{e(C()),e(p({page:1,limit:n}))},[e,n]);const u=o=>{a(o),e(p({page:o,limit:n}))},j=()=>{if(d){const o=m+1;a(o),e(p({page:o,limit:n}))}},y=()=>{if(l>1){const o=m-1;a(o),e(p({page:o,limit:n}))}},v=()=>{a(1),e(p({page:1,limit:n}))},k=()=>{a(r),e(p({page:r,limit:n}))},N=o=>{e(F(o)),a(1),e(p({page:1,limit:n,filterWord:o}))};return t.jsxs("div",{children:[t.jsxs(B,{children:[t.jsx(T,{children:"News"}),t.jsx(Y,{onFilterSubmit:N})]}),t.jsx(M,{children:s.map(o=>t.jsx(O,{newsItem:o,id:`news-${o._id}`},o._id))}),t.jsx(H,{currentPage:l,handleCurrentPage:u,handleNextPage:j,handlePrevPage:y,handleFirstPage:v,handleLastPage:k,hasMore:d,maxPages:r})]})};export{te as default};
