import{u as n,b as e}from"./index-BQT_Z7W9.js";const t="/petlove/images/bgr_home_mob_x1.webp",r="/petlove/images/bgr_home_mob_x2.webp",i="/petlove/images/bgr_home_tab_x1.webp",a="/petlove/images/bgr_home_tab_x2.webp",d="/petlove/images/bgr_home_desk_x1.webp",m="/petlove/images/bgr_home_desk_x2.webp",c=n.div`
    padding: 50px 20px;
    padding-top: 118px;
    margin-top: -70px;
    border-radius: 30px;
    width: 100%;
    background: ${o=>o.theme.colors.yellow};

    @media only screen and (min-width: ${e.medium}) {
        margin-top: -100px;
        padding: 44px 32px;
        padding-top: 178px;

        border-radius: 60px;
    }
    @media only screen and (min-width: ${e.large}) {
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 73px;

        padding: 32px 64px;
        padding-top: 178px;
    }
`,s=n.h2`
    margin-bottom: 24px;

    font-weight: var(--font-weight-bold);
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: ${o=>o.theme.colors.secondBackground};

    @media only screen and (min-width: ${e.medium}) {
        margin-bottom: 32px;

        font-size: 80px;
    }

    @media only screen and (min-width: ${e.large}) {
        margin-bottom: 0px;

        font-size: 90px;
    }
`,g=n.span`
    color: ${o=>o.theme.colors.accentWhite};
`,l=n.p`
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media only screen and (min-width: ${e.medium}) {
        max-width: 255px;
        margin-left: auto;
        font-size: 18px;
        line-height: 1.22;
    }
`,x=n.div`
    width: 335px;
    height: 402px;
    border-radius: 30px;

    background: url(${i}) no-repeat center center;
    background-size: contain;

    @media (max-width: 767px) {
        background: url(${t}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${r}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${e.medium}) {
        border-radius: 60px;
        width: 704px;
        height: 496px;

        background: url(${i}) no-repeat center center;
        background-size: cover;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${a}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${e.large}) {
        width: 1216px;
        height: 384px;

        background: url(${d}) no-repeat center center;
        background-size: cover;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${m}) no-repeat center center;
            background-size: cover;
        }
    }
`;export{c as H,s as a,g as b,l as c,x as d};
