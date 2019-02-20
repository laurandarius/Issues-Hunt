(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(12),c=a.n(r),l=a(48),i=a(49),o=a(55),u=a(50),m=a(56),d=a(30),h=a.n(d),p=(a(81),a(31)),g=a.n(p),f=function(){return n.a.createElement("div",{className:"header-block"},n.a.createElement("h1",{className:"header-title"},"Issues Hunt"),n.a.createElement("div",{className:"contacts-wrapper"},"Created By ",n.a.createElement("a",{rel:"noopener noreferrer",className:"website-link",target:"_blank",href:"https://fulin426.github.io/"},"Fu-Lin Liu"),n.a.createElement("div",{className:"icons-container"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/fu-lin-liu/"},n.a.createElement("i",{className:"fab fa-linkedin fa-2x header-icon"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/fulin426"},n.a.createElement("i",{className:"fab fa-github-square fa-2x header-icon"})))))},v=function(){return n.a.createElement("div",{className:"description"},n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("p",null,"Search over 22 million open issues across GitHub.")))},E=a(29),b=a.n(E),N=a(51),k=a.n(N),y=a(28),S=a.n(y),w=a(32),P=a.n(w),L=function(e){var t=e.searchIssues,a=e.input,s=e.searchInput;return n.a.createElement(k.a,{className:"SearchBar",onSubmit:t},n.a.createElement(P.a,null,n.a.createElement(S.a,{value:a,onChange:s,placeholder:"Search all issues..","aria-label":"Search Input","aria-describedby":"basic-addon2"}),n.a.createElement(P.a.Append,null,n.a.createElement(b.a,{className:"search-button",onClick:t},"Search"))))},B=function(e){var t=e.clearSearchbar;return n.a.createElement("div",{className:"clear-query-container"},n.a.createElement("div",{className:"query-item",onClick:t},"Clear search query and filters ",n.a.createElement("i",{className:"far fa-times-circle"})))},I=a(22),C=a.n(I),x=a(13),O=a.n(x),D=a(16),A=a.n(D),R=function(e){var t=e.passID,a=e.currentLabel,s=e.searchedLabel;return'"'.concat(a,'"')===s?n.a.createElement("div",{"data-id":t},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":t,className:"icon-box"})},_=function(e){var t=e.searchByLabel,a=e.searchedLabel,s=[["good+first+issue","Good First Issue"],["help+wanted","Help Wanted"],["discussion","Discussion"],["enchancement","Enhancement"],["bug","Bug"],["hacktoberfest","Hacktoberfest"]].map(function(e){return n.a.createElement(O.a.Item,{key:e[0],as:"button","data-id":e[0],onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(R,{passID:e[0],searchedLabel:a,currentLabel:e[0]})),n.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return n.a.createElement(A.a,{id:"LabelDropdown",title:"Label",className:"DropdownButton"},s)},F=function(e){var t=e.currentLanguage,a=e.searchedLanguaged,s=e.passID;return t===a?n.a.createElement("div",{"data-id":s},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":s,className:"icon-box"})},H=function(e){var t=e.searchByLanguage,a=e.searchedLanguaged,s=["JavaScript","Python","Java","HTML","CSS","Ruby","C#","PHP","C++"].map(function(e){return n.a.createElement(O.a.Item,{key:e,"data-id":e,onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(F,{passID:e,searchedLanguaged:a,currentLanguage:e})),n.a.createElement("div",{"data-id":e,className:"dropdown-text-wrapper"},e)))});return n.a.createElement(A.a,{id:"LanguageDropdown",title:"Language",className:"DropdownButton"},s)},j=function(e){var t=e.searchedSort,a=e.currentSortOption,s=e.passID;return t===a?n.a.createElement("div",{"data-id":s},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":s,className:"icon-box"})},M=function(e){var t=e.searchBySort,a=e.currentSortOption,s=[["","Best Match (default)"],["&sort=created&order=desc","Newest"],["&sort=created&order=asc","Oldest"],["&sort=comments&order=desc","Most Comments"],["&sort=comments&order=asc","Least Comments"],["&sort=Updated&order=desc","Recently Updated"]].map(function(e){return n.a.createElement(O.a.Item,{key:e,"data-id":e[0],onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(j,{passID:e[0],searchedSort:e[0],currentSortOption:a})),n.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return n.a.createElement(A.a,{id:"Dropdownsort",title:"Sort",className:"DropdownButton"},s)},W=function(e){var t=e.totalCount,a=e.searchedLabel,s=e.searchByLabel,r=e.searchedLanguaged,c=e.searchByLanguage,l=e.searchBySort,i=e.currentSortOption;return n.a.createElement(C.a,{className:"ResultsHeader"},n.a.createElement("div",{className:"open-issues"},n.a.createElement("i",{className:"fas fa-exclamation-circle"})," ",t," Open"),n.a.createElement(M,{searchBySort:l,currentSortOption:i}),n.a.createElement(_,{searchedLabel:a,searchByLabel:s}),n.a.createElement(H,{searchedLanguaged:r,searchByLanguage:c}))},q=function(e){var t=e.labels.map(function(e){return n.a.createElement("div",{key:e.id,style:{backgroundColor:"#"+e.color},className:"issue-label"},e.name)});return n.a.createElement("div",{className:"issues-label-container"},t)},J=function(e){var t=e.issuesReturn.items.map(function(e){return n.a.createElement(C.a,{key:e.id},n.a.createElement("div",{className:"issues-container"},n.a.createElement("div",{className:"exclamation"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"})),n.a.createElement("div",{className:"title-description-container"},n.a.createElement("div",{className:"issues-label-wrapper"},n.a.createElement("p",{className:"issues-title"},n.a.createElement("span",{className:"issues-github-link"}),n.a.createElement("a",{href:e.html_url},e.title)),n.a.createElement(q,{labels:e.labels})),n.a.createElement("div",{className:"issues-body"},n.a.createElement("p",{className:"issues-body-text"},e.body,"...")),n.a.createElement("p",{className:"issues-description"},"#",e.number," opened on ",function(e){var t=new Date(e).toString(),a=t.slice(4,10),s=t.slice(11,15);return"".concat(a,", ").concat(s)}(e.created_at)," by ",n.a.createElement("a",{href:e.user.html_url},e.user.login))),n.a.createElement("div",{className:"comments"},n.a.createElement("a",{className:"comments-link",href:e.html_url},n.a.createElement("i",{className:"far fa-comment-alt"})," ",e.comments))))});return n.a.createElement("div",{className:"results-list"},t)},T=function(){return n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"error-handle-wrapper"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),n.a.createElement("div",{className:"no-results-found"},n.a.createElement("h5",null,"Welcome to Issues Hunt"),n.a.createElement("p",null,"Issues Hunt can help potential first-time GitHub contributors discover issues. To get started, try searching for issues labeled with ",n.a.createElement("span",{className:"issue-label help-wanted"},"help wanted")," or ",n.a.createElement("span",{className:"issue-label good-first-issue"},"good first issue")))))},G=function(){return n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"error-handle-wrapper"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),n.a.createElement("div",{className:"no-results-found"},n.a.createElement("h5",null,"No Results found"),n.a.createElement("h5",null,"Please try a different search parameter"))))},Q=function(e){var t=e.currentPage,a=e.selectedPage,s=e.selectPageNumber;return t===a?n.a.createElement("button",{"data-id":t,className:"selected-page individual-number",onClick:s},t):n.a.createElement("button",{"data-id":t,className:"individual-number",onClick:s},t)},U=function(e){var t=e.firstPage,a=e.lastPage,s=e.selectedPage,r=e.nextButton,c=e.previousButton,l=e.selectPageNumber,i=[];if(a<=5)for(var o=1;o<=a;)i.push(o),o++;console.log(i),1<=s<=5&&a>5&&(i=[t,t+1,t+2,t+3,t+4,"...",a]),console.log(i),s>5&&s<a-5&&(i=[t,"..",s-1,s,s+1,"...",a]),console.log(i),s>=a-4&&s<=a&&a>5&&(i=[t,"...",a-4,a-3,a-2,a-1,a]),console.log(i);var u=i.map(function(e){return n.a.createElement(Q,{key:e,currentPage:e,selectedPage:s,selectPageNumber:l})});return n.a.createElement("div",{className:"widget-container"},n.a.createElement("button",{className:"previous-button",onClick:c},"Previous"),u,n.a.createElement("button",{className:"next-button",onClick:r},"Next"))},z=function(){return n.a.createElement("div",{className:"footer"},"\xa9 2019 Fu-Lin Liu")},K=a(54),V=a.n(K),X=function(){return Object(s.useEffect)(function(){window.scrollTo(0,0)}),n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"spinner-container"},n.a.createElement(V.a,{type:"TailSpin",color:"#00BFFF",height:"75",width:"75"})))},Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={issues:"",issuesCount:"0",returnedAPI:"no",spinner:"hide",errorMessage:"",input:"",language:"",label:"",sortOption:"",pageLink:"",firstPage:1,lastPage:15,selectedPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showSpinner",value:function(){this.setState({returnedAPI:"pending",spinner:"show"})}},{key:"callAPI",value:function(){var e,t,a,s=this,n=this.state.input;e=""===this.state.label?"":"+label:".concat(this.state.label),t=""===this.state.language?"":"+language:".concat(this.state.language),a=""===this.state.sortOption?"":a=this.state.sortOption,h.a.get("https://api.github.com/search/issues?q=".concat(n,"+state:open").concat(e).concat(t,"&client_id=").concat(g.a.clientID,"&client_secret=").concat(g.a.clientSecret).concat(a,"&per_page=25")).then(function(e){var t,a;console.log(e.headers);var n=0;if("0"!==e.data.total_count.toLocaleString()&&void 0!==e.headers.link){console.log(e.headers.link),a=(t=e.headers.link.split(";"))[0].slice(1,t[0].length-2);var r=(n=t[1].split("=")).length-1;n=n[r].slice(0,n[r].length-1)}s.setState({issues:e.data,issuesCount:e.data.total_count.toLocaleString(),returnedAPI:"yes",spinner:"hide",lastPage:parseInt(n),pageLink:a})},function(e){console.log(e.message),s.setState({errorMessage:e.message})})}},{key:"searchInput",value:function(e){this.setState({input:e.target.value})}},{key:"searchByLabel",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({label:'"'.concat(e.target.dataset.id,'"'),selectedPage:1},function(){return t.searchNormal()})}},{key:"searchByLanguage",value:function(e){var t=this;"show"!==this.state.spinner?this.setState({language:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()}):console.log("clicked")}},{key:"searchBySort",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({sortOption:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()})}},{key:"clearSearchbar",value:function(){var e=this;this.setState({issues:"",issuesCount:"0",input:"",language:"",label:"",sortOption:""},function(){return e.ResultsListRender()})}},{key:"searchNormal",value:function(){this.showSpinner(),this.callAPI()}},{key:"search",value:function(e){var t=this;e.preventDefault(),this.showSpinner(),this.setState({issues:"",issuesCount:"0",language:"",label:"",sortOption:""},function(){return t.callAPI()})}},{key:"ResultsListRender",value:function(){var e=this;return"yes"===this.state.returnedAPI&&""!==this.state.issues&&"0"!==this.state.issuesCount?n.a.createElement("div",null,n.a.createElement(J,{issuesReturn:this.state.issues}),n.a.createElement(U,{selectPageNumber:function(t){return e.selectPageNumber(t)},nextButton:function(t){return e.nextButton(t)},previousButton:function(t){return e.previousButton(t)},firstPage:this.state.firstPage,lastPage:this.state.lastPage,selectedPage:this.state.selectedPage})):"show"===this.state.spinner&&"yes"!==this.state.returnedAPI?n.a.createElement(X,null):"0"===this.state.issuesCount&&""!==this.state.issues?n.a.createElement(G,null):(this.state.issues,n.a.createElement(T,null))}},{key:"QueryRender",value:function(){var e=this;return""!==this.state.input||""!==this.state.language||""!==this.state.label||""!==this.state.issues?n.a.createElement(B,{clearSearchbar:function(t){return e.clearSearchbar(t)}}):null}},{key:"previousButton",value:function(e){var t=this;e.preventDefault(),1!==this.state.selectedPage&&(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage-1},function(){return t.callApiFromWidget()}))}},{key:"nextButton",value:function(e){var t=this;e.preventDefault(),this.state.selectedPage<this.state.lastPage?(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage+1},function(){return t.callApiFromWidget()})):this.setState({selectedPage:this.state.selectedPage})}},{key:"callApiFromWidget",value:function(){var e=this;h.a.get("".concat(this.state.pageLink).concat(this.state.selectedPage)).then(function(t){console.log(t.data),console.log(t.headers),e.setState({issues:t.data,returnedAPI:"yes",spinner:"hide"})},function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"selectPageNumber",value:function(e){var t=this;e.preventDefault();var a=parseInt(e.target.dataset.id);isNaN(a)||(this.showSpinner(),this.setState({selectedPage:a},function(){return t.callApiFromWidget()}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement("div",{className:"container"},n.a.createElement(v,null),n.a.createElement(L,{searchInput:function(t){return e.searchInput(t)},searchIssues:function(t){return e.search(t)},input:this.state.input}),this.QueryRender(),n.a.createElement(W,{searchBySort:function(t){return e.searchBySort(t)},currentSortOption:this.state.sortOption,searchedLabel:this.state.label,searchedLanguaged:this.state.language,totalCount:this.state.issuesCount,searchByLabel:function(t){return e.searchByLabel(t)},searchByLanguage:function(t){return e.searchByLanguage(t)}}),this.ResultsListRender(),n.a.createElement(z,null)))}}]),t}(s.Component);c.a.render(n.a.createElement(Y,null),document.getElementById("root"))},31:function(e,t){e.exports={clientID:"19b336af5cfb0ed688a1",clientSecret:"4849a46d86d872e9fb533a298664a16e4ee5e9cd"}},57:function(e,t,a){e.exports=a(140)},81:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.d8fa6849.chunk.js.map