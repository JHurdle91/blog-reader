(this["webpackJsonpblog-reader"]=this["webpackJsonpblog-reader"]||[]).push([[0],{35:function(e,t,a){e.exports=a(73)},67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=a(3),s=a(2),m=a(1),u=a(13),i=a.n(u),d=a(9),p=a.n(d),b="".concat("https://dry-everglades-20804.herokuapp.com","/auth"),f={register:function(e,t){return p.a.post("".concat(b,"/signup"),{username:e,password:t})},login:function(e,t){return p.a.post("".concat(b,"/signin"),{username:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},getCurrentUser:function(){var e=JSON.parse(localStorage.getItem("user"));if(e){var t=e.user;return t.token=e.token,t}return e}},E="https://dry-everglades-20804.herokuapp.com",v={getPosts:function(){return p.a.get("".concat(E,"/posts"))},getPost:function(e){return p.a.get("".concat(E,"/posts/").concat(e))},createPost:function(e,t,a,n){return p.a.post("".concat(E,"/posts/create"),{params:{userId:e,title:t,body:a,published:n}})},updatePost:function(e,t,a,n){return p.a.post("".concat(E,"/posts/").concat(e,"/update"),{params:{title:t,body:a,published:n}})},deletePost:function(e){return p.a.post("".concat(E,"/posts/").concat(e,"/delete"))},getComments:function(e){return p.a.get("".concat(E,"/posts/").concat(e,"/comments"))},deleteComment:function(e,t){return p.a.post("".concat(E,"/posts/").concat(e,"/comments/").concat(t,"/delete"))},postComment:function(e,t,a){return p.a.post("".concat(E,"/posts/").concat(e,"/comments/create"),{params:{postId:e,userId:t,text:a}})},togglePublished:function(e){return p.a.post("".concat(E,"/posts/").concat(e,"/published"))}},g=a(14),h=a.n(g),O=function(e){var t=Object(s.f)(),a=Object(n.useState)([]),l=Object(m.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(!1),i=Object(m.a)(u,2),d=i[0],p=i[1],b=e.post,E=Object(n.useState)(b.published),g=Object(m.a)(E,2),O=g[0],j=g[1],N=b.title,C=b.timestamp_formatted,S=b.text,k=b._id;Object(n.useEffect)((function(){v.getComments(k).then((function(e){o(e.data);var t=f.getCurrentUser();if(t){var a=[];t.roles.map((function(e){return a.push(e.name)})),p(a.includes("ROLE_ADMIN"))}}))}),[k]);var P=S.length>=100?S.substring(0,100)+"...":S;return r.a.createElement("div",{className:"PostListItem"},r.a.createElement("div",{onClick:function(){t.push("/posts/".concat(k))}},r.a.createElement("h2",null,N),r.a.createElement("div",null,C),r.a.createElement("p",null,P),1===c.length?r.a.createElement("div",null,"1 comment"):r.a.createElement("div",null,c.length," comments")),d?r.a.createElement("label",null,r.a.createElement(h.a,{onChange:function(){v.togglePublished(k),j(!O)},checked:O}),r.a.createElement("br",null),r.a.createElement("span",null,O?"Published":"Unpublished")):r.a.createElement("div",null))},j=function(){var e=Object(s.f)(),t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],p=u[1];Object(n.useEffect)((function(){v.getPosts().then((function(e){c(e.data)}));var e=f.getCurrentUser();if(e){var t=[];e.roles.map((function(e){return t.push(e.name)})),p(t.includes("ROLE_ADMIN"))}}),[]);return r.a.createElement("div",{className:"PostList"},d&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){t.preventDefault(),e.push("/posts/create")}},"+ New Post"),r.a.createElement("br",null),r.a.createElement("br",null)),l.map((function(e){return e.published||d?r.a.createElement("div",{key:i()()},r.a.createElement(O,{post:e}),r.a.createElement("hr",null)):null})))},N=(a(66),a(67),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}),C=function(){var e=Object(s.f)(),t=Object(n.useState)(void 0),a=Object(m.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){var e=f.getCurrentUser();if(e){var t=[];e.roles.map((function(e){return t.push(e.name)})),c(e)}}),[]);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"My Blog"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/home",className:"nav-link"},"Home"))),l?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/profile",className:"nav-link"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/login",className:"nav-link",onClick:function(t){t.preventDefault(),f.logout(),c(void 0),e.push("/login")}},"Log Out"))):r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/login",className:"nav-link"},"Log In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/register",className:"nav-link"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/JHurdle91/blog-reader",className:"nav-link"},"Frontend Source")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/JHurdle91/blog-api",className:"nav-link"},"Backend Source")))),r.a.createElement("div",{className:"container mt-3"}))},S=function(e){return r.a.createElement("div",{className:"PostCreateForm"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"titleInput"},"Title:"),r.a.createElement("input",{id:"titleInput",name:"titleInput",onChange:function(t){t.preventDefault(),e.onChangeTitle(t.target.value)},className:"form-control",placeholder:"Title",value:e.title,required:!0}),r.a.createElement("label",{htmlFor:"bodyInput"},"Post Body:"),r.a.createElement("textarea",{id:"commentBox",name:"commentBox",onChange:function(t){t.preventDefault(),e.onChangeBody(t.target.value)},className:"form-control",type:"textarea",placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:e.body,required:!0}))))},k=function(e){return r.a.createElement("div",{className:"PostFormButtons"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(t){t.preventDefault(),e.onClickCancel()}},"Cancel"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){t.preventDefault(),e.onClickSave()}},"Save Post (Unpublished)"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){t.preventDefault(),e.onClickSaveAndPublish()}},"Save and Publish Post"))},P=function(){var e=Object(s.f)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(m.a)(o,2),i=u[0],d=u[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),E=b[0],g=b[1],h=Object(n.useState)(""),O=Object(m.a)(h,2),j=O[0],N=O[1];Object(n.useEffect)((function(){var e=f.getCurrentUser();if(e){var t=[];e.roles.map((function(e){return t.push(e.name)})),c(t.includes("ROLE_ADMIN")),d(e)}}),[]);var C=function(t){E&&j?v.createPost(i._id,E,j,t).then((function(t){var a=t.data._id;e.push("/posts/".concat(a))})):alert("Title and Body are required.")};return r.a.createElement("div",{className:"PostCreate"},r.a.createElement("h1",null,"New Post"),r.a.createElement("hr",null),l?r.a.createElement("div",null,r.a.createElement(S,{onChangeTitle:function(e){g(e)},onChangeBody:function(e){N(e)}}),r.a.createElement("br",null),r.a.createElement(k,{onClickCancel:function(t){e.push("/posts/")},onClickSave:function(){C(!1)},onClickSaveAndPublish:function(){C(!0)}})):r.a.createElement("div",null,"Only the Admin can create new posts at this time..."))},y=function(e){var t=e.timestamp,a=e.text,n=e.commentAuthor,l=e.currentUser,c=e.admin,o=e.reloadComments,m=e.id,u=Object(s.g)().postId;return r.a.createElement("div",{className:"Comment"},r.a.createElement("div",null,r.a.createElement("strong",null,n.username)),r.a.createElement("div",null,t),r.a.createElement("br",null),r.a.createElement("div",null,a),l&&(l._id===n._id||c)?r.a.createElement("button",{className:"btn btn-danger",onClick:function(){v.deleteComment(u,m).then((function(){o()}))}},"Delete Comment"):r.a.createElement("div",null))},x=function(e){var t=e.comments,a=e.reloadComments;return r.a.createElement("div",{className:"Comments"},t.map((function(t){var n=t.timestamp_formatted,l=t.text,c=t.user,o=t._id,s=e.currentUser,m=e.admin;return r.a.createElement("div",{key:i()()},r.a.createElement(y,{id:o,timestamp:n,text:l,commentAuthor:c,currentUser:s,admin:m,reloadComments:a}),r.a.createElement("hr",null))})))},w=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(void 0),u=Object(m.a)(o,2),i=u[0],d=u[1],p=Object(s.g)().postId;Object(n.useEffect)((function(){var e=f.getCurrentUser();e&&d(e)}),[]);var b=function(t){t.preventDefault(),v.postComment(p,i.id,l).then((function(){e.reloadComments(),c("")}))};return r.a.createElement("div",{className:"CommentForm"},r.a.createElement("form",{onSubmit:b},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"commentBox"},"Leave a comment:"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"commentBox",name:"commentBox",onChange:function(e){var t=e.target.value;c(t)},className:"form-control",type:"textarea",placeholder:"What an excellent post!",value:l,onKeyPress:function(e){13===e.which&&b(e)},required:!0})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null)))},I=function(){var e=Object(s.f)(),t=Object(s.g)().postId,a=Object(n.useState)(!1),l=Object(m.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(void 0),d=Object(m.a)(i,2),p=d[0],b=d[1],E=Object(n.useState)({title:"",timestamp:"",timestamp_formatted:"",text:"",published:!1,user:{username:"",password:""}}),g=Object(m.a)(E,2),O=g[0],j=g[1];Object(n.useEffect)((function(){v.getPost(t).then((function(e){j(e.data)}));var e=f.getCurrentUser();if(e){var a=[];e.roles.map((function(e){return a.push(e.name)})),u(a.includes("ROLE_ADMIN")),b(e)}}),[t]);var N=Object(n.useState)(O.published),C=Object(m.a)(N,2),S=C[0],k=C[1];Object(n.useEffect)((function(){k(O.published)}),[O.published]);var P=Object(n.useState)([]),y=Object(m.a)(P,2),I=y[0],U=y[1],_=Object(n.useCallback)((function(){v.getComments(t).then((function(e){U(e.data)}))}),[t]);Object(n.useEffect)((function(){_()}),[_]);var D=O.title,A=O.timestamp_formatted,B=O.text,L=O.user;return r.a.createElement("div",{className:"PostDetail"},r.a.createElement("h1",null,D),r.a.createElement("div",null,"- ",L.username),r.a.createElement("div",null,A),c?r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement(h.a,{onChange:function(){v.togglePublished(t),k(!S)},checked:S}),r.a.createElement("br",null),r.a.createElement("span",null,S?"Published":"Unpublished")),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-warning",onClick:function(){e.push("/posts/".concat(t,"/edit"))}},"Edit Post"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){v.deletePost(t).then((function(){e.push("/posts/")}))}},"Delete Post")):r.a.createElement("div",null),r.a.createElement("hr",null),r.a.createElement("div",null,B),r.a.createElement("hr",null),r.a.createElement("h2",null,"Comments"),p?r.a.createElement(w,{reloadComments:_}):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(o.b,{to:"/login"},r.a.createElement("strong",null,"Log in"))," ","to leave a comment.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(x,{currentUser:p,admin:c,comments:I,reloadComments:_}))},U=function(){var e=Object(s.g)().postId,t=Object(s.f)(),a=Object(n.useState)(!1),l=Object(m.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),d=i[0],p=i[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),g=E[0],h=E[1],O=Object(n.useState)({title:"",timestamp:"",timestamp_formatted:"",text:"",published:!1,user:{username:"",password:""}}),j=Object(m.a)(O,2),N=j[0],C=j[1];Object(n.useEffect)((function(){v.getPost(e).then((function(e){C(e.data)}))}),[e]),Object(n.useEffect)((function(){p(N.title),h(N.text)}),[N]),Object(n.useEffect)((function(){var e=f.getCurrentUser();if(e){var t=[];e.roles.map((function(e){return t.push(e.name)})),o(t.includes("ROLE_ADMIN"))}}),[]);var P=function(a){d&&g?v.updatePost(e,d,g,a).then((function(){t.push("/posts/".concat(e))})):alert("Title and Body are required.")};return r.a.createElement("div",{className:"PostUpdate"},r.a.createElement("h1",null,"Update Post"),r.a.createElement("hr",null),c?r.a.createElement("div",null,r.a.createElement(S,{title:d,body:g,onChangeTitle:function(e){p(e)},onChangeBody:function(e){h(e)}}),r.a.createElement("br",null),r.a.createElement(k,{onClickCancel:function(){t.push("/posts/".concat(e))},onClickSave:function(){P(!1)},onClickSaveAndPublish:function(){P(!0)}})):r.a.createElement("div",null,"Only the Admin can update posts at this time..."))},_=a(15),D=a.n(_),A=a(12),B=a.n(A),L=a(16),T=a.n(L),q=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},F=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(s.f)(),l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),d=Object(m.a)(i,2),p=d[0],b=d[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),g=v[0],h=v[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),N=j[0],C=j[1];return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(D.a,{onSubmit:function(n){n.preventDefault(),C(""),h(!0),e.current.validateAll(),0===t.current.context._errors.length?f.login(o,p).then((function(){a.push("/profile"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();h(!1),C(t)})):h(!1)},ref:e},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(B.a,{type:"text",className:"form-control",name:"username",value:o,onChange:function(e){var t=e.target.value;u(t)},validations:[q]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(B.a,{type:"password",className:"form-control",name:"password",value:p,onChange:function(e){var t=e.target.value;b(t)},validations:[q]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:g},g&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),N&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},N)),r.a.createElement(T.a,{style:{display:"none"},ref:t}))))},R=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},M=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},J=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},H=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(s.f)(),c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],i=o[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),b=p[0],E=p[1],v=Object(n.useState)(!1),g=Object(m.a)(v,2),h=g[0],O=g[1],j=Object(n.useState)(!1),N=Object(m.a)(j,2),C=N[0],S=N[1],k=Object(n.useState)(""),P=Object(m.a)(k,2),y=P[0],x=P[1];return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),x(""),O(!0),S(!1),t.current.validateAll(),0===a.current.context._errors.length?f.register(u,b).then((function(e){x(e.data.message),S(!0),f.login(u,b).then((function(){l.push("/profile"),window.location.reload()}))}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();x(t),O(!1),S(!1)})):O(!1)},ref:t},!C&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(B.a,{type:"text",className:"form-control",name:"username",value:u,onChange:function(e){var t=e.target.value;i(t)},validations:[R,M]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(B.a,{type:"password",className:"form-control",name:"password",value:b,onChange:function(e){var t=e.target.value;E(t)},validations:[R,J]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:h},h&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Sign Up")))),y&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:C?"alert alert-success":"alert alert-danger",role:"alert"},y)),r.a.createElement(T.a,{style:{display:"none"},ref:a}))))},K=function(){var e=f.getCurrentUser();return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile")),r.a.createElement("p",null,r.a.createElement("strong",null,"Token:")," ",e.token.substring(0,20)," ..."," ",e.token.substr(e.token.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null,"Id:")," ",e.id),r.a.createElement("strong",null,"Authorities:"),r.a.createElement("ul",null,e.roles&&e.roles.map((function(e,t){return r.a.createElement("li",{key:t},e.name)}))))},W=function(){return r.a.createElement(o.a,null,r.a.createElement(C,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:["/","/home"],component:N}),r.a.createElement(s.a,{exact:!0,path:"/posts",component:N}),r.a.createElement(s.a,{path:"".concat("/posts","/create"),component:P}),r.a.createElement(s.a,{path:"".concat("/posts","/:postId/edit"),component:U}),r.a.createElement(s.a,{path:"".concat("/posts","/:postId"),component:I}),r.a.createElement(s.a,{exact:!0,path:"/login",component:F}),r.a.createElement(s.a,{exact:!0,path:"/register",component:H}),r.a.createElement(s.a,{exact:!0,path:"/profile",component:K})))};document.title="Blog Reader",c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8789afe1.chunk.js.map