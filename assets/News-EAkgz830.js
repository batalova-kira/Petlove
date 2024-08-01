import{u as o,b as n,j as t,r as g,I as $,a as k,c as p,d as C,f as m,s as h,e as F,g as S}from"./index-DaDjtoqt.js";import{P as z}from"./Pagination-CfgKH9e_.js";import{F as I}from"./LoginForm.styled-X4PQHsRt.js";const L=e=>e.news.allNews,T=e=>e.news.filteredNews,W=e=>e.news.currentPage,D=e=>e.news.totalPages,E=o.div`
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
`,R=o.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 0;
    }
`,_=o.ul`
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
`,A=o.li`
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
`,B=o.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 28px;
    }
`,H=o.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: ${n.medium}) {
        height: 226px;
    }
`,M=o.h2`
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
`,G=o.p`
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
`,U=o.div`
    flex: 1;
`,q=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${n.medium}) {
        padding-bottom: 28px;
    }
`,J=o.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,K=o.button`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
    background: none;
`,O=({newsItem:e})=>{const{title:l,text:c,date:a,imgUrl:r}=e,s=a.slice(0,10).replace(/-/g,"/");return t.jsxs(A,{children:[t.jsx(B,{children:t.jsx(H,{src:r,alt:"Image of news"})}),t.jsx(M,{children:l}),t.jsx(G,{children:c}),t.jsx(U,{}),t.jsxs(q,{children:[t.jsx(J,{children:s}),t.jsx(K,{children:"Read more"})]})]},e._id)},Q=o.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 24px;
    width: 100%;

    @media only screen and (min-width: ${n.medium}) {
        width: 230px;
        margin-bottom: 0;
    }
`,V=o(I)`
    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        padding: 14px;
    }
`,X=o.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${n.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`,Y=({onFilterSubmit:e})=>{const[l,c]=g.useState(""),a=s=>{c(s.target.value)},r=s=>{s.preventDefault(),e(l),c("")};return t.jsxs(Q,{onSubmit:r,children:[t.jsx(V,{type:"text",value:l,onChange:a,placeholder:"Search"}),t.jsx(X,{type:"submit",children:t.jsx($,{name:"loupe",width:18,height:18})})]})},ne=()=>{const e=k(),l=p(L),c=p(T),a=p(W),r=p(D),s=6,[x,d]=g.useState(1);g.useEffect(()=>{e(C()),e(m({page:1,limit:s}))},[e,s]),g.useEffect(()=>{d(a),console.log(a)},[a]);const b=i=>{d(i),e(h(i)),e(m({page:i,limit:s}))},f=()=>{if(a<r){const i=x+1;d(i),e(h(i)),e(m({page:i,limit:s}))}},y=()=>{if(a>1){const i=x-1;d(i),e(h(i)),e(m({page:i,limit:s}))}},v=()=>{d(1),e(h(1)),e(m({page:1,limit:s}))},N=()=>{d(r),e(h(r)),e(m({page:r,limit:s}))},j=i=>{e(F(i)),d(1);const P=l.flat().filter(u=>u.title.toLowerCase().includes(i.toLowerCase()||u.text.toLowerCase().includes(i.toLowerCase())));e(S(P))},w=c.length>0?c:l;return t.jsxs("div",{children:[t.jsxs(E,{children:[t.jsx(R,{children:"News"}),t.jsx(Y,{onFilterSubmit:j})]}),t.jsx(_,{children:Array.isArray(w)&&w.length>0?w.map(i=>t.jsx(O,{newsItem:i,id:`news-${i._id}`},i._id)):t.jsx("p",{children:"Loading..."})}),a<r&&t.jsx(z,{currentPage:x,handleCurrentPage:b,handleNextPage:f,handlePrevPage:y,handleFirstPage:v,handleLastPage:N,hasMore:a<r,maxPages:r})]})};export{ne as default};
