let F=0,Y=0,D=0,H=0,C=0,j=0,k=0,a=0,T=0,x=0,y=0,$=0,Q=0,B=0,q=0,z=0,O=0,R=.066,w=1,tt=[{x:-1,z:1},{x:1,z:1},{x:1,z:-1},{x:-1,z:-1}],L=[],W=[],at=[],X=[],N={x:0,y:0,z:0},E=Math.PI/180,U=new DOMMatrix,l=new Float32Array(16),r=new Float32Array(624),g=(t,e)=>Array.from(Array(t),(t,a)=>e(a)),et=t=>4<t?4:t,K=(t,a)=>a<t?t:a,V=t=>t<0?-t:t,G=t=>t<0?0:1<t?1:t,lt=(t,a,e)=>t+(a-t)*(e<0?0:1<e?1:e),i=(t,a)=>(t=t<0?0:1<t?1:t)+(1-t-t)*(a<0?0:1<a?1:a),rt=t=>Math.atan2(Math.sin(t*=E),Math.cos(t))/E,st=(t,a,e)=>((t*=E)+(2*(a=(a*E-t)%(2*Math.PI))%(2*Math.PI)-a)*(e<0?0:1<e?1:e))/E,nt=({x:t,y:a,z:e})=>Math.hypot(t-N.x,a-N.y,e-N.z),h=({x:t,y:a,z:e},l)=>t*l.x+a*l.y+e*l.z,ot=t=>{let a=0,e=0,l=0,r,s=t.at(-1);for(r of t)a+=(s.y-r.y)*(s.z+r.z),e+=(s.z-r.z)*(s.x+r.x),l+=(s.x-r.x)*(s.y+r.y),s=r;return r=Math.hypot(a,e,l),a/=r,e/=r,l/=r,{x:a,y:e,z:l,w:a*s.x+e*s.y+l*s.z}},f=(t,a=l,e=0)=>(e*=16,a[e++]=t.m11,a[e++]=t.m12,a[e++]=t.m13,a[e++]=t.m14,a[e++]=t.m21,a[e++]=t.m22,a[e++]=t.m23,a[e++]=t.m24,a[e++]=t.m31,a[e++]=t.m32,a[e++]=t.m33,a[e++]=t.m34,a[e++]=t.m41,a[e++]=t.m42,a[e++]=t.m43,a[e]=t.m44,a),ct=(t,a,e,l)=>[t,0,0,0,0,a,0,0,0,0,(l+e)/(e-l),-1,0,0,2*l*e/(e-l),0],it=(t,a,e)=>(t.D=e,t.A=a,t),ht=(t,l,a=t.A)=>it(t.map(t=>{let a,e;return{x:t,y:a,z:e}=t,{x:t,y:a,z:e}=l.transformPoint({x:t,y:a,z:e}),{x:t,y:a,z:e}}),a,t.D),m=(t,a,e)=>t.map(t=>ht(t,a,e)),ft=(e,l=0)=>g(e,t=>{let a=Math.cos(2*Math.PI*t/e);return{x:Math.sin(2*Math.PI*t/e),y:0,z:(a<0?-a:a)<.01?a:a<0?a-l:a+l}}),mt=(l,r,s)=>l.map((t,a,{length:e})=>it([t,r[e-a-1],r[e-(a+1)%e-1],l[(a+1)%e]],l.A,s)),u=(t,a,e=0,l)=>(t=t?ft(t,l):tt,l=ht(t,U.translate(0,1).scale3d(0<e?e:1)),t=ht(t,U.translate(0,-1).scale3d(e<0?-e:1)).reverse(),[...mt(t,l,a),l,t]),ut=(l,r=l,s=(t,a)=>(a*=Math.PI/r,{x:Math.cos(t*=2*Math.PI/l)*Math.sin(a),y:Math.cos(a),z:Math.sin(t)*Math.sin(a)}))=>{let n=[];for(let e=0;l>e;e++)for(let a=0;r>a;a++){let t=it([],0,1);n.push(t),t.push(s(e,a,t)),a&&t.push(s((e+1)%l,a,t)),r-1>a&&t.push(s((e+1)%l,a+1%r,t)),t.push(s(e,a+1%r,t))}return n},c=(l,r)=>{let s,n,o,c=r.C;for(let t=0;c.length>t;++t)if((s=h(l,c[t])-l.w)<-8e-5?o=r:8e-5<s&&(n=r),o&&n){n=[],o=[],c=r.C,t=r.B;let a=c.at(-1),e=h(l,a)-l.w;for(let t of c)s=h(l,t)-l.w,e<8e-5&&o.push(a),-8e-5<e&&n.push(a),(8e-5<e&&s<-8e-5||e<-8e-5&&8e-5<s)&&(e/=s-e,a={x:a.x+(a.x-t.x)*e,y:a.y+(a.y-t.y)*e,z:a.z+(a.z-t.z)*e},n.push(a),o.push(a)),a=t,e=s;return{o:2<n.length&&{C:it(n,c.A,c.D),B:t,u:r},m:2<o.length&&{C:it(o,c.A,c.D),B:t,u:r}}}return{o:n,m:o}},n=(t,a,e=ot(a.C))=>{let l,r,s;return t?({o:l,m:r}=c(t,a),l||r||t.s.push(a),l&&(t.o=n(t.o,l,e)),r&&(t.m=n(t.m,r,e))):({x:l,y:r,z:e,w:s}=e,t={x:l,y:r,z:e,w:s,s:[a],o:0,m:0}),t},e=(a,r,s)=>{let n=[],o=(t,a)=>{let{o:e,m:l}=c(t,a);e||l||(0<s*h(t,r)?e=a:l=a),e&&(t.o?o(t.o,e):n.push(e)),l&&t.m&&o(t.m,l)};for(let t of r.s)o(a,t);return n},s=(t,a)=>t&&(a(t),s(t.o,a),s(t.m,a)),o=t=>t.length?t.reduce((t,a)=>n(t,{C:a,B:0,u:0}),0):t,xt=t=>(s(t,a=>{let t=a.m;a.m=a.o,a.o=t,a.x*=-1,a.y*=-1,a.z*=-1,a.w*=-1;for(let t of a.s)t.B=!t.B}),t),M=(...t)=>t.reduce((l,a)=>{let r=[];if(l=o(l),a){a=o(a),s(l,t=>t.s=e(a,t,1)),s(a,t=>r.push([t,e(l,t,-1)]));for(let[a,e]of r)for(let t of e)n(l,t,a)}return l}),v=(t,...a)=>xt(M(xt(o(t)),...a)),d=t=>{let e=new Map,l=new Map,r=t=>{let a;return t.u&&((a=e.get(t.u))?(l.delete(a),t=r(t.u)):e.set(t.u,t)),t};return s(t,a=>{for(let t of a.s)l.set(r(t),t.B)}),Array.from(l,([{C:t},a])=>{let e=t.map(({x:t,y:a,z:e})=>({x:t,y:a,z:e}));return it(a?e.reverse():e,t.A,t.D)})},J=(t,a,e)=>t+(a-t)*G(1-Math.exp(-e*R)),yt=()=>{let t=i(W[12].g,W[13].g);k=lt(J(k,0,1),rt(k+60*R),W[5].g-W[6].i),C=lt(J(C,0,5),rt(C+56*R),t),j=lt(J(j,0,4),rt(j+48*R),t),x=J(x,W[9].i,.2+.3*V(2*W[9].i-1)),T=J(T,a?T+(-9-T)*G(1.5*R):G(D/3),1),w&&D>w&&(w=0,h4.innerHTML=""),W[0].l&&.8<W[0].g&&(F<13?(1/0>w&&(w=D+3,h4.innerHTML="Not leaving now, there are souls to catch!"),W[0].l=0):a||(1/0>w&&(w=D+1/0,h4.innerHTML="Well done. They will be punished.<br>Thanks for playing"),a=1));for(let t of L)t.h&&(t.j=t.h());for(let t of W)t.h();for(let t of at)t.h()},gt=()=>{h3.innerHTML=["0","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII"][F=at.reduce((t,{l:a})=>t+a,0)]},Mt=()=>{localStorage.DanteSP22=JSON.stringify([W.map(({l:t})=>t),at.map(({l:t})=>t),H,D,x])},p=(t,a=1)=>{let e=At;return L.push(At=a={j:U,H:L.length,G:a,s:[]}),t(a),At=e,a},b=(t,a=U,e)=>At.s.push(...m(t,a,e)),I=r=>{let s=At,n=W.length,o={l:0,g:0,i:0,u:s,h(){let t=o.l,a=o.g,e=o.i,l=s.j.multiply(r);o.I=l,nt(l.transformPoint())<3&&X[5]&&(a<.3||.7<a)&&(o.l=t?0:1,n&&1/0>w&&(w=D+1,h4.innerHTML="* click *"),H=n,Mt()),o.g=J(a,t,4),o.i=J(e,t,1),o.j=l.rotate(60*o.g-30,0).translateSelf(0,1)}};W.push(o),b(u(5),r.translate(-.2).rotate(90,90).scale(.4,.1,.5),P(.4,.5,.5)),b(u(5),r.translate(.2).rotate(90,90).scale(.4,.1,.5),P(.4,.5,.5)),b(u(),r.translate(0,-.4).scale(.5,.1,.5),P(.5,.5,.4))},A=(f,...t)=>{let m=-1,u=0,g=0,M=0,v=0,d=0,p=1,b=3,I={l:0,h(){if(!I.l){let r=1,s=1/0,t,a,e,l,n,o,c;for(let l of A){let{x:t,z:a,w:e}=l;a=(t=Math.hypot(S-t,Y-a))-e,c||=t<e,0<a&&s>a&&(s=a,P=l);var i=t/e;r=i>r?r:i}c||({x:t,z:a,w:e}=P,l=S-t,n=Y-a,o=Math.hypot(l,n),h=Math.atan2(-n,l),p&&(g=(Math.random()-.5)*Math.PI/2,b=K(1,b/(1+Math.random()))),m=-Math.cos(h+=g),u=Math.sin(h),.1<o&&(o=(o<e?o:e)/(o||1),S=l*o+t,Y=n*o+a)),p=c,b=J(b,3+6*(1-r),3+r),z=J(z,S=J(S,S+m,b),b),C=J(C,Y=J(Y,Y+u,b),b),M=st(M,Math.atan2(z-v,C-d)/E-180,3*R),v=z,d=C;var h=(I.j=x.j.multiply(f.translate(z,0,C).rotateSelf(0,M,7*Math.sin(1.7*D)))).transformPoint();nt(h)<1.55&&(I.l=1,i=[,"Mark Zuckemberg<br>made the world worse",,"Andrzej Mazur<br>for the js13k competition","Donald Trump<br>lies","Kim Jong-un<br>Dictator, liked pineapple on pizza","Maxime Euziere<br>forced me to finish this game","She traded NFTs apes",,"Vladimir Putin<br>evil war","He was not a good person",,"Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat"][F]||'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift',1/0>w&&(w=D+(F&&F<12?5:7),h4.innerHTML=i),gt(),Mt())}I.l&&(I.j=L[2].j.translate(y%4*1.2-1.7+Math.sin(D+y)/7,-2,1.7*(y/4|0)-5.5+V(y%4-2)+Math.cos(D/1.5+y)/6))}},x=At,y=at.length,A=t.map(([t,a,e])=>({x:t,z:a,w:e})),P=A[0],{x:S,z:Y}=P,z=S,C=Y;at.push(I)},vt=(t,a,e,l)=>{let r=0,s=0,n=0,o=1/0,c=-1/0,i=1/0,h=-1/0,f=1/0,m=-1/0,u=1.1*(e-a),x=new DOMMatrix(ct(hC.clientHeight/hC.clientWidth*1.732051,1.732051,a,e)).multiplySelf(t).invertSelf();return a=g(8,t=>(t=x.transformPoint({x:4&t?1:-1,y:2&t?1:-1,z:1&t?1:-1}),r-=t.x=(u*t.x|0)/u/t.w,s-=t.y=(u*t.y|0)/u/t.w,n-=t.z=(u*t.z|0)/u/t.w,t)),e=U.rotate(298,139).translateSelf(r/8,s/8,n/8),ht(a,e).map(({x:t,y:a,z:e})=>{o=t>o?o:t,c=c>t?c:t,i=a>i?i:a,h=h>a?h:a,f=e>f?f:e,m=m>e?m:e}),f*=f<0?l:1/l,m*=0<m?l:1/l,U.scale(2/(c-o),2/(h-i),2/(f-m)).translateSelf((c+o)/-2,(h+i)/-2,(f+m)/2).multiplySelf(e)},dt=(t,a=35633)=>(a=Z.c6x(a),Z.s3c(a,t),Z.c6a(a),a),zt=(t,a)=>{let e={},l=Z.c1h();return Z.abz(l,t),Z.abz(l,dt(a,35632)),Z.l8l(l),t=>t?e[t]||(e[t]=Z.gan(l,t)):Z.u7y(l)},pt=(t,a,e=42)=>{if(S){for(var l of(e=U.rotate(0,40*Math.sin(Y)-70),[37,38,39]))f(e,r,l-1);Z.uae(t,!1,r),Z.d97(4,L[39].F-L[37].v,5123,2*L[37].v)}else{for(l=0;L.length>l;++l)L[l].G&&f(L[l].j,r,l-1);for(Z.uae(t,!1,r),Z.d97(4,(a?L[39].F:L[37].v)-3,5123,6),a=0;a<13;++a)f(at[a].j,r,a);for(a=0;W.length>a;++a)f(W[a].j,r,a+13),r[16*(a+13)+15]=1-W[a].g;Z.uae(t,!1,r),Z.das(4,L[e].F-L[e].v,5123,2*L[e].v,13),Z.das(4,L[40].F-L[40].v,5123,2*L[40].v,W.length)}},bt=t=>{h4.innerHTML+=".",setTimeout(t)},wt=t=>Math.sin(t*Math.PI*2),P=(t,a,e,l=0)=>255*l<<24|255*e<<16|255*a<<8|255*t,S,It,At,_,Pt,St="data:image/svg+xml;base64,"+btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>'),Yt=new AudioContext,Ct=Yt.createBufferSource(),Z=hC.getContext("webgl2",{powerPreference:"high-performance"});for(let t in Z)Z[t[0]+[...t].reduce((t,a,e)=>(t*e+a.charCodeAt(0))%434,0).toString(36)]=Z[t];bt(()=>{let t=0,e=()=>{if(2==++t){let e=t=>{Z.f1s(),requestAnimationFrame(e),a=(t-(It||t))/1e3,S?(R=0,X[5]=0):R=.066<a?.066:a,D+=R,Y+=a,It=t,0<R&&(yt(),Pt(),X[5]=0);var a=S?U.rotate(-20,-90).invertSelf().translateSelf(4.5,-2,-3.2+G(hC.clientWidth/1e3)):U.rotate(-z,-O,-0).invertSelf().translateSelf(-Q,-B,-q);0<R&&(o(),Z.b6o(36160,l),Z.v5y(0,0,128,128),Z.c4s(16640),Z.cbf(!0,!1,!0,!1),Z.uae(o("b"),!1,f(U.rotate(0,180).invertSelf().translateSelf(-N.x,-N.y,.3-N.z))),pt(o("c"),0,41),Z.c4s(256),Z.cbf(!1,!0,!0,!1),Z.uae(o("b"),!1,f(U.translate(-N.x,-N.y,-N.z-.3))),pt(o("c"),0,41),Z.f1s()),s(),Z.b6o(36160,r),Z.v5y(0,0,2048,2048),i[0](vt(a,.3,55,10)),i[1](vt(a,55,177,11)),c(),Z.b6o(36160,null),Z.v5y(0,0,Z.drawingBufferWidth,Z.drawingBufferHeight),Z.cbf(!0,!0,!0,!0),Z.c4s(16640),i[0](),i[1](),Z.uae(c("a"),!1,ct(hC.clientHeight/hC.clientWidth*1.732051,1.732051,.3,177)),Z.uae(c("b"),!1,f(a)),Z.ubu(c("k"),Q,B,q),pt(c("c"),!_),n(),Z.ubu(n("j"),Z.drawingBufferWidth,Z.drawingBufferHeight,Y),S?Z.ubu(n("k"),0,0,0):Z.ubu(n("k"),Q,B,q),Z.uae(n("b"),!1,f(a.inverse())),Z.d97(4,3,5123,0),Z.b6o(36160,l),Z.f1s()},r=Z.c5w(),l=Z.c5w(),t=Z.c3z(),w=Z.c25(),a=dt("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"),s=zt(dt("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"),"#version 300 es\nvoid main(){}"),n=zt(dt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),"#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}"),o=zt(a,"#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}"),c=zt(a,"#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}"),i=(o(),Z.uae(o("a"),!1,ct(1.4,.59,1e-4,1)),n(),Z.ubh(n("q"),3),c(),Z.ubh(c("q"),3),g(2,t=>{let a=new Float32Array(16),e=Z.c25(),l=c(t?"j":"i");return Z.ubh(c(t?"h":"g"),t),Z.b6o(36160,r),Z.d45([0]),Z.r9l(0),Z.a4v(33984+t),Z.b9j(3553,e),Z.t60(3553,0,33190,2048,2048,0,6402,5125,null),Z.t2z(3553,10241,9729),Z.t2z(3553,10240,9729),Z.t2z(3553,34893,515),Z.t2z(3553,34892,34894),Z.t2z(3553,10243,33071),Z.t2z(3553,10242,33071),t=>{t?(f(t,a),Z.uae(s("b"),!1,a),Z.fas(36160,36096,3553,e,0),Z.c4s(256),pt(s("c"),!_)):Z.uae(l,!1,a)}}));Z.e8z(2929),Z.e8z(2884),Z.c70(1),Z.c7a(1029),Z.d4n(515),Z.c5t(0,0,0,1),Z.b6o(36160,l),Z.bb1(36161,t),Z.r4v(36161,33189,128,128),Z.f8w(36160,36096,36161,t),Z.a4v(33987),Z.b9j(3553,w),Z.fas(36160,36064,3553,w,0),Z.t60(3553,0,6407,128,128,0,6407,5121,null),Z.a4v(33987),Z.b9j(3553,Z.c25()),Z.t60(3553,0,6408,1024,1024,0,6408,5121,h),Z.gbn(3553),Z.t2z(3553,10241,9987),Z.t2z(3553,10240,9729);try{let[e,l,t,a,r]=JSON.parse(localStorage.DanteSP22);W.map((t,a)=>t.g=t.i=t.l=a?0|e[a]:0),at.map((t,a)=>t.l=0|l[a]),H=t,D=a,x=r}catch{}T=H<0?0:1<H?1:H,yt(),(()=>{let i=0,h=0,f=0,m=0,u=0,g=2,M=!1,v={x:0,y:0,z:0},d=new Int32Array(256),p=new Uint8Array(65536),b=()=>{i=h=W[H].u.H||1,A=C=Y=P=S=0,g=2},I,A,P,S,Y,C,F,j,k,T,x,w;Pt=()=>{let t=y+(X[0]?1:0)+(X[2]?-1:0),e=$+(X[1]?1:0)+(X[3]?-1:0),l=navigator.getGamepads()[0];if(l){let a=l.buttons;var r=l.axes;(l=(s=t=>a[t]?.pressed||0<a[t]?.value)(1)||s(3)||s(2)||s(0))!==M&&(M=l)&&(X[5]=1),t+=(.2<V(-r[0])?-r[0]:0)+(s(14)?1:0)+(s(15)?-1:0),e+=(.2<V(-r[1])?-r[1]:0)+(s(12)?1:0)+(s(13)?-1:0),_&&(.3<V(r[2])&&(O+=80*r[2]*R),.3<V(r[3])&&(z+=80*r[3]*R))}l=Math.atan2(e,t),(r=G(Math.hypot(e,t)))<.05&&(r=0),t=r*Math.cos(l),e=r*Math.sin(l),A=k=j=0,Z.fa7(),Z.r9r(0,0,128,128,6408,5121,p),Z.iay(36008,[36064,36096]),Z.iay(36009,[36064,36096]),(()=>{for(let t=32;t<128;t+=2){let n=0,o=0,c=0,i=0,h=512*t;for(let s=1&t;s<128;s+=2){let t=h+4*s,a=h+4*(127-s),e=p[t]/255,l=p[1+a]/255,r=1-V(s/63.5-1);10<s&&s<118&&(n=K(n,K(e*r,e*p[a]/255)),o=K(o,K(l*r,l*p[1+t]/255))),(s<54||74<s)&&.001<(a=(1-r)*(l<e?e:l)/3)&&(s<64&&a>c?c=a:64<s&&a>i&&(i=a))}V(i-c)>(j<0?-j:j)&&(j=i-c),V(o-n)>(k<0?-k:k)&&(k=o-n)}})(),(()=>{let s=0,n=0,a=0,e=0;d.fill(0);for(let t=0;t<31;++t){let l=0,r=512*t;for(let e=0;e<128;e++){let t=r+4*e,a=(p[t]+p[1+t])/255;t=p[2+t],14<e&&e<114&&(l+=a),t&&a&&(a=d[t]+1,d[t]=a,s>a||(s=a,n=t))}l<3&&5<t&&(e+=t/32),3<l&&(7<t&&(a+=t/15),A=1)}n&&(A=1),g?n&&(g=0,h=n):h=n||i,i=n,P=J(P,A?6.5:8,4),v.y+=a/41-(A?1:P)*e/41*P*R})();var s=G(1-5*K(j<0?-j:j,k<0?-k:k)),a=(h||(j+=Y*s*R,k+=C*s*R),Y=J(Y,0,A?8:4),C=J(C,0,A?8:4),S=J(S,A?(t||e?A?7:4:0)*s:0,A?.1<s?10:t||e?5:7:1),j+=t*S*R,k+=e*S*R,(n=(s=1===L[h].G&&L[h].j||U).inverse()).m41=0,n.m42=0,n.m43=0,{x:j,z:k}=n.transformPoint({x:j,z:k,w:0}),v.x+=j,v.z+=k,g&&({x:n,y:a,z:o}=W[H].I.transformPoint({x:0,y:12,z:-2.5}),1<g&&(g=1,F=N.y=a),N.x=n,N.z=o),h!==I&&(I=h,{x:a,y:n,z:o}=s.inverse().transformPoint(N),v.x=a,v.y=n,v.z=o),N.x),n=N.z,{x:o,y:s,z:c}=s.transformPoint(v);N.x=o,N.y=s,N.z=c,h&&(Y=(o-a)/R,C=(c-n)/R),r&&(f=90-l/E),m=st(m,f,8*R),u+=(r-u)*G(10*R),F=lt(J(F,s,2),s,8*V(F-s)),void 0===T&&(Q=T=o,B=(x=F=s)+13,q=(w=c)+-36),T=J(T,o,et(K(.4,V(T-o)-1.5))),x=J(x,s,et(K(.4,V(x-s)-2.2))),w=J(w,c,et(K(.4,V(w-c)-1.5))),_?(Q=J(Q,o,666*g+18),B=J(B,F+1.5,666*g+18),q=J(q,c,666*g+18)):(Q=J(Q,T,2),B=J(B,K(x+13,6),2),1<((a=(q=J(q,w+-18,2))-w)<0?-a:a)&&(O=270+Math.atan2(a,n=Q-T)/E,z=90-Math.atan2(Math.hypot(a,n),B-x)/E)),z=K(z<87?z:87,-87),O=rt(O),1===h&&(W[9].l=N.x<-15&&N.z<0?1:0),(N.x<-25||N.z<109?-25:-9)>N.y&&b(),L[37].j=U.translate(N.x,F,N.z).rotateSelf(0,m),[38,39].map((t,a)=>{L[t].j=L[37].j.translate(0,u*G(.45*Math.sin(9.1*D+Math.PI*(a-1)-Math.PI/2))).rotateSelf(u*Math.sin(9.1*D+Math.PI*(a-1))*.25/E,0)})},b()})(),requestAnimationFrame(e),(()=>{let t=!0,a=()=>{S||!t?Ct.disconnect():Ct.connect(Yt.destination),b4.innerHTML="Music: "+t},r=(t=!1)=>{if(S!==t){S=t;try{t?(document.exitFullscreen().catch(()=>{}),document.exitPointerLock()):Ct.start()}catch{}_=0,document.body.className=t?"l m":"l",a(),gt()}},l,c,i,h,f,m,u,g,M,v,d,x;oncontextmenu=()=>!1,b3.onclick=()=>{confirm("Restart game?")&&(localStorage.DanteSP22="",location.reload())},b1.onclick=()=>{document.body.requestFullscreen(),r()},b2.onclick=()=>{document.body.requestFullscreen(),r(),_=1},b4.onclick=()=>{t=!t,a()},b5.onclick=()=>r(!0),onclick=t=>{x=1,S||(t.target===hC&&(X[5]=!0),_&&hC.requestPointerLock())},onkeyup=onkeydown=({code:t,target:a,type:e,repeat:l})=>{l||((l=!!e[5]&&a===document.body)&&("Escape"===t||"Enter"===t&&S)?S&&!x||r(!S):5===(e={KeyA:0,ArrowLeft:0,KeyW:1,ArrowUp:1,KeyD:2,ArrowRight:2,KeyS:3,ArrowDown:3,KeyE:5,Space:5,Enter:5}[t])?l&&(X[e]=1):X[e]=l)},onmousemove=({movementX:t,movementY:a})=>{_&&(t||a)&&(O+=.1*t,z+=.1*a)},hC.ontouchstart=x=>{if(!S){for(let{pageX:t,pageY:a,identifier:e}of x.changedTouches)_&&t>hC.clientWidth/2?void 0===g&&(M=0,m=t,u=a,g=e,v=O,d=z):void 0===h&&(f=0,c=t,i=a,h=e);l=Y}},hC.ontouchmove=l=>{if(!S)for(let{pageX:t,pageY:a,identifier:e}of l.changedTouches){var r,s,x,n,o;g===e&&(O=v+(t-m)/2.3,z=d+(a-u)/2.3,M=1),h===e&&(s=(e=(c-t)/20)<0?-e:e,x=(r=(i-a)/20)<0?-r:r,n=Math.atan2(r,e),o=G(Math.hypot(r,e)-.5),y=.2<s?Math.cos(n)*o:0,$=.2<x?Math.sin(n)*o:0,(y||$)&&(f=1),2<s&&(c=t+20*Math.sign(e)),2<x&&(i=a+20*Math.sign(r)))}},hC.ontouchend=a=>{let e;a.preventDefault();for(let t of a.changedTouches)t.identifier===g?(g=void 0,M||(e=1),M=0):t.identifier===h?(h=void 0,$=y=0,f||(e=1),f=0):e=1;e&&a.target===hC&&l&&.02<(a=Y-l)&&a<.7&&(X[5]=!0)},(document.onvisibilitychange=onblur=onresize=()=>{hC.width=innerWidth,hC.height=innerHeight,X.length=y=$=0,h=g=void 0,document.hidden&&r(!0)})(),r(!0)})()}},h=new Image;h.onload=h.onerror=e,h.src=St,(t=>{let Q=0,B=new Int32Array(10725888),e=()=>{let l=Yt.createBuffer(2,5362944,44100);for(let e=0;e<2;e++)for(let t=e,a=l.getChannelData(e);t<10725888;t+=2)a[t>>1]=B[t]/65536;Ct.buffer=l,Ct.loop=!0,bt(t)},l=()=>{let f=0,M,[v,d,p,b,I,A,P,S,x,y,Y,,C,F,z,j,t,w,a,k,T]=[[69,128,0,143,128,0,0,196,100,36,0,0,149,110,31,47,3,56,2,0,["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U","(059<59<A9<AE<AEHAEHMEHMQMQTY(Y","(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y","(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^","Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]","QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"]],[100,128,0,201,128,0,0,100,144,35,0,6,135,0,32,147,6,0,6,195,[".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5","-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5","*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6","5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5","5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"]],[255,116,85,255,116,37,14,64,144,73,99,0,136,15,32,0,0,66,6,0,["9(((9(((9(((9(((9(((9(((9(((9","9(((Q(((Q(((Q"]],[0,140,0,0,140,0,81,64,400,47,55,5,239,135,13,176,5,16,4,187,["9(9(9(9(9(9(9(999(9(9(9(999(9(9","9(9(9(9(9(999(9(((((Q"]],[221,128,64,210,128,64,255,64,144,73,79,7,195,15,21,20,0,9,3,64,["((((Q(((((((Q(((((((Q(((((((Q","Q((Q((Q((Q((Q((Q((((Q"]]][Q];y=y*y*4;for(let g of[5513,4562,3891]){let r=0,s=0,m=[],u,n,o,c=new Int32Array(768*g),i=Math.PI*2**(t-8)/g,h=a*g&-2;for(let l=0;l<=11;++l)for(let t=0,a=+"000001234556112341234556011111111112011111111112000001111112"[12*Q+l];t<32;++t){let e=(32*l+t)*g;for(var D,H=0;H<4;++H)if(u=0,a&&(u=T[a-1].charCodeAt(t+32*H)-40,u+=0<u?106:0),u){if(!(D=m[u])){let l=0,r=0,s,n,o=(D=u,g),c=u,i=Q<2?t=>t%1*2-1:wt,h=Q<2?Q<1?t=>t%1<.5?1:-1:t=>(t=t%1*4)<2?t-1:3-t:wt,f=new Int32Array(S+x+y);for(let a=0,e=0;S+x+y>a;++a,++e){let t=1;S>a?t=a/S:S+x>a||(t=(1-(t=(a-S-x)/y))*3**(-Y/16*t)),e<0||(e-=4*o,n=.00396*2**((c+d-256)/12),s=.00396*2**((c+I-256)/12)*(1+(Q?0:.0072))),f[a]=80*(i(l+=n*t**(p/32))*v+h(r+=s*t**(A/32))*b+(P?(2*Math.random()-1)*P:0))*t|0}D=m[D]=f}for(let t=0,a=2*e;D.length>t;++t,a+=2)c[a]+=D[t]}for(let t,a=0;g>a;++a)H=0,((t=c[D=2*(e+a)])||o)&&(n=.00308*C,1!==Q&&4!==Q||(n*=Math.sin(2**(t-9)/g*D*Math.PI*2)*k/512+.5),n=1.5*Math.sin(n),r+=n*s,M=(1-F/255)*(t-s)-r,s+=n*M,t=4===Q?s:3===Q?M:r,Q||(t=(t*=22e-5)<1?-1<t?Math.sin(t/4*Math.PI*2):-1:1,t/=22e-5),t*=z/32,o=1e-5<t*t,M=Math.sin(i*D)*j/512+.5,H=t*(1-M),t*=M),D<h||(H+=c[1+D-h]*w/255,t+=c[D-h]*w/255),B[f+D]+=c[D]=H,++D,B[f+D]+=c[D]=t}f+=c.length}bt(++Q<5?l:e)};bt(l)})(()=>{let l=(t,a,e)=>U.translate(t+Math.sin(D+2)/5,a+Math.sin(.8*D)/3,e).rotateSelf(2*Math.sin(D),Math.sin(.7*D),Math.sin(.9*D)),a=(bt(()=>{let a=0,l=[],s=[],n=[],o=[],c=new Map,i=new Int32Array(8),r=t=>{let{x:a,y:e,z:l}=h[t],r=(m[0]=a,m[1]=e,m[2]=l,c.get(t=""+(h.D?f:i)));return void 0!==r?(a=3*r,o[a]=(o[a++]+i[5])/2,o[a]=(o[a++]+i[6])/2,o[a]=(o[a]+i[7])/2):(c.set(t,r=c.size),s.push(a,e,l,m[3]),n.push(i[4]),o.push(i[5],i[6],i[7])),r},h,f=new Int32Array(i.buffer,0,5),m=new Float32Array(i.buffer);for(let t of L){for(h of(m[3]=40===t.H?-14:t.G&&t.H,t.s)){let{x:t,y:a,z:e}=ot(h);i[4]=0|h.A,i[5]=32767*t,i[6]=32767*a,i[7]=32767*e;for(let t=2,a=r(0),e=r(1);h.length>t;++t)l.push(a,e,e=r(t))}t.s=null,t.v=a,t.F=a=l.length}Z.b11(34962,Z.c1b()),Z.b2v(34962,new Float32Array(s),35044),Z.v7s(0,4,5126,!1,0,0),Z.b11(34962,Z.c1b()),Z.b2v(34962,new Int16Array(o),35044),Z.v7s(1,3,5122,!0,0,0),Z.b11(34962,Z.c1b()),Z.b2v(34962,new Uint32Array(n),35044),Z.v7s(2,4,5121,!0,0,0),Z.b11(34963,Z.c1b()),Z.b2v(34963,new Uint16Array(l),35044),Z.e3x(0),Z.e3x(1),Z.e3x(2),bt(e)}),g(11,t=>U.translate(Math.sin(t/10*Math.PI),t/10).rotate(+t).scale(1.0001-t/10,0,1-t/10))),s=g(10,t=>mt(ht(ft(18),a[t]).reverse(),ht(ft(18),a[t+1]),1)).flat(),n=d(v(m(u(20,1,1.15,1),U.translate(0,-3).scale(3.5,1,3.5),P(.7,.4,.25,.7)),m(u(20,1,1.3,1),U.translate(0,-2.5).scale(2.6,1,3),P(.7,.4,.25,.2)),m(u(),U.translate(4,-1.2).scale3d(2),P(.7,.4,.25,.3)))),o=d(v(m(u(),U.translate(0,-8).scale(6,15,2.2)),m(u(),U.translate(0,-14.1).scale(4,13,4)),m(u(20,1),U.translate(0,-1).rotate(90,0,90).scale3d(4)))),c=g(7,t=>m(u(6,1),U.translate(4*(t/6-.5),3).scale(.2,3,.2),P(.3,.3,.38))).flat();p(()=>b([tt.slice(1)],U.translate(-2).scale3d(3).rotate(90,0)),0),p(()=>{let t=(a,e,l)=>p(t=>{t.h=()=>U.translate(r()*Math.sin(3*a+D*a)*e),tt.map(({x:t,z:a})=>{b(u(11,1),U.translate(4*t,4,l+4*a).scale(.8,3,.8),P(.5,.3,.7,.6)),b(u(),U.translate(4*t,7,l+4*a).scale(1,.3),P(.5,.5,.5,.3))}),b(d(v(m(u(),U.translate(0,0,l).scale(5,1,5),P(.8,.8,.8,.3)),...[-1,1].map(t=>m(u(),U.translate(5*t,.2,l).rotate(-30*t).scale(4,1,2),P(.8,.8,.8,.3)))))),b(u(),U.translate(0,-3,l).scale(8,2,8),P(.4,.4,.4,.3))}),r=()=>{let t=W[2].i,a=1-W[4].i;return t<a?t:a},a=(p(t=>{t.h=()=>l(-12,4.2,40*T-66),b(n),I(U.translate(0,-3,4))}),I(U.translate(-5.4,1.5,-19).rotate(0,-90)),A(U.translate(-.5,2.8,-20),[0,0,2.5],[0,-3,2.5]),A(U.translate(0,2.8),[5,10,3],[-5,10,3],...ft(18).map(({x:t,z:a})=>[7*t,10*a,4.5-2*(t<0?-t:t)])),b(u(),U.translate(-5,-.2,-26).scale(3.2,1,2.5).skewX(3),P(.8,.8,.8,.2)),tt.map(({x:t,z:a})=>b(u(6),U.translate(3*t,3,15*a).scale(.7,4,.7),P(.6,.3,.3,.4))),[-23,22].map(t=>b(u(),U.translate(0,0,t).scale(3,1,8),P(.9,.9,.9,.2))),[-15,15].map((a,e)=>{b(u(),U.translate(0,6.3,a).scale(4,.3,1),P(.3,.3,.3,.4)),b(u(),U.translate(0,1,a).scale(3,.2,.35),P(.5,.5,.5,.3)),p(t=>{t.h=()=>U.translate(0,4.7*-W[e+1].g,a),b(c)})}),g(5,a=>g(2,t=>b(s,U.translate(18.5*(t-.5),0,4.8*a-9.5).rotate(0,180-180*t).scale(1.2,10,1.2),P(1,1,.8,.2)))),b(u(),U.translate(3,1.5,-20).scale(.5,2,5),P(.7,.7,.7,.2)),b(u(),U.translate(-3.4,-.2,-19).scale(2,1,1.5).rotate(0,-90),P(.75,.75,.75,.2)),b(u(5),U.translate(-5.4,0,-19).scale(2,1,2).rotate(0,-90),P(.6,.3,.3,.4)),b(u(),U.rotate(0,60).translate(14.8,-1.46,-1).rotate(-30).scale(4,.6,4.5),P(.8,.2,.2,.5)),b(d(v(M(m(u(6,0,0,.3),U.translate(8,-3,-4).scale(13,1,13),P(.7,.7,.7,.2)),m(u(6),U.translate(0,-8).scale(9,8,8),P(.4,.2,.5,.5)),m(u(6,0,0,.3),U.translate(0,-.92).scale(13,2,13),P(.8,.8,.8,.2))),m(u(5),U.scale(5,30,5),P(.4,.2,.6,.5)),m(u(5,0,1.5),U.translate(0,1).scale(4.5,.3,4.5),P(.7,.5,.9,.2)),m(u(),U.rotate(0,60).translate(14,.7,-1).rotate(-35).scale(2,2,2),P(.5,.5,.5,.5)),m(u(6),U.translate(15,-1.5,4).scale(3.5,1,3.5),P(.5,.5,.5,.5))))),p(t=>{t.h=()=>U.translate(0,.01<W[3].g?(5*Math.cos(1.5*D)+2)*W[3].i*(1-W[2].g)+-15*(1-W[3].g):-500,0),b(u(5),U.translate(0,-.2).scale(5,1,5),P(.6,.65,.7,.3)),I(U.translate(0,1.2))}),I(U.translate(15,-2,4)),t(.7,12,35),t(1,8.2,55),p(t=>{t.h=()=>U.translate(r()*Math.sin(D/1.5+2)*12),b(d(v(M(m(u(),U.scale(1.5,1,5),P(.9,.9,.9,.2)),m(u(6),U.scale(4,1,5),P(.9,.9,.9,.2)),m(u(),U.translate(0,-2).scale(2,3.2,1.9),P(.3,.8,.5,.5)),m(u(16,1,0,4),U.scale(1,1,1.5).rotate(0,90),P(.9,.9,.9,.2))),m(u(),U.scale(1.3,10,1.3),P(.2,.7,.4,.6)))),U.translate(0,0,45)),A(U.translate(0,2.8,45),[0,0,4.5])}),b(u(),U.translate(-18.65,-3,55).scale(2.45,1.4,2.7),P(.9,.9,.9,.2)),p(t=>{t.h=()=>U.translate(9.8*(1-r())),b(u(3),U.translate(-23,-1.7,55.8).scale(5,.7,8.3),P(.3,.6,.6,.2)),b(u(8),U.translate(-23,-2.2,66.5).scale(1.5,1.2,1.5),P(.8,.8,.8,.2)),b(u(),U.translate(-23,-3,55).scale(5.2,1.7,3),P(.5,.5,.5,.3)),b(u(),U.translate(-23,-2.2,62).scale(3,1,4),P(.5,.5,.5,.3)),I(U.translate(-23,-.5,66.5))}),p(t=>{t.h=()=>U.translate(0,G(1-5*r())*i(W[4].g,W[5].g)*Math.sin(1.35*D)*4),b(u(),U.translate(-22.55,-3,55).scale(1.45,1.4,2.7),P(.7,.7,.7,.2)),b(d(v(m(u(),U.scale(3,1.4,2.7)),m(u(),U.scale(1.2,8,1.2)))),U.translate(-33,-3,55),P(.7,.7,.7,.2))}),p(t=>{t.h=()=>U.translate(0,0,G(1-5*r())*i(W[4].g,W[5].g)*Math.sin(.9*D)*8),b(d(v(m(u(),U.translate(-27,-3,55).scale(3,1.4,2.7),P(.9,.9,.9,.2)),m(u(),U.translate(-27,-3,55).scale(1,3),P(.9,.9,.9,.2))))),b(u(),U.translate(-39,-3,55).scale(3,1.4,2.7),P(.9,.9,.9,.2))}),p(t=>{t.h=()=>U.translate(0,-6.5*W[4].i),b(u(6),U.translate(-44.5,0,55).rotate(90,90).rotate(0,90).scale(5.9,.5,5.9),P(.7,.7,.7,.4))}),I(U.translate(-55,-1.1,46).rotate(0,90)),b(u(6),U.translate(-61.3,-2.4,49).scale(3,1,5),P(.4,.6,.6,.3)),b(u(7),U.translate(-57,-2.6,46).scale(4,1,4),P(.8,.8,.8,.3)),d(M(m(u(),U.translate(0,-3).scale(11,1.4,3),P(.9,.9,.9,.2)),v(m(u(6),U.rotate(90).scale(6,8,6),P(.3,.6,.6,.3)),m(u(4,0,.01),U.translate(0,6).scale(12,2,.75).rotate(0,45),P(.3,.6,.6,.3)),m(u(6),U.rotate(90).scale(5,12,5),P(.3,.6,.6,.3)),...[5,0,-5].map(t=>m(u(5),U.translate(t,2.5).rotate(90,0,36).scale(1.8,10,1.8),P(.3,.6,.6,.3))))))),e=(b(a,U.translate(-53,0,55)),p(t=>{t.h=()=>U.translate(-75,(1-W[5].i)*(1-W[6].g)*3,55).rotate(180*(1-W[5].i)+k,0),b(a)},2),b(u(),U.translate(-88.3,-5.1,55).rotate(-30).scale(5,1.25,4.5),P(.7,.7,.7,.2)),b(u(3,0,-.5),U.translate(-88.4,-3.9,55).rotate(0,-90,17).scale(3,1.45,5.9),P(.8,.8,.8,.2)),b(d(v(M(m(u(),U.translate(-100,-2.5,55).scale(8,1,8),P(.8,.8,.8,.2)),m(u(),U.translate(-113,-2.6,55).scale(6.2,1.1,3).skewX(3),P(.8,.8,.8,.2)),m(u(),U.translate(-100,-2.6,70).scale(3,1.1,7),P(.8,.8,.8,.2)),m(u(),U.translate(-96,-2.6,73).rotate(0,45).scale(3,1.1,5),P(.8,.8,.8,.2)),m(u(6),U.translate(-88.79,-2.6,80.21).scale(6,1.1,6).rotate(0,15),P(.6,.6,.6,.3)),m(u(),U.translate(-100,-1.1,82.39).rotate(-15,0).scale(3,1.1,6),P(.8,.8,.8,.2)),m(u(),U.translate(-100,.42,92).scale(3,1.1,4.1),P(.8,.8,.8,.2))),m(u(8),U.translate(-100,-1,55).scale(7,.9,7),P(.3,.3,.3,.4)),m(u(8),U.translate(-100,-2,55).scale(4,.3,4),P(.4,.4,.4,.5)),m(u(8),U.translate(-100,-3,55).scale(.6,1,.6),P(.4,.4,.4,.5))))),A(U.translate(-100,.2,55),[0,0,7.5],[-8,0,3.5],[-12,0,3.5],[-15,0,3.5]),A(U.translate(-89,.2,80),[0,0,6]),b(d(v(m(u(),U.translate(-100,1,63).scale(7.5,4),P(.5,.5,.5,.4)),m(u(),U.translate(-100,0,70).scale(2,2,10),P(.5,.5,.5,.4)),m(u(20,1),U.translate(-100,2,70).scale(2,2,10).rotate(90,0),P(.5,.5,.5,.4))))),p(t=>{t.h=()=>U.translate(-99.7,5.3*-W[6].g-2,63.5),b(c)}),tt.map(({x:a,z:e})=>{b(u(6),U.translate(7*a-100,-3,7*e+55).scale(1,8.1),P(.6,.15,.15,.8)),[4,-.4].map(t=>b(u(6),U.translate(7*a-100,t,7*e+55).scale(1.3,.5,1.3),P(.4,.2,.2,.8)))}),g(7,t=>{b(u((23*t+1)%5+5,0,.55),U.translate(5*Math.sin(t)-101+t,-2.3-t,44.9-2.8*t).scaleSelf(5+t/2,1+t/6,5+t/3),P(.5-t/17,.5-(1&t)/9,.6,.3))}),b(u(),U.translate(-87,-9.5,24).scale(7,1,3),P(.4,.5,.6,.4)),b(u(4),U.translate(-86,-9.2,27).scale(5,1,5),P(.5,.6,.7,.3)),b(u(12,1),U.translate(-86,-9,31).scale(1.5,1,1.5),P(.3,.3,.4,.1)),I(U.translate(-86,-7.5,31)),p(t=>{t.h=()=>U.translate(0,3.5*(1-K(W[6].g,W[7].g))+i(W[7].i,W[6].i)*Math.sin(D)*5),[0,12,24].map(t=>b(u(),U.translate(t-76.9,t/-13-10,24).scale(2.8,1.5,3),P(.2,.5,.6,.2)))}),p(t=>{t.h=()=>U.translate(0,i(W[7].i,W[6].i)*Math.sin(D+3)*6,6*Math.sin(.6*D+1)*i(W[7].i,W[6].i)),[6,18].map(t=>b(u(),U.translate(t-76.9,t/-13-10,24).scale(2.8,1.5,3),P(.1,.4,.5,.2)))}),b(d(v(M(m(u(),U.scale(11,1,13),P(.3,.4,.6,.3)),m(u(5),U.translate(0,0,-7).scale(2,1.2,2),P(.2,.4,.7,.3)),m(u(5),U.scale(9,1.2,9),P(0,.2,.3,.5))),m(u(5),U.scale(5.4,5,5.4),P(0,.2,.3,.5)))),U.translate(-38.9,-11.3,17)),I(U.translate(-38.9,-9.6,10)),p(t=>{t.h=()=>U.translate(0,-7.3*W[7].i),b(d(v(M(m(u(5),U.translate(0,2).scale(5,7,5).skewY(8),P(.2,.4,.5,.5)),m(u(5),U.translate(0,6).scale(1.1,7,1.1).skewY(-8),P(.25,.35,.5,.5)),m(u(5),U.translate(0,9).scale(.6,7,.6).skewY(8),P(.35,.3,.5,.5))),m(u(5),U.translate(0,5).scale(1.5,1.5,8).rotate(90,0,35),P(.2,.4,.5,.5)))),U.translate(-38.9,-11.3,17)),A(U.translate(-39.1,-.6,17).rotate(11),...ft(15).map(({x:t,z:a})=>[3*t,3*a,1.2]))}),tt.map(({x:a,z:e})=>{b(u(14,1),U.translate(9*a-38.9,-7.3,11*e+17).scale(1,4),P(.25,.25,.25,1)),[1.5,8].map(t=>b(u(17,1),U.translate(9*a-38.9,-7.3,11*e+17).translate(0,t-4).scale(1.5,.5,1.5),P(.6,.6,.6,.3)))}),b(d(v(M(m(u(6),U.translate(0,0,-36).scale(15,1.2,15),P(.7,.7,.7,.3)),m(u(),U.translate(0,0,-18).scale(4,1.2,6),P(.45,.4,.6,.3))),...g(6,a=>g(6,t=>m(u(6),U.translate(4.6*t-12+2*(1&a),0,4.6*a-50+2*Math.sin(4*t)).scale(2,5,2),P(.7,.7,.7,.3)))).flat())),U.translate(-38.9,-11.3,17)),A(U.translate(-38.9,-8.4,-21),[-7,-2.5,6],[6,-3,6],[0,-5,7]),b(u(5),U.translate(-84,-2,85).scale(4,.8,4).rotate(0,10),P(.8,.1,.25,.4)),I(U.translate(-84,-.5,85).rotate(0,45)),p(t=>{t.h=()=>l(-123,1.4,55+-65*x),b(n),I(U.translate(0,-3,-4).rotate(0,180))}),A(U.translate(-115,.2,-12),[0,0,3.5]),d(v(m(u(),U.translate(0,-.5,1).scale(1.15,1.2,6.5),P(.25,.25,.35,.3)),m(u(3),U.translate(0,0,-5.5).scale(3,2),P(.6,.3,.4,.3)),...[-1.2,1.2].map(t=>m(u(),U.translate(t,-.5,1).scale(.14,.3,6.5),P(.7,.2,0,.3))))));p(t=>{t.h=()=>U.translate(0,-2,i(W[10].g,W[11].g)*V(Math.sin(1.1*D))*-8.5+10),g(2,t=>b(e,U.translate(9*t-110+(1&t),1.7,-12)))}),p(t=>{t.h=()=>U.translate(0,-2,i(W[10].g,W[11].g)*V(Math.sin(2.1*D))*-8.5+10),g(2,t=>b(e,U.translate(9*(t+2)-110+(1&t),1.7,-12)))}),p(t=>{t.h=()=>U.translate(0,-2,-8.5*K((1-W[10].g)*(1-i(W[10].g,W[11].g)),i(W[10].g,W[11].g)*V(Math.sin(1.5*D)))+10),g(3,t=>b(e,U.translate(9*t-106,1.7,-12)))}),b(d(v(M(m(u(),U.translate(26.5,-1.6,10).scale(17,2.08,3)),m(u(),U.translate(26.5,-.6,10).scale(17,2,.5))),...g(4,t=>m(u(),U.translate(13+9*t+(1&t),-.8,9).scale(1.35,1.35,9))),...g(3,t=>m(u(),U.translate(17+9*t,-.8,9).scale(1.35,1.35,9))))),U.translate(-123,0,-12),P(.5,.5,.6,.2)),b(u(5),U.translate(-113.6,-1.6,-2).rotate(0,90,90).scale(1.5,.2,1.5),P(.25,.25,.35,1)),I(U.translate(-116,-1.4,-18).rotate(0,180)),b(u(),U.translate(-116,-2.6,-12).scale(3.2,1.1,4).skewX(3),P(.8,.8,.8,.2)),b(u(6),U.translate(-116,-2.6,-16.5).scale(3.2,.8,3),P(.6,.5,.7,.2)),g(3,t=>{b(o,U.translate(12*t-109,-9,-12),P(.6,.6,.6,.3)),b(o,U.translate(-77,-9,-12*t-20).rotate(0,90),P(.6,.6,.6,.3))}),b(d(v(m(u(12),U.translate(-77,-13.9,-12).scale(4,18.2,4),P(.7,.7,.7,.2)),m(u(),U.translate(-79,0,-12).scale(3.5,2.2,1.3),P(.4,.5,.6,.2)),m(u(),U.translate(-77,0,-14).scale(1.5,2.2,2),P(.4,.5,.6,.2)),m(u(12),U.translate(-77,2.8,-12).scale(3,5,3),P(.4,.5,.6,.2))))),b(u(),U.translate(-115.5,-17,-12).scale(.5,15,2.2),P(.6,.6,.6,.3)),b(u(),U.translate(-77,-17,-50.5).scale(2.2,15,.5),P(.6,.6,.6,.3)),b(u(),U.translate(-84.9,-4.3,-40).rotate(12).scale(6,1,3),P(.6,.6,.6,.3)),b(u(9),U.translate(-98,-5.8,-40).scale(2.5,.9,2.5),P(.5,.5,.5,.3)),b(d(v(m(u(),U.translate(-93,-5.8,-40).scale(9,1,5),P(.8,.8,.8,.1)),m(u(9),U.translate(-98,-5.8,-40).scale(3,8,3),P(.7,.7,.7,.2))))),I(U.translate(-98,-4.4,-40).rotate(0,90)),A(U.translate(-93,-3,-40).rotate(4),[0,-2,3.5],[0,2,3.5]),b(d(v(M(m(u(6,0,0,.6),U.translate(-100,.7,105.5).scale(8,1,11),P(.7,.7,.7,.2)),m(u(),U.translate(-101.5,.7,93.5).scale(10.5,1,2),P(.7,.7,.7,.2))),m(u(5),U.translate(-100,.7,113).scale(4,3,4),P(.7,.7,.7,.2))))),g(4,a=>p(t=>{t.h=()=>{let t=i(W[8].i,W[12].i);return U.translate((2<a?2*(1-t)+t:0)-100,t*Math.sin(1.3*D+1.7*a)*(3+a/3)+.7,115+(1&a?-1:1)*(1-W[8].i)*(1-W[12].i)*-7+(t<.05?.05:t)*Math.cos(1.3*D+7*a)*(4-2*(1-a/3)))},b(u(6),U.translate(-14.6-4.8*a-(2<a?2:0),-a/2.3,-21.5).scale(2.6,1,2.5),P(.5-a/8,a/12+.5,.7,.3))})),p(t=>{t.h=()=>{let t=i(W[8].i,W[12].i);return U.translate(2.5*(1-t)-139.7,-3*(1-W[8].g)+t*Math.sin(.8*D)*-1-1.8,93.5).rotateSelf(Math.cos(1.3*D)*(3*t+3),0)},b(d(v(m(u(10),U.scale(6,2,6),P(.1,.6,.5,.3)),m(u(10),U.scale(3.3,6,3.3),P(.1,.6,.5,.5))))),b(u(15,1),U.translate(-7.5).rotate(0,90).scale(3,2.3,3),P(.4,.4,.4,.3)),b(u(10),U.translate(-7.5).rotate(0,90).scale(2,2.5,2),P(.3,.8,.7,.3)),b(u(5),U.translate(-7.5).rotate(0,90).scale(1,3),P(.5,.5,.5,.5)),I(U.translate(-7.5).rotate(0,90).translate(0,3.4).rotate(0,180)),[-1,1].map(t=>b(s,U.rotate(90*-t,180,90).translate(0,5).rotate(40).scale(1.3,10,1.3),P(1,1,.8,.2))),A(U.translate(-5,4),[0,-1.2,1.7],[0,1.2,1.7])}),[-1,1].map(a=>{b(u(12,1),U.translate(-7.5*a-100,3.7,96).scale(.8,4,.8),P(.6,.24,.2,.5)),[7.2,1.5].map(t=>b(u(15,1),U.translate(-7.5*a-100,t+.7,96).scale(1.1,.5,1.1),P(.5,.24,.2,.4))),b(s,U.translate(-5*a-100,1.7,114.5).scale(1.2,10,1.2).rotate(0,90*a-90),P(1,1,.8)),b(d(v(m(u(),U.translate(-4*a,3.5,-.5).scale(4,4,.7),P(.5,.5,.5,.4)),m(u(),U.scale(3,3,10),P(.6,.24,.2,.5)),m(u(28,1),U.translate(0,3,-5).scale(3,4,10).rotate(90,0),P(.6,.24,.2,.5)),m(u(5),U.translate(-5.3*a,7).rotate(90,0).scale(1.7,5,1.7),P(.6,.24,.2,.5)),m(u(5),U.translate(-5.3*a,3.8).rotate(90,0,35).scale(.75,5,.75),P(.6,.24,.2,.5)))),U.translate(a-100,.7,97))}),p(t=>{t.h=()=>U.translate(-100,.6-6*W[12].g,96.5).scale(.88,1.2),b(c)}),b(d(v(m(u(),U.translate(-82.07,.8,106).scale(11,.9,2.2),P(.7,.7,.7,.1)),m(u(45,1),U.translate(-81,.7,106).scale3d(7.7),P(.7,.7,.7,.1))))),p(t=>{t.h=()=>U.translate(-81,.6,106).rotate(0,40+C),b(d(v(m(u(45,1),U.scale(7.5,1,7.5),P(.45,.45,.45,.2)),m(u(),U.translate(0,0,-5.5).scale(1.5,3,2.7),P(.45,.45,.45,.2))))),b(u(8),U.translate(0,2).scale(3,1.5,3).rotate(0,22),P(.7,.7,.7,.1)),b(u(5),U.translate(0,2).scale(1,2),P(.3,.3,.3,.2)),A(U.translate(0,3),...ft(10).map(({x:t,z:a})=>[5.6*t,5.6*a,2.5]))}),p(t=>{t.h=()=>U.translate(-65.8,.8,106).rotate(0,j),[-1,1].map(t=>b(s,U.rotate(0,90).translate(-5*t,1,-.5).scale(1.2,10,1.2).rotate(0,90*t+90),P(1,1,.8))),b(d(v(m(u(28,1),U.translate(0,2).scale(7.5,1,7.5),P(.35,0,0,.3)),m(u(),U.scale(9,5,2),P(.3,0,0,.3))))),b(m(u(28,1),U.scale(7.5,1,7.5),P(.45,.45,.45,.2))),b(m(u(5),U.translate(0,1).scale(1,.2),P(.3,.3,.3,.2)))}),p(t=>{t.h=()=>U.translate(-50.7,.8,106).rotate(0,180-j),b(d(v(m(u(28,1),U.translate(0,2).scale(7.5,1,7.5),P(.35,0,0,.3)),m(u(),U.translate(7).scale(9,5,2),P(.3,0,0,.3)),m(u(),U.translate(0,0,7).scale(2,5,9),P(.3,0,0,.3))))),b(m(u(28,1),U.scale(7.5,1,7.5),P(.45,.45,.45,.2))),b(m(u(5),U.translate(0,1).scale(1,.2),P(.3,.3,.3,.2)))}),p(t=>{t.h=()=>U.translate(-50.7,.8,91).rotate(0,270+j),b(d(v(m(u(28,1),U.translate(0,2).scale(7.5,1,7.5),P(.35,0,0,.3)),m(u(),U.translate(7).scale(9,5,2),P(.3,0,0,.3)),m(u(),U.translate(0,0,-7).scale(2,5,9),P(.3,0,0,.3))))),b(m(u(28,1),U.scale(7.5,1,7.5),P(.45,.45,.45,.2))),b(m(u(5),U.translate(0,1).scale(1,.2),P(.3,.3,.3,.2)))}),b(u(),U.translate(-58,1,106).scale(2,.65,2),P(.7,.7,.7,.2)),b(u(),U.translate(-50.7,1,99).scale(2,.65,1),P(.7,.7,.7,.2)),b(u(),U.translate(-42,.4,91).scale(5,1,2.5),P(.7,.7,.7,.3)),b(u(),U.translate(-34.2,.4,91).scale(3,1,3),P(.7,.7,.7,.3)),I(U.translate(-34,2.7,96).rotate(-12,0)),b(u(5),U.translate(-34,.2,96).scale(3,2,4).rotate(-20,0),P(.2,.5,.5,.6)),[P(.1,.55,.45,.2),P(.2,.5,.5,.3),P(.3,.45,.55,.4)].map((a,e)=>p(t=>{t.h=()=>U.translate(0,(1-W[13].i)*(1-W[14].i)*(e?0:3)+i(W[13].i,W[14].i)*Math.sin(1.5*D+1.5*e)*4),b(u(),U.translate(-23.5,.5,91+6.8*e).scale(1===e?2:3.3,1,3.3),a),2===e&&b(u(),U.translate(-29.1,.4,91).scale(2.1,1,3),P(.7,.7,.7,.3)),1===e&&b(u(),U.translate(-16.1,.5,103.5).rotate(-3.5).scale(3.9,.8,2).skewX(-1),P(.6,.6,.7,.3))})),[-1,1].map(t=>b(s,U.translate(-8*t,1,85).scale(1.2,10,1.2).rotate(0,90*t+90),P(1,1,.8))),[8,-6.1].map((a,e)=>g(3,t=>b(o,U.translate(6*t-6,a-(1&t),111-.2*(1&t)-e),1&t?P(.5,.5,.5,.3):P(.35,.35,.35,.5)))),b(d(v(m(u(6,0,0,.3),U.translate(0,-.92,95).scale(14,2,14),P(.8,.8,.8,.2)),m(u(5),U.translate(0,0,95).scale3d(6),P(.3,.3,.3,.5))))),I(U.translate(0,1.7,82).rotate(0,180)),b(u(5),U.translate(0,-15.7,82).scale(2.5,17,2.5).rotate(0,35),P(.5,.3,.3,.4)),b(u(6),U.translate(0,16,121).scale(2.5,1,2.1).rotate(0,90),P(.5,.6,.7,.3)),b(u(),U.translate(0,16,129).scale(1.5,1,2),P(.5,.6,.7,.3)),b(u(7),U.translate(0,16.2,133).scale(5,1,5),P(.4,.5,.6,.4)),b(d(v(M(m(u(),U.translate(0,16,110.5).scale(12,1,3),P(.5,.3,.3,.4)),m(u(),U.translate(0,16,111).scale(3,1,3.8),P(.5,.3,.3,.4))),m(u(5),U.translate(0,16,103.5).scale(5.5,5,5.5),P(.5,.3,.3,.4))))),p(t=>{t.h=()=>{let t=Math.sin(D);return U.translate(-2*t).rotate(25*t)},b(u(3),U.translate(0,-3,118.8).scale(.8,.8,18).rotate(90,0,60),P(.5,.3,.3,.4)),[22,30].map(t=>{b(u(6),U.translate(0,16,t+95).scale(3,1,2.3).rotate(0,90),P(.7,.7,.7,.4)),b(u(),U.translate(0,6.2,t+95).scale(.5,11,.5),P(.5,.3,.3,.4))})}),p(t=>{t.h=()=>{let t=i(i((W[14].g+W[14].i)/2,W[13].i),(W[15].g+W[15].i)/2);return U.translate(0,16*t,8.5*G(2*t-1)+95)},b(u(5),U.scale(5,1.1,5),P(.5,.3,.3,.4)),b(u(5),U.scale(5.5,.9,5.5),P(.25,.25,.25,.4)),I(U.translate(0,1.5,-1).rotate(0,180))}),A(U.translate(0,3,95),...ft(9).map(({x:t,z:a})=>[9*t,9*a,4])),A(U.translate(0,19,134),[0,0,3.5])}),p(()=>{[0,180].map(t=>b(s,U.rotate(0,t).translate(.2,1.32).rotate(-30).scale(.2,.6,.2),P(1,1,.8))),b(ut(20),U.translate(0,1).scale(.5,.5,.5),P(1,.3,.4));let a=m(d(v(u(15,1),m(u(),U.translate(0,0,1).scale(2,2,.5)))),U.rotate(-90,0).scale(.1,.05,.1),P(.3,.3,.3));[-1,1].map(t=>b(a,U.translate(.2*t,1.2,.4).rotate(0,20*t,20*t))),b(u(),U.translate(0,.9,.45).scale(.15,.02,.06),P(.3,.3,.3)),b(ut(20),U.scale(.7,.8,.55),P(1,.3,.4))}),[-1,1].map(t=>p(()=>{b(u(10,1),U.translate(.3*t,-.8).scale(.2,.7,.24),P(1,.3,.4))})),p(()=>{b(u(6,1),U.scale(.13,1.4,.13),P(.3,.3,.5,.1)),b(u(8,1),U.translate(0,1).scale(.21,.3,.21),P(1,.5,.2)),b(u(3),U.translate(0,-1).rotate(90,90).scale(.3,.4,.3),P(.2,.2,.2,.1))},0),p(()=>{b(u(6).slice(0,-1),U.scale(.77,1,.77),P(1,.3,.5))},0),p(()=>{b(ut(30,24,(t,a,e)=>{let l=a/24,r=t*Math.PI*2/30,s=l**.6*Math.PI/2;return t=l*l*Math.sin(t*Math.PI*14/30)/4,23===a?{x:e.D=0,y:-.5,z:0}:{x:Math.cos(r)*Math.sin(s),y:Math.cos(l*Math.PI)-l-t,z:Math.sin(r)*Math.sin(s)+Math.sin(t*Math.PI*2)/4}}),U.scale3d(.7),P(1,1,1)),[-1,1].map(t=>b(ut(12),U.translate(.16*t,.4,-.36).scale3d(.09)))},0)})});