import{u as w,j as m,a as We,N as vt,R as I}from"./index-BbYvF8zk.js";const bt="/petlove/shape_bcgr_mob1.png",_t="/petlove/shape_bcgr_tab1.png",wt="/petlove/shape_bcgr_desk1.png",kt=w.div`
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
`,Vt=w.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${bt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${_t}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${wt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,Ft=w.div`
    display: inline-block;
`,At=({children:e})=>m.jsxs(kt,{children:[m.jsx(Vt,{}),m.jsx(Ft,{children:e})]}),Dt="/petlove/images/dog_hero_mob_x1.png",Et="/petlove/images/dog_hero_mob_x2.png",St="/petlove/images/dog_hero_tabx1.png",Tt="/petlove/images/dog_hero_tabx2.png",$t="/petlove/images/dog_hero_desk_x1.png",Lt="/petlove/images/dog_hero_desk_x2.png",jt=w.div`
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
`,Ct=w.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${Dt}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Et}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${St}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Tt}) no-repeat center center;
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

        background: url(${$t}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Lt}) no-repeat center center;
            background-size: cover;
        }
    }
`,zt="/petlove/images/🐶avatar_dog.png",Rt="/petlove/images/🐶avatar_dog_x2.png",Bt=w.div`
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
`,Ot=w.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,It=w.div`
    width: 32px;
    height: 32px;
    background: url(${zt}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${Rt}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,Ut=w.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Nt=w.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Mt=w.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Pt=w.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Ht=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Wt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,qt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,Xt=()=>m.jsxs(Bt,{children:[m.jsx(Ot,{children:m.jsx(It,{})}),m.jsxs(Ut,{children:[m.jsxs(Nt,{children:[m.jsx(Mt,{children:"Rich"}),m.jsxs(Pt,{children:[m.jsx(Ht,{children:"Birthday: "}),m.jsx(Wt,{children:"21.09.2020"})]})]}),m.jsx(qt,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),Gt=w.h1`
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
`,Kt=({text:e,color:s})=>m.jsx(Gt,{color:s,children:e}),Yt=w.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,Zt=w.div`
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
`,Jt=w.div`
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
`,Qt=w.button`
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
`,er=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,tr=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,rr=w(vt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var ue=e=>e.type==="checkbox",ne=e=>e instanceof Date,L=e=>e==null;const it=e=>typeof e=="object";var T=e=>!L(e)&&!Array.isArray(e)&&it(e)&&!ne(e),sr=e=>T(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,ir=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,nr=(e,s)=>e.has(ir(s)),or=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(s=r?[]:{},!r&&!or(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=O(e[n]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>e===void 0,f=(e,s,r)=>{if(!s||!T(e))return r;const n=fe(s.split(/[,[\].]+?/)).reduce((l,a)=>L(l)?l:l[a],e);return V(n)||n===e?V(e[s])?r:e[s]:n},Z=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),nt=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,s,r)=>{let n=-1;const l=Le(s)?[s]:nt(s),a=l.length,g=a-1;for(;++n<a;){const p=l[n];let U=r;if(n!==g){const P=e[p];U=T(P)||Array.isArray(P)?P:isNaN(+l[n+1])?{}:[]}if(p==="__proto__")return;e[p]=U,e=e[p]}return e};const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},M={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};I.createContext(null);var ar=(e,s,r,n=!0)=>{const l={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const g=a;return s._proxyFormState[g]!==M.all&&(s._proxyFormState[g]=!n||M.all),r&&(r[g]=!0),e[g]}});return l},z=e=>T(e)&&!Object.keys(e).length,lr=(e,s,r,n)=>{r(e);const{name:l,...a}=e;return z(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(g=>s[g]===(!n||M.all))},De=e=>Array.isArray(e)?e:[e];function dr(e){const s=I.useRef(e);s.current=e,I.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",cr=(e,s,r,n,l)=>H(e)?(n&&s.watch.add(e),f(r,e,l)):Array.isArray(e)?e.map(a=>(n&&s.watch.add(a),f(r,a))):(n&&(s.watchAll=!0),r),ur=(e,s,r,n,l)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:l||!0}}:{},Ye=e=>({isOnSubmit:!e||e===M.onSubmit,isOnBlur:e===M.onBlur,isOnChange:e===M.onChange,isOnAll:e===M.all,isOnTouch:e===M.onTouched}),Ze=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ce=(e,s,r,n)=>{for(const l of r||Object.keys(e)){const a=f(e,l);if(a){const{_f:g,...p}=a;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],l)&&!n)break;if(g.ref&&s(g.ref,g.name)&&!n)break;ce(p,s)}else T(p)&&ce(p,s)}}};var fr=(e,s,r)=>{const n=fe(f(e,r));return k(n,"root",s[r]),k(e,r,n),e},je=e=>e.type==="file",J=e=>typeof e=="function",me=e=>{if(!$e)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),Ce=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const et={isValid:!1,value:null};var at=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,et):et;function tt(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||Z(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var ie=e=>T(e)&&!ve(e)?e:{value:e,message:""},rt=async(e,s,r,n,l)=>{const{ref:a,refs:g,required:p,maxLength:U,minLength:P,min:F,max:x,pattern:ge,validate:G,name:j,valueAsNumber:we,mount:K,disabled:Y}=e._f,v=f(s,j);if(!K||Y)return{};const W=g?g[0]:a,q=y=>{n&&W.reportValidity&&(W.setCustomValidity(Z(y)?"":y||""),W.reportValidity())},D={},te=Ce(a),he=ue(a),Q=te||he,re=(we||je(a))&&V(a.value)&&V(v)||me(a)&&a.value===""||v===""||Array.isArray(v)&&!v.length,R=ur.bind(null,j,r,D),pe=(y,b,E,$=X.maxLength,N=X.minLength)=>{const B=y?b:E;D[j]={type:y?$:N,message:B,ref:a,...R(y?$:N,B)}};if(l?!Array.isArray(v)||!v.length:p&&(!Q&&(re||L(v))||Z(v)&&!v||he&&!ot(g).isValid||te&&!at(g).isValid)){const{value:y,message:b}=xe(p)?{value:!!p,message:p}:ie(p);if(y&&(D[j]={type:X.required,message:b,ref:W,...R(X.required,b)},!r))return q(b),D}if(!re&&(!L(F)||!L(x))){let y,b;const E=ie(x),$=ie(F);if(!L(v)&&!isNaN(v)){const N=a.valueAsNumber||v&&+v;L(E.value)||(y=N>E.value),L($.value)||(b=N<$.value)}else{const N=a.valueAsDate||new Date(v),B=le=>new Date(new Date().toDateString()+" "+le),oe=a.type=="time",ae=a.type=="week";H(E.value)&&v&&(y=oe?B(v)>B(E.value):ae?v>E.value:N>new Date(E.value)),H($.value)&&v&&(b=oe?B(v)<B($.value):ae?v<$.value:N<new Date($.value))}if((y||b)&&(pe(!!y,E.message,$.message,X.max,X.min),!r))return q(D[j].message),D}if((U||P)&&!re&&(H(v)||l&&Array.isArray(v))){const y=ie(U),b=ie(P),E=!L(y.value)&&v.length>+y.value,$=!L(b.value)&&v.length<+b.value;if((E||$)&&(pe(E,y.message,b.message),!r))return q(D[j].message),D}if(ge&&!re&&H(v)){const{value:y,message:b}=ie(ge);if(ve(y)&&!v.match(y)&&(D[j]={type:X.pattern,message:b,ref:a,...R(X.pattern,b)},!r))return q(b),D}if(G){if(J(G)){const y=await G(v,s),b=tt(y,W);if(b&&(D[j]={...b,...R(X.validate,b.message)},!r))return q(b.message),D}else if(T(G)){let y={};for(const b in G){if(!z(y)&&!r)break;const E=tt(await G[b](v,s),W,b);E&&(y={...E,...R(b,E.message)},q(E.message),r&&(D[j]=y))}if(!z(y)&&(D[j]={ref:W,...y},!r))return D}}return q(!0),D};function gr(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=V(e)?n++:e[s[n++]];return e}function hr(e){for(const s in e)if(e.hasOwnProperty(s)&&!V(e[s]))return!1;return!0}function S(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:nt(s),n=r.length===1?e:gr(e,r),l=r.length-1,a=r[l];return n&&delete n[a],l!==0&&(T(n)&&z(n)||Array.isArray(n)&&hr(n))&&S(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!it(e);function ee(e,s){if(be(e)||be(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const l of r){const a=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const g=s[l];if(ne(a)&&ne(g)||T(a)&&T(g)||Array.isArray(a)&&Array.isArray(g)?!ee(a,g):a!==g)return!1}}return!0}var lt=e=>e.type==="select-multiple",pr=e=>Ce(e)||ue(e),Se=e=>me(e)&&e.isConnected,dt=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(T(e)||r)for(const n in e)Array.isArray(e[n])||T(e[n])&&!dt(e[n])?(s[n]=Array.isArray(e[n])?[]:{},_e(e[n],s[n])):L(e[n])||(s[n]=!0);return s}function ct(e,s,r){const n=Array.isArray(e);if(T(e)||n)for(const l in e)Array.isArray(e[l])||T(e[l])&&!dt(e[l])?V(s)||be(r[l])?r[l]=Array.isArray(e[l])?_e(e[l],[]):{..._e(e[l])}:ct(e[l],L(s)?{}:s[l],r[l]):r[l]=!ee(e[l],s[l]);return r}var ye=(e,s)=>ct(e,s,_e(s)),ut=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>V(e)?e:s?e===""?NaN:e&&+e:r&&H(e)?new Date(e):n?n(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return je(s)?s.files:Ce(s)?at(e.refs).value:lt(s)?[...s.selectedOptions].map(({value:r})=>r):ue(s)?ot(e.refs).value:ut(V(s.value)?e.ref.value:s.value,e)}var yr=(e,s,r,n)=>{const l={};for(const a of e){const g=f(s,a);g&&k(l,a,g._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:n}},de=e=>V(e)?e:ve(e)?e.source:T(e)?ve(e.value)?e.value.source:e.value:e,xr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function st(e,s,r){const n=f(e,r);if(n||Le(r))return{error:n,name:r};const l=r.split(".");for(;l.length;){const a=l.join("."),g=f(s,a),p=f(e,a);if(g&&!Array.isArray(g)&&r!==a)return{name:r};if(p&&p.type)return{name:a,error:p};l.pop()}return{name:r}}var mr=(e,s,r,n,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(s||e):(r?n.isOnBlur:l.isOnBlur)?!e:(r?n.isOnChange:l.isOnChange)?e:!0,vr=(e,s)=>!fe(f(e,s)).length&&S(e,s);const br={mode:M.onSubmit,reValidateMode:M.onChange,shouldFocusError:!0};function _r(e={}){let s={...br,...e},r={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},l=T(s.defaultValues)||T(s.values)?O(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:O(l),g={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},U,P=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},ge=Ye(s.mode),G=Ye(s.reValidateMode),j=s.criteriaMode===M.all,we=t=>i=>{clearTimeout(P),P=setTimeout(t,i)},K=async t=>{if(F.isValid||t){const i=s.resolver?z((await Q()).errors):await R(n,!0);i!==r.isValid&&x.state.next({isValid:i})}},Y=(t,i)=>{(F.isValidating||F.validatingFields)&&((t||Array.from(p.mount)).forEach(o=>{o&&(i?k(r.validatingFields,o,i):S(r.validatingFields,o))}),x.state.next({validatingFields:r.validatingFields,isValidating:!z(r.validatingFields)}))},v=(t,i=[],o,u,c=!0,d=!0)=>{if(u&&o){if(g.action=!0,d&&Array.isArray(f(n,t))){const h=o(f(n,t),u.argA,u.argB);c&&k(n,t,h)}if(d&&Array.isArray(f(r.errors,t))){const h=o(f(r.errors,t),u.argA,u.argB);c&&k(r.errors,t,h),vr(r.errors,t)}if(F.touchedFields&&d&&Array.isArray(f(r.touchedFields,t))){const h=o(f(r.touchedFields,t),u.argA,u.argB);c&&k(r.touchedFields,t,h)}F.dirtyFields&&(r.dirtyFields=ye(l,a)),x.state.next({name:t,isDirty:y(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(a,t,i)},W=(t,i)=>{k(r.errors,t,i),x.state.next({errors:r.errors})},q=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},D=(t,i,o,u)=>{const c=f(n,t);if(c){const d=f(a,t,V(o)?f(l,t):o);V(d)||u&&u.defaultChecked||i?k(a,t,i?d:Te(c._f)):$(t,d),g.mount&&K()}},te=(t,i,o,u,c)=>{let d=!1,h=!1;const _={name:t},A=!!(f(n,t)&&f(n,t)._f.disabled);if(!o||u){F.isDirty&&(h=r.isDirty,r.isDirty=_.isDirty=y(),d=h!==_.isDirty);const C=A||ee(f(l,t),i);h=!!(!A&&f(r.dirtyFields,t)),C||A?S(r.dirtyFields,t):k(r.dirtyFields,t,!0),_.dirtyFields=r.dirtyFields,d=d||F.dirtyFields&&h!==!C}if(o){const C=f(r.touchedFields,t);C||(k(r.touchedFields,t,o),_.touchedFields=r.touchedFields,d=d||F.touchedFields&&C!==o)}return d&&c&&x.state.next(_),d?_:{}},he=(t,i,o,u)=>{const c=f(r.errors,t),d=F.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&o?(U=we(()=>W(t,o)),U(e.delayError)):(clearTimeout(P),U=null,o?k(r.errors,t,o):S(r.errors,t)),(o?!ee(c,o):c)||!z(u)||d){const h={...u,...d&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}},Q=async t=>{Y(t,!0);const i=await s.resolver(a,s.context,yr(t||p.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return Y(t),i},re=async t=>{const{errors:i}=await Q(t);if(t)for(const o of t){const u=f(i,o);u?k(r.errors,o,u):S(r.errors,o)}else r.errors=i;return i},R=async(t,i,o={valid:!0})=>{for(const u in t){const c=t[u];if(c){const{_f:d,...h}=c;if(d){const _=p.array.has(d.name);Y([u],!0);const A=await rt(c,a,j,s.shouldUseNativeValidation&&!i,_);if(Y([u]),A[d.name]&&(o.valid=!1,i))break;!i&&(f(A,d.name)?_?fr(r.errors,A,d.name):k(r.errors,d.name,A[d.name]):S(r.errors,d.name))}h&&await R(h,i,o)}}return o.valid},pe=()=>{for(const t of p.unMount){const i=f(n,t);i&&(i._f.refs?i._f.refs.every(o=>!Se(o)):!Se(i._f.ref))&&ke(t)}p.unMount=new Set},y=(t,i)=>(t&&i&&k(a,t,i),!ee(ze(),l)),b=(t,i,o)=>cr(t,p,{...g.mount?a:V(i)?l:H(t)?{[t]:i}:i},o,i),E=t=>fe(f(g.mount?a:l,t,e.shouldUnregister?f(l,t,[]):[])),$=(t,i,o={})=>{const u=f(n,t);let c=i;if(u){const d=u._f;d&&(!d.disabled&&k(a,t,ut(i,d)),c=me(d.ref)&&L(i)?"":i,lt(d.ref)?[...d.ref.options].forEach(h=>h.selected=c.includes(h.value)):d.refs?ue(d.ref)?d.refs.length>1?d.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(_=>_===h.value):c===h.value)):d.refs[0]&&(d.refs[0].checked=!!c):d.refs.forEach(h=>h.checked=h.value===c):je(d.ref)?d.ref.value="":(d.ref.value=c,d.ref.type||x.values.next({name:t,values:{...a}})))}(o.shouldDirty||o.shouldTouch)&&te(t,c,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&le(t)},N=(t,i,o)=>{for(const u in i){const c=i[u],d=`${t}.${u}`,h=f(n,d);(p.array.has(t)||!be(c)||h&&!h._f)&&!ne(c)?N(d,c,o):$(d,c,o)}},B=(t,i,o={})=>{const u=f(n,t),c=p.array.has(t),d=O(i);k(a,t,d),c?(x.array.next({name:t,values:{...a}}),(F.isDirty||F.dirtyFields)&&o.shouldDirty&&x.state.next({name:t,dirtyFields:ye(l,a),isDirty:y(t,d)})):u&&!u._f&&!L(d)?N(t,d,o):$(t,d,o),Ze(t,p)&&x.state.next({...r}),x.values.next({name:g.mount?t:void 0,values:{...a}})},oe=async t=>{g.mount=!0;const i=t.target;let o=i.name,u=!0;const c=f(n,o),d=()=>i.type?Te(c._f):sr(t),h=_=>{u=Number.isNaN(_)||_===f(a,o,_)};if(c){let _,A;const C=d(),se=t.type===Ke.BLUR||t.type===Ke.FOCUS_OUT,yt=!xr(c._f)&&!s.resolver&&!f(r.errors,o)&&!c._f.deps||mr(se,f(r.touchedFields,o),r.isSubmitted,G,ge),Fe=Ze(o,p,se);k(a,o,C),se?(c._f.onBlur&&c._f.onBlur(t),U&&U(0)):c._f.onChange&&c._f.onChange(t);const Ae=te(o,C,se,!1),xt=!z(Ae)||Fe;if(!se&&x.values.next({name:o,type:t.type,values:{...a}}),yt)return F.isValid&&K(),xt&&x.state.next({name:o,...Fe?{}:Ae});if(!se&&Fe&&x.state.next({...r}),s.resolver){const{errors:Pe}=await Q([o]);if(h(C),u){const mt=st(r.errors,n,o),He=st(Pe,n,mt.name||o);_=He.error,o=He.name,A=z(Pe)}}else Y([o],!0),_=(await rt(c,a,j,s.shouldUseNativeValidation))[o],Y([o]),h(C),u&&(_?A=!1:F.isValid&&(A=await R(n,!0)));u&&(c._f.deps&&le(c._f.deps),he(o,A,_,Ae))}},ae=(t,i)=>{if(f(r.errors,i)&&t.focus)return t.focus(),1},le=async(t,i={})=>{let o,u;const c=De(t);if(s.resolver){const d=await re(V(t)?t:c);o=z(d),u=t?!c.some(h=>f(d,h)):o}else t?(u=(await Promise.all(c.map(async d=>{const h=f(n,d);return await R(h&&h._f?{[d]:h}:h)}))).every(Boolean),!(!u&&!r.isValid)&&K()):u=o=await R(n);return x.state.next({...!H(t)||F.isValid&&o!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:o}:{},errors:r.errors}),i.shouldFocus&&!u&&ce(n,ae,t?c:p.mount),u},ze=t=>{const i={...g.mount?a:l};return V(t)?i:H(t)?f(i,t):t.map(o=>f(i,o))},Re=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),isTouched:!!f((i||r).touchedFields,t),isValidating:!!f((i||r).validatingFields,t),error:f((i||r).errors,t)}),ft=t=>{t&&De(t).forEach(i=>S(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Be=(t,i,o)=>{const u=(f(n,t,{_f:{}})._f||{}).ref,c=f(r.errors,t)||{},{ref:d,message:h,type:_,...A}=c;k(r.errors,t,{...A,...i,ref:u}),x.state.next({name:t,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&u&&u.focus&&u.focus()},gt=(t,i)=>J(t)?x.values.subscribe({next:o=>t(b(void 0,i),o)}):b(t,i,!0),ke=(t,i={})=>{for(const o of t?De(t):p.mount)p.mount.delete(o),p.array.delete(o),i.keepValue||(S(n,o),S(a,o)),!i.keepError&&S(r.errors,o),!i.keepDirty&&S(r.dirtyFields,o),!i.keepTouched&&S(r.touchedFields,o),!i.keepIsValidating&&S(r.validatingFields,o),!s.shouldUnregister&&!i.keepDefaultValue&&S(l,o);x.values.next({values:{...a}}),x.state.next({...r,...i.keepDirty?{isDirty:y()}:{}}),!i.keepIsValid&&K()},Oe=({disabled:t,name:i,field:o,fields:u,value:c})=>{if(Z(t)&&g.mount||t){const d=t?void 0:V(c)?Te(o?o._f:f(u,i)._f):c;k(a,i,d),te(i,d,!1,!1,!0)}},Ve=(t,i={})=>{let o=f(n,t);const u=Z(i.disabled);return k(n,t,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:t}},name:t,mount:!0,...i}}),p.mount.add(t),o?Oe({field:o,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...u?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:de(i.min),max:de(i.max),minLength:de(i.minLength),maxLength:de(i.maxLength),pattern:de(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:c=>{if(c){Ve(t,i),o=f(n,t);const d=V(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=pr(d),_=o._f.refs||[];if(h?_.find(A=>A===d):d===o._f.ref)return;k(n,t,{_f:{...o._f,...h?{refs:[..._.filter(Se),d,...Array.isArray(f(l,t))?[{}]:[]],ref:{type:d.type,name:t}}:{ref:d}}}),D(t,!1,void 0,d)}else o=f(n,t,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(nr(p.array,t)&&g.action)&&p.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&ce(n,ae,p.mount),ht=t=>{Z(t)&&(x.state.next({disabled:t}),ce(n,(i,o)=>{const u=f(n,o);u&&(i.disabled=u._f.disabled||t,Array.isArray(u._f.refs)&&u._f.refs.forEach(c=>{c.disabled=u._f.disabled||t}))},0,!1))},Ue=(t,i)=>async o=>{let u;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let c=O(a);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:h}=await Q();r.errors=d,c=h}else await R(n);if(S(r.errors,"root"),z(r.errors)){x.state.next({errors:{}});try{await t(c,o)}catch(d){u=d}}else i&&await i({...r.errors},o),Ie(),setTimeout(Ie);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:z(r.errors)&&!u,submitCount:r.submitCount+1,errors:r.errors}),u)throw u},pt=(t,i={})=>{f(n,t)&&(V(i.defaultValue)?B(t,O(f(l,t))):(B(t,i.defaultValue),k(l,t,O(i.defaultValue))),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?y(t,O(f(l,t))):y()),i.keepError||(S(r.errors,t),F.isValid&&K()),x.state.next({...r}))},Ne=(t,i={})=>{const o=t?O(t):l,u=O(o),c=z(t),d=c?l:u;if(i.keepDefaultValues||(l=o),!i.keepValues){if(i.keepDirtyValues)for(const h of p.mount)f(r.dirtyFields,h)?k(d,h,f(a,h)):B(h,f(d,h));else{if($e&&V(t))for(const h of p.mount){const _=f(n,h);if(_&&_._f){const A=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(me(A)){const C=A.closest("form");if(C){C.reset();break}}}}n={}}a=e.shouldUnregister?i.keepDefaultValues?O(l):{}:O(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}p={mount:i.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&a?ye(l,a):r.dirtyFields:i.keepDefaultValues&&t?ye(l,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Me=(t,i)=>Ne(J(t)?t(a):t,i);return{control:{register:Ve,unregister:ke,getFieldState:Re,handleSubmit:Ue,setError:Be,_executeSchema:Q,_getWatch:b,_getDirty:y,_updateValid:K,_removeUnmounted:pe,_updateFieldArray:v,_updateDisabledField:Oe,_getFieldArray:E,_reset:Ne,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(t=>{Me(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:ht,_subjects:x,_proxyFormState:F,_setErrors:q,get _fields(){return n},get _formValues(){return a},get _state(){return g},set _state(t){g=t},get _defaultValues(){return l},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:le,register:Ve,handleSubmit:Ue,watch:gt,setValue:B,getValues:ze,reset:Me,resetField:pt,clearErrors:ft,unregister:ke,setError:Be,setFocus:(t,i={})=>{const o=f(n,t),u=o&&o._f;if(u){const c=u.refs?u.refs[0]:u.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Re}}function wr(e={}){const s=I.useRef(),r=I.useRef(),[n,l]=I.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={..._r(e),formState:n});const a=s.current.control;return a._options=e,dr({subject:a._subjects.state,next:g=>{lr(g,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),I.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),I.useEffect(()=>{if(a._proxyFormState.isDirty){const g=a._getDirty();g!==n.isDirty&&a._subjects.state.next({isDirty:g})}},[a,n.isDirty]),I.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,l(g=>({...g}))):a._resetDefaultValues()},[e.values,a]),I.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),I.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=ar(n,a),s.current}const kr=()=>{const{register:e,handleSubmit:s,reset:r,formState:{errors:n,isValid:l}}=wr({mode:"onBlur",defaultValues:{email:"",password:""}}),a=g=>{console.log("Email:",g.email),console.log("Password:",g.password),r()};return m.jsxs(Yt,{children:[m.jsx(Kt,{text:"Log in"}),m.jsx(Zt,{children:"Welcome! Please enter your credentials to login to the platform:"}),m.jsxs("form",{onSubmit:s(a),children:[m.jsxs(Jt,{children:[m.jsx(qe,{type:"email",placeholder:"Email",$isInvalid:n.email,$isValid:!n.email&&l,...e("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(n==null?void 0:n.email)&&m.jsx(Xe,{children:n==null?void 0:n.email.message}),l&&!(n!=null&&n.email)&&m.jsx(Ge,{isValid:!0,children:"Email successfully validated!"}),m.jsx(qe,{type:"password",placeholder:"Password",$isInvalid:n==null?void 0:n.password,$isValid:!(n!=null&&n.password)&&l,...e("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),(n==null?void 0:n.password)&&m.jsx(Xe,{children:n==null?void 0:n.password.message}),l&&!(n!=null&&n.password)&&m.jsx(Ge,{isValid:!0,children:"Password is secure"})]}),m.jsx(Qt,{type:"submit",disabled:!l,children:"Log in"}),m.jsx(er,{children:m.jsxs(tr,{children:["Don’t have an account?"," ",m.jsxs(rr,{to:"/registration",children:[" ","Register"]})]})})]})]})},Er=()=>m.jsxs(jt,{children:[m.jsxs(At,{children:[m.jsx(Ct,{}),m.jsx(Xt,{})]}),m.jsx(kr,{})]});export{Er as default};
