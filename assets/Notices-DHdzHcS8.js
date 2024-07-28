import{u as o,b as c,j as t,I as b,a as v,c as u,r as N,e as $,g as s}from"./index-NvmLrmc2.js";import{F as k}from"./Friends.styled-CPib59kM.js";import{P as B}from"./Pagination-wfxUgqV8.js";import"./HomePage.styled-CVinke3x.js";const M=e=>e.notices.notices,C=e=>e.notices.currentPage,z=e=>e.notices.hasMore,F=e=>e.notices.totalPages,W=o.li`
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 335px;
    padding: 24px;
    border-radius: 16px;

    background-color: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${c.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${c.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,I=o.div`
    width: 287px;
    height: 178px;
    border-radius: 16px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${c.medium}) {
    }
`,L=o.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,S=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,T=o.p`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.secondaryBlack};
`,E=o.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`,R=o.div`
    display: flex;
    align-items: center;

    color: ${e=>e.theme.colors.secondaryYellow};

    /* @media only screen and (min-width: ${c.medium}) {
        svg {
            margin-left: -17px;
        }
    } */
`,H=o.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${e=>e.theme.colors.secondaryBlack};
`,Y=o.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 16px;
`,l=o.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,d=o.p`
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,p=o.span`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,_=o.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryBlack};
`,A=o.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`,D=o.button`
    padding: 14px 80px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${e=>e.theme.colors.secondBackground};
    background-color: ${e=>e.theme.colors.yellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;
`,G=o.button`
    padding: 14px;

    color: ${e=>e.theme.colors.yellow};
    background-color: ${e=>e.theme.colors.lightYellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;
`,U=({noticesItem:e})=>{const{title:x,imgURL:h,popularity:m,_id:a,name:r,birthday:g,sex:n,species:f,category:j,comment:w}=e,y=g.replace(/-/g,".");return t.jsxs(W,{children:[t.jsx(I,{children:t.jsx(L,{src:h,alt:x})}),t.jsxs("div",{children:[t.jsxs(S,{children:[t.jsx(T,{children:x}),t.jsxs(E,{children:[t.jsx(R,{children:t.jsx(b,{name:"star",width:16,height:16})}),t.jsx(H,{children:m})]})]}),t.jsxs(Y,{children:[t.jsxs(l,{children:[t.jsx(d,{children:"Name"}),t.jsx(p,{children:r})]}),t.jsxs(l,{children:[t.jsx(d,{children:"Birthday"}),t.jsx(p,{children:y})]}),t.jsxs(l,{children:[t.jsx(d,{children:"Sex"}),t.jsx(p,{children:n})]}),t.jsxs(l,{children:[t.jsx(d,{children:"Species"}),t.jsx(p,{children:f})]}),t.jsxs(l,{children:[t.jsx(d,{children:"Category"}),t.jsx(p,{children:j})]})]}),t.jsx(_,{children:w})]}),t.jsxs(A,{children:[t.jsx(D,{children:"Learn more"}),t.jsx(G,{children:t.jsx(b,{name:"favorite-heart",width:18,height:18})})]})]},a)},q=o.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${c.medium}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px; */
    }

    @media only screen and (min-width: ${c.large}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px; */
    }
`,V=()=>{const e=v(),x=u(M),h=u(C),m=u(z),a=u(F),r=6,[g,n]=N.useState(1);N.useEffect(()=>{e($()),e(s({page:1,limit:r}))},[e,r]);const f=i=>{n(i),e(s({page:i,limit:r}))},j=()=>{if(m){const i=g+1;n(i),e(s({page:i,limit:r}))}},w=()=>{if(h>1){const i=g-1;n(i),e(s({page:i,limit:r}))}},y=()=>{n(1),e(s({page:1,limit:r}))},P=()=>{n(a),e(s({page:a,limit:r}))};return t.jsxs(t.Fragment,{children:[t.jsx(k,{children:"Find your favorite pet"}),t.jsx(q,{children:x.map(i=>t.jsx(U,{noticesItem:i},i._id))}),t.jsx(B,{currentPage:h,handleCurrentPage:f,handleNextPage:j,handlePrevPage:w,handleFirstPage:y,handleLastPage:P,hasMore:m,maxPages:a})]})};export{V as default};
