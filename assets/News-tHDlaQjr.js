import{u as i,b as n,j as t,I as p,r as w,a as N,c as g,d as C,f as m,s as F}from"./index-CNVEPeOm.js";import{F as S}from"./LoginForm.styled-oZHh1QR-.js";const I=e=>e.news.news,P=e=>e.news.currentPage,W=e=>e.news.hasMore,z=e=>e.news.totalPages,B=i.div`
    @media only screen and (min-width: ${n.medium}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 44px;
    }

    @media only screen and (min-width: ${n.large}) {
        margin-bottom: 60px;
    }
`,T=i.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 0;
    }
`,M=i.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${n.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px;
    }

    @media only screen and (min-width: ${n.large}) {
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

    @media only screen and (min-width: ${n.medium}) {
        gap: 24px;
    }
`,E=i.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    @media only screen and (min-width: ${n.medium}) {
        gap: 8px;
    }
`,h=i.button`
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
`,u=i.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: -14px;
    }

    @media only screen and (min-width: ${n.medium}) {
        svg {
            margin-left: -17px;
        }
    }

    svg:first-child {
        margin-left: 0;
    }
`,b=i.div`
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

    @media only screen and (min-width: ${n.medium}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`,H=({currentPage:e,handleCurrentPage:r,handleNextPage:d,handlePrevPage:c,handleFirstPage:a,handleLastPage:o,hasMore:x,maxPages:l})=>t.jsxs(D,{children:[t.jsxs(b,{children:[t.jsx(h,{onClick:a,disabled:e===1,children:t.jsxs(u,{children:[t.jsx(p,{name:"arrow-left",width:20,height:20}),t.jsx(p,{name:"arrow-left",width:20,height:20})]})}),t.jsx(h,{onClick:c,disabled:e===1,children:t.jsx(p,{name:"arrow-left",width:20,height:20})})]}),t.jsxs(E,{children:[e>1&&t.jsx(h,{onClick:()=>r(e-1),children:e-1}),t.jsx(h,{disabled:!0,children:e}),e<l&&t.jsxs(t.Fragment,{children:[t.jsx(h,{onClick:()=>r(e+1),children:e+1}),t.jsx(h,{disabled:!0,children:"..."})]})]}),t.jsxs(b,{children:[t.jsx(h,{onClick:d,disabled:!x,children:t.jsx(p,{name:"arrow-right",width:20,height:20})}),t.jsx(h,{onClick:o,disabled:e===l,children:t.jsxs(u,{children:[t.jsx(p,{name:"arrow-right",width:20,height:20}),t.jsx(p,{name:"arrow-right",width:20,height:20})]})})]})]}),L=i.li`
    display: flex;
    flex-direction: column;
    max-width: 335px;
    width: 100%;
    height: 379px;

    @media only screen and (min-width: ${n.medium}) {
        max-width: 340px;
        width: 340px;
        height: 476px;
    }

    @media only screen and (min-width: ${n.large}) {
        max-width: 361px;
        width: 361px;
    }
`,R=i.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 28px;
    }
`,_=i.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: ${n.medium}) {
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

    @media only screen and (min-width: ${n.medium}) {
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

    @media only screen and (min-width: ${n.medium}) {
        font-size: 16px;
        --line-height: 1.25;
    }
`,q=i.div`
    flex: 1;
`,A=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${n.medium}) {
        padding-bottom: 28px;
    }
`,J=i.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
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
`,O=({newsItem:e})=>{const{title:r,text:d,date:c,imgUrl:a}=e,o=c.slice(0,10).replace(/-/g,"/");return t.jsxs(L,{children:[t.jsx(R,{children:t.jsx(_,{src:a,alt:"Image of news"})}),t.jsx(G,{children:r}),t.jsx(U,{children:d}),t.jsx(q,{}),t.jsxs(A,{children:[t.jsx(J,{children:o}),t.jsx(K,{children:"Read more"})]})]},e._id)},Q=i.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: ${n.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,V=i(S)`
    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        padding: 14px;
    }
`,X=i.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,Y=({onFilterSubmit:e})=>{const[r,d]=w.useState(""),c=o=>{d(o.target.value)},a=o=>{o.preventDefault(),e(r)};return t.jsxs(Q,{onSubmit:a,children:[t.jsx(V,{type:"text",value:r,onChange:c,placeholder:"Search"}),t.jsx(X,{type:"submit",children:t.jsx(p,{name:"loupe",width:18,height:18})})]})},te=()=>{const e=N(),r=g(I),d=g(P),c=g(W),a=g(z),o=6,[x,l]=w.useState(1);w.useEffect(()=>{e(C()),e(m({page:1,limit:o}))},[e,o]);const f=s=>{l(s),e(m({page:s,limit:o}))},j=()=>{if(c){const s=x+1;l(s),e(m({page:s,limit:o}))}},y=()=>{if(d>1){const s=x-1;l(s),e(m({page:s,limit:o}))}},v=()=>{l(1),e(m({page:1,limit:o}))},$=()=>{l(a),e(m({page:a,limit:o}))},k=s=>{e(F(s)),l(1),e(m({page:1,limit:o,filterWord:s}))};return t.jsxs("div",{children:[t.jsxs(B,{children:[t.jsx(T,{children:"News"}),t.jsx(Y,{onFilterSubmit:k})]}),t.jsx(M,{children:r.map(s=>t.jsx(O,{newsItem:s,id:`news-${s._id}`},s._id))}),t.jsx(H,{currentPage:d,handleCurrentPage:f,handleNextPage:j,handlePrevPage:y,handleFirstPage:v,handleLastPage:$,hasMore:c,maxPages:a})]})};export{te as default};
