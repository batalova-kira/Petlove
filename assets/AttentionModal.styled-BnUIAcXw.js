import{E as s,u as a,b as O,a as $,A as j,r as P,j as g,i as h,N as k}from"./index-BAldPBw7.js";const T=e=>e.modal.modalData,Y=(e,t)=>e.modal.modals[t];var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=s.createContext&&s.createContext(x),E=["attr","size","title"];function z(e,t){if(e==null)return{};var r=C(e,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function C(e,t){if(e==null)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(o){N(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function N(e,t,r){return t=W(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=A(e,"string");return typeof t=="symbol"?t:t+""}function A(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v(e){return e&&e.map((t,r)=>s.createElement(t.tag,m({key:r},t.attr),v(t.child)))}function M(e){return t=>s.createElement(S,p({attr:m({},e.attr)},t),v(e.child))}function S(e){var t=r=>{var{attr:o,size:n,title:i}=e,c=z(e,E),u=n||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,c,{className:l,style:m(m({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return f!==void 0?s.createElement(f.Consumer,null,r=>t(r)):t(x)}function B(e){return M({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const D=a.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${e=>e.theme.colors.modalGrey};
    &:hover {
        cursor: pointer;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: ${e=>e.$styles.modalPadding||"40px 28px"};
        max-width: ${e=>e.$styles.modalWidth||"335px"};
        width: 100%;
        background-color: ${e=>e.theme.colors.secondBackground};
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &:hover {
            cursor: auto;
        }

        @media only screen and (min-width: ${O.medium}) {
            padding: ${e=>e.$styles.mediumModalPadding||"40px 72px"};
            max-width: ${e=>e.$styles.mediumModalWidth||"473px"};
        }
    }
`,_=a(B)`
    fill: ${e=>e.theme.colors.black};

    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 24px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);

    &:hover {
        /* transform: rotate(90deg); */
        fill: ${e=>e.theme.colors.yellow};
    }

`;a.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${e=>e.theme.colors.black};
`;const I=({title:e,isOpen:t,children:r,navigateTo:o,$styles:n,modalId:i})=>{const c=$(),u=j();P.useEffect(()=>{const d=w=>{w.code==="Escape"&&c(h(i))};return t&&(window.addEventListener("keydown",d),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}},[c,t,e,r,i]);const l=d=>{d.target===d.currentTarget&&c(h(i))},y=()=>{c(h(i)),o&&u(o)};return t&&g.jsx(D,{onClick:l,$styles:n,children:g.jsxs("div",{className:"modal",children:[g.jsx(_,{onClick:y}),r]})})},G={modalWidth:"335px",modalPadding:"40px 20px",mediumModalWidth:"466px",mediumModalPadding:"60px"},K=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.lightYellow};
`,q=a.div`
    width: 44px;
    height: 44px;
    background: url(${e=>e.$avatarSrc}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${e=>e.$avatarSrc2x}) no-repeat center
            center;
        background-size: cover;
        z-index: 20;
    }
`,F=a.h3`
    margin-bottom: 20px;

    font-weight: var(--font-weight-bold);
    font-size: 20px;

    line-height: 1;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,H=a.p`
margin-bottom: 24px;

    font-size: 14px;

    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryBlack};
`,J=a.div`
display:flex;
flex-direction:row;
gap: 8px;
`,L=a(k)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 30px;
    border: 1px solid ${e=>e.theme.colors.borderWhite};
    padding: 12px 48px;

    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};

    &:hover {
        cursor: pointer;
        border: none;
        background: ${e=>e.theme.colors.lightYellow};
        color: ${e=>e.theme.colors.yellow};
    }
`,Q=a(L)`
    padding: 12px 24px;

    color: ${e=>e.theme.colors.yellow};
    background: ${e=>e.theme.colors.lightYellow};

    &:hover {
        cursor: pointer;
        border: none;
        background: ${e=>e.theme.colors.yellow};
        color: ${e=>e.theme.colors.lightYellow};
    }
`;export{q as A,L,I as M,Q as R,K as W,G as a,F as b,H as c,J as d,Y as e,T as s};
