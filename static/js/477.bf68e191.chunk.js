"use strict";(self.webpackChunkarchitectui_react_theme_free=self.webpackChunkarchitectui_react_theme_free||[]).push([[477],{5477:function(e,a,t){t.r(a),t.d(a,{default:function(){return K}});var n=t(2791),i=t(4880),r=t(5671),s=t(3144),c=t(136),l=t(1129),d=t(4e3),o=t(3009),h=t(9773),u=t(3464),m=t(9037),f=t(7925),p=t(2232),x=t(7128),g=t(9277),v=t(9869),j=t(5633),k=t(7430),Z=t(1694),b=t.n(Z),D=(t(5462),t(1501),t(5755),t(184)),y=function(e){(0,c.Z)(t,e);var a=(0,l.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state=t.getDefaultState(),e.getMinuteDifference=function(){var a=new Date,t=new Date(e.props.data.officeData[e.state.activeTab].updateDate),n=Math.abs(t-a);return Math.floor(n/6e4)},e}return(0,s.Z)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return(0,D.jsx)(n.Fragment,{children:(0,D.jsx)(o.Z,{children:(0,D.jsx)(h.Z,{md:"12",children:(0,D.jsxs)(u.Z,{className:"main-card mb-3",children:[(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(x.Z,{pills:!0,fill:!0,children:this.props.data.officeData.map((function(a,t){return(0,D.jsx)(g.Z,{children:(0,D.jsx)(v.Z,{href:"#",className:b()({active:e.state.activeTab===t}),onClick:function(){e.toggle(t)},children:a.officeName})})}))}),(0,D.jsx)(j.Z,{activeTab:""+this.state.activeTab,children:this.props.data.officeData.map((function(e,a){return(0,D.jsxs)(k.Z,{tabId:""+a,children:[e.dates.map((function(e,a){return(0,D.jsx)(f.Z,{color:"success",children:(0,D.jsx)("a",{style:{marginLeft:"50px"},className:"alert-link",children:e.split("T")[0]})})})),0==e.dates.length&&(0,D.jsx)(f.Z,{color:"danger",children:(0,D.jsx)("a",{style:{marginLeft:"50px"},className:"alert-link",children:"UYGUN RANDEVU YOK"})})]})}))})]}),(0,D.jsxs)(p.Z,{children:["Son g\xfcncelleme zaman\u0131 : ",this.getMinuteDifference()," dakika \xf6nce"]})]})})})})}}],[{key:"getDefaultState",value:function(){return{activeTab:0,data:[{Office:"Altunzade",AvailableDates:["2023-10-20","2023-10-20","2023-10-20"]},{Office:"Altunzade",AvailableDates:["2023-10-20","2023-10-20","2023-10-20"]}]}}}]),t}(n.Component);var N=y,T=t(7326),S=t(8453),z=t(9127),C=t(9513),w=t.n(C),A=(t(8639),t(7967),["Pt","Sa","\xc7a","Pe","Cu","Ct","Pz"]),F=["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"],E={localize:{day:function(e){return A[e]},month:function(e){return F[e]}},formatLong:{date:function(){return"mm/dd/yyyy"}}},_=function(e){(0,c.Z)(t,e);var a=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=a.call(this,e)).updateDate=function(e,a,t){fetch("http://triviastars-env.eba-vqcrvzer.eu-central-1.elasticbeanstalk.com/admin/updateTrackingDate?serviceType="+e+"&startDate="+a.toJSON()+"&endDate="+t.toJSON(),{method:"GET",redirect:"follow"}).then((function(e){})).then((function(e){n.setState({changed:!1})})).catch((function(e){return console.log("error",e)}))},n.state={visible:!0,startDate:new Date(e.data.trackingStartDate),endDate:new Date(e.data.trackingEndDate),changed:!1},n.onDismiss=n.onDismiss.bind((0,T.Z)(n)),n}return(0,s.Z)(t,[{key:"setStartDate",value:function(e){this.setState({startDate:e,changed:!0})}},{key:"setEndDate",value:function(e){this.setState({endDate:e,changed:!0})}},{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this;return(0,D.jsx)(n.Fragment,{children:(0,D.jsx)(o.Z,{children:(0,D.jsx)(h.Z,{md:"12",children:(0,D.jsx)(u.Z,{className:"main-card mb-3",children:(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(o.Z,{md:"6",children:(0,D.jsx)(S.Z,{children:(0,D.jsxs)("div",{style:{padding:"5px",backgroundColor:"#EFF9FF",alignSelf:"center",display:"flex",flexDirection:"row"},children:[(0,D.jsx)("h5",{style:{marginRight:"20px"},children:"Ba\u015flang\u0131\xe7 tarihi "}),(0,D.jsx)(w(),{locale:E,selected:this.state.startDate,onChange:function(a){return e.setStartDate(a)}})]})})}),(0,D.jsx)(o.Z,{md:"6",children:(0,D.jsx)(S.Z,{children:(0,D.jsxs)("div",{style:{marginTop:"10px",padding:"5px",backgroundColor:"#EFF9FF",alignSelf:"center",display:"flex",flexDirection:"row"},children:[(0,D.jsx)("h5",{style:{marginRight:"20px"},children:"Biti\u015f tarihi "}),(0,D.jsx)(w(),{locale:E,selected:this.state.endDate,onChange:function(a){return e.setEndDate(a)}})]})})}),(0,D.jsx)(o.Z,{md:"6",children:(0,D.jsx)(z.Z,{onClick:function(){e.updateDate(e.props.data.serviceType,e.state.startDate,e.state.endDate)},active:this.state.changed,className:"m-3",color:"primary",children:"Kaydet"})})]})})})})})}}]),t}(n.Component),L=t(4448),R=function(e){(0,c.Z)(t,e);var a=(0,l.Z)(t);function t(){return(0,r.Z)(this,t),a.apply(this,arguments)}return(0,s.Z)(t,[{key:"render",value:function(){return(0,D.jsxs)(n.Fragment,{children:[(0,D.jsx)(d.Z,{heading:"Randevu Takibi",subheading:"Randevu takibi b\xf6l\xfcm\xfcnde, se\xe7ili \xfclkedeki randevular\u0131 anl\u0131k olarak g\xf6rebilirsiniz.",subheading2:"Veriler direkt olarak ilgili \xfclkenin randevu sisteminden anl\u0131k olarak \xe7ekilmektedir. G\xfcncelleme zaman\u0131 verinin ka\xe7 dakika \xf6nce \xe7ekildi\u011fini g\xf6stermektedir.",subheading3:"Takip planlay\u0131c\u0131, hangi aral\u0131klarda yer a\xe7\u0131lmas\u0131 durumunda size bildirim g\xf6nderilece\u011fini belirtmektedir.",icon:"pe-7s-glasses icon-gradient bg-love-kiss"}),(0,D.jsx)("div",{className:"mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header",children:(0,D.jsx)("div",{className:"card-header-title fsize-2 text-capitalize fw-normal",children:(0,D.jsx)(L.Z,{children:"Uygun TAR\u0130HLER"})})}),(0,D.jsx)(N,{data:this.props.data}),(0,D.jsx)("div",{style:{marginTop:"3%"},className:"mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header",children:(0,D.jsx)("div",{className:"card-header-title fsize-2 text-capitalize fw-normal",children:(0,D.jsx)(L.Z,{children:"TAK\u0130P PLANLAYICI"})})}),(0,D.jsx)(_,{data:this.props.data})]})}}]),t}(n.Component),M=t(1568),O=t(1238),P=t(4348),K=function(e){var a=e.match,t=e.data;return(0,D.jsxs)(n.Fragment,{children:[(0,D.jsx)(M.Z,{}),(0,D.jsxs)("div",{className:"app-main",children:[console.log(t),(0,D.jsx)(O.Z,{data:t}),(0,D.jsxs)("div",{className:"app-main__outer",children:[(0,D.jsx)("div",{className:"app-main__inner",children:t.data.map((function(e,t){return e&&e.name&&(0,D.jsx)(i.AW,{path:"".concat(a.url,"/").concat(e.name.toLowerCase()),render:function(a){return(0,D.jsx)(R,{data:e})}},e.name)}))}),(0,D.jsx)(P.Z,{})]})]})]})}}}]);
//# sourceMappingURL=477.bf68e191.chunk.js.map