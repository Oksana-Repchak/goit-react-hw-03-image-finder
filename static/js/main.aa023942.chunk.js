(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2YOmC",Modal:"Modal_Modal__3FY84",ImageGalleryItemImage:"Modal_ImageGalleryItemImage__25H5Q"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1R5Bq",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2kqUO"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3924r"}},17:function(e,t,a){e.exports={Button:"Button_Button__2WJG7"}},19:function(e,t,a){e.exports={Spiner:"Loader_Spiner__2croH"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(7),s=a.n(o),i=(a(25),a(14)),l=a(3),u=a(4),m=a(6),h=a(5),g=a(9),p=a(12),b=a.n(p),j=a(15),d="https://pixabay.com/api",f="18966103-245a37f9e820c36a1856c1db9";function O(){return(O=Object(j.a)(b.a.mark((function e(t){var a,r,n,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.imageName,r=t.currentPage,n="?q=".concat(a,"&page=").concat(r,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=2,e.next=5,fetch("".concat(d,"/").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o.hits);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",e.t0("Some error in fetch"));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}var y={fetchImagesAPI:function(e){return O.apply(this,arguments)}},v=(a(27),a(8)),I=a.n(v),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):Object(g.b)("Please enter search query")},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:I.a.Searchbar,children:Object(r.jsxs)("form",{className:I.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:I.a.SearchFormButton,children:Object(r.jsx)("span",{className:I.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{value:this.state.imageName,onChange:this.handleChange,className:I.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),_=a(13),x=a.n(_),w=a(10),N=a.n(w),k=document.querySelector("#modal-root"),C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(r.jsx)("div",{className:N.a.Overlay,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:N.a.Modal,children:Object(r.jsx)("img",{src:t,alt:a,className:N.a.ImageGalleryItemImage})})}),k)}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.largeImageUrl,c=this.state.showModal;return Object(r.jsxs)("li",{className:x.a.ImageGalleryItem,children:[Object(r.jsx)("img",{onClick:this.toggleModal,src:t,alt:a,className:x.a.ImageGalleryItemImage}),c&&Object(r.jsx)(C,{onClose:this.toggleModal,src:n,alt:a})]})}}]),a}(n.Component),G=a(16),B=a.n(G);function L(e){var t=e.images;return Object(r.jsx)("ul",{className:B.a.ImageGallery,children:t.map((function(e){return Object(r.jsx)(F,{src:e.webformatURL,largeImageUrl:e.largeImageURL,alt:e.tags},e.id)}))})}var M=a(17),P=a.n(M),U=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("button",{onClick:this.props.fetchImages,className:P.a.Button,children:"Load more"})}}]),a}(n.Component),A=a(18),D=a.n(A),q=a(19),E=a.n(q),Q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)(D.a,{className:E.a.Spiner,type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:"",images:[],currentPage:1,isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({imageName:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a={imageName:t.imageName,currentPage:t.currentPage};e.setState({isLoading:!0}),y.fetchImagesAPI(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.imageName!==this.state.imageName&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,c=t.length>0&&!a;return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),Object(r.jsx)(S,{onSubmit:this.onChangeQuery}),Object(r.jsx)(L,{images:this.state.images}),a&&Object(r.jsx)(Q,{}),c&&Object(r.jsx)(U,{fetchImages:this.fetchImages}),Object(r.jsx)(g.a,{autoClose:3e3})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__14HQ3",SearchForm:"Searchbar_SearchForm__1lzYL",SearchFormButton:"Searchbar_SearchFormButton__3lcOZ",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__QTbtG",SearchFormInput:"Searchbar_SearchFormInput__20bjZ"}}},[[49,1,2]]]);
//# sourceMappingURL=main.aa023942.chunk.js.map