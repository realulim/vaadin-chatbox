$wnd.org_vaadin_chatbox_demo_DemoWidgetSet.runAsyncCallback7("function gDc(){}\nfunction iDc(){}\nfunction kTd(){oPd.call(this)}\nfunction hwb(a,b){this.a=b;this.b=a}\nfunction Evb(a,b){mub(a,b);--a.b}\nfunction $l(a){return (ik(),a).createElement('col')}\nfunction ead(a,b,c){a.d=b;a.a=c;krb(a,a.b);jrb(a,cad(a),0,0)}\nfunction O9c(){aXb.call(this);this.a=pA(EUb(Kcb,this),2649)}\nfunction fad(){mrb.call(this);this.d=1;this.a=1;this.c=false;jrb(this,cad(this),0,0)}\nfunction Hvb(a,b){tub.call(this);nub(this,new Lub(this));qub(this,new pwb(this));oub(this,new kwb(this));Fvb(this,b);Gvb(this,a)}\nfunction Zsc(a,b,c){FUb(a.a,new mDc(new EDc(Kcb),oje),Fz(xz(sgb,1),Dhe,1,5,[J_d(b),J_d(c)]))}\nfunction cad(a){a.b=new Hvb(a.d,a.a);Zpb(a.b,XAe);Rpb(a.b,XAe);rqb(a.b,a,(pt(),pt(),ot));return a.b}\nfunction fub(a,b){var c,d,e;e=iub(a,b.c);if(!e){return null}d=ok((ik(),e)).sectionRowIndex;c=e.cellIndex;return new hwb(d,c)}\nfunction Dvb(a,b){if(b<0){throw ujb(new WZd('Cannot access a row with a negative index: '+b))}if(b>=a.b){throw ujb(new WZd(Tme+b+Ume+a.b))}}\nfunction Gvb(a,b){if(a.b==b){return}if(b<0){throw ujb(new WZd('Cannot set number of rows to '+b))}if(a.b<b){Ivb((fnb(),a.M),b-a.b,a.a);a.b=b}else{while(a.b>b){Evb(a,a.b-1)}}}\nfunction jwb(a,b,c){var d,e;b=$wnd.Math.max(b,1);e=a.a.childNodes.length;if(e<b){for(d=e;d<b;d++){ij(a.a,$l($doc))}}else if(!c&&e>b){for(d=e;d>b;d--){rj(a.a,a.a.lastChild)}}}\nfunction iub(a,b){var c,d,e;d=(fnb(),(ik(),hk).pc(b));for(;d;d=(null,ok(d))){if(n0d(Hj(d,'tagName'),'td')){e=(null,ok(d));c=(null,ok(e));if(c==a.M){return d}}if(d==a.M){return null}}return null}\nfunction dad(a,b,c,d){var e,f;if(b!=null&&c!=null&&d!=null){if(b.length==c.length&&c.length==d.length){for(e=0;e<b.length;e++){f=Hub(a.b.N,k$d(c[e],10),k$d(d[e],10));f.style[PFe]=b[e]}}a.c=true}}\nfunction Ivb(a,b,c){var d=$doc.createElement('td');d.innerHTML=Jle;var e=$doc.createElement(qje);for(var f=0;f<c;f++){var g=d.cloneNode(true);e.appendChild(g)}a.appendChild(e);for(var h=1;h<b;h++){a.appendChild(e.cloneNode(true))}}\nfunction Fvb(a,b){var c,d,e,f,g,h,j;if(a.a==b){return}if(b<0){throw ujb(new WZd('Cannot set number of columns to '+b))}if(a.a>b){for(c=0;c<a.b;c++){for(d=a.a-1;d>=b;d--){bub(a,c,d);e=dub(a,c,d,false);f=mwb(a.M,c);f.removeChild(e)}}}else{for(c=0;c<a.b;c++){for(d=a.a;d<b;d++){g=mwb(a.M,c);h=(j=(fnb(),um($doc)),j.innerHTML=Jle,fnb(),j);dnb.Qd(g,tnb(h),d)}}}a.a=b;jwb(a.O,b,false)}\nfunction cDc(c){var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.kk(Lcb,fGe,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.kk(Lcb,gGe,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.kk(Lcb,hGe,d);var d={setter:function(a,b){a.d=b.ap()},getter:function(a){return J_d(a.d)}};c.kk(Lcb,iGe,d);var d={setter:function(a,b){a.e=b.ap()},getter:function(a){return J_d(a.e)}};c.kk(Lcb,jGe,d)}\nvar fGe='changedColor',gGe='changedX',hGe='changedY',iGe='columnCount',jGe='rowCount';Xjb(838,805,Vme,Hvb);_.Le=function Jvb(a){return this.a};_.Me=function Kvb(){return this.b};_.Ne=function Lvb(a,b){Dvb(this,a);if(b<0){throw ujb(new WZd('Cannot access a column with a negative index: '+b))}if(b>=this.a){throw ujb(new WZd(Rme+b+Sme+this.a))}};_.Oe=function Mvb(a){Dvb(this,a)};_.a=0;_.b=0;var GH=Q$d(Dme,'Grid',838,MH);Xjb(2182,1,{},hwb);_.a=0;_.b=0;var JH=Q$d(Dme,'HTMLTable/Cell',2182,sgb);Xjb(1943,1,Sne);_.Zb=function fDc(){XDc(this.b,Lcb,ubb);MDc(this.b,hte,Z3);NDc(this.b,Z3,new gDc);NDc(this.b,Lcb,new iDc);VDc(this.b,Z3,yoe,new EDc(Lcb));cDc(this.b);TDc(this.b,Lcb,fGe,new EDc(xz(ygb,1)));TDc(this.b,Lcb,gGe,new EDc(xz(ygb,1)));TDc(this.b,Lcb,hGe,new EDc(xz(ygb,1)));TDc(this.b,Lcb,iGe,new EDc(lgb));TDc(this.b,Lcb,jGe,new EDc(lgb));KDc(this.b,Z3,new sDc(d_,mte,Fz(xz(ygb,1),Ehe,2,6,[Yoe,nte])));KDc(this.b,Z3,new sDc(d_,ote,Fz(xz(ygb,1),Ehe,2,6,[pte])));sfc((!kfc&&(kfc=new Afc),kfc),this.a.d)};Xjb(1945,1,Yye,gDc);_.ck=function hDc(a,b){return new O9c};var w$=Q$d(qre,'ConnectorBundleLoaderImpl/7/1/1',1945,sgb);Xjb(1946,1,Yye,iDc);_.ck=function jDc(a,b){return new kTd};var x$=Q$d(qre,'ConnectorBundleLoaderImpl/7/1/2',1946,sgb);Xjb(1944,31,QFe,O9c);_.gg=function Q9c(){return !this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)};_.hg=function R9c(){return !this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)};_.jg=function S9c(){return !this.G&&(this.G=new fad),pA(this.G,217)};_.Jh=function P9c(){return new fad};_.Qg=function T9c(){rqb((!this.G&&(this.G=new fad),pA(this.G,217)),this,(pt(),pt(),ot))};_.Oc=function U9c(a){Zsc(this.a,(!this.G&&(this.G=new fad),pA(this.G,217)).e,(!this.G&&(this.G=new fad),pA(this.G,217)).f)};_.Fg=function V9c(a){UWb(this,a);(a.wh(jGe)||a.wh(iGe)||a.wh('updateGrid'))&&ead((!this.G&&(this.G=new fad),pA(this.G,217)),(!this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)).e,(!this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)).d);if(a.wh(gGe)||a.wh(hGe)||a.wh(fGe)||a.wh('updateColor')){dad((!this.G&&(this.G=new fad),pA(this.G,217)),(!this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)).a,(!this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)).b,(!this.P&&(this.P=uIb(this)),pA(pA(this.P,6),359)).c);(!this.G&&(this.G=new fad),pA(this.G,217)).c||FUb(this.a.a,new mDc(new EDc(Kcb),'refresh'),Fz(xz(sgb,1),Dhe,1,5,[]))}};var Z3=Q$d(RFe,'ColorPickerGridConnector',1944,d_);Xjb(217,553,{49:1,56:1,21:1,8:1,18:1,20:1,17:1,36:1,39:1,22:1,37:1,16:1,12:1,217:1,25:1},fad);_.Tc=function gad(a){return rqb(this,a,(pt(),pt(),ot))};_.Oc=function had(a){var b;b=fub(this.b,a);if(!b){return}this.f=b.b;this.e=b.a};_.a=0;_.c=false;_.d=0;_.e=0;_.f=0;var _3=Q$d(RFe,'VColorPickerGrid',217,aH);Xjb(359,14,{6:1,14:1,30:1,102:1,359:1,3:1},kTd);_.d=0;_.e=0;var Lcb=Q$d(gze,'ColorPickerGridState',359,ubb);qhe(Eh)(7);\n//# sourceURL=org.vaadin.chatbox.demo.DemoWidgetSet-7.js\n")
