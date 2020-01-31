module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["models/Forum"]},function(t,e){t.exports=flarum.core.compat["models/Group"]},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/SessionDropdown"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),o=n.n(a),r=n(2),s=n.n(r),l=n(6),u=n.n(l);function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var p=n(8),f=function(t){function e(){return t.apply(this,arguments)||this}return c(e,t),e}(n.n(p)()(s.a,{email:s.a.attribute("email")})),h=n(3),d=n.n(h),g=n(9),w=n.n(g),b=n(10),y=n.n(b),k=n(4),x=n.n(k),v=n(11),_=n.n(v),M=n(7),R=n.n(M),C=n(12),j=n.n(C),I=n(5),S=n.n(I),O=n(13),T=function(t){function e(){return t.apply(this,arguments)||this}return c(e,t),e.prototype.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks[t.which];e&&e(t)}},e}(n.n(O).a),L=function(t){function e(){return t.apply(this,arguments)||this}c(e,t);var n=e.prototype;return n.className=function(){return"KilowhatMailingSentModal Modal--small"},n.title=function(){return o.a.translator.trans("kilowhat-mailing.forum.modal_sent.title_text")},n.content=function(){return[m(".MailingShipping",S()("fas fa-shipping-fast")),m(".Modal-body",[m("h1",o.a.translator.trans("kilowhat-mailing.forum.modal_sent.on_its_way",{recipientsCount:this.props.recipientsCount}))])]},e}(x.a),N=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,z=function(t){function e(){return t.apply(this,arguments)||this}c(e,t);var n=e.prototype;return n.init=function(){var e=this;if(t.prototype.init.call(this),this.sending=!1,this.recipients=[],this.props.user&&this.recipients.push(this.props.user),this.props.forAll){var n=o.a.store.getById("groups",R.a.MEMBER_ID);this.recipients.push(n)}this.subject=m.prop(""),this.messageText=m.prop(""),this.searchIndex=0,this.navigator=new T,this.navigator.when((function(t){return"Tab"!==t.key||!!e.filter()})).onUp((function(){e.searchIndex>0&&(e.searchIndex--,m.redraw())})).onDown((function(){e.searchIndex<e.searchResults.length-1&&(e.searchIndex++,m.redraw())})).onSelect((function(){e.selectResult(e.searchResults[e.searchIndex])})).onRemove((function(){e.recipients.pop()})),this.filter=m.prop(""),this.focused=!1,this.loadingResults=!1,this.searchResults=[],this.searchTimeout=null},n.className=function(){return"KilowhatMailingModal Modal--large"},n.title=function(){return o.a.translator.trans("kilowhat-mailing.forum.modal_mail.title_text")},n.onready=function(){this.$("form").find(".js-focus-on-load").first().focus().select()},n.recipientLabel=function(t){switch(t.data.type){case"users":return m(".RecipientLabel",j()(t));case"groups":return m(".RecipientLabel",t.color()?{className:"colored",style:{backgroundColor:t.color()}}:{},[t.icon()?[S()(t.icon())," "]:null,t.namePlural()]);case"kilowhat-mailing-emails":return m(".RecipientLabel",t.email())}return"[unknown]"},n.searchResultKind=function(t){switch(t.data.type){case"users":return o.a.translator.trans("kilowhat-mailing.forum.recipient_kinds.user");case"groups":return o.a.translator.trans("kilowhat-mailing.forum.recipient_kinds.group");case"kilowhat-mailing-emails":return o.a.translator.trans("kilowhat-mailing.forum.recipient_kinds.email")}return"[unknown]"},n.selectResult=function(t){t&&(this.recipients.push(t),this.filter(""),this.searchResults=[])},n.content=function(){var t=this;return m(".Modal-body",m("form.Form",{onsubmit:this.onsubmit.bind(this)},[m(".Form-group",[m("label",o.a.translator.trans("kilowhat-mailing.forum.modal_mail.recipients_label")),m(".RecipientsInput.FormControl",{className:this.focused?"focus":""},[m("span.RecipientsInput-selected",this.recipients.map((function(e,n){return m("span.RecipientsInput-recipient",{onclick:function(){t.recipients.splice(n,1)},title:t.searchResultKind(e)},t.recipientLabel(e))}))),m("input.FormControl",{placeholder:o.a.translator.trans("kilowhat-mailing.forum.modal_mail.recipients_placeholder"),value:this.filter(),oninput:m.withAttr("value",(function(e){t.filter(e),t.performNewSearch()})),onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){t.focused=!0},onblur:function(){t.focused=!1},disabled:this.sending}),this.loadingResults?_.a.component({size:"tiny",className:"Button Button--icon Button--link"}):null,this.searchResults.length?m("ul.Dropdown-menu",this.searchResults.map((function(e,n){return m("li",{className:t.searchIndex===n?"active":"",onclick:function(){t.selectResult(e)}},m("button[type=button]",[m("span.SearchResultKind",t.searchResultKind(e)),t.recipientLabel(e)]))}))):null])]),m(".Form-group",[m("label",o.a.translator.trans("kilowhat-mailing.forum.modal_mail.subject_label")),m("input[type=text].FormControl.js-focus-on-load",{bidi:this.subject,placeholder:o.a.translator.trans("kilowhat-mailing.forum.modal_mail.default_subject"),disabled:this.sending})]),m(".Form-group",[m("label",o.a.translator.trans("kilowhat-mailing.forum.modal_mail.message_label")),m("textarea.FormControl",{rows:10,bidi:this.messageText,disabled:this.sending})]),m(".Form-group",[d.a.component({type:"submit",className:"Button Button--primary EditContactModal-save",loading:this.sending,children:o.a.translator.trans("kilowhat-mailing.forum.modal_mail.submit_button"),disabled:0===this.recipients.length||""===this.messageText()})])]))},n.performNewSearch=function(){var t=this;this.searchIndex=0;var e=this.filter().toLowerCase();this.buildSearchResults(e),clearTimeout(this.searchTimeout),e.length>=3&&(this.searchTimeout=setTimeout((function(){t.loadingResults=!0,m.redraw(),o.a.store.find("users",{filter:{q:e},page:{limit:5}}).then((function(){t.loadingResults=!1,t.buildSearchResults(e),m.redraw()}))}),250))},n.buildSearchResults=function(t){var e=this;if(t){var n=[];o.a.forum.kilowhatMailingCanMailAll()&&o.a.store.all("groups").forEach((function(e){e.id()!==R.a.GUEST_ID&&(-1===e.nameSingular().toLowerCase().indexOf(t)&&-1===e.namePlural().toLowerCase().indexOf(t)||n.push(e))})),o.a.store.all("users").forEach((function(e){-1!==e.username().toLowerCase().indexOf(t)&&n.push(e)})),N.test(this.filter())&&n.push(o.a.store.createRecord("kilowhat-mailing-emails",{attributes:{email:this.filter()}})),this.searchResults=n.filter((function(t){return"kilowhat-mailing-emails"===t.data.type?!e.recipients.some((function(e){return"kilowhat-mailing-emails"===e.data.type&&e.email()===t.email()})):!e.recipients.some((function(e){return e.data.type===t.data.type&&e.id()===t.id()}))})),m.redraw()}else this.searchResults=[]},n.onsubmit=function(t){var e=this;t.preventDefault(),this.sending=!0,o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/admin-mail",data:{data:{recipients:this.recipients.map((function(t){return"kilowhat-mailing-emails"===t.data.type?{type:t.data.type,attributes:{email:t.email()}}:{type:t.data.type,id:t.id()}})),subject:this.subject(),text:this.messageText()}}}).then((function(t){e.hide(),o.a.modal.show(new L({recipientsCount:t.recipientsCount}))}),(function(t){e.sending=!1,e.onerror(t)}))},e}(x.a);o.a.initializers.add("kilowhat-mailing",(function(){o.a.store.models["kilowhat-mailing-emails"]=f,u.a.prototype.kilowhatMailingCanMailAll=s.a.attribute("kilowhatMailingCanMailAll"),u.a.prototype.kilowhatMailingCanMailIndividual=s.a.attribute("kilowhatMailingCanMailIndividual"),function(){Object(i.extend)(w.a,"moderationControls",(function(t,e){o.a.forum.kilowhatMailingCanMailIndividual()&&t.add("kilowhat-mailing",d.a.component({icon:"fas fa-envelope",children:o.a.translator.trans("kilowhat-mailing.forum.links.mail_individual"),onclick:function(){o.a.modal.show(new z({user:e}))}}))})),Object(i.extend)(y.a.prototype,"items",(function(t){o.a.forum.kilowhatMailingCanMailAll()&&t.add("kilowhat-mailing",d.a.component({icon:"fas fa-envelope",children:o.a.translator.trans("kilowhat-mailing.forum.links.mail_all"),onclick:function(){o.a.modal.show(new z({forAll:!0}))}}))}));var t=flarum.extensions["fof-user-directory"]||flarum.extensions["flagrow-user-directory"];t&&t.UserDirectoryPage&&Object(i.extend)(t.UserDirectoryPage.prototype,"actionItems",(function(t){o.a.forum.kilowhatMailingCanMailAll()&&t.add("kilowhat-mailing",d.a.component({className:"Button",icon:"fas fa-envelope",children:o.a.translator.trans("kilowhat-mailing.forum.links.mail_all"),onclick:function(){o.a.modal.show(new z({forAll:!0}))}}),10)}))}()}))}]);
//# sourceMappingURL=forum.js.map