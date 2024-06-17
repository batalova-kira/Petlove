import{u as _,j as x,a as He,N as bt,R as N,b as wt,r as _t,I as qe,l as kt}from"./index-Brsinngz.js";const Vt="/petlove/shape_bcgr_mob1.png",Ft="/petlove/shape_bcgr_tab1.png",At="/petlove/shape_bcgr_desk1.png",Dt=_.div`
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
`,Et=_.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${Vt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${Ft}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${At}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,St=_.div`
    display: inline-block;
`,Tt=({children:e})=>x.jsxs(Dt,{children:[x.jsx(Et,{}),x.jsx(St,{children:e})]}),$t="/petlove/images/dog_hero_mob_x1.png",jt="/petlove/images/dog_hero_mob_x2.png",Lt="/petlove/images/dog_hero_tabx1.png",Ct="/petlove/images/dog_hero_tabx2.png",zt="/petlove/images/dog_hero_desk_x1.png",Rt="/petlove/images/dog_hero_desk_x2.png",Bt=_.div`
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
`,Ot=_.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${$t}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${jt}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${Lt}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Ct}) no-repeat center center;
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

        background: url(${zt}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Rt}) no-repeat center center;
            background-size: cover;
        }
    }
`,It="/petlove/images/🐶avatar_dog.png",Ut="/petlove/images/🐶avatar_dog_x2.png",Nt=_.div`
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
`,Mt=_.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Pt=_.div`
    width: 32px;
    height: 32px;
    background: url(${It}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${Ut}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,Wt=_.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Ht=_.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,qt=_.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Xt=_.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Gt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Kt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Yt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,Zt=()=>x.jsxs(Nt,{children:[x.jsx(Mt,{children:x.jsx(Pt,{})}),x.jsxs(Wt,{children:[x.jsxs(Ht,{children:[x.jsx(qt,{children:"Rich"}),x.jsxs(Xt,{children:[x.jsx(Gt,{children:"Birthday: "}),x.jsx(Kt,{children:"21.09.2020"})]})]}),x.jsx(Yt,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),Jt=_.h1`
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
`,Qt=({text:e,color:s})=>x.jsx(Jt,{color:s,children:e}),er=_.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,tr=_.div`
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
`,rr=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,Xe=_.input`
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

    ${e=>e.$isInvalid&&He`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${e=>e.$isValid&&He`
            border-color: ${s=>s.theme.colors.green};
        `}

        @media only screen and (min-width: 768px) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,sr=_.div`
    position: relative;
    width: 100%;
`,ir=_.div`
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

    @media only screen and (min-width: 768px) {
        svg {
            width: 22px;
            height: 22px;
        }
    }
`,Ge=_.p`
    margin-left: 12px;
    margin-top: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Ke=_.p`
    margin-left: 12px;
    margin-top: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,nr=_.button`
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
`,or=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,ar=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,lr=_(bt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var fe=e=>e.type==="checkbox",oe=e=>e instanceof Date,j=e=>e==null;const nt=e=>typeof e=="object";var T=e=>!j(e)&&!Array.isArray(e)&&nt(e)&&!oe(e),dr=e=>T(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ur=(e,s)=>e.has(cr(s)),fr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(s=r?[]:{},!r&&!fr(e))s=e;else for(const o in e)e.hasOwnProperty(o)&&(s[o]=U(e[o]));else return e;return s}var he=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,h=(e,s,r)=>{if(!s||!T(e))return r;const o=he(s.split(/[,[\].]+?/)).reduce((l,a)=>j(l)?l:l[a],e);return F(o)||o===e?F(e[s])?r:e[s]:o},Z=e=>typeof e=="boolean",je=e=>/^\w*$/.test(e),ot=e=>he(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,s,r)=>{let o=-1;const l=je(s)?[s]:ot(s),a=l.length,c=a-1;for(;++o<a;){const p=l[o];let L=r;if(o!==c){const B=e[p];L=T(B)||Array.isArray(B)?B:isNaN(+l[o+1])?{}:[]}if(p==="__proto__")return;e[p]=L,e=e[p]}return e};const Ye={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};N.createContext(null);var hr=(e,s,r,o=!0)=>{const l={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const c=a;return s._proxyFormState[c]!==P.all&&(s._proxyFormState[c]=!o||P.all),r&&(r[c]=!0),e[c]}});return l},R=e=>T(e)&&!Object.keys(e).length,gr=(e,s,r,o)=>{r(e);const{name:l,...a}=e;return R(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(c=>s[c]===(!o||P.all))},De=e=>Array.isArray(e)?e:[e];function pr(e){const s=N.useRef(e);s.current=e,N.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",yr=(e,s,r,o,l)=>W(e)?(o&&s.watch.add(e),h(r,e,l)):Array.isArray(e)?e.map(a=>(o&&s.watch.add(a),h(r,a))):(o&&(s.watchAll=!0),r),xr=(e,s,r,o,l)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[o]:l||!0}}:{},Ze=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Je=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const ue=(e,s,r,o)=>{for(const l of r||Object.keys(e)){const a=h(e,l);if(a){const{_f:c,...p}=a;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],l)&&!o)break;if(c.ref&&s(c.ref,c.name)&&!o)break;ue(p,s)}else T(p)&&ue(p,s)}}};var mr=(e,s,r)=>{const o=he(h(e,r));return k(o,"root",s[r]),k(e,r,o),e},Le=e=>e.type==="file",J=e=>typeof e=="function",me=e=>{if(!$e)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>W(e),Ce=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Qe={value:!1,isValid:!1},et={value:!0,isValid:!0};var at=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?et:{value:e[0].value,isValid:!0}:et:Qe}return Qe};const tt={isValid:!1,value:null};var lt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,tt):tt;function rt(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||Z(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var ne=e=>T(e)&&!ve(e)?e:{value:e,message:""},st=async(e,s,r,o,l)=>{const{ref:a,refs:c,required:p,maxLength:L,minLength:B,min:V,max:y,pattern:te,validate:G,name:C,valueAsNumber:_e,mount:K,disabled:Y}=e._f,v=h(s,C);if(!K||Y)return{};const H=c?c[0]:a,q=m=>{o&&H.reportValidity&&(H.setCustomValidity(Z(m)?"":m||""),H.reportValidity())},D={},re=Ce(a),ge=fe(a),Q=re||ge,se=(_e||Le(a))&&F(a.value)&&F(v)||me(a)&&a.value===""||v===""||Array.isArray(v)&&!v.length,O=xr.bind(null,C,r,D),pe=(m,b,E,$=X.maxLength,M=X.minLength)=>{const I=m?b:E;D[C]={type:m?$:M,message:I,ref:a,...O(m?$:M,I)}};if(l?!Array.isArray(v)||!v.length:p&&(!Q&&(se||j(v))||Z(v)&&!v||ge&&!at(c).isValid||re&&!lt(c).isValid)){const{value:m,message:b}=xe(p)?{value:!!p,message:p}:ne(p);if(m&&(D[C]={type:X.required,message:b,ref:H,...O(X.required,b)},!r))return q(b),D}if(!se&&(!j(V)||!j(y))){let m,b;const E=ne(y),$=ne(V);if(!j(v)&&!isNaN(v)){const M=a.valueAsNumber||v&&+v;j(E.value)||(m=M>E.value),j($.value)||(b=M<$.value)}else{const M=a.valueAsDate||new Date(v),I=de=>new Date(new Date().toDateString()+" "+de),ae=a.type=="time",le=a.type=="week";W(E.value)&&v&&(m=ae?I(v)>I(E.value):le?v>E.value:M>new Date(E.value)),W($.value)&&v&&(b=ae?I(v)<I($.value):le?v<$.value:M<new Date($.value))}if((m||b)&&(pe(!!m,E.message,$.message,X.max,X.min),!r))return q(D[C].message),D}if((L||B)&&!se&&(W(v)||l&&Array.isArray(v))){const m=ne(L),b=ne(B),E=!j(m.value)&&v.length>+m.value,$=!j(b.value)&&v.length<+b.value;if((E||$)&&(pe(E,m.message,b.message),!r))return q(D[C].message),D}if(te&&!se&&W(v)){const{value:m,message:b}=ne(te);if(ve(m)&&!v.match(m)&&(D[C]={type:X.pattern,message:b,ref:a,...O(X.pattern,b)},!r))return q(b),D}if(G){if(J(G)){const m=await G(v,s),b=rt(m,H);if(b&&(D[C]={...b,...O(X.validate,b.message)},!r))return q(b.message),D}else if(T(G)){let m={};for(const b in G){if(!R(m)&&!r)break;const E=rt(await G[b](v,s),H,b);E&&(m={...E,...O(b,E.message)},q(E.message),r&&(D[C]=m))}if(!R(m)&&(D[C]={ref:H,...m},!r))return D}}return q(!0),D};function vr(e,s){const r=s.slice(0,-1).length;let o=0;for(;o<r;)e=F(e)?o++:e[s[o++]];return e}function br(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}function S(e,s){const r=Array.isArray(s)?s:je(s)?[s]:ot(s),o=r.length===1?e:vr(e,r),l=r.length-1,a=r[l];return o&&delete o[a],l!==0&&(T(o)&&R(o)||Array.isArray(o)&&br(o))&&S(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},be=e=>j(e)||!nt(e);function ee(e,s){if(be(e)||be(s))return e===s;if(oe(e)&&oe(s))return e.getTime()===s.getTime();const r=Object.keys(e),o=Object.keys(s);if(r.length!==o.length)return!1;for(const l of r){const a=e[l];if(!o.includes(l))return!1;if(l!=="ref"){const c=s[l];if(oe(a)&&oe(c)||T(a)&&T(c)||Array.isArray(a)&&Array.isArray(c)?!ee(a,c):a!==c)return!1}}return!0}var dt=e=>e.type==="select-multiple",wr=e=>Ce(e)||fe(e),Se=e=>me(e)&&e.isConnected,ct=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function we(e,s={}){const r=Array.isArray(e);if(T(e)||r)for(const o in e)Array.isArray(e[o])||T(e[o])&&!ct(e[o])?(s[o]=Array.isArray(e[o])?[]:{},we(e[o],s[o])):j(e[o])||(s[o]=!0);return s}function ut(e,s,r){const o=Array.isArray(e);if(T(e)||o)for(const l in e)Array.isArray(e[l])||T(e[l])&&!ct(e[l])?F(s)||be(r[l])?r[l]=Array.isArray(e[l])?we(e[l],[]):{...we(e[l])}:ut(e[l],j(s)?{}:s[l],r[l]):r[l]=!ee(e[l],s[l]);return r}var ye=(e,s)=>ut(e,s,we(s)),ft=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:o})=>F(e)?e:s?e===""?NaN:e&&+e:r&&W(e)?new Date(e):o?o(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Le(s)?s.files:Ce(s)?lt(e.refs).value:dt(s)?[...s.selectedOptions].map(({value:r})=>r):fe(s)?at(e.refs).value:ft(F(s.value)?e.ref.value:s.value,e)}var _r=(e,s,r,o)=>{const l={};for(const a of e){const c=h(s,a);c&&k(l,a,c._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:o}},ce=e=>F(e)?e:ve(e)?e.source:T(e)?ve(e.value)?e.value.source:e.value:e,kr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function it(e,s,r){const o=h(e,r);if(o||je(r))return{error:o,name:r};const l=r.split(".");for(;l.length;){const a=l.join("."),c=h(s,a),p=h(e,a);if(c&&!Array.isArray(c)&&r!==a)return{name:r};if(p&&p.type)return{name:a,error:p};l.pop()}return{name:r}}var Vr=(e,s,r,o,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(s||e):(r?o.isOnBlur:l.isOnBlur)?!e:(r?o.isOnChange:l.isOnChange)?e:!0,Fr=(e,s)=>!he(h(e,s)).length&&S(e,s);const Ar={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Dr(e={}){let s={...Ar,...e},r={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},o={},l=T(s.defaultValues)||T(s.values)?U(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:U(l),c={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,B=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Ee(),array:Ee(),state:Ee()},te=Ze(s.mode),G=Ze(s.reValidateMode),C=s.criteriaMode===P.all,_e=t=>i=>{clearTimeout(B),B=setTimeout(t,i)},K=async t=>{if(V.isValid||t){const i=s.resolver?R((await Q()).errors):await O(o,!0);i!==r.isValid&&y.state.next({isValid:i})}},Y=(t,i)=>{(V.isValidating||V.validatingFields)&&((t||Array.from(p.mount)).forEach(n=>{n&&(i?k(r.validatingFields,n,i):S(r.validatingFields,n))}),y.state.next({validatingFields:r.validatingFields,isValidating:!R(r.validatingFields)}))},v=(t,i=[],n,f,u=!0,d=!0)=>{if(f&&n){if(c.action=!0,d&&Array.isArray(h(o,t))){const g=n(h(o,t),f.argA,f.argB);u&&k(o,t,g)}if(d&&Array.isArray(h(r.errors,t))){const g=n(h(r.errors,t),f.argA,f.argB);u&&k(r.errors,t,g),Fr(r.errors,t)}if(V.touchedFields&&d&&Array.isArray(h(r.touchedFields,t))){const g=n(h(r.touchedFields,t),f.argA,f.argB);u&&k(r.touchedFields,t,g)}V.dirtyFields&&(r.dirtyFields=ye(l,a)),y.state.next({name:t,isDirty:m(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(a,t,i)},H=(t,i)=>{k(r.errors,t,i),y.state.next({errors:r.errors})},q=t=>{r.errors=t,y.state.next({errors:r.errors,isValid:!1})},D=(t,i,n,f)=>{const u=h(o,t);if(u){const d=h(a,t,F(n)?h(l,t):n);F(d)||f&&f.defaultChecked||i?k(a,t,i?d:Te(u._f)):$(t,d),c.mount&&K()}},re=(t,i,n,f,u)=>{let d=!1,g=!1;const w={name:t},A=!!(h(o,t)&&h(o,t)._f.disabled);if(!n||f){V.isDirty&&(g=r.isDirty,r.isDirty=w.isDirty=m(),d=g!==w.isDirty);const z=A||ee(h(l,t),i);g=!!(!A&&h(r.dirtyFields,t)),z||A?S(r.dirtyFields,t):k(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,d=d||V.dirtyFields&&g!==!z}if(n){const z=h(r.touchedFields,t);z||(k(r.touchedFields,t,n),w.touchedFields=r.touchedFields,d=d||V.touchedFields&&z!==n)}return d&&u&&y.state.next(w),d?w:{}},ge=(t,i,n,f)=>{const u=h(r.errors,t),d=V.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&n?(L=_e(()=>H(t,n)),L(e.delayError)):(clearTimeout(B),L=null,n?k(r.errors,t,n):S(r.errors,t)),(n?!ee(u,n):u)||!R(f)||d){const g={...f,...d&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},y.state.next(g)}},Q=async t=>{Y(t,!0);const i=await s.resolver(a,s.context,_r(t||p.mount,o,s.criteriaMode,s.shouldUseNativeValidation));return Y(t),i},se=async t=>{const{errors:i}=await Q(t);if(t)for(const n of t){const f=h(i,n);f?k(r.errors,n,f):S(r.errors,n)}else r.errors=i;return i},O=async(t,i,n={valid:!0})=>{for(const f in t){const u=t[f];if(u){const{_f:d,...g}=u;if(d){const w=p.array.has(d.name);Y([f],!0);const A=await st(u,a,C,s.shouldUseNativeValidation&&!i,w);if(Y([f]),A[d.name]&&(n.valid=!1,i))break;!i&&(h(A,d.name)?w?mr(r.errors,A,d.name):k(r.errors,d.name,A[d.name]):S(r.errors,d.name))}g&&await O(g,i,n)}}return n.valid},pe=()=>{for(const t of p.unMount){const i=h(o,t);i&&(i._f.refs?i._f.refs.every(n=>!Se(n)):!Se(i._f.ref))&&ke(t)}p.unMount=new Set},m=(t,i)=>(t&&i&&k(a,t,i),!ee(ze(),l)),b=(t,i,n)=>yr(t,p,{...c.mount?a:F(i)?l:W(t)?{[t]:i}:i},n,i),E=t=>he(h(c.mount?a:l,t,e.shouldUnregister?h(l,t,[]):[])),$=(t,i,n={})=>{const f=h(o,t);let u=i;if(f){const d=f._f;d&&(!d.disabled&&k(a,t,ft(i,d)),u=me(d.ref)&&j(i)?"":i,dt(d.ref)?[...d.ref.options].forEach(g=>g.selected=u.includes(g.value)):d.refs?fe(d.ref)?d.refs.length>1?d.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(u)?!!u.find(w=>w===g.value):u===g.value)):d.refs[0]&&(d.refs[0].checked=!!u):d.refs.forEach(g=>g.checked=g.value===u):Le(d.ref)?d.ref.value="":(d.ref.value=u,d.ref.type||y.values.next({name:t,values:{...a}})))}(n.shouldDirty||n.shouldTouch)&&re(t,u,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(t)},M=(t,i,n)=>{for(const f in i){const u=i[f],d=`${t}.${f}`,g=h(o,d);(p.array.has(t)||!be(u)||g&&!g._f)&&!oe(u)?M(d,u,n):$(d,u,n)}},I=(t,i,n={})=>{const f=h(o,t),u=p.array.has(t),d=U(i);k(a,t,d),u?(y.array.next({name:t,values:{...a}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&y.state.next({name:t,dirtyFields:ye(l,a),isDirty:m(t,d)})):f&&!f._f&&!j(d)?M(t,d,n):$(t,d,n),Je(t,p)&&y.state.next({...r}),y.values.next({name:c.mount?t:void 0,values:{...a}})},ae=async t=>{c.mount=!0;const i=t.target;let n=i.name,f=!0;const u=h(o,n),d=()=>i.type?Te(u._f):dr(t),g=w=>{f=Number.isNaN(w)||w===h(a,n,w)};if(u){let w,A;const z=d(),ie=t.type===Ye.BLUR||t.type===Ye.FOCUS_OUT,xt=!kr(u._f)&&!s.resolver&&!h(r.errors,n)&&!u._f.deps||Vr(ie,h(r.touchedFields,n),r.isSubmitted,G,te),Fe=Je(n,p,ie);k(a,n,z),ie?(u._f.onBlur&&u._f.onBlur(t),L&&L(0)):u._f.onChange&&u._f.onChange(t);const Ae=re(n,z,ie,!1),mt=!R(Ae)||Fe;if(!ie&&y.values.next({name:n,type:t.type,values:{...a}}),xt)return V.isValid&&K(),mt&&y.state.next({name:n,...Fe?{}:Ae});if(!ie&&Fe&&y.state.next({...r}),s.resolver){const{errors:Pe}=await Q([n]);if(g(z),f){const vt=it(r.errors,o,n),We=it(Pe,o,vt.name||n);w=We.error,n=We.name,A=R(Pe)}}else Y([n],!0),w=(await st(u,a,C,s.shouldUseNativeValidation))[n],Y([n]),g(z),f&&(w?A=!1:V.isValid&&(A=await O(o,!0)));f&&(u._f.deps&&de(u._f.deps),ge(n,A,w,Ae))}},le=(t,i)=>{if(h(r.errors,i)&&t.focus)return t.focus(),1},de=async(t,i={})=>{let n,f;const u=De(t);if(s.resolver){const d=await se(F(t)?t:u);n=R(d),f=t?!u.some(g=>h(d,g)):n}else t?(f=(await Promise.all(u.map(async d=>{const g=h(o,d);return await O(g&&g._f?{[d]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&K()):f=n=await O(o);return y.state.next({...!W(t)||V.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!f&&ue(o,le,t?u:p.mount),f},ze=t=>{const i={...c.mount?a:l};return F(t)?i:W(t)?h(i,t):t.map(n=>h(i,n))},Re=(t,i)=>({invalid:!!h((i||r).errors,t),isDirty:!!h((i||r).dirtyFields,t),isTouched:!!h((i||r).touchedFields,t),isValidating:!!h((i||r).validatingFields,t),error:h((i||r).errors,t)}),ht=t=>{t&&De(t).forEach(i=>S(r.errors,i)),y.state.next({errors:t?r.errors:{}})},Be=(t,i,n)=>{const f=(h(o,t,{_f:{}})._f||{}).ref,u=h(r.errors,t)||{},{ref:d,message:g,type:w,...A}=u;k(r.errors,t,{...A,...i,ref:f}),y.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},gt=(t,i)=>J(t)?y.values.subscribe({next:n=>t(b(void 0,i),n)}):b(t,i,!0),ke=(t,i={})=>{for(const n of t?De(t):p.mount)p.mount.delete(n),p.array.delete(n),i.keepValue||(S(o,n),S(a,n)),!i.keepError&&S(r.errors,n),!i.keepDirty&&S(r.dirtyFields,n),!i.keepTouched&&S(r.touchedFields,n),!i.keepIsValidating&&S(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&S(l,n);y.values.next({values:{...a}}),y.state.next({...r,...i.keepDirty?{isDirty:m()}:{}}),!i.keepIsValid&&K()},Oe=({disabled:t,name:i,field:n,fields:f,value:u})=>{if(Z(t)&&c.mount||t){const d=t?void 0:F(u)?Te(n?n._f:h(f,i)._f):u;k(a,i,d),re(i,d,!1,!1,!0)}},Ve=(t,i={})=>{let n=h(o,t);const f=Z(i.disabled);return k(o,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),p.mount.add(t),n?Oe({field:n,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:u=>{if(u){Ve(t,i),n=h(o,t);const d=F(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,g=wr(d),w=n._f.refs||[];if(g?w.find(A=>A===d):d===n._f.ref)return;k(o,t,{_f:{...n._f,...g?{refs:[...w.filter(Se),d,...Array.isArray(h(l,t))?[{}]:[]],ref:{type:d.type,name:t}}:{ref:d}}}),D(t,!1,void 0,d)}else n=h(o,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(ur(p.array,t)&&c.action)&&p.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&ue(o,le,p.mount),pt=t=>{Z(t)&&(y.state.next({disabled:t}),ue(o,(i,n)=>{const f=h(o,n);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(u=>{u.disabled=f._f.disabled||t}))},0,!1))},Ue=(t,i)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let u=U(a);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:g}=await Q();r.errors=d,u=g}else await O(o);if(S(r.errors,"root"),R(r.errors)){y.state.next({errors:{}});try{await t(u,n)}catch(d){f=d}}else i&&await i({...r.errors},n),Ie(),setTimeout(Ie);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},yt=(t,i={})=>{h(o,t)&&(F(i.defaultValue)?I(t,U(h(l,t))):(I(t,i.defaultValue),k(l,t,U(i.defaultValue))),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?m(t,U(h(l,t))):m()),i.keepError||(S(r.errors,t),V.isValid&&K()),y.state.next({...r}))},Ne=(t,i={})=>{const n=t?U(t):l,f=U(n),u=R(t),d=u?l:f;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const g of p.mount)h(r.dirtyFields,g)?k(d,g,h(a,g)):I(g,h(d,g));else{if($e&&F(t))for(const g of p.mount){const w=h(o,g);if(w&&w._f){const A=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(me(A)){const z=A.closest("form");if(z){z.reset();break}}}}o={}}a=e.shouldUnregister?i.keepDefaultValues?U(l):{}:U(d),y.array.next({values:{...d}}),y.values.next({values:{...d}})}p={mount:i.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,c.watch=!!e.shouldUnregister,y.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:u?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?[]:i.keepDirtyValues?i.keepDefaultValues&&a?ye(l,a):r.dirtyFields:i.keepDefaultValues&&t?ye(l,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Me=(t,i)=>Ne(J(t)?t(a):t,i);return{control:{register:Ve,unregister:ke,getFieldState:Re,handleSubmit:Ue,setError:Be,_executeSchema:Q,_getWatch:b,_getDirty:m,_updateValid:K,_removeUnmounted:pe,_updateFieldArray:v,_updateDisabledField:Oe,_getFieldArray:E,_reset:Ne,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(t=>{Me(t,s.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:pt,_subjects:y,_proxyFormState:V,_setErrors:q,get _fields(){return o},get _formValues(){return a},get _state(){return c},set _state(t){c=t},get _defaultValues(){return l},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:de,register:Ve,handleSubmit:Ue,watch:gt,setValue:I,getValues:ze,reset:Me,resetField:yt,clearErrors:ht,unregister:ke,setError:Be,setFocus:(t,i={})=>{const n=h(o,t),f=n&&n._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&u.select())}},getFieldState:Re}}function Er(e={}){const s=N.useRef(),r=N.useRef(),[o,l]=N.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Dr(e),formState:o});const a=s.current.control;return a._options=e,pr({subject:a._subjects.state,next:c=>{gr(c,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),N.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),N.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==o.isDirty&&a._subjects.state.next({isDirty:c})}},[a,o.isDirty]),N.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,l(c=>({...c}))):a._resetDefaultValues()},[e.values,a]),N.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),N.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),N.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=hr(o,a),s.current}const Sr=()=>{const e=wt(),[s,r]=_t.useState(!1),{register:o,handleSubmit:l,reset:a,formState:{errors:c,isValid:p}}=Er({mode:"onBlur",defaultValues:{email:"",password:""}}),L=y=>{const te={email:y.email,password:y.password};e(kt(te)),console.log("Email:",y.email),console.log("Password:",y.password),a()},B=y=>{y.preventDefault(),l(L)()},V=()=>{r(!s)};return x.jsxs(er,{children:[x.jsx(Qt,{text:"Log in"}),x.jsx(tr,{children:"Welcome! Please enter your credentials to login to the platform:"}),x.jsxs("form",{onSubmit:B,children:[x.jsxs(rr,{children:[x.jsx(Xe,{type:"email",placeholder:"Email",$isInvalid:c.email,$isValid:!c.email&&p,...o("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(c==null?void 0:c.email)&&x.jsx(Ge,{children:c==null?void 0:c.email.message}),p&&!(c!=null&&c.email)&&x.jsx(Ke,{isValid:!0,children:"Email successfully validated!"}),x.jsxs(sr,{children:[x.jsx(Xe,{type:s?"text":"password",placeholder:"Password",$isInvalid:c==null?void 0:c.password,$isValid:!(c!=null&&c.password)&&p,...o("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),x.jsx(ir,{onClick:V,children:s?x.jsx(qe,{name:"open-eye",width:18,height:18}):x.jsx(qe,{name:"close-eye",width:18,height:18})})]}),(c==null?void 0:c.password)&&x.jsx(Ge,{children:c==null?void 0:c.password.message}),p&&!(c!=null&&c.password)&&x.jsx(Ke,{isValid:!0,children:"Password is secure"})]}),x.jsx(nr,{type:"submit",disabled:!p,children:"Log in"}),x.jsx(or,{children:x.jsxs(ar,{children:["Don’t have an account?"," ",x.jsxs(lr,{to:"/registration",children:[" ","Register"]})]})})]})]})},Cr=()=>x.jsxs(Bt,{children:[x.jsxs(Tt,{children:[x.jsx(Ot,{}),x.jsx(Zt,{})]}),x.jsx(Sr,{})]});export{Cr as default};
