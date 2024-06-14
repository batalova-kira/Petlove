import{u as w,j as m,a as We,N as vt,R as N,b as bt,l as _t}from"./index-Do9MRKsv.js";const wt="/petlove/shape_bcgr_mob1.png",kt="/petlove/shape_bcgr_tab1.png",Vt="/petlove/shape_bcgr_desk1.png",Ft=w.div`
    /* width: 100%;
    height: 100%; */
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: 768px) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }

    @media only screen and (min-width: 1280px) {
        margin-left: -32px;
        width: 590px;
        height: 654px;
    }
`,At=w.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${wt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${kt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${Vt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,Dt=w.div`
    display: inline-block;
`,Et=({children:e})=>m.jsxs(Ft,{children:[m.jsx(At,{}),m.jsx(Dt,{children:e})]}),St="/petlove/images/dog_hero_mob_x1.png",Tt="/petlove/images/dog_hero_mob_x2.png",$t="/petlove/images/dog_hero_tabx1.png",Lt="/petlove/images/dog_hero_tabx2.png",jt="/petlove/images/dog_hero_desk_x1.png",Ct="/petlove/images/dog_hero_desk_x2.png",zt=w.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: 768px) {
        gap: 16px;
    }

    @media only screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`,Rt=w.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${St}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Tt}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${$t}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Lt}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 1280px) {
        width: 512px;
        height: 660px;

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);

        background: url(${jt}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Ct}) no-repeat center center;
            background-size: cover;
        }
    }
`,Bt="/petlove/images/🐶avatar_dog.png",Ot="/petlove/images/🐶avatar_dog_x2.png",It=w.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 16px;

        position: absolute;
        bottom: 32px;
        left: 32px;

        width: 294px;
        height: 121px;
        border-radius: 20px;
        background: ${e=>e.theme.colors.secondBackground};
    }

    @media only screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 16px;

        position: absolute;
        bottom: 87px;
        left: 61px;
        z-index: 5;
    }
