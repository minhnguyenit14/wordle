(function(e){function t(t){for(var i,s,l=t[0],a=t[1],r=t[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(u,s)&&u[s]&&h.push(u[s][0]),u[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==u[a]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},u={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wordle/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var c=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ee":function(e,t,n){"use strict";n("6c41")},"10a9":function(e,t,n){"use strict";n("29b7")},"249f":function(e,t,n){},"29b7":function(e,t,n){},"2bc6":function(e,t,n){"use strict";n("4952")},"3b7b":function(e,t,n){},"3b84":function(e,t,n){e.exports=n.p+"img/us.8886b28b.svg"},"3fd6":function(e,t,n){var i={"./us.svg":"3b84","./vn.svg":"a464"};function u(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}u.keys=function(){return Object.keys(i)},u.resolve=o,e.exports=u,u.id="3fd6"},4952:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function u(e,t,n,u,o,s){var l=Object(i["r"])("Main");return Object(i["l"])(),Object(i["c"])(l)}var o=function(e){return Object(i["n"])("data-v-62f2a88e"),e=e(),Object(i["m"])(),e},s=["maxlength"],l={class:"wrapper"},a={class:"contentContainer"},r={class:"header"},c=o((function(){return Object(i["f"])("h1",{class:"heading"},"Mimo Wordle",-1)})),d={class:"info"},h=["src"],v={class:"container"},m={key:0,class:"reset"},f={id:"footer",class:"footer"};function b(e,t,n,u,o,b){var w=Object(i["r"])("GuessRow"),p=Object(i["r"])("Keyboard"),C=Object(i["r"])("ModalFinish");return Object(i["l"])(),Object(i["e"])(i["a"],null,[Object(i["f"])("input",{class:"invisible",ref:"input",onInput:t[0]||(t[0]=function(){return b.changeInput&&b.changeInput.apply(b,arguments)}),maxlength:o.keyword.length},null,40,s),Object(i["f"])("div",l,[Object(i["f"])("div",a,[Object(i["f"])("div",r,[c,Object(i["f"])("div",d,[Object(i["f"])("img",{class:"flag",src:b.getImgUrl},null,8,h)])]),Object(i["f"])("div",{class:"boardContainer",style:Object(i["k"])({alignItems:b.containerStyle?"center":"unset"})},[Object(i["f"])("div",{class:"body",style:Object(i["k"])({width:b.containerStyle?b.containerStyle+"px":void 0,flex:b.containerStyle?"unset":1})},[Object(i["f"])("div",v,[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(o.listGuessRow,(function(e,t){return Object(i["l"])(),Object(i["c"])(w,{class:Object(i["j"])({last:t===o.listGuessRow.length-1}),key:t,onSelectRow:function(e){return b.setSelectedRowIndex(t,e)},isSelected:t===o.selectedRowIndex,listGuessedChar:e,totalChars:o.keyword.length,rowIndex:t,currentIndex:o.selectedRowIndex},null,8,["class","onSelectRow","isSelected","listGuessedChar","totalChars","rowIndex","currentIndex"])})),128)),b.isEndGame?(Object(i["l"])(),Object(i["e"])("div",m,[Object(i["f"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return b.handleNewGame&&b.handleNewGame.apply(b,arguments)})},Object(i["s"])(b.isEndGame?"New game":"Guess"),1)])):Object(i["d"])("",!0)])],4)],4),Object(i["f"])("div",f,[Object(i["h"])(p,{onClickChar:b.handleClickChar},null,8,["onClickChar"])]),Object(i["h"])(C,{visible:o.isShowModalResult,moves:o.selectedRowIndex,isWin:b.isWin,modalClass:"modalFinish",result:o.keyword,ratio:o.selectedRowIndex/o.totalGuessTime,onClickNewGame:b.handleNewGame,onClose:b.handleCloseModal},null,8,["visible","moves","isWin","result","ratio","onClickNewGame","onClose"])])])],64)}var w=n("3835"),p=n("b85c"),C=n("5530"),g=n("1da1"),T=(n("96cf"),n("d3b7"),n("d81d"),n("ac1f"),n("1276"),n("a630"),n("3ca3"),n("159b"),n("caad"),n("2532"),n("4de4"),n("fb6a"),n("ddb0"),n("498a"),n("a15b"),n("00b4"),{EXCELLENT:.25,GOOD:.75,NICE:1}),y={EXCELLENT:["Incredible!","How extraordinary you are!","Unbelievable!"],GOOD:["Very good!","That's right!","You are so talent!"],NICE:["Nice!","Awesome!","Correct!"]},O=["Bad luck!","It's hard, right?","Not your time!"],j={INCORRECT:0,ALMOST_CORRECT:1,CORRECT:2},x=/[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/,G=["vn"],k=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},R={data:function(){return{CORRECT_LEVEL:j}}},E=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},U=[{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"cat"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"plant"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"island"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"thuỷ"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"pitch"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"perfect"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"chunk"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"chống"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"dog"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"baggy"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"goal"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"làng"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"drink"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"ignore"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"trái"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"kingdom"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"trunk"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"bicycle"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"skill"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"kiến"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"original"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"dragon"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"sống"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"pleat"},{countryCode:"us",isUnicode:!1,guessTime:null,extraGuessTime:null,value:"death"},{countryCode:"vn",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"phải"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"author"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"artist"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"curve"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"couch"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"enjoyment"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"average"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"complete"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"erase"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"famous"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"extreme"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"schedule"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"today"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"weekend"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"favorite"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"moral"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"mystery"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"absent"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"adult"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"sex"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"love"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"arrange"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"chance"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"cubic"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"square"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"oval"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"limit"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"lipid"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"liquid"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"snake"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"tiger"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"monkey"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"buffalo"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"forest"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"mountain"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"double"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"corner"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"quarter"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"divide"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"ghost"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"mineral"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"vitamin"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"human"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"person"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"duck"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"think"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"cancel"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:2,value:"currency"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"brand"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:2,value:"giraffe"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"health"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"commit"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"allow"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:null,value:"adopt"},{countryCode:"us",isUnicode:!0,guessTime:null,extraGuessTime:3,value:"sophisticate"}],M="global",L={SET_KEYWORD_DATA:M+"/setKeywordData",SET_HOVER_CHAR:M+"/setHoverChar"},I={class:"container"},H={key:0,class:"charBoxContainer"},S={key:1,class:"description"},_=Object(i["g"])(" You finished in "),D=Object(i["g"])(" move(s)! ");function N(e,t,n,u,o,s){var l=Object(i["r"])("Modal");return Object(i["l"])(),Object(i["c"])(l,{visible:n.visible,modalClass:n.modalClass},{default:Object(i["u"])((function(){return[Object(i["f"])("div",I,[Object(i["f"])("button",{class:"btn btn-close",onClick:t[0]||(t[0]=function(){return n.onClose&&n.onClose.apply(n,arguments)})},"x"),Object(i["f"])("h1",null,Object(i["s"])(n.isWin?"Congratulation!":"Oops! :("),1),Object(i["f"])("p",{class:Object(i["j"])(["message",s.messageClassName])},Object(i["s"])(s.message),3),n.isWin?(Object(i["l"])(),Object(i["e"])("div",H,[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(n.result,(function(e,t){return Object(i["l"])(),Object(i["e"])("div",{class:Object(i["j"])(["charBox",{last:t===n.result.length-1}]),key:t},Object(i["s"])(e),3)})),128))])):Object(i["d"])("",!0),n.isWin?(Object(i["l"])(),Object(i["e"])("p",S,[_,Object(i["f"])("b",null,Object(i["s"])(n.moves),1),D])):Object(i["d"])("",!0),Object(i["f"])("button",{class:"btn btn-modal",onClick:t[1]||(t[1]=function(){return n.onClickNewGame&&n.onClickNewGame.apply(n,arguments)})},"New game")])]})),_:1},8,["visible","modalClass"])}n("7db0"),n("b64b"),n("a9e3");function A(e,t,n,u,o,s){return Object(i["l"])(),Object(i["e"])("div",{class:Object(i["j"])(["modal",[{visible:n.visible}]])},[Object(i["f"])("div",{class:Object(i["j"])(["content",[{showUp:n.visible},n.modalClass]])},[Object(i["q"])(e.$slots,"default",{},void 0,!0)],2)],2)}var P={name:"Modal",props:{visible:Boolean,modalClass:String}},W=(n("7098"),n("6b0d")),$=n.n(W);const F=$()(P,[["render",A],["__scopeId","data-v-16048c66"]]);var K=F,V={name:"ModalFinish",computed:{winLevel:function(){var e=this;return this.visible&&Object.keys(T).find((function(t){return Math.max(e.ratio,T[t])<=T[t]}))||""},messageClassName:function(){return this.isWin?this.winLevel.toLowerCase():""},message:function(){if(!this.visible)return"";if(this.isWin){var e=y[this.winLevel];return e[k(0,e.length-1)]}return O[k(0,O.length-1)]}},components:{Modal:K},props:{moves:Number,ratio:Number,isWin:Boolean,visible:Boolean,modalClass:String,result:Array,onClickNewGame:Function,onClose:Function}};n("01ee");const z=$()(V,[["render",N],["__scopeId","data-v-32184eba"]]);var B=z,q={class:"input-front"},Y={key:0,class:"guessedChar"};function X(e,t,n,u,o,s){var l=this;return Object(i["l"])(),Object(i["e"])("div",{class:Object(i["j"])(["row",{selected:n.isSelected}]),onClick:t[0]||(t[0]=function(){return n.onSelectRow&&n.onSelectRow.apply(n,arguments)})},[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(n.totalChars,(function(e,t){var u,o,s,a,r,c,d,h,v,m,f,b;return Object(i["l"])(),Object(i["e"])("div",{class:Object(i["j"])(["input",{active:!(null===(u=n.listGuessedChar[t])||void 0===u||!u.value)}]),key:t},[Object(i["f"])("div",{class:Object(i["j"])(["input-inner",{flip:null===(o=n.listGuessedChar[t])||void 0===o?void 0:o.animate}])},[Object(i["f"])("div",q,[n.listGuessedChar.length?(Object(i["l"])(),Object(i["e"])("p",Y,Object(i["s"])(null===(s=n.listGuessedChar[t])||void 0===s?void 0:s.value),1)):Object(i["d"])("",!0)]),Object(i["f"])("div",{class:Object(i["j"])(["input-back",{isCorrect:(null===(a=n.listGuessedChar)||void 0===a?void 0:a.length)&&(null===(r=n.listGuessedChar[t])||void 0===r?void 0:r.correctLevel)===l.CORRECT_LEVEL.CORRECT,isAlmostCorrect:(null===(c=n.listGuessedChar)||void 0===c?void 0:c.length)&&(null===(d=n.listGuessedChar[t])||void 0===d?void 0:d.correctLevel)===l.CORRECT_LEVEL.ALMOST_CORRECT,isIncorrect:(null===(h=n.listGuessedChar)||void 0===h?void 0:h.length)&&(null===(v=n.listGuessedChar[t])||void 0===v?void 0:v.correctLevel)===l.CORRECT_LEVEL.INCORRECT}])},[n.listGuessedChar.length?(Object(i["l"])(),Object(i["e"])("p",{key:0,class:Object(i["j"])(["guessedChar",{highlight:(null===(m=n.listGuessedChar[t])||void 0===m?void 0:m.correctLevel)===l.CORRECT_LEVEL.CORRECT||(null===(f=n.listGuessedChar[t])||void 0===f?void 0:f.correctLevel)===l.CORRECT_LEVEL.ALMOST_CORRECT}])},Object(i["s"])(null===(b=n.listGuessedChar[t])||void 0===b?void 0:b.value),3)):Object(i["d"])("",!0)],2)],2)],2)})),128))],2)}var J={name:"GuessRow",mixins:[R],props:{onSelectRow:Function,isSelected:Boolean,listGuessedChar:Array,totalChars:Number,rowIndex:Number,currentIndex:Number}};n("dd11");const Z=$()(J,[["render",X],["__scopeId","data-v-72a3ca2c"]]);var Q=Z;function ee(e,t,n,u,o,s){var l=Object(i["r"])("RowChar");return Object(i["l"])(),Object(i["e"])("div",{class:"keyboardContainer",onMousemove:t[0]||(t[0]=function(){return s.handleTouchMove&&s.handleTouchMove.apply(s,arguments)}),onTouchmove:t[1]||(t[1]=function(){return s.handleTouchMove&&s.handleTouchMove.apply(s,arguments)}),onTouchend:t[2]||(t[2]=function(){return s.handleTouchEnd&&s.handleTouchEnd.apply(s,arguments)})},[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(o.data,(function(e,t){return Object(i["l"])(),Object(i["c"])(l,{class:Object(i["j"])(["rowContainer",{first:!t}]),key:t,listChars:e,onClickChar:function(e,t){s.handleTouchEnd(e),n.onClickChar(t)},charHover:o.charHover,onMouseOverChar:s.handleMouseOverChar,onMouseLeaveChar:s.handleMouseLeaveChar},null,8,["class","listChars","onClickChar","charHover","onMouseOverChar","onMouseLeaveChar"])})),128))],32)}var te={TOP:[{which:81,value:"q"},{which:87,value:"w"},{which:69,value:"e",vn:[{which:void 0,value:"è"},{which:void 0,value:"é"},{which:void 0,value:"ẻ"},{which:void 0,value:"ẽ"},{which:void 0,value:"ẹ"},{which:void 0,value:"ê"},{which:void 0,value:"ề"},{which:void 0,value:"ế"},{which:void 0,value:"ể"},{which:void 0,value:"ễ"},{which:void 0,value:"ệ"}]},{which:65,value:"r"},{which:84,value:"t"},{which:89,value:"y",vn:[{which:void 0,value:"ỳ"},{which:void 0,value:"ý"},{which:void 0,value:"ỷ"},{which:void 0,value:"ỹ"},{which:void 0,value:"ỵ"}]},{which:85,value:"u",vn:[{which:void 0,value:"ù"},{which:void 0,value:"ú"},{which:void 0,value:"ủ"},{which:void 0,value:"ũ"},{which:void 0,value:"ụ"}]},{which:73,value:"i",vn:[{which:0,value:"ì"},{which:0,value:"í"},{which:0,value:"ỉ"},{which:0,value:"ĩ"},{which:0,value:"ị"}]},{which:79,value:"o",vn:[{which:void 0,value:"ò"},{which:void 0,value:"ó"},{which:void 0,value:"ỏ"},{which:void 0,value:"õ"},{which:void 0,value:"ọ"},{which:void 0,value:"ô"},{which:void 0,value:"ồ"},{which:void 0,value:"ố"},{which:void 0,value:"ổ"},{which:void 0,value:"ỗ"},{which:void 0,value:"ộ"},{which:void 0,value:"ơ"},{which:void 0,value:"ờ"},{which:void 0,value:"ớ"},{which:void 0,value:"ở"},{which:void 0,value:"ỡ"},{which:void 0,value:"ợ"}]},{which:80,value:"p"}],MIDDLE:[{which:65,value:"a",vn:[{which:void 0,value:"à"},{which:void 0,value:"á"},{which:void 0,value:"ả"},{which:void 0,value:"ã"},{which:void 0,value:"ạ"},{which:void 0,value:"â"},{which:void 0,value:"ầ"},{which:void 0,value:"ấ"},{which:void 0,value:"ẩ"},{which:void 0,value:"ẫ"},{which:void 0,value:"ậ"},{which:void 0,value:"ă"},{which:void 0,value:"ằ"},{which:void 0,value:"ắ"},{which:void 0,value:"ẳ"},{which:void 0,value:"ẵ"},{which:void 0,value:"ặ"}]},{which:83,value:"s"},{which:68,value:"d",vn:[{which:void 0,value:"đ"}]},{which:70,value:"f"},{which:71,value:"g"},{which:72,value:"h"},{which:74,value:"j"},{which:75,value:"k"},{which:76,value:"l"}],BOTTOM:[{which:13,value:"Enter"},{which:90,value:"z"},{which:88,value:"x"},{which:67,value:"c"},{which:86,value:"v"},{which:66,value:"b"},{which:78,value:"n"},{which:77,value:"m"},{which:8,value:"Del"}]},ne={class:"row"},ie=["innerHTML"];function ue(e,t,n,u,o,s){var l=Object(i["r"])("Char");return Object(i["l"])(),Object(i["e"])("div",ne,[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(n.listChars,(function(e,t){var u,a;return Object(i["l"])(),Object(i["c"])(l,{class:Object(i["j"])([{first:!t},{big:(null===(u=e.value)||void 0===u?void 0:u.length)>1},{halfSpace:!e.value}]),key:t,value:e.value,isShowContent:e.value===(null===(a=n.charHover)||void 0===a?void 0:a.value),onGetCharElement:s.handleCharElement,onMouseUp:function(t){return s.handleClickChar(t,e)},onMouseOver:function(t){return n.onMouseOverChar(e,t)},onMouseLeave:n.onMouseLeaveChar},{default:Object(i["u"])((function(){var t,n;return[e.isHover&&null!==(t=e[s.countryCode])&&void 0!==t&&t.length?(Object(i["l"])(),Object(i["e"])("div",{key:0,class:"special",style:Object(i["k"])({bottom:o.charHoverInfo.bottom+"px",width:o.charHoverInfo.listWidth+"px",left:void 0!==o.charHoverInfo.listLeft?o.charHoverInfo.listLeft+"px":"unset",right:void 0!==o.charHoverInfo.listRight?o.charHoverInfo.listRight+"px":"unset"})},[Object(i["f"])("div",{class:"tail",style:Object(i["k"])({left:void 0!==o.charHoverInfo.tailLeft?o.charHoverInfo.tailLeft+"px":"unset",right:void 0!==o.charHoverInfo.tailRight?o.charHoverInfo.tailRight+"px":"unset"})},null,4),(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])((null===(n=o.charHoverInfo)||void 0===n?void 0:n.list)||[],(function(e,t){var n,u;return Object(i["l"])(),Object(i["e"])("div",{class:Object(i["j"])(["row",{first:!t&&(null===(n=o.charHoverInfo)||void 0===n||null===(u=n.list)||void 0===u?void 0:u.length)>1}]),key:t},[(Object(i["l"])(!0),Object(i["e"])(i["a"],null,Object(i["p"])(e,(function(e,t){return Object(i["l"])(),Object(i["c"])(l,{class:Object(i["j"])(["charSpecial",{first:!t}]),width:o.charHoverInfo.width,height:o.charHoverInfo.height,key:t,value:e.value,onMouseUp:function(t){t.stopPropagation(),s.handleClickChar(t,e)}},{default:Object(i["u"])((function(){return[Object(i["g"])(Object(i["s"])(e.value),1)]})),_:2},1032,["class","width","height","value","onMouseUp"])})),128))],2)})),128))],4)):Object(i["d"])("",!0),Object(i["f"])("div",{innerHTML:e.value},null,8,ie)]})),_:2},1032,["class","value","isShowContent","onGetCharElement","onMouseUp","onMouseOver","onMouseLeave"])})),128))])}var oe=["id"];function se(e,t,n,u,o,s){return Object(i["l"])(),Object(i["e"])("div",{id:n.value,class:Object(i["j"])(["char",{hover:s.isHover||o.isTouch}]),style:Object(i["k"])(s.customStyle),onMouseup:t[0]||(t[0]=function(){return n.onMouseUp&&n.onMouseUp.apply(n,arguments)}),onMouseover:t[1]||(t[1]=function(){return s.handleMouseOver&&s.handleMouseOver.apply(s,arguments)}),onMouseleave:t[2]||(t[2]=function(){return s.handleMouseLeave&&s.handleMouseLeave.apply(s,arguments)}),onTouchstart:t[3]||(t[3]=function(){return s.handleTouchStart&&s.handleTouchStart.apply(s,arguments)}),onTouchmove:t[4]||(t[4]=function(){return s.handleTouchMove&&s.handleTouchMove.apply(s,arguments)}),onTouchend:t[5]||(t[5]=function(){return s.handleTouchEnd&&s.handleTouchEnd.apply(s,arguments)})},[Object(i["q"])(e.$slots,"default",{},void 0,!0)],46,oe)}var le={name:"Char",data:function(){return{mouseOverTimeoutId:-1,isTouch:!1}},computed:{isHover:function(){var e;return(null===(e=this.$store.state.global.hoverChar)||void 0===e?void 0:e.value)===this.value},customStyle:function(){return{width:this.width?this.width+"px!important":void 0,height:this.height?this.height+"px!important":void 0,padding:0}}},watch:{isShowContent:function(e){if(e){var t=document.getElementById(this.value);this.onGetCharElement(t)}}},methods:{handleTouchStart:function(e){var t=this;e.stopPropagation(),this.isTouch=!0,this.mouseOverTimeoutId=setTimeout((function(){return t.onMouseOver(e)}),500)},handleTouchMove:function(e){this.isTouch=!1},handleTouchEnd:function(e){clearTimeout(this.mouseOverTimeoutId),this.isTouch&&(this.onMouseUp(e),this.isTouch=!1)},handleMouseOver:function(e){if(E())return e.preventDefault(),void e.stopPropagation();this.onMouseOver(e)},handleMouseLeave:function(e){if(E())return e.preventDefault(),void e.stopPropagation();this.onMouseLeave(e)}},props:{value:String,width:Number,height:Number,isShowContent:Boolean,onGetCharElement:{type:Function,default:function(e){}},onMouseUp:{type:Function,default:function(e){}},onMouseOver:{type:Function,default:function(e){}},onMouseLeave:{type:Function,default:function(e){}}}};n("b7df");const ae=$()(le,[["render",se],["__scopeId","data-v-4eb052f1"]]);var re=ae,ce={name:"RowChar",components:{Char:re},data:function(){return{charHoverInfo:{}}},computed:{countryCode:function(){var e,t;return null===(e=this.$store.state.global)||void 0===e||null===(t=e.keywordData)||void 0===t?void 0:t.countryCode}},methods:{handleClickChar:function(e,t){var n,i=t;if(E()&&(null!==(n=e.changedTouches)&&void 0!==n&&n.length)){var u,o,s=e.changedTouches.item(0);if(i=document.elementFromPoint(s.clientX,s.clientY),(null===(u=i)||void 0===u?void 0:u.id)!==t.value)null!==(o=this.charHover)&&void 0!==o&&o.isHover&&this.$store.state.global.hoverChar&&(t=this.$store.state.global.hoverChar)}this.onClickChar(e,t)},handleCharElement:function(e){var t,n=this,i=e.parentElement.clientWidth,u={width:e.clientWidth,height:e.clientHeight,left:e.offsetLeft,bottom:e.clientHeight+10},o=Math.floor((i-6)/(u.width+6)),s=[];Array.from({length:Math.ceil(((null===(t=this.charHover[this.countryCode])||void 0===t?void 0:t.length)||0)/o)||1}).forEach((function(e,t){s[t]=n.charHover[n.countryCode].slice(t*o,(t+1)*o)}));var l=s[0].length*u.width+6*(s[0].length-1),a=u.width/2-(l+20)/2,r=u.left+a<0,c=u.left+a+l>window.innerWidth;this.charHoverInfo=Object(C["a"])({tailLeft:r?u.left+u.width/2-5:c?void 0:u.width/2-a-5,tailRight:c?window.innerWidth-u.left-u.width/2-5:void 0,listWidth:l,listLeft:r?-u.left:void 0,listRight:c?u.left+u.width-window.innerWidth:void 0,list:s},u)}},props:{listChars:Array,charHover:Object,onClickChar:Function,onMouseOverChar:Function,onMouseLeaveChar:Function}};n("65a3");const de=$()(ce,[["render",ue],["__scopeId","data-v-13fce2fb"]]);var he=de,ve={name:"Keyboard",components:{RowChar:he},created:function(){this.data=Object.keys(te).map((function(e,t){var n=te[e].map((function(e){return Object(C["a"])(Object(C["a"])({},e),{},{correctLevel:void 0,isHover:!1})}));return 1===t&&(n.unshift({}),n.push({})),n}))},data:function(){return{data:[],charHover:void 0,timeoutCharHoverId:void 0}},computed:{countryCode:function(){var e,t;return null===(e=this.$store.state.global)||void 0===e||null===(t=e.keywordData)||void 0===t?void 0:t.countryCode},hasSpecialChar:function(){var e=this;return G.find((function(t){return t===e.countryCode}))}},methods:{getActualElement:function(e){var t=null;return t=E()?document.elementFromPoint(e.changedTouches.item(0).clientX,e.changedTouches.item(0).clientY):document.elementFromPoint(e.clientX,e.clientY),t},updateDataOnHover:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.data.forEach((function(i){i.forEach((function(i){i.value===(null===e||void 0===e?void 0:e.value)?i.isHover=t:n&&(i.isHover=!1)}))}))},handleMouseOverChar:function(e){var t,n;this.hasSpecialChar&&null!==(t=e[this.countryCode])&&void 0!==t&&t.length&&((null===(n=this.charHover)||void 0===n?void 0:n.value)===(null===e||void 0===e?void 0:e.value)&&clearTimeout(this.timeoutCharHoverId),this.updateDataOnHover(e,!0,!0),this.charHover=e)},handleMouseLeaveChar:function(e){var t=this,n=this.charHover,i=this.getActualElement(e);this.timeoutCharHoverId=setTimeout((function(){var u;(null===(u=t.hoverChar)||void 0===u?void 0:u.value)!==(null===n||void 0===n?void 0:n.value)&&null!==i&&void 0!==i&&i.id||t.handleTouchEnd(e)}),100)},handleTouchMove:function(e){var t,n,i,u=this,o=this.getActualElement(e);this.data.forEach((function(e){return e.forEach((function(e){var t;null!==e&&void 0!==e&&e.value&&null!==o&&void 0!==o&&o.id&&e.value===o.id?(u.hoverChar=Object(C["a"])({},e),u.updateDataOnHover(e,!1,!0),u.handleMouseOverChar(e)):null!==(t=e[u.countryCode])&&void 0!==t&&t.length&&e[u.countryCode].forEach((function(e){(null===e||void 0===e?void 0:e.value)===(null===o||void 0===o?void 0:o.id)&&(u.hoverChar=Object(C["a"])({},e))}))}))})),this.hoverChar&&(null===(t=this.hoverChar)||void 0===t?void 0:t.value)!==(null===(n=this.$store.state.global)||void 0===n||null===(i=n.hoverChar)||void 0===i?void 0:i.value)&&(this.$store.commit(L.SET_HOVER_CHAR,this.hoverChar),this.handleMouseLeaveChar(e))},handleTouchEnd:function(e){e.preventDefault(),this.hoverChar&&E()&&this.onClickChar(this.hoverChar),this.updateDataOnHover(this.hoverChar,!1,!0),this.hoverChar=void 0,this.$store.commit(L.SET_HOVER_CHAR,void 0)}},props:{onClickChar:Function}};n("2bc6");const me=$()(ve,[["render",ee],["__scopeId","data-v-ca8a9f20"]]);var fe=me,be={name:"Main",created:function(){this.initData()},mounted:function(){document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keypress",this.handleKeyPress)},beforeUnmount:function(){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keypress",this.handleKeyPress)},data:function(){return{keyPressed:"",keywordData:null,totalGuessTime:0,keyword:"",selectedRowIndex:0,listGuessRow:[],animateResult:!1,isShowModalResult:!1,isMobileOrTablet:E()}},components:{ModalFinish:B,GuessRow:Q,Keyboard:fe},computed:{containerStyle:function(){var e=60,t=e*this.keyword.length+6*(this.keyword.length-1);return t+20<window.innerWidth?t:""},getImgUrl:function(){var e=n("3fd6");return e("./"+this.keywordData.countryCode+".svg")},canSubmit:function(){var e;return this.selectedRowIndex<=this.listGuessRow.length&&(null===(e=this.currentListGuessRow)||void 0===e?void 0:e.length)===this.keyword.length&&!this.animateResult},isWin:function(){var e;return!(null===(e=this.listGuessRow[this.selectedRowIndex-1])||void 0===e||!e.length)&&this.listGuessRow[this.selectedRowIndex-1].every((function(e){return(null===e||void 0===e?void 0:e.correctLevel)===j.CORRECT}))},isEndGame:function(){return this.selectedRowIndex>=this.listGuessRow.length||this.isWin},currentListGuessRow:{get:function(){return this.listGuessRow[this.selectedRowIndex]},set:function(e){this.listGuessRow[this.selectedRowIndex]=e}},paddingBottom:function(){var e;return(null===(e=document.getElementById("footer"))||void 0===e?void 0:e.offsetHeight)+"px"}},watch:{isEndGame:function(e){e&&(this.isShowModalResult=e)},keyPressed:function(e){var t=this;e?this.listGuessRow.some((function(n,i){if(n.length<=t.keyword.length&&i===t.selectedRowIndex)return t.listGuessRow[i]=e.split("").map((function(e){return{correctLevel:void 0,value:e.toUpperCase()}})),!0})):this.currentListGuessRow=[]}},methods:{initData:function(){this.keyPressed="",this.selectedRowIndex=0,this.isShowModalResult=!1,this.keywordData=U[k(0,U.length-1)],this.keyword=this.keywordData.value.toUpperCase().split(""),this.$store.commit(L.SET_KEYWORD_DATA,this.keywordData),this.totalGuessTime=this.keyword.length+1+(this.keywordData.extraGuessTime||0),this.listGuessRow=Array.from({length:this.totalGuessTime}).map((function(){return[]}))},handleNewGame:function(){this.isShowModalResult=!1,setTimeout(this.initData,300)},handleClickChar:function(e){this.handleKeyDown(e)},handleKeyDown:function(e){if(this.animateResult)this.$refs.input.blur();else if(e.which>=37&&e.which<=40||32===e.which)e.preventDefault&&e.preventDefault();else{if(13===e.which)return this.isEndGame?this.handleNewGame():this.onSubmit(),void(e.preventDefault?e.preventDefault():this.$refs.input.dispatchEvent(new Event("input")));this.isMobileOrTablet||this.$refs.input.focus(),e.value&&(8===e.which?this.$refs.input.value=this.$refs.input.value.substr(0,this.$refs.input.value.length-1):this.$refs.input.value.length<this.keyword.length&&(this.$refs.input.value+=e.value),this.$refs.input.dispatchEvent(new Event("input")))}},handleKeyPress:function(e){},setSelectedRowIndex:function(e){},onSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,i,u,o,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.canSubmit){t.next=2;break}return t.abrupt("return");case 2:if(!e.isEndGame){t.next=5;break}return e.handleNewGame(),t.abrupt("return");case 5:n=e.currentListGuessRow.map((function(e){return Object(C["a"])({},e)})),n.forEach((function(t,n){null!==t&&void 0!==t&&t.value&&t.value===e.keyword[n]&&(t.correctLevel=j.CORRECT)})),n.forEach((function(t,i){null!==t&&void 0!==t&&t.value&&(e.keyword.includes(t.value)&&t.correctLevel!==j.CORRECT&&n.slice(0,i+1).filter((function(n){return n.value===t.value&&e.keyword.includes(t.value)&&n.correctLevel!==j.CORRECT})).length+n.filter((function(n){return n.value===t.value&&e.keyword.includes(t.value)&&n.correctLevel===j.CORRECT})).length<=e.keyword.filter((function(e){return e===t.value})).length?t.correctLevel=j.ALMOST_CORRECT:void 0===t.correctLevel&&(t.correctLevel=j.INCORRECT))})),e.animateResult=!0,i=Object(p["a"])(n.entries()),t.prev=10,i.s();case 12:if((u=i.n()).done){t.next=20;break}return o=Object(w["a"])(u.value,2),s=o[0],l=o[1],l.animate=!0,e.currentListGuessRow[s]=l,t.next=18,new Promise((function(e){return setTimeout(e,150)}));case 18:t.next=12;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](10),i.e(t.t0);case 25:return t.prev=25,i.f(),t.finish(25);case 28:e.animateResult=!1,e.selectedRowIndex++,e.updateInputValue("");case 31:case"end":return t.stop()}}),t,null,[[10,22,25,28]])})))()},changeInput:function(e){var t=e.target.value.trim();t=t.split("").map((function(e){return x.test(e)?e:""})).join(""),this.updateInputValue(t),this.keyPressed=e.target.value.trim()},updateInputValue:function(e){this.$refs.input&&(this.$refs.input.value=e)},handleCloseModal:function(){this.isShowModalResult=!1}}};n("10a9"),n("9304");const we=$()(be,[["render",b],["__scopeId","data-v-62f2a88e"]]);var pe=we,Ce={name:"App",components:{Main:pe}};n("a6b7");const ge=$()(Ce,[["render",u]]);var Te,ye=ge,Oe=n("5502"),je=n("ade3"),xe=function(){return{keywordData:void 0,charHover:void 0}},Ge={},ke={},Re=(Te={},Object(je["a"])(Te,L.SET_KEYWORD_DATA,(function(e,t){e.keywordData=t})),Object(je["a"])(Te,L.SET_HOVER_CHAR,(function(e,t){e.hoverChar=t})),Te),Ee={state:xe,getters:Ge,actions:ke,mutations:Re},Ue=!1,Me=Object(Oe["b"])({modules:{global:Ee},strict:Ue,plugins:Ue?[Object(Oe["a"])()]:[]});Object(i["b"])(ye).use(Me).mount("#app")},"65a3":function(e,t,n){"use strict";n("b2c4")},"6c41":function(e,t,n){},7098:function(e,t,n){"use strict";n("a4fe")},9304:function(e,t,n){"use strict";n("3b7b")},a464:function(e,t,n){e.exports=n.p+"img/vn.89c6f27e.svg"},a4fe:function(e,t,n){},a6b7:function(e,t,n){"use strict";n("249f")},b2c4:function(e,t,n){},b7df:function(e,t,n){"use strict";n("ebe8")},bd6d:function(e,t,n){},dd11:function(e,t,n){"use strict";n("bd6d")},ebe8:function(e,t,n){}});
//# sourceMappingURL=app.6e38e67a.js.map