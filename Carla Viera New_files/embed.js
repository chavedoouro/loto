(function(g){var window=this;var g3=function(a,b){g.of(a.i,8*b+2);var c=a.i.end();a.u.push(c);a.l+=c.length;c.push(a.l);return c},h3=function(a,b){var c=b.pop();
for(c=a.l+a.i.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.l++;b.push(c);a.l++},dHa=function(a,b,c){null!=c&&(g.of(a.i,8*b+1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.zf=b,g.Af=c,g.pf(a,g.zf),g.pf(a,g.Af))},i3=function(a,b,c){null!=c&&(g.of(a.i,8*b),a.i.i.push(c?1:0))},j3=function(a,b,c){if(null!=c){b=g3(a,b);
for(var d=a.i,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.i.push(f);else if(2048>f)d.i.push(f>>6|192),d.i.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.i.push(f>>18|240),d.i.push(f>>12&63|128),d.i.push(f>>6&63|128),d.i.push(f&63|128),e++)}else d.i.push(f>>12|224),d.i.push(f>>6&63|128),d.i.push(f&63|128)}h3(a,b)}},k3=function(a,b,c,d){null!=c&&(b=g3(a,b),d(c,a),h3(a,b))},l3=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=g3(a,b);
d(c[e],a);h3(a,f)}},eHa=function(a,b){var c=(b-a.i)/(a.l-a.i);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Dn(a,c);var l=(g.Dn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Dn(a,c);return c},m3=function(a,b,c){a.i||(a.i={});
if(!a.i[c]){var d=g.Jf(a,c);d&&(a.i[c]=new b(d))}return a.i[c]},fHa=function(a,b,c){a.i||(a.i={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=g.Of(c[e]);a.i[b]=c;g.Lf(a,b,d)},n3=function(a,b,c,d){(c=g.Hf(a,c))&&c!==b&&void 0!==d&&(a.i&&c in a.i&&(a.i[c]=void 0),g.Lf(a,c,void 0));
g.Lf(a,b,d)},o3=function(){return{D:"svg",
U:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},S:[{D:"path",wb:!0,K:"ytp-svg-fill",U:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
gHa=function(a){this.HC=a},p3=function(a,b,c){this.l=a;
this.B=b;this.i=c||[];this.po=new Map},q3=function(a,b){p3.call(this,a,3,b)},iHa=function(){this.I=new hHa;
this.l=new Map;this.C=new Set;this.u=0;this.B=100;this.flushInterval=3E4;this.i=new g.Lm(this.flushInterval);this.i.za("tick",this.SG,!1,this)},jHa=function(a,b){return a.C.has(b)?void 0:a.l.get(b)},kHa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},lHa=function(){if(!r3){r3=new iHa;
var a=g.Ro("client_streamz_web_flush_count",-1);-1!==a&&(r3.B=a)}this.i=r3;this.i.AK("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",{cL:3,bL:"client_name"})},nHa=function(a){(0,g.If)(this,a,0,-1,mHa,null)},oHa=function(a){(0,g.If)(this,a,0,-1,null,null)},qHa=function(a,b){var c=g.Nf(a,oHa,1);
0<c.length&&l3(b,1,c,pHa)},pHa=function(a,b){var c=g.Jf(a,1);
null!=c&&g.Cf(b,1,c);c=g.Jf(a,2);null!=c&&g.Bf(b,2,c)},sHa=function(a){(0,g.If)(this,a,0,-1,rHa,null)},uHa=function(a){(0,g.If)(this,a,0,-1,null,tHa)},vHa=function(a){(0,g.If)(this,a,0,-1,null,null)},wHa=function(a){(0,g.If)(this,a,0,-1,null,null)},s3=function(a){(0,g.If)(this,a,0,-1,xHa,null)},u3=function(a){(0,g.If)(this,a,0,-1,null,t3)},w3=function(a){(0,g.If)(this,a,0,-1,null,v3)},AHa=function(a,b){var c=m3(a,vHa,1);
null!=c&&k3(b,1,c,yHa);c=m3(a,wHa,2);null!=c&&k3(b,2,c,zHa)},yHa=function(a,b){var c=g.Jf(a,1);
null!=c&&j3(b,1,c);c=g.Jf(a,2);null!=c&&j3(b,2,c);c=g.Jf(a,3);null!=c&&i3(b,3,c)},zHa=function(a,b){var c=g.Jf(a,1);
null!=c&&j3(b,1,c);c=g.Jf(a,2);null!=c&&j3(b,2,c);c=g.Jf(a,3);null!=c&&g.yf(b,3,c);c=g.Jf(a,4);null!=c&&i3(b,4,c)},DHa=function(a,b){var c=g.Nf(a,u3,1);
0<c.length&&l3(b,1,c,BHa);c=m3(a,w3,2);null!=c&&k3(b,2,c,CHa)},BHa=function(a,b){var c=g.Jf(a,1);
null!=c&&j3(b,1,c);c=g.Jf(a,2);null!=c&&g.yf(b,2,c);c=g.Jf(a,3);null!=c&&i3(b,3,c)},CHa=function(a,b){var c=g.Jf(a,1);
null!=c&&g.Bf(b,1,c);c=g.Jf(a,2);null!=c&&g.Cf(b,2,c);c=m3(a,nHa,3);null!=c&&k3(b,3,c,qHa)},hHa=function(){},x3=function(a){g.E.call(this);
this.callback=a;this.u=new g.Cn(0,0,.4,0,.2,1,1,1);this.delay=new g.hn(this.next,window,this);this.startTime=this.duration=this.l=this.i=NaN;g.I(this,this.delay)},y3=function(a){g.X.call(this,{D:"div",
K:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.J=this.l=0;this.I=new g.yN(this);this.B=[];this.i=[];this.C=0;this.title=new g.X({D:"h2",K:"ytp-related-title",ba:"{{title}}"});this.previous=new g.X({D:"button",ka:["ytp-button","ytp-previous"],U:{"aria-label":"Mostrar v\u00eddeos sugeridos anteriores"},S:[g.EL()]});this.Y=new x3(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.L=!0;this.next=new g.X({D:"button",ka:["ytp-button","ytp-next"],U:{"aria-label":"Mostrar mais v\u00eddeos sugeridos"},S:[g.FL()]});g.I(this,this.I);a=a.T();this.X=a.l;g.I(this,this.title);this.title.fa(this.element);this.suggestions=new g.X({D:"div",K:"ytp-suggestions"});g.I(this,this.suggestions);this.suggestions.fa(this.element);g.I(this,this.previous);this.previous.fa(this.element);this.previous.za("click",this.sJ,this);g.I(this,this.Y);for(var c=0;16>c;c++){var d=
new g.X({D:"a",K:"ytp-suggestion-link",U:{href:"{{link}}",target:a.C,"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-suggestion-image",S:[{D:"div",U:{"data-is-live":"{{is_live}}"},K:"ytp-suggestion-duration",ba:"{{duration}}"}]},{D:"div",K:"ytp-suggestion-title",U:{title:"{{hover_title}}"},ba:"{{title}}"},{D:"div",K:"ytp-suggestion-author",ba:"{{views_or_author}}"}]});g.I(this,d);d.fa(this.suggestions.element);var e=d.ha("ytp-suggestion-link");g.sg(e,"transitionDelay",c/20+"s");this.I.N(e,"click",
g.Qa(this.tJ,c));this.B.push(d)}g.I(this,this.next);this.next.fa(this.element);this.next.za("click",this.rJ,this);this.I.N(this.api,"videodatachange",this.Oa);this.resize(this.api.La().getPlayerSize());this.Oa();this.show()},z3=function(a){a.next.element.style.bottom=a.J+"px";
a.previous.element.style.bottom=a.J+"px";var b=a.u,c=a.C-a.i.length*(a.tileWidth+a.l);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},EHa=function(a){for(var b=0;b<a.i.length;b++){var c=b,d=a.i[b].Na();
c=a.B[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.vl();g.SC(a.api.T())&&(f=g.Od(f,g.DO("emb_rel_err")));c.element.style.display="";var h=c.ha("ytp-suggestion-title");g.An.test(d.title)?h.dir="rtl":g.ZCa.test(d.title)&&(h.dir="ltr");h=c.ha("ytp-suggestion-author");g.An.test(e)?h.dir="rtl":g.ZCa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"Ao vivo":d.lengthSeconds?g.fM(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.iq||null,
is_live:d.isLivePlayback});c=c.ha("ytp-suggestion-image");d=d.ze();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";z3(a)},A3=function(a){g.dO.call(this,a);
var b=this,c=a.T();c=new g.X({D:"a",K:"ytp-small-redirect",U:{href:g.ED(c),target:c.C,"aria-label":"Acesse o YouTube para pesquisar mais v\u00eddeos"},S:[{D:"svg",U:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{D:"path",U:{d:"M0 0h24v24H0V0z",fill:"none"}},{D:"path",U:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.fa(this.element);g.I(this,c);this.i=new y3(a);this.i.fa(this.element);g.I(this,this.i);this.N(a,"videodatachange",function(){b.show()});
this.resize(this.api.La().getPlayerSize())},FHa=function(a,b){a.ha("ytp-error-content").style.paddingTop="0px";
var c=a.ha("ytp-error-content"),d=c.clientHeight;a.i.resize(b,b.height-d);c.style.paddingTop=(b.height-a.i.element.clientHeight)/2-d/2+"px"},GHa=function(a,b){var c;
b.reason&&(B3(b.reason)?c=g.bG(b.reason):c=g.eO(g.aG(b.reason)),a.Hc(c,"content"));var d;b.subreason&&(B3(b.subreason)?d=g.bG(b.subreason):d=g.eO(g.aG(b.subreason)),a.Hc(d,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer){var e=b.proceedButton.buttonRenderer;c=a.ha("ytp-error-content-wrap-subreason");d=g.Ie("A");if(e.text&&e.text.simpleText){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;
break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}}},B3=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},C3=function(a,b){g.X.call(this,{D:"a",
ka:["ytp-impression-link"],U:{target:"{{target}}",href:"{{url}}","aria-label":"Assistir no YouTube"},S:[{D:"div",K:"ytp-impression-link-content",U:{"aria-hidden":"true"},S:[{D:"div",K:"ytp-impression-link-text",ba:"Assistir no"},{D:"div",K:"ytp-impression-link-logo",S:[o3()]}]}]});this.api=a;this.l=b;this.Ba("target",a.T().C);this.api.Jb(this.element,this,96714);this.N(this.api,"presentingplayerstatechange",this.xg);this.N(this.api,"videoplayerreset",this.i);this.N(this.element,"click",this.onClick);
this.i()},D3=function(a){g.X.call(this,{D:"div",
K:"ytp-muted-autoplay-endscreen-overlay",S:[{D:"div",K:"ytp-muted-autoplay-end-panel",S:[{D:"div",K:"ytp-muted-autoplay-end-text",ba:"{{text}}"}]}]});this.api=a;this.u=this.ha("ytp-muted-autoplay-end-panel");this.i=new g.XN(this.api);g.I(this,this.i);this.i.fa(this.u,0);this.api.Jb(this.element,this,52428);this.N(this.api,"presentingplayerstatechange",this.l);this.za("click",this.onClick);this.hide()},E3=function(a){g.X.call(this,{D:"div",
K:"ytp-muted-autoplay-overlay",S:[{D:"div",K:"ytp-muted-autoplay-bottom-buttons",S:[{D:"button",ka:["ytp-muted-autoplay-equalizer","ytp-button"],S:[{D:"div",ka:["ytp-muted-autoplay-equalizer-icon"],S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},S:[{D:"g",U:{fill:"#fff"},S:[{D:"rect",K:"ytp-equalizer-bar-left",U:{height:"9",width:"4",x:"1",y:"7"}},{D:"rect",K:"ytp-equalizer-bar-middle",U:{height:"14",width:"4",x:"6",y:"2"}},{D:"rect",K:"ytp-equalizer-bar-right",U:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ha("ytp-muted-autoplay-bottom-buttons");this.ha("ytp-muted-autoplay-equalizer");this.u=new g.M(this.l,4E3,this);a.Jb(this.element,this,39306);this.N(a,"presentingplayerstatechange",this.i);this.N(a,"onMutedAutoplayStarts",this.i);this.za("click",this.onClick);this.hide()},F3=function(a,b){g.X.call(this,{D:"div",
K:"ytp-pause-overlay"});var c=this;this.api=a;this.L=b;this.l=new g.yN(this);this.I=new g.mM(this,1E3,!1,100);this.B=[];this.i=[];this.C=0;this.J=!1;this.ea=0;this.title=new g.X({D:"h2",K:"ytp-related-title",ba:"{{title}}"});this.previous=new g.X({D:"button",ka:["ytp-button","ytp-previous"],U:{"aria-label":"Mostrar v\u00eddeos sugeridos anteriores"},S:[g.EL()]});this.Y=new x3(function(m){c.suggestions.element.scrollLeft=-m});
this.ca=this.tileWidth=this.u=0;this.next=new g.X({D:"button",ka:["ytp-button","ytp-next"],U:{"aria-label":"Mostrar mais v\u00eddeos sugeridos"},S:[g.FL()]});this.expandButton=new g.X({D:"button",ka:["ytp-button","ytp-expand"],ba:"Mais v\u00eddeos"});g.I(this,this.l);g.I(this,this.I);var d=a.T();"0"===d.controlsType&&g.N(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.X=d.l;g.I(this,this.title);this.title.fa(this.element);this.suggestions=new g.X({D:"div",K:"ytp-suggestions"});g.I(this,
this.suggestions);this.suggestions.fa(this.element);g.I(this,this.previous);this.previous.fa(this.element);this.previous.za("click",this.vJ,this);var e=g.KA||g.vg?{style:"will-change: opacity"}:void 0;g.I(this,this.Y);for(var f=0;16>f;f++){var h=new g.X({D:"a",K:"ytp-suggestion-link",U:{href:"{{link}}",target:d.C,"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-suggestion-image"},{D:"div",K:"ytp-suggestion-overlay",U:e,S:[{D:"div",K:"ytp-suggestion-title",ba:"{{title}}"},{D:"div",K:"ytp-suggestion-author",
ba:"{{author_and_views}}"},{D:"div",U:{"data-is-live":"{{is_live}}"},K:"ytp-suggestion-duration",ba:"{{duration}}"}]}]});g.I(this,h);h.fa(this.suggestions.element);var l=h.ha("ytp-suggestion-link");g.sg(l,"transitionDelay",f/20+"s");this.l.N(l,"click",g.Qa(this.wJ,f));this.B.push(h)}g.I(this,this.next);this.next.fa(this.element);this.next.za("click",this.uJ,this);d=new g.X({D:"button",ka:["ytp-button","ytp-collapse"],U:{"aria-label":"Ocultar mais v\u00eddeos"},S:[{D:"svg",U:{height:"100%",viewBox:"0 0 16 16",
width:"100%"},S:[{D:"path",U:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.I(this,d);d.fa(this.element);d.za("click",this.kN,this);g.I(this,this.expandButton);this.expandButton.fa(this.element);this.expandButton.za("click",this.lN,this);this.l.N(this.api,"appresize",this.Ua);this.l.N(this.api,"fullscreentoggled",this.vk);this.l.N(this.api,"presentingplayerstatechange",this.Yb);this.l.N(this.api,"videodatachange",this.Oa);this.Ua(this.api.La().getPlayerSize());
this.Oa()},G3=function(a){var b=a.L.Ae()?32:16;
b=a.ca/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.u;var c=a.C-a.i.length*(a.tileWidth+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},HHa=function(a){for(var b=0;b<a.i.length;b++){var c=a.i[b].Na(),d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.YCa.test(c.title)&&(d.ha("ytp-suggestion-title").dir="rtl");g.YCa.test(e)&&(d.ha("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Ao vivo":c.lengthSeconds?g.fM(c.lengthSeconds):"";var h=c.vl();g.SC(a.api.T())&&(h=g.Od(h,g.DO("emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.iq||null,is_live:c.isLivePlayback});d=d.ha("ytp-suggestion-image");c=c.ze();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display=
"none";G3(a)},H3=function(a){var b=a.T();
g.X.call(this,{D:"a",ka:["ytp-watermark","yt-uix-sessionlink"],U:{target:b.C,href:"{{url}}","aria-label":g.bK("Assista em $WEBSITE",{WEBSITE:g.pD(b)}),"data-sessionlink":"feature=player-watermark"},S:[o3()]});this.api=a;this.i=null;this.l=!1;this.state=a.Ya();a.Jb(this.element,this,76758);this.N(a,"videodatachange",this.IA);this.N(a,"videodatachange",this.Oa);this.N(a,"presentingplayerstatechange",this.xJ);this.N(a,"appresize",this.Ua);b=this.state;this.state!==b&&(this.state=b);this.IA();this.Oa();
this.Ua(a.La().getPlayerSize())},I3=function(a){g.GN.call(this,a);
this.G=a;this.l=new g.yN(this);g.I(this,this.l);this.load()};g.k=p3.prototype;g.k.pQ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.po.set(this.GD(c),[new gHa(a)])};
g.k.wD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.GD(b);return this.po.has(b)?this.po.get(b):void 0};
g.k.jL=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.wD(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.po.clear()};
g.k.GD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(q3,p3);q3.prototype.u=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.jL(c);e&&(d=e.HC);this.pQ(d+a,c)};g.k=iHa.prototype;g.k.SG=function(){var a=this.l.values();a=[].concat(g.la(a)).filter(function(b){return b.po.size});
a.length&&this.I.flush(a);kHa(a);this.u=0;this.i.enabled&&this.i.stop()};
g.k.AK=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.l.has(a)||this.l.set(a,new q3(a,c))};
g.k.pJ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.qJ.apply(this,[a,1].concat(g.la(c)))};
g.k.qJ=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=jHa(this,a))&&e instanceof q3&&(e.u(b,d),this.i.enabled||this.i.start(),this.u++,this.u>=this.B&&this.SG())};
g.k.xG=function(a,b,c){for(var d=2;d<arguments.length;++d);jHa(this,a)};g.Ta(nHa,g.Df);g.Ta(oHa,g.Df);var mHa=[1];g.Ta(sHa,g.Df);g.Ta(uHa,g.Df);g.Ta(vHa,g.Df);g.Ta(wHa,g.Df);g.Ta(s3,g.Df);g.Ta(u3,g.Df);g.Ta(w3,g.Df);var rHa=[3,6,4],tHa=[[1,2]],xHa=[1],t3=[[1,2,3]],v3=[[1,2,3]];hHa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.Qo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new sHa;c=g.Lf(c,1,b.l);for(var d=b,e=[],f=0;f<d.i.length;f++)e.push(d.i[f].bL);c=g.Lf(c,3,e||[]);d=[];e=[];f=g.q(b.po.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.wD(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.HC;var t=new w3;switch(l){case 3:n3(t,1,v3[0],Number(r));
break;case 2:n3(t,2,v3[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new s3;n.i||(n.i={});r=p?g.Of(p):p;n.i[2]=p;n=g.Lf(n,2,r);p=h;r=[];t=b;for(var w=[],y=0;y<t.i.length;y++)w.push(t.i[y].cL);t=w;for(w=0;w<t.length;w++){y=t[w];var x=p[w],F=new u3;switch(y){case 3:n3(F,1,t3[0],String(x));break;case 2:n3(F,2,t3[0],Number(x));break;case 1:n3(F,3,t3[0],"true"==x)}r.push(F)}fHa(n,1,r);d.push(n)}}fHa(c,4,d);d=b=new g.wf;e=g.Jf(c,1);null!=e&&j3(d,1,e);e=g.Jf(c,5);null!=e&&dHa(d,5,e);e=m3(c,
uHa,2);null!=e&&k3(d,2,e,AHa);e=g.Jf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)j3(d,3,e[f]);e=g.Jf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)dHa(d,6,e[f]);e=g.Nf(c,s3,4);0<e.length&&l3(d,4,e,DHa);b=g.xf(b);b={serializedIncrementBatch:g.sf(b)};g.Wr("streamzIncremented",b)}}};var r3;g.u(x3,g.E);x3.prototype.start=function(a,b,c){this.i=a;this.l=b;this.duration=c;this.startTime=(0,g.Q)();this.next()};
x3.prototype.next=function(){var a=(0,g.Q)()-this.startTime;var b=this.u;a=eHa(b,a/this.duration);if(0==a)b=b.C;else if(1==a)b=b.L;else{var c=g.ge(b.C,b.I,a),d=g.ge(b.I,b.J,a);b=g.ge(b.J,b.L,a);c=g.ge(c,d,a);d=g.ge(d,b,a);b=g.ge(c,d,a)}b=g.ee(b,0,1);this.callback((this.l-this.i)*b+this.i);1>b&&this.delay.start()};g.u(y3,g.X);g.k=y3.prototype;g.k.hide=function(){this.L=!0;g.X.prototype.hide.call(this)};
g.k.show=function(){this.L=!1;g.X.prototype.show.call(this)};
g.k.isHidden=function(){return this.L};
g.k.rJ=function(){this.scrollTo(this.u-this.C)};
g.k.sJ=function(){this.scrollTo(this.u+this.C)};
g.k.tJ=function(a,b){var c=this.i[a],d=c.Ed;g.ZN(b,this.api,this.X,d||void 0)&&this.api.Ei(c.Na().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.T(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.i.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.jb)this.hide();else{var l;if(e){var m=l=28;this.l=16}else this.l=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.l;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.l)),m=l/m-this.l,r=Math.floor(m/
d));50>m||g.tN(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.B[d],w=t.ha("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ha("ytp-suggestion-title").style.width=m+"px";t.ha("ytp-suggestion-author").style.width=m+"px";t=t.ha("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.J=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.C=l;this.u=0;this.suggestions.element.scrollLeft=-0;z3(this)}};
g.k.Oa=function(){var a=this,b=this.api.getVideoData(),c=this.api.T();this.X=b.C?!1:c.l;if(b.suggestions){var d=g.Ne(b.suggestions,function(e){return e&&!e.list});
this.i=g.Qc(d,function(e){e=g.UP(c,e);g.I(a,e);return e})}else this.i.length=0;
EHa(this);b.C?this.title.update({title:g.bK("Mais v\u00eddeos de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"Mais v\u00eddeos no YouTube"})};
g.k.scrollTo=function(a){a=g.ee(a,this.C-this.i.length*(this.tileWidth+this.l),0);this.Y.start(this.u,a,1E3);this.u=a;z3(this)};g.u(A3,g.dO);A3.prototype.show=function(){g.dO.prototype.show.call(this);FHa(this,this.api.La().getPlayerSize())};
A3.prototype.resize=function(a){g.dO.prototype.resize.call(this,a);FHa(this,a);g.O(this.element,"related-on-error-overlay-visible",!this.i.isHidden())};
A3.prototype.l=function(a){g.dO.prototype.l.call(this,a);var b=this.api.getVideoData();if(g.T(this.api.T().experiments,"embed_parse_error_renderer_killswitch")||!b.QA&&!b.playerErrorMessageRenderer){var c;a.Ti&&(b.hm?B3(b.hm)?c=g.bG(b.hm):c=g.eO(g.aG(b.hm)):c=g.eO(a.Ti),this.Hc(c,"subreason"))}else(a=b.QA)?GHa(this,a):b.playerErrorMessageRenderer&&GHa(this,b.playerErrorMessageRenderer)};g.u(C3,g.X);C3.prototype.xg=function(){this.api.Ya().isCued()||(this.hide(),this.api.Qa(this.element,!1))};
C3.prototype.i=function(){var a=this.api.getVideoData(),b=this.api.T(),c=this.api.getVideoData().C,d=b.Fb;b=!b.jb;var e=this.l.Oe();d||e||c||b||!a.videoId?(this.hide(),this.api.Qa(this.element,!1)):(a=g.Od(this.api.getVideoUrl(),g.DO("emb_imp_woyt")),this.Ba("url",a),this.show())};
C3.prototype.onClick=function(a){var b=g.Od(this.api.getVideoUrl(),g.DO("emb_imp_woyt"));g.$N(b,this.api,a);this.api.vb(this.element)};
C3.prototype.show=function(){this.api.Ya().isCued()&&(g.X.prototype.show.call(this),this.api.ir(this.element)&&this.api.Qa(this.element,!0))};g.u(D3,g.X);D3.prototype.l=function(){var a=this.api.Ya(),b=this.api.getVideoData();g.T(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.W(a,2)&&!this.bb?(this.show(),this.i.show(),a=this.api.getVideoData(),this.Ba("text",a.XB),g.O(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Qa(this.element,this.bb),this.api.ya("onMutedAutoplayEnds")):this.hide())};
D3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.fI(a);this.api.loadVideoById(a.videoId,b);this.api.vb(this.element);this.hide()};g.u(E3,g.X);E3.prototype.i=function(){var a=this.api.Ya(),b=this.api.getVideoData();g.T(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.W(a,2)?this.bb||(g.X.prototype.show.call(this),this.u.start(),this.api.Qa(this.element,this.bb)):this.hide()};
E3.prototype.l=function(){g.O(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
E3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.fI(a);this.api.loadVideoById(a.videoId,b);this.api.vb(this.element)};g.u(F3,g.X);g.k=F3.prototype;g.k.hide=function(){g.sn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.X.prototype.hide.call(this)};
g.k.kN=function(){this.J=!0;g.sn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.lN=function(){this.J=!1;g.N(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.uJ=function(){this.scrollTo(this.u-this.C)};
g.k.vJ=function(){this.scrollTo(this.u+this.C)};
g.k.wJ=function(a,b){if(1E3>(0,g.Q)()-this.ea)g.hp(b),document.activeElement.blur();else{var c=this.i[a],d=c.Ed;g.ZN(b,this.api,this.X,d||void 0)&&this.api.Ei(c.Na().videoId,d,c.getPlaylistId())}};
g.k.vk=function(){this.Ua(this.api.La().getPlayerSize())};
g.k.Yb=function(a){if(!(g.W(a.state,1)||g.W(a.state,16)||g.W(a.state,32))){var b=!g.T(this.api.T().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.W(a.state,2048);!g.W(a.state,4)||g.W(a.state,2)||b?this.I.hide():this.i.length&&(this.J||(g.N(this.api.getRootNode(),"ytp-expand-pause-overlay"),G3(this)),this.I.show(),this.ea=(0,g.Q)())}};
g.k.Ua=function(a){var b=16/9,c=this.L.Ae();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].ha("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.ca=b;this.C=a;this.u=0;this.suggestions.element.scrollLeft=-0;G3(this)};
g.k.Oa=function(){var a=this,b=this.api.T(),c=this.api.getVideoData();this.X=c.C?!1:b.l;if(c.suggestions){var d=g.Ne(c.suggestions,function(e){return e&&!e.list});
this.i=g.Qc(d,function(e){e=g.UP(b,e);g.I(a,e);return e})}else this.i.length=0;
HHa(this);c.C?this.title.update({title:g.bK("Mais v\u00eddeos de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"Mais v\u00eddeos"})};
g.k.scrollTo=function(a){a=g.ee(a,this.C-this.i.length*(this.tileWidth+8),0);this.Y.start(this.u,a,1E3);this.u=a;G3(this)};g.u(H3,g.X);g.k=H3.prototype;g.k.IA=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).C,c=this.api.T();a=(a.mutedAutoplay||c.Fb&&!g.W(this.state,2))&&!(b&&c.pfpChazalUi);g.zL(this,a);this.api.Qa(this.element,a)};
g.k.xJ=function(a){a=a.state;this.state!==a&&(this.state=a);this.IA()};
g.k.Oa=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.Ba("url",a);this.i||(this.i=this.za("click",this.onClick))}else this.i&&(this.Ba("url",null),this.Ib(this.i),this.i=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.gM(a),!1,!0,!0);g.$N(b,this.api,a);this.api.vb(this.element)};
g.k.Ua=function(a){if((a=480>a.width)&&!this.l||!a&&this.l){var b=new g.X(o3()),c=this.ha("ytp-watermark");g.O(c,"ytp-watermark-small",a);g.Ke(c);b.fa(c);this.l=a}};g.u(I3,g.GN);g.k=I3.prototype;g.k.wi=function(){return!1};
g.k.create=function(){var a=this.G.T(),b=g.mN(this.G);a.jb&&(this.C=new F3(this.G,b),g.I(this,this.C),g.wN(this.G,this.C.element,4));g.T(a.experiments,"embeds_enable_muted_autoplay")&&(this.i=new E3(this.G),g.I(this,this.i),g.wN(this.G,this.i.element,4),this.B=new D3(this.G),g.I(this,this.B),g.wN(this.G,this.B.element,4));if(a.Fb||this.i)this.watermark=new H3(this.G),g.I(this,this.watermark),g.wN(this.G,this.watermark.element,7);g.T(a.experiments,"embeds_impression_link")&&(this.u=new C3(this.G,b),
g.I(this,this.u),g.wN(this.G,this.u.element,7));this.l.N(this.G,"appresize",this.Ua);this.l.N(this.G,"presentingplayerstatechange",this.xg);this.l.N(this.G,"videodatachange",this.bR);this.l.N(this.G,"onMutedAutoplayStarts",this.cO);this.ub(this.G.Ya());this.player.md("embed");g.T(a.experiments,"enable_cookie_reissue_iframe")&&a.W&&!g.Vq("__Secure-3PAPISID")&&(a=a.deviceParams.c,a=void 0===a?"WEB":a,(new lHa).i.pJ("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",a),a=g.Ie("IFRAME"),
a.src="/signin?go=true",a.style.display="none",document.body.appendChild(a))};
g.k.Ua=function(){var a=this.G.La().getPlayerSize();this.Ud&&this.Ud.resize(a)};
g.k.xg=function(a){this.ub(a.state)};
g.k.ub=function(a){g.W(a,128)?(this.Ud||(this.Ud=new A3(this.G),g.I(this,this.Ud),g.wN(this.G,this.Ud.element,4)),this.Ud.l(a.getData()),this.Ud.show(),g.N(this.G.getRootNode(),"ytp-embed-error")):this.Ud&&(this.Ud.dispose(),this.Ud=null,g.sn(this.G.getRootNode(),"ytp-embed-error"))};
g.k.cO=function(){this.G.getVideoData().mutedAutoplay&&this.i&&this.watermark&&this.watermark.fa(this.i.bottomButtons,0)};
g.k.bR=function(){var a=this.G.getVideoData();this.watermark&&this.i&&!a.mutedAutoplay&&g.Pe(this.i.element,this.watermark.element)&&g.wN(this.G,this.watermark.element,7)};g.MN.embed=I3;})(_yt_player);
