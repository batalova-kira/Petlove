import{u as T,j as L,R as M}from"./index-Bw_PVNPN.js";const hr="/petlove/shape_bcgr_mob1.png",xr="/petlove/shape_bcgr_tab1.png",pr="/petlove/shape_bcgr_desk1.png",vr=T.div`
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
`,br=T.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${hr}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${xr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: 1280px) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${pr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,_r=T.div`
    display: inline-block;
`,ot=({children:e})=>L.jsxs(vr,{children:[L.jsx(br,{}),L.jsx(_r,{children:e})]}),mr="/petlove/images/dog_hero_mob_x1.png",wr="/petlove/images/dog_hero_mob_x2.png",kr="/petlove/images/dog_hero_tabx1.png",Vr="/petlove/images/dog_hero_tabx2.png",Ar="/petlove/images/dog_hero_desk_x1.png",Fr="/petlove/images/dog_hero_desk_x2.png",lt=T.div`
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
`,ut=T.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 10;

    @media (max-width: 767px) {
        background: url(${mr}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${wr}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${kr}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Vr}) no-repeat center center;
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

        background: url(${Ar}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Fr}) no-repeat center center;
            background-size: cover;
        }
    }
`,Dr=T.div`
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
`,Sr=T.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Er=T.div`
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
`,Tr=T.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,Cr=T.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,Lr=T.h3`
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.yellow};
`,Or=T.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`,Rr=T.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.lightGrey};
`,Br=T.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.black};
`,Ur=T.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mediumGrey};
`,ct=({avatarSrc:e,avatarSrc2x:s,title:t,birthDate:a,description:l})=>L.jsxs(Dr,{children:[L.jsx(Sr,{children:L.jsx(Er,{$avatarSrc:e,$avatarSrc2x:s,alt:"Hero Avatar"})}),L.jsxs(Tr,{children:[L.jsxs(Cr,{children:[L.jsx(Lr,{children:t}),L.jsxs(Or,{children:[L.jsx(Rr,{children:"Birthday: "}),L.jsx(Br,{children:a})]})]}),L.jsx(Ur,{children:l})]})]}),zr=T.h1`
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
`,dt=({text:e,color:s})=>L.jsx(zr,{color:s,children:e});var de=e=>e.type==="checkbox",ne=e=>e instanceof Date,C=e=>e==null;const er=e=>typeof e=="object";var S=e=>!C(e)&&!Array.isArray(e)&&er(e)&&!ne(e),$r=e=>S(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,Mr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Nr=(e,s)=>e.has(Mr(s)),Ir=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!Ir(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=$(e[a]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,f=(e,s,t)=>{if(!s||!S(e))return t;const a=fe(s.split(/[,[\].]+?/)).reduce((l,o)=>C(l)?l:l[o],e);return w(a)||a===e?w(e[s])?t:e[s]:a},J=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),rr=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,s,t)=>{let a=-1;const l=Le(s)?[s]:rr(s),o=l.length,y=o-1;for(;++a<o;){const h=l[a];let N=t;if(a!==y){const H=e[h];N=S(H)||Array.isArray(H)?H:isNaN(+l[a+1])?{}:[]}if(h==="__proto__")return;e[h]=N,e=e[h]}return e};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},j={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var jr=(e,s,t,a=!0)=>{const l={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(l,o,{get:()=>{const y=o;return s._proxyFormState[y]!==j.all&&(s._proxyFormState[y]=!a||j.all),t&&(t[y]=!0),e[y]}});return l},B=e=>S(e)&&!Object.keys(e).length,Hr=(e,s,t,a)=>{t(e);const{name:l,...o}=e;return B(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(y=>s[y]===(!a||j.all))},De=e=>Array.isArray(e)?e:[e];function Pr(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var P=e=>typeof e=="string",Wr=(e,s,t,a,l)=>P(e)?(a&&s.watch.add(e),f(t,e,l)):Array.isArray(e)?e.map(o=>(a&&s.watch.add(o),f(t,o))):(a&&(s.watchAll=!0),t),qr=(e,s,t,a,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},qe=e=>({isOnSubmit:!e||e===j.onSubmit,isOnBlur:e===j.onBlur,isOnChange:e===j.onChange,isOnAll:e===j.all,isOnTouch:e===j.onTouched}),Xe=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ce=(e,s,t,a)=>{for(const l of t||Object.keys(e)){const o=f(e,l);if(o){const{_f:y,...h}=o;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],l)&&!a)break;if(y.ref&&s(y.ref,y.name)&&!a)break;ce(h,s)}else S(h)&&ce(h,s)}}};var Xr=(e,s,t)=>{const a=fe(f(e,t));return m(a,"root",s[t]),m(e,t,a),e},Oe=e=>e.type==="file",Q=e=>typeof e=="function",ve=e=>{if(!Ce)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},pe=e=>P(e),Re=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var tr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:Ge}return Ge};const Ye={isValid:!1,value:null};var sr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ye):Ye;function Je(e,s,t="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||J(e)&&!e)return{type:t,message:pe(e)?e:"",ref:s}}var ie=e=>S(e)&&!be(e)?e:{value:e,message:""},Qe=async(e,s,t,a,l)=>{const{ref:o,refs:y,required:h,maxLength:N,minLength:H,min:k,max:p,pattern:ge,validate:G,name:O,valueAsNumber:we,mount:K,disabled:Y}=e._f,v=f(s,O);if(!K||Y)return{};const W=y?y[0]:o,q=x=>{a&&W.reportValidity&&(W.setCustomValidity(J(x)?"":x||""),W.reportValidity())},A={},re=Re(o),ye=de(o),Z=re||ye,te=(we||Oe(o))&&w(o.value)&&w(v)||ve(o)&&o.value===""||v===""||Array.isArray(v)&&!v.length,U=qr.bind(null,O,t,A),he=(x,b,F,E=X.maxLength,I=X.minLength)=>{const z=x?b:F;A[O]={type:x?E:I,message:z,ref:o,...U(x?E:I,z)}};if(l?!Array.isArray(v)||!v.length:h&&(!Z&&(te||C(v))||J(v)&&!v||ye&&!tr(y).isValid||re&&!sr(y).isValid)){const{value:x,message:b}=pe(h)?{value:!!h,message:h}:ie(h);if(x&&(A[O]={type:X.required,message:b,ref:W,...U(X.required,b)},!t))return q(b),A}if(!te&&(!C(k)||!C(p))){let x,b;const F=ie(p),E=ie(k);if(!C(v)&&!isNaN(v)){const I=o.valueAsNumber||v&&+v;C(F.value)||(x=I>F.value),C(E.value)||(b=I<E.value)}else{const I=o.valueAsDate||new Date(v),z=le=>new Date(new Date().toDateString()+" "+le),ae=o.type=="time",oe=o.type=="week";P(F.value)&&v&&(x=ae?z(v)>z(F.value):oe?v>F.value:I>new Date(F.value)),P(E.value)&&v&&(b=ae?z(v)<z(E.value):oe?v<E.value:I<new Date(E.value))}if((x||b)&&(he(!!x,F.message,E.message,X.max,X.min),!t))return q(A[O].message),A}if((N||H)&&!te&&(P(v)||l&&Array.isArray(v))){const x=ie(N),b=ie(H),F=!C(x.value)&&v.length>+x.value,E=!C(b.value)&&v.length<+b.value;if((F||E)&&(he(F,x.message,b.message),!t))return q(A[O].message),A}if(ge&&!te&&P(v)){const{value:x,message:b}=ie(ge);if(be(x)&&!v.match(x)&&(A[O]={type:X.pattern,message:b,ref:o,...U(X.pattern,b)},!t))return q(b),A}if(G){if(Q(G)){const x=await G(v,s),b=Je(x,W);if(b&&(A[O]={...b,...U(X.validate,b.message)},!t))return q(b.message),A}else if(S(G)){let x={};for(const b in G){if(!B(x)&&!t)break;const F=Je(await G[b](v,s),W,b);F&&(x={...F,...U(b,F.message)},q(F.message),t&&(A[O]=x))}if(!B(x)&&(A[O]={ref:W,...x},!t))return A}}return q(!0),A};function Gr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function Kr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function D(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:rr(s),a=t.length===1?e:Gr(e,t),l=t.length-1,o=t[l];return a&&delete a[o],l!==0&&(S(a)&&B(a)||Array.isArray(a)&&Kr(a))&&D(e,t.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:l=>{for(const o of e)o.next&&o.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(o=>o!==l)}}),unsubscribe:()=>{e=[]}}},_e=e=>C(e)||!er(e);function ee(e,s){if(_e(e)||_e(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const l of t){const o=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const y=s[l];if(ne(o)&&ne(y)||S(o)&&S(y)||Array.isArray(o)&&Array.isArray(y)?!ee(o,y):o!==y)return!1}}return!0}var ir=e=>e.type==="select-multiple",Yr=e=>Re(e)||de(e),Ee=e=>ve(e)&&e.isConnected,nr=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function me(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const a in e)Array.isArray(e[a])||S(e[a])&&!nr(e[a])?(s[a]=Array.isArray(e[a])?[]:{},me(e[a],s[a])):C(e[a])||(s[a]=!0);return s}function ar(e,s,t){const a=Array.isArray(e);if(S(e)||a)for(const l in e)Array.isArray(e[l])||S(e[l])&&!nr(e[l])?w(s)||_e(t[l])?t[l]=Array.isArray(e[l])?me(e[l],[]):{...me(e[l])}:ar(e[l],C(s)?{}:s[l],t[l]):t[l]=!ee(e[l],s[l]);return t}var xe=(e,s)=>ar(e,s,me(s)),or=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&P(e)?new Date(e):a?a(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Oe(s)?s.files:Re(s)?sr(e.refs).value:ir(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?tr(e.refs).value:or(w(s.value)?e.ref.value:s.value,e)}var Jr=(e,s,t,a)=>{const l={};for(const o of e){const y=f(s,o);y&&m(l,o,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},ue=e=>w(e)?e:be(e)?e.source:S(e)?be(e.value)?e.value.source:e.value:e,Qr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,s,t){const a=f(e,t);if(a||Le(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const o=l.join("."),y=f(s,o),h=f(e,o);if(y&&!Array.isArray(y)&&t!==o)return{name:t};if(h&&h.type)return{name:o,error:h};l.pop()}return{name:t}}var Zr=(e,s,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,et=(e,s)=>!fe(f(e,s)).length&&D(e,s);const rt={mode:j.onSubmit,reValidateMode:j.onChange,shouldFocusError:!0};function tt(e={}){let s={...rt,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},l=S(s.defaultValues)||S(s.values)?$(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:$(l),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},N,H=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:Se(),array:Se(),state:Se()},ge=qe(s.mode),G=qe(s.reValidateMode),O=s.criteriaMode===j.all,we=r=>i=>{clearTimeout(H),H=setTimeout(r,i)},K=async r=>{if(k.isValid||r){const i=s.resolver?B((await Z()).errors):await U(a,!0);i!==t.isValid&&p.state.next({isValid:i})}},Y=(r,i)=>{(k.isValidating||k.validatingFields)&&((r||Array.from(h.mount)).forEach(n=>{n&&(i?m(t.validatingFields,n,i):D(t.validatingFields,n))}),p.state.next({validatingFields:t.validatingFields,isValidating:!B(t.validatingFields)}))},v=(r,i=[],n,d,c=!0,u=!0)=>{if(d&&n){if(y.action=!0,u&&Array.isArray(f(a,r))){const g=n(f(a,r),d.argA,d.argB);c&&m(a,r,g)}if(u&&Array.isArray(f(t.errors,r))){const g=n(f(t.errors,r),d.argA,d.argB);c&&m(t.errors,r,g),et(t.errors,r)}if(k.touchedFields&&u&&Array.isArray(f(t.touchedFields,r))){const g=n(f(t.touchedFields,r),d.argA,d.argB);c&&m(t.touchedFields,r,g)}k.dirtyFields&&(t.dirtyFields=xe(l,o)),p.state.next({name:r,isDirty:x(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else m(o,r,i)},W=(r,i)=>{m(t.errors,r,i),p.state.next({errors:t.errors})},q=r=>{t.errors=r,p.state.next({errors:t.errors,isValid:!1})},A=(r,i,n,d)=>{const c=f(a,r);if(c){const u=f(o,r,w(n)?f(l,r):n);w(u)||d&&d.defaultChecked||i?m(o,r,i?u:Te(c._f)):E(r,u),y.mount&&K()}},re=(r,i,n,d,c)=>{let u=!1,g=!1;const _={name:r},V=!!(f(a,r)&&f(a,r)._f.disabled);if(!n||d){k.isDirty&&(g=t.isDirty,t.isDirty=_.isDirty=x(),u=g!==_.isDirty);const R=V||ee(f(l,r),i);g=!!(!V&&f(t.dirtyFields,r)),R||V?D(t.dirtyFields,r):m(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,u=u||k.dirtyFields&&g!==!R}if(n){const R=f(t.touchedFields,r);R||(m(t.touchedFields,r,n),_.touchedFields=t.touchedFields,u=u||k.touchedFields&&R!==n)}return u&&c&&p.state.next(_),u?_:{}},ye=(r,i,n,d)=>{const c=f(t.errors,r),u=k.isValid&&J(i)&&t.isValid!==i;if(e.delayError&&n?(N=we(()=>W(r,n)),N(e.delayError)):(clearTimeout(H),N=null,n?m(t.errors,r,n):D(t.errors,r)),(n?!ee(c,n):c)||!B(d)||u){const g={...d,...u&&J(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},p.state.next(g)}},Z=async r=>{Y(r,!0);const i=await s.resolver(o,s.context,Jr(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return Y(r),i},te=async r=>{const{errors:i}=await Z(r);if(r)for(const n of r){const d=f(i,n);d?m(t.errors,n,d):D(t.errors,n)}else t.errors=i;return i},U=async(r,i,n={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:u,...g}=c;if(u){const _=h.array.has(u.name);Y([d],!0);const V=await Qe(c,o,O,s.shouldUseNativeValidation&&!i,_);if(Y([d]),V[u.name]&&(n.valid=!1,i))break;!i&&(f(V,u.name)?_?Xr(t.errors,V,u.name):m(t.errors,u.name,V[u.name]):D(t.errors,u.name))}g&&await U(g,i,n)}}return n.valid},he=()=>{for(const r of h.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(n=>!Ee(n)):!Ee(i._f.ref))&&ke(r)}h.unMount=new Set},x=(r,i)=>(r&&i&&m(o,r,i),!ee(Be(),l)),b=(r,i,n)=>Wr(r,h,{...y.mount?o:w(i)?l:P(r)?{[r]:i}:i},n,i),F=r=>fe(f(y.mount?o:l,r,e.shouldUnregister?f(l,r,[]):[])),E=(r,i,n={})=>{const d=f(a,r);let c=i;if(d){const u=d._f;u&&(!u.disabled&&m(o,r,or(i,u)),c=ve(u.ref)&&C(i)?"":i,ir(u.ref)?[...u.ref.options].forEach(g=>g.selected=c.includes(g.value)):u.refs?de(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(_=>_===g.value):c===g.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(g=>g.checked=g.value===c):Oe(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||p.values.next({name:r,values:{...o}})))}(n.shouldDirty||n.shouldTouch)&&re(r,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&le(r)},I=(r,i,n)=>{for(const d in i){const c=i[d],u=`${r}.${d}`,g=f(a,u);(h.array.has(r)||!_e(c)||g&&!g._f)&&!ne(c)?I(u,c,n):E(u,c,n)}},z=(r,i,n={})=>{const d=f(a,r),c=h.array.has(r),u=$(i);m(o,r,u),c?(p.array.next({name:r,values:{...o}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&p.state.next({name:r,dirtyFields:xe(l,o),isDirty:x(r,u)})):d&&!d._f&&!C(u)?I(r,u,n):E(r,u,n),Xe(r,h)&&p.state.next({...t}),p.values.next({name:y.mount?r:void 0,values:{...o}})},ae=async r=>{y.mount=!0;const i=r.target;let n=i.name,d=!0;const c=f(a,n),u=()=>i.type?Te(c._f):$r(r),g=_=>{d=Number.isNaN(_)||_===f(o,n,_)};if(c){let _,V;const R=u(),se=r.type===We.BLUR||r.type===We.FOCUS_OUT,fr=!Qr(c._f)&&!s.resolver&&!f(t.errors,n)&&!c._f.deps||Zr(se,f(t.touchedFields,n),t.isSubmitted,G,ge),Ae=Xe(n,h,se);m(o,n,R),se?(c._f.onBlur&&c._f.onBlur(r),N&&N(0)):c._f.onChange&&c._f.onChange(r);const Fe=re(n,R,se,!1),gr=!B(Fe)||Ae;if(!se&&p.values.next({name:n,type:r.type,values:{...o}}),fr)return k.isValid&&K(),gr&&p.state.next({name:n,...Ae?{}:Fe});if(!se&&Ae&&p.state.next({...t}),s.resolver){const{errors:He}=await Z([n]);if(g(R),d){const yr=Ze(t.errors,a,n),Pe=Ze(He,a,yr.name||n);_=Pe.error,n=Pe.name,V=B(He)}}else Y([n],!0),_=(await Qe(c,o,O,s.shouldUseNativeValidation))[n],Y([n]),g(R),d&&(_?V=!1:k.isValid&&(V=await U(a,!0)));d&&(c._f.deps&&le(c._f.deps),ye(n,V,_,Fe))}},oe=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let n,d;const c=De(r);if(s.resolver){const u=await te(w(r)?r:c);n=B(u),d=r?!c.some(g=>f(u,g)):n}else r?(d=(await Promise.all(c.map(async u=>{const g=f(a,u);return await U(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!d&&!t.isValid)&&K()):d=n=await U(a);return p.state.next({...!P(r)||k.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!d&&ce(a,oe,r?c:h.mount),d},Be=r=>{const i={...y.mount?o:l};return w(r)?i:P(r)?f(i,r):r.map(n=>f(i,n))},Ue=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),isTouched:!!f((i||t).touchedFields,r),isValidating:!!f((i||t).validatingFields,r),error:f((i||t).errors,r)}),lr=r=>{r&&De(r).forEach(i=>D(t.errors,i)),p.state.next({errors:r?t.errors:{}})},ze=(r,i,n)=>{const d=(f(a,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:u,message:g,type:_,...V}=c;m(t.errors,r,{...V,...i,ref:d}),p.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&d&&d.focus&&d.focus()},ur=(r,i)=>Q(r)?p.values.subscribe({next:n=>r(b(void 0,i),n)}):b(r,i,!0),ke=(r,i={})=>{for(const n of r?De(r):h.mount)h.mount.delete(n),h.array.delete(n),i.keepValue||(D(a,n),D(o,n)),!i.keepError&&D(t.errors,n),!i.keepDirty&&D(t.dirtyFields,n),!i.keepTouched&&D(t.touchedFields,n),!i.keepIsValidating&&D(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&D(l,n);p.values.next({values:{...o}}),p.state.next({...t,...i.keepDirty?{isDirty:x()}:{}}),!i.keepIsValid&&K()},$e=({disabled:r,name:i,field:n,fields:d,value:c})=>{if(J(r)&&y.mount||r){const u=r?void 0:w(c)?Te(n?n._f:f(d,i)._f):c;m(o,i,u),re(i,u,!1,!1,!0)}},Ve=(r,i={})=>{let n=f(a,r);const d=J(i.disabled);return m(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),n?$e({field:n,disabled:i.disabled,name:r,value:i.value}):A(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:c=>{if(c){Ve(r,i),n=f(a,r);const u=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Yr(u),_=n._f.refs||[];if(g?_.find(V=>V===u):u===n._f.ref)return;m(a,r,{_f:{...n._f,...g?{refs:[..._.filter(Ee),u,...Array.isArray(f(l,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),A(r,!1,void 0,u)}else n=f(a,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Nr(h.array,r)&&y.action)&&h.unMount.add(r)}}},Me=()=>s.shouldFocusError&&ce(a,oe,h.mount),cr=r=>{J(r)&&(p.state.next({disabled:r}),ce(a,(i,n)=>{const d=f(a,n);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},Ne=(r,i)=>async n=>{let d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=$(o);if(p.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:g}=await Z();t.errors=u,c=g}else await U(a);if(D(t.errors,"root"),B(t.errors)){p.state.next({errors:{}});try{await r(c,n)}catch(u){d=u}}else i&&await i({...t.errors},n),Me(),setTimeout(Me);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},dr=(r,i={})=>{f(a,r)&&(w(i.defaultValue)?z(r,$(f(l,r))):(z(r,i.defaultValue),m(l,r,$(i.defaultValue))),i.keepTouched||D(t.touchedFields,r),i.keepDirty||(D(t.dirtyFields,r),t.isDirty=i.defaultValue?x(r,$(f(l,r))):x()),i.keepError||(D(t.errors,r),k.isValid&&K()),p.state.next({...t}))},Ie=(r,i={})=>{const n=r?$(r):l,d=$(n),c=B(r),u=c?l:d;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)f(t.dirtyFields,g)?m(u,g,f(o,g)):z(g,f(u,g));else{if(Ce&&w(r))for(const g of h.mount){const _=f(a,g);if(_&&_._f){const V=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(ve(V)){const R=V.closest("form");if(R){R.reset();break}}}}a={}}o=e.shouldUnregister?i.keepDefaultValues?$(l):{}:$(u),p.array.next({values:{...u}}),p.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!k.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,p.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ee(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&o?xe(l,o):t.dirtyFields:i.keepDefaultValues&&r?xe(l,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},je=(r,i)=>Ie(Q(r)?r(o):r,i);return{control:{register:Ve,unregister:ke,getFieldState:Ue,handleSubmit:Ne,setError:ze,_executeSchema:Z,_getWatch:b,_getDirty:x,_updateValid:K,_removeUnmounted:he,_updateFieldArray:v,_updateDisabledField:$e,_getFieldArray:F,_reset:Ie,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{je(r,s.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:cr,_subjects:p,_proxyFormState:k,_setErrors:q,get _fields(){return a},get _formValues(){return o},get _state(){return y},set _state(r){y=r},get _defaultValues(){return l},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:Ve,handleSubmit:Ne,watch:ur,setValue:z,getValues:Be,reset:je,resetField:dr,clearErrors:lr,unregister:ke,setError:ze,setFocus:(r,i={})=>{const n=f(a,r),d=n&&n._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ue}}function ft(e={}){const s=M.useRef(),t=M.useRef(),[a,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...tt(e),formState:a});const o=s.current.control;return o._options=e,Pr({subject:o._subjects.state,next:y=>{Hr(y,o._proxyFormState,o._updateFormState,!0)&&l({...o._formState})}}),M.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),M.useEffect(()=>{if(o._proxyFormState.isDirty){const y=o._getDirty();y!==a.isDirty&&o._subjects.state.next({isDirty:y})}},[o,a.isDirty]),M.useEffect(()=>{e.values&&!ee(e.values,t.current)?(o._reset(e.values,o._options.resetOptions),t.current=e.values,l(y=>({...y}))):o._resetDefaultValues()},[e.values,o]),M.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),M.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=jr(a,o),s.current}export{ot as H,ut as I,lt as S,dt as T,ct as a,ft as u};
