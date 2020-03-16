(this.webpackJsonpreact_js=this.webpackJsonpreact_js||[]).push([[0],{34:function(e,a,t){e.exports=t(67)},39:function(e,a,t){},58:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(29),i=t.n(s),c=t(7),m=t(6);t(39);var l=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("p",{className:"comment"},"This page is designed for react JS study. As soon as I have time, I will add many more things to do with api. This page is based on a lecture by Nomad-coder Nicol\xe1s."),r.a.createElement("p",{className:"creater"},"by Kim DoHyung"))},o=t(16),_=t.n(o),u=t(30),d=t(10),v=t(11),p=t(13),h=t(12),E=t(14),N=t(31),g=t.n(N);t(58);var y=function(e){var a=e.id,t=e.title,n=e.summary,s=e.poster,i=e.year,m=e.rating,l=e.runtime,o=e.genres;return r.a.createElement(c.b,{className:"detail-link",to:{pathname:"/detail/".concat(a),state:{id:a,title:t,summary:n,poster:s,year:i,rating:m,runtime:l,genres:o}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"movie__poster",src:s,alt:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h2",{className:"movie__data__title"},t),r.a.createElement("h4",{className:"movie__data__year"},i),r.a.createElement("h4",{className:"movie__data__rating"},m," / 5.0"),r.a.createElement("h4",{className:"movie__data__runtime"},l?"".concat(l,"m"):"NON"),r.a.createElement("ul",{className:"movie__data__genres"},o.map((function(e,a){return r.a.createElement("li",{className:"movie__data__genres__genre",key:a},e)}))),r.a.createElement("h4",{className:"movie__data__summary"},n.length>140?"".concat(n.slice(0,140),"..."):"".concat(n)))))},b=(t(64),function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=Object(u.a)(_.a.mark((function e(){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(E.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("h4",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,summary:e.summary,year:e.year,poster:e.medium_cover_image,rating:e.rating,runtime:e.runtime,genres:e.genres})}))))}}]),a}(r.a.Component)),f=(t(65),function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.location,t=e.history;void 0===a.state&&t.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"movies-detail"},r.a.createElement("img",{className:"movies-detail__poster",src:e.state.poster,alt:e.state.title}),r.a.createElement("div",{className:"movie-detail__data"},r.a.createElement("h4",{className:"movie-detail__data__title"},e.state.title),r.a.createElement("hr",{className:"line__detail"}),r.a.createElement("h4",{className:"movie-detail__data__year"},"released : ",e.state.year),r.a.createElement("h4",{className:"movie-detail__data__rating"},"rating : ",e.state.rating," / 5.0"),r.a.createElement("h4",{className:"movie-detail__data__runtime"},"running time : ",e.state.runtime?"".concat(e.state.runtime):"NON"),r.a.createElement("ul",{className:"movie-detail__data__genres"},r.a.createElement("h4",{className:"movie-detail__data__genres__text"},"Genre : "),e.state.genres.map((function(e,a){return r.a.createElement("li",{className:"movie-detail__data__genres__genre",key:a},e," ")}))),r.a.createElement("hr",{className:"line__detail"}),r.a.createElement("h4",{className:"movie-detail__data__summary"},e.state.summary))):null}}]),a}(r.a.Component));t(66);var j=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__list"},r.a.createElement(c.b,{className:"navbar__list__link",to:"/"},"Home"),r.a.createElement(c.b,{className:"navbar__list__link",to:"/about"},"About")))};var k=function(){return r.a.createElement(c.a,null,r.a.createElement(j,null),r.a.createElement(m.a,{path:"/",exact:!0,component:b}),r.a.createElement(m.a,{path:"/about",exact:!0,component:l}),r.a.createElement(m.a,{path:"/detail/:id",exact:!0,component:f}))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ce6ca4ae.chunk.js.map