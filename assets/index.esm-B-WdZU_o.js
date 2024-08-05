import{u as T,b as G,j as $,t as M}from"./index-Cmuxgw-N.js";const xr="/petlove/shape_bcgr_mob1.png",vr="/petlove/shape_bcgr_tab1.png",pr="/petlove/shape_bcgr_desk1.png",br=T.div`
    width: 335px;
    height: 280px;
    border-radius: 30px;

    position: relative;
    overflow: hidden;

    background: ${e=>e.theme.colors.yellow};

    @media only screen and (min-width: ${G.medium}) {
        width: 704px;
        height: 302px;

        border-radius: 60px;
    }

    @media only screen and (min-width: ${G.large}) {
        margin-left: -32px;
        width: 592px;
        height: 654px;
    }
`,_r=T.div`
    width: 305px;
    height: 280px;

    position: absolute;
    bottom: -20px;
    left: 27px;

    background: url(${xr}) no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media only screen and (min-width: ${G.medium}) {
        width: 550px;
        height: 302px;

        position: absolute;
        bottom: -30px;
        left: 106px;

        background: url(${vr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }

    @media only screen and (min-width: ${G.large}) {
        width: 530px;
        height: 720px;

        position: absolute;
        bottom: -65px;
        left: 30px;

        background: url(${pr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,mr=T.div`
    display: inline-block;
`,lt=({children:e})=>$.jsxs(br,{children:[$.jsx(_r,{}),$.jsx(mr,{children:e})]}),wr="/petlove/images/dog_hero_mob_x1.png",kr="/petlove/images/dog_hero_mob_x2.png",Vr="/petlove/images/dog_hero_tabx1.png",Ar="/petlove/images/dog_hero_tabx2.png",Fr="/petlove/images/dog_hero_desk_x1.png",Dr="/petlove/images/dog_hero_desk_x2.png",ut=T.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: ${G.medium}) {
        gap: 16px;
    }

    @media only screen and (min-width: ${G.large}) {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`,ct=T.div`
    width: 335px;
    height: 280px;

    /* background: url() no-repeat center center; */
    background-size: contain;
    z-index: 101;

    @media (max-width: 767px) {
        background: url(${wr}) no-repeat center center;
        background-size: cover;
        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${kr}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${G.medium}) {
        width: 364px;
        height: 302px;

        position: absolute;
        bottom: 0;
        left: 258px;

        background: url(${Vr}) no-repeat center center;
        background-size: cover;
        z-index: 10;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Ar}) no-repeat center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: ${G.large}) {
        width: 490px;
        height: 640px;

        position: absolute;
        bottom: 0px;
        left: 45%;
        transform: translateX(-50%);

        background: url(${Fr}) no-repeat center center;
        background-size: cover;
        z-index: 1;

        @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background: url(${Dr}) no-repeat center center;
            background-size: cover;
        }
    }
`,Sr=T.div`
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
`,Er=T.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Tr=T.div`
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
`,Cr=T.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 194px;
`,$r=T.div`
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
`,dt=({avatarSrc:e,avatarSrc2x:s,title:t,birthDate:a,description:l})=>$.jsxs(Sr,{children:[$.jsx(Er,{children:$.jsx(Tr,{$avatarSrc:e,$avatarSrc2x:s,alt:"Hero Avatar"})}),$.jsxs(Cr,{children:[$.jsxs($r,{children:[$.jsx(Lr,{children:t}),$.jsxs(Or,{children:[$.jsx(Rr,{children:"Birthday: "}),$.jsx(Br,{children:a})]})]}),$.jsx(Ur,{children:l})]})]}),zr=T.h1`
    margin-bottom: 12px;

    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: ${e=>e.color||e.theme.colors.black};

    @media only screen and (min-width: ${G.medium}) {
        margin-bottom: 16px;

        font-size: 54px;
    }
