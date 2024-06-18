import{u as j,j as p,a as He,N as Vt,R as N,b as Ft,r as At,I as ne,l as Dt}from"./index-qnBWPORg.js";import{S as kt,H as Et,I as St,a as Lt}from"./HeroCard-GYyvLwx3.js";const Tt="/petlove/images/🐶avatar_dog.png",jt="/petlove/images/🐶avatar_dog_x2.png",Ct=j.h1`
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
`,Rt=({text:e,color:s})=>p.jsx(Ct,{color:s,children:e}),Ot=j.div`
    padding: 55px 20px;

    width: 335px;
    border-radius: 30px;

    background: ${e=>e.theme.colors.secondBackground};

    @media only screen and (min-width: 768px) {
        padding: 71px 140px;

        width: 704px;
    }
`,It=j.div`
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
`,$t=j.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        gap: 16px;

        margin-bottom: 54px;
    }
`,Ge=j.input`
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

    ${({$isinvalid:e})=>e&&He`
            border-color: ${s=>s.theme.colors.red};
        `}

    ${({$isvalid:e})=>e&&He`
            border-color: ${s=>s.theme.colors.green};
        `}

        @media only screen and (min-width: 768px) {
        padding: 16px;

        font-size: 16px;
        line-height: 1.25;
    }
`,Ye=j.div`
    position: relative;
    width: 100%;
`,Ke=j.div`
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
`,Ze=j.div`
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
`,Mt=j.div`
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
`,Je=j.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.red};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Qe=j.p`
    margin-left: 12px;
    margin-bottom: -10px;

    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.green};

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }
`,Ut=j.button`
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
`,Pt=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Nt=j.p`
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.03em;
    color: ${e=>e.theme.colors.lightGrey};

    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.43;
    }
