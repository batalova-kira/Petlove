import{u as t,b as n,j as i,I as b,a as v,c as u,r as $,e as P,g as c}from"./index-CF_oQxaD.js";import{F as k}from"./Friends.styled-D8d01BT6.js";import{P as B}from"./Pagination-CdbvX4cs.js";import"./HomePage.styled-xV1yF-Mk.js";const z=e=>e.notices.notices,M=e=>e.notices.currentPage,C=e=>e.notices.hasMore,F=e=>e.notices.totalPages,W=t.li`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 335px;
    padding: 24px;
    border-radius: 16px;

    background-color: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: ${n.medium}) {
        width: 342px;
        height: 444px;
    }

    @media only screen and (min-width: ${n.large}) {
        width: 362px;
    }
`,I=t.div`
    width: 287px;
    height: 178px;
    border-radius: 16px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${n.medium}) {
        width: 294px;
    }

    @media only screen and (min-width: ${n.large}) {
        width: 315px;
    }
`,L=t.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,S=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,T=t.p`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${n.medium}) {
        font-size: 18px;
        line-height: 1.33;
    }
`,Y=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    @media only screen and (min-width: ${n.medium}) {
        gap: 2px;
    }

    @media only screen and (min-width: ${n.large}) {
        gap: 4px;
    }
`,E=t.div`
    display: flex;
    align-items: center;

    color: ${e=>e.theme.colors.secondaryYellow};
`,H=t.span`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryBlack};

    @media only screen and (min-width: ${n.medium}) {
        line-height: 1.43;
    }
`,R=t.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 16px;

    @media only screen and (min-width: ${n.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${n.large}) {
        gap: 20px;
    }
`,d=t.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,l=t.p`
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,p=t.span`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,_=t.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryBlack};
`,A=t.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: auto;
`,D=t.button`
    padding: 14px 80px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${e=>e.theme.colors.secondBackground};
    background-color: ${e=>e.theme.colors.yellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.colors.secondaryHoverYellow};
    }

    @media only screen and (min-width: ${n.medium}) {
        padding: 14px 78px;

        font-size: 16px;
        line-height: 1.25;
        letter-spacing: -0.03em;
    }

    @media only screen and (min-width: ${n.large}) {
        padding: 14px 88px;
    }
`,G=t.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px;

    color: ${e=>e.theme.colors.yellow};
    background-color: ${e=>e.theme.colors.lightYellow};
    border: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.colors.hoverYellow};
    }

    @media only screen and (min-width: ${n.medium}) {
        padding: 15px;
    }
`,U=({noticesItem:e})=>{const{title:h,imgURL:m,popularity:x,_id:a,name:r,birthday:g,sex:s,species:f,category:w,comment:y}=e,j=g.replace(/-/g,".");return i.jsxs(W,{children:[i.jsx(I,{children:i.jsx(L,{src:m,alt:h})}),i.jsxs("div",{children:[i.jsxs(S,{children:[i.jsx(T,{children:h}),i.jsxs(Y,{children:[i.jsx(E,{children:i.jsx(b,{name:"star",width:16,height:16})}),i.jsx(H,{children:x})]})]}),i.jsxs(R,{children:[i.jsxs(d,{children:[i.jsx(l,{children:"Name"}),i.jsx(p,{children:r})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Birthday"}),i.jsx(p,{children:j})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Sex"}),i.jsx(p,{children:s})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Species"}),i.jsx(p,{children:f})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Category"}),i.jsx(p,{children:w})]})]}),i.jsx(_,{children:y})]}),i.jsxs(A,{children:[i.jsx(D,{children:"Learn more"}),i.jsx(G,{children:i.jsx(b,{name:"favorite-heart",width:18,height:18})})]})]},a)},q=t.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 44px;

    @media only screen and (min-width: ${n.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 60px;
    }

    @media only screen and (min-width: ${n.large}) {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 32px;
    }
`,V=()=>{const e=v(),h=u(z),m=u(M),x=u(C),a=u(F),r=6,[g,s]=$.useState(1);$.useEffect(()=>{e(P()),e(c({page:1,limit:r}))},[e,r]);const f=o=>{s(o),e(c({page:o,limit:r}))},w=()=>{if(x){const o=g+1;s(o),e(c({page:o,limit:r}))}},y=()=>{if(m>1){const o=g-1;s(o),e(c({page:o,limit:r}))}},j=()=>{s(1),e(c({page:1,limit:r}))},N=()=>{s(a),e(c({page:a,limit:r}))};return i.jsxs(i.Fragment,{children:[i.jsx(k,{children:"Find your favorite pet"}),i.jsx(q,{children:h.map(o=>i.jsx(U,{noticesItem:o},o._id))}),i.jsx(B,{currentPage:m,handleCurrentPage:f,handleNextPage:w,handlePrevPage:y,handleFirstPage:j,handleLastPage:N,hasMore:x,maxPages:a})]})};export{V as default};
