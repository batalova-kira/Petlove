import{u as o,j as e}from"./index-yBxZJKgr.js";const n="/petlove/shape_bcgr_mob1.png",r="/petlove/shape_bcgr_tab1.png",i=o.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${t=>t.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }
`,a=o.div`
    width: 316px;
    height: 390px;

    position: absolute;
    top: -35px;
    left: 20px;

    background: url(${n}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        /* width: 500px;
        height: 715px; */
        width: 100%;
        height: 100%;

        position: absolute;
        /* top: -185px; */
        /* left: 150px;
        bottom: 0; */
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);

        background: url(${r}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,d=o.div`
    display: inline-block;

    position: absolute;

    z-index: 2;
`,c=({children:t})=>e.jsxs(i,{children:[e.jsx(a,{}),e.jsx(d,{children:t})]}),p="/petlove/images/dog_hero_mob_x1.png",s="/petlove/images/dog_hero_mob_x2.png",g=o.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 1;

    @media (max-width: 767px) {
        background: url(${p}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${s}) no-repeat center center;
            background-size: cover;
        }
    }
`,x=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:e.jsx(g,{})})});export{x as default};
