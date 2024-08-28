import{u as o,b as n,j as i,a as k,c as h,r as f,d as P,f as d,s as m,e as $}from"./index-BW_6XoUk.js";import{F,P as C}from"./Filter-CmwNr7J3.js";import"./Filter.styled-CDezOAEJ.js";const z=e=>e.news.allNews,T=e=>e.news.filteredNews,W=e=>e.news.currentPage,S=e=>e.news.totalPages,E=e=>e.news.filterWord,_=o.div`
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
`,D=o.h1`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 0;
    }
`,I=o.ul`
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
`,R=o.li`
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
`,H=o.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 28px;
    }
`,L=o.img`
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
`,B=o.p`
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
`,G=o.div`
    flex: 1;
`,U=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${n.medium}) {
        padding-bottom: 28px;
    }
`,q=o.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,A=o.a`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
    background: none;
`,J=({newsItem:e})=>{const{title:p,text:g,date:s,imgUrl:l,url:a}=e,r=s.slice(0,10).replace(/-/g,"/");return i.jsxs(R,{children:[i.jsx(H,{children:i.jsx(L,{src:l,alt:"Image of news"})}),i.jsx(M,{children:p}),i.jsx(B,{children:g}),i.jsx(G,{}),i.jsxs(U,{children:[i.jsx(q,{children:r}),i.jsx(A,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})]},e._id)},V=()=>{const e=k(),p=h(z),g=h(T),s=h(E),l=h(W),a=h(S),r=6,[w,c]=f.useState(1);f.useEffect(()=>{e(P()),e(d({page:1,limit:r,keyword:s}))},[e,r,s]),f.useEffect(()=>{c(l)},[l]);const u=t=>{c(t),e(m(t)),e(d({page:t,limit:r,keyword:s}))},b=()=>{if(l<a){const t=w+1;c(t),e(m(t)),e(d({page:t,limit:r,keyword:s}))}},y=()=>{if(l>1){const t=w-1;c(t),e(m(t)),e(d({page:t,limit:r,keyword:s}))}},N=()=>{c(1),e(m(1)),e(d({page:1,limit:r,keyword:s}))},v=()=>{c(a),e(m(a)),e(d({page:a,limit:r,keyword:s}))},j=t=>{e($(t)),e(d({page:1,limit:r,keyword:t}))},x=s?g:p;return i.jsxs("div",{children:[i.jsxs(_,{children:[i.jsx(D,{children:"News"}),i.jsx(F,{onFilterSubmit:j})]}),i.jsx(I,{children:x&&x.length>0?x.map(t=>i.jsx(J,{newsItem:t,id:`news-${t._id}`},t._id)):i.jsx("p",{children:"Loading..."})}),l<a&&i.jsx(C,{currentPage:w,handleCurrentPage:u,handleNextPage:b,handlePrevPage:y,handleFirstPage:N,handleLastPage:v,hasMore:l<a,maxPages:a})]})};export{V as default};
