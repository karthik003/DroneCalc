(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(11),o=a.n(n),i=(a(70),a(71),a(72),a(7)),c=a(8),m=a(10),s=a(9),u=(a(73),a(116)),p=a(117),d=(a(32),a(17)),b=a(112),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"text"},"ABOUT US"),"This website is built by a team of highly dedicated aviation enthusiasts.",r.a.createElement("div",{className:" ",style:{margin:"auto",width:"50%"}},r.a.createElement(b.a,{responsive:!0,style:{border:"2px solid #E1E1E1",textAlign:"center"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"College"),r.a.createElement("th",null,"E-Mail"))),r.a.createElement("tbody",null,r.a.createElement("td",{colspan:"3",style:{fontFamily:"courier",fontSize:"20px",fontWeight:"600",textAlign:"left"}},"ELECTRICAL TEAM"),r.a.createElement("tr",null,r.a.createElement("td",null,"Abhishek Tyagi"),r.a.createElement("td",null,"VIT, Vellore"),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:abhityagi1224@gmail.com"},"abhityagi1224@gmail.com"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Shwetanshu"),r.a.createElement("td",null,"VIT, Vellore"),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:shwetanshu0511@gmail.com"},"shwetanshu0511@gmail.com"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Karthik Rajesh"),r.a.createElement("td",null,"VIT, Vellore"),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:karthik06082000@gmail.com"},"karthik06082000@gmail.com"))),r.a.createElement("td",{colspan:"3",style:{fontFamily:"courier",fontSize:"20px",fontWeight:"600",textAlign:"left"}},"COMPUTER SCIENCE TEAM"),r.a.createElement("tr",null,r.a.createElement("td",null,"V.J. Karthik"),r.a.createElement("td",null,"VIT, Vellore"),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:vjk2018@gmail.com"},"vjk2018@gmail.com"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Roopesh A"),r.a.createElement("td",null,"VIT, Vellore"),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:arvapalli12345@gmail.com"},"arvapalli12345@gmail.com")))))))}}]),a}(l.Component),E=a(56),g=a.n(E),f=a(23),y=a(115),v=a(113),w=(a(83),a(57)),x=a.n(w),C=(a(54),a(24)),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).changeHandler=function(e){l.setState(Object(f.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state),x.a.post("https://formspree.io/mnqgzyjp",l.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},l.clickSubmit=function(){l.setState({submit:!0},console.log("Thankyou for you response."))},l.closeSubmit=function(){l.setState({submit:!1})},l.state={name:"",email:"",phone:"",message:"",submit:!1},l}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,l=e.phone,n=e.message,o=e.submit;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text board"},"Drop us a line"),r.a.createElement("br",null),r.a.createElement("div",{className:"form",style:{textAlign:"left",display:"inline-box",width:"100%"}},r.a.createElement(y.a,{style:{marginRight:"25%",marginLeft:"25%",minWidth:"150px"},onSubmit:this.submitHandler},r.a.createElement(y.a.Group,{controlId:"formName"},r.a.createElement(y.a.Label,null,"Name"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Name",name:"name",value:t,onChange:this.changeHandler})),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:a,onChange:this.changeHandler}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"formBasicPhone"},r.a.createElement(y.a.Label,null,"Phone Number"),r.a.createElement(y.a.Control,{type:"integer",placeholder:"Phone Number",name:"phone",value:l,onChange:this.changeHandler}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your phone with anyone else.")),r.a.createElement(y.a.Group,{controlId:"formBasicMessage"},r.a.createElement(y.a.Label,null,"Message"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Message",name:"message",value:n,onChange:this.changeHandler})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.clickSubmit,style:{width:"150px"}},"Submit")),r.a.createElement(C.Modal,{classNames:{animationIn:"customEnterAnimation",animationOut:"customLeaveAnimation"},animationDuration:1e3,open:o,onClose:this.closeSubmit,blockScroll:!1,center:!0},r.a.createElement("br",null),r.a.createElement("h2",{className:"text"},"Thankyou for your response")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(l.Component),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{style:{fontSize:"25px"}}," ",r.a.createElement("small",null,"\xa9",r.a.createElement("b",null," Copyright 2020, Drocula"))," "),r.a.createElement("p",{style:{fontSize:"15px",fontWeight:"600"}},"Made by VJK x Roopesh"))}}]),a}(l.Component),F=(a(106),a(114)),A=a(58),O=(a(107),a(27)),L=a.n(O),M=a(59),H=a(60),T=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).changeHandler=function(e){l.setState(Object(f.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state),""!==l.state.battery&&""!==l.state.weight&&""!==l.state.current?l.setState({display:r.a.createElement(r.a.Fragment,null,"Output = "+(.8*l.state.battery*60/(1e3*l.state.weight*l.state.current)).toFixed(2)+" min",r.a.createElement("br",null),r.a.createElement("p",{style:{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}},"Remarks"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Expected Flight Time based on all-up weight when hovering only.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Battery Discharge Percentage is assumed to be 80%."))))}):""!==l.state.battery&&""!==l.state.maxcurrent&&""!==l.state.motors?l.setState({display:r.a.createElement(r.a.Fragment,null,"Output = "+(.8*l.state.battery*60/(1e3*l.state.maxcurrent*l.state.motors)).toFixed(2)+" min",r.a.createElement("br",null),r.a.createElement("p",{style:{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}},"Remarks"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Expected Min. Flight Time is based on maximum throttle and is independent of weight.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Battery Discharge Percentage is assumed to be 80%."))))}):""!==l.state.weight&&""!==l.state.motordistance&&""!==l.state.propradius&&""!==l.state.twratio&&""!==l.state.rotors?l.setState({display:r.a.createElement(r.a.Fragment,null,"Output = "+(Math.pow(1-1/Math.pow(l.state.twratio,2),.25)*(3.55*l.state.twratio)*Math.pow(l.state.weight/(.5*Math.pow(l.state.motordistance,2)+(l.state.rotors-1)*(3.14*Math.pow(l.state.propradius,2))),.5)).toFixed(2)+" m/s",r.a.createElement("p",{style:{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}},"Remarks"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Theoretically Max. attainable forward speed in flight at max throttle(neglecting copter aerodynamic drag and down force due to tilt,may vary with altitude).")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Density of air is considered to be 1.22 kg/m^3.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Thrust to weight ratio is taken to be 2 if entered otherwise.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Standard Air Drag is assumed to be 1.3 ."))))}):""!==l.state.speed&&""!==l.state.time?l.setState({display:r.a.createElement(r.a.Fragment,null,"Output = "+(l.state.speed*l.state.time*60).toFixed(2)+" m",r.a.createElement("p",{style:{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}},"Remarks"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Represents the max Range considering standard drag.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Real values may differ depending on the real drag."))))}):""!==l.state.propdiam&&""!==l.state.proppitch&&""!==l.state.forwardvel&&""!==l.state.motorrate&&""!==l.state.batteryvolt?l.setState({display:r.a.createElement(r.a.Fragment,null,"Output = "+(4.392399e-8*l.state.motorrate*l.state.batteryvolt*(Math.pow(l.state.propdiam,3.5)/Math.pow(l.state.proppitch,.5))*(42333e-8*l.state.motorrate*l.state.batteryvolt*l.state.proppitch-l.state.forwardvel)).toFixed(2)+" ",r.a.createElement("p",{style:{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}},"Remarks"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"The calculated thrust is for a single motor.You need to multiply it with the no. of motrs to get thrust for the entire drone.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"Enter Forward velocity = 0, if you want to calculate static thrust."))))}):""!==l.state.motorrate&&""!==l.state.batteryvolt?l.setState({display:"Output = "+(l.state.motorrate*l.state.batteryvolt).toFixed(2)+" "}):""!==l.state.motorstallcur&&""!==l.state.battery?l.setState({display:"Output = "+(1e3*l.state.motorstallcur*l.state.motors/l.state.battery).toFixed(2)+" "}):l.setState({display:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"red",fontFamily:"courier",fontSize:"26px"}},"Error"),r.a.createElement("ul",null,r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}},r.a.createElement("i",null,"You probably didn't enter all the values.")),r.a.createElement("li",{style:{color:"grey",fontFamily:"courier",fontSize:"20px"}},r.a.createElement("i",null,"You didn't click on which of the given outputs you want."))))})},l.clickSubmit=function(){l.setState({submit:!0},console.log("Check Output Below"))},l.closeSubmit=function(){l.setState({submit:!1})},l.hoverHandler=function(){l.setState({maxcurrent:"",motors:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",motorstall:"",batteryable:!1,weightable:!1,currentable:!1,maxcurrentable:!0,motorsable:!0,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!0,timeable:!0,motorrateable:!0,batteryvoltable:!0,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!0})},l.timeHandler=function(){l.setState({weight:"",current:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",motorstall:"",batteryable:!1,weightable:!0,currentable:!0,maxcurrentable:!1,motorsable:!1,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!0,timeable:!0,motorrateable:!0,batteryvoltable:!0,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!0})},l.speedHandler=function(){l.setState({battery:"",current:"",maxcurrent:"",motors:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",motorstall:"",batteryable:!0,weightable:!1,currentable:!0,maxcurrentable:!0,motorsable:!0,motordistanceable:!1,propradiusable:!1,twratioable:!1,rotorsable:!1,speedable:!0,timeable:!0,motorrateable:!0,batteryvoltable:!0,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!0})},l.rangeHandler=function(){l.setState({battery:"",weight:"",current:"",maxcurrent:"",motors:"",motordistance:"",propradius:"",twratio:"",rotors:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",motorstall:"",batteryable:!0,weightable:!0,currentable:!0,maxcurrentable:!0,motorsable:!0,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!1,timeable:!1,motorrateable:!0,batteryvoltable:!0,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!0})},l.thrustHandler=function(){l.setState({battery:"",weight:"",current:"",maxcurrent:"",motors:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",motorstall:"",batteryable:!0,weightable:!0,currentable:!0,maxcurrentable:!0,motorsable:!0,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!0,timeable:!0,motorrateable:!1,batteryvoltable:!1,propdiamable:!1,proppitchable:!1,forwardvelable:!1,motorstallcurable:!0})},l.rpmHandler=function(){l.setState({battery:"",weight:"",current:"",maxcurrent:"",motors:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",propdiam:"",proppitch:"",forwardvel:"",motorstall:"",batteryable:!0,weightable:!0,currentable:!0,maxcurrentable:!0,motorsable:!0,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!0,timeable:!0,motorrateable:!1,batteryvoltable:!1,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!0})},l.cRateHandler=function(){l.setState({weight:"",current:"",maxcurrent:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",batteryable:!1,weightable:!0,currentable:!0,maxcurrentable:!0,motorsable:!1,motordistanceable:!0,propradiusable:!0,twratioable:!0,rotorsable:!0,speedable:!0,timeable:!0,motorrateable:!0,batteryvoltable:!0,propdiamable:!0,proppitchable:!0,forwardvelable:!0,motorstallcurable:!1})},l.state={battery:"",weight:"",current:"",maxcurrent:"",motors:"",motordistance:"",propradius:"",twratio:"",rotors:"",speed:"",time:"",motorrate:"",batteryvolt:"",propdiam:"",proppitch:"",forwardvel:"",motorstallcur:"",submit:!1,batteryable:!1,weightable:!1,currentable:!1,maxcurrentable:!1,motorsable:!1,motordistanceable:!1,propradiusable:!1,twratioable:!1,rotorsable:!1,speedable:!1,timeable:!1,motorrateable:!1,batteryvoltable:!1,propdiamable:!1,proppitchable:!1,forwardvelable:!1,motorstallcurable:!1,display:" "},l}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.battery,a=e.weight,l=e.current,n=e.maxcurrent,o=e.motors,i=e.motordistance,c=e.propradius,m=e.twratio,s=e.rotors,u=e.speed,p=e.time,d=e.motorrate,b=e.batteryvolt,h=e.propdiam,E=e.proppitch,g=e.forwardvel,f=e.motorstallcur,w=e.submit,x=e.batteryable,S=e.weightable,k=e.timeable,O=e.speedable,T=e.rotorsable,N=e.twratioable,j=e.propradiusable,B=e.motordistanceable,I=e.motorsable,R=e.maxcurrentable,z=e.currentable,W=e.motorrateable,D=e.batteryvoltable,G=e.propdiamable,V=e.proppitchable,P=e.forwardvelable,U=e.motorstallcurable,K=e.display,J=r.a.createElement(M.a,{icon:H.a});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron inpbutton",style:{width:"21%",backgroundColor:"white",paddingTop:"200px"}},r.a.createElement(L.a,{selector:"#allinputs"},r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.hoverHandler,style:{minWidth:"135px",display:"inline-block"}},"Hover Flight Time (min)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.timeHandler,style:{minWidth:"135px"}},"Minimum Flight Time (min)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.speedHandler,style:{minWidth:"135px"}},"Max Forward Flight Speed (m/s)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.rangeHandler,style:{minWidth:"135px"}},"Estimated Range (m)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.thrustHandler,style:{minWidth:"135px"}},"Static/Dynamic Thrust (N)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.rpmHandler,style:{minWidth:"135px"}},"RPM"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit",onClick:this.cRateHandler,style:{minWidth:"135px"}},"C-Rating of the battery (C)"))),r.a.createElement("div",{id:"allinputs",className:"jumbotron inpfield",style:{textAlign:"left",width:"79%",backgroundColor:"white"}},r.a.createElement(y.a,{onSubmit:this.submitHandler},r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicbattery"},r.a.createElement(y.a.Label,null,"Battery Capacity (mAh) "),r.a.createElement(y.a.Control,{type:"number",placeholder:"Battery Capacity",name:"battery",value:t,onChange:this.changeHandler,disabled:x}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicWeigth"},r.a.createElement(y.a.Label,null,"All Up Weight (Kg)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"All Up Weight",name:"weight",value:a,onChange:this.changeHandler,disabled:S})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicCurrent"},r.a.createElement(y.a.Label,null,"Current to lift 1kg (A)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Current to lift 1kg",name:"current",value:l,onChange:this.changeHandler,disabled:z}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicMaxCurrent"},r.a.createElement(y.a.Label,null,"Max Current drawn by 1 Motor (A)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Max Current drawn by 1 Motor",name:"maxcurrent",value:n,onChange:this.changeHandler,disabled:R})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicMotors"},r.a.createElement(y.a.Label,null,"No. of Motors"),r.a.createElement(y.a.Control,{type:"number",placeholder:"No. of Motors",name:"motors",value:o,onChange:this.changeHandler,disabled:I})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicMotorDist"},r.a.createElement(y.a.Label,null,"Motor to Motor Distance (m)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Motor to Motor Distance",name:"motordistance",value:i,onChange:this.changeHandler,disabled:B}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicRadius"},r.a.createElement(y.a.Label,null,"Radius of Propeller (m)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Radius of Propeller",name:"propradius",value:c,onChange:this.changeHandler,disabled:j})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicThrust"},r.a.createElement(y.a.Label,null,"Thrust to Weight Ratio (N/Kg)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Thrust to Weight Ratio",name:"twratio",value:m,onChange:this.changeHandler,disabled:N}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicRotors"},r.a.createElement(y.a.Label,null,"No. Of Rotors"),r.a.createElement(y.a.Control,{type:"number",placeholder:"No. Of Rotors",name:"rotors",value:s,onChange:this.changeHandler,disabled:T})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicFlight"},r.a.createElement(y.a.Label,null,"Max forward Flight Speed (m/s)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Max forward Flight Speed",name:"speed",value:u,onChange:this.changeHandler,disabled:O}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicTime"},r.a.createElement(y.a.Label,null,"Flight Time (s)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Flight Time",name:"time",value:p,onChange:this.changeHandler,disabled:k})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicmotorRate"},r.a.createElement(y.a.Label,null,"Motor rating (kV)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Motor rating",name:"motorrate",value:d,onChange:this.changeHandler,disabled:W}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicbatteryvolt"},r.a.createElement(y.a.Label,null,"Battery Voltage (V)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Battery Voltage",name:"batteryvolt",value:b,onChange:this.changeHandler,disabled:D})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicpropdiam"},r.a.createElement(y.a.Label,null,"Diameter of Propeller (inches) "),r.a.createElement(y.a.Control,{type:"number",placeholder:"Diameter of Propeller",name:"propdiam",value:h,onChange:this.changeHandler,disabled:G}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicproppitch"},r.a.createElement(y.a.Label,null," Pitch of Propeller (inches)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Pitch of Propeller",name:"proppitch",value:E,onChange:this.changeHandler,disabled:V})))),r.a.createElement(F.a,null,r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicForwardvel"},r.a.createElement(y.a.Label,null,"Forward Velocity (m/s)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Forward Velocity",name:"forwardvel",value:g,onChange:this.changeHandler,disabled:P}))),r.a.createElement(A.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicmotorstallcur"},r.a.createElement(y.a.Label,null," Motor Stall Current (A)"),r.a.createElement(y.a.Control,{type:"number",placeholder:"Motor Stall Current",name:"motorstallcur",value:f,onChange:this.changeHandler,disabled:U})))),r.a.createElement("div",{style:{margin:"auto",width:"100%",textAlign:"left"}},r.a.createElement(v.a,{variant:"success",type:"submit",onClick:this.clickSubmit,style:{width:"150px"}},"Submit")),r.a.createElement(C.Modal,{classNames:{animationIn:"customEnterAnimation",animationOut:"customLeaveAnimation"},animationDuration:1e3,open:w,onClose:this.closeSubmit,blockScroll:!1,center:!0,closeIcon:J},r.a.createElement("br",null),r.a.createElement("h2",{className:"text"},K)))))}}]),a}(l.Component),N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"landing"},r.a.createElement(L.a,{selector:"#input"},r.a.createElement(v.a,{className:"calculate",style:{borderRadius:"25px"},size:"lg"},"Calculate"))),r.a.createElement("div",{style:{width:"100%"},id:"input"},r.a.createElement("p",{className:"text"},"CALCULATE"),r.a.createElement(T,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(l.Component),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).listener=null,l.state={navBackground:" "},l}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=document.addEventListener("scroll",(function(){var t=window.scrollY<100?" ":"#12162C";e.setState({navBackground:t})}))}},{key:"componentDidUpdate",value:function(){document.removeEventListener("scroll",this.listener)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",style:{backgroundColor:"#12162C"},className:"navbarcol shadow-lg "},r.a.createElement(u.a.Brand,{href:"#home",style:{height:"100%"}},r.a.createElement(d.Link,{activeClass:"",to:"landing",spy:!0,smooth:!0,duration:500}," ",r.a.createElement("img",{src:g.a,style:{width:"150px"},alt:"seds logo"})," ")),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav",style:{color:"red"}}),r.a.createElement(u.a.Collapse,{className:"col-md-pull-3",id:"responsive-navbar-nav",style:{justifyContent:"center",position:"relative",right:"5%"}},r.a.createElement(p.a.Link,{className:"mr-1 text ",style:{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}},r.a.createElement(d.Link,{activeClass:"",to:"landing",spy:!0,smooth:!0,duration:500}," HOME")),r.a.createElement(p.a.Link,{className:"mr-1 text ",style:{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}},r.a.createElement(d.Link,{activeClass:"",to:"about",spy:!0,smooth:!0,duration:500,offset:30}," ABOUT")),r.a.createElement(p.a.Link,{className:"mr-1 text ",style:{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}},r.a.createElement(d.Link,{activeClass:"",to:"contact",spy:!0,smooth:!0,duration:500,offset:10}," CONTACT")))),r.a.createElement("div",{id:"landing"},r.a.createElement(N,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{id:"about"},r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{id:"contact"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,null)),r.a.createElement(k,null))}}]),a}(l.Component);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DroneCalc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DroneCalc","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},56:function(e,t,a){e.exports=a.p+"static/media/Drocula3.57f41ac6.png"},65:function(e,t,a){e.exports=a(110)},70:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},72:function(e,t,a){},73:function(e,t,a){},83:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.29d23a96.chunk.js.map