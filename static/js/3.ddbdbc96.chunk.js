(this.webpackJsonpcalligro=this.webpackJsonpcalligro||[]).push([[3],{64:function(t,e,a){t.exports={container:"step2_container__mP1Lb",instructionList:"step2_instructionList__A_Js5",instructionListItem:"step2_instructionListItem__24XyX",heading:"step2_heading__284k2",feature:"step2_feature__2lqil",goodbye:"step2_goodbye__2mpGb",featureList:"step2_featureList___0abW",dropzones:"step2_dropzones__2utFp",options:"step2_options__3tola",label:"step2_label__3qcY3",optionsLabel:"step2_optionsLabel__2tyAP",optionsInput:"step2_optionsInput__2ZWmB",times:"step2_times__263gt",questionMark:"step2_questionMark__3yZuf",option:"step2_option__2yRFz",downloadButton:"step2_downloadButton__3smy0"}},65:function(t,e,a){t.exports={container:"dropzone_container__3YvRs",inputContainer:"dropzone_inputContainer__OD9Y7",label:"dropzone_label__xsqTw",fileName:"dropzone_fileName__CjjRG",input:"dropzone_input__3YtRE"}},67:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a.n(n),i=a(39),o=a(21),s=a(26),c=a(28),p=a(16),l=a(17),u=a(23),h=a(22),d=a(4),m=a(0),b=a(9),f=a(1),g=a.n(f),j=a(25);function y(t){return new Promise((function(e){var a=URL.createObjectURL(t),n=document.createElement("img");n.onload=function(){var t=Object(j.b)(n.width,n.height),r=Object(i.a)(t,2),o=r[0],s=r[1];s.drawImage(n,0,0),n.remove(),URL.revokeObjectURL(a),e([o,s])},n.src=a}))}function v(t,e){var a=function(t,e){var a={packedRects:[],width:0,height:0},n=0,r=0,i=0,o=0;return a.packedRects=t.sort((function(t,e){return e.h-t.h})).map((function(t){n+t.w>e&&(n=0,r=o),n+t.w>i&&(i=n+t.w),r+t.h>o&&(o=r+t.h);var a={x:n,y:r,sourceRect:t};return n+=t.w,a})),a.width=i,a.height=o,a}(e,t.width),n=a.width,r=a.height,o=a.packedRects,s=Object(j.b)(n,r),c=Object(i.a)(s,2),p=c[0],l=c[1];return o.forEach((function(e){var a=e.x,n=e.y,r=e.sourceRect,i=r.w,o=r.h;l.drawImage(t,r.x,r.y,i,o,a,n,i,o)})),[p,o]}function O(t){var e=atob(t),a=JSON.parse(e);if(0!==a.version)throw new Error("Only templates version '0' are supported, instead got version '".concat(a.version,"'"));if(!Number.isInteger(a.base))throw new Error("Property 'base' must be an integer, instead got: ".concat(typeof a.base," '").concat(a.base,"'"));if(!Array.isArray(a.slots))throw new Error("Property 'slots' must be an array, instead got: ".concat(a.slots," '").concat(a.slots,"'"));var n=a.slots.find((function(t){return!Array.isArray(t)||3!==t.length||t.find((function(t){return!Number.isInteger(t)}))}));if(n)throw new Error("Each slot must be a three element array (integers only). Instead found: ".concat(JSON.stringify(n)));return a}var x=a(42);function w(t,e,a){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(r.a.mark((function t(e,a,n){var o,s,c,p,l,u,h,d,m,b,f,g,w;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=O(a),s=o.slots.map((function(t){var e=Object(i.a)(t,3),a=e[0],n=e[1],r=e[2];return{character:String.fromCharCode(a),width:n,height:r}})),c=new x.a(s,o.base),t.next=5,y(e);case 5:return p=t.sent,l=Object(i.a)(p,1),u=l[0],h=s.map((function(t,e){return{slot:t,x:c.getSlotPosition(e+1).x+c.slotDim.w/2-(t.width-2)/2,y:c.getSlotPosition(e+1).y+c.slotDim.h/2-(t.height-2)/2,w:t.width-2,h:t.height-2}})),d=v(u,h),m=Object(i.a)(d,2),b=m[0],f=m[1],t.next=12,Object(j.a)(b);case 12:return g=t.sent,w={info:{face:"calligro-custom",size:12,stretchH:100,aa:1,padding:{up:0,right:0,down:0,left:0},spacing:{horizontal:n.horizontalSpacing,vertical:n.verticalSpacing},outline:0},common:{lineHeight:n.lineHeight,base:o.base,scaleW:u.width,scaleH:u.height,pages:1},pages:[{id:0,file:"calligro-page-0.png"}],chars:f.map((function(t){return{id:t.sourceRect.slot.character.charCodeAt(0),x:t.x,y:t.y,width:t.sourceRect.w,height:t.sourceRect.h,xoffset:0,yoffset:0,xadvance:t.sourceRect.w,page:0,chnl:15}}))},t.abrupt("return",[w,[g]]);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N=a(33);var I=a(30);function D(t){return function(t){if(Array.isArray(t))return Object(N.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(I.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){var a=e.map((function(t){var e=Object(i.a)(t,2),a=e[0],n=e[1];return"".concat(a,"=").concat(n.toString())})).join(" ");return"".concat(t," ").concat(a)}function L(t){var e=t.info,a=z("info",[["face",e.face],["size",e.size],["unicode","1"],["stretchH",e.stretchH],["aa",e.stretchH],["padding","".concat(e.padding.up,",").concat(e.padding.right,",").concat(e.padding.down,",").concat(e.padding.left)],["spacing","".concat(e.spacing.horizontal,",").concat(e.spacing.vertical)]]),n=t.common,r=z("common",[["lineHeight",n.lineHeight],["base",n.base],["scaleW",n.scaleW],["scaleH",n.scaleH],["pages",n.pages]]),i=t.pages.map((function(t){return z("page",[["id",t.id],["file",t.file]])})),o=t.chars.map((function(t){return z("char",[["id",t.id],["x",t.x],["y",t.y],["width",t.width],["height",t.height],["xoffset",t.xoffset],["yoffset",t.yoffset],["xadvance",t.xadvance],["page",t.page],["chnl",t.chnl]])}));return[a,r].concat(D(i),D(o)).join("\n")}var k=a(40);function C(t,e){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(r.a.mark((function t(e,a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[{name:"calligro-font.fnt",input:e}].concat(D(a.map((function(t,e){return{name:"calligro-page-".concat(e,".png"),input:t}})))),t.abrupt("return",Object(k.a)("calligro-font",n));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var R,H,M=a(64),P=a.n(M),E=a(65),F=a.n(E),T=(R=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).templateInput=void 0,n.templateInput=g.a.createRef(),n}return Object(l.a)(a,[{key:"handleFileInput",value:function(t){t&&t.type===this.props.dataType&&this.props.handleDropzoneInput(this.props.stateTarget,t)}},{key:"handleInput",value:function(){var t,e,a=null===(t=this.templateInput.current)||void 0===t||null===(e=t.files)||void 0===e?void 0:e[0];this.handleFileInput(a)}},{key:"handleDrop",value:function(t){t.preventDefault();var e=t.dataTransfer.files[0];this.handleFileInput(e)}},{key:"dragOver",value:function(t){t.preventDefault()}},{key:"dragEnter",value:function(t){t.preventDefault()}},{key:"dragLeave",value:function(t){t.preventDefault()}},{key:"render",value:function(){var t=this.props.templateName?Object(m.jsxs)("p",{className:F.a.fileName,children:["Uploaded ",this.props.templateName]}):null;return Object(m.jsxs)("div",{className:F.a.container,onDrop:this.handleDrop,onDragOver:this.dragOver,onDragEnter:this.dragEnter,onDragLeave:this.dragLeave,children:[Object(m.jsxs)("label",{className:F.a.label,children:["Drag&drop the ",this.props.inputName]}),Object(m.jsx)("div",{className:F.a.inputContainer,children:Object(m.jsx)("input",{"aria-label":"".concat(this.props.inputName," input"),className:F.a.input,type:"file",ref:this.templateInput,onChange:this.handleInput,accept:this.props.acceptedInputType,title:" "})}),t]})}}]),a}(f.Component),Object(d.a)(R.prototype,"handleInput",[b.a],Object.getOwnPropertyDescriptor(R.prototype,"handleInput"),R.prototype),Object(d.a)(R.prototype,"handleDrop",[b.a],Object.getOwnPropertyDescriptor(R.prototype,"handleDrop"),R.prototype),Object(d.a)(R.prototype,"dragEnter",[b.a],Object.getOwnPropertyDescriptor(R.prototype,"dragEnter"),R.prototype),Object(d.a)(R.prototype,"dragLeave",[b.a],Object.getOwnPropertyDescriptor(R.prototype,"dragLeave"),R.prototype),R),q=a(7),A=(H=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={horizontalMargin:0,verticalMargin:0,lineHeight:0},n}return Object(l.a)(a,[{key:"handleDropzoneInput",value:function(t,e){this.setState((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(s.a)({},t,e))}))}},{key:"isInputsValid",value:function(){var t=!!this.state.templateCode&&"text/plain"===this.state.templateCode.type;return!!this.state.template&&"image/png"===this.state.template.type&&t}},{key:"handleNumericalInput",value:function(t,e){var a=parseInt(t.target.value,10);a>=0&&this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},e,a))}))}},{key:"downloadFont",value:function(){var t=Object(o.a)(r.a.mark((function t(){var e,a,n,o,s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.template&&this.state.templateCode){t.next=2;break}return t.abrupt("return");case 2:return e=this.state.template,t.next=5,this.state.templateCode.text();case 5:return a=t.sent,t.next=8,w(e,a,{horizontalSpacing:this.state.horizontalMargin,verticalSpacing:this.state.verticalMargin,lineHeight:this.state.lineHeight});case 8:n=t.sent,o=Object(i.a)(n,2),s=o[0],c=o[1],C(L(s),c);case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,a=this;return Object(m.jsxs)("div",{className:P.a.container,children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:P.a.dropzones,children:[Object(m.jsx)(T,{inputName:"image",acceptedInputType:".png",dataType:"image/png",stateTarget:"template",handleDropzoneInput:this.handleDropzoneInput,templateName:null===(t=this.state.template)||void 0===t?void 0:t.name}),Object(m.jsx)(T,{inputName:"code file",acceptedInputType:".txt",dataType:"text/plain",stateTarget:"templateCode",handleDropzoneInput:this.handleDropzoneInput,templateName:null===(e=this.state.templateCode)||void 0===e?void 0:e.name})]}),Object(m.jsxs)("div",{className:P.a.options,children:[Object(m.jsx)("label",{className:P.a.label,children:"Font options"}),Object(m.jsxs)("div",{className:P.a.option,children:[Object(m.jsx)("label",{className:P.a.optionsLabel,children:"Margin"}),Object(m.jsx)("input",{"aria-label":"horizontal margin input",className:P.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"horizontalMargin")},value:this.state.horizontalMargin}),Object(m.jsx)(q.a,{icon:"fas fa-times",className:P.a.times}),Object(m.jsx)("input",{"aria-label":"vertical margin input",className:P.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"verticalMargin")},value:this.state.verticalMargin}),Object(m.jsx)(q.a,{icon:"fas fa-question",className:P.a.questionMark,title:"Horizontal and vertical distance between characters in pixels"})]}),Object(m.jsxs)("div",{className:P.a.option,children:[Object(m.jsx)("label",{className:P.a.optionsLabel,children:"Line height"}),Object(m.jsx)("input",{"aria-label":"line height input",className:P.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"lineHeight")},value:this.state.lineHeight}),Object(m.jsx)(q.a,{icon:"fas fa-question",className:P.a.questionMark,title:"Distance from the bottom of a line to the top of the next one in pixels"})]}),Object(m.jsx)("button",{onClick:this.downloadFont,className:P.a.downloadButton,disabled:!this.isInputsValid(),children:"generate font"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:P.a.heading,children:"Step 2 - Generate your font"}),Object(m.jsxs)("ol",{className:P.a.instructionList,children:[Object(m.jsx)("li",{className:P.a.instructionListItem,children:"Upload the template image with your characters drawn on it. Nothing is sent to a server, everything stays in your browser."}),Object(m.jsx)("li",{className:P.a.instructionListItem,children:"Upload the txt file downloaded togheter with the template image earlier (it contains template metadata)."}),Object(m.jsx)("li",{className:P.a.instructionListItem,children:"Specify the horizontal and vertical margins for characters."}),Object(m.jsx)("li",{className:P.a.instructionListItem,children:"Specify the font line height (distance from the top of one line to the top of the next one)."}),Object(m.jsx)("li",{className:P.a.instructionListItem,children:"Generate and download your BMFont."})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:P.a.heading,children:"Coming soon"}),Object(m.jsxs)("ul",{className:P.a.featureList,children:[Object(m.jsx)("li",{className:P.a.feature,children:"Kerning pairs support (that is: non-monospace fonts)"}),Object(m.jsx)("li",{className:P.a.feature,children:"XML export (some engines require it)"}),Object(m.jsx)("li",{className:P.a.feature,children:"Font preview"})]}),Object(m.jsx)("p",{className:P.a.goodbye,children:"Stay tuned ;)"})]})]})]})}}]),a}(f.Component),Object(d.a)(H.prototype,"handleDropzoneInput",[b.a],Object.getOwnPropertyDescriptor(H.prototype,"handleDropzoneInput"),H.prototype),Object(d.a)(H.prototype,"isInputsValid",[b.a],Object.getOwnPropertyDescriptor(H.prototype,"isInputsValid"),H.prototype),Object(d.a)(H.prototype,"handleNumericalInput",[b.a],Object.getOwnPropertyDescriptor(H.prototype,"handleNumericalInput"),H.prototype),Object(d.a)(H.prototype,"downloadFont",[b.a],Object.getOwnPropertyDescriptor(H.prototype,"downloadFont"),H.prototype),H);e.default=A}}]);
//# sourceMappingURL=3.ddbdbc96.chunk.js.map