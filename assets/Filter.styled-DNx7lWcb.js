import{u as e,b as i}from"./index-CV7praCy.js";const t=e.form`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: ${({$isNoticesPage:o})=>o?"12px":"24px"};
    width: 100%;

    @media only screen and (min-width: ${i.medium}) {
        width: ${({$isNoticesPage:o})=>o?"265px":"230px"};
        margin-bottom: 0;
    }
`,d=e.input`
    width: 100%;
    padding: 12px;

    border: ${({$isNoticesPage:o,theme:r})=>o?"none":`1px solid ${r.colors.borderGrey}`};
    border-radius: 30px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;

    color: ${({$isNoticesPage:o,theme:r})=>o?r.colors.black:r.colors.mediumGrey};
    background: ${({$isNoticesPage:o,theme:r})=>o?r.colors.secondBackground:"transparent"};

    &::placeholder {
        color: ${({$isNoticesPage:o,theme:r})=>o?r.colors.black:r.colors.lightGrey};
    }

    &:focus {
        border-color: ${o=>o.theme.colors.yellow};
        outline: none;
    }

    &.error {
        border-color: ${o=>o.theme.colors.red};
    }

    @media only screen and (min-width: ${i.medium}) {
        /* padding: 14px; */
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,l=e.button`
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    @media only screen and (min-width: ${i.medium}) {
        position: absolute;
        top: 15px;
        right: 14px;
    }
`;export{l as B,d as I,t as W};
