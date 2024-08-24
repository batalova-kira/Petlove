import{u as _,b as E,j as L,C as qe,N as xt,R as U}from"./index-Bb6VXQ_Z.js";import{I as mt}from"./Filter.styled-CKlsS4D_.js";const vt="/petlove/shape_bcgr_mob1.png",bt="/petlove/shape_bcgr_tab1.png",_t="/petlove/shape_bcgr_desk1.png",wt=_.div`
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${E.medium}) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }

    @media only screen and (min-width: ${E.large}) {
        margin-left: -32px;
        width: 592px;
        height: 654px;
    }
`,kt=_.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${vt}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: ${E.medium}) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${bt}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: ${E.large}) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${_t}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,Ft=_.div`
    display: inline-block;
`,fr=({children:e})=>L.jsxs(wt,{children:[L.jsx(kt,{}),L.jsx(Ft,{children:e})]}),Vt="/petlove/images/dog_hero_mob_x1.png",At="/petlove/images/dog_hero_mob_x2.png",Dt="/petlove/images/dog_hero_tabx1.png",$t="/petlove/images/dog_hero_tabx2.png",Et="/petlove/images/dog_hero_desk_x1.png",St="/petlove/images/dog_hero_desk_x2.png",gr=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: ${E.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${E.large}) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`,hr=_.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${Vt}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${At}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${E.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${Dt}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${$t}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${E.large}) {
        width: 490px;
        height: 640px;

        position: absolute;
        bottom: 0px;
        left: 45%;
        transform: translateX(-50%);

        background: url(${Et}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${St}) no-repeat center center;
            background-size: cover;
        }
    }
`,Tt=_.div`
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
`,Ct=_.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Lt=_.div`
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
`,zt=_.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Bt=_.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Ot=_.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Rt=_.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,It=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Mt=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Ut=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,pr=({avatarSrc:e,avatarSrc2x:i,title:r,birthDate:o,description:l})=>L.jsxs(Tt,{children:[L.jsx(Ct,{children:L.jsx(Lt,{$avatarSrc:e,$avatarSrc2x:i,alt:"Hero Avatar"})}),L.jsxs(zt,{children:[L.jsxs(Bt,{children:[L.jsx(Ot,{children:r}),L.jsxs(Rt,{children:[L.jsx(It,{children:"Birthday: "}),L.jsx(Mt,{children:o})]})]}),L.jsx(Ut,{children:l})]})]}),Nt=_.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${e=>e.color||e.theme.colors.black};

    @media only screen and (min-width: ${E.medium}) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`,yr=({text:e,color:i})=>L.jsx(Nt,{color:i,children:e}),xr=_.div`
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
`,mr=_.div`
    margin-bottom: 24px;

    letter-spacing: -0.02em;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};

    @media only screen and (min-width: ${E.medium}) {
        margin-bottom: 32px;

        font-size: 18px;
        line-height: 1.22;
    }