`,ft=({text:e,color:s})=>$.jsx(zr,{color:s,children:e});var fe=e=>e.type==="checkbox",ae=e=>e instanceof Date,C=e=>e==null;const rr=e=>typeof e=="object";var S=e=>!C(e)&&!Array.isArray(e)&&rr(e)&&!ae(e),Mr=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,Nr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ir=(e,s)=>e.has(Nr(s)),jr=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function z(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!jr(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=z(e[a]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,f=(e,s,t)=>{if(!s||!S(e))return t;const a=ge(s.split(/[,[\].]+?/)).reduce((l,o)=>C(l)?l:l[o],e);return w(a)||a===e?w(e[s])?t:e[s]:a},Q=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),tr=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,s,t)=>{let a=-1;const l=Le(s)?[s]:tr(s),o=l.length,y=o-1;for(;++a<o;){const h=l[a];let N=t;if(a!==y){const H=e[h];N=S(H)||Array.isArray(H)?H:isNaN(+l[a+1])?{}:[]}if(h==="__proto__")return;e[h]=N,e=e[h]}return e};const qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},j={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Hr=(e,s,t,a=!0)=>{const l={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(l,o,{get:()=>{const y=o;return s._proxyFormState[y]!==j.all&&(s._proxyFormState[y]=!a||j.all),t&&(t[y]=!0),e[y]}});return l},R=e=>S(e)&&!Object.keys(e).length,Pr=(e,s,t,a)=>{t(e);const{name:l,...o}=e;return R(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(y=>s[y]===(!a||j.all))},Se=e=>Array.isArray(e)?e:[e];function Wr(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var P=e=>typeof e=="string",qr=(e,s,t,a,l)=>P(e)?(a&&s.watch.add(e),f(t,e,l)):Array.isArray(e)?e.map(o=>(a&&s.watch.add(o),f(t,o))):(a&&(s.watchAll=!0),t),Xr=(e,s,t,a,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},Xe=e=>({isOnSubmit:!e||e===j.onSubmit,isOnBlur:e===j.onBlur,isOnChange:e===j.onChange,isOnAll:e===j.all,isOnTouch:e===j.onTouched}),Ge=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const de=(e,s,t,a)=>{for(const l of t||Object.keys(e)){const o=f(e,l);if(o){const{_f:y,...h}=o;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],l)&&!a)break;if(y.ref&&s(y.ref,y.name)&&!a)break;de(h,s)}else S(h)&&de(h,s)}}};var Gr=(e,s,t)=>{const a=ge(f(e,t));return m(a,"root",s[t]),m(e,t,a),e},Oe=e=>e.type==="file",Z=e=>typeof e=="function",be=e=>{if(!$e)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},pe=e=>P(e),Re=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var sr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Ke}return Ke};const Je={isValid:!1,value:null};var ir=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||Q(e)&&!e)return{type:t,message:pe(e)?e:"",ref:s}}var ne=e=>S(e)&&!_e(e)?e:{value:e,message:""},Ze=async(e,s,t,a,l)=>{const{ref:o,refs:y,required:h,maxLength:N,minLength:H,min:k,max:v,pattern:ye,validate:K,name:L,valueAsNumber:ke,mount:Y,disabled:J}=e._f,p=f(s,L);if(!Y||J)return{};const W=y?y[0]:o,q=x=>{a&&W.reportValidity&&(W.setCustomValidity(Q(x)?"":x||""),W.reportValidity())},A={},te=Re(o),he=fe(o),ee=te||he,se=(ke||Oe(o))&&w(o.value)&&w(p)||be(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,B=Xr.bind(null,L,t,A),xe=(x,b,F,E=X.maxLength,I=X.minLength)=>{const U=x?b:F;A[L]={type:x?E:I,message:U,ref:o,...B(x?E:I,U)}};if(l?!Array.isArray(p)||!p.length:h&&(!ee&&(se||C(p))||Q(p)&&!p||he&&!sr(y).isValid||te&&!ir(y).isValid)){const{value:x,message:b}=pe(h)?{value:!!h,message:h}:ne(h);if(x&&(A[L]={type:X.required,message:b,ref:W,...B(X.required,b)},!t))return q(b),A}if(!se&&(!C(k)||!C(v))){let x,b;const F=ne(v),E=ne(k);if(!C(p)&&!isNaN(p)){const I=o.valueAsNumber||p&&+p;C(F.value)||(x=I>F.value),C(E.value)||(b=I<E.value)}else{const I=o.valueAsDate||new Date(p),U=ue=>new Date(new Date().toDateString()+" "+ue),oe=o.type=="time",le=o.type=="week";P(F.value)&&p&&(x=oe?U(p)>U(F.value):le?p>F.value:I>new Date(F.value)),P(E.value)&&p&&(b=oe?U(p)<U(E.value):le?p<E.value:I<new Date(E.value))}if((x||b)&&(xe(!!x,F.message,E.message,X.max,X.min),!t))return q(A[L].message),A}if((N||H)&&!se&&(P(p)||l&&Array.isArray(p))){const x=ne(N),b=ne(H),F=!C(x.value)&&p.length>+x.value,E=!C(b.value)&&p.length<+b.value;if((F||E)&&(xe(F,x.message,b.message),!t))return q(A[L].message),A}if(ye&&!se&&P(p)){const{value:x,message:b}=ne(ye);if(_e(x)&&!p.match(x)&&(A[L]={type:X.pattern,message:b,ref:o,...B(X.pattern,b)},!t))return q(b),A}if(K){if(Z(K)){const x=await K(p,s),b=Qe(x,W);if(b&&(A[L]={...b,...B(X.validate,b.message)},!t))return q(b.message),A}else if(S(K)){let x={};for(const b in K){if(!R(x)&&!t)break;const F=Qe(await K[b](p,s),W,b);F&&(x={...F,...B(b,F.message)},q(F.message),t&&(A[L]=x))}if(!R(x)&&(A[L]={ref:W,...x},!t))return A}}return q(!0),A};function Kr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function Yr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function D(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:tr(s),a=t.length===1?e:Kr(e,t),l=t.length-1,o=t[l];return a&&delete a[o],l!==0&&(S(a)&&R(a)||Array.isArray(a)&&Yr(a))&&D(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const o of e)o.next&&o.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(o=>o!==l)}}),unsubscribe:()=>{e=[]}}},me=e=>C(e)||!rr(e);function re(e,s){if(me(e)||me(s))return e===s;if(ae(e)&&ae(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const l of t){const o=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const y=s[l];if(ae(o)&&ae(y)||S(o)&&S(y)||Array.isArray(o)&&Array.isArray(y)?!re(o,y):o!==y)return!1}}return!0}var nr=e=>e.type==="select-multiple",Jr=e=>Re(e)||fe(e),Te=e=>be(e)&&e.isConnected,ar=e=>{for(const s in e)if(Z(e[s]))return!0;return!1};function we(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const a in e)Array.isArray(e[a])||S(e[a])&&!ar(e[a])?(s[a]=Array.isArray(e[a])?[]:{},we(e[a],s[a])):C(e[a])||(s[a]=!0);return s}function or(e,s,t){const a=Array.isArray(e);if(S(e)||a)for(const l in e)Array.isArray(e[l])||S(e[l])&&!ar(e[l])?w(s)||me(t[l])?t[l]=Array.isArray(e[l])?we(e[l],[]):{...we(e[l])}:or(e[l],C(s)?{}:s[l],t[l]):t[l]=!re(e[l],s[l]);return t}var ve=(e,s)=>or(e,s,we(s)),lr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&P(e)?new Date(e):a?a(e):e;function Ce(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Oe(s)?s.files:Re(s)?ir(e.refs).value:nr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?sr(e.refs).value:lr(w(s.value)?e.ref.value:s.value,e)}var Qr=(e,s,t,a)=>{const l={};for(const o of e){const y=f(s,o);y&&m(l,o,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},ce=e=>w(e)?e:_e(e)?e.source:S(e)?_e(e.value)?e.value.source:e.value:e,Zr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function er(e,s,t){const a=f(e,t);if(a||Le(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const o=l.join("."),y=f(s,o),h=f(e,o);if(y&&!Array.isArray(y)&&t!==o)return{name:t};if(h&&h.type)return{name:o,error:h};l.pop()}return{name:t}}var et=(e,s,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,rt=(e,s)=>!ge(f(e,s)).length&&D(e,s);const tt={mode:j.onSubmit,reValidateMode:j.onChange,shouldFocusError:!0};function st(e={}){let s={...tt,...e},t={submitCount:0,isDirty:!1,isLoading:Z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},l=S(s.defaultValues)||S(s.values)?z(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:z(l),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},N,H=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},ye=Xe(s.mode),K=Xe(s.reValidateMode),L=s.criteriaMode===j.all,ke=r=>i=>{clearTimeout(H),H=setTimeout(r,i)},Y=async r=>{if(k.isValid||r){const i=s.resolver?R((await ee()).errors):await B(a,!0);i!==t.isValid&&v.state.next({isValid:i})}},J=(r,i)=>{(k.isValidating||k.validatingFields)&&((r||Array.from(h.mount)).forEach(n=>{n&&(i?m(t.validatingFields,n,i):D(t.validatingFields,n))}),v.state.next({validatingFields:t.validatingFields,isValidating:!R(t.validatingFields)}))},p=(r,i=[],n,d,c=!0,u=!0)=>{if(d&&n){if(y.action=!0,u&&Array.isArray(f(a,r))){const g=n(f(a,r),d.argA,d.argB);c&&m(a,r,g)}if(u&&Array.isArray(f(t.errors,r))){const g=n(f(t.errors,r),d.argA,d.argB);c&&m(t.errors,r,g),rt(t.errors,r)}if(k.touchedFields&&u&&Array.isArray(f(t.touchedFields,r))){const g=n(f(t.touchedFields,r),d.argA,d.argB);c&&m(t.touchedFields,r,g)}k.dirtyFields&&(t.dirtyFields=ve(l,o)),v.state.next({name:r,isDirty:x(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else m(o,r,i)},W=(r,i)=>{m(t.errors,r,i),v.state.next({errors:t.errors})},q=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},A=(r,i,n,d)=>{const c=f(a,r);if(c){const u=f(o,r,w(n)?f(l,r):n);w(u)||d&&d.defaultChecked||i?m(o,r,i?u:Ce(c._f)):E(r,u),y.mount&&Y()}},te=(r,i,n,d,c)=>{let u=!1,g=!1;const _={name:r},V=!!(f(a,r)&&f(a,r)._f.disabled);if(!n||d){k.isDirty&&(g=t.isDirty,t.isDirty=_.isDirty=x(),u=g!==_.isDirty);const O=V||re(f(l,r),i);g=!!(!V&&f(t.dirtyFields,r)),O||V?D(t.dirtyFields,r):m(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,u=u||k.dirtyFields&&g!==!O}if(n){const O=f(t.touchedFields,r);O||(m(t.touchedFields,r,n),_.touchedFields=t.touchedFields,u=u||k.touchedFields&&O!==n)}return u&&c&&v.state.next(_),u?_:{}},he=(r,i,n,d)=>{const c=f(t.errors,r),u=k.isValid&&Q(i)&&t.isValid!==i;if(e.delayError&&n?(N=ke(()=>W(r,n)),N(e.delayError)):(clearTimeout(H),N=null,n?m(t.errors,r,n):D(t.errors,r)),(n?!re(c,n):c)||!R(d)||u){const g={...d,...u&&Q(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},v.state.next(g)}},ee=async r=>{J(r,!0);const i=await s.resolver(o,s.context,Qr(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},se=async r=>{const{errors:i}=await ee(r);if(r)for(const n of r){const d=f(i,n);d?m(t.errors,n,d):D(t.errors,n)}else t.errors=i;return i},B=async(r,i,n={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:u,...g}=c;if(u){const _=h.array.has(u.name);J([d],!0);const V=await Ze(c,o,L,s.shouldUseNativeValidation&&!i,_);if(J([d]),V[u.name]&&(n.valid=!1,i))break;!i&&(f(V,u.name)?_?Gr(t.errors,V,u.name):m(t.errors,u.name,V[u.name]):D(t.errors,u.name))}g&&await B(g,i,n)}}return n.valid},xe=()=>{for(const r of h.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(n=>!Te(n)):!Te(i._f.ref))&&Ve(r)}h.unMount=new Set},x=(r,i)=>(r&&i&&m(o,r,i),!re(Be(),l)),b=(r,i,n)=>qr(r,h,{...y.mount?o:w(i)?l:P(r)?{[r]:i}:i},n,i),F=r=>ge(f(y.mount?o:l,r,e.shouldUnregister?f(l,r,[]):[])),E=(r,i,n={})=>{const d=f(a,r);let c=i;if(d){const u=d._f;u&&(!u.disabled&&m(o,r,lr(i,u)),c=be(u.ref)&&C(i)?"":i,nr(u.ref)?[...u.ref.options].forEach(g=>g.selected=c.includes(g.value)):u.refs?fe(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(_=>_===g.value):c===g.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(g=>g.checked=g.value===c):Oe(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||v.values.next({name:r,values:{...o}})))}(n.shouldDirty||n.shouldTouch)&&te(r,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ue(r)},I=(r,i,n)=>{for(const d in i){const c=i[d],u=`${r}.${d}`,g=f(a,u);(h.array.has(r)||!me(c)||g&&!g._f)&&!ae(c)?I(u,c,n):E(u,c,n)}},U=(r,i,n={})=>{const d=f(a,r),c=h.array.has(r),u=z(i);m(o,r,u),c?(v.array.next({name:r,values:{...o}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&v.state.next({name:r,dirtyFields:ve(l,o),isDirty:x(r,u)})):d&&!d._f&&!C(u)?I(r,u,n):E(r,u,n),Ge(r,h)&&v.state.next({...t}),v.values.next({name:y.mount?r:void 0,values:{...o}})},oe=async r=>{y.mount=!0;const i=r.target;let n=i.name,d=!0;const c=f(a,n),u=()=>i.type?Ce(c._f):Mr(r),g=_=>{d=Number.isNaN(_)||_===f(o,n,_)};if(c){let _,V;const O=u(),ie=r.type===qe.BLUR||r.type===qe.FOCUS_OUT,gr=!Zr(c._f)&&!s.resolver&&!f(t.errors,n)&&!c._f.deps||et(ie,f(t.touchedFields,n),t.isSubmitted,K,ye),Fe=Ge(n,h,ie);m(o,n,O),ie?(c._f.onBlur&&c._f.onBlur(r),N&&N(0)):c._f.onChange&&c._f.onChange(r);const De=te(n,O,ie,!1),yr=!R(De)||Fe;if(!ie&&v.values.next({name:n,type:r.type,values:{...o}}),gr)return k.isValid&&Y(),yr&&v.state.next({name:n,...Fe?{}:De});if(!ie&&Fe&&v.state.next({...t}),s.resolver){const{errors:Pe}=await ee([n]);if(g(O),d){const hr=er(t.errors,a,n),We=er(Pe,a,hr.name||n);_=We.error,n=We.name,V=R(Pe)}}else J([n],!0),_=(await Ze(c,o,L,s.shouldUseNativeValidation))[n],J([n]),g(O),d&&(_?V=!1:k.isValid&&(V=await B(a,!0)));d&&(c._f.deps&&ue(c._f.deps),he(n,V,_,De))}},le=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},ue=async(r,i={})=>{let n,d;const c=Se(r);if(s.resolver){const u=await se(w(r)?r:c);n=R(u),d=r?!c.some(g=>f(u,g)):n}else r?(d=(await Promise.all(c.map(async u=>{const g=f(a,u);return await B(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!d&&!t.isValid)&&Y()):d=n=await B(a);return v.state.next({...!P(r)||k.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!d&&de(a,le,r?c:h.mount),d},Be=r=>{const i={...y.mount?o:l};return w(r)?i:P(r)?f(i,r):r.map(n=>f(i,n))},Ue=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),isTouched:!!f((i||t).touchedFields,r),isValidating:!!f((i||t).validatingFields,r),error:f((i||t).errors,r)}),ur=r=>{r&&Se(r).forEach(i=>D(t.errors,i)),v.state.next({errors:r?t.errors:{}})},ze=(r,i,n)=>{const d=(f(a,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:u,message:g,type:_,...V}=c;m(t.errors,r,{...V,...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&d&&d.focus&&d.focus()},cr=(r,i)=>Z(r)?v.values.subscribe({next:n=>r(b(void 0,i),n)}):b(r,i,!0),Ve=(r,i={})=>{for(const n of r?Se(r):h.mount)h.mount.delete(n),h.array.delete(n),i.keepValue||(D(a,n),D(o,n)),!i.keepError&&D(t.errors,n),!i.keepDirty&&D(t.dirtyFields,n),!i.keepTouched&&D(t.touchedFields,n),!i.keepIsValidating&&D(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&D(l,n);v.values.next({values:{...o}}),v.state.next({...t,...i.keepDirty?{isDirty:x()}:{}}),!i.keepIsValid&&Y()},Me=({disabled:r,name:i,field:n,fields:d,value:c})=>{if(Q(r)&&y.mount||r){const u=r?void 0:w(c)?Ce(n?n._f:f(d,i)._f):c;m(o,i,u),te(i,u,!1,!1,!0)}},Ae=(r,i={})=>{let n=f(a,r);const d=Q(i.disabled);return m(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),n?Me({field:n,disabled:i.disabled,name:r,value:i.value}):A(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:r,onChange:oe,onBlur:oe,ref:c=>{if(c){Ae(r,i),n=f(a,r);const u=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Jr(u),_=n._f.refs||[];if(g?_.find(V=>V===u):u===n._f.ref)return;m(a,r,{_f:{...n._f,...g?{refs:[..._.filter(Te),u,...Array.isArray(f(l,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),A(r,!1,void 0,u)}else n=f(a,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Ir(h.array,r)&&y.action)&&h.unMount.add(r)}}},Ne=()=>s.shouldFocusError&&de(a,le,h.mount),dr=r=>{Q(r)&&(v.state.next({disabled:r}),de(a,(i,n)=>{const d=f(a,n);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},Ie=(r,i)=>async n=>{let d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=z(o);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:g}=await ee();t.errors=u,c=g}else await B(a);if(D(t.errors,"root"),R(t.errors)){v.state.next({errors:{}});try{await r(c,n)}catch(u){d=u}}else i&&await i({...t.errors},n),Ne(),setTimeout(Ne);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},fr=(r,i={})=>{f(a,r)&&(w(i.defaultValue)?U(r,z(f(l,r))):(U(r,i.defaultValue),m(l,r,z(i.defaultValue))),i.keepTouched||D(t.touchedFields,r),i.keepDirty||(D(t.dirtyFields,r),t.isDirty=i.defaultValue?x(r,z(f(l,r))):x()),i.keepError||(D(t.errors,r),k.isValid&&Y()),v.state.next({...t}))},je=(r,i={})=>{const n=r?z(r):l,d=z(n),c=R(r),u=c?l:d;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)f(t.dirtyFields,g)?m(u,g,f(o,g)):U(g,f(u,g));else{if($e&&w(r))for(const g of h.mount){const _=f(a,g);if(_&&_._f){const V=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(be(V)){const O=V.closest("form");if(O){O.reset();break}}}}a={}}o=e.shouldUnregister?i.keepDefaultValues?z(l):{}:z(u),v.array.next({values:{...u}}),v.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!k.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!re(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&o?ve(l,o):t.dirtyFields:i.keepDefaultValues&&r?ve(l,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},He=(r,i)=>je(Z(r)?r(o):r,i);return{control:{register:Ae,unregister:Ve,getFieldState:Ue,handleSubmit:Ie,setError:ze,_executeSchema:ee,_getWatch:b,_getDirty:x,_updateValid:Y,_removeUnmounted:xe,_updateFieldArray:p,_updateDisabledField:Me,_getFieldArray:F,_reset:je,_resetDefaultValues:()=>Z(s.defaultValues)&&s.defaultValues().then(r=>{He(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:dr,_subjects:v,_proxyFormState:k,_setErrors:q,get _fields(){return a},get _formValues(){return o},get _state(){return y},set _state(r){y=r},get _defaultValues(){return l},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:Ae,handleSubmit:Ie,watch:cr,setValue:U,getValues:Be,reset:He,resetField:fr,clearErrors:ur,unregister:Ve,setError:ze,setFocus:(r,i={})=>{const n=f(a,r),d=n&&n._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ue}}function gt(e={}){const s=M.useRef(),t=M.useRef(),[a,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:Z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...st(e),formState:a});const o=s.current.control;return o._options=e,Wr({subject:o._subjects.state,next:y=>{Pr(y,o._proxyFormState,o._updateFormState,!0)&&l({...o._formState})}}),M.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),M.useEffect(()=>{if(o._proxyFormState.isDirty){const y=o._getDirty();y!==a.isDirty&&o._subjects.state.next({isDirty:y})}},[o,a.isDirty]),M.useEffect(()=>{e.values&&!re(e.values,t.current)?(o._reset(e.values,o._options.resetOptions),t.current=e.values,l(y=>({...y}))):o._resetDefaultValues()},[e.values,o]),M.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),M.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=Hr(a,o),s.current}export{lt as H,ct as I,ut as S,ft as T,dt as a,gt as u};