`,Bt=j(Vt)`
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.yellow};
`;var he=e=>e.type==="checkbox",le=e=>e instanceof Date,T=e=>e==null;const ot=e=>typeof e=="object";var S=e=>!T(e)&&!Array.isArray(e)&&ot(e)&&!le(e),qt=e=>S(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,Wt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zt=(e,s)=>e.has(Wt(s)),Ht=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},je=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function P(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(je&&(e instanceof Blob||e instanceof FileList))&&(r||S(e)))if(s=r?[]:{},!r&&!Ht(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=P(e[a]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,h=(e,s,r)=>{if(!s||!S(e))return r;const a=ge(s.split(/[,[\].]+?/)).reduce((u,l)=>T(u)?u:u[l],e);return F(a)||a===e?F(e[s])?r:e[s]:a},J=e=>typeof e=="boolean",Ce=e=>/^\w*$/.test(e),ut=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_=(e,s,r)=>{let a=-1;const u=Ce(s)?[s]:ut(s),l=u.length,o=l-1;for(;++a<l;){const y=u[a];let C=r;if(a!==o){const $=e[y];C=S($)||Array.isArray($)?$:isNaN(+u[a+1])?{}:[]}if(y==="__proto__")return;e[y]=C,e=e[y]}return e};const Xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};N.createContext(null);var Gt=(e,s,r,a=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const o=l;return s._proxyFormState[o]!==q.all&&(s._proxyFormState[o]=!a||q.all),r&&(r[o]=!0),e[o]}});return u},I=e=>S(e)&&!Object.keys(e).length,Yt=(e,s,r,a)=>{r(e);const{name:u,...l}=e;return I(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(o=>s[o]===(!a||q.all))},Ee=e=>Array.isArray(e)?e:[e];function Kt(e){const s=N.useRef(e);s.current=e,N.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Zt=(e,s,r,a,u)=>W(e)?(a&&s.watch.add(e),h(r,e,u)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),h(r,l))):(a&&(s.watchAll=!0),r),Jt=(e,s,r,a,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},et=e=>({isOnSubmit:!e||e===q.onSubmit,isOnBlur:e===q.onBlur,isOnChange:e===q.onChange,isOnAll:e===q.all,isOnTouch:e===q.onTouched}),tt=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const fe=(e,s,r,a)=>{for(const u of r||Object.keys(e)){const l=h(e,u);if(l){const{_f:o,...y}=l;if(o){if(o.refs&&o.refs[0]&&s(o.refs[0],u)&&!a)break;if(o.ref&&s(o.ref,o.name)&&!a)break;fe(y,s)}else S(y)&&fe(y,s)}}};var Qt=(e,s,r)=>{const a=ge(h(e,r));return _(a,"root",s[r]),_(e,r,a),e},Re=e=>e.type==="file",Q=e=>typeof e=="function",ve=e=>{if(!je)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},pe=e=>W(e),Oe=e=>e.type==="radio",we=e=>e instanceof RegExp;const rt={value:!1,isValid:!1},st={value:!0,isValid:!0};var ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?st:{value:e[0].value,isValid:!0}:st:rt}return rt};const it={isValid:!1,value:null};var dt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,it):it;function nt(e,s,r="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||J(e)&&!e)return{type:r,message:pe(e)?e:"",ref:s}}var ae=e=>S(e)&&!we(e)?e:{value:e,message:""},at=async(e,s,r,a,u)=>{const{ref:l,refs:o,required:y,maxLength:C,minLength:$,min:V,max:x,pattern:te,validate:Y,name:R,valueAsNumber:Ve,mount:K,disabled:Z}=e._f,v=h(s,R);if(!K||Z)return{};const z=o?o[0]:l,H=m=>{a&&z.reportValidity&&(z.setCustomValidity(J(m)?"":m||""),z.reportValidity())},D={},re=Oe(l),ye=he(l),X=re||ye,se=(Ve||Re(l))&&F(l.value)&&F(v)||ve(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,M=Jt.bind(null,R,r,D),xe=(m,w,k,L=G.maxLength,B=G.minLength)=>{const U=m?w:k;D[R]={type:m?L:B,message:U,ref:l,...M(m?L:B,U)}};if(u?!Array.isArray(v)||!v.length:y&&(!X&&(se||T(v))||J(v)&&!v||ye&&!ct(o).isValid||re&&!dt(o).isValid)){const{value:m,message:w}=pe(y)?{value:!!y,message:y}:ae(y);if(m&&(D[R]={type:G.required,message:w,ref:z,...M(G.required,w)},!r))return H(w),D}if(!se&&(!T(V)||!T(x))){let m,w;const k=ae(x),L=ae(V);if(!T(v)&&!isNaN(v)){const B=l.valueAsNumber||v&&+v;T(k.value)||(m=B>k.value),T(L.value)||(w=B<L.value)}else{const B=l.valueAsDate||new Date(v),U=ce=>new Date(new Date().toDateString()+" "+ce),oe=l.type=="time",ue=l.type=="week";W(k.value)&&v&&(m=oe?U(v)>U(k.value):ue?v>k.value:B>new Date(k.value)),W(L.value)&&v&&(w=oe?U(v)<U(L.value):ue?v<L.value:B<new Date(L.value))}if((m||w)&&(xe(!!m,k.message,L.message,G.max,G.min),!r))return H(D[R].message),D}if((C||$)&&!se&&(W(v)||u&&Array.isArray(v))){const m=ae(C),w=ae($),k=!T(m.value)&&v.length>+m.value,L=!T(w.value)&&v.length<+w.value;if((k||L)&&(xe(k,m.message,w.message),!r))return H(D[R].message),D}if(te&&!se&&W(v)){const{value:m,message:w}=ae(te);if(we(m)&&!v.match(m)&&(D[R]={type:G.pattern,message:w,ref:l,...M(G.pattern,w)},!r))return H(w),D}if(Y){if(Q(Y)){const m=await Y(v,s),w=nt(m,z);if(w&&(D[R]={...w,...M(G.validate,w.message)},!r))return H(w.message),D}else if(S(Y)){let m={};for(const w in Y){if(!I(m)&&!r)break;const k=nt(await Y[w](v,s),z,w);k&&(m={...k,...M(w,k.message)},H(k.message),r&&(D[R]=m))}if(!I(m)&&(D[R]={ref:z,...m},!r))return D}}return H(!0),D};function Xt(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=F(e)?a++:e[s[a++]];return e}function er(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Ce(s)?[s]:ut(s),a=r.length===1?e:Xt(e,r),u=r.length-1,l=r[u];return a&&delete a[l],u!==0&&(S(a)&&I(a)||Array.isArray(a)&&er(a))&&E(e,r.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},be=e=>T(e)||!ot(e);function ee(e,s){if(be(e)||be(s))return e===s;if(le(e)&&le(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const u of r){const l=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const o=s[u];if(le(l)&&le(o)||S(l)&&S(o)||Array.isArray(l)&&Array.isArray(o)?!ee(l,o):l!==o)return!1}}return!0}var ft=e=>e.type==="select-multiple",tr=e=>Oe(e)||he(e),Le=e=>ve(e)&&e.isConnected,ht=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(S(e)||r)for(const a in e)Array.isArray(e[a])||S(e[a])&&!ht(e[a])?(s[a]=Array.isArray(e[a])?[]:{},_e(e[a],s[a])):T(e[a])||(s[a]=!0);return s}function gt(e,s,r){const a=Array.isArray(e);if(S(e)||a)for(const u in e)Array.isArray(e[u])||S(e[u])&&!ht(e[u])?F(s)||be(r[u])?r[u]=Array.isArray(e[u])?_e(e[u],[]):{..._e(e[u])}:gt(e[u],T(s)?{}:s[u],r[u]):r[u]=!ee(e[u],s[u]);return r}var me=(e,s)=>gt(e,s,_e(s)),yt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>F(e)?e:s?e===""?NaN:e&&+e:r&&W(e)?new Date(e):a?a(e):e;function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Re(s)?s.files:Oe(s)?dt(e.refs).value:ft(s)?[...s.selectedOptions].map(({value:r})=>r):he(s)?ct(e.refs).value:yt(F(s.value)?e.ref.value:s.value,e)}var rr=(e,s,r,a)=>{const u={};for(const l of e){const o=h(s,l);o&&_(u,l,o._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},de=e=>F(e)?e:we(e)?e.source:S(e)?we(e.value)?e.value.source:e.value:e,sr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function lt(e,s,r){const a=h(e,r);if(a||Ce(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),o=h(s,l),y=h(e,l);if(o&&!Array.isArray(o)&&r!==l)return{name:r};if(y&&y.type)return{name:l,error:y};u.pop()}return{name:r}}var ir=(e,s,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,nr=(e,s)=>!ge(h(e,s)).length&&E(e,s);const ar={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function lr(e={}){let s={...ar,...e},r={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=S(s.defaultValues)||S(s.values)?P(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:P(u),o={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},C,$=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Se(),array:Se(),state:Se()},te=et(s.mode),Y=et(s.reValidateMode),R=s.criteriaMode===q.all,Ve=t=>i=>{clearTimeout($),$=setTimeout(t,i)},K=async t=>{if(V.isValid||t){const i=s.resolver?I((await X()).errors):await M(a,!0);i!==r.isValid&&x.state.next({isValid:i})}},Z=(t,i)=>{(V.isValidating||V.validatingFields)&&((t||Array.from(y.mount)).forEach(n=>{n&&(i?_(r.validatingFields,n,i):E(r.validatingFields,n))}),x.state.next({validatingFields:r.validatingFields,isValidating:!I(r.validatingFields)}))},v=(t,i=[],n,f,d=!0,c=!0)=>{if(f&&n){if(o.action=!0,c&&Array.isArray(h(a,t))){const g=n(h(a,t),f.argA,f.argB);d&&_(a,t,g)}if(c&&Array.isArray(h(r.errors,t))){const g=n(h(r.errors,t),f.argA,f.argB);d&&_(r.errors,t,g),nr(r.errors,t)}if(V.touchedFields&&c&&Array.isArray(h(r.touchedFields,t))){const g=n(h(r.touchedFields,t),f.argA,f.argB);d&&_(r.touchedFields,t,g)}V.dirtyFields&&(r.dirtyFields=me(u,l)),x.state.next({name:t,isDirty:m(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _(l,t,i)},z=(t,i)=>{_(r.errors,t,i),x.state.next({errors:r.errors})},H=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},D=(t,i,n,f)=>{const d=h(a,t);if(d){const c=h(l,t,F(n)?h(u,t):n);F(c)||f&&f.defaultChecked||i?_(l,t,i?c:Te(d._f)):L(t,c),o.mount&&K()}},re=(t,i,n,f,d)=>{let c=!1,g=!1;const b={name:t},A=!!(h(a,t)&&h(a,t)._f.disabled);if(!n||f){V.isDirty&&(g=r.isDirty,r.isDirty=b.isDirty=m(),c=g!==b.isDirty);const O=A||ee(h(u,t),i);g=!!(!A&&h(r.dirtyFields,t)),O||A?E(r.dirtyFields,t):_(r.dirtyFields,t,!0),b.dirtyFields=r.dirtyFields,c=c||V.dirtyFields&&g!==!O}if(n){const O=h(r.touchedFields,t);O||(_(r.touchedFields,t,n),b.touchedFields=r.touchedFields,c=c||V.touchedFields&&O!==n)}return c&&d&&x.state.next(b),c?b:{}},ye=(t,i,n,f)=>{const d=h(r.errors,t),c=V.isValid&&J(i)&&r.isValid!==i;if(e.delayError&&n?(C=Ve(()=>z(t,n)),C(e.delayError)):(clearTimeout($),C=null,n?_(r.errors,t,n):E(r.errors,t)),(n?!ee(d,n):d)||!I(f)||c){const g={...f,...c&&J(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},x.state.next(g)}},X=async t=>{Z(t,!0);const i=await s.resolver(l,s.context,rr(t||y.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return Z(t),i},se=async t=>{const{errors:i}=await X(t);if(t)for(const n of t){const f=h(i,n);f?_(r.errors,n,f):E(r.errors,n)}else r.errors=i;return i},M=async(t,i,n={valid:!0})=>{for(const f in t){const d=t[f];if(d){const{_f:c,...g}=d;if(c){const b=y.array.has(c.name);Z([f],!0);const A=await at(d,l,R,s.shouldUseNativeValidation&&!i,b);if(Z([f]),A[c.name]&&(n.valid=!1,i))break;!i&&(h(A,c.name)?b?Qt(r.errors,A,c.name):_(r.errors,c.name,A[c.name]):E(r.errors,c.name))}g&&await M(g,i,n)}}return n.valid},xe=()=>{for(const t of y.unMount){const i=h(a,t);i&&(i._f.refs?i._f.refs.every(n=>!Le(n)):!Le(i._f.ref))&&Fe(t)}y.unMount=new Set},m=(t,i)=>(t&&i&&_(l,t,i),!ee(Ie(),u)),w=(t,i,n)=>Zt(t,y,{...o.mount?l:F(i)?u:W(t)?{[t]:i}:i},n,i),k=t=>ge(h(o.mount?l:u,t,e.shouldUnregister?h(u,t,[]):[])),L=(t,i,n={})=>{const f=h(a,t);let d=i;if(f){const c=f._f;c&&(!c.disabled&&_(l,t,yt(i,c)),d=ve(c.ref)&&T(i)?"":i,ft(c.ref)?[...c.ref.options].forEach(g=>g.selected=d.includes(g.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(b=>b===g.value):d===g.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(g=>g.checked=g.value===d):Re(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||x.values.next({name:t,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&re(t,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ce(t)},B=(t,i,n)=>{for(const f in i){const d=i[f],c=`${t}.${f}`,g=h(a,c);(y.array.has(t)||!be(d)||g&&!g._f)&&!le(d)?B(c,d,n):L(c,d,n)}},U=(t,i,n={})=>{const f=h(a,t),d=y.array.has(t),c=P(i);_(l,t,c),d?(x.array.next({name:t,values:{...l}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&x.state.next({name:t,dirtyFields:me(u,l),isDirty:m(t,c)})):f&&!f._f&&!T(c)?B(t,c,n):L(t,c,n),tt(t,y)&&x.state.next({...r}),x.values.next({name:o.mount?t:void 0,values:{...l}})},oe=async t=>{o.mount=!0;const i=t.target;let n=i.name,f=!0;const d=h(a,n),c=()=>i.type?Te(d._f):qt(t),g=b=>{f=Number.isNaN(b)||b===h(l,n,b)};if(d){let b,A;const O=c(),ie=t.type===Xe.BLUR||t.type===Xe.FOCUS_OUT,wt=!sr(d._f)&&!s.resolver&&!h(r.errors,n)&&!d._f.deps||ir(ie,h(r.touchedFields,n),r.isSubmitted,Y,te),De=tt(n,y,ie);_(l,n,O),ie?(d._f.onBlur&&d._f.onBlur(t),C&&C(0)):d._f.onChange&&d._f.onChange(t);const ke=re(n,O,ie,!1),bt=!I(ke)||De;if(!ie&&x.values.next({name:n,type:t.type,values:{...l}}),wt)return V.isValid&&K(),bt&&x.state.next({name:n,...De?{}:ke});if(!ie&&De&&x.state.next({...r}),s.resolver){const{errors:We}=await X([n]);if(g(O),f){const _t=lt(r.errors,a,n),ze=lt(We,a,_t.name||n);b=ze.error,n=ze.name,A=I(We)}}else Z([n],!0),b=(await at(d,l,R,s.shouldUseNativeValidation))[n],Z([n]),g(O),f&&(b?A=!1:V.isValid&&(A=await M(a,!0)));f&&(d._f.deps&&ce(d._f.deps),ye(n,A,b,ke))}},ue=(t,i)=>{if(h(r.errors,i)&&t.focus)return t.focus(),1},ce=async(t,i={})=>{let n,f;const d=Ee(t);if(s.resolver){const c=await se(F(t)?t:d);n=I(c),f=t?!d.some(g=>h(c,g)):n}else t?(f=(await Promise.all(d.map(async c=>{const g=h(a,c);return await M(g&&g._f?{[c]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&K()):f=n=await M(a);return x.state.next({...!W(t)||V.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!f&&fe(a,ue,t?d:y.mount),f},Ie=t=>{const i={...o.mount?l:u};return F(t)?i:W(t)?h(i,t):t.map(n=>h(i,n))},$e=(t,i)=>({invalid:!!h((i||r).errors,t),isDirty:!!h((i||r).dirtyFields,t),isTouched:!!h((i||r).touchedFields,t),isValidating:!!h((i||r).validatingFields,t),error:h((i||r).errors,t)}),xt=t=>{t&&Ee(t).forEach(i=>E(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Me=(t,i,n)=>{const f=(h(a,t,{_f:{}})._f||{}).ref,d=h(r.errors,t)||{},{ref:c,message:g,type:b,...A}=d;_(r.errors,t,{...A,...i,ref:f}),x.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},mt=(t,i)=>Q(t)?x.values.subscribe({next:n=>t(w(void 0,i),n)}):w(t,i,!0),Fe=(t,i={})=>{for(const n of t?Ee(t):y.mount)y.mount.delete(n),y.array.delete(n),i.keepValue||(E(a,n),E(l,n)),!i.keepError&&E(r.errors,n),!i.keepDirty&&E(r.dirtyFields,n),!i.keepTouched&&E(r.touchedFields,n),!i.keepIsValidating&&E(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&E(u,n);x.values.next({values:{...l}}),x.state.next({...r,...i.keepDirty?{isDirty:m()}:{}}),!i.keepIsValid&&K()},Ue=({disabled:t,name:i,field:n,fields:f,value:d})=>{if(J(t)&&o.mount||t){const c=t?void 0:F(d)?Te(n?n._f:h(f,i)._f):d;_(l,i,c),re(i,c,!1,!1,!0)}},Ae=(t,i={})=>{let n=h(a,t);const f=J(i.disabled);return _(a,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),y.mount.add(t),n?Ue({field:n,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:de(i.min),max:de(i.max),minLength:de(i.minLength),maxLength:de(i.maxLength),pattern:de(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:d=>{if(d){Ae(t,i),n=h(a,t);const c=F(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=tr(c),b=n._f.refs||[];if(g?b.find(A=>A===c):c===n._f.ref)return;_(a,t,{_f:{...n._f,...g?{refs:[...b.filter(Le),c,...Array.isArray(h(u,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),D(t,!1,void 0,c)}else n=h(a,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(zt(y.array,t)&&o.action)&&y.unMount.add(t)}}},Pe=()=>s.shouldFocusError&&fe(a,ue,y.mount),pt=t=>{J(t)&&(x.state.next({disabled:t}),fe(a,(i,n)=>{const f=h(a,n);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(d=>{d.disabled=f._f.disabled||t}))},0,!1))},Ne=(t,i)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let d=P(l);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:g}=await X();r.errors=c,d=g}else await M(a);if(E(r.errors,"root"),I(r.errors)){x.state.next({errors:{}});try{await t(d,n)}catch(c){f=c}}else i&&await i({...r.errors},n),Pe(),setTimeout(Pe);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},vt=(t,i={})=>{h(a,t)&&(F(i.defaultValue)?U(t,P(h(u,t))):(U(t,i.defaultValue),_(u,t,P(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?m(t,P(h(u,t))):m()),i.keepError||(E(r.errors,t),V.isValid&&K()),x.state.next({...r}))},Be=(t,i={})=>{const n=t?P(t):u,f=P(n),d=I(t),c=d?u:f;if(i.keepDefaultValues||(u=n),!i.keepValues){if(i.keepDirtyValues)for(const g of y.mount)h(r.dirtyFields,g)?_(c,g,h(l,g)):U(g,h(c,g));else{if(je&&F(t))for(const g of y.mount){const b=h(a,g);if(b&&b._f){const A=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(ve(A)){const O=A.closest("form");if(O){O.reset();break}}}}a={}}l=e.shouldUnregister?i.keepDefaultValues?P(u):{}:P(c),x.array.next({values:{...c}}),x.values.next({values:{...c}})}y={mount:i.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,o.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:d?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:i.keepDirtyValues?i.keepDefaultValues&&l?me(u,l):r.dirtyFields:i.keepDefaultValues&&t?me(u,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(t,i)=>Be(Q(t)?t(l):t,i);return{control:{register:Ae,unregister:Fe,getFieldState:$e,handleSubmit:Ne,setError:Me,_executeSchema:X,_getWatch:w,_getDirty:m,_updateValid:K,_removeUnmounted:xe,_updateFieldArray:v,_updateDisabledField:Ue,_getFieldArray:k,_reset:Be,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(t=>{qe(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:pt,_subjects:x,_proxyFormState:V,_setErrors:H,get _fields(){return a},get _formValues(){return l},get _state(){return o},set _state(t){o=t},get _defaultValues(){return u},get _names(){return y},set _names(t){y=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ce,register:Ae,handleSubmit:Ne,watch:mt,setValue:U,getValues:Ie,reset:qe,resetField:vt,clearErrors:xt,unregister:Fe,setError:Me,setFocus:(t,i={})=>{const n=h(a,t),f=n&&n._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},getFieldState:$e}}function or(e={}){const s=N.useRef(),r=N.useRef(),[a,u]=N.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...lr(e),formState:a});const l=s.current.control;return l._options=e,Kt({subject:l._subjects.state,next:o=>{Yt(o,l._proxyFormState,l._updateFormState,!0)&&u({...l._formState})}}),N.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),N.useEffect(()=>{if(l._proxyFormState.isDirty){const o=l._getDirty();o!==a.isDirty&&l._subjects.state.next({isDirty:o})}},[l,a.isDirty]),N.useEffect(()=>{e.values&&!ee(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,u(o=>({...o}))):l._resetDefaultValues()},[e.values,l]),N.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),N.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),N.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Gt(a,l),s.current}const ur=()=>{const e=Ft(),[s,r]=At.useState(!1),{register:a,handleSubmit:u,reset:l,formState:{errors:o,isValid:y}}=or({mode:"onChange",defaultValues:{email:"",password:""}}),C=x=>{const te={email:x.email,password:x.password};e(Dt(te)),console.log("Email:",x.email),console.log("Password:",x.password),l()},$=x=>{x.preventDefault(),u(C)()},V=()=>{r(!s)};return p.jsxs(Ot,{children:[p.jsx(Rt,{text:"Log in"}),p.jsx(It,{children:"Welcome! Please enter your credentials to login to the platform:"}),p.jsxs("form",{onSubmit:$,children:[p.jsxs($t,{children:[p.jsxs(Ye,{children:[p.jsx(Ge,{type:"email",placeholder:"Email",$isinvalid:o.email,$isvalid:!o.email&&y,...a("email",{required:"This field is required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}})}),(o==null?void 0:o.email)&&p.jsx(Je,{children:o==null?void 0:o.email.message}),y&&!(o!=null&&o.email)&&p.jsx(Qe,{isValid:!0,children:"Email successfully validated!"}),(o==null?void 0:o.email)&&p.jsx(Ke,{children:p.jsx(ne,{name:"red-false",width:18,height:18})}),y&&!(o!=null&&o.email)&&p.jsx(Ke,{children:p.jsx(ne,{name:"green-success",width:18,height:18})})]}),p.jsxs(Ye,{children:[p.jsx(Ge,{type:s?"text":"password",placeholder:"Password",autoComplete:"off",$isinvalid:o==null?void 0:o.password,$isvalid:!(o!=null&&o.password)&&y,...a("password",{required:"This field is required",minLength:{value:7,message:"Password must be at least 7 characters"}})}),p.jsx(Mt,{onClick:V,children:s?p.jsx(ne,{name:"open-eye",width:18,height:18}):p.jsx(ne,{name:"close-eye",width:18,height:18})}),(o==null?void 0:o.password)&&p.jsx(Je,{children:o==null?void 0:o.password.message}),y&&!(o!=null&&o.password)&&p.jsx(Qe,{isValid:!0,children:"Password is secure"}),(o==null?void 0:o.password)&&p.jsx(Ze,{children:p.jsx(ne,{name:"red-false",width:18,height:18})}),y&&!(o!=null&&o.password)&&p.jsx(Ze,{children:p.jsx(ne,{name:"green-success",width:18,height:18})})]})]}),p.jsx(Ut,{type:"submit",id:"loginBtn",children:"Log in"}),p.jsx(Pt,{children:p.jsxs(Nt,{children:["Don’t have an account?"," ",p.jsxs(Bt,{to:"/registration",children:[" ","Register"]})]})})]})]})},yr=()=>p.jsxs(kt,{children:[p.jsxs(Et,{children:[p.jsx(St,{}),p.jsx(Lt,{avatarSrc:Tt,avatarSrc2x:jt,title:"Rich",birthDate:"21.09.2020",description:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"})]}),p.jsx(ur,{})]});export{yr as default};
