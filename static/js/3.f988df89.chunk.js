(this.webpackJsonpcalligro=this.webpackJsonpcalligro||[]).push([[3],{65:function(t,e,a){t.exports={container:"step2_container__mP1Lb",instructionList:"step2_instructionList__A_Js5",instructionListItem:"step2_instructionListItem__24XyX",heading:"step2_heading__284k2",feature:"step2_feature__2lqil",goodbye:"step2_goodbye__2mpGb",featureList:"step2_featureList___0abW",dropzones:"step2_dropzones__2utFp",options:"step2_options__3tola",label:"step2_label__3qcY3",optionsLabel:"step2_optionsLabel__2tyAP",buttonsContainerLabel:"step2_buttonsContainerLabel__3VAjD",optionsInput:"step2_optionsInput__2ZWmB",times:"step2_times__263gt",questionMark:"step2_questionMark__3yZuf",option:"step2_option__2yRFz",downloadButton:"step2_downloadButton__3smy0",download:"step2_download__1hxQw",buttons:"step2_buttons__1G7PN",samplesParagraph:"step2_samplesParagraph__12U9D",samplesLink:"step2_samplesLink__3X2DM"}},66:function(t,e,a){t.exports={container:"dropzone_container__3YvRs",inputContainer:"dropzone_inputContainer__OD9Y7",label:"dropzone_label__xsqTw",fileName:"dropzone_fileName__CjjRG",input:"dropzone_input__3YtRE"}},67:function(t,e,a){t.exports={container:"step2KerningPairsList_container__2Re1A",pairsContainer:"step2KerningPairsList_pairsContainer__2Qy3n",pairsKey:"step2KerningPairsList_pairsKey__3OuXe",button:"step2KerningPairsList_button__2e3T4",label:"step2KerningPairsList_label__1YYti",questionMark:"step2KerningPairsList_questionMark__2cusH",input:"step2KerningPairsList_input__1pUjE",inputInvalid:"step2KerningPairsList_inputInvalid__1-_2u",warning:"step2KerningPairsList_warning__l57EV",warningOff:"step2KerningPairsList_warningOff__2InZl"}},69:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a.n(n),i=a(40),s=a(22),o=a(27),c=a(29),l=a(17),p=a(18),u=a(24),h=a(23),d=a(4),b=a(0),g=a(9),f=a(1),m=a.n(f),j=a(26);function y(t){return new Promise((function(e){var a=URL.createObjectURL(t),n=document.createElement("img");n.onload=function(){var t=Object(j.b)(n.width,n.height),r=Object(i.a)(t,2),s=r[0],o=r[1];o.drawImage(n,0,0),n.remove(),URL.revokeObjectURL(a),e([s,o])},n.src=a}))}function O(t,e){var a=function(t,e){var a={packedRects:[],width:0,height:0},n=0,r=0,i=0,s=0;return a.packedRects=t.sort((function(t,e){return e.h-t.h})).map((function(t){n+t.w>e&&(n=0,r=s),n+t.w>i&&(i=n+t.w),r+t.h>s&&(s=r+t.h);var a={x:n,y:r,sourceRect:t};return n+=t.w,a})),a.width=i,a.height=s,a}(e,t.width),n=a.width,r=a.height,s=a.packedRects,o=Object(j.b)(n,r),c=Object(i.a)(o,2),l=c[0],p=c[1];return s.forEach((function(e){var a=e.x,n=e.y,r=e.sourceRect,i=r.w,s=r.h;p.drawImage(t,r.x,r.y,i,s,a,n,i,s)})),[l,s]}function v(t){var e=decodeURIComponent(escape(atob(t))),a=JSON.parse(e);if(0!==a.version)throw new Error("Only templates version '0' are supported, instead got version '".concat(a.version,"'"));if(!Number.isInteger(a.base))throw new Error("Property 'base' must be an integer, instead got: ".concat(typeof a.base," '").concat(a.base,"'"));if(!Array.isArray(a.slots))throw new Error("Property 'slots' must be an array, instead got: ".concat(a.slots," '").concat(a.slots,"'"));var n=a.slots.find((function(t){return!Array.isArray(t)||3!==t.length||t.find((function(t){return!Number.isInteger(t)}))}));if(n)throw new Error("Each slot must be a three element array (integers only). Instead found: ".concat(JSON.stringify(n)));return a}var x=a(43);function _(t,e,a){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(r.a.mark((function t(e,a,n){var s,o,c,l,p,u,h,d,b,g,f,m,_;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=v(a),o=s.slots.map((function(t){var e=Object(i.a)(t,3),a=e[0],n=e[1],r=e[2];return{character:String.fromCharCode(a),width:n,height:r}})),c=new x.a(o,s.base),t.next=5,y(e);case 5:return l=t.sent,p=Object(i.a)(l,1),u=p[0],h=o.map((function(t,e){return{slot:t,x:c.getSlotPosition(e+1).x+c.slotDim.w/2-(t.width-2)/2,y:c.getSlotPosition(e+1).y+c.slotDim.h/2-(t.height-2)/2,w:t.width-2,h:t.height-2}})),d=O(u,h),b=Object(i.a)(d,2),g=b[0],f=b[1],t.next=12,Object(j.a)(g);case 12:return m=t.sent,_={info:{face:"calligro-custom",size:12,stretchH:100,aa:1,padding:{up:0,right:0,down:0,left:0},spacing:{horizontal:n.horizontalSpacing,vertical:n.verticalSpacing},outline:0},common:{lineHeight:n.lineHeight,base:s.base,scaleW:u.width,scaleH:u.height,pages:1},pages:[{id:0,file:"calligro-page-0.png"}],chars:f.map((function(t){return{id:t.sourceRect.slot.character.charCodeAt(0),x:t.x,y:t.y,width:t.sourceRect.w,height:t.sourceRect.h,xoffset:0,yoffset:0,xadvance:t.sourceRect.w,page:0,chnl:15}})),kernings:n.kernings},t.abrupt("return",[_,[m]]);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N=a(34);var k=a(31);function C(t){return function(t){if(Array.isArray(t))return Object(N.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(k.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){var a=e.map((function(t){var e=Object(i.a)(t,2),a=e[0],n=e[1];return"".concat(a,"=").concat(n.toString())})).join(" ");return"".concat(t," ").concat(a)}function I(t,e){var a=e.map((function(t){var e=Object(i.a)(t,2),a=e[0],n=e[1];return"".concat(a,'="').concat(n.toString(),'"')})).join(" ");return"<".concat(t," ").concat(a," />")}function L(t,e){var a="txt"===e?P:I,n=t.info,r=a("info",[["face",n.face],["size",n.size],["unicode","1"],["bold","0"],["italic","0"],["stretchH",n.stretchH],["aa",n.stretchH],["padding","".concat(n.padding.up,",").concat(n.padding.right,",").concat(n.padding.down,",").concat(n.padding.left)],["spacing","".concat(n.spacing.horizontal,",").concat(n.spacing.vertical)]]),i=t.common,s=a("common",[["lineHeight",i.lineHeight],["base",i.base],["scaleW",i.scaleW],["scaleH",i.scaleH],["pages",i.pages]]),o=t.pages.map((function(t){return a("page",[["id",t.id],["file",t.file]])})),c=t.chars.map((function(t){return a("char",[["id",t.id],["x",t.x],["y",t.y],["width",t.width],["height",t.height],["xoffset",t.xoffset],["yoffset",t.yoffset],["xadvance",t.xadvance],["page",t.page],["chnl",t.chnl]])})),l=t.kernings.map((function(t){return a("kerning",[["first",t.first],["second",t.second],["amount",t.amount]])}));switch(e){case"txt":return[r,s].concat(C(o),C(c),C(l)).join("\n");case"xml":return['<?xml version="1.0"?>',"<font>","\t"+[r,s,"<pages>"].concat(C(o.map((function(t){return"\t".concat(t)}))),["</pages>",'<chars count="'.concat(c.length,'">')],C(c.map((function(t){return"\t".concat(t)}))),["</chars>",'<kernings count="'.concat(l.length,'">')],C(l.map((function(t){return"\t".concat(t)}))),["</kernings>"]).join("\n\t"),"</font>"].join("\n")}}var D=a(41);function K(t,e){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(r.a.mark((function t(e,a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[{name:"calligro-font.fnt",input:e}].concat(C(a.map((function(t,e){return{name:"calligro-page-".concat(e,".png"),input:t}})))),t.abrupt("return",Object(D.a)("calligro-font",n));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z,R,A=a(65),V=a.n(A),M=a(66),H=a.n(M),U=(z=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).templateInput=void 0,n.templateInput=m.a.createRef(),n}return Object(p.a)(a,[{key:"handleFileInput",value:function(t){t&&t.type===this.props.dataType&&this.props.handleDropzoneInput(this.props.stateTarget,t)}},{key:"handleInput",value:function(){var t,e,a=null===(t=this.templateInput.current)||void 0===t||null===(e=t.files)||void 0===e?void 0:e[0];this.handleFileInput(a)}},{key:"handleDrop",value:function(t){t.preventDefault();var e=t.dataTransfer.files[0];this.handleFileInput(e)}},{key:"dragOver",value:function(t){t.preventDefault()}},{key:"dragEnter",value:function(t){t.preventDefault()}},{key:"dragLeave",value:function(t){t.preventDefault()}},{key:"render",value:function(){var t=this.props.templateName?Object(b.jsxs)("p",{className:H.a.fileName,children:["Uploaded ",this.props.templateName]}):null;return Object(b.jsxs)("div",{className:H.a.container,onDrop:this.handleDrop,onDragOver:this.dragOver,onDragEnter:this.dragEnter,onDragLeave:this.dragLeave,children:[Object(b.jsxs)("label",{className:H.a.label,children:["Drag&drop the ",this.props.inputName]}),Object(b.jsx)("div",{className:H.a.inputContainer,children:Object(b.jsx)("input",{"aria-label":"".concat(this.props.inputName," input"),className:H.a.input,type:"file",ref:this.templateInput,onChange:this.handleInput,accept:this.props.acceptedInputType,title:" "})}),t]})}}]),a}(f.Component),Object(d.a)(z.prototype,"handleInput",[g.a],Object.getOwnPropertyDescriptor(z.prototype,"handleInput"),z.prototype),Object(d.a)(z.prototype,"handleDrop",[g.a],Object.getOwnPropertyDescriptor(z.prototype,"handleDrop"),z.prototype),Object(d.a)(z.prototype,"dragEnter",[g.a],Object.getOwnPropertyDescriptor(z.prototype,"dragEnter"),z.prototype),Object(d.a)(z.prototype,"dragLeave",[g.a],Object.getOwnPropertyDescriptor(z.prototype,"dragLeave"),z.prototype),z),q=a(7),E=a(16),T=a(67),F=a.n(T);function W(t){return String.fromCharCode(t)}var B,G=(R=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).pairsContainerRef=void 0,n.state={pairs:[],UICodeCharList:[]},n.pairsContainerRef=m.a.createRef(),n}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){var t=Object(s.a)(r.a.mark((function t(e,a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.templateCode===this.props.templateCode){t.next=11;break}if(this.setState({pairs:[]}),!this.props.templateCode){t.next=11;break}return t.t0=this,t.t1=v,t.next=7,this.props.templateCode.text();case 7:t.t2=t.sent,t.t3=(0,t.t1)(t.t2).slots.flatMap((function(t){return t[0]})),t.t4={UICodeCharList:t.t3},t.t0.setState.call(t.t0,t.t4);case 11:a.pairs!==this.state.pairs&&(this.isAllPairsValid&&this.props.changeKernings(this.state.pairs),this.props.handleKerningsValidity(this.isAllPairsValid));case 12:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"addPair",value:function(){var t=this;this.setState((function(t){return{pairs:[].concat(C(t.pairs),[{amount:1}])}}),(function(){return t.scrollToBottom()}))}},{key:"scrollToBottom",value:function(){this.pairsContainerRef.current&&(this.pairsContainerRef.current.scrollTop=this.pairsContainerRef.current.scrollHeight)}},{key:"deletePair",value:function(t){var e=C(this.state.pairs);e.splice(t,1),this.setState({pairs:e})}},{key:"changeChar",value:function(t,e,a){var n=""===t.target.value?void 0:function(t){return t.charCodeAt(0)}(t.target.value.charAt(0)),r=C(this.state.pairs);r[e][a]=n,this.setState({pairs:r})}},{key:"changeAmount",value:function(t,e){var a=""===t.target.value?void 0:parseInt(t.target.value,10),n=C(this.state.pairs);n[e].amount=a,this.setState({pairs:n})}},{key:"isCharLegal",value:function(t){return void 0!==t&&this.state.UICodeCharList.includes(t)}},{key:"isPairUnrepeated",value:function(t){return this.state.pairs.filter((function(e){return t.first===e.first&&t.second===e.second})).length<2}},{key:"isWorkPairLegal",value:function(t){var e=t.first,a=t.second,n=t.amount,r=this.isCharLegal(e),i=this.isCharLegal(a);return r&&i&&!!n}},{key:"isPairValid",value:function(t){return this.isWorkPairLegal(t)&&this.isPairUnrepeated(t)}},{key:"render",value:function(){var t=this,e=this.state.pairs.map((function(e,a){var n;return Object(b.jsxs)(f.Fragment,{children:[Object(b.jsx)("input",{"aria-label":"first letter input",className:"".concat(F.a.input," ").concat(t.isCharLegal(e.first)&&t.isPairUnrepeated(e)?"":F.a.inputInvalid),value:e.first?W(e.first):"",onChange:function(e){return t.changeChar(e,a,"first")},type:"text"}),Object(b.jsx)("input",{"aria-label":"second letter input",className:"".concat(F.a.input," ").concat(t.isCharLegal(e.second)&&t.isPairUnrepeated(e)?"":F.a.inputInvalid),value:e.second?W(e.second):"",onChange:function(e){return t.changeChar(e,a,"second")},type:"text"}),Object(b.jsx)("input",{"aria-label":"distance input",className:"".concat(F.a.input," ").concat(e.amount?"":F.a.inputInvalid),value:null!==(n=e.amount)&&void 0!==n?n:"",onChange:function(e){return t.changeAmount(e,a)},type:"number"}),Object(b.jsx)("button",{className:F.a.button,onClick:function(){return t.deletePair(a)},title:"Delete kerning pair",children:Object(b.jsx)(q.a,{icon:"fas fa-minus"})})]},a)}));return Object(b.jsxs)("div",{className:F.a.container,children:[Object(b.jsxs)("label",{className:F.a.label,children:["Kerning pairs",Object(b.jsx)(q.a,{icon:"fas fa-question",className:F.a.questionMark,title:"Pairs of characters with non-default distance from each other. Only supported by some engines"})]}),Object(b.jsxs)("div",{className:F.a.pairsContainer,ref:this.pairsContainerRef,children:[Object(b.jsx)("label",{className:F.a.pairsKey,children:"character 1"}),Object(b.jsx)("label",{className:F.a.pairsKey,children:"character 2"}),Object(b.jsxs)("label",{className:F.a.pairsKey,children:["distance",Object(b.jsx)(q.a,{icon:"fas fa-question",className:F.a.questionMark,title:" This value is added to the default character distance when character 2 immediately follows character 1. Can be negative."})]}),Object(b.jsx)("p",{className:F.a.pairsKey,children:Object(b.jsx)("button",{className:F.a.button,onClick:this.addPair,disabled:0===this.state.UICodeCharList.length,title:"Add kerning pair",children:Object(b.jsx)(q.a,{icon:"fas fa-plus"})})}),e]}),Object(b.jsx)("p",{className:"".concat(F.a.warning," ").concat(this.isAnyPairWithLegalCharsRepeated?"":F.a.warningOff),children:"Some pairs are defined multiple times!"})]})}},{key:"isAllPairsValid",get:function(){var t=this;return!this.state.pairs.some((function(e){return!t.isPairValid(e)}))}},{key:"isAnyPairWithLegalCharsRepeated",get:function(){var t=this;return this.state.pairs.some((function(e){return!t.isPairUnrepeated(e)&&t.isCharLegal(e.first)&&t.isCharLegal(e.second)}))}}]),a}(f.Component),Object(d.a)(R.prototype,"addPair",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"addPair"),R.prototype),Object(d.a)(R.prototype,"deletePair",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"deletePair"),R.prototype),Object(d.a)(R.prototype,"changeChar",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"changeChar"),R.prototype),Object(d.a)(R.prototype,"changeAmount",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"changeAmount"),R.prototype),Object(d.a)(R.prototype,"isCharLegal",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"isCharLegal"),R.prototype),Object(d.a)(R.prototype,"isPairValid",[g.a],Object.getOwnPropertyDescriptor(R.prototype,"isPairValid"),R.prototype),R),Y=(B=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={horizontalMargin:0,verticalMargin:0,lineHeight:0,kerningPairs:[],isKerningsValid:!0},n}return Object(p.a)(a,[{key:"handleDropzoneInput",value:function(t,e){this.setState((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(o.a)({},t,e))}))}},{key:"isInputsValid",value:function(){var t=!!this.state.templateCode&&"text/plain"===this.state.templateCode.type;return!!this.state.template&&"image/png"===this.state.template.type&&t&&this.state.isKerningsValid}},{key:"handleNumericalInput",value:function(t,e){var a=""===t.target.value?"":parseInt(t.target.value,10);(""===a||a>=0)&&this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(o.a)({},e,a))}))}},{key:"downloadFont",value:function(){var t=Object(s.a)(r.a.mark((function t(e){var a,n,s,o,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.template&&this.state.templateCode){t.next=2;break}return t.abrupt("return");case 2:return a=this.state.template,t.next=5,this.state.templateCode.text();case 5:return n=t.sent,t.next=8,_(a,n,{horizontalSpacing:Object(E.a)(this.state.horizontalMargin),verticalSpacing:Object(E.a)(this.state.verticalMargin),lineHeight:Object(E.a)(this.state.lineHeight),kernings:this.state.kerningPairs});case 8:s=t.sent,o=Object(i.a)(s,2),c=o[0],l=o[1],K(L(c,e),l);case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"changeKernings",value:function(t){this.setState({kerningPairs:t})}},{key:"handleKerningsValidity",value:function(t){this.setState({isKerningsValid:t})}},{key:"render",value:function(){var t,e,a=this;return Object(b.jsxs)("div",{className:V.a.container,children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:V.a.dropzones,children:[Object(b.jsx)(U,{inputName:"image",acceptedInputType:".png",dataType:"image/png",stateTarget:"template",handleDropzoneInput:this.handleDropzoneInput,templateName:null===(t=this.state.template)||void 0===t?void 0:t.name}),Object(b.jsx)(U,{inputName:"code file",acceptedInputType:".txt",dataType:"text/plain",stateTarget:"templateCode",handleDropzoneInput:this.handleDropzoneInput,templateName:null===(e=this.state.templateCode)||void 0===e?void 0:e.name})]}),Object(b.jsxs)("div",{className:V.a.options,children:[Object(b.jsx)("label",{className:V.a.label,children:"Font options"}),Object(b.jsxs)("div",{className:V.a.option,children:[Object(b.jsx)("label",{className:V.a.optionsLabel,children:"Margin"}),Object(b.jsx)("input",{"aria-label":"horizontal margin input",className:V.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"horizontalMargin")},value:this.state.horizontalMargin}),Object(b.jsx)(q.a,{icon:"fas fa-times",className:V.a.times}),Object(b.jsx)("input",{"aria-label":"vertical margin input",className:V.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"verticalMargin")},value:this.state.verticalMargin}),Object(b.jsx)(q.a,{icon:"fas fa-question",className:V.a.questionMark,title:"Horizontal and vertical distance between characters in pixels"})]}),Object(b.jsxs)("div",{className:V.a.option,children:[Object(b.jsx)("label",{className:V.a.optionsLabel,children:"Line height"}),Object(b.jsx)("input",{"aria-label":"line height input",className:V.a.optionsInput,type:"number",onChange:function(t){return a.handleNumericalInput(t,"lineHeight")},value:this.state.lineHeight}),Object(b.jsx)(q.a,{icon:"fas fa-question",className:V.a.questionMark,title:"Distance from the bottom of a line to the top of the next one in pixels"})]}),Object(b.jsx)(G,{templateCode:this.state.templateCode,changeKernings:this.changeKernings,handleKerningsValidity:this.handleKerningsValidity}),Object(b.jsxs)("div",{className:V.a.download,children:[Object(b.jsx)("label",{className:V.a.buttonsContainerLabel,children:"Download font"}),Object(b.jsxs)("div",{className:V.a.buttons,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return a.downloadFont("txt")},className:V.a.downloadButton,disabled:!this.isInputsValid(),children:"txt format"}),Object(b.jsx)(q.a,{icon:"fas fa-question",className:V.a.questionMark,title:"Supported by Godot, LibGDX, Heaps.io and possibly others."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return a.downloadFont("xml")},className:V.a.downloadButton,disabled:!this.isInputsValid(),children:"xml format"}),Object(b.jsx)(q.a,{icon:"fas fa-question",className:V.a.questionMark,title:"Supported by Phaser, HaxeFlixel and possibly others."})]})]}),Object(b.jsxs)("p",{className:V.a.samplesParagraph,children:["Check",Object(b.jsx)("a",{href:"https://github.com/Voycawojka/calligro/tree/main/samples",className:V.a.samplesLink,target:"_blank",rel:"noreferrer",children:"our samples"}),"to see how to use it"]})]})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:V.a.heading,children:"Step 2 - Generate your font"}),Object(b.jsxs)("ol",{className:V.a.instructionList,children:[Object(b.jsx)("li",{className:V.a.instructionListItem,children:"Upload the template image with your characters drawn on it. Nothing is sent to a server, everything stays in your browser."}),Object(b.jsx)("li",{className:V.a.instructionListItem,children:"Upload the txt file downloaded togheter with the template image earlier (it contains template metadata)."}),Object(b.jsx)("li",{className:V.a.instructionListItem,children:"Specify the horizontal and vertical margins for characters."}),Object(b.jsx)("li",{className:V.a.instructionListItem,children:"Specify the font line height (distance from the top of one line to the top of the next one)."}),Object(b.jsxs)("li",{className:V.a.instructionListItem,children:[Object(b.jsx)("p",{children:'Add kerning pairs if you want to. Characters in a pair are rendered further or closer to each other. E.g. pair "ab" with distance -10 will cause "b" to be 10 pixels closer to "a". Pair "ab" \u2260 "ba"!'}),Object(b.jsx)("p",{children:"Warning - not all tools support this feature. We know Godot does."})]}),Object(b.jsx)("li",{className:V.a.instructionListItem,children:"Generate and download your BMFont."})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:V.a.heading,children:"Coming soon"}),Object(b.jsx)("ul",{className:V.a.featureList,children:Object(b.jsx)("li",{className:V.a.feature,children:"Font preview"})}),Object(b.jsx)("p",{className:V.a.goodbye,children:"Stay tuned ;)"})]})]})]})}}]),a}(f.Component),Object(d.a)(B.prototype,"handleDropzoneInput",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"handleDropzoneInput"),B.prototype),Object(d.a)(B.prototype,"isInputsValid",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"isInputsValid"),B.prototype),Object(d.a)(B.prototype,"handleNumericalInput",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"handleNumericalInput"),B.prototype),Object(d.a)(B.prototype,"downloadFont",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"downloadFont"),B.prototype),Object(d.a)(B.prototype,"changeKernings",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"changeKernings"),B.prototype),Object(d.a)(B.prototype,"handleKerningsValidity",[g.a],Object.getOwnPropertyDescriptor(B.prototype,"handleKerningsValidity"),B.prototype),B);e.default=Y}}]);
//# sourceMappingURL=3.f988df89.chunk.js.map