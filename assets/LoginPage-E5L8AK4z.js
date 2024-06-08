import{u as w,j as v,a as We,N as mr,R as I}from"./index-BO4tpvZg.js";const br="/petlove/shape_bcgr_mob1.png",_r="/petlove/shape_bcgr_tab1.png",wr="/petlove/shape_bcgr_desk1.png",kr=w.div`
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
`,Vr=w.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${br}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${_r}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${wr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,Fr=w.div`
    display: inline-block;
`,Ar=({children:e})=>v.jsxs(kr,{children:[v.jsx(Vr,{}),v.jsx(Fr,{children:e})]}),Dr="/petlove/images/dog_hero_mob_x1.png",Er="/petlove/images/dog_hero_mob_x2.png",Sr="/petlove/images/dog_hero_tabx1.png",Tr="/petlove/images/dog_hero_tabx2.png",Lr="/petlove/images/dog_hero_desk_x1.png",jr="/petlove/images/dog_hero_desk_x2.png",$r=w.div`
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
`,Cr=w.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${Dr}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Er}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${Sr}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Tr}) no-repeat center center;
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

        background: url(${Lr}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${jr}) no-repeat center center;
            background-size: cover;
        }
    }
`,Rr="/petlove/images/🐶avatar_dog.png",zr="/petlove/images/🐶avatar_dog_x2.png",Br=w.div`
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
`,Or=w.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Ir=w.div`
    width: 32px;
    height: 32px;
    background: url(${Rr}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${zr}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,Ur=w.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Nr=w.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Mr=w.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Pr=w.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Hr=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Wr=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,qr=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,Xr=()=>v.jsxs(Br,{children:[v.jsx(Or,{children:v.jsx(Ir,{})}),v.jsxs(Ur,{children:[v.jsxs(Nr,{children:[v.jsx(Mr,{children:"Rich"}),v.jsxs(Pr,{children:[v.jsx(Hr,{children:"Birthday: "}),v.jsx(Wr,{children:"21.09.2020"})]})]}),v.jsx(qr,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),Gr=w.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${e=>e.color||e.theme.colors.black};
`,Kr=({text:e,color:s})=>v.jsx(Gr,{color:s,children:e}),Yr=w.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};
`,Zr=w.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Jr=w.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
`,qe=w.input`
    width: 100%;
    padding: 12px;

    border: 1px solid ${e=>e.theme.colors.borderGrey};
    border-radius: 30px;

    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.mediumGrey};

    ::placeholder {
        color: ${e=>e.theme.colors.lightGrey};
        opacity: 1;
    }

    &:focus {
        border-color: ${e=>e.theme.colors.yellow};
        outline: none;
    }

    &.error {
        border-color: ${e=>e.theme.colors.red};
    }

    ${e=>e.isInvalid&&We`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${e=>e.isValid&&We`
            border-color: ${s=>s.theme.colors.green};
        `}
`,Xe=w.p`
    margin-left: 12px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};
`,Ge=w.p`
    margin-left: 12px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};
`,Qr=w.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 30px;
    padding: 12px 0;
    margin-bottom: 12px;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.secondBackground};
    background: ${e=>e.theme.colors.yellow};
`,et=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,rt=w.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};
`,tt=w(mr)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var de=e=>e.type==="checkbox",ne=e=>e instanceof Date,j=e=>e==null;const ir=e=>typeof e=="object";var T=e=>!j(e)&&!Array.isArray(e)&&ir(e)&&!ne(e),st=e=>T(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,it=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,nt=(e,s)=>e.has(it(s)),ot=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(t||T(e)))if(s=t?[]:{},!t&&!ot(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=O(e[n]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>e===void 0,f=(e,s,t)=>{if(!s||!T(e))return t;const n=fe(s.split(/[,[\].]+?/)).reduce((l,a)=>j(l)?l:l[a],e);return V(n)||n===e?V(e[s])?t:e[s]:n},Z=e=>typeof e=="boolean",je=e=>/^\w*$/.test(e),nr=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,s,t)=>{let n=-1;const l=je(s)?[s]:nr(s),a=l.length,g=a-1;for(;++n<a;){const y=l[n];let U=t;if(n!==g){const P=e[y];U=T(P)||Array.isArray(P)?P:isNaN(+l[n+1])?{}:[]}if(y==="__proto__")return;e[y]=U,e=e[y]}return e};const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},M={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};I.createContext(null);var at=(e,s,t,n=!0)=>{const l={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const g=a;return s._proxyFormState[g]!==M.all&&(s._proxyFormState[g]=!n||M.all),t&&(t[g]=!0),e[g]}});return l},R=e=>T(e)&&!Object.keys(e).length,lt=(e,s,t,n)=>{t(e);const{name:l,...a}=e;return R(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(g=>s[g]===(!n||M.all))},De=e=>Array.isArray(e)?e:[e];function ct(e){const s=I.useRef(e);s.current=e,I.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",ut=(e,s,t,n,l)=>H(e)?(n&&s.watch.add(e),f(t,e,l)):Array.isArray(e)?e.map(a=>(n&&s.watch.add(a),f(t,a))):(n&&(s.watchAll=!0),t),dt=(e,s,t,n,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:l||!0}}:{},Ye=e=>({isOnSubmit:!e||e===M.onSubmit,isOnBlur:e===M.onBlur,isOnChange:e===M.onChange,isOnAll:e===M.all,isOnTouch:e===M.onTouched}),Ze=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ue=(e,s,t,n)=>{for(const l of t||Object.keys(e)){const a=f(e,l);if(a){const{_f:g,...y}=a;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],l)&&!n)break;if(g.ref&&s(g.ref,g.name)&&!n)break;ue(y,s)}else T(y)&&ue(y,s)}}};var ft=(e,s,t)=>{const n=fe(f(e,t));return k(n,"root",s[t]),k(e,t,n),e},$e=e=>e.type==="file",J=e=>typeof e=="function",ve=e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),Ce=e=>e.type==="radio",me=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var or=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const er={isValid:!1,value:null};var ar=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,er):er;function rr(e,s,t="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||Z(e)&&!e)return{type:t,message:xe(e)?e:"",ref:s}}var ie=e=>T(e)&&!me(e)?e:{value:e,message:""},tr=async(e,s,t,n,l)=>{const{ref:a,refs:g,required:y,maxLength:U,minLength:P,min:F,max:x,pattern:ge,validate:G,name:$,valueAsNumber:we,mount:K,disabled:Y}=e._f,m=f(s,$);if(!K||Y)return{};const W=g?g[0]:a,q=p=>{n&&W.reportValidity&&(W.setCustomValidity(Z(p)?"":p||""),W.reportValidity())},D={},re=Ce(a),he=de(a),Q=re||he,te=(we||$e(a))&&V(a.value)&&V(m)||ve(a)&&a.value===""||m===""||Array.isArray(m)&&!m.length,z=dt.bind(null,$,t,D),ye=(p,b,E,L=X.maxLength,N=X.minLength)=>{const B=p?b:E;D[$]={type:p?L:N,message:B,ref:a,...z(p?L:N,B)}};if(l?!Array.isArray(m)||!m.length:y&&(!Q&&(te||j(m))||Z(m)&&!m||he&&!or(g).isValid||re&&!ar(g).isValid)){const{value:p,message:b}=xe(y)?{value:!!y,message:y}:ie(y);if(p&&(D[$]={type:X.required,message:b,ref:W,...z(X.required,b)},!t))return q(b),D}if(!te&&(!j(F)||!j(x))){let p,b;const E=ie(x),L=ie(F);if(!j(m)&&!isNaN(m)){const N=a.valueAsNumber||m&&+m;j(E.value)||(p=N>E.value),j(L.value)||(b=N<L.value)}else{const N=a.valueAsDate||new Date(m),B=le=>new Date(new Date().toDateString()+" "+le),oe=a.type=="time",ae=a.type=="week";H(E.value)&&m&&(p=oe?B(m)>B(E.value):ae?m>E.value:N>new Date(E.value)),H(L.value)&&m&&(b=oe?B(m)<B(L.value):ae?m<L.value:N<new Date(L.value))}if((p||b)&&(ye(!!p,E.message,L.message,X.max,X.min),!t))return q(D[$].message),D}if((U||P)&&!te&&(H(m)||l&&Array.isArray(m))){const p=ie(U),b=ie(P),E=!j(p.value)&&m.length>+p.value,L=!j(b.value)&&m.length<+b.value;if((E||L)&&(ye(E,p.message,b.message),!t))return q(D[$].message),D}if(ge&&!te&&H(m)){const{value:p,message:b}=ie(ge);if(me(p)&&!m.match(p)&&(D[$]={type:X.pattern,message:b,ref:a,...z(X.pattern,b)},!t))return q(b),D}if(G){if(J(G)){const p=await G(m,s),b=rr(p,W);if(b&&(D[$]={...b,...z(X.validate,b.message)},!t))return q(b.message),D}else if(T(G)){let p={};for(const b in G){if(!R(p)&&!t)break;const E=rr(await G[b](m,s),W,b);E&&(p={...E,...z(b,E.message)},q(E.message),t&&(D[$]=p))}if(!R(p)&&(D[$]={ref:W,...p},!t))return D}}return q(!0),D};function gt(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=V(e)?n++:e[s[n++]];return e}function ht(e){for(const s in e)if(e.hasOwnProperty(s)&&!V(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:je(s)?[s]:nr(s),n=t.length===1?e:gt(e,t),l=t.length-1,a=t[l];return n&&delete n[a],l!==0&&(T(n)&&R(n)||Array.isArray(n)&&ht(n))&&S(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},be=e=>j(e)||!ir(e);function ee(e,s){if(be(e)||be(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const l of t){const a=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const g=s[l];if(ne(a)&&ne(g)||T(a)&&T(g)||Array.isArray(a)&&Array.isArray(g)?!ee(a,g):a!==g)return!1}}return!0}var lr=e=>e.type==="select-multiple",yt=e=>Ce(e)||de(e),Se=e=>ve(e)&&e.isConnected,cr=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function _e(e,s={}){const t=Array.isArray(e);if(T(e)||t)for(const n in e)Array.isArray(e[n])||T(e[n])&&!cr(e[n])?(s[n]=Array.isArray(e[n])?[]:{},_e(e[n],s[n])):j(e[n])||(s[n]=!0);return s}function ur(e,s,t){const n=Array.isArray(e);if(T(e)||n)for(const l in e)Array.isArray(e[l])||T(e[l])&&!cr(e[l])?V(s)||be(t[l])?t[l]=Array.isArray(e[l])?_e(e[l],[]):{..._e(e[l])}:ur(e[l],j(s)?{}:s[l],t[l]):t[l]=!ee(e[l],s[l]);return t}var pe=(e,s)=>ur(e,s,_e(s)),dr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>V(e)?e:s?e===""?NaN:e&&+e:t&&H(e)?new Date(e):n?n(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return $e(s)?s.files:Ce(s)?ar(e.refs).value:lr(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?or(e.refs).value:dr(V(s.value)?e.ref.value:s.value,e)}var pt=(e,s,t,n)=>{const l={};for(const a of e){const g=f(s,a);g&&k(l,a,g._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:n}},ce=e=>V(e)?e:me(e)?e.source:T(e)?me(e.value)?e.value.source:e.value:e,xt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function sr(e,s,t){const n=f(e,t);if(n||je(t))return{error:n,name:t};const l=t.split(".");for(;l.length;){const a=l.join("."),g=f(s,a),y=f(e,a);if(g&&!Array.isArray(g)&&t!==a)return{name:t};if(y&&y.type)return{name:a,error:y};l.pop()}return{name:t}}var vt=(e,s,t,n,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?n.isOnBlur:l.isOnBlur)?!e:(t?n.isOnChange:l.isOnChange)?e:!0,mt=(e,s)=>!fe(f(e,s)).length&&S(e,s);const bt={mode:M.onSubmit,reValidateMode:M.onChange,shouldFocusError:!0};function _t(e={}){let s={...bt,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},l=T(s.defaultValues)||T(s.values)?O(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:O(l),g={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},U,P=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},ge=Ye(s.mode),G=Ye(s.reValidateMode),$=s.criteriaMode===M.all,we=r=>i=>{clearTimeout(P),P=setTimeout(r,i)},K=async r=>{if(F.isValid||r){const i=s.resolver?R((await Q()).errors):await z(n,!0);i!==t.isValid&&x.state.next({isValid:i})}},Y=(r,i)=>{(F.isValidating||F.validatingFields)&&((r||Array.from(y.mount)).forEach(o=>{o&&(i?k(t.validatingFields,o,i):S(t.validatingFields,o))}),x.state.next({validatingFields:t.validatingFields,isValidating:!R(t.validatingFields)}))},m=(r,i=[],o,d,u=!0,c=!0)=>{if(d&&o){if(g.action=!0,c&&Array.isArray(f(n,r))){const h=o(f(n,r),d.argA,d.argB);u&&k(n,r,h)}if(c&&Array.isArray(f(t.errors,r))){const h=o(f(t.errors,r),d.argA,d.argB);u&&k(t.errors,r,h),mt(t.errors,r)}if(F.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const h=o(f(t.touchedFields,r),d.argA,d.argB);u&&k(t.touchedFields,r,h)}F.dirtyFields&&(t.dirtyFields=pe(l,a)),x.state.next({name:r,isDirty:p(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(a,r,i)},W=(r,i)=>{k(t.errors,r,i),x.state.next({errors:t.errors})},q=r=>{t.errors=r,x.state.next({errors:t.errors,isValid:!1})},D=(r,i,o,d)=>{const u=f(n,r);if(u){const c=f(a,r,V(o)?f(l,r):o);V(c)||d&&d.defaultChecked||i?k(a,r,i?c:Te(u._f)):L(r,c),g.mount&&K()}},re=(r,i,o,d,u)=>{let c=!1,h=!1;const _={name:r},A=!!(f(n,r)&&f(n,r)._f.disabled);if(!o||d){F.isDirty&&(h=t.isDirty,t.isDirty=_.isDirty=p(),c=h!==_.isDirty);const C=A||ee(f(l,r),i);h=!!(!A&&f(t.dirtyFields,r)),C||A?S(t.dirtyFields,r):k(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,c=c||F.dirtyFields&&h!==!C}if(o){const C=f(t.touchedFields,r);C||(k(t.touchedFields,r,o),_.touchedFields=t.touchedFields,c=c||F.touchedFields&&C!==o)}return c&&u&&x.state.next(_),c?_:{}},he=(r,i,o,d)=>{const u=f(t.errors,r),c=F.isValid&&Z(i)&&t.isValid!==i;if(e.delayError&&o?(U=we(()=>W(r,o)),U(e.delayError)):(clearTimeout(P),U=null,o?k(t.errors,r,o):S(t.errors,r)),(o?!ee(u,o):u)||!R(d)||c){const h={...d,...c&&Z(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},x.state.next(h)}},Q=async r=>{Y(r,!0);const i=await s.resolver(a,s.context,pt(r||y.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return Y(r),i},te=async r=>{const{errors:i}=await Q(r);if(r)for(const o of r){const d=f(i,o);d?k(t.errors,o,d):S(t.errors,o)}else t.errors=i;return i},z=async(r,i,o={valid:!0})=>{for(const d in r){const u=r[d];if(u){const{_f:c,...h}=u;if(c){const _=y.array.has(c.name);Y([d],!0);const A=await tr(u,a,$,s.shouldUseNativeValidation&&!i,_);if(Y([d]),A[c.name]&&(o.valid=!1,i))break;!i&&(f(A,c.name)?_?ft(t.errors,A,c.name):k(t.errors,c.name,A[c.name]):S(t.errors,c.name))}h&&await z(h,i,o)}}return o.valid},ye=()=>{for(const r of y.unMount){const i=f(n,r);i&&(i._f.refs?i._f.refs.every(o=>!Se(o)):!Se(i._f.ref))&&ke(r)}y.unMount=new Set},p=(r,i)=>(r&&i&&k(a,r,i),!ee(Re(),l)),b=(r,i,o)=>ut(r,y,{...g.mount?a:V(i)?l:H(r)?{[r]:i}:i},o,i),E=r=>fe(f(g.mount?a:l,r,e.shouldUnregister?f(l,r,[]):[])),L=(r,i,o={})=>{const d=f(n,r);let u=i;if(d){const c=d._f;c&&(!c.disabled&&k(a,r,dr(i,c)),u=ve(c.ref)&&j(i)?"":i,lr(c.ref)?[...c.ref.options].forEach(h=>h.selected=u.includes(h.value)):c.refs?de(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(u)?!!u.find(_=>_===h.value):u===h.value)):c.refs[0]&&(c.refs[0].checked=!!u):c.refs.forEach(h=>h.checked=h.value===u):$e(c.ref)?c.ref.value="":(c.ref.value=u,c.ref.type||x.values.next({name:r,values:{...a}})))}(o.shouldDirty||o.shouldTouch)&&re(r,u,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&le(r)},N=(r,i,o)=>{for(const d in i){const u=i[d],c=`${r}.${d}`,h=f(n,c);(y.array.has(r)||!be(u)||h&&!h._f)&&!ne(u)?N(c,u,o):L(c,u,o)}},B=(r,i,o={})=>{const d=f(n,r),u=y.array.has(r),c=O(i);k(a,r,c),u?(x.array.next({name:r,values:{...a}}),(F.isDirty||F.dirtyFields)&&o.shouldDirty&&x.state.next({name:r,dirtyFields:pe(l,a),isDirty:p(r,c)})):d&&!d._f&&!j(c)?N(r,c,o):L(r,c,o),Ze(r,y)&&x.state.next({...t}),x.values.next({name:g.mount?r:void 0,values:{...a}})},oe=async r=>{g.mount=!0;const i=r.target;let o=i.name,d=!0;const u=f(n,o),c=()=>i.type?Te(u._f):st(r),h=_=>{d=Number.isNaN(_)||_===f(a,o,_)};if(u){let _,A;const C=c(),se=r.type===Ke.BLUR||r.type===Ke.FOCUS_OUT,pr=!xt(u._f)&&!s.resolver&&!f(t.errors,o)&&!u._f.deps||vt(se,f(t.touchedFields,o),t.isSubmitted,G,ge),Fe=Ze(o,y,se);k(a,o,C),se?(u._f.onBlur&&u._f.onBlur(r),U&&U(0)):u._f.onChange&&u._f.onChange(r);const Ae=re(o,C,se,!1),xr=!R(Ae)||Fe;if(!se&&x.values.next({name:o,type:r.type,values:{...a}}),pr)return F.isValid&&K(),xr&&x.state.next({name:o,...Fe?{}:Ae});if(!se&&Fe&&x.state.next({...t}),s.resolver){const{errors:Pe}=await Q([o]);if(h(C),d){const vr=sr(t.errors,n,o),He=sr(Pe,n,vr.name||o);_=He.error,o=He.name,A=R(Pe)}}else Y([o],!0),_=(await tr(u,a,$,s.shouldUseNativeValidation))[o],Y([o]),h(C),d&&(_?A=!1:F.isValid&&(A=await z(n,!0)));d&&(u._f.deps&&le(u._f.deps),he(o,A,_,Ae))}},ae=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let o,d;const u=De(r);if(s.resolver){const c=await te(V(r)?r:u);o=R(c),d=r?!u.some(h=>f(c,h)):o}else r?(d=(await Promise.all(u.map(async c=>{const h=f(n,c);return await z(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&K()):d=o=await z(n);return x.state.next({...!H(r)||F.isValid&&o!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:o}:{},errors:t.errors}),i.shouldFocus&&!d&&ue(n,ae,r?u:y.mount),d},Re=r=>{const i={...g.mount?a:l};return V(r)?i:H(r)?f(i,r):r.map(o=>f(i,o))},ze=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),isTouched:!!f((i||t).touchedFields,r),isValidating:!!f((i||t).validatingFields,r),error:f((i||t).errors,r)}),fr=r=>{r&&De(r).forEach(i=>S(t.errors,i)),x.state.next({errors:r?t.errors:{}})},Be=(r,i,o)=>{const d=(f(n,r,{_f:{}})._f||{}).ref,u=f(t.errors,r)||{},{ref:c,message:h,type:_,...A}=u;k(t.errors,r,{...A,...i,ref:d}),x.state.next({name:r,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&d&&d.focus&&d.focus()},gr=(r,i)=>J(r)?x.values.subscribe({next:o=>r(b(void 0,i),o)}):b(r,i,!0),ke=(r,i={})=>{for(const o of r?De(r):y.mount)y.mount.delete(o),y.array.delete(o),i.keepValue||(S(n,o),S(a,o)),!i.keepError&&S(t.errors,o),!i.keepDirty&&S(t.dirtyFields,o),!i.keepTouched&&S(t.touchedFields,o),!i.keepIsValidating&&S(t.validatingFields,o),!s.shouldUnregister&&!i.keepDefaultValue&&S(l,o);x.values.next({values:{...a}}),x.state.next({...t,...i.keepDirty?{isDirty:p()}:{}}),!i.keepIsValid&&K()},Oe=({disabled:r,name:i,field:o,fields:d,value:u})=>{if(Z(r)&&g.mount||r){const c=r?void 0:V(u)?Te(o?o._f:f(d,i)._f):u;k(a,i,c),re(i,c,!1,!1,!0)}},Ve=(r,i={})=>{let o=f(n,r);const d=Z(i.disabled);return k(n,r,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:r}},name:r,mount:!0,...i}}),y.mount.add(r),o?Oe({field:o,disabled:i.disabled,name:r,value:i.value}):D(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:r,onChange:oe,onBlur:oe,ref:u=>{if(u){Ve(r,i),o=f(n,r);const c=V(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,h=yt(c),_=o._f.refs||[];if(h?_.find(A=>A===c):c===o._f.ref)return;k(n,r,{_f:{...o._f,...h?{refs:[..._.filter(Se),c,...Array.isArray(f(l,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),D(r,!1,void 0,c)}else o=f(n,r,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(nt(y.array,r)&&g.action)&&y.unMount.add(r)}}},Ie=()=>s.shouldFocusError&&ue(n,ae,y.mount),hr=r=>{Z(r)&&(x.state.next({disabled:r}),ue(n,(i,o)=>{const d=f(n,o);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(u=>{u.disabled=d._f.disabled||r}))},0,!1))},Ue=(r,i)=>async o=>{let d;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=O(a);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:h}=await Q();t.errors=c,u=h}else await z(n);if(S(t.errors,"root"),R(t.errors)){x.state.next({errors:{}});try{await r(u,o)}catch(c){d=c}}else i&&await i({...t.errors},o),Ie(),setTimeout(Ie);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},yr=(r,i={})=>{f(n,r)&&(V(i.defaultValue)?B(r,O(f(l,r))):(B(r,i.defaultValue),k(l,r,O(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?p(r,O(f(l,r))):p()),i.keepError||(S(t.errors,r),F.isValid&&K()),x.state.next({...t}))},Ne=(r,i={})=>{const o=r?O(r):l,d=O(o),u=R(r),c=u?l:d;if(i.keepDefaultValues||(l=o),!i.keepValues){if(i.keepDirtyValues)for(const h of y.mount)f(t.dirtyFields,h)?k(c,h,f(a,h)):B(h,f(c,h));else{if(Le&&V(r))for(const h of y.mount){const _=f(n,h);if(_&&_._f){const A=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(ve(A)){const C=A.closest("form");if(C){C.reset();break}}}}n={}}a=e.shouldUnregister?i.keepDefaultValues?O(l):{}:O(c),x.array.next({values:{...c}}),x.values.next({values:{...c}})}y={mount:i.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:u?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ee(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:u?[]:i.keepDirtyValues?i.keepDefaultValues&&a?pe(l,a):t.dirtyFields:i.keepDefaultValues&&r?pe(l,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Me=(r,i)=>Ne(J(r)?r(a):r,i);return{control:{register:Ve,unregister:ke,getFieldState:ze,handleSubmit:Ue,setError:Be,_executeSchema:Q,_getWatch:b,_getDirty:p,_updateValid:K,_removeUnmounted:ye,_updateFieldArray:m,_updateDisabledField:Oe,_getFieldArray:E,_reset:Ne,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{Me(r,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:hr,_subjects:x,_proxyFormState:F,_setErrors:q,get _fields(){return n},get _formValues(){return a},get _state(){return g},set _state(r){g=r},get _defaultValues(){return l},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:Ve,handleSubmit:Ue,watch:gr,setValue:B,getValues:Re,reset:Me,resetField:yr,clearErrors:fr,unregister:ke,setError:Be,setFocus:(r,i={})=>{const o=f(n,r),d=o&&o._f;if(d){const u=d.refs?d.refs[0]:d.ref;u.focus&&(u.focus(),i.shouldSelect&&u.select())}},getFieldState:ze}}function wt(e={}){const s=I.useRef(),t=I.useRef(),[n,l]=I.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={..._t(e),formState:n});const a=s.current.control;return a._options=e,ct({subject:a._subjects.state,next:g=>{lt(g,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),I.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),I.useEffect(()=>{if(a._proxyFormState.isDirty){const g=a._getDirty();g!==n.isDirty&&a._subjects.state.next({isDirty:g})}},[a,n.isDirty]),I.useEffect(()=>{e.values&&!ee(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values,l(g=>({...g}))):a._resetDefaultValues()},[e.values,a]),I.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),I.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=at(n,a),s.current}const kt=()=>{const{register:e,handleSubmit:s,reset:t,formState:{errors:n,isValid:l}}=wt({mode:"onBlur",defaultValues:{email:"",password:""}}),a=g=>{console.log("Email:",g.email),console.log("Password:",g.password),t()};return v.jsxs(Yr,{children:[v.jsx(Kr,{text:"Log in"}),v.jsx(Zr,{children:"Welcome! Please enter your credentials to login to the platform:"}),v.jsxs("form",{onSubmit:s(a),children:[v.jsxs(Jr,{children:[v.jsx(qe,{type:"email",placeholder:"Email",isInvalid:n.email,isValid:!n.email&&l,...e("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),n.email&&v.jsx(Xe,{children:n.email.message}),l&&!n.email&&v.jsx(Ge,{isValid:!0,children:"Email successfully validated!"}),v.jsx(qe,{type:"password",placeholder:"Password",isInvalid:n.password,isValid:!n.password&&l,...e("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),n.password&&v.jsx(Xe,{children:n.password.message}),l&&!n.password&&v.jsx(Ge,{isValid:!0,children:"Password is secure"})]}),v.jsx(Qr,{type:"submit",disabled:!l,children:"Log in"}),v.jsx(et,{children:v.jsxs(rt,{children:["Don’t have an account?"," ",v.jsxs(tt,{to:"/registration",children:[" ","Register"]})]})})]})]})},Et=()=>v.jsxs($r,{children:[v.jsxs(Ar,{children:[v.jsx(Cr,{}),v.jsx(Xr,{})]}),v.jsx(kt,{})]});export{Et as default};
