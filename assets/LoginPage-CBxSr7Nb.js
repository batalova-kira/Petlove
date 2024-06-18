import{u as _,j as x,a as qe,N as kt,R as U,b as Vt,r as Ft,I as ne,l as At}from"./index-BgFiWkG6.js";const Dt="/petlove/shape_bcgr_mob1.png",Et="/petlove/shape_bcgr_tab1.png",St="/petlove/shape_bcgr_desk1.png",jt=_.div`
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
`,Tt=_.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${Dt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${Et}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${St}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,$t=_.div`
    display: inline-block;
`,Lt=({children:e})=>x.jsxs(jt,{children:[x.jsx(Tt,{}),x.jsx($t,{children:e})]}),Ct="/petlove/images/dog_hero_mob_x1.png",zt="/petlove/images/dog_hero_mob_x2.png",Rt="/petlove/images/dog_hero_tabx1.png",Bt="/petlove/images/dog_hero_tabx2.png",Ot="/petlove/images/dog_hero_desk_x1.png",It="/petlove/images/dog_hero_desk_x2.png",Mt=_.div`
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
`,Ut=_.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${Ct}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${zt}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${Rt}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Bt}) no-repeat center center;
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

        background: url(${Ot}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${It}) no-repeat center center;
            background-size: cover;
        }
    }
`,Nt="/petlove/images/🐶avatar_dog.png",Pt="/petlove/images/🐶avatar_dog_x2.png",Wt=_.div`
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
`,Ht=_.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,qt=_.div`
    width: 32px;
    height: 32px;
    background: url(${Nt}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${Pt}) no-repeat center center;
        background-size: cover;
        z-index: 20;
    }
