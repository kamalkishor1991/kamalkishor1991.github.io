(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),a=n.n(r),o=n(4),i=n.n(o),c=n(297),l=n(123),s=n.n(l),u=n(80),f=n.n(u),p=function(){function e(){a()(this,e)}return i()(e,null,[{key:"getProminentColors",value:function(t){var n=this;console.log("image: "+t),t.resize(s.a.AUTO,100);var r=e._prepareDataForKmeans(t),a=Date.now(),o=Object(c.a)(r,24,{initialization:"random",maxIterations:20});console.log(JSON.stringify(o)+","+(Date.now()-a)+" ms"),o.centroids=o.centroids.sort((function(e,t){return t.size-e.size})),console.log(o.centroids);var i=o.centroids.map((function(e){return new f.a(n._labToHex(e.centroid))}));return this._getFinalColors(i).map((function(e){return{color:e.tohex()}}))}},{key:"_getFinalColors",value:function(e){var t=this;console.log("----------------------",e),e.sort((function(e,n){return t._toArray(e.tohsv())[0]<t._toArray(n.tohsv())[0]}));for(var n=[],r=0;r<e.length;r+=4){for(var a=[],o=0;o<4;o++)a.push(e[r+o]);a.sort((function(e,n){return t._toArray(e.tohsv())[1]<t._toArray(n.tohsv())[1]})),n.push(a[a.length-1]),n.push(a[a.length-2])}console.log("filtered colors:"+n);for(var i=[],c=0;c<n.length;c+=2)this._toArray(n[c].tohsv())[2]>this._toArray(n[c+1].tohsv())[2]?i.push(n[c]):i.push(n[c+1]);return i}},{key:"_labToHex",value:function(e){return new f.a("lab("+e[0]+", "+e[1]+", "+e[2]+")").tohex()}},{key:"_prepareDataForKmeans",value:function(e){var t=[];console.log("image============",e.bitmap.width,e.bitmap.height);for(var n=0;n<e.bitmap.width;n++)for(var r=0;r<e.bitmap.height;r++){var a=e.getPixelColor(n,r),o=this._toHexColor(a);console.log("hex:",o);var i=new f.a(o).tolab();i=i.substr(4,i.length-5).split(", ").map((function(e){return parseFloat(e)})),t.push(i)}return t}},{key:"_toHexColor",value:function(e){var t=s.a.intToRGBA(e);return new f.a("rgb("+t.r+", "+t.g+", "+t.b+")").tohex()}},{key:"_toArray",value:function(e){var t=e.indexOf("(");return(e=e.substr(t+1,e.length-t)).split(", ").map((function(e){return parseFloat(e)}))}}]),e}()},287:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return S}));var r=n(14),a=n.n(r),o=n(3),i=n.n(o),c=n(4),l=n.n(c),s=n(5),u=n.n(s),f=n(2),p=n.n(f),g=n(6),h=n.n(g),m=n(0),v=n.n(m),d=n(60),y=n(299),b=n(72),E=n(298),C=n(235),w=n(231),k=n(123),x=n.n(k),P=n(7),O=n(83),A=n(8),S=function(t){function n(){var t,r;i()(this,n);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(r=u()(this,(t=p()(n)).call.apply(t,[this].concat(c)))).getPermissionAsync=function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!E.a.platform.ios){t.next=6;break}return t.next=3,a.a.awrap(C.b(C.a));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}))},r._pickImage=function(){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(y.a({mediaTypes:b.a.All,quality:1,base64:!0}));case 2:void 0!==(t=n.sent).base64?x.a.read(new e(t.base64,"base64")).then((function(e){r.props.navigation.navigate("ColorList",{colors:w.a.getProminentColors(e)})})).catch((function(e){console.log("Error: "+JSON.stringify(e))})):x.a.read(t.uri).then((function(e){r.props.navigation.navigate("ColorList",{colors:w.a.getProminentColors(e)})})).catch((function(e){console.log("Error: "+JSON.stringify(e))}));case 4:case"end":return n.stop()}}))},r}return h()(n,t),l()(n,[{key:"render",value:function(){var e=this;return v.a.createElement(P.a,{style:{backgroundColor:"transparent"}},v.a.createElement(d.a,{onPress:function(){e._pickImage()}},"GET PALETTE FROM IMAGE"),v.a.createElement(d.a,{onPress:function(){return e.props.navigation.navigate("ColorPicker")}},"GET PALETTE FROM COLOR"),v.a.createElement(d.a,{onPress:function(){return e.props.navigation.navigate("AddPaletteManually")}},"ADD COLORS MANUALLY"),v.a.createElement(d.a,{style:L.buttonPro,onPress:function(){return O.a.alert("UNLOCK PRO")}},"UNLOCK PRO"))}},{key:"componentDidMount",value:function(){this.getPermissionAsync()}}]),n}(v.a.Component),L=A.a.create({buttonPro:{backgroundColor:"#f1544d"}})}).call(this,n(376).Buffer)},296:function(e,t,n){"use strict";var r=n(14),a=n.n(r),o=n(10),i=n.n(o),c=n(70),l=n.n(c),s=n(505),u=n(507),f=n(124),p=n(0),g=n.n(p),h=n(11),m=n(77),v=n(8),d=n(7),y=n(28),b=n(506),E="#f1544d",C="#333",w="#fff",k="#f2f2f2",x=n(279),P=n(113),O=n(27),A=n(26),S=n(39),L=n(166),j=n(284),T=n(286),D=n(80),R=n.n(D);function _(e){var t=v.a.create({backgroundColor:{backgroundColor:e.color,height:200,alignSelf:"stretch"},info:{flexDirection:"row",justifyContent:"space-between",padding:4},colorNameText:{fontSize:16,fontWeight:"500"}}),n=new R.a(e.color),r=[{key:"HEX",value:n.tohex()},{key:"RGB",value:n.torgb()},{key:"HSL",value:n.tohsl()},{key:"HSV",value:n.tohsv()},{key:"HWB",value:n.tohwb()},{key:"CMYK",value:n.tocmyk()},{key:"CIELAB",value:n.tolab()},{key:"Luminance",value:(100*n.luminance()).toFixed(2)+"%"},{key:"Darkness",value:(100*n.darkness()).toFixed(2)+"%"}];return g.a.createElement(d.a,{style:{flex:1,flexDirection:"column",padding:8}},g.a.createElement(d.a,{style:[t.backgroundColor]}),g.a.createElement(d.a,null,r.map((function(e){return g.a.createElement(S.a,{key:e.key,onPress:function(){return t=e.value,void L.a.setString(t);var t}},g.a.createElement(d.a,{style:t.info},g.a.createElement(A.a,{style:t.colorNameText},e.key," : "),g.a.createElement(A.a,null,e.value),g.a.createElement(j.a,{icon:T.a})))}))))}var N=n(60);function F(e){var t=e.navigation.getParam("color");return g.a.createElement(O.a,{style:M.container},g.a.createElement(_,{navigation:e.navigation,color:t},t),g.a.createElement(N.a,{onPress:function(){return e.navigation.navigate("Palettes",{color:t})}},"See color palettes"))}F.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var M=v.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),B=n(3),I=n.n(B),H=n(4),z=n.n(H),W=n(5),J=n.n(W),$=n(2),G=n.n($),K=n(6),U=n.n(K),V=n(234),Z=function(e){function t(e){var n;return I()(this,t),(n=J()(this,G()(t).call(this,e))).state={color:"#4cb96b"},n}return U()(t,e),z()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(d.a,null,g.a.createElement(V.a,{onColorChange:function(t){return e.setState({color:Object(V.b)(t)})},style:{height:400}}),g.a.createElement(A.a,null,this.state.color),g.a.createElement(N.a,{onPress:function(){return e.props.navigation.navigate("ColorDetails",{color:e.state.color})}},"SEE COLOR DETAILS"))}}]),t}(g.a.Component),Y=n(9),q=n(55),X=function(e){function t(){return I()(this,t),J()(this,G()(t).apply(this,arguments))}return U()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(q.e,{onPress:this.props.onPress,style:[Q.inner,this.props.style]},p.createElement(Y.a.View,this.props,this.props.children))}}]),t}(p.Component),Q=v.a.create({inner:{backgroundColor:w,marginVertical:4,elevation:1,marginTop:8,marginBottom:8}});function ee(e){var t=v.a.create({palette:{alignItems:"stretch",flexDirection:"row",height:100},color:{flex:1}});return p.createElement(d.a,{style:t.palette},e.colors.map((function(e){return p.createElement(d.a,{style:[t.color,{backgroundColor:e.color}],key:e.color})})))}var te=function(e){function t(){return I()(this,t),J()(this,G()(t).apply(this,arguments))}return U()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(X,this.props,p.createElement(d.a,null,p.createElement(ee,this.props),p.createElement(d.a,{style:ne.bottom},p.createElement(A.a,{style:ne.label},this.props.name))))}}]),t}(p.Component),ne=v.a.create({bottom:{flexDirection:"row",alignItems:"center"},label:{flex:1,marginHorizontal:16,color:C}});function re(e){var t=new R.a(e.navigation.getParam("color")),n=[];for(var r in t)/.*scheme$/i.test(r)&&"function"===typeof t[r]&&function(){var a,o=[];t[r]().forEach((function(e){return o.push({color:e.tohex()})})),n.push(g.a.createElement(te,{onPress:function(){return e.navigation.navigate("ColorList",{colors:o})},key:r.toString(),colors:o,name:(a=r.toString(),"string"!==typeof a?"":a.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()})))}))}();return g.a.createElement(O.a,{style:ae.container},n)}re.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var ae=v.a.create({container:{flex:1,paddingLeft:12,paddingRight:12,backgroundColor:"#fff"}}),oe=n(287);function ie(e){return g.a.createElement(O.a,{contentContainerStyle:ce.container},g.a.createElement(oe.a,{navigation:e.navigation}))}ie.navigationOptions={title:"Add new palette"};var ce=v.a.create({container:{flex:1,marginLeft:12,marginRight:12,justifyContent:"center"}}),le=n(54),se=n(97),ue=n(83),fe=function(e){function t(e){var n;return I()(this,t),(n=J()(this,G()(t).call(this,e))).state={text:""},n}return U()(t,e),z()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(q.c,null,g.a.createElement(d.a,{style:pe.card},g.a.createElement(A.a,{style:pe.label},"ADD NEW PALETTE"),g.a.createElement(le.a,{style:pe.input,placeholder:"Enter a name for the palette",onChangeText:function(t){return e.setState({text:t})}})),g.a.createElement(se.a,{onPress:function(){return ue.a.alert(e.state.text)},title:"Save Palette"}))}}]),t}(g.a.Component),pe=v.a.create({card:{flex:1,flexDirection:"column",justifyContent:"center",shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:80,margin:10,padding:10},label:{flex:1,color:C},input:{flex:1,borderBottomColor:"black",borderBottomWidth:1}});var ge=function(e){function t(){return I()(this,t),J()(this,G()(t).apply(this,arguments))}return U()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(d.a,{style:[he.container,{backgroundColor:this.props.color}]},p.createElement(A.a,{style:he.colorText},this.props.color))}}]),t}(p.Component),he=v.a.create({container:{height:40,flex:1,justifyContent:"center",alignItems:"center"},colorText:{fontWeight:"700",backgroundColor:"rgba(255, 255, 255, .3)",paddingLeft:5,paddingRight:5}});function me(e){var t=this,n=e.navigation.getParam("colors");return console.log("Colors:"+JSON.stringify(n)),g.a.createElement(O.a,{style:ve.listview},n.map((function(e){return g.a.createElement(ge,{color:e.color})})),g.a.createElement(N.a,{onPress:function(){return t.props.navigation.navigate("ColorPicker")}},"SAVE AS NEW PALETTE"))}me.navigationOptions={title:"Colors"};var ve=v.a.create({listview:{margin:8}}),de=function(e){function t(){return I()(this,t),J()(this,G()(t).apply(this,arguments))}return U()(t,e),z()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(d.a,{style:ye.inputsContainer},g.a.createElement(N.a,{onPress:function(){return e.props.navigation.navigate("AddPalette")}},"Add new palette"))}}]),t}(g.a.Component),ye=v.a.create({inputsContainer:{flex:1,justifyContent:"center"}});function be(e){return g.a.createElement(O.a,{contentContainerStyle:Ee.container},g.a.createElement(de,{navigation:e.navigation}))}be.navigationOptions={title:"Croma"};var Ee=v.a.create({container:{flex:1,paddingLeft:0,paddingRight:0,backgroundColor:"#fff",justifyContent:"center"}}),Ce=(h.a.select({web:{headerMode:"screen"},default:{}}),Object(P.createStackNavigator)({ColorDetails:F,ColorPicker:function(e){return g.a.createElement(O.a,null,g.a.createElement(Z,{navigation:e.navigation}))},Palettes:re,AddPalette:ie,AddPaletteManually:function(e){return console.log(e),g.a.createElement(O.a,null,g.a.createElement(fe,{navigation:e.navigation}))},ColorList:me,PaletteList:be},{initialRouteName:"PaletteList",defaultNavigationOptions:{headerStyle:{backgroundColor:E},headerTintColor:"#fff"}})),we=(Object(P.createAppContainer)(Ce),Ce),ke=Object(P.createSwitchNavigator)({Main:we});ke.path="";var xe=Object(x.createBrowserApp)(ke,{history:"hash"});function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ae(e){var t=Object(p.useState)(!1),n=l()(t,2),r=n[0],a=n[1],o=y.a.get("window"),i=o.height,c=o.width;return console.log("height",i,"width",c),r||e.skipLoadingScreen?g.a.createElement(d.a,{style:[je.container]},g.a.createElement(d.a,{style:[{width:"web"==h.a.OS?Math.min(600,c):c}]},"ios"===h.a.OS&&g.a.createElement(m.a,{barStyle:"default"}),g.a.createElement(xe,null))):g.a.createElement(s.a,{startAsync:Se,onError:Le,onFinish:function(){return function(e){e(!0)}(a)}})}function Se(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(Promise.all([u.a.loadAsync([n(386),n(387)]),f.b(Oe({},b.a.font,{"space-mono":n(481)}))]));case 2:case"end":return e.stop()}}))}function Le(e){console.warn(e)}n.d(t,"a",(function(){return Ae}));var je=v.a.create({container:{flex:1,justifyContent:"center",backgroundColor:k,flexDirection:"row"}})},302:function(e,t,n){n(303),e.exports=n(483)},303:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},386:function(e,t,n){e.exports=n.p+"static/media/robot-dev.54da1e98.png"},387:function(e,t,n){e.exports=n.p+"static/media/robot-prod.c7578911.png"},481:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(3),a=n.n(r),o=n(4),i=n.n(o),c=n(5),l=n.n(c),s=n(2),u=n.n(s),f=n(6),p=n.n(f),g=n(0),h=n(8),m=n(26),v=n(55),d=function(e){function t(){return a()(this,t),l()(this,u()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"render",value:function(){return g.createElement(v.e,{style:[y.button,this.props.style],onPress:this.props.onPress},g.createElement(m.a,{style:{textTransform:"uppercase"}},"  ",this.props.children," "))}}]),t}(g.Component),y=h.a.create({button:{shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:50,marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center",flexDirection:"column"}})}},[[302,1,2]]]);
//# sourceMappingURL=../../c24aeb2b161bd9b3c69a.map