`,Ut=w.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Nt=w.div`
    width: 32px;
    height: 32px;
    background: url(${Bt}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${Ot}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,Mt=w.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Pt=w.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Ht=w.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Wt=w.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,qt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Xt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Gt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,Kt=()=>m.jsxs(It,{children:[m.jsx(Ut,{children:m.jsx(Nt,{})}),m.jsxs(Mt,{children:[m.jsxs(Pt,{children:[m.jsx(Ht,{children:"Rich"}),m.jsxs(Wt,{children:[m.jsx(qt,{children:"Birthday: "}),m.jsx(Xt,{children:"21.09.2020"})]})]}),m.jsx(Gt,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),Yt=w.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${e=>e.color||e.theme.colors.black};

    @media only screen and (min-width: 768px) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`,Zt=({text:e,color:s})=>m.jsx(Yt,{color:s,children:e}),Jt=w.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,Qt=w.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: 768px) {
        margin-bottom: 32px;

        font-size: 18px;
        line-height: 1.22;
    }
`,er=w.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,qe=w.input`
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

    ${e=>e.$isInvalid&&We`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${e=>e.$isValid&&We`
            border-color: ${s=>s.theme.colors.green};
        `}

        @media only screen and (min-width: 768px) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,Xe=w.p`
    margin-left: 12px;
    margin-top: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Ge=w.p`
    margin-left: 12px;
    margin-top: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,tr=w.button`
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

    @media only screen and (min-width: 768px) {
        padding: 16px 0;
        margin-bottom: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,rr=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,sr=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,ir=w(vt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var ue=e=>e.type==="checkbox",ne=e=>e instanceof Date,j=e=>e==null;const it=e=>typeof e=="object";var T=e=>!j(e)&&!Array.isArray(e)&&it(e)&&!ne(e),nr=e=>T(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,or=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ar=(e,s)=>e.has(or(s)),lr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(s=r?[]:{},!r&&!lr(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=U(e[l]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>e===void 0,f=(e,s,r)=>{if(!s||!T(e))return r;const l=fe(s.split(/[,[\].]+?/)).reduce((a,o)=>j(a)?a:a[o],e);return V(l)||l===e?V(e[s])?r:e[s]:l},Z=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),nt=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,s,r)=>{let l=-1;const a=Le(s)?[s]:nt(s),o=a.length,h=o-1;for(;++l<o;){const p=a[l];let $=r;if(l!==h){const B=e[p];$=T(B)||Array.isArray(B)?B:isNaN(+a[l+1])?{}:[]}if(p==="__proto__")return;e[p]=$,e=e[p]}return e};const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};N.createContext(null);var dr=(e,s,r,l=!0)=>{const a={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const h=o;return s._proxyFormState[h]!==P.all&&(s._proxyFormState[h]=!l||P.all),r&&(r[h]=!0),e[h]}});return a},R=e=>T(e)&&!Object.keys(e).length,cr=(e,s,r,l)=>{r(e);const{name:a,...o}=e;return R(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(h=>s[h]===(!l||P.all))},De=e=>Array.isArray(e)?e:[e];function ur(e){const s=N.useRef(e);s.current=e,N.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",fr=(e,s,r,l,a)=>H(e)?(l&&s.watch.add(e),f(r,e,a)):Array.isArray(e)?e.map(o=>(l&&s.watch.add(o),f(r,o))):(l&&(s.watchAll=!0),r),hr=(e,s,r,l,a)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:a||!0}}:{},Ye=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ze=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const ce=(e,s,r,l)=>{for(const a of r||Object.keys(e)){const o=f(e,a);if(o){const{_f:h,...p}=o;if(h){if(h.refs&&h.refs[0]&&s(h.refs[0],a)&&!l)break;if(h.ref&&s(h.ref,h.name)&&!l)break;ce(p,s)}else T(p)&&ce(p,s)}}};var gr=(e,s,r)=>{const l=fe(f(e,r));return k(l,"root",s[r]),k(e,r,l),e},je=e=>e.type==="file",J=e=>typeof e=="function",me=e=>{if(!$e)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),Ce=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const et={isValid:!1,value:null};var at=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,et):et;function tt(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||Z(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var ie=e=>T(e)&&!ve(e)?e:{value:e,message:""},rt=async(e,s,r,l,a)=>{const{ref:o,refs:h,required:p,maxLength:$,minLength:B,min:F,max:x,pattern:he,validate:G,name:C,valueAsNumber:we,mount:K,disabled:Y}=e._f,v=f(s,C);if(!K||Y)return{};const W=h?h[0]:o,q=y=>{l&&W.reportValidity&&(W.setCustomValidity(Z(y)?"":y||""),W.reportValidity())},D={},te=Ce(o),ge=ue(o),Q=te||ge,re=(we||je(o))&&V(o.value)&&V(v)||me(o)&&o.value===""||v===""||Array.isArray(v)&&!v.length,O=hr.bind(null,C,r,D),pe=(y,b,E,L=X.maxLength,M=X.minLength)=>{const I=y?b:E;D[C]={type:y?L:M,message:I,ref:o,...O(y?L:M,I)}};if(a?!Array.isArray(v)||!v.length:p&&(!Q&&(re||j(v))||Z(v)&&!v||ge&&!ot(h).isValid||te&&!at(h).isValid)){const{value:y,message:b}=xe(p)?{value:!!p,message:p}:ie(p);if(y&&(D[C]={type:X.required,message:b,ref:W,...O(X.required,b)},!r))return q(b),D}if(!re&&(!j(F)||!j(x))){let y,b;const E=ie(x),L=ie(F);if(!j(v)&&!isNaN(v)){const M=o.valueAsNumber||v&&+v;j(E.value)||(y=M>E.value),j(L.value)||(b=M<L.value)}else{const M=o.valueAsDate||new Date(v),I=le=>new Date(new Date().toDateString()+" "+le),oe=o.type=="time",ae=o.type=="week";H(E.value)&&v&&(y=oe?I(v)>I(E.value):ae?v>E.value:M>new Date(E.value)),H(L.value)&&v&&(b=oe?I(v)<I(L.value):ae?v<L.value:M<new Date(L.value))}if((y||b)&&(pe(!!y,E.message,L.message,X.max,X.min),!r))return q(D[C].message),D}if(($||B)&&!re&&(H(v)||a&&Array.isArray(v))){const y=ie($),b=ie(B),E=!j(y.value)&&v.length>+y.value,L=!j(b.value)&&v.length<+b.value;if((E||L)&&(pe(E,y.message,b.message),!r))return q(D[C].message),D}if(he&&!re&&H(v)){const{value:y,message:b}=ie(he);if(ve(y)&&!v.match(y)&&(D[C]={type:X.pattern,message:b,ref:o,...O(X.pattern,b)},!r))return q(b),D}if(G){if(J(G)){const y=await G(v,s),b=tt(y,W);if(b&&(D[C]={...b,...O(X.validate,b.message)},!r))return q(b.message),D}else if(T(G)){let y={};for(const b in G){if(!R(y)&&!r)break;const E=tt(await G[b](v,s),W,b);E&&(y={...E,...O(b,E.message)},q(E.message),r&&(D[C]=y))}if(!R(y)&&(D[C]={ref:W,...y},!r))return D}}return q(!0),D};function pr(e,s){const r=s.slice(0,-1).length;let l=0;for(;l<r;)e=V(e)?l++:e[s[l++]];return e}function yr(e){for(const s in e)if(e.hasOwnProperty(s)&&!V(e[s]))return!1;return!0}function S(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:nt(s),l=r.length===1?e:pr(e,r),a=r.length-1,o=r[a];return l&&delete l[o],a!==0&&(T(l)&&R(l)||Array.isArray(l)&&yr(l))&&S(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next&&o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}},be=e=>j(e)||!it(e);function ee(e,s){if(be(e)||be(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const r=Object.keys(e),l=Object.keys(s);if(r.length!==l.length)return!1;for(const a of r){const o=e[a];if(!l.includes(a))return!1;if(a!=="ref"){const h=s[a];if(ne(o)&&ne(h)||T(o)&&T(h)||Array.isArray(o)&&Array.isArray(h)?!ee(o,h):o!==h)return!1}}return!0}var lt=e=>e.type==="select-multiple",xr=e=>Ce(e)||ue(e),Se=e=>me(e)&&e.isConnected,dt=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(T(e)||r)for(const l in e)Array.isArray(e[l])||T(e[l])&&!dt(e[l])?(s[l]=Array.isArray(e[l])?[]:{},_e(e[l],s[l])):j(e[l])||(s[l]=!0);return s}function ct(e,s,r){const l=Array.isArray(e);if(T(e)||l)for(const a in e)Array.isArray(e[a])||T(e[a])&&!dt(e[a])?V(s)||be(r[a])?r[a]=Array.isArray(e[a])?_e(e[a],[]):{..._e(e[a])}:ct(e[a],j(s)?{}:s[a],r[a]):r[a]=!ee(e[a],s[a]);return r}var ye=(e,s)=>ct(e,s,_e(s)),ut=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:l})=>V(e)?e:s?e===""?NaN:e&&+e:r&&H(e)?new Date(e):l?l(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return je(s)?s.files:Ce(s)?at(e.refs).value:lt(s)?[...s.selectedOptions].map(({value:r})=>r):ue(s)?ot(e.refs).value:ut(V(s.value)?e.ref.value:s.value,e)}var mr=(e,s,r,l)=>{const a={};for(const o of e){const h=f(s,o);h&&k(a,o,h._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:l}},de=e=>V(e)?e:ve(e)?e.source:T(e)?ve(e.value)?e.value.source:e.value:e,vr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function st(e,s,r){const l=f(e,r);if(l||Le(r))return{error:l,name:r};const a=r.split(".");for(;a.length;){const o=a.join("."),h=f(s,o),p=f(e,o);if(h&&!Array.isArray(h)&&r!==o)return{name:r};if(p&&p.type)return{name:o,error:p};a.pop()}return{name:r}}var br=(e,s,r,l,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(s||e):(r?l.isOnBlur:a.isOnBlur)?!e:(r?l.isOnChange:a.isOnChange)?e:!0,_r=(e,s)=>!fe(f(e,s)).length&&S(e,s);const wr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function kr(e={}){let s={...wr,...e},r={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},a=T(s.defaultValues)||T(s.values)?U(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:U(a),h={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},$,B=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},he=Ye(s.mode),G=Ye(s.reValidateMode),C=s.criteriaMode===P.all,we=t=>i=>{clearTimeout(B),B=setTimeout(t,i)},K=async t=>{if(F.isValid||t){const i=s.resolver?R((await Q()).errors):await O(l,!0);i!==r.isValid&&x.state.next({isValid:i})}},Y=(t,i)=>{(F.isValidating||F.validatingFields)&&((t||Array.from(p.mount)).forEach(n=>{n&&(i?k(r.validatingFields,n,i):S(r.validatingFields,n))}),x.state.next({validatingFields:r.validatingFields,isValidating:!R(r.validatingFields)}))},v=(t,i=[],n,u,c=!0,d=!0)=>{if(u&&n){if(h.action=!0,d&&Array.isArray(f(l,t))){const g=n(f(l,t),u.argA,u.argB);c&&k(l,t,g)}if(d&&Array.isArray(f(r.errors,t))){const g=n(f(r.errors,t),u.argA,u.argB);c&&k(r.errors,t,g),_r(r.errors,t)}if(F.touchedFields&&d&&Array.isArray(f(r.touchedFields,t))){const g=n(f(r.touchedFields,t),u.argA,u.argB);c&&k(r.touchedFields,t,g)}F.dirtyFields&&(r.dirtyFields=ye(a,o)),x.state.next({name:t,isDirty:y(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(o,t,i)},W=(t,i)=>{k(r.errors,t,i),x.state.next({errors:r.errors})},q=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},D=(t,i,n,u)=>{const c=f(l,t);if(c){const d=f(o,t,V(n)?f(a,t):n);V(d)||u&&u.defaultChecked||i?k(o,t,i?d:Te(c._f)):L(t,d),h.mount&&K()}},te=(t,i,n,u,c)=>{let d=!1,g=!1;const _={name:t},A=!!(f(l,t)&&f(l,t)._f.disabled);if(!n||u){F.isDirty&&(g=r.isDirty,r.isDirty=_.isDirty=y(),d=g!==_.isDirty);const z=A||ee(f(a,t),i);g=!!(!A&&f(r.dirtyFields,t)),z||A?S(r.dirtyFields,t):k(r.dirtyFields,t,!0),_.dirtyFields=r.dirtyFields,d=d||F.dirtyFields&&g!==!z}if(n){const z=f(r.touchedFields,t);z||(k(r.touchedFields,t,n),_.touchedFields=r.touchedFields,d=d||F.touchedFields&&z!==n)}return d&&c&&x.state.next(_),d?_:{}},ge=(t,i,n,u)=>{const c=f(r.errors,t),d=F.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&n?($=we(()=>W(t,n)),$(e.delayError)):(clearTimeout(B),$=null,n?k(r.errors,t,n):S(r.errors,t)),(n?!ee(c,n):c)||!R(u)||d){const g={...u,...d&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},x.state.next(g)}},Q=async t=>{Y(t,!0);const i=await s.resolver(o,s.context,mr(t||p.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return Y(t),i},re=async t=>{const{errors:i}=await Q(t);if(t)for(const n of t){const u=f(i,n);u?k(r.errors,n,u):S(r.errors,n)}else r.errors=i;return i},O=async(t,i,n={valid:!0})=>{for(const u in t){const c=t[u];if(c){const{_f:d,...g}=c;if(d){const _=p.array.has(d.name);Y([u],!0);const A=await rt(c,o,C,s.shouldUseNativeValidation&&!i,_);if(Y([u]),A[d.name]&&(n.valid=!1,i))break;!i&&(f(A,d.name)?_?gr(r.errors,A,d.name):k(r.errors,d.name,A[d.name]):S(r.errors,d.name))}g&&await O(g,i,n)}}return n.valid},pe=()=>{for(const t of p.unMount){const i=f(l,t);i&&(i._f.refs?i._f.refs.every(n=>!Se(n)):!Se(i._f.ref))&&ke(t)}p.unMount=new Set},y=(t,i)=>(t&&i&&k(o,t,i),!ee(ze(),a)),b=(t,i,n)=>fr(t,p,{...h.mount?o:V(i)?a:H(t)?{[t]:i}:i},n,i),E=t=>fe(f(h.mount?o:a,t,e.shouldUnregister?f(a,t,[]):[])),L=(t,i,n={})=>{const u=f(l,t);let c=i;if(u){const d=u._f;d&&(!d.disabled&&k(o,t,ut(i,d)),c=me(d.ref)&&j(i)?"":i,lt(d.ref)?[...d.ref.options].forEach(g=>g.selected=c.includes(g.value)):d.refs?ue(d.ref)?d.refs.length>1?d.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(_=>_===g.value):c===g.value)):d.refs[0]&&(d.refs[0].checked=!!c):d.refs.forEach(g=>g.checked=g.value===c):je(d.ref)?d.ref.value="":(d.ref.value=c,d.ref.type||x.values.next({name:t,values:{...o}})))}(n.shouldDirty||n.shouldTouch)&&te(t,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&le(t)},M=(t,i,n)=>{for(const u in i){const c=i[u],d=`${t}.${u}`,g=f(l,d);(p.array.has(t)||!be(c)||g&&!g._f)&&!ne(c)?M(d,c,n):L(d,c,n)}},I=(t,i,n={})=>{const u=f(l,t),c=p.array.has(t),d=U(i);k(o,t,d),c?(x.array.next({name:t,values:{...o}}),(F.isDirty||F.dirtyFields)&&n.shouldDirty&&x.state.next({name:t,dirtyFields:ye(a,o),isDirty:y(t,d)})):u&&!u._f&&!j(d)?M(t,d,n):L(t,d,n),Ze(t,p)&&x.state.next({...r}),x.values.next({name:h.mount?t:void 0,values:{...o}})},oe=async t=>{h.mount=!0;const i=t.target;let n=i.name,u=!0;const c=f(l,n),d=()=>i.type?Te(c._f):nr(t),g=_=>{u=Number.isNaN(_)||_===f(o,n,_)};if(c){let _,A;const z=d(),se=t.type===Ke.BLUR||t.type===Ke.FOCUS_OUT,yt=!vr(c._f)&&!s.resolver&&!f(r.errors,n)&&!c._f.deps||br(se,f(r.touchedFields,n),r.isSubmitted,G,he),Fe=Ze(n,p,se);k(o,n,z),se?(c._f.onBlur&&c._f.onBlur(t),$&&$(0)):c._f.onChange&&c._f.onChange(t);const Ae=te(n,z,se,!1),xt=!R(Ae)||Fe;if(!se&&x.values.next({name:n,type:t.type,values:{...o}}),yt)return F.isValid&&K(),xt&&x.state.next({name:n,...Fe?{}:Ae});if(!se&&Fe&&x.state.next({...r}),s.resolver){const{errors:Pe}=await Q([n]);if(g(z),u){const mt=st(r.errors,l,n),He=st(Pe,l,mt.name||n);_=He.error,n=He.name,A=R(Pe)}}else Y([n],!0),_=(await rt(c,o,C,s.shouldUseNativeValidation))[n],Y([n]),g(z),u&&(_?A=!1:F.isValid&&(A=await O(l,!0)));u&&(c._f.deps&&le(c._f.deps),ge(n,A,_,Ae))}},ae=(t,i)=>{if(f(r.errors,i)&&t.focus)return t.focus(),1},le=async(t,i={})=>{let n,u;const c=De(t);if(s.resolver){const d=await re(V(t)?t:c);n=R(d),u=t?!c.some(g=>f(d,g)):n}else t?(u=(await Promise.all(c.map(async d=>{const g=f(l,d);return await O(g&&g._f?{[d]:g}:g)}))).every(Boolean),!(!u&&!r.isValid)&&K()):u=n=await O(l);return x.state.next({...!H(t)||F.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!u&&ce(l,ae,t?c:p.mount),u},ze=t=>{const i={...h.mount?o:a};return V(t)?i:H(t)?f(i,t):t.map(n=>f(i,n))},Re=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),isTouched:!!f((i||r).touchedFields,t),isValidating:!!f((i||r).validatingFields,t),error:f((i||r).errors,t)}),ft=t=>{t&&De(t).forEach(i=>S(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Be=(t,i,n)=>{const u=(f(l,t,{_f:{}})._f||{}).ref,c=f(r.errors,t)||{},{ref:d,message:g,type:_,...A}=c;k(r.errors,t,{...A,...i,ref:u}),x.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&u&&u.focus&&u.focus()},ht=(t,i)=>J(t)?x.values.subscribe({next:n=>t(b(void 0,i),n)}):b(t,i,!0),ke=(t,i={})=>{for(const n of t?De(t):p.mount)p.mount.delete(n),p.array.delete(n),i.keepValue||(S(l,n),S(o,n)),!i.keepError&&S(r.errors,n),!i.keepDirty&&S(r.dirtyFields,n),!i.keepTouched&&S(r.touchedFields,n),!i.keepIsValidating&&S(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&S(a,n);x.values.next({values:{...o}}),x.state.next({...r,...i.keepDirty?{isDirty:y()}:{}}),!i.keepIsValid&&K()},Oe=({disabled:t,name:i,field:n,fields:u,value:c})=>{if(Z(t)&&h.mount||t){const d=t?void 0:V(c)?Te(n?n._f:f(u,i)._f):c;k(o,i,d),te(i,d,!1,!1,!0)}},Ve=(t,i={})=>{let n=f(l,t);const u=Z(i.disabled);return k(l,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),p.mount.add(t),n?Oe({field:n,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...u?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:de(i.min),max:de(i.max),minLength:de(i.minLength),maxLength:de(i.maxLength),pattern:de(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:c=>{if(c){Ve(t,i),n=f(l,t);const d=V(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=xr(d),_=n._f.refs||[];if(g?_.find(A=>A===d):d===n._f.ref)return;k(l,t,{_f:{...n._f,...g?{refs:[..._.filter(Se),d,...Array.isArray(f(a,t))?[{}]:[]],ref:{type:d.type,name:t}}:{ref:d}}}),D(t,!1,void 0,d)}else n=f(l,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(ar(p.array,t)&&h.action)&&p.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&ce(l,ae,p.mount),gt=t=>{Z(t)&&(x.state.next({disabled:t}),ce(l,(i,n)=>{const u=f(l,n);u&&(i.disabled=u._f.disabled||t,Array.isArray(u._f.refs)&&u._f.refs.forEach(c=>{c.disabled=u._f.disabled||t}))},0,!1))},Ue=(t,i)=>async n=>{let u;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=U(o);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:g}=await Q();r.errors=d,c=g}else await O(l);if(S(r.errors,"root"),R(r.errors)){x.state.next({errors:{}});try{await t(c,n)}catch(d){u=d}}else i&&await i({...r.errors},n),Ie(),setTimeout(Ie);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&!u,submitCount:r.submitCount+1,errors:r.errors}),u)throw u},pt=(t,i={})=>{f(l,t)&&(V(i.defaultValue)?I(t,U(f(a,t))):(I(t,i.defaultValue),k(a,t,U(i.defaultValue))),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?y(t,U(f(a,t))):y()),i.keepError||(S(r.errors,t),F.isValid&&K()),x.state.next({...r}))},Ne=(t,i={})=>{const n=t?U(t):a,u=U(n),c=R(t),d=c?a:u;if(i.keepDefaultValues||(a=n),!i.keepValues){if(i.keepDirtyValues)for(const g of p.mount)f(r.dirtyFields,g)?k(d,g,f(o,g)):I(g,f(d,g));else{if($e&&V(t))for(const g of p.mount){const _=f(l,g);if(_&&_._f){const A=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(me(A)){const z=A.closest("form");if(z){z.reset();break}}}}l={}}o=e.shouldUnregister?i.keepDefaultValues?U(a):{}:U(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}p={mount:i.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,a)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&o?ye(a,o):r.dirtyFields:i.keepDefaultValues&&t?ye(a,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Me=(t,i)=>Ne(J(t)?t(o):t,i);return{control:{register:Ve,unregister:ke,getFieldState:Re,handleSubmit:Ue,setError:Be,_executeSchema:Q,_getWatch:b,_getDirty:y,_updateValid:K,_removeUnmounted:pe,_updateFieldArray:v,_updateDisabledField:Oe,_getFieldArray:E,_reset:Ne,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(t=>{Me(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:gt,_subjects:x,_proxyFormState:F,_setErrors:q,get _fields(){return l},get _formValues(){return o},get _state(){return h},set _state(t){h=t},get _defaultValues(){return a},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:le,register:Ve,handleSubmit:Ue,watch:ht,setValue:I,getValues:ze,reset:Me,resetField:pt,clearErrors:ft,unregister:ke,setError:Be,setFocus:(t,i={})=>{const n=f(l,t),u=n&&n._f;if(u){const c=u.refs?u.refs[0]:u.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Re}}function Vr(e={}){const s=N.useRef(),r=N.useRef(),[l,a]=N.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...kr(e),formState:l});const o=s.current.control;return o._options=e,ur({subject:o._subjects.state,next:h=>{cr(h,o._proxyFormState,o._updateFormState,!0)&&a({...o._formState})}}),N.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),N.useEffect(()=>{if(o._proxyFormState.isDirty){const h=o._getDirty();h!==l.isDirty&&o._subjects.state.next({isDirty:h})}},[o,l.isDirty]),N.useEffect(()=>{e.values&&!ee(e.values,r.current)?(o._reset(e.values,o._options.resetOptions),r.current=e.values,a(h=>({...h}))):o._resetDefaultValues()},[e.values,o]),N.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),N.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),N.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=dr(l,o),s.current}const Fr=()=>{const e=bt(),{register:s,handleSubmit:r,reset:l,formState:{errors:a,isValid:o}}=Vr({mode:"onBlur",defaultValues:{email:"",password:""}}),h=$=>{const B={email:$.email,password:$.password};e(_t(B)),console.log("Email:",$.email),console.log("Password:",$.password),l()},p=$=>{$.preventDefault(),r(h)()};return m.jsxs(Jt,{children:[m.jsx(Zt,{text:"Log in"}),m.jsx(Qt,{children:"Welcome! Please enter your credentials to login to the platform:"}),m.jsxs("form",{onSubmit:p,children:[m.jsxs(er,{children:[m.jsx(qe,{type:"email",placeholder:"Email",$isInvalid:a.email,$isValid:!a.email&&o,...s("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(a==null?void 0:a.email)&&m.jsx(Xe,{children:a==null?void 0:a.email.message}),o&&!(a!=null&&a.email)&&m.jsx(Ge,{isValid:!0,children:"Email successfully validated!"}),m.jsx(qe,{type:"password",placeholder:"Password",$isInvalid:a==null?void 0:a.password,$isValid:!(a!=null&&a.password)&&o,...s("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),(a==null?void 0:a.password)&&m.jsx(Xe,{children:a==null?void 0:a.password.message}),o&&!(a!=null&&a.password)&&m.jsx(Ge,{isValid:!0,children:"Password is secure"})]}),m.jsx(tr,{type:"submit",disabled:!o,children:"Log in"}),m.jsx(rr,{children:m.jsxs(sr,{children:["Don’t have an account?"," ",m.jsxs(ir,{to:"/registration",children:[" ","Register"]})]})})]})]})},Tr=()=>m.jsxs(zt,{children:[m.jsxs(Et,{children:[m.jsx(Rt,{}),m.jsx(Kt,{})]}),m.jsx(Fr,{})]});export{Tr as default};
