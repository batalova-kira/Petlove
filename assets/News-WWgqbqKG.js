import{u as n,j as i,a as x,b as d,r as p,c as m,f as a}from"./index-CwjFdQ7X.js";const w=e=>e.news.news,g=e=>e.news.currentPage,b=e=>e.news.hasMore,f=n.li`
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
`,u=n.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 28px;
    }
`,j=n.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: 768px) {
        height: 226px;
    }
`,v=n.h2`
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
`,y=n.p`
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
`,N=n.div`
    flex: 1;
`,k=n.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding-bottom: 28px;
    }
`,C=n.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
`,P=n.button`
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
`,z=({newsItem:e})=>{const{title:r,text:t,date:s,imgUrl:o}=e,c=s.slice(0,10).replace(/-/g,"/");return i.jsxs(f,{children:[i.jsx(u,{children:i.jsx(j,{src:o,alt:"Image of news"})}),i.jsx(v,{children:r}),i.jsx(y,{children:t}),i.jsx(N,{}),i.jsxs(k,{children:[i.jsx(C,{children:c}),i.jsx(P,{children:"Read more"})]})]},e._id)},M=n.ul`
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
`,E=()=>{const e=x(),r=d(w),t=d(g),s=d(b);p.useEffect(()=>{e(m()),e(a({page:1,limit:6}))},[e]);const o=l=>{e(a({page:l,limit:6}))},c=()=>{s&&e(a({page:t+1,limit:6}))},h=()=>{t>1&&e(a({page:t-1,limit:6}))};return i.jsxs("div",{children:[i.jsx(M,{children:r.map(l=>i.jsx(z,{newsItem:l},l._id))}),i.jsxs("div",{children:[i.jsx("button",{onClick:h,disabled:t===1,children:"Prev"}),t>1&&i.jsx("button",{onClick:()=>o(t-1),children:t-1}),i.jsx("button",{disabled:!0,children:t}),t<192&&i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>o(t+1),children:t+1}),i.jsx("button",{disabled:!0,children:"..."})]}),i.jsx("button",{onClick:c,disabled:!s,children:"Next"})]})]})};export{E as default};
