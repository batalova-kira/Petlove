import{u as i,j as n,a as h,b as l,r as p,c as m,f as a}from"./index-CL28W6qZ.js";const w=e=>e.news.news,g=e=>e.news.currentPage,u=e=>e.news.hasMore,b=i.div`
    max-width: 335px;
    border: 1px solid red;

    @media only screen and (min-width: 768px) {
        max-width: 340px;
    }
`,j=i.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 28px;
    }
`,f=i.img`
    width: 100%;
    height: 190px;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: 768px) {
        height: 226px;
    }
`,N=i.h2`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: 768px) {
    }
`,y=i.p`
    margin-bottom: 19px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: 768px) {
    }
`,v=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media only screen and (min-width: 768px) {
    } */
`,C=i.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
    }
`,k=i.button`
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
`,P=({newsItem:e})=>{const{title:c,text:t,date:s,imgUrl:o}=e,d=s.slice(0,10).replace(/-/g,"/");return n.jsx("li",{children:n.jsxs(b,{children:[n.jsx(j,{children:n.jsx(f,{src:o,alt:"Image of news"})}),n.jsx(N,{children:c}),n.jsx(y,{children:t}),n.jsxs(v,{children:[n.jsx(C,{children:d}),n.jsx(k,{children:"Read more"})]})]})},e._id)},z=i.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
    }
`,$=()=>{const e=h(),c=l(w),t=l(g),s=l(u);p.useEffect(()=>{e(m()),e(a({page:1,limit:6}))},[e]);const o=r=>{e(a({page:r,limit:6}))},d=()=>{s&&e(a({page:t+1,limit:6}))},x=()=>{t>1&&e(a({page:t-1,limit:6}))};return n.jsxs("div",{children:[n.jsx(z,{children:c.map(r=>n.jsx(P,{newsItem:r},r._id))}),n.jsxs("div",{children:[n.jsx("button",{onClick:x,disabled:t===1,children:"Prev"}),t>1&&n.jsx("button",{onClick:()=>o(t-1),children:t-1}),n.jsx("button",{disabled:!0,children:t}),t<192&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>o(t+1),children:t+1}),n.jsx("button",{disabled:!0,children:"..."})]}),n.jsx("button",{onClick:d,disabled:!s,children:"Next"})]})]})};export{$ as default};
