(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),o=n(7),s=n(2),l=n(17),u=n(18),h=(n(28),n(30),n(4)),d=n(5),E=n(8),m=n(6),p=n(9),g=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"kitten",src:"https://robohash.org/set_set4/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.kittens;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(g,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},b=function(e){e.searchfield;var t=e.seachChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",plaseholder:"search kittens",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid #0ccac4",height:"800px"}},e.children)},y=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(E.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(a.Component),S=(n(32),function(){return function(e){var t;e({type:"REQUEST_KITTENS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then(function(e){return e.json()})).then(function(t){return e({type:"REQUEST_KITTENS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_KITTENS_FAILED",payload:t})})}}),j=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestKittens()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.kittens,i=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"KittenFriends"),r.a.createElement(b,{seachChange:n}),r.a.createElement(v,null,i?r.a.createElement("h1",null,"Loading"):r.a.createElement(y,null,r.a.createElement(f,{kittens:c}))))}}]),t}(a.Component),w=Object(o.b)(function(e){return{searchField:e.searchKittens.searchField,kittens:e.requestKittens.kittens,isPending:e.requestKittens.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestKittens:function(){return e(S())}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={searchField:""},T={isPendidng:!1,kittens:[]},k=Object(l.createLogger)(),C=Object(s.c)({searchKittens:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestKittens:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_KITTENS_PENDING":return Object.assign({},e,{isPendidng:!0});case"REQUEST_KITTENS_SUCCESS":return Object.assign({},e,{kittens:t.payload,isPendidng:!1});case"REQUEST_KITTENS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}}}),N=Object(s.d)(C,Object(s.a)(u.a,k));c.a.render(r.a.createElement(o.a,{store:N},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.ec8808be.chunk.js.map