(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return L}));var a=n(13),r=n.n(a),o=n(3),i=n.n(o),l=n(4),c=n.n(l),s=n(5),u=n.n(s),f=n(2),p=n.n(f),g=n(6),m=n.n(g),h=n(0),v=n.n(h),d=n(52),y=n(301),E=n(72),b=n(302),w=n(238),C=n(290),k=n(124),x=n.n(k),P=n(7),O=n(131),S=n(8),A=n(111),L=function(t){function n(t){var a;return i()(this,n),(a=u()(this,p()(n).call(this,t))).getPermissionAsync=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!b.a.platform.ios){t.next=6;break}return t.next=3,r.a.awrap(w.b(w.a));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}))},a._pickImage=function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(y.a({mediaTypes:E.a.All,quality:1,base64:!0}));case 2:if(void 0===(t=n.sent).base64){n.next=9;break}return n.next=6,r.a.awrap(x.a.read(new e(t.base64,"base64")));case 6:return n.abrupt("return",n.sent);case 9:return n.next=11,r.a.awrap(x.a.read(t.uri));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}))},a.state={loading:!1},a}return m()(n,t),c()(n,[{key:"render",value:function(){var e=this;return v.a.createElement(P.a,null,this.state.loading?v.a.createElement(A.a,null):v.a.createElement(P.a,null),v.a.createElement(d.a,{onPress:function(){e.setState({loading:!0}),e._pickImage().then((function(t,n){e.setState({loading:!1}),e.props.navigation.navigate("ColorList",{colors:C.a.getProminentColors(t)})}))}},"GET PALETTE FROM IMAGE"),v.a.createElement(d.a,{onPress:function(){return e.props.navigation.navigate("ColorPicker")}},"GET PALETTE FROM COLOR"),v.a.createElement(d.a,{onPress:function(){return e.props.navigation.navigate("AddPaletteManually")}},"ADD COLORS MANUALLY"),v.a.createElement(d.a,{style:T.buttonPro,onPress:function(){return O.a.alert("UNLOCK PRO")}},"UNLOCK PRO"))}},{key:"componentDidMount",value:function(){this.getPermissionAsync()}}]),n}(v.a.Component),T=S.a.create({buttonPro:{backgroundColor:"#f1544d"}})}).call(this,n(379).Buffer)},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(3),r=n.n(a),o=n(4),i=n.n(o),l=n(300),c=n(124),s=n.n(c),u=n(80),f=n.n(u),p=function(){function e(){r()(this,e)}return i()(e,null,[{key:"getProminentColors",value:function(t){var n=this;console.log("image: "+t),t.resize(s.a.AUTO,100);var a=e._prepareDataForKmeans(t),r=Date.now(),o=Object(l.a)(a,24,{initialization:"random",maxIterations:20});console.log(JSON.stringify(o)+","+(Date.now()-r)+" ms"),o.centroids=o.centroids.sort((function(e,t){return t.size-e.size})),console.log(o.centroids);var i=o.centroids.map((function(e){return new f.a(n._labToHex(e.centroid))}));return this._getFinalColors(i).map((function(e){return{color:e.tohex()}}))}},{key:"_getFinalColors",value:function(e){var t=this;console.log("----------------------",e),e.sort((function(e,n){return t._toArray(e.tohsv())[0]<t._toArray(n.tohsv())[0]}));for(var n=[],a=0;a<e.length;a+=4){for(var r=[],o=0;o<4;o++)r.push(e[a+o]);r.sort((function(e,n){return t._toArray(e.tohsv())[1]<t._toArray(n.tohsv())[1]})),n.push(r[r.length-1]),n.push(r[r.length-2])}console.log("filtered colors:"+n);for(var i=[],l=0;l<n.length;l+=2)this._toArray(n[l].tohsv())[2]>this._toArray(n[l+1].tohsv())[2]?i.push(n[l]):i.push(n[l+1]);return i}},{key:"_labToHex",value:function(e){return new f.a("lab("+e[0]+", "+e[1]+", "+e[2]+")").tohex()}},{key:"_prepareDataForKmeans",value:function(e){var t=[];console.log("image============",e.bitmap.width,e.bitmap.height);for(var n=0;n<e.bitmap.width;n++)for(var a=0;a<e.bitmap.height;a++){var r=e.getPixelColor(n,a),o=this._toHexColor(r);console.log("hex:",o);var i=new f.a(o).tolab();i=i.substr(4,i.length-5).split(", ").map((function(e){return parseFloat(e)})),t.push(i)}return t}},{key:"_toHexColor",value:function(e){var t=s.a.intToRGBA(e);return new f.a("rgb("+t.r+", "+t.g+", "+t.b+")").tohex()}},{key:"_toArray",value:function(e){var t=e.indexOf("(");return(e=e.substr(t+1,e.length-t)).split(", ").map((function(e){return parseFloat(e)}))}}]),e}()},299:function(e,t,n){"use strict";var a=n(13),r=n.n(a),o=n(10),i=n.n(o),l=n(70),c=n.n(l),s=n(508),u=n(510),f=n(126),p=n(0),g=n.n(p),m=n(11),h=n(77),v=n(8),d=n(7),y=n(28),E=n(509),b="#f1544d",w="#333",C="#fff",k="#f2f2f2",x=n(282),P=n(113),O=n(27),S=n(23),A=n(39),L=n(170),T=n(90),D=n(288),j=n(80),N=n.n(j);function _(e){var t=v.a.create({backgroundColor:{backgroundColor:e.color,height:112,alignSelf:"stretch"},info:{flexDirection:"row",justifyContent:"space-between",padding:10},colorNameText:{fontSize:16,fontWeight:"500"}}),n=new N.a(e.color),a=[{key:"HEX",value:n.tohex()},{key:"RGB",value:n.torgb()},{key:"HSL",value:n.tohsl()},{key:"HSV",value:n.tohsv()},{key:"HWB",value:n.tohwb()},{key:"CMYK",value:n.tocmyk()},{key:"CIELAB",value:n.tolab()},{key:"Luminance",value:(100*n.luminance()).toFixed(2)+"%"},{key:"Darkness",value:(100*n.darkness()).toFixed(2)+"%"}];return g.a.createElement(d.a,{style:{flex:1,flexDirection:"column",padding:8,backgroundColor:"#fff"}},g.a.createElement(d.a,{style:[t.backgroundColor]}),g.a.createElement(d.a,null,a.map((function(e){return g.a.createElement(A.a,{key:e.key,onPress:function(){return t=e.value,void L.a.setString(t);var t}},g.a.createElement(d.a,{style:t.info},g.a.createElement(S.a,{style:t.colorNameText},e.key," : "),g.a.createElement(S.a,null,e.value),g.a.createElement(T.a,{icon:D.a})))}))))}var B=n(52);function R(e){var t=e.navigation.getParam("color");return g.a.createElement(O.a,{style:I.container},g.a.createElement(_,{navigation:e.navigation,color:t},t),g.a.createElement(B.a,{onPress:function(){return e.navigation.navigate("Palettes",{color:t})}},"See color palettes"))}R.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var I=v.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),H=n(3),F=n.n(H),M=n(4),z=n.n(M),J=n(5),W=n.n(J),V=n(2),$=n.n(V),G=n(6),K=n.n(G),U=n(237),Z=function(e){function t(e){var n;return F()(this,t),(n=W()(this,$()(t).call(this,e))).state={color:"#4cb96b"},n}return K()(t,e),z()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(d.a,null,g.a.createElement(U.a,{onColorChange:function(t){return e.setState({color:Object(U.b)(t)})},style:{height:400}}),g.a.createElement(S.a,null,this.state.color),g.a.createElement(B.a,{onPress:function(){return e.props.navigation.navigate("ColorDetails",{color:e.state.color})}},"SEE COLOR DETAILS"))}}]),t}(g.a.Component);var Y=n(9),q=n(44),X=function(e){function t(){return F()(this,t),W()(this,$()(t).apply(this,arguments))}return K()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(q.e,{onPress:this.props.onPress,style:[Q.inner]},p.createElement(Y.a.View,this.props,this.props.children))}}]),t}(p.Component),Q=v.a.create({inner:{backgroundColor:C,marginVertical:8,elevation:1}});function ee(e){var t=v.a.create({palette:{alignItems:"stretch",flexDirection:"row",height:112},color:{flex:1}});return p.createElement(d.a,{style:t.palette},e.colors.map((function(e){return p.createElement(d.a,{style:[t.color,{backgroundColor:e.color}],key:e.color})})))}var te=function(e){function t(){return F()(this,t),W()(this,$()(t).apply(this,arguments))}return K()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(X,this.props,p.createElement(d.a,null,p.createElement(ee,this.props),p.createElement(d.a,{style:ne.bottom},p.createElement(S.a,{style:ne.label},this.props.name))))}}]),t}(p.Component),ne=v.a.create({bottom:{flexDirection:"row",alignItems:"center",height:48},label:{flex:1,fontWeight:500,marginHorizontal:16,color:w}});function ae(e){var t=new N.a(e.navigation.getParam("color")),n=[];for(var a in t)/.*scheme$/i.test(a)&&"function"===typeof t[a]&&function(){var r,o=[];t[a]().forEach((function(e){return o.push({color:e.tohex()})})),n.push(g.a.createElement(te,{onPress:function(){return e.navigation.navigate("ColorList",{colors:o})},key:a.toString(),colors:o,name:(r=a.toString(),"string"!==typeof r?"":r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()})))}))}();return g.a.createElement(O.a,{style:re.container},n)}ae.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var re=v.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),oe=n(289);function ie(e){return g.a.createElement(O.a,{contentContainerStyle:le.container},g.a.createElement(oe.a,{navigation:e.navigation}))}ie.navigationOptions={title:"Add new palette"};var le=v.a.create({container:{flex:1,marginLeft:12,marginRight:12,justifyContent:"center"}}),ce=n(56),se=n(119),ue=function e(){F()(this,e)};ue.save=function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(se.a.getItem("ALL_PALETTES"));case 2:return(t=n.sent)||(t=JSON.stringify({})),(t=JSON.parse(t))[e.name]=e,n.next=8,r.a.awrap(se.a.setItem("ALL_PALETTES",JSON.stringify(t)));case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}))},ue.getAllPalettes=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(se.a.getItem("ALL_PALETTES"));case 2:if(e=t.sent,console.log("Palettes returned from storage: ",e),!e){t.next=8;break}return t.abrupt("return",JSON.parse(e));case 8:return t.abrupt("return",{});case 9:case"end":return t.stop()}}))};var fe=function(e){function t(e){var n;return F()(this,t),(n=W()(this,$()(t).call(this,e))).state={paletteName:"",colors:n.props.navigation.getParam("colors")||[]},n}return K()(t,e),z()(t,[{key:"render",value:function(){var e=this;return console.log("this.props.natigation: ",this.props.navigation),g.a.createElement(q.c,null,g.a.createElement(d.a,{style:pe.card},g.a.createElement(S.a,{style:pe.label},"ADD NEW PALETTE"),g.a.createElement(ce.a,{style:pe.input,placeholder:"Enter a name for the palette",onChangeText:function(t){return e.setState({paletteName:t})}})),g.a.createElement(B.a,{onPress:function(){ue.save({name:e.state.paletteName,colors:e.state.colors}).then((function(){return e.props.navigation.navigate("Home")}))}},"Save palette"))}}]),t}(g.a.Component),pe=v.a.create({card:{flex:1,flexDirection:"column",justifyContent:"center",shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:92,marginVertical:10,padding:10},label:{flex:1,color:w,fontWeight:700},input:{flex:1,borderBottomColor:"black",borderBottomWidth:1}});var ge=function(e){function t(){return F()(this,t),W()(this,$()(t).apply(this,arguments))}return K()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(d.a,{style:[me.container,{backgroundColor:this.props.color}]},p.createElement(S.a,{style:me.colorText},this.props.color))}}]),t}(p.Component),me=v.a.create({container:{height:56,justifyContent:"center",alignItems:"center"},colorText:{fontWeight:"700",backgroundColor:"rgba(255, 255, 255, .3)",paddingLeft:8,paddingRight:8}});function he(e){var t=e.navigation.getParam("colors");return console.log("Colors:"+JSON.stringify(t)),g.a.createElement(O.a,{style:ve.listview},t.map((function(e){return g.a.createElement(ge,{color:e.color})})),g.a.createElement(B.a,{onPress:function(){return e.navigation.navigate("SavePalette",{colors:t})}},"SAVE AS NEW PALETTE"))}he.navigationOptions={title:"Colors"};var ve=v.a.create({listview:{margin:8}}),de=n(125),ye=function(e){function t(){return F()(this,t),W()(this,$()(t).apply(this,arguments))}return K()(t,e),z()(t,[{key:"render",value:function(){return p.createElement(X,this.props,p.createElement(d.a,null,p.createElement(d.a,{style:{backgroundColor:this.props.color,height:100}}),p.createElement(d.a,{style:Ee.bottom},p.createElement(S.a,{style:Ee.label},this.props.name),p.createElement(d.a,{style:Ee.actionButtonsView},p.createElement(q.e,{style:Ee.actionButton},p.createElement(T.a,{icon:de.c}))))))}}]),t}(p.Component),Ee=v.a.create({bottom:{flexDirection:"row",alignItems:"center",paddingTop:8,height:36},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,color:w}});function be(e){var t=e.navigation.getParam("colors");return console.log("Colors:"+JSON.stringify(t)),g.a.createElement(O.a,{style:we.listview},t.map((function(t){return g.a.createElement(ye,{onPress:function(){return e.navigation.navigate("ColorDetails",{color:t.color})},color:t.color})})))}be.navigationOptions=function(e){return{title:e.navigation.getParam("name")}};var we=v.a.create({listview:{margin:8}}),Ce=n(111),ke=function(e){function t(){return F()(this,t),W()(this,$()(t).apply(this,arguments))}return K()(t,e),z()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(d.a,{style:xe.inputsContainer},g.a.createElement(B.a,{onPress:function(){return e.props.navigation.navigate("AddPalette")}},"Add new palette"))}}]),t}(g.a.Component),xe=v.a.create({inputsContainer:{flex:1,justifyContent:"center"}}),Pe=n(14),Oe=n.n(Pe),Se=function(e){function t(e){return F()(this,t),W()(this,$()(t).call(this,e))}return K()(t,e),z()(t,[{key:"render",value:function(){var e=this;return p.createElement(X,Oe()({},this.props,{onPress:function(){console.log("navigate to palette screen"+e.props.navigation),e.props.navigation.navigate("Palette",e.props)}}),p.createElement(d.a,null,p.createElement(ee,this.props),p.createElement(d.a,{style:Ae.bottom},p.createElement(S.a,{style:Ae.label},this.props.name),p.createElement(d.a,{style:Ae.actionButtonsView},p.createElement(q.e,{style:Ae.actionButton},p.createElement(T.a,{icon:de.a})),p.createElement(q.e,{style:Ae.actionButton},p.createElement(T.a,{icon:de.b})),p.createElement(q.e,{style:Ae.actionButton},p.createElement(T.a,{icon:de.c}))))))}}]),t}(p.Component),Ae=v.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,color:w}}),Le=function(e){function t(e){var n;return F()(this,t),(n=W()(this,$()(t).call(this,e))).state={isLoading:!0},n}return K()(t,e),z()(t,[{key:"componentDidMount",value:function(){var e=this;ue.getAllPalettes().then((function(t){e.setState({allPalettes:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return console.log("State: "+JSON.stringify(this.state)),this.state.isLoading?g.a.createElement(Ce.a,null):g.a.createElement(O.a,{contentContainerStyle:Te.container},Object.keys(this.state.allPalettes).map((function(t){return console.log("name: ",t,e.state.allPalettes[t].colors),g.a.createElement(Se,{colors:e.state.allPalettes[t].colors,name:t,navigation:e.props.navigation})})),g.a.createElement(ke,{navigation:this.props.navigation}))}}]),t}(g.a.Component);Le.navigationOptions={title:"Croma"};var Te=v.a.create({container:{flex:1,margin:8,justifyContent:"center"}}),De=(m.a.select({web:{headerMode:"screen"},default:{}}),Object(P.createStackNavigator)({ColorDetails:R,ColorPicker:function(e){return g.a.createElement(O.a,null,g.a.createElement(Z,{navigation:e.navigation}))},Palettes:ae,AddPalette:ie,SavePalette:function(e){return console.log(e),g.a.createElement(O.a,null,g.a.createElement(fe,{navigation:e.navigation}))},ColorList:he,Palette:be,Home:Le},{initialRouteName:"Home",transparentCard:!0,cardStyle:{backgroundColor:"transparent",opacity:1},defaultNavigationOptions:{headerStyle:{backgroundColor:b},headerTintColor:"#fff"}})),je=(Object(P.createAppContainer)(De),De),Ne=Object(P.createSwitchNavigator)({Main:je});Ne.path="";var _e=Object(x.createBrowserApp)(Ne,{history:"hash"});function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ie(e){var t=Object(p.useState)(!1),n=c()(t,2),a=n[0],r=n[1],o=y.a.get("window"),i=o.height,l=o.width;return console.log("height",i,"width",l),a||e.skipLoadingScreen?g.a.createElement(d.a,{style:[Me.container]},g.a.createElement(d.a,{style:[{backgroundColor:"transparent"},{width:"web"==m.a.OS?Math.min(600,l):l}]},"ios"===m.a.OS&&g.a.createElement(h.a,{barStyle:"default"}),g.a.createElement(_e,null))):g.a.createElement(s.a,{startAsync:He,onError:Fe,onFinish:function(){return function(e){e(!0)}(r)}})}function He(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(Promise.all([u.a.loadAsync([n(389),n(390)]),f.b(Re({},E.a.font,{"space-mono":n(484)}))]));case 2:case"end":return e.stop()}}))}function Fe(e){console.warn(e)}n.d(t,"a",(function(){return Ie}));var Me=v.a.create({container:{flex:1,justifyContent:"center",backgroundColor:k,flexDirection:"row"}})},305:function(e,t,n){n(306),e.exports=n(486)},306:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},389:function(e,t,n){e.exports=n.p+"static/media/robot-dev.54da1e98.png"},390:function(e,t,n){e.exports=n.p+"static/media/robot-prod.c7578911.png"},484:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(3),r=n.n(a),o=n(4),i=n.n(o),l=n(5),c=n.n(l),s=n(2),u=n.n(s),f=n(6),p=n.n(f),g=n(0),m=n(8),h=n(23),v=n(44),d=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"render",value:function(){return g.createElement(v.e,{style:[y.button,this.props.style],onPress:this.props.onPress},g.createElement(h.a,{style:{textTransform:"uppercase"}},"  ",this.props.children," "))}}]),t}(g.Component),y=m.a.create({button:{shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:50,marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center",flexDirection:"column"}})}},[[305,1,2]]]);
//# sourceMappingURL=../../157b529269ca5723c369.map