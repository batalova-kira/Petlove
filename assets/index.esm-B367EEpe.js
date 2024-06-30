import{c as _,j as L,e as Pe,N as yt,R as M}from"./index-DphjYj3i.js";const xt="/petlove/shape_bcgr_mob1.png",mt="/petlove/shape_bcgr_tab1.png",vt="/petlove/shape_bcgr_desk1.png",bt=_.div`
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
`,_t=_.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${xt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${mt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${vt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,wt=_.div`
    display: inline-block;
`,cr=({children:e})=>L.jsxs(bt,{children:[L.jsx(_t,{}),L.jsx(wt,{children:e})]}),kt="/petlove/images/dog_hero_mob_x1.png",Vt="/petlove/images/dog_hero_mob_x2.png",At="/petlove/images/dog_hero_tabx1.png",Ft="/petlove/images/dog_hero_tabx2.png",Dt="/petlove/images/dog_hero_desk_x1.png",Et="/petlove/images/dog_hero_desk_x2.png",dr=_.div`
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
`,ur=_.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${kt}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Vt}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${At}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Ft}) no-repeat center center;
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

        background: url(${Dt}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Et}) no-repeat center center;
            background-size: cover;
        }
    }
`,St=_.div`
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
`,$t=_.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Tt=_.div`
    width: 32px;
    height: 32px;
    background: url(${e=>e.$avatarSrc}) no-repeat center center;
    background-size: cover;
    z-index: 20;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${e=>e.$avatarSrc2x}) no-repeat center
            center;
        background-size: cover;
        z-index: 20;
    }
