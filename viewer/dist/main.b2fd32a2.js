!function(e){function t(t){for(var n,a,s=t[0],l=t[1],h=t[2],c=0,u=[];c<s.length;c++)a=s[c],r[a]&&u.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);u.length;)u.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={1:0},o=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;o.push([17,0]),i()}({13:function(e,t,i){},17:function(e,t,i){e.exports=i(5)},5:function(e,t,i){"use strict";i.r(t);var n=i(4),r=i(3),o=i(2),a=i.n(o),s=new Image,l={data:function(){return{img:{realWidth:null,realHeight:null,width:null,height:null,whRate:null},center:{left:null,top:null},lastTimestamp:null,needReset:!0,diagramUrl:"../tmp.svg",url:null}},methods:{boxReset:function(){var e=this.$refs.wrapper;e.clientWidth/e.clientHeight>this.img.whRate?this.boxResize({height:e.clientHeight}):this.boxResize({width:e.clientWidth}),this.boxCenter()},boxResize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,i=void 0===t?null:t,n=e.height,r=void 0===n?null:n;this.$refs.box;i?(this.img.width=i,this.img.height=i/this.img.whRate):r&&(this.img.height=r,this.img.width=r*this.img.whRate)},boxCenter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.top,i=void 0===t?.5:t,n=e.left,r=void 0===n?.5:n;i<0&&(i=0),i>1&&(i=1),r<0&&(r=0),r>1&&(r=1);var o=this.$refs.wrapper,a=this.$refs.box;this.center.left=r,this.center.top=i,a.style.top=i*o.clientHeight-this.img.height/2+"px",a.style.left=r*o.clientWidth-this.img.width/2+"px"},bindEvent:function(){var e=this,t=this.$refs.wrapper,i=this.$refs.box;new a.a(i).on("dragEnd",function(n){var r=i.style,o=r.top,a=r.left;o=parseFloat(o),a=parseFloat(a),e.center.left=(e.img.width/2+a)/t.clientWidth,e.center.top=(e.img.height/2+o)/t.clientHeight}),Object(r.addWheelListener)(t,function(t){t.preventDefault();var i=e.center,n=i.top,r=i.left,o=e.img.width+10*t.deltaY;o>100&&(e.boxResize({width:o}),e.boxCenter({top:n,left:r}))}),s.addEventListener("error",function(t){console.error(t),e.needReset=!0}),s.addEventListener("load",function(){e.url=s.src,e.img.realWidth=s.width,e.img.realHeight=s.height;var t=s.width/s.height;e.img.whRate!==t&&(e.img.height=e.img.width/t,e.img.whRate=t),e.needReset&&(e.needReset=!1,e.boxReset())})},reloadImage:function(){s.src=this.diagramUrl+"?t="+Date.now()},reloadUpdateJs:function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script"),i=function(){setTimeout(function(){e.removeChild(t)},200)};t.type="text/javascript",t.addEventListener("error",i),t.addEventListener("load",i),t.src="../tmp.js?t="+Date.now(),e.appendChild(t)}},mounted:function(){var e=this;this.bindEvent(),this.reloadImage(),window.updateDiagramURL=function(t){t!==e.lastTimestamp&&(e.lastTimestamp=t,e.reloadImage())},setInterval(function(){e.reloadUpdateJs()},1e3)}},h=i(1);var d=function(e){i(13)},c=Object(h.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wrapper",staticClass:"wrapper",on:{dblclick:e.boxReset}},[i("div",{ref:"box",staticClass:"box",style:{width:e.img.width+"px",height:e.img.height+"px"},attrs:{"data-center":"left: "+e.center.left+", top: "+e.center.top}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.url,expression:"url"}],ref:"img",attrs:{src:e.url},on:{load:function(){return e.$emit("loadedImage")}}})])])},[],!1,d,"data-v-53086807",null).exports;i(7);new n.a({el:"#app",render:function(e){return e(c)}})},7:function(e,t,i){}});
//# sourceMappingURL=main.b2fd32a2.js.map