import{u as o,j as e}from"./index-yxfXBHm5.js";const r="/petlove/shape_bcgr_mob2.png",t=o.div`
    width: 100%;
    height: 100%;
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${n=>n.theme.colors.yellow};
`,i=o.div`
    width: 316px;
    height: 390px;

    position: absolute;
    top: -35px;
    left: 20px;

    background: url(${r}) no-repeat center center;
    background-size: contain;
    z-index: 1;
`,s=o.div`
    display: inline-block;

    position: absolute;

    z-index: 2;
`,c=({children:n})=>e.jsxs(t,{children:[e.jsx(i,{}),e.jsx(s,{children:n})]}),d="/petlove/assets/dog_hero_mob_x1-Bzx4Apj5.png",a="/petlove/assets/dog_hero_mob_x2-hKHQK26K.png",p=o.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 1;

    @media (max-width: 767px) {
        background: url(${d}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${a}) no-repeat center center;
            background-size: cover;
        }
    }
`,x=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:e.jsx(p,{})})});export{x as default};