`,Lt=_.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Ct=_.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,zt=_.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Bt=_.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Ot=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Rt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,It=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,fr=({avatarSrc:e,avatarSrc2x:s,title:r,birthDate:o,description:l})=>L.jsxs(St,{children:[L.jsx($t,{children:L.jsx(Tt,{$avatarSrc:e,$avatarSrc2x:s,alt:"Hero Avatar"})}),L.jsxs(Lt,{children:[L.jsxs(Ct,{children:[L.jsx(zt,{children:r}),L.jsxs(Bt,{children:[L.jsx(Ot,{children:"Birthday: "}),L.jsx(Rt,{children:o})]})]}),L.jsx(It,{children:l})]})]}),Mt=_.h1`
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
`,hr=({text:e,color:s})=>L.jsx(Mt,{color:s,children:e}),gr=_.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,pr=_.div`
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
`,yr=_.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,xr=_.input`
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

    ${({$isinvalid:e})=>e&&Pe`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&Pe`
            border-color: ${s=>s.theme.colors.green};
        `}

        @media only screen and (min-width: 768px) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,mr=_.div`
    position: relative;
    width: 100%;
`,vr=_.div`
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
`,br=_.div`
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
`,_r=_.div`
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
`,wr=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,kr=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Vr=_.button`
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
`,Ar=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Fr=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,Dr=_(yt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var ue=e=>e.type==="checkbox",ne=e=>e instanceof Date,T=e=>e==null;const tt=e=>typeof e=="object";var S=e=>!T(e)&&!Array.isArray(e)&&tt(e)&&!ne(e),Ut=e=>S(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,Nt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jt=(e,s)=>e.has(Nt(s)),Wt=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function I(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||S(e)))if(s=r?[]:{},!r&&!Wt(e))s=e;else for(const o in e)e.hasOwnProperty(o)&&(s[o]=I(e[o]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,f=(e,s,r)=>{if(!s||!S(e))return r;const o=fe(s.split(/[,[\].]+?/)).reduce((l,a)=>T(l)?l:l[a],e);return k(o)||o===e?k(e[s])?r:e[s]:o},J=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),rt=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,s,r)=>{let o=-1;const l=Le(s)?[s]:rt(s),a=l.length,g=a-1;for(;++o<a;){const p=l[o];let U=r;if(o!==g){const W=e[p];U=S(W)||Array.isArray(W)?W:isNaN(+l[o+1])?{}:[]}if(p==="__proto__")return;e[p]=U,e=e[p]}return e};const qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},j={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Ht=(e,s,r,o=!0)=>{const l={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const g=a;return s._proxyFormState[g]!==j.all&&(s._proxyFormState[g]=!o||j.all),r&&(r[g]=!0),e[g]}});return l},B=e=>S(e)&&!Object.keys(e).length,Pt=(e,s,r,o)=>{r(e);const{name:l,...a}=e;return B(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(g=>s[g]===(!o||j.all))},De=e=>Array.isArray(e)?e:[e];function qt(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Xt=(e,s,r,o,l)=>H(e)?(o&&s.watch.add(e),f(r,e,l)):Array.isArray(e)?e.map(a=>(o&&s.watch.add(a),f(r,a))):(o&&(s.watchAll=!0),r),Gt=(e,s,r,o,l)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[o]:l||!0}}:{},Xe=e=>({isOnSubmit:!e||e===j.onSubmit,isOnBlur:e===j.onBlur,isOnChange:e===j.onChange,isOnAll:e===j.all,isOnTouch:e===j.onTouched}),Ge=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const de=(e,s,r,o)=>{for(const l of r||Object.keys(e)){const a=f(e,l);if(a){const{_f:g,...p}=a;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],l)&&!o)break;if(g.ref&&s(g.ref,g.name)&&!o)break;de(p,s)}else S(p)&&de(p,s)}}};var Yt=(e,s,r)=>{const o=fe(f(e,r));return w(o,"root",s[r]),w(e,r,o),e},Ce=e=>e.type==="file",Q=e=>typeof e=="function",me=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),ze=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Ye={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var st=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:Ye}return Ye};const Je={isValid:!1,value:null};var it=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Je):Je;function Qe(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||J(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var ie=e=>S(e)&&!ve(e)?e:{value:e,message:""},Ze=async(e,s,r,o,l)=>{const{ref:a,refs:g,required:p,maxLength:U,minLength:W,min:V,max:x,pattern:he,validate:G,name:C,valueAsNumber:we,mount:Y,disabled:K}=e._f,m=f(s,C);if(!Y||K)return{};const P=g?g[0]:a,q=y=>{o&&P.reportValidity&&(P.setCustomValidity(J(y)?"":y||""),P.reportValidity())},F={},te=ze(a),ge=ue(a),Z=te||ge,re=(we||Ce(a))&&k(a.value)&&k(m)||me(a)&&a.value===""||m===""||Array.isArray(m)&&!m.length,O=Gt.bind(null,C,r,F),pe=(y,v,D,$=X.maxLength,N=X.minLength)=>{const R=y?v:D;F[C]={type:y?$:N,message:R,ref:a,...O(y?$:N,R)}};if(l?!Array.isArray(m)||!m.length:p&&(!Z&&(re||T(m))||J(m)&&!m||ge&&!st(g).isValid||te&&!it(g).isValid)){const{value:y,message:v}=xe(p)?{value:!!p,message:p}:ie(p);if(y&&(F[C]={type:X.required,message:v,ref:P,...O(X.required,v)},!r))return q(v),F}if(!re&&(!T(V)||!T(x))){let y,v;const D=ie(x),$=ie(V);if(!T(m)&&!isNaN(m)){const N=a.valueAsNumber||m&&+m;T(D.value)||(y=N>D.value),T($.value)||(v=N<$.value)}else{const N=a.valueAsDate||new Date(m),R=le=>new Date(new Date().toDateString()+" "+le),oe=a.type=="time",ae=a.type=="week";H(D.value)&&m&&(y=oe?R(m)>R(D.value):ae?m>D.value:N>new Date(D.value)),H($.value)&&m&&(v=oe?R(m)<R($.value):ae?m<$.value:N<new Date($.value))}if((y||v)&&(pe(!!y,D.message,$.message,X.max,X.min),!r))return q(F[C].message),F}if((U||W)&&!re&&(H(m)||l&&Array.isArray(m))){const y=ie(U),v=ie(W),D=!T(y.value)&&m.length>+y.value,$=!T(v.value)&&m.length<+v.value;if((D||$)&&(pe(D,y.message,v.message),!r))return q(F[C].message),F}if(he&&!re&&H(m)){const{value:y,message:v}=ie(he);if(ve(y)&&!m.match(y)&&(F[C]={type:X.pattern,message:v,ref:a,...O(X.pattern,v)},!r))return q(v),F}if(G){if(Q(G)){const y=await G(m,s),v=Qe(y,P);if(v&&(F[C]={...v,...O(X.validate,v.message)},!r))return q(v.message),F}else if(S(G)){let y={};for(const v in G){if(!B(y)&&!r)break;const D=Qe(await G[v](m,s),P,v);D&&(y={...D,...O(v,D.message)},q(D.message),r&&(F[C]=y))}if(!B(y)&&(F[C]={ref:P,...y},!r))return F}}return q(!0),F};function Kt(e,s){const r=s.slice(0,-1).length;let o=0;for(;o<r;)e=k(e)?o++:e[s[o++]];return e}function Jt(e){for(const s in e)if(e.hasOwnProperty(s)&&!k(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:rt(s),o=r.length===1?e:Kt(e,r),l=r.length-1,a=r[l];return o&&delete o[a],l!==0&&(S(o)&&B(o)||Array.isArray(o)&&Jt(o))&&E(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},be=e=>T(e)||!tt(e);function ee(e,s){if(be(e)||be(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const r=Object.keys(e),o=Object.keys(s);if(r.length!==o.length)return!1;for(const l of r){const a=e[l];if(!o.includes(l))return!1;if(l!=="ref"){const g=s[l];if(ne(a)&&ne(g)||S(a)&&S(g)||Array.isArray(a)&&Array.isArray(g)?!ee(a,g):a!==g)return!1}}return!0}var nt=e=>e.type==="select-multiple",Qt=e=>ze(e)||ue(e),Se=e=>me(e)&&e.isConnected,ot=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(S(e)||r)for(const o in e)Array.isArray(e[o])||S(e[o])&&!ot(e[o])?(s[o]=Array.isArray(e[o])?[]:{},_e(e[o],s[o])):T(e[o])||(s[o]=!0);return s}function at(e,s,r){const o=Array.isArray(e);if(S(e)||o)for(const l in e)Array.isArray(e[l])||S(e[l])&&!ot(e[l])?k(s)||be(r[l])?r[l]=Array.isArray(e[l])?_e(e[l],[]):{..._e(e[l])}:at(e[l],T(s)?{}:s[l],r[l]):r[l]=!ee(e[l],s[l]);return r}var ye=(e,s)=>at(e,s,_e(s)),lt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:o})=>k(e)?e:s?e===""?NaN:e&&+e:r&&H(e)?new Date(e):o?o(e):e;function $e(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ce(s)?s.files:ze(s)?it(e.refs).value:nt(s)?[...s.selectedOptions].map(({value:r})=>r):ue(s)?st(e.refs).value:lt(k(s.value)?e.ref.value:s.value,e)}var Zt=(e,s,r,o)=>{const l={};for(const a of e){const g=f(s,a);g&&w(l,a,g._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:o}},ce=e=>k(e)?e:ve(e)?e.source:S(e)?ve(e.value)?e.value.source:e.value:e,er=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,r){const o=f(e,r);if(o||Le(r))return{error:o,name:r};const l=r.split(".");for(;l.length;){const a=l.join("."),g=f(s,a),p=f(e,a);if(g&&!Array.isArray(g)&&r!==a)return{name:r};if(p&&p.type)return{name:a,error:p};l.pop()}return{name:r}}var tr=(e,s,r,o,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(s||e):(r?o.isOnBlur:l.isOnBlur)?!e:(r?o.isOnChange:l.isOnChange)?e:!0,rr=(e,s)=>!fe(f(e,s)).length&&E(e,s);const sr={mode:j.onSubmit,reValidateMode:j.onChange,shouldFocusError:!0};function ir(e={}){let s={...sr,...e},r={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},o={},l=S(s.defaultValues)||S(s.values)?I(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:I(l),g={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},U,W=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},he=Xe(s.mode),G=Xe(s.reValidateMode),C=s.criteriaMode===j.all,we=t=>i=>{clearTimeout(W),W=setTimeout(t,i)},Y=async t=>{if(V.isValid||t){const i=s.resolver?B((await Z()).errors):await O(o,!0);i!==r.isValid&&x.state.next({isValid:i})}},K=(t,i)=>{(V.isValidating||V.validatingFields)&&((t||Array.from(p.mount)).forEach(n=>{n&&(i?w(r.validatingFields,n,i):E(r.validatingFields,n))}),x.state.next({validatingFields:r.validatingFields,isValidating:!B(r.validatingFields)}))},m=(t,i=[],n,u,d=!0,c=!0)=>{if(u&&n){if(g.action=!0,c&&Array.isArray(f(o,t))){const h=n(f(o,t),u.argA,u.argB);d&&w(o,t,h)}if(c&&Array.isArray(f(r.errors,t))){const h=n(f(r.errors,t),u.argA,u.argB);d&&w(r.errors,t,h),rr(r.errors,t)}if(V.touchedFields&&c&&Array.isArray(f(r.touchedFields,t))){const h=n(f(r.touchedFields,t),u.argA,u.argB);d&&w(r.touchedFields,t,h)}V.dirtyFields&&(r.dirtyFields=ye(l,a)),x.state.next({name:t,isDirty:y(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(a,t,i)},P=(t,i)=>{w(r.errors,t,i),x.state.next({errors:r.errors})},q=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},F=(t,i,n,u)=>{const d=f(o,t);if(d){const c=f(a,t,k(n)?f(l,t):n);k(c)||u&&u.defaultChecked||i?w(a,t,i?c:$e(d._f)):$(t,c),g.mount&&Y()}},te=(t,i,n,u,d)=>{let c=!1,h=!1;const b={name:t},A=!!(f(o,t)&&f(o,t)._f.disabled);if(!n||u){V.isDirty&&(h=r.isDirty,r.isDirty=b.isDirty=y(),c=h!==b.isDirty);const z=A||ee(f(l,t),i);h=!!(!A&&f(r.dirtyFields,t)),z||A?E(r.dirtyFields,t):w(r.dirtyFields,t,!0),b.dirtyFields=r.dirtyFields,c=c||V.dirtyFields&&h!==!z}if(n){const z=f(r.touchedFields,t);z||(w(r.touchedFields,t,n),b.touchedFields=r.touchedFields,c=c||V.touchedFields&&z!==n)}return c&&d&&x.state.next(b),c?b:{}},ge=(t,i,n,u)=>{const d=f(r.errors,t),c=V.isValid&&J(i)&&r.isValid!==i;if(e.delayError&&n?(U=we(()=>P(t,n)),U(e.delayError)):(clearTimeout(W),U=null,n?w(r.errors,t,n):E(r.errors,t)),(n?!ee(d,n):d)||!B(u)||c){const h={...u,...c&&J(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}},Z=async t=>{K(t,!0);const i=await s.resolver(a,s.context,Zt(t||p.mount,o,s.criteriaMode,s.shouldUseNativeValidation));return K(t),i},re=async t=>{const{errors:i}=await Z(t);if(t)for(const n of t){const u=f(i,n);u?w(r.errors,n,u):E(r.errors,n)}else r.errors=i;return i},O=async(t,i,n={valid:!0})=>{for(const u in t){const d=t[u];if(d){const{_f:c,...h}=d;if(c){const b=p.array.has(c.name);K([u],!0);const A=await Ze(d,a,C,s.shouldUseNativeValidation&&!i,b);if(K([u]),A[c.name]&&(n.valid=!1,i))break;!i&&(f(A,c.name)?b?Yt(r.errors,A,c.name):w(r.errors,c.name,A[c.name]):E(r.errors,c.name))}h&&await O(h,i,n)}}return n.valid},pe=()=>{for(const t of p.unMount){const i=f(o,t);i&&(i._f.refs?i._f.refs.every(n=>!Se(n)):!Se(i._f.ref))&&ke(t)}p.unMount=new Set},y=(t,i)=>(t&&i&&w(a,t,i),!ee(Be(),l)),v=(t,i,n)=>Xt(t,p,{...g.mount?a:k(i)?l:H(t)?{[t]:i}:i},n,i),D=t=>fe(f(g.mount?a:l,t,e.shouldUnregister?f(l,t,[]):[])),$=(t,i,n={})=>{const u=f(o,t);let d=i;if(u){const c=u._f;c&&(!c.disabled&&w(a,t,lt(i,c)),d=me(c.ref)&&T(i)?"":i,nt(c.ref)?[...c.ref.options].forEach(h=>h.selected=d.includes(h.value)):c.refs?ue(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(b=>b===h.value):d===h.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(h=>h.checked=h.value===d):Ce(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||x.values.next({name:t,values:{...a}})))}(n.shouldDirty||n.shouldTouch)&&te(t,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&le(t)},N=(t,i,n)=>{for(const u in i){const d=i[u],c=`${t}.${u}`,h=f(o,c);(p.array.has(t)||!be(d)||h&&!h._f)&&!ne(d)?N(c,d,n):$(c,d,n)}},R=(t,i,n={})=>{const u=f(o,t),d=p.array.has(t),c=I(i);w(a,t,c),d?(x.array.next({name:t,values:{...a}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&x.state.next({name:t,dirtyFields:ye(l,a),isDirty:y(t,c)})):u&&!u._f&&!T(c)?N(t,c,n):$(t,c,n),Ge(t,p)&&x.state.next({...r}),x.values.next({name:g.mount?t:void 0,values:{...a}})},oe=async t=>{g.mount=!0;const i=t.target;let n=i.name,u=!0;const d=f(o,n),c=()=>i.type?$e(d._f):Ut(t),h=b=>{u=Number.isNaN(b)||b===f(a,n,b)};if(d){let b,A;const z=c(),se=t.type===qe.BLUR||t.type===qe.FOCUS_OUT,ht=!er(d._f)&&!s.resolver&&!f(r.errors,n)&&!d._f.deps||tr(se,f(r.touchedFields,n),r.isSubmitted,G,he),Ae=Ge(n,p,se);w(a,n,z),se?(d._f.onBlur&&d._f.onBlur(t),U&&U(0)):d._f.onChange&&d._f.onChange(t);const Fe=te(n,z,se,!1),gt=!B(Fe)||Ae;if(!se&&x.values.next({name:n,type:t.type,values:{...a}}),ht)return V.isValid&&Y(),gt&&x.state.next({name:n,...Ae?{}:Fe});if(!se&&Ae&&x.state.next({...r}),s.resolver){const{errors:We}=await Z([n]);if(h(z),u){const pt=et(r.errors,o,n),He=et(We,o,pt.name||n);b=He.error,n=He.name,A=B(We)}}else K([n],!0),b=(await Ze(d,a,C,s.shouldUseNativeValidation))[n],K([n]),h(z),u&&(b?A=!1:V.isValid&&(A=await O(o,!0)));u&&(d._f.deps&&le(d._f.deps),ge(n,A,b,Fe))}},ae=(t,i)=>{if(f(r.errors,i)&&t.focus)return t.focus(),1},le=async(t,i={})=>{let n,u;const d=De(t);if(s.resolver){const c=await re(k(t)?t:d);n=B(c),u=t?!d.some(h=>f(c,h)):n}else t?(u=(await Promise.all(d.map(async c=>{const h=f(o,c);return await O(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!u&&!r.isValid)&&Y()):u=n=await O(o);return x.state.next({...!H(t)||V.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!u&&de(o,ae,t?d:p.mount),u},Be=t=>{const i={...g.mount?a:l};return k(t)?i:H(t)?f(i,t):t.map(n=>f(i,n))},Oe=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),isTouched:!!f((i||r).touchedFields,t),isValidating:!!f((i||r).validatingFields,t),error:f((i||r).errors,t)}),ct=t=>{t&&De(t).forEach(i=>E(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Re=(t,i,n)=>{const u=(f(o,t,{_f:{}})._f||{}).ref,d=f(r.errors,t)||{},{ref:c,message:h,type:b,...A}=d;w(r.errors,t,{...A,...i,ref:u}),x.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&u&&u.focus&&u.focus()},dt=(t,i)=>Q(t)?x.values.subscribe({next:n=>t(v(void 0,i),n)}):v(t,i,!0),ke=(t,i={})=>{for(const n of t?De(t):p.mount)p.mount.delete(n),p.array.delete(n),i.keepValue||(E(o,n),E(a,n)),!i.keepError&&E(r.errors,n),!i.keepDirty&&E(r.dirtyFields,n),!i.keepTouched&&E(r.touchedFields,n),!i.keepIsValidating&&E(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&E(l,n);x.values.next({values:{...a}}),x.state.next({...r,...i.keepDirty?{isDirty:y()}:{}}),!i.keepIsValid&&Y()},Ie=({disabled:t,name:i,field:n,fields:u,value:d})=>{if(J(t)&&g.mount||t){const c=t?void 0:k(d)?$e(n?n._f:f(u,i)._f):d;w(a,i,c),te(i,c,!1,!1,!0)}},Ve=(t,i={})=>{let n=f(o,t);const u=J(i.disabled);return w(o,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),p.mount.add(t),n?Ie({field:n,disabled:i.disabled,name:t,value:i.value}):F(t,!0,i.value),{...u?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:d=>{if(d){Ve(t,i),n=f(o,t);const c=k(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=Qt(c),b=n._f.refs||[];if(h?b.find(A=>A===c):c===n._f.ref)return;w(o,t,{_f:{...n._f,...h?{refs:[...b.filter(Se),c,...Array.isArray(f(l,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),F(t,!1,void 0,c)}else n=f(o,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(jt(p.array,t)&&g.action)&&p.unMount.add(t)}}},Me=()=>s.shouldFocusError&&de(o,ae,p.mount),ut=t=>{J(t)&&(x.state.next({disabled:t}),de(o,(i,n)=>{const u=f(o,n);u&&(i.disabled=u._f.disabled||t,Array.isArray(u._f.refs)&&u._f.refs.forEach(d=>{d.disabled=u._f.disabled||t}))},0,!1))},Ue=(t,i)=>async n=>{let u;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let d=I(a);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:h}=await Z();r.errors=c,d=h}else await O(o);if(E(r.errors,"root"),B(r.errors)){x.state.next({errors:{}});try{await t(d,n)}catch(c){u=c}}else i&&await i({...r.errors},n),Me(),setTimeout(Me);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors)&&!u,submitCount:r.submitCount+1,errors:r.errors}),u)throw u},ft=(t,i={})=>{f(o,t)&&(k(i.defaultValue)?R(t,I(f(l,t))):(R(t,i.defaultValue),w(l,t,I(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?y(t,I(f(l,t))):y()),i.keepError||(E(r.errors,t),V.isValid&&Y()),x.state.next({...r}))},Ne=(t,i={})=>{const n=t?I(t):l,u=I(n),d=B(t),c=d?l:u;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const h of p.mount)f(r.dirtyFields,h)?w(c,h,f(a,h)):R(h,f(c,h));else{if(Te&&k(t))for(const h of p.mount){const b=f(o,h);if(b&&b._f){const A=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(me(A)){const z=A.closest("form");if(z){z.reset();break}}}}o={}}a=e.shouldUnregister?i.keepDefaultValues?I(l):{}:I(c),x.array.next({values:{...c}}),x.values.next({values:{...c}})}p={mount:i.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:d?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:i.keepDirtyValues?i.keepDefaultValues&&a?ye(l,a):r.dirtyFields:i.keepDefaultValues&&t?ye(l,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},je=(t,i)=>Ne(Q(t)?t(a):t,i);return{control:{register:Ve,unregister:ke,getFieldState:Oe,handleSubmit:Ue,setError:Re,_executeSchema:Z,_getWatch:v,_getDirty:y,_updateValid:Y,_removeUnmounted:pe,_updateFieldArray:m,_updateDisabledField:Ie,_getFieldArray:D,_reset:Ne,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(t=>{je(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:ut,_subjects:x,_proxyFormState:V,_setErrors:q,get _fields(){return o},get _formValues(){return a},get _state(){return g},set _state(t){g=t},get _defaultValues(){return l},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:le,register:Ve,handleSubmit:Ue,watch:dt,setValue:R,getValues:Be,reset:je,resetField:ft,clearErrors:ct,unregister:ke,setError:Re,setFocus:(t,i={})=>{const n=f(o,t),u=n&&n._f;if(u){const d=u.refs?u.refs[0]:u.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},getFieldState:Oe}}function Er(e={}){const s=M.useRef(),r=M.useRef(),[o,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...ir(e),formState:o});const a=s.current.control;return a._options=e,qt({subject:a._subjects.state,next:g=>{Pt(g,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),M.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),M.useEffect(()=>{if(a._proxyFormState.isDirty){const g=a._getDirty();g!==o.isDirty&&a._subjects.state.next({isDirty:g})}},[a,o.isDirty]),M.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,l(g=>({...g}))):a._resetDefaultValues()},[e.values,a]),M.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),M.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=Ht(o,a),s.current}export{Dr as A,Vr as B,wr as E,xr as F,cr as H,mr as I,gr as L,dr as S,hr as T,kr as V,yr as W,pr as a,vr as b,_r as c,br as d,Ar as e,Fr as f,ur as g,fr as h,Er as u};
