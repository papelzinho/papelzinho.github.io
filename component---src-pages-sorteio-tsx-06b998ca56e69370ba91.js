(self.webpackChunkfaq=self.webpackChunkfaq||[]).push([[833],{8479:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(5414),o=a(6103),c=function(e){var t=e.participants,a=e.group,r=e.showFriendOnClick;return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("section",{className:"px-5 pt-4"},n.createElement("h2",{className:"font-weight-bolder"},a.name),n.createElement("p",null,a.comments),n.createElement("button",{className:"gradient-bg border-0 rounded-lg py-3 px-4 text-white font-weight-bold",onClick:r},"Clique aqui para descobrir seu amigo secreto")),n.createElement("section",{className:"px-5 pt-4"},n.createElement("div",{className:"row"},n.createElement(o.A3,{participant:t.current}),t.others.map((function(e,t){return n.createElement(o.Qc,{key:t,participant:e})}))))))};t.default=function(){var e=n.useState({loading:!0}),t=e[0],a=e[1],s=n.useState(!1),i=s[0],l=s[1];return n.useEffect((function(){var e=new URLSearchParams(window.location.search),t=e.get("g"),n=e.get("p");fetch("https://lm4ipcuu6k.execute-api.us-west-2.amazonaws.com/prd/participant/"+t+"/"+n).then((function(e){return e.json()})).then((function(e){if("Group not found"!==e.message)if(""!==e.message){var n=e.participants.reduce((function(e,a){var n=e;return a.current?n.current=Object.assign({},a,{groupId:t}):n.others?n.others.push(a):n.others=[a],n}),{});a({loading:!1,participants:n,group:{name:e.name,comments:e.comments}}),l(!0)}else alert("Participante não encontrado. Entre em contato com o suporte através do meajuda@papelzinho.com.br ou pelo chat na nossa página do facebook.");else alert("Aparentemente o seu grupo de amigo secreto foi deletado pelo organizador no app. Caso esta mensagem esteja errada e seu grupo não tenha sido excluído, entre em contato com o suporte através do meajuda@papelzinho.com.br ou pelo chat na nossa página do facebook.")})).catch((function(){alert("Sistema fora do ar. Estamos trabalhando para corrigir o problema o mais rápido possível. Tente acessar novamente mais tarde.")}))}),[!1]),n.createElement(n.Fragment,null,n.createElement(o.Ar,null,n.createElement(r.q,null,n.createElement("title",null,"Sorteio | Papelzinho ™")),t.loading?n.createElement(o.a_,null):n.createElement(c,{showFriendOnClick:function(){l(!0)},group:t.group,participants:t.participants}),i&&n.createElement(o.GI,{message:'Você tirou "'+t.participants.current.friend+'" 🎉',action:function(){l(!1)}})))}}}]);
//# sourceMappingURL=component---src-pages-sorteio-tsx-06b998ca56e69370ba91.js.map