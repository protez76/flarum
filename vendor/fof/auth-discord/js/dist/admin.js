module.exports=function(t){var e={};function s(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}([,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e,s){"use strict";s.r(e);var r=s(3),n=s.n(r),o=s(4),i=s.n(o),a=s(5),p=s.n(a);class c extends p.a{init(){this.key=this.props.key,this.cast=this.props.cast||(t=>t)}setting(){return app.modal.component.setting(this.key)}getValue(){return this.cast(this.setting()())}}class l extends c{view(){const t=Object.assign({},this.props),e=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.bidi=this.setting(),t.simple?m("input",t):m("div.Form-group",[m("label",e),m("input",t)])}}class u extends l{init(){l.prototype.init.call(this),this.cast=t=>Number(t),this.props.type="number"}}s(6);const d={boolean:class extends c{view(){return i.a.component({state:!!this.getValue(),children:this.props.label||this.props.children,onchange:this.setting()})}},string:l,integer:u,number:u};class f extends n.a{init(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))}className(){return[this.props.className,this.props.size&&`Modal--${this.props.size}`].filter(Boolean).join(" ")}title(){return this.props.title}form(){return this.props.form||[...this.props.items].map(t=>!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t))}static createItemsFromValidationRules(t,e,s){const r=[];for(const n in t){const o=e+n.toLowerCase(),i=t[n].split("|"),a=i.find(t=>d[t])||"string",p=a&&d[a]||l,c=i.includes("required"),u=s&&(app.translator.trans[`${s}${n.toLowerCase()}-label`]||n)||n,f=app.translator.translations[`${s}${n.toLowerCase()}-description`];r.push(m.prop(`div.Form-group${c?".required":""}`,["boolean"!==a&&m("label",u),p.component({type:a,key:o,required:c,children:u,simple:!0}),f&&m("span",f)]))}return r}}app.initializers.add("fof/auth-discord",function(){app.extensionSettings["fof-auth-discord"]=function(){return app.modal.show(new f({title:app.translator.trans("fof-auth-discord.admin.discord_settings.title"),size:"medium",items:[m(l,{key:"fof-auth-discord.client_id"},app.translator.trans("fof-auth-discord.admin.discord_settings.client_id_label")),m(l,{key:"fof-auth-discord.client_secret"},app.translator.trans("fof-auth-discord.admin.discord_settings.client_secret_label"))]}))}})}]);
//# sourceMappingURL=admin.js.map