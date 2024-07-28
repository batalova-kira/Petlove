import{u as t,b as i,k as n,N as r}from"./index-CDKA4die.js";const s=t.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }

    @media only screen and (min-width: 1280px) {
        margin-right: -32px;
        padding: 118px 84px;

        width: 592px;
    }
`,p=t.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${i.medium}) {
        margin-bottom: 32px;

        font-size: 18px;
        line-height: 1.22;
    }
`,l=t.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: ${i.medium}) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,d=t.input`
    width: 100%;
    padding: 12px;

    border: 1px solid ${e=>e.theme.colors.borderGrey};
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.mediumGrey};

    ::placeholder {
        color: ${e=>e.theme.colors.lightGrey};
    }

    &:focus {
        border-color: ${e=>e.theme.colors.yellow};
        outline: none;
    }

    &.error {
        border-color: ${e=>e.theme.colors.red};
    }

    ${({$isinvalid:e})=>e&&n`
            border-color: ${o=>o.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&n`
            border-color: ${o=>o.theme.colors.green};
        `}

        @media only screen and (min-width: ${i.medium}) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,m=t.div`
    position: relative;
    width: 100%;
`,c=t.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,h=t.div`
    position: absolute;
    top: 19px;
    right: 42px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 46px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,x=t.div`
    position: absolute;
    top: 19px;
    right: 16px;

    display: flex;
    align-items: center;
    transform: translateY(-35%);
    transition: all var(--primary-transition);
    fill: ${e=>e.theme.colors.yellow};

    svg {
        width: 18px;
        height: 18px;
    }

    @media only screen and (min-width: ${i.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,g=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,f=t.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: ${i.medium}) {
        margin-left: 16px;
    }
`,u=t.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 30px;
    padding: 12px 0;
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${i.medium}) {
        padding: 16px 0;
        margin-bottom: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,w=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,y=t.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: ${i.medium}) {
        font-size: 14px;
        line-height: 1.43;
    }
`,b=t(r)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;export{b as A,u as B,g as E,d as F,m as I,s as L,y as T,f as V,l as W,p as a,c as b,x as c,h as d,w as e};
