(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{141:function(e,t,n){},168:function(e,t){},170:function(e,t){},180:function(e,t){},182:function(e,t){},209:function(e,t){},211:function(e,t){},212:function(e,t){},217:function(e,t){},219:function(e,t){},238:function(e,t){},250:function(e,t){},253:function(e,t){},256:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(136),r=n.n(s),i=(n(141),n(9)),l=n(11),o=n(3),j=n(4),d=n(0);var u=function(e){var t=e.dish,n=e.addToCart,c=e.removeCartItem,a=e.cart,s=e.handleDeleteDish,r=e.user,i=t.title,l=t.description,o=t.price,j=t.image,u=a.some((function(e){return e.id===t.id}));return Object(d.jsxs)("div",{className:"dish-card",children:[Object(d.jsxs)("div",{className:"title-img-box",children:[Object(d.jsx)("h3",{className:"heading-tertiary",children:i}),Object(d.jsx)("img",{className:"dish-image",src:j,alt:l})]}),Object(d.jsxs)("div",{className:"description-box",children:[Object(d.jsx)("p",{className:"dish-description",children:l}),Object(d.jsxs)("p",{className:"dish-price",children:["$",o]}),u?Object(d.jsx)("button",{onClick:function(){return c(t.id)},className:"btn btn-remove",children:"Remove from Cart"}):Object(d.jsx)("button",{onClick:function(){return n(t.id)},className:"btn btn-add",children:"Add to Cart"}),"admin"===r.role?Object(d.jsx)("button",{className:"btn",onClick:function(){fetch("/dishes/".concat(t.id),{method:"DELETE"}).then((function(){return s(t)}))},children:"Delete Dish"}):null]})]})};var b=function(e){var t=e.dishes,n=e.addToCart,c=e.removeCartItem,a=e.cart,s=e.handleDeleteDish,r=e.user,i=e.setCategory,l=e.filterBy;function o(e){i(e.target.value)}var j=t.map((function(e){return Object(d.jsx)(u,{dish:e,addToCart:n,removeCartItem:c,cart:a,handleDeleteDish:s,user:r},e.id)}));return j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsx)("strong",{className:"filter-label",children:"Filter: "}),Object(d.jsxs)("div",{className:"filter-box",children:[Object(d.jsx)("input",{onChange:o,type:"radio",value:"All",checked:"All"===l}),Object(d.jsx)("span",{className:"label",children:"All"}),Object(d.jsx)("input",{onChange:o,type:"radio",value:"Starter",checked:"Starter"===l}),Object(d.jsx)("span",{className:"label",children:"Starters"}),Object(d.jsx)("input",{onChange:o,type:"radio",value:"Entree",checked:"Entree"===l}),Object(d.jsx)("span",{className:"label",children:"Entrees"}),Object(d.jsx)("input",{onChange:o,type:"radio",value:"Dessert",checked:"Dessert"===l}),Object(d.jsx)("span",{className:"label",children:"Desserts"}),Object(d.jsx)("input",{onChange:o,type:"radio",value:"Beverage",checked:"Beverage"===l}),Object(d.jsx)("span",{className:"label",children:"Beverages"})]})]}),Object(d.jsx)("div",{className:"dish-container",children:Object(d.jsx)("div",{children:j})})]}):Object(d.jsx)("p",{className:"heading-secondary",children:'"Loading..."'})};var h=function(e){var t=e.onLogin,n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],b=l[1],h=Object(c.useState)([]),m=Object(o.a)(h,2),O=m[0],x=m[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),v=f[0],g=f[1],N=Object(j.n)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsxs)("form",{className:"cta-form",onSubmit:function(e){e.preventDefault(),x([]),g(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:u})}).then((function(e){g(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return x(e.errors)})),N("/")}))},children:[Object(d.jsx)("h2",{className:"heading-secondary",children:"Please Login"}),Object(d.jsx)("label",{children:"Username:"}),Object(d.jsx)("input",{type:"text",name:"user_name",value:s,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("label",{children:"Password:"}),Object(d.jsx)("input",{type:"password",name:"password",value:u,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("button",{className:"btn login-btn",type:"submit",children:v?"Loading...":"Login"})]}),Object(d.jsx)("div",{className:"errors",children:O.map((function(e){return Object(d.jsxs)("p",{children:[e,"!"]},e)}))})]})})},m=n(8),O=n(17);var x=function(e){var t=e.onLogin,n=e.handleAddUser,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)([]),u=Object(o.a)(l,2),b=u[0],h=u[1],x=Object(c.useState)({first_name:"",last_name:"",email:"",username:"",password:"",password_confirmation:""}),p=Object(o.a)(x,2),f=p[0],v=p[1],g=Object(j.n)();function N(e){v((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))}return Object(d.jsxs)("div",{className:"form-container-signup",children:[Object(d.jsxs)("form",{className:"cta-form-signup",onSubmit:function(e){e.preventDefault(),h([]),i(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:f.first_name,last_name:f.last_name,email:f.email,username:f.username,password:f.password,password_confirmation:f.password_confirmation})}).then((function(e){i(!1),e.ok?e.json().then((function(e){n(e),t(e)})):e.json().then((function(e){return h(e.errors)})),g("/")}))},children:[Object(d.jsx)("h2",{className:"heading-secondary",children:"Sign Up"}),Object(d.jsx)("label",{children:"First Name: "}),Object(d.jsx)("input",{type:"text",name:"first_name",value:f.first_name,onChange:N}),Object(d.jsx)("label",{children:"Last Name: "}),Object(d.jsx)("input",{type:"text",name:"last_name",value:f.last_name,onChange:N}),Object(d.jsx)("label",{children:"Email: "}),Object(d.jsx)("input",{type:"text",name:"email",value:f.email,onChange:N}),Object(d.jsx)("label",{children:"Username: "}),Object(d.jsx)("input",{type:"text",name:"username",value:f.username,onChange:N}),Object(d.jsx)("label",{children:"Password: "}),Object(d.jsx)("input",{type:"password",name:"password",value:f.password,onChange:N}),Object(d.jsx)("label",{children:"Password Confirmation: "}),Object(d.jsx)("input",{type:"password",name:"password_confirmation",value:f.password_confirmation,onChange:N}),Object(d.jsx)("button",{className:"btn login-btn",type:"submit",children:r?"Loading...":"Signup"})]}),Object(d.jsx)("div",{className:"errors",children:b.map((function(e){return Object(d.jsxs)("p",{children:[e,"!"]},e)}))})]})};var p=function(e){var t=e.onLogin,n=e.handleAddUser,a=Object(c.useState)(!0),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(d.jsx)("div",{children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading-primary login-greeting",children:"Welcome to Red Star Thai"}),Object(d.jsx)(h,{onLogin:t}),Object(d.jsxs)("div",{className:"signup-container",children:[Object(d.jsx)("p",{className:"signup-cta-text",children:"Don't have an account?"}),Object(d.jsx)("button",{className:"btn",onClick:function(){return i(!1)},children:"Sign Up"})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading-primary login-greeting",children:"Welcome to Red Star Thai"}),Object(d.jsx)(x,{onLogin:t,handleAddUser:n}),Object(d.jsxs)("div",{className:"login-container",children:[Object(d.jsx)("p",{className:"signup-cta-text",children:"Already have an account?"}),Object(d.jsx)("button",{className:"btn",onClick:function(){return i(!0)},children:"Log In"})]})]})})},f=n.p+"static/media/logo.7f87ae71.png";var v=function(e){var t=e.user,n=e.setUser,c=t.first_name,a=t.role,s=Object(j.n)();function r(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&(n(null),s("/"))}))}return Object(d.jsxs)("header",{className:"header sticky",children:[Object(d.jsxs)("div",{className:"logo-greeting",children:[Object(d.jsx)("img",{className:"logo",src:f,alt:"restaurant-logo"}),Object(d.jsx)("p",{className:"header-name",children:"Red Star Thai"}),Object(d.jsxs)("p",{className:"greeting",children:["Welcome, ",c," "]})]}),"admin"===a?Object(d.jsx)("nav",{className:"main-nav",children:Object(d.jsxs)("ul",{className:"main-nav-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/menu",children:"Menu"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/edit_profile",children:"Account"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/cart",children:"Cart"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/admin",children:"Admin"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn",onClick:r,children:"Logout"})})]})}):Object(d.jsx)("nav",{className:"main-nav",children:Object(d.jsxs)("ul",{className:"main-nav-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/menu",children:"Menu"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/edit_profile",children:"Account"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{className:"main-nav-link",to:"/cart",children:"Cart"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn",onClick:r,children:"Logout"})})]})})]})},g=n.p+"static/media/hero-img1.4302b010.jpg",N=n.p+"static/media/header-img.2f4e1ff4.jpg";var C=function(){var e=Object(j.n)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header-image-container",children:Object(d.jsx)("img",{className:"header-image",src:g,alt:"Logo"})}),Object(d.jsx)("section",{className:"section-hero",children:Object(d.jsxs)("div",{className:"hero",children:[Object(d.jsxs)("div",{className:"hero-text-box",children:[Object(d.jsx)("h1",{className:"heading-primary hero-header",children:"Red Star Thai"}),Object(d.jsx)("p",{className:"hero-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(d.jsx)("button",{onClick:function(){e("/menu")},className:"btn btn--full margin-right-sm",children:"Order Now"})]}),Object(d.jsx)("div",{className:"hero-img-box",children:Object(d.jsx)("img",{className:"hero-img",src:N,alt:"yummy thai food"})})]})})]})};var y=function(e){var t=e.cartItem,n=e.removeCartItem,c=t.title,a=t.price;return Object(d.jsxs)("div",{className:"cart-card",children:[Object(d.jsx)("h3",{className:"heading-tertiary",children:c}),Object(d.jsxs)("p",{className:"dish-price",children:["$",a]}),Object(d.jsx)("button",{className:"btn",onClick:function(){return n(t.id)},children:"Remove from Cart"})]})};var k=function(e){var t=e.cart,n=e.removeCartItem,c=e.cartRemoveAll,a=e.cartTotal,s=e.handleCheckoutClick,r=t.map((function(e){return Object(d.jsx)(y,{cartItem:e,cartRemoveAll:c,removeCartItem:n},e.id)}));return Object(d.jsxs)("div",{className:"cart-container",children:[Object(d.jsx)("div",{children:r}),Object(d.jsxs)("p",{className:"dish-price",children:["Subtotal: $",a<=0?"0.00":a.toFixed(2)]}),Object(d.jsx)("button",{onClick:s,className:"btn --checkout-btn",children:"Checkout"}),Object(d.jsx)("button",{className:"btn",onClick:c,children:"Remove All Items"})]})};var S=function(e){var t=e.orderId,n=e.handleClose,c=e.user;return Object(d.jsx)("div",{className:"popup-box",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"close-icon",onClick:n,children:"x"}),Object(d.jsxs)("div",{className:"popup-details",children:[Object(d.jsxs)("h3",{className:"heading-tertiary",children:["Your order is placed, ",c.first_name,"!"]}),Object(d.jsx)("p",{className:"popup-detail",children:"The chef is cooking you up something nice!"}),Object(d.jsxs)("p",{className:"popup-detail",children:["Your order number is ",Object(d.jsx)("strong",{children:t}),"."]})]})]})})},_=n(23),w=n.n(_);var D=function(e){var t=e.cart,a=e.cartTotal,s=e.cartNumber,r=e.user,i=e.setCart,l=e.setCartNumber,u=e.setCartTotal,b=Object(c.useState)(""),h=Object(o.a)(b,2),m=h[0],O=h[1],x=Object(c.useState)(!1),p=Object(o.a)(x,2),f=p[0],v=p[1],g=Object(j.n)();Object(c.useEffect)((function(){var e=n(164)("key").generate();O(e)}),[]),Object(c.useEffect)((function(){0===t.length&&g("/")}),[t,g]);var N=t.map((function(e){return Object(d.jsxs)("div",{className:"cart-detail-order",children:[Object(d.jsx)("p",{children:e.title}),Object(d.jsxs)("p",{children:["$",e.price]})]},e.id)})),C=.04*a,y=C+a;return Object(d.jsx)("div",{className:"checkout-container",children:Object(d.jsxs)("div",{className:"checkout-contain",children:[Object(d.jsx)("h2",{className:"heading-secondary",children:"Your Order"}),Object(d.jsxs)("h3",{className:"heading-tertiary",children:["Items: ",s]}),Object(d.jsx)("div",{className:"order-details",children:N}),Object(d.jsxs)("div",{className:"price-details",children:[Object(d.jsxs)("p",{className:"price-detail",children:["Subtotal: ",a.toFixed(2)]}),Object(d.jsxs)("p",{className:"price-detail",children:["Tax: ",C.toFixed(2)]}),Object(d.jsxs)("p",{className:"price-detail",children:["Total: ",y.toFixed(2)]})]}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),w.a.post("/order/".concat(r.id,"/").concat(m,"/").concat(y)).then((function(e){return console.log(e)})),v(!0)},children:Object(d.jsx)("button",{className:"btn order-btn",type:"submit",children:"Place Order"})}),!0===f?Object(d.jsx)(S,{orderId:m,handleClose:function(){i([]),l(0),u(0),v(!1),g("/")},user:r}):null]})})};var T=function(e){var t=e.user,n=e.setUser,a=e.handleDeleteUser,s=t.first_name,r=t.last_name,i=t.email,l=t.username,j=Object(c.useState)([]),u=Object(o.a)(j,2),b=u[0],h=u[1],x=Object(c.useState)(!1),p=Object(o.a)(x,2),f=p[0],v=p[1],g=Object(c.useState)([]),N=Object(o.a)(g,2),C=N[0],y=N[1],k=Object(c.useState)({first_name:s,last_name:r,email:i,username:l}),S=Object(o.a)(k,2),_=S[0],D=S[1];function T(e){D(Object(O.a)(Object(O.a)({},_),{},Object(m.a)({},e.target.name,e.target.value)))}Object(c.useEffect)((function(){w.a.get("/user_orders/".concat(t.id)).then((function(e){console.log(e.data),h(e.data)}))}),[t.id]);var L=b.map((function(e){return Object(d.jsxs)("div",{className:"order-details-card",children:[Object(d.jsxs)("p",{children:["Order Number: ",e.identifier]}),Object(d.jsxs)("p",{className:"status",children:["Order Status: ",e.status]}),Object(d.jsxs)("p",{className:"total",children:["Order Total: $ ",e.total]})]},e.id)}));return Object(d.jsxs)("div",{className:"form-container-profile",children:[Object(d.jsx)("h2",{className:"heading-tertiary",children:"Update Profile"}),Object(d.jsxs)("form",{className:"cta-form-profile",onSubmit:function(e){e.preventDefault(),y([]),v(!0),fetch("/edit_profile",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:_.first_name,last_name:_.last_name,phone_number:_.phone_number,email:_.email,username:_.username})}).then((function(e){v(!1),e.ok?(e.json().then((function(e){return n(e)})),alert("Your profile has been updated!")):e.json().then((function(e){return y(e.errors)}))}))},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"First Name: "}),Object(d.jsx)("input",{type:"text",name:"first_name",value:_.first_name,onChange:T})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Last Name: "}),Object(d.jsx)("input",{type:"text",name:"last_name",value:_.last_name,onChange:T})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Email: "}),Object(d.jsx)("input",{type:"text",name:"email",value:_.email,onChange:T})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Username: "}),Object(d.jsx)("input",{type:"text",name:"username",value:_.username,onChange:T})]}),Object(d.jsx)("button",{className:"btn",type:"submit",children:f?"Loading...":"Update"}),Object(d.jsx)("button",{className:"btn",onClick:function(){a(t),fetch("/users/".concat(t.id),{method:"DELETE"}).then((function(){return n(null)}))},children:"Delete Account"})]}),Object(d.jsx)("div",{children:C.map((function(e){return Object(d.jsx)("p",{children:e},e)}))}),Object(d.jsx)("h2",{className:"heading-tertiary profile-header",children:"My Orders"}),Object(d.jsx)("div",{children:L})]})};n(256);var L=function(){return Object(d.jsxs)("div",{className:"admin-container",children:[Object(d.jsx)("h2",{className:"heading-tertiary",children:"Admin Actions"}),Object(d.jsxs)("nav",{className:"admin-nav",children:[Object(d.jsxs)(i.b,{to:"orders",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),"User Orders"]}),Object(d.jsxs)(i.b,{to:"users",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})}),"All Users"]}),Object(d.jsxs)(i.b,{to:"dishes/new",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Add New Dish"]})]}),Object(d.jsx)(j.a,{})]})};var A=function(e){var t=e.oneOrder,n=t.total,a=t.identifier,s=t.status,r=Object(c.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(!1),b=Object(o.a)(u,2),h=b[0],x=b[1],p=t.user,f=p.first_name,v=p.last_name,g=Object(c.useState)({status:""}),N=Object(o.a)(g,2),C=N[0],y=N[1];return console.log(t),Object(d.jsxs)("div",{className:"all-orders-card",children:[Object(d.jsxs)("p",{children:["Customer: ",f," ",v]}),Object(d.jsxs)("p",{children:["Order Number: ",a]}),Object(d.jsxs)("p",{children:["Total: $",n]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j([]),x(!0),fetch("/orders/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:C.status})}).then((function(e){x(!1),e.ok?(e.json().then((function(e){return y(e)})),alert("Customer's order has been updated!")):e.json().then((function(e){return j(e.errors)}))}))},children:[Object(d.jsxs)("select",{name:"status",value:C.status,onChange:function(e){y((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},children:["Status:",Object(d.jsx)("option",{value:s,children:s}),Object(d.jsx)("option",{value:"Ready for pickup",children:"Ready for pickup"}),Object(d.jsx)("option",{value:"Cancelled",children:"Cancelled"})]}),Object(d.jsx)("button",{className:"btn",type:"submit",children:h?"Loading...":"Update"})]}),Object(d.jsx)("div",{className:"errors",children:l.map((function(e){return Object(d.jsxs)("p",{children:[e,"!"]},e)}))})]})};var U=function(e){var t=e.orderIndex.map((function(e){return Object(d.jsx)(A,{oneOrder:e},e.id)}));return t?Object(d.jsx)("div",{className:"all-orders",children:Object(d.jsx)("div",{children:t})}):Object(d.jsx)("p",{className:"heading-secondary",children:'"Loading..."'})};var E=function(e){var t=e.oneUser,n=e.handleDeleteUser,c=t.first_name,a=t.last_name,s=t.email,r=t.username;return Object(d.jsxs)("div",{className:"all-users-card",children:[Object(d.jsxs)("p",{children:["Username: ",r]}),Object(d.jsxs)("p",{children:["Name: ",c," ",a]}),Object(d.jsxs)("p",{children:["Email: ",s]}),Object(d.jsx)("button",{className:"btn --delete-user",onClick:function(){fetch("/admin/destroy/".concat(t.id),{method:"DELETE"}).then((function(){return n(t)}))},children:"Delete User"})]})};var I=function(e){var t=e.userIndex,n=e.handleDeleteUser,c=t.map((function(e){return Object(d.jsx)(E,{oneUser:e,handleDeleteUser:n},e.id)}));return c?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"all-users",children:c})}):Object(d.jsx)("h2",{className:"heading-secondary",children:'"Loading..."'})};var F=function(e){var t=e.handleAddDish,n=Object(c.useState)([]),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),u=l[0],b=l[1],h=Object(c.useState)({title:"",price:"",description:"",image:"",category_id:""}),x=Object(o.a)(h,2),p=x[0],f=x[1],v=Object(j.n)();function g(e){f((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))}return Object(d.jsxs)("div",{className:"form-container-new-dish",children:[Object(d.jsx)("h2",{className:"heading-secondary",children:"Add New Dish"}),Object(d.jsxs)("form",{className:"cta-form-new-dish",onSubmit:function(e){e.preventDefault(),r([]),b(!0),fetch("/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:p.title,price:p.price,description:p.description,image:p.image,category_id:p.category_id})}).then((function(e){b(!1),e.ok?e.json().then((function(e){t(e),v("/menu")})):e.json().then((function(e){return r(e.errors)}))}))},children:[Object(d.jsx)("label",{children:"Title: "}),Object(d.jsx)("input",{type:"text",name:"title",value:p.title,onChange:g}),Object(d.jsx)("label",{children:"Price: "}),Object(d.jsx)("input",{type:"text",name:"price",value:p.price,onChange:g}),Object(d.jsx)("label",{children:"Description: "}),Object(d.jsx)("input",{type:"text",name:"description",value:p.description,onChange:g}),Object(d.jsx)("label",{children:"Image: "}),Object(d.jsx)("input",{type:"text",name:"image",value:p.image,onChange:g}),Object(d.jsx)("label",{children:"Category: "}),Object(d.jsxs)("select",{onChange:g,value:p.category_id,name:"category_id",children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"1",children:"Starter"}),Object(d.jsx)("option",{value:"2",children:"Entree"}),Object(d.jsx)("option",{value:"3",children:"Dessert"}),Object(d.jsx)("option",{value:"4",children:"Beverage"})]}),Object(d.jsx)("button",{className:"btn --submit-dish",type:"submit",children:u?"Loading...":"Submit"})]}),Object(d.jsx)("div",{children:s.map((function(e){return Object(d.jsx)("p",{children:e},e)}))})]})};var P=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),i=r[0],u=r[1],h=Object(c.useState)(0),m=Object(o.a)(h,2),O=m[0],x=m[1],f=Object(c.useState)([]),g=Object(o.a)(f,2),N=g[0],y=g[1],S=Object(c.useState)(0),_=Object(o.a)(S,2),A=_[0],E=_[1],P=Object(c.useState)([]),R=Object(o.a)(P,2),B=R[0],M=R[1],J=Object(c.useState)([]),W=Object(o.a)(J,2),$=W[0],H=W[1],q=Object(c.useState)("All"),z=Object(o.a)(q,2),Y=z[0],G=z[1],K=Object(j.n)();Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return a(e)}))}))}),[]),Object(c.useEffect)((function(){fetch("/dishes").then((function(e){e.ok&&e.json().then((function(e){u(e)}))}))}),[]);var Q=i.filter((function(e){return"All"===Y||e.category.title===Y}));function V(e){w.a.delete("/destroy/".concat(n.id,"/").concat(e)).then((function(){x(O-1);var t=N.find((function(t){return t.id===e}));E(A-t.price);var n=N.filter((function(e){return e.id!==t.id}));y(n)}))}function X(e){var t=B.filter((function(t){return t.id!==e.id}));M(t)}return Object(c.useEffect)((function(){fetch("/shopping_cart").then((function(e){return e.json()})).then((function(e){x(e.total_items),E(e.total_price),y(e.dishes)}))}),[]),Object(c.useEffect)((function(){fetch("/admin/users").then((function(e){return e.json()})).then((function(e){return M(e)}))}),[]),Object(c.useEffect)((function(){fetch("/admin/orders").then((function(e){return e.json()})).then((function(e){return H(e)}))}),[]),n?Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{user:n,setUser:a}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{index:!0,element:Object(d.jsx)(C,{})}),Object(d.jsx)(j.b,{path:"/*",element:Object(d.jsx)(C,{})}),Object(d.jsx)(j.b,{path:"/menu",element:Object(d.jsx)(b,{dishes:Q,filterBy:Y,setCategory:G,addToCart:function(e){w.a.post("/new/".concat(n.id,"/").concat(e)).then((function(e){x(O+1),y((function(t){return[].concat(Object(l.a)(t),[e.data])})),E(A+e.data.price)}))},removeCartItem:V,cart:N,user:n,handleDeleteDish:function(e){var t=i.filter((function(t){return t.id!==e.id}));u(t)}})}),Object(d.jsx)(j.b,{path:"/edit_profile",element:Object(d.jsx)(T,{user:n,setUser:a,handleDeleteUser:X})}),Object(d.jsx)(j.b,{path:"/cart",element:Object(d.jsx)(k,{cart:N,removeCartItem:V,cartRemoveAll:function(){w.a.delete("/delete/".concat(n.id)).then((function(){x(0),y([]),E(0)}))},cartTotal:A,handleCheckoutClick:function(){0!==O&&K("/checkout")}})}),Object(d.jsxs)(j.b,{path:"/admin",element:Object(d.jsx)(L,{}),children:[Object(d.jsx)(j.b,{path:"orders",element:Object(d.jsx)(U,{orderIndex:$})}),Object(d.jsx)(j.b,{path:"users",element:Object(d.jsx)(I,{userIndex:B,handleDeleteUser:X})}),Object(d.jsx)(j.b,{path:"dishes/new",element:Object(d.jsx)(F,{handleAddDish:function(e){u([e].concat(Object(l.a)(i)))}})})]}),Object(d.jsx)(j.b,{path:"/checkout",element:Object(d.jsx)(D,{cart:N,cartTotal:A,cartNumber:O,user:n,setCart:y,setCartNumber:x,setCartTotal:E})})]})]}):Object(d.jsx)(p,{onLogin:a,handleAddUser:function(e){M([e].concat(Object(l.a)(B)))}})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(P,{})})}),document.getElementById("root")),R()}},[[257,1,2]]]);
//# sourceMappingURL=main.176b2289.chunk.js.map