import{u as T,j as R,R as M}from"./index-BrvqWY58.js";const hr="/petlove/shape_bcgr_mob1.png",xr="/petlove/shape_bcgr_tab1.png",vr="/petlove/shape_bcgr_desk1.png",pr=T.div`
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

        background: url(${vr}) no-repeat center center;
        background-size: contain;
        z-index: 1;
    }
`,_r=T.div`
    display: inline-block;
`,at=({children:e})=>R.jsxs(pr,{children:[R.jsx(br,{}),R.jsx(_r,{children:e})]}),mr="/petlove/images/dog_hero_mob_x1.png",wr="/petlove/images/dog_hero_mob_x2.png",kr="/petlove/images/dog_hero_tabx1.png",Vr="/petlove/images/dog_hero_tabx2.png",Ar="/petlove/images/dog_hero_desk_x1.png",Fr="/petlove/images/dog_hero_desk_x2.png",ot=T.div`
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
`,lt=T.div`
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
`,Er=T.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${e=>e.theme.colors.lightYellow};
`,Sr=T.div`
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
`,Tr=T.div`
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
`,ut=({avatarSrc:e,avatarSrc2x:s,title:t,birthDate:a,description:l})=>R.jsxs(Dr,{children:[R.jsx(Er,{children:R.jsx(Sr,{$avatarSrc:e,$avatarSrc2x:s,alt:"Hero Avatar"})}),R.jsxs(Cr,{children:[R.jsxs(Tr,{children:[R.jsx(Lr,{children:t}),R.jsxs(Or,{children:[R.jsx(Rr,{children:"Birthday: "}),R.jsx(Br,{children:a})]})]}),R.jsx(Ur,{children:l})]})]});var de=e=>e.type==="checkbox",ne=e=>e instanceof Date,C=e=>e==null;const er=e=>typeof e=="object";var E=e=>!C(e)&&!Array.isArray(e)&&er(e)&&!ne(e),$r=e=>E(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,zr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Mr=(e,s)=>e.has(zr(s)),Nr=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function z(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||E(e)))if(s=t?[]:{},!t&&!Nr(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=z(e[a]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,f=(e,s,t)=>{if(!s||!E(e))return t;const a=fe(s.split(/[,[\].]+?/)).reduce((l,o)=>C(l)?l:l[o],e);return w(a)||a===e?w(e[s])?t:e[s]:a},J=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),rr=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,s,t)=>{let a=-1;const l=Le(s)?[s]:rr(s),o=l.length,g=o-1;for(;++a<o;){const h=l[a];let N=t;if(a!==g){const j=e[h];N=E(j)||Array.isArray(j)?j:isNaN(+l[a+1])?{}:[]}if(h==="__proto__")return;e[h]=N,e=e[h]}return e};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Ir=(e,s,t,a=!0)=>{const l={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(l,o,{get:()=>{const g=o;return s._proxyFormState[g]!==H.all&&(s._proxyFormState[g]=!a||H.all),t&&(t[g]=!0),e[g]}});return l},B=e=>E(e)&&!Object.keys(e).length,Hr=(e,s,t,a)=>{t(e);const{name:l,...o}=e;return B(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(g=>s[g]===(!a||H.all))},De=e=>Array.isArray(e)?e:[e];function jr(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var P=e=>typeof e=="string",Pr=(e,s,t,a,l)=>P(e)?(a&&s.watch.add(e),f(t,e,l)):Array.isArray(e)?e.map(o=>(a&&s.watch.add(o),f(t,o))):(a&&(s.watchAll=!0),t),Wr=(e,s,t,a,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},qe=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),Xe=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ce=(e,s,t,a)=>{for(const l of t||Object.keys(e)){const o=f(e,l);if(o){const{_f:g,...h}=o;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],l)&&!a)break;if(g.ref&&s(g.ref,g.name)&&!a)break;ce(h,s)}else E(h)&&ce(h,s)}}};var qr=(e,s,t)=>{const a=fe(f(e,t));return m(a,"root",s[t]),m(e,t,a),e},Oe=e=>e.type==="file",Q=e=>typeof e=="function",pe=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>P(e),Re=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var tr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:Ge}return Ge};const Ye={isValid:!1,value:null};var sr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ye):Ye;function Je(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||J(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ie=e=>E(e)&&!be(e)?e:{value:e,message:""},Qe=async(e,s,t,a,l)=>{const{ref:o,refs:g,required:h,maxLength:N,minLength:j,min:k,max:v,pattern:ye,validate:G,name:L,valueAsNumber:we,mount:K,disabled:Y}=e._f,p=f(s,L);if(!K||Y)return{};const W=g?g[0]:o,q=x=>{a&&W.reportValidity&&(W.setCustomValidity(J(x)?"":x||""),W.reportValidity())},A={},re=Re(o),ge=de(o),Z=re||ge,te=(we||Oe(o))&&w(o.value)&&w(p)||pe(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,U=Wr.bind(null,L,t,A),he=(x,b,F,S=X.maxLength,I=X.minLength)=>{const $=x?b:F;A[L]={type:x?S:I,message:$,ref:o,...U(x?S:I,$)}};if(l?!Array.isArray(p)||!p.length:h&&(!Z&&(te||C(p))||J(p)&&!p||ge&&!tr(g).isValid||re&&!sr(g).isValid)){const{value:x,message:b}=ve(h)?{value:!!h,message:h}:ie(h);if(x&&(A[L]={type:X.required,message:b,ref:W,...U(X.required,b)},!t))return q(b),A}if(!te&&(!C(k)||!C(v))){let x,b;const F=ie(v),S=ie(k);if(!C(p)&&!isNaN(p)){const I=o.valueAsNumber||p&&+p;C(F.value)||(x=I>F.value),C(S.value)||(b=I<S.value)}else{const I=o.valueAsDate||new Date(p),$=le=>new Date(new Date().toDateString()+" "+le),ae=o.type=="time",oe=o.type=="week";P(F.value)&&p&&(x=ae?$(p)>$(F.value):oe?p>F.value:I>new Date(F.value)),P(S.value)&&p&&(b=ae?$(p)<$(S.value):oe?p<S.value:I<new Date(S.value))}if((x||b)&&(he(!!x,F.message,S.message,X.max,X.min),!t))return q(A[L].message),A}if((N||j)&&!te&&(P(p)||l&&Array.isArray(p))){const x=ie(N),b=ie(j),F=!C(x.value)&&p.length>+x.value,S=!C(b.value)&&p.length<+b.value;if((F||S)&&(he(F,x.message,b.message),!t))return q(A[L].message),A}if(ye&&!te&&P(p)){const{value:x,message:b}=ie(ye);if(be(x)&&!p.match(x)&&(A[L]={type:X.pattern,message:b,ref:o,...U(X.pattern,b)},!t))return q(b),A}if(G){if(Q(G)){const x=await G(p,s),b=Je(x,W);if(b&&(A[L]={...b,...U(X.validate,b.message)},!t))return q(b.message),A}else if(E(G)){let x={};for(const b in G){if(!B(x)&&!t)break;const F=Je(await G[b](p,s),W,b);F&&(x={...F,...U(b,F.message)},q(F.message),t&&(A[L]=x))}if(!B(x)&&(A[L]={ref:W,...x},!t))return A}}return q(!0),A};function Xr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function Gr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function D(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:rr(s),a=t.length===1?e:Xr(e,t),l=t.length-1,o=t[l];return a&&delete a[o],l!==0&&(E(a)&&B(a)||Array.isArray(a)&&Gr(a))&&D(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const o of e)o.next&&o.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(o=>o!==l)}}),unsubscribe:()=>{e=[]}}},_e=e=>C(e)||!er(e);function ee(e,s){if(_e(e)||_e(s))return e===s;if(ne(e)&&ne(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const l of t){const o=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const g=s[l];if(ne(o)&&ne(g)||E(o)&&E(g)||Array.isArray(o)&&Array.isArray(g)?!ee(o,g):o!==g)return!1}}return!0}var ir=e=>e.type==="select-multiple",Kr=e=>Re(e)||de(e),Se=e=>pe(e)&&e.isConnected,nr=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function me(e,s={}){const t=Array.isArray(e);if(E(e)||t)for(const a in e)Array.isArray(e[a])||E(e[a])&&!nr(e[a])?(s[a]=Array.isArray(e[a])?[]:{},me(e[a],s[a])):C(e[a])||(s[a]=!0);return s}function ar(e,s,t){const a=Array.isArray(e);if(E(e)||a)for(const l in e)Array.isArray(e[l])||E(e[l])&&!nr(e[l])?w(s)||_e(t[l])?t[l]=Array.isArray(e[l])?me(e[l],[]):{...me(e[l])}:ar(e[l],C(s)?{}:s[l],t[l]):t[l]=!ee(e[l],s[l]);return t}var xe=(e,s)=>ar(e,s,me(s)),or=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&P(e)?new Date(e):a?a(e):e;function Ce(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Oe(s)?s.files:Re(s)?sr(e.refs).value:ir(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?tr(e.refs).value:or(w(s.value)?e.ref.value:s.value,e)}var Yr=(e,s,t,a)=>{const l={};for(const o of e){const g=f(s,o);g&&m(l,o,g._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},ue=e=>w(e)?e:be(e)?e.source:E(e)?be(e.value)?e.value.source:e.value:e,Jr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,s,t){const a=f(e,t);if(a||Le(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const o=l.join("."),g=f(s,o),h=f(e,o);if(g&&!Array.isArray(g)&&t!==o)return{name:t};if(h&&h.type)return{name:o,error:h};l.pop()}return{name:t}}var Qr=(e,s,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,Zr=(e,s)=>!fe(f(e,s)).length&&D(e,s);const et={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function rt(e={}){let s={...et,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},l=E(s.defaultValues)||E(s.values)?z(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:z(l),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},N,j=0;const k={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},ye=qe(s.mode),G=qe(s.reValidateMode),L=s.criteriaMode===H.all,we=r=>i=>{clearTimeout(j),j=setTimeout(r,i)},K=async r=>{if(k.isValid||r){const i=s.resolver?B((await Z()).errors):await U(a,!0);i!==t.isValid&&v.state.next({isValid:i})}},Y=(r,i)=>{(k.isValidating||k.validatingFields)&&((r||Array.from(h.mount)).forEach(n=>{n&&(i?m(t.validatingFields,n,i):D(t.validatingFields,n))}),v.state.next({validatingFields:t.validatingFields,isValidating:!B(t.validatingFields)}))},p=(r,i=[],n,d,c=!0,u=!0)=>{if(d&&n){if(g.action=!0,u&&Array.isArray(f(a,r))){const y=n(f(a,r),d.argA,d.argB);c&&m(a,r,y)}if(u&&Array.isArray(f(t.errors,r))){const y=n(f(t.errors,r),d.argA,d.argB);c&&m(t.errors,r,y),Zr(t.errors,r)}if(k.touchedFields&&u&&Array.isArray(f(t.touchedFields,r))){const y=n(f(t.touchedFields,r),d.argA,d.argB);c&&m(t.touchedFields,r,y)}k.dirtyFields&&(t.dirtyFields=xe(l,o)),v.state.next({name:r,isDirty:x(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else m(o,r,i)},W=(r,i)=>{m(t.errors,r,i),v.state.next({errors:t.errors})},q=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},A=(r,i,n,d)=>{const c=f(a,r);if(c){const u=f(o,r,w(n)?f(l,r):n);w(u)||d&&d.defaultChecked||i?m(o,r,i?u:Ce(c._f)):S(r,u),g.mount&&K()}},re=(r,i,n,d,c)=>{let u=!1,y=!1;const _={name:r},V=!!(f(a,r)&&f(a,r)._f.disabled);if(!n||d){k.isDirty&&(y=t.isDirty,t.isDirty=_.isDirty=x(),u=y!==_.isDirty);const O=V||ee(f(l,r),i);y=!!(!V&&f(t.dirtyFields,r)),O||V?D(t.dirtyFields,r):m(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,u=u||k.dirtyFields&&y!==!O}if(n){const O=f(t.touchedFields,r);O||(m(t.touchedFields,r,n),_.touchedFields=t.touchedFields,u=u||k.touchedFields&&O!==n)}return u&&c&&v.state.next(_),u?_:{}},ge=(r,i,n,d)=>{const c=f(t.errors,r),u=k.isValid&&J(i)&&t.isValid!==i;if(e.delayError&&n?(N=we(()=>W(r,n)),N(e.delayError)):(clearTimeout(j),N=null,n?m(t.errors,r,n):D(t.errors,r)),(n?!ee(c,n):c)||!B(d)||u){const y={...d,...u&&J(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},v.state.next(y)}},Z=async r=>{Y(r,!0);const i=await s.resolver(o,s.context,Yr(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return Y(r),i},te=async r=>{const{errors:i}=await Z(r);if(r)for(const n of r){const d=f(i,n);d?m(t.errors,n,d):D(t.errors,n)}else t.errors=i;return i},U=async(r,i,n={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:u,...y}=c;if(u){const _=h.array.has(u.name);Y([d],!0);const V=await Qe(c,o,L,s.shouldUseNativeValidation&&!i,_);if(Y([d]),V[u.name]&&(n.valid=!1,i))break;!i&&(f(V,u.name)?_?qr(t.errors,V,u.name):m(t.errors,u.name,V[u.name]):D(t.errors,u.name))}y&&await U(y,i,n)}}return n.valid},he=()=>{for(const r of h.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(n=>!Se(n)):!Se(i._f.ref))&&ke(r)}h.unMount=new Set},x=(r,i)=>(r&&i&&m(o,r,i),!ee(Be(),l)),b=(r,i,n)=>Pr(r,h,{...g.mount?o:w(i)?l:P(r)?{[r]:i}:i},n,i),F=r=>fe(f(g.mount?o:l,r,e.shouldUnregister?f(l,r,[]):[])),S=(r,i,n={})=>{const d=f(a,r);let c=i;if(d){const u=d._f;u&&(!u.disabled&&m(o,r,or(i,u)),c=pe(u.ref)&&C(i)?"":i,ir(u.ref)?[...u.ref.options].forEach(y=>y.selected=c.includes(y.value)):u.refs?de(u.ref)?u.refs.length>1?u.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(c)?!!c.find(_=>_===y.value):c===y.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(y=>y.checked=y.value===c):Oe(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||v.values.next({name:r,values:{...o}})))}(n.shouldDirty||n.shouldTouch)&&re(r,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&le(r)},I=(r,i,n)=>{for(const d in i){const c=i[d],u=`${r}.${d}`,y=f(a,u);(h.array.has(r)||!_e(c)||y&&!y._f)&&!ne(c)?I(u,c,n):S(u,c,n)}},$=(r,i,n={})=>{const d=f(a,r),c=h.array.has(r),u=z(i);m(o,r,u),c?(v.array.next({name:r,values:{...o}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&v.state.next({name:r,dirtyFields:xe(l,o),isDirty:x(r,u)})):d&&!d._f&&!C(u)?I(r,u,n):S(r,u,n),Xe(r,h)&&v.state.next({...t}),v.values.next({name:g.mount?r:void 0,values:{...o}})},ae=async r=>{g.mount=!0;const i=r.target;let n=i.name,d=!0;const c=f(a,n),u=()=>i.type?Ce(c._f):$r(r),y=_=>{d=Number.isNaN(_)||_===f(o,n,_)};if(c){let _,V;const O=u(),se=r.type===We.BLUR||r.type===We.FOCUS_OUT,fr=!Jr(c._f)&&!s.resolver&&!f(t.errors,n)&&!c._f.deps||Qr(se,f(t.touchedFields,n),t.isSubmitted,G,ye),Ae=Xe(n,h,se);m(o,n,O),se?(c._f.onBlur&&c._f.onBlur(r),N&&N(0)):c._f.onChange&&c._f.onChange(r);const Fe=re(n,O,se,!1),yr=!B(Fe)||Ae;if(!se&&v.values.next({name:n,type:r.type,values:{...o}}),fr)return k.isValid&&K(),yr&&v.state.next({name:n,...Ae?{}:Fe});if(!se&&Ae&&v.state.next({...t}),s.resolver){const{errors:je}=await Z([n]);if(y(O),d){const gr=Ze(t.errors,a,n),Pe=Ze(je,a,gr.name||n);_=Pe.error,n=Pe.name,V=B(je)}}else Y([n],!0),_=(await Qe(c,o,L,s.shouldUseNativeValidation))[n],Y([n]),y(O),d&&(_?V=!1:k.isValid&&(V=await U(a,!0)));d&&(c._f.deps&&le(c._f.deps),ge(n,V,_,Fe))}},oe=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let n,d;const c=De(r);if(s.resolver){const u=await te(w(r)?r:c);n=B(u),d=r?!c.some(y=>f(u,y)):n}else r?(d=(await Promise.all(c.map(async u=>{const y=f(a,u);return await U(y&&y._f?{[u]:y}:y)}))).every(Boolean),!(!d&&!t.isValid)&&K()):d=n=await U(a);return v.state.next({...!P(r)||k.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!d&&ce(a,oe,r?c:h.mount),d},Be=r=>{const i={...g.mount?o:l};return w(r)?i:P(r)?f(i,r):r.map(n=>f(i,n))},Ue=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),isTouched:!!f((i||t).touchedFields,r),isValidating:!!f((i||t).validatingFields,r),error:f((i||t).errors,r)}),lr=r=>{r&&De(r).forEach(i=>D(t.errors,i)),v.state.next({errors:r?t.errors:{}})},$e=(r,i,n)=>{const d=(f(a,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:u,message:y,type:_,...V}=c;m(t.errors,r,{...V,...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&d&&d.focus&&d.focus()},ur=(r,i)=>Q(r)?v.values.subscribe({next:n=>r(b(void 0,i),n)}):b(r,i,!0),ke=(r,i={})=>{for(const n of r?De(r):h.mount)h.mount.delete(n),h.array.delete(n),i.keepValue||(D(a,n),D(o,n)),!i.keepError&&D(t.errors,n),!i.keepDirty&&D(t.dirtyFields,n),!i.keepTouched&&D(t.touchedFields,n),!i.keepIsValidating&&D(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&D(l,n);v.values.next({values:{...o}}),v.state.next({...t,...i.keepDirty?{isDirty:x()}:{}}),!i.keepIsValid&&K()},ze=({disabled:r,name:i,field:n,fields:d,value:c})=>{if(J(r)&&g.mount||r){const u=r?void 0:w(c)?Ce(n?n._f:f(d,i)._f):c;m(o,i,u),re(i,u,!1,!1,!0)}},Ve=(r,i={})=>{let n=f(a,r);const d=J(i.disabled);return m(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),n?ze({field:n,disabled:i.disabled,name:r,value:i.value}):A(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:c=>{if(c){Ve(r,i),n=f(a,r);const u=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,y=Kr(u),_=n._f.refs||[];if(y?_.find(V=>V===u):u===n._f.ref)return;m(a,r,{_f:{...n._f,...y?{refs:[..._.filter(Se),u,...Array.isArray(f(l,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),A(r,!1,void 0,u)}else n=f(a,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Mr(h.array,r)&&g.action)&&h.unMount.add(r)}}},Me=()=>s.shouldFocusError&&ce(a,oe,h.mount),cr=r=>{J(r)&&(v.state.next({disabled:r}),ce(a,(i,n)=>{const d=f(a,n);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},Ne=(r,i)=>async n=>{let d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=z(o);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:y}=await Z();t.errors=u,c=y}else await U(a);if(D(t.errors,"root"),B(t.errors)){v.state.next({errors:{}});try{await r(c,n)}catch(u){d=u}}else i&&await i({...t.errors},n),Me(),setTimeout(Me);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},dr=(r,i={})=>{f(a,r)&&(w(i.defaultValue)?$(r,z(f(l,r))):($(r,i.defaultValue),m(l,r,z(i.defaultValue))),i.keepTouched||D(t.touchedFields,r),i.keepDirty||(D(t.dirtyFields,r),t.isDirty=i.defaultValue?x(r,z(f(l,r))):x()),i.keepError||(D(t.errors,r),k.isValid&&K()),v.state.next({...t}))},Ie=(r,i={})=>{const n=r?z(r):l,d=z(n),c=B(r),u=c?l:d;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)f(t.dirtyFields,y)?m(u,y,f(o,y)):$(y,f(u,y));else{if(Te&&w(r))for(const y of h.mount){const _=f(a,y);if(_&&_._f){const V=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(pe(V)){const O=V.closest("form");if(O){O.reset();break}}}}a={}}o=e.shouldUnregister?i.keepDefaultValues?z(l):{}:z(u),v.array.next({values:{...u}}),v.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!k.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ee(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&o?xe(l,o):t.dirtyFields:i.keepDefaultValues&&r?xe(l,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},He=(r,i)=>Ie(Q(r)?r(o):r,i);return{control:{register:Ve,unregister:ke,getFieldState:Ue,handleSubmit:Ne,setError:$e,_executeSchema:Z,_getWatch:b,_getDirty:x,_updateValid:K,_removeUnmounted:he,_updateFieldArray:p,_updateDisabledField:ze,_getFieldArray:F,_reset:Ie,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{He(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:cr,_subjects:v,_proxyFormState:k,_setErrors:q,get _fields(){return a},get _formValues(){return o},get _state(){return g},set _state(r){g=r},get _defaultValues(){return l},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:Ve,handleSubmit:Ne,watch:ur,setValue:$,getValues:Be,reset:He,resetField:dr,clearErrors:lr,unregister:ke,setError:$e,setFocus:(r,i={})=>{const n=f(a,r),d=n&&n._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ue}}function ct(e={}){const s=M.useRef(),t=M.useRef(),[a,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...rt(e),formState:a});const o=s.current.control;return o._options=e,jr({subject:o._subjects.state,next:g=>{Hr(g,o._proxyFormState,o._updateFormState,!0)&&l({...o._formState})}}),M.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),M.useEffect(()=>{if(o._proxyFormState.isDirty){const g=o._getDirty();g!==a.isDirty&&o._subjects.state.next({isDirty:g})}},[o,a.isDirty]),M.useEffect(()=>{e.values&&!ee(e.values,t.current)?(o._reset(e.values,o._options.resetOptions),t.current=e.values,l(g=>({...g}))):o._resetDefaultValues()},[e.values,o]),M.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),M.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=Ir(a,o),s.current}export{at as H,lt as I,ot as S,ut as a,ct as u};
