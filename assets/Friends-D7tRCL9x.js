import{u as i,b as r,j as s,a as o,c as a,r as d,e as c}from"./index-U9GKpFRi.js";import{a as m}from"./HomePage.styled-MuCkmV_t.js";const l=i(m)`
    margin-bottom: 40px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${r.medium}) {
        margin-bottom: 44px;

        font-size: 54px;
    }

    @media only screen and (min-width: ${r.large}) {
        margin-bottom: 60px;

        /* font-size: 90px; */
    }
`,p=e=>e.friends.friends,x=({item:e})=>{const{title:t}=e;return s.jsx("div",{children:s.jsx("p",{children:t})},e._id)},g=()=>{const e=o(),t=a(p);return d.useEffect(()=>{e(c())},[]),s.jsxs(s.Fragment,{children:[s.jsx(l,{children:"Our friends"}),s.jsx(s.Fragment,{children:t.map(n=>s.jsx(x,{item:n},n._id))})]})};export{g as default};
