import{u as t,b as n,j as e,a as g,c as u,r as f,e as y}from"./index-Cge4GHqC.js";import{a as $}from"./HomePage.styled-C5S98DqA.js";const b=t($)`
    margin-bottom: 40px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${i=>i.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        margin-bottom: 44px;

        font-size: 54px;
    }

    @media only screen and (min-width: ${n.large}) {
        margin-bottom: 60px;

        /* font-size: 90px; */
    }
`,j=t.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: ${n.medium}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 32px;
        column-gap: 24px;
        margin-bottom: 60px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* flex-direction: row;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 34px; */
    }
`,k=i=>i.friends.friends,F=t.li`
    position: relative;
    max-width: 335px;
    width: 100%;
    padding: 40px 20px;

    border-radius: 15px;
    background: ${i=>i.theme.colors.secondBackground};

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,v=t.div`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px;

    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;

    border-radius: 30px;
    color: ${i=>i.theme.colors.yellow};
    background: ${i=>i.theme.colors.lightYellow};

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,W=t.div`
    display: flex;
    flex-direction: row;
    gap: 14px;

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,z=t.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover; /* Масштабує фон до розміру контейнера */
    background-position: center; /* Центрує зображення всередині контейнера */
    background-repeat: no-repeat;

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,T=t.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    display: block;

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,D=t.h3`
    margin-bottom: 14px;

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.04em;
    color: ${i=>i.theme.colors.black};

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,H=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,a=t.p`
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${i=>i.theme.colors.lightGrey};

    @media only screen and (min-width: ${n.medium}) {
        /* max-width: 340px;
        width: 340px;
        height: 476px; */
    }

    @media only screen and (min-width: ${n.large}) {
        /* max-width: 361px;
        width: 361px; */
    }
`,s=t.span`
    color: ${i=>i.theme.colors.black};
`,A=({item:i})=>{const{title:r,workDays:d,imageUrl:c,address:h,phone:x,email:l}=i,p=d?(w=>{const o=w.find(m=>m.from&&m.to);return o?`${o.from} - ${o.to}`:null})(d):null;return e.jsxs(F,{children:[e.jsx(v,{children:p?e.jsx("p",{children:p}):e.jsx("p",{children:"Day and night"})}),e.jsxs(W,{children:[e.jsx(z,{children:e.jsx(T,{src:c,alt:r})}),e.jsxs("div",{children:[e.jsx(D,{children:r}),e.jsxs(H,{children:[e.jsxs(a,{children:["Email:"," ",e.jsx(s,{children:l||"website only"})]}),e.jsxs(a,{children:["Address:"," ",e.jsx(s,{children:h||"website only"})]}),e.jsxs(a,{children:["Phone:"," ",e.jsx(s,{children:x||"email only"})]})]})]})]})]},i._id)},_=()=>{const i=g(),r=u(k);return f.useEffect(()=>{i(y())},[]),e.jsxs(e.Fragment,{children:[e.jsx(b,{children:"Our friends"}),e.jsx(j,{children:r.map(d=>e.jsx(A,{item:d},d._id))})]})};export{_ as default};