`,vr=_.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: ${E.medium}) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,br=_(mt)`
    ${({$isinvalid:e})=>e&&qe`
            border-color: ${i=>i.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&qe`
            border-color: ${i=>i.theme.colors.green};
        `} /* @media only screen and (min-width: ${E.medium}) {
    } */
`,_r=_.div`
    position: relative;
    width: 100%;
`,wr=_.div`
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

    @media only screen and (min-width: ${E.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,kr=_.div`
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

    @media only screen and (min-width: ${E.medium}) {
        top: 23px;
        right: 46px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,Fr=_.div`
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

    @media only screen and (min-width: ${E.medium}) {
        top: 23px;
        right: 15px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`,Vr=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: ${E.medium}) {
        margin-left: 16px;
    }
`,Ar=_.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: ${E.medium}) {
        margin-left: 16px;
    }
`,Dr=_.button`
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

    @media only screen and (min-width: ${E.medium}) {
        padding: 16px 0;
        margin-bottom: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,$r=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Er=_.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: ${E.medium}) {
        font-size: 14px;
        line-height: 1.43;
    }
`,Sr=_(xt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var fe=e=>e.type==="checkbox",oe=e=>e instanceof Date,C=e=>e==null;const rt=e=>typeof e=="object";var S=e=>!C(e)&&!Array.isArray(e)&&rt(e)&&!oe(e),jt=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,Wt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ht=(e,i)=>e.has(Wt(i)),Pt=e=>{const i=e.constructor&&e.constructor.prototype;return S(i)&&i.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(r||S(e)))if(i=r?[]:{},!r&&!Pt(e))i=e;else for(const o in e)e.hasOwnProperty(o)&&(i[o]=M(e[o]));else return e;return i}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,f=(e,i,r)=>{if(!i||!S(e))return r;const o=ge(i.split(/[,[\].]+?/)).reduce((l,a)=>C(l)?l:l[a],e);return k(o)||o===e?k(e[i])?r:e[i]:o},Q=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),it=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,i,r)=>{let o=-1;const l=Le(i)?[i]:it(i),a=l.length,h=a-1;for(;++o<a;){const p=l[o];let N=r;if(o!==h){const H=e[p];N=S(H)||Array.isArray(H)?H:isNaN(+l[o+1])?{}:[]}if(p==="__proto__")return;e[p]=N,e=e[p]}return e};const Xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var qt=(e,i,r,o=!0)=>{const l={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const h=a;return i._proxyFormState[h]!==W.all&&(i._proxyFormState[h]=!o||W.all),r&&(r[h]=!0),e[h]}});return l},O=e=>S(e)&&!Object.keys(e).length,Xt=(e,i,r,o)=>{r(e);const{name:l,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(h=>i[h]===(!o||W.all))},$e=e=>Array.isArray(e)?e:[e];function Yt(e){const i=U.useRef(e);i.current=e,U.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var P=e=>typeof e=="string",Gt=(e,i,r,o,l)=>P(e)?(o&&i.watch.add(e),f(r,e,l)):Array.isArray(e)?e.map(a=>(o&&i.watch.add(a),f(r,a))):(o&&(i.watchAll=!0),r),Kt=(e,i,r,o,l)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[o]:l||!0}}:{},Ye=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),Ge=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length))));const ce=(e,i,r,o)=>{for(const l of r||Object.keys(e)){const a=f(e,l);if(a){const{_f:h,...p}=a;if(h){if(h.refs&&h.refs[0]&&i(h.refs[0],l)&&!o)break;if(h.ref&&i(h.ref,h.name)&&!o)break;ce(p,i)}else S(p)&&ce(p,i)}}};var Jt=(e,i,r)=>{const o=ge(f(e,r));return w(o,"root",i[r]),w(e,r,o),e},ze=e=>e.type==="file",Z=e=>typeof e=="function",ve=e=>{if(!Ce)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},me=e=>P(e),Be=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Je={value:!0,isValid:!0};var st=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Je:{value:e[0].value,isValid:!0}:Je:Ke}return Ke};const Qe={isValid:!1,value:null};var nt=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Qe):Qe;function Ze(e,i,r="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||Q(e)&&!e)return{type:r,message:me(e)?e:"",ref:i}}var ne=e=>S(e)&&!be(e)?e:{value:e,message:""},et=async(e,i,r,o,l)=>{const{ref:a,refs:h,required:p,maxLength:N,minLength:H,min:F,max:x,pattern:he,validate:G,name:z,valueAsNumber:ke,mount:K,disabled:J}=e._f,m=f(i,z);if(!K||J)return{};const q=h?h[0]:a,X=y=>{o&&q.reportValidity&&(q.setCustomValidity(Q(y)?"":y||""),q.reportValidity())},A={},re=Be(a),pe=fe(a),ee=re||pe,ie=(ke||ze(a))&&k(a.value)&&k(m)||ve(a)&&a.value===""||m===""||Array.isArray(m)&&!m.length,R=Kt.bind(null,z,r,A),ye=(y,v,D,T=Y.maxLength,j=Y.minLength)=>{const I=y?v:D;A[z]={type:y?T:j,message:I,ref:a,...R(y?T:j,I)}};if(l?!Array.isArray(m)||!m.length:p&&(!ee&&(ie||C(m))||Q(m)&&!m||pe&&!st(h).isValid||re&&!nt(h).isValid)){const{value:y,message:v}=me(p)?{value:!!p,message:p}:ne(p);if(y&&(A[z]={type:Y.required,message:v,ref:q,...R(Y.required,v)},!r))return X(v),A}if(!ie&&(!C(F)||!C(x))){let y,v;const D=ne(x),T=ne(F);if(!C(m)&&!isNaN(m)){const j=a.valueAsNumber||m&&+m;C(D.value)||(y=j>D.value),C(T.value)||(v=j<T.value)}else{const j=a.valueAsDate||new Date(m),I=de=>new Date(new Date().toDateString()+" "+de),ae=a.type=="time",le=a.type=="week";P(D.value)&&m&&(y=ae?I(m)>I(D.value):le?m>D.value:j>new Date(D.value)),P(T.value)&&m&&(v=ae?I(m)<I(T.value):le?m<T.value:j<new Date(T.value))}if((y||v)&&(ye(!!y,D.message,T.message,Y.max,Y.min),!r))return X(A[z].message),A}if((N||H)&&!ie&&(P(m)||l&&Array.isArray(m))){const y=ne(N),v=ne(H),D=!C(y.value)&&m.length>+y.value,T=!C(v.value)&&m.length<+v.value;if((D||T)&&(ye(D,y.message,v.message),!r))return X(A[z].message),A}if(he&&!ie&&P(m)){const{value:y,message:v}=ne(he);if(be(y)&&!m.match(y)&&(A[z]={type:Y.pattern,message:v,ref:a,...R(Y.pattern,v)},!r))return X(v),A}if(G){if(Z(G)){const y=await G(m,i),v=Ze(y,q);if(v&&(A[z]={...v,...R(Y.validate,v.message)},!r))return X(v.message),A}else if(S(G)){let y={};for(const v in G){if(!O(y)&&!r)break;const D=Ze(await G[v](m,i),q,v);D&&(y={...D,...R(v,D.message)},X(D.message),r&&(A[z]=y))}if(!O(y)&&(A[z]={ref:q,...y},!r))return A}}return X(!0),A};function Qt(e,i){const r=i.slice(0,-1).length;let o=0;for(;o<r;)e=k(e)?o++:e[i[o++]];return e}function Zt(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function $(e,i){const r=Array.isArray(i)?i:Le(i)?[i]:it(i),o=r.length===1?e:Qt(e,r),l=r.length-1,a=r[l];return o&&delete o[a],l!==0&&(S(o)&&O(o)||Array.isArray(o)&&Zt(o))&&$(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},_e=e=>C(e)||!rt(e);function te(e,i){if(_e(e)||_e(i))return e===i;if(oe(e)&&oe(i))return e.getTime()===i.getTime();const r=Object.keys(e),o=Object.keys(i);if(r.length!==o.length)return!1;for(const l of r){const a=e[l];if(!o.includes(l))return!1;if(l!=="ref"){const h=i[l];if(oe(a)&&oe(h)||S(a)&&S(h)||Array.isArray(a)&&Array.isArray(h)?!te(a,h):a!==h)return!1}}return!0}var ot=e=>e.type==="select-multiple",er=e=>Be(e)||fe(e),Se=e=>ve(e)&&e.isConnected,at=e=>{for(const i in e)if(Z(e[i]))return!0;return!1};function we(e,i={}){const r=Array.isArray(e);if(S(e)||r)for(const o in e)Array.isArray(e[o])||S(e[o])&&!at(e[o])?(i[o]=Array.isArray(e[o])?[]:{},we(e[o],i[o])):C(e[o])||(i[o]=!0);return i}function lt(e,i,r){const o=Array.isArray(e);if(S(e)||o)for(const l in e)Array.isArray(e[l])||S(e[l])&&!at(e[l])?k(i)||_e(r[l])?r[l]=Array.isArray(e[l])?we(e[l],[]):{...we(e[l])}:lt(e[l],C(i)?{}:i[l],r[l]):r[l]=!te(e[l],i[l]);return r}var xe=(e,i)=>lt(e,i,we(i)),dt=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:o})=>k(e)?e:i?e===""?NaN:e&&+e:r&&P(e)?new Date(e):o?o(e):e;function Te(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return ze(i)?i.files:Be(i)?nt(e.refs).value:ot(i)?[...i.selectedOptions].map(({value:r})=>r):fe(i)?st(e.refs).value:dt(k(i.value)?e.ref.value:i.value,e)}var tr=(e,i,r,o)=>{const l={};for(const a of e){const h=f(i,a);h&&w(l,a,h._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:o}},ue=e=>k(e)?e:be(e)?e.source:S(e)?be(e.value)?e.value.source:e.value:e,rr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tt(e,i,r){const o=f(e,r);if(o||Le(r))return{error:o,name:r};const l=r.split(".");for(;l.length;){const a=l.join("."),h=f(i,a),p=f(e,a);if(h&&!Array.isArray(h)&&r!==a)return{name:r};if(p&&p.type)return{name:a,error:p};l.pop()}return{name:r}}var ir=(e,i,r,o,l)=>l.isOnAll?!1:!r&&l.isOnTouch?!(i||e):(r?o.isOnBlur:l.isOnBlur)?!e:(r?o.isOnChange:l.isOnChange)?e:!0,sr=(e,i)=>!ge(f(e,i)).length&&$(e,i);const nr={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function or(e={}){let i={...nr,...e},r={submitCount:0,isDirty:!1,isLoading:Z(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},o={},l=S(i.defaultValues)||S(i.values)?M(i.defaultValues||i.values)||{}:{},a=i.shouldUnregister?{}:M(l),h={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},N,H=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},he=Ye(i.mode),G=Ye(i.reValidateMode),z=i.criteriaMode===W.all,ke=t=>s=>{clearTimeout(H),H=setTimeout(t,s)},K=async t=>{if(F.isValid||t){const s=i.resolver?O((await ee()).errors):await R(o,!0);s!==r.isValid&&x.state.next({isValid:s})}},J=(t,s)=>{(F.isValidating||F.validatingFields)&&((t||Array.from(p.mount)).forEach(n=>{n&&(s?w(r.validatingFields,n,s):$(r.validatingFields,n))}),x.state.next({validatingFields:r.validatingFields,isValidating:!O(r.validatingFields)}))},m=(t,s=[],n,c,u=!0,d=!0)=>{if(c&&n){if(h.action=!0,d&&Array.isArray(f(o,t))){const g=n(f(o,t),c.argA,c.argB);u&&w(o,t,g)}if(d&&Array.isArray(f(r.errors,t))){const g=n(f(r.errors,t),c.argA,c.argB);u&&w(r.errors,t,g),sr(r.errors,t)}if(F.touchedFields&&d&&Array.isArray(f(r.touchedFields,t))){const g=n(f(r.touchedFields,t),c.argA,c.argB);u&&w(r.touchedFields,t,g)}F.dirtyFields&&(r.dirtyFields=xe(l,a)),x.state.next({name:t,isDirty:y(t,s),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(a,t,s)},q=(t,s)=>{w(r.errors,t,s),x.state.next({errors:r.errors})},X=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},A=(t,s,n,c)=>{const u=f(o,t);if(u){const d=f(a,t,k(n)?f(l,t):n);k(d)||c&&c.defaultChecked||s?w(a,t,s?d:Te(u._f)):T(t,d),h.mount&&K()}},re=(t,s,n,c,u)=>{let d=!1,g=!1;const b={name:t},V=!!(f(o,t)&&f(o,t)._f.disabled);if(!n||c){F.isDirty&&(g=r.isDirty,r.isDirty=b.isDirty=y(),d=g!==b.isDirty);const B=V||te(f(l,t),s);g=!!(!V&&f(r.dirtyFields,t)),B||V?$(r.dirtyFields,t):w(r.dirtyFields,t,!0),b.dirtyFields=r.dirtyFields,d=d||F.dirtyFields&&g!==!B}if(n){const B=f(r.touchedFields,t);B||(w(r.touchedFields,t,n),b.touchedFields=r.touchedFields,d=d||F.touchedFields&&B!==n)}return d&&u&&x.state.next(b),d?b:{}},pe=(t,s,n,c)=>{const u=f(r.errors,t),d=F.isValid&&Q(s)&&r.isValid!==s;if(e.delayError&&n?(N=ke(()=>q(t,n)),N(e.delayError)):(clearTimeout(H),N=null,n?w(r.errors,t,n):$(r.errors,t)),(n?!te(u,n):u)||!O(c)||d){const g={...c,...d&&Q(s)?{isValid:s}:{},errors:r.errors,name:t};r={...r,...g},x.state.next(g)}},ee=async t=>{J(t,!0);const s=await i.resolver(a,i.context,tr(t||p.mount,o,i.criteriaMode,i.shouldUseNativeValidation));return J(t),s},ie=async t=>{const{errors:s}=await ee(t);if(t)for(const n of t){const c=f(s,n);c?w(r.errors,n,c):$(r.errors,n)}else r.errors=s;return s},R=async(t,s,n={valid:!0})=>{for(const c in t){const u=t[c];if(u){const{_f:d,...g}=u;if(d){const b=p.array.has(d.name);J([c],!0);const V=await et(u,a,z,i.shouldUseNativeValidation&&!s,b);if(J([c]),V[d.name]&&(n.valid=!1,s))break;!s&&(f(V,d.name)?b?Jt(r.errors,V,d.name):w(r.errors,d.name,V[d.name]):$(r.errors,d.name))}g&&await R(g,s,n)}}return n.valid},ye=()=>{for(const t of p.unMount){const s=f(o,t);s&&(s._f.refs?s._f.refs.every(n=>!Se(n)):!Se(s._f.ref))&&Fe(t)}p.unMount=new Set},y=(t,s)=>(t&&s&&w(a,t,s),!te(Oe(),l)),v=(t,s,n)=>Gt(t,p,{...h.mount?a:k(s)?l:P(t)?{[t]:s}:s},n,s),D=t=>ge(f(h.mount?a:l,t,e.shouldUnregister?f(l,t,[]):[])),T=(t,s,n={})=>{const c=f(o,t);let u=s;if(c){const d=c._f;d&&(!d.disabled&&w(a,t,dt(s,d)),u=ve(d.ref)&&C(s)?"":s,ot(d.ref)?[...d.ref.options].forEach(g=>g.selected=u.includes(g.value)):d.refs?fe(d.ref)?d.refs.length>1?d.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(u)?!!u.find(b=>b===g.value):u===g.value)):d.refs[0]&&(d.refs[0].checked=!!u):d.refs.forEach(g=>g.checked=g.value===u):ze(d.ref)?d.ref.value="":(d.ref.value=u,d.ref.type||x.values.next({name:t,values:{...a}})))}(n.shouldDirty||n.shouldTouch)&&re(t,u,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(t)},j=(t,s,n)=>{for(const c in s){const u=s[c],d=`${t}.${c}`,g=f(o,d);(p.array.has(t)||!_e(u)||g&&!g._f)&&!oe(u)?j(d,u,n):T(d,u,n)}},I=(t,s,n={})=>{const c=f(o,t),u=p.array.has(t),d=M(s);w(a,t,d),u?(x.array.next({name:t,values:{...a}}),(F.isDirty||F.dirtyFields)&&n.shouldDirty&&x.state.next({name:t,dirtyFields:xe(l,a),isDirty:y(t,d)})):c&&!c._f&&!C(d)?j(t,d,n):T(t,d,n),Ge(t,p)&&x.state.next({...r}),x.values.next({name:h.mount?t:void 0,values:{...a}})},ae=async t=>{h.mount=!0;const s=t.target;let n=s.name,c=!0;const u=f(o,n),d=()=>s.type?Te(u._f):jt(t),g=b=>{c=Number.isNaN(b)||b===f(a,n,b)};if(u){let b,V;const B=d(),se=t.type===Xe.BLUR||t.type===Xe.FOCUS_OUT,ht=!rr(u._f)&&!i.resolver&&!f(r.errors,n)&&!u._f.deps||ir(se,f(r.touchedFields,n),r.isSubmitted,G,he),Ae=Ge(n,p,se);w(a,n,B),se?(u._f.onBlur&&u._f.onBlur(t),N&&N(0)):u._f.onChange&&u._f.onChange(t);const De=re(n,B,se,!1),pt=!O(De)||Ae;if(!se&&x.values.next({name:n,type:t.type,values:{...a}}),ht)return F.isValid&&K(),pt&&x.state.next({name:n,...Ae?{}:De});if(!se&&Ae&&x.state.next({...r}),i.resolver){const{errors:He}=await ee([n]);if(g(B),c){const yt=tt(r.errors,o,n),Pe=tt(He,o,yt.name||n);b=Pe.error,n=Pe.name,V=O(He)}}else J([n],!0),b=(await et(u,a,z,i.shouldUseNativeValidation))[n],J([n]),g(B),c&&(b?V=!1:F.isValid&&(V=await R(o,!0)));c&&(u._f.deps&&de(u._f.deps),pe(n,V,b,De))}},le=(t,s)=>{if(f(r.errors,s)&&t.focus)return t.focus(),1},de=async(t,s={})=>{let n,c;const u=$e(t);if(i.resolver){const d=await ie(k(t)?t:u);n=O(d),c=t?!u.some(g=>f(d,g)):n}else t?(c=(await Promise.all(u.map(async d=>{const g=f(o,d);return await R(g&&g._f?{[d]:g}:g)}))).every(Boolean),!(!c&&!r.isValid)&&K()):c=n=await R(o);return x.state.next({...!P(t)||F.isValid&&n!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:n}:{},errors:r.errors}),s.shouldFocus&&!c&&ce(o,le,t?u:p.mount),c},Oe=t=>{const s={...h.mount?a:l};return k(t)?s:P(t)?f(s,t):t.map(n=>f(s,n))},Re=(t,s)=>({invalid:!!f((s||r).errors,t),isDirty:!!f((s||r).dirtyFields,t),isTouched:!!f((s||r).touchedFields,t),isValidating:!!f((s||r).validatingFields,t),error:f((s||r).errors,t)}),ut=t=>{t&&$e(t).forEach(s=>$(r.errors,s)),x.state.next({errors:t?r.errors:{}})},Ie=(t,s,n)=>{const c=(f(o,t,{_f:{}})._f||{}).ref,u=f(r.errors,t)||{},{ref:d,message:g,type:b,...V}=u;w(r.errors,t,{...V,...s,ref:c}),x.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&c&&c.focus&&c.focus()},ct=(t,s)=>Z(t)?x.values.subscribe({next:n=>t(v(void 0,s),n)}):v(t,s,!0),Fe=(t,s={})=>{for(const n of t?$e(t):p.mount)p.mount.delete(n),p.array.delete(n),s.keepValue||($(o,n),$(a,n)),!s.keepError&&$(r.errors,n),!s.keepDirty&&$(r.dirtyFields,n),!s.keepTouched&&$(r.touchedFields,n),!s.keepIsValidating&&$(r.validatingFields,n),!i.shouldUnregister&&!s.keepDefaultValue&&$(l,n);x.values.next({values:{...a}}),x.state.next({...r,...s.keepDirty?{isDirty:y()}:{}}),!s.keepIsValid&&K()},Me=({disabled:t,name:s,field:n,fields:c,value:u})=>{if(Q(t)&&h.mount||t){const d=t?void 0:k(u)?Te(n?n._f:f(c,s)._f):u;w(a,s,d),re(s,d,!1,!1,!0)}},Ve=(t,s={})=>{let n=f(o,t);const c=Q(s.disabled);return w(o,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...s}}),p.mount.add(t),n?Me({field:n,disabled:s.disabled,name:t,value:s.value}):A(t,!0,s.value),{...c?{disabled:s.disabled}:{},...i.progressive?{required:!!s.required,min:ue(s.min),max:ue(s.max),minLength:ue(s.minLength),maxLength:ue(s.maxLength),pattern:ue(s.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:u=>{if(u){Ve(t,s),n=f(o,t);const d=k(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,g=er(d),b=n._f.refs||[];if(g?b.find(V=>V===d):d===n._f.ref)return;w(o,t,{_f:{...n._f,...g?{refs:[...b.filter(Se),d,...Array.isArray(f(l,t))?[{}]:[]],ref:{type:d.type,name:t}}:{ref:d}}}),A(t,!1,void 0,d)}else n=f(o,t,{}),n._f&&(n._f.mount=!1),(i.shouldUnregister||s.shouldUnregister)&&!(Ht(p.array,t)&&h.action)&&p.unMount.add(t)}}},Ue=()=>i.shouldFocusError&&ce(o,le,p.mount),ft=t=>{Q(t)&&(x.state.next({disabled:t}),ce(o,(s,n)=>{const c=f(o,n);c&&(s.disabled=c._f.disabled||t,Array.isArray(c._f.refs)&&c._f.refs.forEach(u=>{u.disabled=c._f.disabled||t}))},0,!1))},Ne=(t,s)=>async n=>{let c;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let u=M(a);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:g}=await ee();r.errors=d,u=g}else await R(o);if($(r.errors,"root"),O(r.errors)){x.state.next({errors:{}});try{await t(u,n)}catch(d){c=d}}else s&&await s({...r.errors},n),Ue(),setTimeout(Ue);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(r.errors)&&!c,submitCount:r.submitCount+1,errors:r.errors}),c)throw c},gt=(t,s={})=>{f(o,t)&&(k(s.defaultValue)?I(t,M(f(l,t))):(I(t,s.defaultValue),w(l,t,M(s.defaultValue))),s.keepTouched||$(r.touchedFields,t),s.keepDirty||($(r.dirtyFields,t),r.isDirty=s.defaultValue?y(t,M(f(l,t))):y()),s.keepError||($(r.errors,t),F.isValid&&K()),x.state.next({...r}))},je=(t,s={})=>{const n=t?M(t):l,c=M(n),u=O(t),d=u?l:c;if(s.keepDefaultValues||(l=n),!s.keepValues){if(s.keepDirtyValues)for(const g of p.mount)f(r.dirtyFields,g)?w(d,g,f(a,g)):I(g,f(d,g));else{if(Ce&&k(t))for(const g of p.mount){const b=f(o,g);if(b&&b._f){const V=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(ve(V)){const B=V.closest("form");if(B){B.reset();break}}}}o={}}a=e.shouldUnregister?s.keepDefaultValues?M(l):{}:M(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}p={mount:s.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!F.isValid||!!s.keepIsValid||!!s.keepDirtyValues,h.watch=!!e.shouldUnregister,x.state.next({submitCount:s.keepSubmitCount?r.submitCount:0,isDirty:u?!1:s.keepDirty?r.isDirty:!!(s.keepDefaultValues&&!te(t,l)),isSubmitted:s.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?[]:s.keepDirtyValues?s.keepDefaultValues&&a?xe(l,a):r.dirtyFields:s.keepDefaultValues&&t?xe(l,t):{},touchedFields:s.keepTouched?r.touchedFields:{},errors:s.keepErrors?r.errors:{},isSubmitSuccessful:s.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},We=(t,s)=>je(Z(t)?t(a):t,s);return{control:{register:Ve,unregister:Fe,getFieldState:Re,handleSubmit:Ne,setError:Ie,_executeSchema:ee,_getWatch:v,_getDirty:y,_updateValid:K,_removeUnmounted:ye,_updateFieldArray:m,_updateDisabledField:Me,_getFieldArray:D,_reset:je,_resetDefaultValues:()=>Z(i.defaultValues)&&i.defaultValues().then(t=>{We(t,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:ft,_subjects:x,_proxyFormState:F,_setErrors:X,get _fields(){return o},get _formValues(){return a},get _state(){return h},set _state(t){h=t},get _defaultValues(){return l},get _names(){return p},set _names(t){p=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:de,register:Ve,handleSubmit:Ne,watch:ct,setValue:I,getValues:Oe,reset:We,resetField:gt,clearErrors:ut,unregister:Fe,setError:Ie,setFocus:(t,s={})=>{const n=f(o,t),c=n&&n._f;if(c){const u=c.refs?c.refs[0]:c.ref;u.focus&&(u.focus(),s.shouldSelect&&u.select())}},getFieldState:Re}}function Tr(e={}){const i=U.useRef(),r=U.useRef(),[o,l]=U.useState({isDirty:!1,isValidating:!1,isLoading:Z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Z(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...or(e),formState:o});const a=i.current.control;return a._options=e,Yt({subject:a._subjects.state,next:h=>{Xt(h,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),U.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),U.useEffect(()=>{if(a._proxyFormState.isDirty){const h=a._getDirty();h!==o.isDirty&&a._subjects.state.next({isDirty:h})}},[a,o.isDirty]),U.useEffect(()=>{e.values&&!te(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,l(h=>({...h}))):a._resetDefaultValues()},[e.values,a]),U.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),U.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),i.current.formState=qt(o,a),i.current}export{Sr as A,Dr as B,Vr as E,br as F,fr as H,_r as I,xr as L,gr as S,yr as T,Ar as V,vr as W,mr as a,wr as b,Fr as c,kr as d,$r as e,Er as f,hr as g,pr as h,Tr as u};
