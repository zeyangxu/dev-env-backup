var T=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var Y=t=>T(t,"__esModule",{value:!0});var Z=(t,n)=>{for(var o in n)T(t,o,{get:n[o],enumerable:!0})},tt=(t,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of X(n))!J.call(t,e)&&(o||e!=="default")&&T(t,e,{get:()=>n[e],enumerable:!(s=z(n,e))||s.enumerable});return t};var et=(t=>(n,o)=>t&&t.get(n)||(o=tt(Y({}),n,1),t&&t.set(n,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var ot={};Z(ot,{default:()=>q});var r=require("@raycast/api"),V=require("react");var f=require("@raycast/api");function U(t){return _jsx(f.ActionPanel.Submenu,{title:"Copy Commands",icon:f.Icon.Clipboard},_jsx(f.Action.CopyToClipboard,{content:`sudo kill -9 ${t.process.pid}`,title:"Kill",icon:""}),_jsx(f.Action.CopyToClipboard,{content:`sudo killall -9 ${t.process.name?.replace(" "," ")}`,title:"Kill All",icon:""}))}var l=require("@raycast/api");function L(t){return _jsx(l.ActionPanel.Submenu,{title:"Copy Info",icon:l.Icon.Clipboard,shortcut:{modifiers:["cmd","opt"],key:"i"}},_jsx(l.Action.CopyToClipboard,{content:t.process.pid,title:"PID"}),t.process.path!==void 0&&_jsx(l.Action.CopyToClipboard,{content:t.process.path,title:"Path"}),t.process.name?_jsx(l.Action.CopyToClipboard,{content:t.process.name,title:"Name"}):null,t.process.parentPid?_jsx(l.Action.CopyToClipboard,{content:t.process.parentPid,title:"Parent PID"}):null,t.process.parentPath!==void 0&&_jsx(l.Action.CopyToClipboard,{content:t.process.parentPath,title:"Parent Path"}),t.process.uid?_jsx(l.Action.CopyToClipboard,{content:t.process.uid,title:"User UID"}):null,t.process.user?_jsx(l.Action.CopyToClipboard,{content:t.process.user,title:"User Name"}):null)}var P=require("@raycast/api");var h=require("@raycast/api");async function u(t,n,o){try{await n(),await(0,h.showToast)({style:h.Toast.Style.Success,title:"Killed Process",message:`${t.name} (${t.pid})`}),o!==void 0&&await o()}catch(s){await(0,h.showToast)({style:h.Toast.Style.Failure,title:`${s.message??s}`})}}var v=require("util"),W=require("child_process"),R=require("@raycast/api"),_=(0,v.promisify)(W.exec);async function y(t,n=15,o=(0,R.getPreferenceValues)().sudo??!1){let s=t instanceof Array?t.join(" "):t,e=`${o?"/usr/bin/sudo /bin/kill":"kill"} -${n} ${s}`,{stderr:a}=await _(e);if(a)throw new Error(a)}async function x(t,n=15,o=(0,R.getPreferenceValues)().sudo??!1){let s=t instanceof Array?t.map(p=>`'${p}'`).join(" "):`'${t}'`,e=`${o?"/usr/bin/sudo ":""}/usr/bin/killall -${n} ${s}`,{stderr:a}=await _(e);if(a)throw new Error(a)}function D(t){return _jsx(P.ActionPanel.Submenu,{title:"Kill",icon:P.Icon.ExclamationMark},_jsx(P.Action,{title:"With SIGTERM",onAction:async()=>await u(t.process,async()=>await y(t.process.pid),t.reloadCallback)}),_jsx(P.Action,{title:"With SIGKILL",onAction:async()=>await u(t.process,async()=>await y(t.process.pid,9),t.reloadCallback)}))}var I=require("@raycast/api");function g(t){return _jsx(I.ActionPanel.Submenu,{title:"Killall",icon:I.Icon.XmarkCircle},_jsx(I.Action,{title:"With SIGTERM",onAction:async()=>await u(t.process,async()=>await x(t.process.name??""),t.reloadCallback)}),_jsx(I.Action,{title:"With SIGKILL",onAction:async()=>await u(t.process,async()=>await x(t.process.name??"",9),t.reloadCallback)}))}var m=require("@raycast/api");var k={title:"CHANGE ME",message:"Killing some processes might crash apps or even your system",primaryAction:{title:"Kill"},dismissAction:{title:"Cancel"}};function $(t){return _jsx(m.ActionPanel.Submenu,{title:"Kill Parent",icon:m.Icon.ExclamationMark,shortcut:{modifiers:["cmd"],key:"p"}},_jsx(m.Action,{title:"With SIGTERM",onAction:async()=>{if(k.title=`Kill Process ${t.process.parentPid}?`,await(0,m.confirmAlert)(k))await u(t.process,async()=>await y(t.process.parentPid),t.reloadCallback);else return}}),_jsx(m.Action,{title:"With SIGKILL",onAction:async()=>{if(k.title=`Kill Process ${t.process.parentPid}?`,await(0,m.confirmAlert)(k))await u(t.process,async()=>await y(t.process.parentPid,9),t.reloadCallback);else return}}))}var b=require("@raycast/api");function G(t){return _jsx(b.ActionPanel.Submenu,{title:"Show In Finder",icon:b.Icon.Finder,shortcut:{modifiers:["cmd"],key:"f"}},t.process.path!==void 0&&_jsx(b.Action.ShowInFinder,{path:t.process.path,title:"Executable"}),t.process.parentPath!==void 0&&_jsx(b.Action.ShowInFinder,{path:t.process.parentPath,title:"Parent Executable"}))}var A=require("react");var H=require("util");var j="https://www.raycast.com/lucaschultz/port-manager";var Q=require("child_process");function O(t){return!Number.isNaN(Number(t))}var d=require("@raycast/api"),B=(0,H.promisify)(Q.exec),w=class{constructor(n,o,s,e,a,p,K,i){this.pid=n;this.name=o;this.parentPid=s;this.user=e;this.uid=a;this.protocol=p;this.portInfo=K;this.internetProtocol=i}async getProcessPath(n,o){let s=`${o?"/usr/bin/sudo ":""}/bin/ps -p ${n} -o comm=`,{stdout:e,stderr:a}=await B(s);if(a)throw new Error(a);return e.replace(`
`,"")}async loadPath(){this.path=await this.getProcessPath(this.pid,w.useSudo)}async loadParentPath(){this.parentPid!==void 0&&(this.parentPath=await this.getProcessPath(this.parentPid,w.useSudo))}static async getCurrent(){let n=`${w.useSudo?"/usr/bin/sudo ":""}/usr/sbin/lsof +c0 -iTCP -sTCP:LISTEN -P -FpcRuLPn`;try{let{stdout:o,stderr:s}=await B(n);if(s)throw new Error(s);let e=o.split(`
p`),a=[];for(let p of e){if(p.length===0)continue;let K=p.split(`
`),i={pid:0};for(let M of K){if(M.length===0)continue;let E=M[0],c=M.slice(1);if(c.length!==0)switch(E){case"p":i.pid=Number(c);break;case"c":i.name=c;break;case"R":i.parentPid=Number(c);break;case"L":i.user=c;break;case"u":i.uid=Number(c);break;case"P":i.protocol=c;break;case"n":i.portInfo?i.portInfo.push({host:c.split(":")[0],port:Number(c.split(":")[1])}):i.portInfo=[{host:c.split(":")[0],port:Number(c.split(":")[1])}];break;case"t":i.internetProtocol=c;break;default:O(E)&&(i.pid=Number(`${E}${c}`));break}}let S=new w(i.pid,i.name,i.parentPid,i.user,i.uid,i.protocol,i.portInfo);await S.loadPath(),await S.loadParentPath(),a.push(S)}return a}catch(o){throw o instanceof Error&&o.message.includes("sudo: a terminal is required to read the password")&&(await(0,d.confirmAlert)({title:"Can't Use Sudo",message:"It seems your user can't use sudo without a password. Please turn off using sudo in the extension preferences or change your sudo configuration.",primaryAction:{title:"Learn More"},dismissAction:{title:"Close Raycast"}})?(await(0,d.open)(j),await(0,d.closeMainWindow)()):await(0,d.closeMainWindow)()),o}}},C=w;C.useSudo=(0,d.getPreferenceValues)().sudo??!1;function N(){let[t,n]=(0,A.useState)([]),o=(0,A.useCallback)(async()=>n(await C.getCurrent()),[n]);return(0,A.useEffect)(()=>{(async()=>o())()},[]),[t,o]}function q(){let[t,n]=N(),[o,s]=(0,V.useState)(!1);return _jsx(r.List,{isShowingDetail:o,isLoading:t.length===0,navigationTitle:"Kill Port",searchBarPlaceholder:"Search Open Ports"},t.map(e=>_jsx(r.List.Item,{key:e.pid,title:e.name??"Untitled Process",subtitle:o?"":e.user??"",keywords:e.portInfo?.map(a=>`${a.port}`).concat(e.portInfo?.map(a=>`${a.host}`)),detail:_jsx(r.List.Item.Detail,{metadata:_jsx(r.List.Item.Detail.Metadata,null,_jsx(r.List.Item.Detail.Metadata.Label,{key:1,title:"Info"}),_jsx(r.List.Item.Detail.Metadata.Separator,{key:2}),_jsx(r.List.Item.Detail.Metadata.Label,{key:3,title:"Name",text:e.name}),_jsx(r.List.Item.Detail.Metadata.Label,{key:4,title:"User",text:`${e.user} (${e.uid})`}),_jsx(r.List.Item.Detail.Metadata.Label,{key:5,title:"PID",text:`${e.pid}`}),e.path!==void 0&&_jsx(r.List.Item.Detail.Metadata.Label,{key:6,title:"Path",text:e.path}),_jsx(r.List.Item.Detail.Metadata.Label,{key:7,title:"Parent PID",text:`${e.parentPid}`}),e.parentPath!==void 0&&_jsx(r.List.Item.Detail.Metadata.Label,{key:8,title:"Parent Path",text:e.parentPath}),_jsx(r.List.Item.Detail.Metadata.Label,{key:9,title:"Protocol",text:`${e.protocol}`}),_jsx(r.List.Item.Detail.Metadata.Label,{key:10,title:""}),_jsx(r.List.Item.Detail.Metadata.Label,{key:11,title:"Ports"}),_jsx(r.List.Item.Detail.Metadata.Separator,{key:12}),e.portInfo?.map((a,p)=>_jsx(r.List.Item.Detail.Metadata.Label,{key:13+p,title:a.host,text:`${a.port}`})))}),actions:_jsx(r.ActionPanel,null,_jsx(D,{process:e,reloadCallback:n}),_jsx(g,{process:e,reloadCallback:n}),e.parentPid!==void 0&&e.parentPid!==1&&_jsx($,{process:e,reloadCallback:n}),_jsx(r.Action,{title:"Show Info",icon:r.Icon.QuestionMark,shortcut:{modifiers:["cmd"],key:"i"},onAction:()=>s(!o)}),_jsx(G,{process:e}),_jsx(L,{process:e}),_jsx(U,{process:e}),_jsx(r.Action,{title:"Reload",onAction:n,icon:r.Icon.ArrowClockwise})),accessories:o?[]:[{text:[...new Set(e.portInfo?.map(a=>`${a.port}`))].join(", ")}]})))}module.exports=et(ot);0&&(module.exports={});