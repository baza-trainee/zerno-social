var t;(0,(t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea23d).register)("khSnF",function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(e.exports,"default",{get:function(){return M},set:void 0,enumerable:!0,configurable:!0});var i=t("ecaIk"),n=function(){if("u">typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),o={toTextLines:function(t){var e,r=[];for(t=[].concat(t);t.length;)"string"==typeof(e=t.pop())?r.unshift.apply(r,e.split(`
`)):Array.isArray(e)?t.push.apply(t,e):(0,i.i)(t)||r.unshift(""+e);return r},textSize:function(t,e,r){var i,n=[].concat(e),o=n.length,a=t.font,l=0;for(t.font=r.string,i=0;i<o;++i)l=Math.max(t.measureText(n[i]).width,l);return t.font=a,{height:o*r.lineHeight,width:l}},bound:function(t,e,r){return Math.max(t,Math.min(e,r))},arrayDiff:function(t,e){var r,i,n,o,a=t.slice(),l=[];for(r=0,n=e.length;r<n;++r)o=e[r],-1===(i=a.indexOf(o))?l.push([o,1]):a.splice(i,1);for(r=0,n=a.length;r<n;++r)l.push([a[r],-1]);return l},rasterize:function(t){return Math.round(t*n)/n}};function a(t,e){var r=e.x,i=e.y;if(null===r)return{x:0,y:-1};if(null===i)return{x:1,y:0};var n=t.x-r,o=t.y-i,a=Math.sqrt(n*n+o*o);return{x:a?n/a:0,y:a?o/a:-1}}function l(t,e,r){var i=0;return t<r.left?i|=1:t>r.right&&(i|=2),e<r.top?i|=8:e>r.bottom&&(i|=4),i}function s(t,e){var r,i,n=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var r,i,n,o=t.x0,a=t.y0,s=t.x1,u=t.y1,h=l(o,a,e),c=l(s,u,e);!(!(h|c)||h&c);)8&(r=h||c)?(i=o+(s-o)*(e.top-a)/(u-a),n=e.top):4&r?(i=o+(s-o)*(e.bottom-a)/(u-a),n=e.bottom):2&r?(n=a+(u-a)*(e.right-o)/(s-o),i=e.right):1&r&&(n=a+(u-a)*(e.left-o)/(s-o),i=e.left),r===h?h=l(o=i,a=n,e):c=l(s=i,u=n,e);return{x0:o,x1:s,y0:a,y1:u}}(o,e.area)),"start"===n?(r=o.x0,i=o.y0):"end"===n?(r=o.x1,i=o.y1):(r=(o.x0+o.x1)/2,i=(o.y0+o.y1)/2),function(t,e,r,i,n){switch(n){case"center":r=i=0;break;case"bottom":r=0,i=1;break;case"right":r=1,i=0;break;case"left":r=-1,i=0;break;case"top":r=0,i=-1;break;case"start":r=-r,i=-i;break;case"end":break;default:n*=Math.PI/180,r=Math.cos(n),i=Math.sin(n)}return{x:t,y:e,vx:r,vy:i}}(r,i,t.vx,t.vy,e.align)}var u={arc:function(t,e){var r=(t.startAngle+t.endAngle)/2,i=Math.cos(r),n=Math.sin(r),o=t.innerRadius,a=t.outerRadius;return s({x0:t.x+i*o,y0:t.y+n*o,x1:t.x+i*a,y1:t.y+n*a,vx:i,vy:n},e)},point:function(t,e){var r=a(t,e.origin),i=r.x*t.options.radius,n=r.y*t.options.radius;return s({x0:t.x-i,y0:t.y-n,x1:t.x+i,y1:t.y+n,vx:r.x,vy:r.y},e)},bar:function(t,e){var r=a(t,e.origin),i=t.x,n=t.y,o=0,l=0;return t.horizontal?(i=Math.min(t.x,t.base),o=Math.abs(t.base-t.x)):(n=Math.min(t.y,t.base),l=Math.abs(t.base-t.y)),s({x0:i,y0:n+l,x1:i+o,y1:n,vx:r.x,vy:r.y},e)},fallback:function(t,e){var r=a(t,e.origin);return s({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:r.x,vy:r.y},e)}},h=o.rasterize,c=function(t,e,r,i){this._config=t,this._index=i,this._model=null,this._rects=null,this._ctx=e,this._el=r};(0,i.m)(c.prototype,{_modelize:function(t,e,r,n){var a,l=this._index,s=(0,i.t)((0,i.r)([r.font,{}],n,l)),h=(0,i.r)([r.color,i.d.color],n,l);return{align:(0,i.r)([r.align,"center"],n,l),anchor:(0,i.r)([r.anchor,"center"],n,l),area:n.chart.chartArea,backgroundColor:(0,i.r)([r.backgroundColor,null],n,l),borderColor:(0,i.r)([r.borderColor,null],n,l),borderRadius:(0,i.r)([r.borderRadius,0],n,l),borderWidth:(0,i.r)([r.borderWidth,0],n,l),clamp:(0,i.r)([r.clamp,!1],n,l),clip:(0,i.r)([r.clip,!1],n,l),color:h,display:t,font:s,lines:e,offset:(0,i.r)([r.offset,4],n,l),opacity:(0,i.r)([r.opacity,1],n,l),origin:function(t,e){var r=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var i=r.getBasePixel();return t.horizontal?{x:i,y:null}:{x:null,y:i}}(this._el,n),padding:(0,i.a)((0,i.r)([r.padding,4],n,l)),positioner:(a=this._el)instanceof i.A?u.arc:a instanceof i.P?u.point:a instanceof i.B?u.bar:u.fallback,rotation:(0,i.r)([r.rotation,0],n,l)*(Math.PI/180),size:o.textSize(this._ctx,e,s),textAlign:(0,i.r)([r.textAlign,"start"],n,l),textShadowBlur:(0,i.r)([r.textShadowBlur,0],n,l),textShadowColor:(0,i.r)([r.textShadowColor,h],n,l),textStrokeColor:(0,i.r)([r.textStrokeColor,h],n,l),textStrokeWidth:(0,i.r)([r.textStrokeWidth,0],n,l)}},update:function(t){var e,r,n,a,l,s,u,h,c,d,f=null,x=null,y=this._index,v=this._config,b=(0,i.r)([v.display,!0],t,y);b&&(h=t.dataset.data[y],c=(0,i.v)((0,i.c)(v.formatter,[h,t]),h),(d=(0,i.i)(c)?[]:o.toTextLines(c)).length&&(r=(e=f=this._modelize(b,d,v,t)).borderWidth||0,n=e.padding,a=e.size.height,s=-(l=e.size.width)/2,u=-a/2,x={frame:{x:s-n.left-r,y:u-n.top-r,w:l+n.width+2*r,h:a+n.height+2*r},text:{x:s,y:u,w:l,h:a}})),this._model=f,this._rects=x},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var r,i,n,a,l,s=t.ctx,u=this._model,c=this._rects;this.visible()&&(s.save(),u.clip&&(l=u.area,s.beginPath(),s.rect(l.left,l.top,l.right-l.left,l.bottom-l.top),s.clip()),s.globalAlpha=o.bound(0,u.opacity,1),s.translate(h(e.x),h(e.y)),s.rotate(u.rotation),r=c.frame,i=u.backgroundColor,n=u.borderColor,a=u.borderWidth,(i||n&&a)&&(s.beginPath(),function(t,e,r,i,n,o){var a=Math.PI/2;if(o){var l=Math.min(o,n/2,i/2),s=e+l,u=r+l,h=e+i-l,c=r+n-l;t.moveTo(e,u),s<h&&u<c?(t.arc(s,u,l,-Math.PI,-a),t.arc(h,u,l,-a,0),t.arc(h,c,l,0,a),t.arc(s,c,l,a,Math.PI)):s<h?(t.moveTo(s,r),t.arc(h,u,l,-a,a),t.arc(s,u,l,a,Math.PI+a)):u<c?(t.arc(s,u,l,-Math.PI,0),t.arc(s,c,l,0,Math.PI)):t.arc(s,u,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(e,r)}else t.rect(e,r,i,n)}(s,h(r.x)+a/2,h(r.y)+a/2,h(r.w)-a,h(r.h)-a,u.borderRadius),s.closePath(),i&&(s.fillStyle=i,s.fill()),n&&a&&(s.strokeStyle=n,s.lineWidth=a,s.lineJoin="miter",s.stroke())),function(t,e,r,i){var n,o,a,l,s,u,c=i.textAlign,d=i.color,f=!!d,x=i.font,y=e.length,v=i.textStrokeColor,b=i.textStrokeWidth,_=v&&b;if(!(!y||!f&&!_))for(n=r,o=x.lineHeight,a=n.w,l=n.x,s=n.y+o/2,"center"===c?l+=a/2:("end"===c||"right"===c)&&(l+=a),r={h:o,w:a,x:l,y:s},t.font=x.string,t.textAlign=c,t.textBaseline="middle",t.shadowBlur=i.textShadowBlur,t.shadowColor=i.textShadowColor,f&&(t.fillStyle=d),_&&(t.lineJoin="round",t.lineWidth=b,t.strokeStyle=v),u=0,y=e.length;u<y;++u)!function(t,e,r){var i=t.shadowBlur,n=r.stroked,o=h(r.x),a=h(r.y),l=h(r.w);n&&t.strokeText(e,o,a,l),r.filled&&(i&&n&&(t.shadowBlur=0),t.fillText(e,o,a,l),i&&n&&(t.shadowBlur=i))}(t,e[u],{stroked:_,filled:f,w:r.w,x:r.x,y:r.y+r.h*u})}(s,u.lines,c.text,u),s.restore())}});var d=Number.MIN_SAFE_INTEGER||-9007199254740991,f=Number.MAX_SAFE_INTEGER||9007199254740991;function x(t,e,r){var i=Math.cos(r),n=Math.sin(r),o=e.x,a=e.y;return{x:o+i*(t.x-o)-n*(t.y-a),y:a+n*(t.x-o)+i*(t.y-a)}}function y(t,e){var r,i,n,o,a,l=f,s=d,u=e.origin;for(r=0;r<t.length;++r)n=(i=t[r]).x-u.x,o=i.y-u.y,l=Math.min(l,a=e.vx*n+e.vy*o),s=Math.max(s,a);return{min:l,max:s}}function v(t,e){var r=e.x-t.x,i=e.y-t.y,n=Math.sqrt(r*r+i*i);return{vx:(e.x-t.x)/n,vy:(e.y-t.y)/n,origin:t,ln:n}}var b=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function _(t,e,r){var i=e.positioner(t,e),n=i.vx,o=i.vy;if(!n&&!o)return{x:i.x,y:i.y};var a=r.w,l=r.h,s=e.rotation,u=Math.abs(a/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),h=Math.abs(a/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),c=1/Math.max(Math.abs(n),Math.abs(o));return u*=n*c,h*=o*c,u+=e.offset*n,h+=e.offset*o,{x:i.x+u,y:i.y+h}}(0,i.m)(b.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,r){this._rotation=r,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=x(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,r,i,n=this._points(),o=t._points(),a=[v(n[0],n[1]),v(n[0],n[3])];for(this._rotation!==t._rotation&&a.push(v(o[0],o[1]),v(o[0],o[3])),e=0;e<a.length;++e)if(r=y(n,a[e]),i=y(o,a[e]),r.max<i.min||i.max<r.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,r=this.center();return[x({x:t.x,y:t.y},r,e),x({x:t.x+t.w,y:t.y},r,e),x({x:t.x+t.w,y:t.y+t.h},r,e),x({x:t.x,y:t.y+t.h},r,e)]}});var p={prepare:function(t){var e,r,i,n,o,a=[];for(e=0,i=t.length;e<i;++e)for(r=0,n=t[e].length;r<n;++r)o=t[e][r],a.push(o),o.$layout={_box:new b,_hidable:!1,_visible:!0,_set:e,_idx:o._index};return a.sort(function(t,e){var r=t.$layout,i=e.$layout;return r._idx===i._idx?i._set-r._set:i._idx-r._idx}),this.update(a),a},update:function(t){var e,r,i,n,o,a=!1;for(e=0,r=t.length;e<r;++e)n=(i=t[e]).model(),(o=i.$layout)._hidable=n&&"auto"===n.display,o._visible=i.visible(),a|=o._hidable;a&&function(t){var e,r,i,n,o,a,l;for(e=0,r=t.length;e<r;++e)(n=(i=t[e]).$layout)._visible&&(l=new Proxy(i._el,{get:(t,e)=>t.getProps([e],!0)[e]}),o=i.geometry(),a=_(l,i.model(),o),n._box.update(a,o,i.rotation()));!function(t,e){var r,i,n,o;for(r=t.length-1;r>=0;--r)for(n=t[r].$layout,i=r-1;i>=0&&n._visible;--i)(o=t[i].$layout)._visible&&n._box.intersects(o._box)&&e(n,o)}(t,function(t,e){var r=t._hidable,i=e._hidable;r&&i||i?e._visible=!1:r&&(t._visible=!1)})}(t)},lookup:function(t,e){var r,i;for(r=t.length-1;r>=0;--r)if((i=t[r].$layout)&&i._visible&&i._box.contains(e))return t[r];return null},draw:function(t,e){var r,i,n,o,a,l;for(r=0,i=e.length;r<i;++r)(o=(n=e[r]).$layout)._visible&&(a=n.geometry(),l=_(n._el,n.model(),a),o._box.update(l,a,n.rotation()),n.draw(t,l))}},g="$datalabels",m="$default";function w(t,e,r,n){if(e){var o,a=r.$context,l=r.$groups;e[l._set]&&(o=e[l._set][l._key])&&!0===(0,i.c)(o,[a,n])&&(t[g]._dirty=!0,r.update(a))}}var M={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,i.i)(t))return null;var e,r,n,o=t;if((0,i.b)(t)){if((0,i.i)(t.label)){if((0,i.i)(t.r))for(o="",e=Object.keys(t),n=0,r=e.length;n<r;++n)o+=(0!==n?", ":"")+e[n]+": "+t[e[n]];else o=t.r}else o=t.label}return""+o},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[g]={_actives:[]}},beforeUpdate:function(t){var e=t[g];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var n,o,a,l,s,u,h,d,f,x,y,v,b,_,p=e.index,w=t[g],M=w._datasets[p]=[],k=t.isDatasetVisible(p),S=t.data.datasets[p],P=(n=r,l=S.datalabels,s={},u=[],!1===l?null:(!0===l&&(l={}),a=Object.keys(o=(n=(0,i.m)({},[n,l])).labels||{}),delete n.labels,a.length?a.forEach(function(t){o[t]&&u.push((0,i.m)({},[n,o[t],{_key:t}]))}):u.push(n),s=u.reduce(function(t,e){return(0,i.e)(e.listeners||{},function(r,i){t[i]=t[i]||{},t[i][e._key||m]=r}),delete e.listeners,t},{}),{labels:u,listeners:s})),C=e.meta.data||[],I=t.ctx;for(I.save(),h=0,f=C.length;h<f;++h)if((b=C[h])[g]=[],k&&b&&t.getDataVisibility(h)&&!b.skip)for(d=0,x=P.labels.length;d<x;++d)v=(y=P.labels[d])._key,(_=new c(y,I,b,h)).$groups={_set:p,_key:v||m},_.$context={active:!1,chart:t,dataIndex:h,dataset:S,datasetIndex:p},_.update(_.$context),b[g].push(_),M.push(_);I.restore(),(0,i.m)(w._listeners,P.listeners,{merger:function(t,r,i){r[t]=r[t]||{},r[t][e.index]=i[t],w._listened=!0}})},afterUpdate:function(t){t[g]._labels=p.prepare(t[g]._datasets)},afterDatasetsDraw:function(t){p.draw(t,t[g]._labels)},beforeEvent:function(t,e){if(t[g]._listened){var r,i,n,o=e.event;switch(o.type){case"mousemove":case"mouseout":!function(t,e){var r,i,n,o,a,l=t[g],s=l._listeners;if(!(!s.enter&&!s.leave)){if("mousemove"===e.type)a=p.lookup(l._labels,e);else if("mouseout"!==e.type)return;o=l._hovered,l._hovered=a,r=a,(o||r)&&(o?r?o!==r&&(n=i=!0):n=!0:i=!0,n&&w(t,s.leave,o,e),i&&w(t,s.enter,r,e))}}(t,o);break;case"click":(n=(i=(r=t[g])._listeners.click)&&p.lookup(r._labels,o))&&w(t,i,n,o)}}},afterEvent:function(t){var e,r,i,n,a,l,s,u=t[g],h=u._actives,c=u._actives=t.getActiveElements(),d=o.arrayDiff(h,c);for(e=0,r=d.length;e<r;++e)if((a=d[e])[1])for(s=a[0].element[g]||[],i=0,n=s.length;i<n;++i)(l=s[i]).$context.active=1===a[1],l.update(l.$context);(u._dirty||d.length)&&(p.update(u._labels),t.render()),delete u._dirty}}});
//# sourceMappingURL=chartjs-plugin-datalabels.es.2c328c21.js.map
