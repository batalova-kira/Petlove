import{K as l,u as g,b as O,a as j,A as P,r as E,j as f,i as p}from"./index-wfZHrsBa.js";const K=t=>t.modal.modalData,L=(t,e)=>t.modal.modals[e];var y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=l.createContext&&l.createContext(y),$=["attr","size","title"];function C(t,e){if(t==null)return{};var r=N(t,e),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function N(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(this,arguments)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(n){D(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function D(t,e,r){return e=M(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function M(t){var e=k(t,"string");return typeof e=="symbol"?e:e+""}function k(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function v(t){return t&&t.map((e,r)=>l.createElement(e.tag,m({key:r},e.attr),v(e.child)))}function z(t){return e=>l.createElement(S,d({attr:m({},t.attr)},e),v(t.child))}function S(t){var e=r=>{var{attr:n,size:o,title:a}=t,s=C(t,$),u=o||r.size||"1em",i;return r.className&&(i=r.className),t.className&&(i=(i?i+" ":"")+t.className),l.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:i,style:m(m({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&l.createElement("title",null,a),t.children)};return h!==void 0?l.createElement(h.Consumer,null,r=>e(r)):e(y)}function _(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const W=g.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${t=>t.theme.colors.modalGrey};
    &:hover {
        cursor: pointer;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: ${t=>t.$styles.modalPadding||"40px 28px"};
        max-width: ${t=>t.$styles.modalWidth||"335px"};
        width: 100%;
        background-color: ${t=>t.theme.colors.secondBackground};
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &:hover {
            cursor: auto;
        }

        @media only screen and (min-width: ${O.medium}) {
            padding: ${t=>t.$styles.mediumModalPadding||"40px 72px"};
            max-width: ${t=>t.$styles.mediumModalWidth||"473px"};
        }
    }
`,B=g(_)`
    fill: ${t=>t.theme.colors.black};

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
        fill: ${t=>t.theme.colors.yellow};
    }

`;g.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${t=>t.theme.colors.black};
`;const A=({title:t,isOpen:e,children:r,navigateTo:n,$styles:o,modalId:a})=>{const s=j(),u=P();E.useEffect(()=>{const c=x=>{x.code==="Escape"&&s(p(a))};return e&&(window.addEventListener("keydown",c),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",c),document.body.style.overflow="auto"}},[s,e,t,r,a]);const i=c=>{c.target===c.currentTarget&&s(p(a))},w=()=>{s(p(a)),n&&u(n)};return e&&f.jsx(W,{onClick:i,$styles:o,children:f.jsxs("div",{className:"modal",children:[f.jsx(B,{onClick:w}),r]})})};export{A as M,L as a,K as s};