`,Xt=_.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Gt=_.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Yt=_.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Kt=_.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Zt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Jt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Qt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,er=()=>x.jsxs(Wt,{children:[x.jsx(Ht,{children:x.jsx(qt,{})}),x.jsxs(Xt,{children:[x.jsxs(Gt,{children:[x.jsx(Yt,{children:"Rich"}),x.jsxs(Kt,{children:[x.jsx(Zt,{children:"Birthday: "}),x.jsx(Jt,{children:"21.09.2020"})]})]}),x.jsx(Qt,{children:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]})]}),tr=_.h1`
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
`,rr=({text:e,color:s})=>x.jsx(tr,{color:s,children:e}),sr=_.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,ir=_.div`
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
`,nr=_.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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

    ${({$isinvalid:e})=>e&&qe`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&qe`
            border-color: ${s=>s.theme.colors.green};
        `}

        @media only screen and (min-width: 768px) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,Ge=_.div`
    position: relative;
    width: 100%;
`,Ye=_.div`
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
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,Ke=_.div`
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

    @media only screen and (min-width: 768px) {
        top: 23px;
        right: 46px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,or=_.div`
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
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,Ze=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Je=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,ar=_.button`
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
`,lr=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,dr=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,cr=_(kt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var he=e=>e.type==="checkbox",ae=e=>e instanceof Date,$=e=>e==null;const lt=e=>typeof e=="object";var j=e=>!$(e)&&!Array.isArray(e)&&lt(e)&&!ae(e),ur=e=>j(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,fr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,hr=(e,s)=>e.has(fr(s)),gr=e=>{const s=e.constructor&&e.constructor.prototype;return j(s)&&s.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(r||j(e)))if(s=r?[]:{},!r&&!gr(e))s=e;else for(const o in e)e.hasOwnProperty(o)&&(s[o]=M(e[o]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,h=(e,s,r)=>{if(!s||!j(e))return r;const o=ge(s.split(/[,[\].]+?/)).reduce((d,a)=>$(d)?d:d[a],e);return F(o)||o===e?F(e[s])?r:e[s]:o},Z=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),dt=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,s,r)=>{let o=-1;const d=Le(s)?[s]:dt(s),a=d.length,l=a-1;for(;++o<a;){const p=d[o];let L=r;if(o!==l){const B=e[p];L=j(B)||Array.isArray(B)?B:isNaN(+d[o+1])?{}:[]}if(p==="__proto__")return;e[p]=L,e=e[p]}return e};const Qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var pr=(e,s,r,o=!0)=>{const d={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(d,a,{get:()=>{const l=a;return s._proxyFormState[l]!==P.all&&(s._proxyFormState[l]=!o||P.all),r&&(r[l]=!0),e[l]}});return d},R=e=>j(e)&&!Object.keys(e).length,xr=(e,s,r,o)=>{r(e);const{name:d,...a}=e;return R(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(l=>s[l]===(!o||P.all))},Ee=e=>Array.isArray(e)?e:[e];function yr(e){const s=U.useRef(e);s.current=e,U.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",mr=(e,s,r,o,d)=>W(e)?(o&&s.watch.add(e),h(r,e,d)):Array.isArray(e)?e.map(a=>(o&&s.watch.add(a),h(r,a))):(o&&(s.watchAll=!0),r),vr=(e,s,r,o,d)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[o]:d||!0}}:{},et=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),tt=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const fe=(e,s,r,o)=>{for(const d of r||Object.keys(e)){const a=h(e,d);if(a){const{_f:l,...p}=a;if(l){if(l.refs&&l.refs[0]&&s(l.refs[0],d)&&!o)break;if(l.ref&&s(l.ref,l.name)&&!o)break;fe(p,s)}else j(p)&&fe(p,s)}}};var br=(e,s,r)=>{const o=ge(h(e,r));return k(o,"root",s[r]),k(e,r,o),e},Ce=e=>e.type==="file",J=e=>typeof e=="function",ve=e=>{if(!$e)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},me=e=>W(e),ze=e=>e.type==="radio",be=e=>e instanceof RegExp;const rt={value:!1,isValid:!1},st={value:!0,isValid:!0};var ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?st:{value:e[0].value,isValid:!0}:st:rt}return rt};const it={isValid:!1,value:null};var ut=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,it):it;function nt(e,s,r="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||Z(e)&&!e)return{type:r,message:me(e)?e:"",ref:s}}var oe=e=>j(e)&&!be(e)?e:{value:e,message:""},ot=async(e,s,r,o,d)=>{const{ref:a,refs:l,required:p,maxLength:L,minLength:B,min:V,max:y,pattern:te,validate:G,name:C,valueAsNumber:ke,mount:Y,disabled:K}=e._f,v=h(s,C);if(!Y||K)return{};const H=l?l[0]:a,q=m=>{o&&H.reportValidity&&(H.setCustomValidity(Z(m)?"":m||""),H.reportValidity())},D={},re=ze(a),pe=he(a),Q=re||pe,se=(ke||Ce(a))&&F(a.value)&&F(v)||ve(a)&&a.value===""||v===""||Array.isArray(v)&&!v.length,O=vr.bind(null,C,r,D),xe=(m,b,E,T=X.maxLength,N=X.minLength)=>{const I=m?b:E;D[C]={type:m?T:N,message:I,ref:a,...O(m?T:N,I)}};if(d?!Array.isArray(v)||!v.length:p&&(!Q&&(se||$(v))||Z(v)&&!v||pe&&!ct(l).isValid||re&&!ut(l).isValid)){const{value:m,message:b}=me(p)?{value:!!p,message:p}:oe(p);if(m&&(D[C]={type:X.required,message:b,ref:H,...O(X.required,b)},!r))return q(b),D}if(!se&&(!$(V)||!$(y))){let m,b;const E=oe(y),T=oe(V);if(!$(v)&&!isNaN(v)){const N=a.valueAsNumber||v&&+v;$(E.value)||(m=N>E.value),$(T.value)||(b=N<T.value)}else{const N=a.valueAsDate||new Date(v),I=ce=>new Date(new Date().toDateString()+" "+ce),le=a.type=="time",de=a.type=="week";W(E.value)&&v&&(m=le?I(v)>I(E.value):de?v>E.value:N>new Date(E.value)),W(T.value)&&v&&(b=le?I(v)<I(T.value):de?v<T.value:N<new Date(T.value))}if((m||b)&&(xe(!!m,E.message,T.message,X.max,X.min),!r))return q(D[C].message),D}if((L||B)&&!se&&(W(v)||d&&Array.isArray(v))){const m=oe(L),b=oe(B),E=!$(m.value)&&v.length>+m.value,T=!$(b.value)&&v.length<+b.value;if((E||T)&&(xe(E,m.message,b.message),!r))return q(D[C].message),D}if(te&&!se&&W(v)){const{value:m,message:b}=oe(te);if(be(m)&&!v.match(m)&&(D[C]={type:X.pattern,message:b,ref:a,...O(X.pattern,b)},!r))return q(b),D}if(G){if(J(G)){const m=await G(v,s),b=nt(m,H);if(b&&(D[C]={...b,...O(X.validate,b.message)},!r))return q(b.message),D}else if(j(G)){let m={};for(const b in G){if(!R(m)&&!r)break;const E=nt(await G[b](v,s),H,b);E&&(m={...E,...O(b,E.message)},q(E.message),r&&(D[C]=m))}if(!R(m)&&(D[C]={ref:H,...m},!r))return D}}return q(!0),D};function wr(e,s){const r=s.slice(0,-1).length;let o=0;for(;o<r;)e=F(e)?o++:e[s[o++]];return e}function _r(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}function S(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:dt(s),o=r.length===1?e:wr(e,r),d=r.length-1,a=r[d];return o&&delete o[a],d!==0&&(j(o)&&R(o)||Array.isArray(o)&&_r(o))&&S(e,r.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:d=>{for(const a of e)a.next&&a.next(d)},subscribe:d=>(e.push(d),{unsubscribe:()=>{e=e.filter(a=>a!==d)}}),unsubscribe:()=>{e=[]}}},we=e=>$(e)||!lt(e);function ee(e,s){if(we(e)||we(s))return e===s;if(ae(e)&&ae(s))return e.getTime()===s.getTime();const r=Object.keys(e),o=Object.keys(s);if(r.length!==o.length)return!1;for(const d of r){const a=e[d];if(!o.includes(d))return!1;if(d!=="ref"){const l=s[d];if(ae(a)&&ae(l)||j(a)&&j(l)||Array.isArray(a)&&Array.isArray(l)?!ee(a,l):a!==l)return!1}}return!0}var ft=e=>e.type==="select-multiple",kr=e=>ze(e)||he(e),je=e=>ve(e)&&e.isConnected,ht=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(j(e)||r)for(const o in e)Array.isArray(e[o])||j(e[o])&&!ht(e[o])?(s[o]=Array.isArray(e[o])?[]:{},_e(e[o],s[o])):$(e[o])||(s[o]=!0);return s}function gt(e,s,r){const o=Array.isArray(e);if(j(e)||o)for(const d in e)Array.isArray(e[d])||j(e[d])&&!ht(e[d])?F(s)||we(r[d])?r[d]=Array.isArray(e[d])?_e(e[d],[]):{..._e(e[d])}:gt(e[d],$(s)?{}:s[d],r[d]):r[d]=!ee(e[d],s[d]);return r}var ye=(e,s)=>gt(e,s,_e(s)),pt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:o})=>F(e)?e:s?e===""?NaN:e&&+e:r&&W(e)?new Date(e):o?o(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ce(s)?s.files:ze(s)?ut(e.refs).value:ft(s)?[...s.selectedOptions].map(({value:r})=>r):he(s)?ct(e.refs).value:pt(F(s.value)?e.ref.value:s.value,e)}var Vr=(e,s,r,o)=>{const d={};for(const a of e){const l=h(s,a);l&&k(d,a,l._f)}return{criteriaMode:r,names:[...e],fields:d,shouldUseNativeValidation:o}},ue=e=>F(e)?e:be(e)?e.source:j(e)?be(e.value)?e.value.source:e.value:e,Fr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function at(e,s,r){const o=h(e,r);if(o||Le(r))return{error:o,name:r};const d=r.split(".");for(;d.length;){const a=d.join("."),l=h(s,a),p=h(e,a);if(l&&!Array.isArray(l)&&r!==a)return{name:r};if(p&&p.type)return{name:a,error:p};d.pop()}return{name:r}}var Ar=(e,s,r,o,d)=>d.isOnAll?!1:!r&&d.isOnTouch?!(s||e):(r?o.isOnBlur:d.isOnBlur)?!e:(r?o.isOnChange:d.isOnChange)?e:!0,Dr=(e,s)=>!ge(h(e,s)).length&&S(e,s);const Er={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Sr(e={}){let s={...Er,...e},r={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},o={},d=j(s.defaultValues)||j(s.values)?M(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:M(d),l={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,B=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Se(),array:Se(),state:Se()},te=et(s.mode),G=et(s.reValidateMode),C=s.criteriaMode===P.all,ke=t=>i=>{clearTimeout(B),B=setTimeout(t,i)},Y=async t=>{if(V.isValid||t){const i=s.resolver?R((await Q()).errors):await O(o,!0);i!==r.isValid&&y.state.next({isValid:i})}},K=(t,i)=>{(V.isValidating||V.validatingFields)&&((t||Array.from(p.mount)).forEach(n=>{n&&(i?k(r.validatingFields,n,i):S(r.validatingFields,n))}),y.state.next({validatingFields:r.validatingFields,isValidating:!R(r.validatingFields)}))},v=(t,i=[],n,f,u=!0,c=!0)=>{if(f&&n){if(l.action=!0,c&&Array.isArray(h(o,t))){const g=n(h(o,t),f.argA,f.argB);u&&k(o,t,g)}if(c&&Array.isArray(h(r.errors,t))){const g=n(h(r.errors,t),f.argA,f.argB);u&&k(r.errors,t,g),Dr(r.errors,t)}if(V.touchedFields&&c&&Array.isArray(h(r.touchedFields,t))){const g=n(h(r.touchedFields,t),f.argA,f.argB);u&&k(r.touchedFields,t,g)}V.dirtyFields&&(r.dirtyFields=ye(d,a)),y.state.next({name:t,isDirty:m(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(a,t,i)},H=(t,i)=>{k(r.errors,t,i),y.state.next({errors:r.errors})},q=t=>{r.errors=t,y.state.next({errors:r.errors,isValid:!1})},D=(t,i,n,f)=>{const u=h(o,t);if(u){const c=h(a,t,F(n)?h(d,t):n);F(c)||f&&f.defaultChecked||i?k(a,t,i?c:Te(u._f)):T(t,c),l.mount&&Y()}},re=(t,i,n,f,u)=>{let c=!1,g=!1;const w={name:t},A=!!(h(o,t)&&h(o,t)._f.disabled);if(!n||f){V.isDirty&&(g=r.isDirty,r.isDirty=w.isDirty=m(),c=g!==w.isDirty);const z=A||ee(h(d,t),i);g=!!(!A&&h(r.dirtyFields,t)),z||A?S(r.dirtyFields,t):k(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,c=c||V.dirtyFields&&g!==!z}if(n){const z=h(r.touchedFields,t);z||(k(r.touchedFields,t,n),w.touchedFields=r.touchedFields,c=c||V.touchedFields&&z!==n)}return c&&u&&y.state.next(w),c?w:{}},pe=(t,i,n,f)=>{const u=h(r.errors,t),c=V.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&n?(L=ke(()=>H(t,n)),L(e.delayError)):(clearTimeout(B),L=null,n?k(r.errors,t,n):S(r.errors,t)),(n?!ee(u,n):u)||!R(f)||c){const g={...f,...c&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},y.state.next(g)}},Q=async t=>{K(t,!0);const i=await s.resolver(a,s.context,Vr(t||p.mount,o,s.criteriaMode,s.shouldUseNativeValidation));return K(t),i},se=async t=>{const{errors:i}=await Q(t);if(t)for(const n of t){const f=h(i,n);f?k(r.errors,n,f):S(r.errors,n)}else r.errors=i;return i},O=async(t,i,n={valid:!0})=>{for(const f in t){const u=t[f];if(u){const{_f:c,...g}=u;if(c){const w=p.array.has(c.name);K([f],!0);const A=await ot(u,a,C,s.shouldUseNativeValidation&&!i,w);if(K([f]),A[c.name]&&(n.valid=!1,i))break;!i&&(h(A,c.name)?w?br(r.errors,A,c.name):k(r.errors,c.name,A[c.name]):S(r.errors,c.name))}g&&await O(g,i,n)}}return n.valid},xe=()=>{for(const t of p.unMount){const i=h(o,t);i&&(i._f.refs?i._f.refs.every(n=>!je(n)):!je(i._f.ref))&&Ve(t)}p.unMount=new Set},m=(t,i)=>(t&&i&&k(a,t,i),!ee(Re(),d)),b=(t,i,n)=>mr(t,p,{...l.mount?a:F(i)?d:W(t)?{[t]:i}:i},n,i),E=t=>ge(h(l.mount?a:d,t,e.shouldUnregister?h(d,t,[]):[])),T=(t,i,n={})=>{const f=h(o,t);let u=i;if(f){const c=f._f;c&&(!c.disabled&&k(a,t,pt(i,c)),u=ve(c.ref)&&$(i)?"":i,ft(c.ref)?[...c.ref.options].forEach(g=>g.selected=u.includes(g.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(u)?!!u.find(w=>w===g.value):u===g.value)):c.refs[0]&&(c.refs[0].checked=!!u):c.refs.forEach(g=>g.checked=g.value===u):Ce(c.ref)?c.ref.value="":(c.ref.value=u,c.ref.type||y.values.next({name:t,values:{...a}})))}(n.shouldDirty||n.shouldTouch)&&re(t,u,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ce(t)},N=(t,i,n)=>{for(const f in i){const u=i[f],c=`${t}.${f}`,g=h(o,c);(p.array.has(t)||!we(u)||g&&!g._f)&&!ae(u)?N(c,u,n):T(c,u,n)}},I=(t,i,n={})=>{const f=h(o,t),u=p.array.has(t),c=M(i);k(a,t,c),u?(y.array.next({name:t,values:{...a}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&y.state.next({name:t,dirtyFields:ye(d,a),isDirty:m(t,c)})):f&&!f._f&&!$(c)?N(t,c,n):T(t,c,n),tt(t,p)&&y.state.next({...r}),y.values.next({name:l.mount?t:void 0,values:{...a}})},le=async t=>{l.mount=!0;const i=t.target;let n=i.name,f=!0;const u=h(o,n),c=()=>i.type?Te(u._f):ur(t),g=w=>{f=Number.isNaN(w)||w===h(a,n,w)};if(u){let w,A;const z=c(),ie=t.type===Qe.BLUR||t.type===Qe.FOCUS_OUT,bt=!Fr(u._f)&&!s.resolver&&!h(r.errors,n)&&!u._f.deps||Ar(ie,h(r.touchedFields,n),r.isSubmitted,G,te),Ae=tt(n,p,ie);k(a,n,z),ie?(u._f.onBlur&&u._f.onBlur(t),L&&L(0)):u._f.onChange&&u._f.onChange(t);const De=re(n,z,ie,!1),wt=!R(De)||Ae;if(!ie&&y.values.next({name:n,type:t.type,values:{...a}}),bt)return V.isValid&&Y(),wt&&y.state.next({name:n,...Ae?{}:De});if(!ie&&Ae&&y.state.next({...r}),s.resolver){const{errors:We}=await Q([n]);if(g(z),f){const _t=at(r.errors,o,n),He=at(We,o,_t.name||n);w=He.error,n=He.name,A=R(We)}}else K([n],!0),w=(await ot(u,a,C,s.shouldUseNativeValidation))[n],K([n]),g(z),f&&(w?A=!1:V.isValid&&(A=await O(o,!0)));f&&(u._f.deps&&ce(u._f.deps),pe(n,A,w,De))}},de=(t,i)=>{if(h(r.errors,i)&&t.focus)return t.focus(),1},ce=async(t,i={})=>{let n,f;const u=Ee(t);if(s.resolver){const c=await se(F(t)?t:u);n=R(c),f=t?!u.some(g=>h(c,g)):n}else t?(f=(await Promise.all(u.map(async c=>{const g=h(o,c);return await O(g&&g._f?{[c]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&Y()):f=n=await O(o);return y.state.next({...!W(t)||V.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!f&&fe(o,de,t?u:p.mount),f},Re=t=>{const i={...l.mount?a:d};return F(t)?i:W(t)?h(i,t):t.map(n=>h(i,n))},Be=(t,i)=>({invalid:!!h((i||r).errors,t),isDirty:!!h((i||r).dirtyFields,t),isTouched:!!h((i||r).touchedFields,t),isValidating:!!h((i||r).validatingFields,t),error:h((i||r).errors,t)}),xt=t=>{t&&Ee(t).forEach(i=>S(r.errors,i)),y.state.next({errors:t?r.errors:{}})},Oe=(t,i,n)=>{const f=(h(o,t,{_f:{}})._f||{}).ref,u=h(r.errors,t)||{},{ref:c,message:g,type:w,...A}=u;k(r.errors,t,{...A,...i,ref:f}),y.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},yt=(t,i)=>J(t)?y.values.subscribe({next:n=>t(b(void 0,i),n)}):b(t,i,!0),Ve=(t,i={})=>{for(const n of t?Ee(t):p.mount)p.mount.delete(n),p.array.delete(n),i.keepValue||(S(o,n),S(a,n)),!i.keepError&&S(r.errors,n),!i.keepDirty&&S(r.dirtyFields,n),!i.keepTouched&&S(r.touchedFields,n),!i.keepIsValidating&&S(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&S(d,n);y.values.next({values:{...a}}),y.state.next({...r,...i.keepDirty?{isDirty:m()}:{}}),!i.keepIsValid&&Y()},Ie=({disabled:t,name:i,field:n,fields:f,value:u})=>{if(Z(t)&&l.mount||t){const c=t?void 0:F(u)?Te(n?n._f:h(f,i)._f):u;k(a,i,c),re(i,c,!1,!1,!0)}},Fe=(t,i={})=>{let n=h(o,t);const f=Z(i.disabled);return k(o,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),p.mount.add(t),n?Ie({field:n,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:t,onChange:le,onBlur:le,ref:u=>{if(u){Fe(t,i),n=h(o,t);const c=F(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,g=kr(c),w=n._f.refs||[];if(g?w.find(A=>A===c):c===n._f.ref)return;k(o,t,{_f:{...n._f,...g?{refs:[...w.filter(je),c,...Array.isArray(h(d,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),D(t,!1,void 0,c)}else n=h(o,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(hr(p.array,t)&&l.action)&&p.unMount.add(t)}}},Me=()=>s.shouldFocusError&&fe(o,de,p.mount),mt=t=>{Z(t)&&(y.state.next({disabled:t}),fe(o,(i,n)=>{const f=h(o,n);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(u=>{u.disabled=f._f.disabled||t}))},0,!1))},Ue=(t,i)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let u=M(a);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:g}=await Q();r.errors=c,u=g}else await O(o);if(S(r.errors,"root"),R(r.errors)){y.state.next({errors:{}});try{await t(u,n)}catch(c){f=c}}else i&&await i({...r.errors},n),Me(),setTimeout(Me);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},vt=(t,i={})=>{h(o,t)&&(F(i.defaultValue)?I(t,M(h(d,t))):(I(t,i.defaultValue),k(d,t,M(i.defaultValue))),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?m(t,M(h(d,t))):m()),i.keepError||(S(r.errors,t),V.isValid&&Y()),y.state.next({...r}))},Ne=(t,i={})=>{const n=t?M(t):d,f=M(n),u=R(t),c=u?d:f;if(i.keepDefaultValues||(d=n),!i.keepValues){if(i.keepDirtyValues)for(const g of p.mount)h(r.dirtyFields,g)?k(c,g,h(a,g)):I(g,h(c,g));else{if($e&&F(t))for(const g of p.mount){const w=h(o,g);if(w&&w._f){const A=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(ve(A)){const z=A.closest("form");if(z){z.reset();break}}}}o={}}a=e.shouldUnregister?i.keepDefaultValues?M(d):{}:M(c),y.array.next({values:{...c}}),y.values.next({values:{...c}})}p={mount:i.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,l.watch=!!e.shouldUnregister,y.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:u?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,d)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?[]:i.keepDirtyValues?i.keepDefaultValues&&a?ye(d,a):r.dirtyFields:i.keepDefaultValues&&t?ye(d,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(t,i)=>Ne(J(t)?t(a):t,i);return{control:{register:Fe,unregister:Ve,getFieldState:Be,handleSubmit:Ue,setError:Oe,_executeSchema:Q,_getWatch:b,_getDirty:m,_updateValid:Y,_removeUnmounted:xe,_updateFieldArray:v,_updateDisabledField:Ie,_getFieldArray:E,_reset:Ne,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:mt,_subjects:y,_proxyFormState:V,_setErrors:q,get _fields(){return o},get _formValues(){return a},get _state(){return l},set _state(t){l=t},get _defaultValues(){return d},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ce,register:Fe,handleSubmit:Ue,watch:yt,setValue:I,getValues:Re,reset:Pe,resetField:vt,clearErrors:xt,unregister:Ve,setError:Oe,setFocus:(t,i={})=>{const n=h(o,t),f=n&&n._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&u.select())}},getFieldState:Be}}function jr(e={}){const s=U.useRef(),r=U.useRef(),[o,d]=U.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Sr(e),formState:o});const a=s.current.control;return a._options=e,yr({subject:a._subjects.state,next:l=>{xr(l,a._proxyFormState,a._updateFormState,!0)&&d({...a._formState})}}),U.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),U.useEffect(()=>{if(a._proxyFormState.isDirty){const l=a._getDirty();l!==o.isDirty&&a._subjects.state.next({isDirty:l})}},[a,o.isDirty]),U.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,d(l=>({...l}))):a._resetDefaultValues()},[e.values,a]),U.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),U.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=pr(o,a),s.current}const Tr=()=>{const e=Vt(),[s,r]=Ft.useState(!1),{register:o,handleSubmit:d,reset:a,formState:{errors:l,isValid:p}}=jr({mode:"onChange",defaultValues:{email:"",password:""}}),L=y=>{const te={email:y.email,password:y.password};e(At(te)),console.log("Email:",y.email),console.log("Password:",y.password),a()},B=y=>{y.preventDefault(),d(L)()},V=()=>{r(!s)};return x.jsxs(sr,{children:[x.jsx(rr,{text:"Log in"}),x.jsx(ir,{children:"Welcome! Please enter your credentials to login to the platform:"}),x.jsxs("form",{onSubmit:B,children:[x.jsxs(nr,{children:[x.jsxs(Ge,{children:[x.jsx(Xe,{type:"email",placeholder:"Email",$isinvalid:l.email,$isvalid:!l.email&&p,...o("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(l==null?void 0:l.email)&&x.jsx(Ze,{children:l==null?void 0:l.email.message}),p&&!(l!=null&&l.email)&&x.jsx(Je,{isValid:!0,children:"Email successfully validated!"}),(l==null?void 0:l.email)&&x.jsx(Ye,{children:x.jsx(ne,{name:"red-false",width:18,height:18})}),p&&!(l!=null&&l.email)&&x.jsx(Ye,{children:x.jsx(ne,{name:"green-success",width:18,height:18})})]}),x.jsxs(Ge,{children:[x.jsx(Xe,{type:s?"text":"password",placeholder:"Password",$isinvalid:l==null?void 0:l.password,$isvalid:!(l!=null&&l.password)&&p,...o("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),x.jsx(or,{onClick:V,children:s?x.jsx(ne,{name:"open-eye",width:18,height:18}):x.jsx(ne,{name:"close-eye",width:18,height:18})}),(l==null?void 0:l.password)&&x.jsx(Ze,{children:l==null?void 0:l.password.message}),p&&!(l!=null&&l.password)&&x.jsx(Je,{isValid:!0,children:"Password is secure"}),(l==null?void 0:l.password)&&x.jsx(Ke,{children:x.jsx(ne,{name:"red-false",width:18,height:18})}),p&&!(l!=null&&l.password)&&x.jsx(Ke,{children:x.jsx(ne,{name:"green-success",width:18,height:18})})]})]}),x.jsx(ar,{type:"submit",id:"loginBtn",children:"Log in"}),x.jsx(lr,{children:x.jsxs(dr,{children:["Don’t have an account?"," ",x.jsxs(cr,{to:"/registration",children:[" ","Register"]})]})})]})]})},Rr=()=>x.jsxs(Mt,{children:[x.jsxs(Lt,{children:[x.jsx(Ut,{}),x.jsx(er,{})]}),x.jsx(Tr,{})]});export{Rr as default};
