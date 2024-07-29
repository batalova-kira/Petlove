import{u as o,b as n,j as t,r as p,I as v,a as j,c as h,d as N,f as r,s as $}from"./index-BXLA8KMG.js";import{P}from"./Pagination-DKJ1KVDw.js";import{F as k}from"./LoginForm.styled-CIC2OpLs.js";const F=e=>e.news.news,C=e=>e.news.currentPage,S=e=>e.news.hasMore,z=e=>e.news.totalPages,I=o.div`
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
`,W=o.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 0;
    }
`,T=o.ul`
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
`,M=o.li`
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
`,D=o.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 28px;
    }
`,E=o.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: ${n.medium}) {
        height: 226px;
    }
`,H=o.h2`
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
`,R=o.p`
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
`,_=o.div`
    flex: 1;
`,B=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${n.medium}) {
        padding-bottom: 28px;
    }
`,L=o.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,G=o.button`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
    background: none;
`,U=({newsItem:e})=>{const{title:l,text:c,date:d,imgUrl:s}=e,a=d.slice(0,10).replace(/-/g,"/");return t.jsxs(M,{children:[t.jsx(D,{children:t.jsx(E,{src:s,alt:"Image of news"})}),t.jsx(H,{children:l}),t.jsx(R,{children:c}),t.jsx(_,{}),t.jsxs(B,{children:[t.jsx(L,{children:a}),t.jsx(G,{children:"Read more"})]})]},e._id)},q=o.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: ${n.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,A=o(k)`
    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        padding: 14px;
    }
`,J=o.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,K=({onFilterSubmit:e})=>{const[l,c]=p.useState(""),d=a=>{c(a.target.value)},s=a=>{a.preventDefault(),e(l)};return t.jsxs(q,{onSubmit:s,children:[t.jsx(A,{type:"text",value:l,onChange:d,placeholder:"Search"}),t.jsx(J,{type:"submit",children:t.jsx(v,{name:"loupe",width:18,height:18})})]})},X=()=>{const e=j(),l=h(F),c=h(C),d=h(S),s=h(z),a=6,[g,m]=p.useState(1);p.useEffect(()=>{e(N()),e(r({page:1,limit:a}))},[e,a]);const x=i=>{m(i),e(r({page:i,limit:a}))},w=()=>{if(d){const i=g+1;m(i),e(r({page:i,limit:a}))}},u=()=>{if(c>1){const i=g-1;m(i),e(r({page:i,limit:a}))}},b=()=>{m(1),e(r({page:1,limit:a}))},f=()=>{m(s),e(r({page:s,limit:a}))},y=i=>{e($(i)),m(1),e(r({page:1,limit:a,filterWord:i}))};return t.jsxs("div",{children:[t.jsxs(I,{children:[t.jsx(W,{children:"News"}),t.jsx(K,{onFilterSubmit:y})]}),t.jsx(T,{children:l.map(i=>t.jsx(U,{newsItem:i,id:`news-${i._id}`},i._id))}),t.jsx(P,{currentPage:c,handleCurrentPage:x,handleNextPage:w,handlePrevPage:u,handleFirstPage:b,handleLastPage:f,hasMore:d,maxPages:s})]})};export{X as default};
