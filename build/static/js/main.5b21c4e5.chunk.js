(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(18),o=a.n(r),c=a(4),l=a.n(c),i=a(5),d=a(6),u=a(7),h=a(9),m=a(8),f=a(10),v=a(1),D=a(2),k=a.n(D),g="https://api.magicthegathering.io/v1",w={getAll:function(){return k.a.get(g+"/cards?contains=imageUrl&pageSize=5&random=true").then(function(e){return e.data})},getColor:function(e){return k.a.get(g+"/cards?contains=imageUrl&pageSize=5&random=true&colors="+e).then(function(e){return e.data})},getById:function(e){return k.a.get(g+"/cards/"+e).then(function(e){return e.data})},getDraftBoosters:function(){var e=Object(i.a)(l.a.mark(function e(t){var a,s,n,r,o,c,i,d;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=k.a.get(g+"/sets/"+t+"/booster"),s=k.a.get(g+"/sets/"+t+"/booster"),n=k.a.get(g+"/sets/"+t+"/booster"),r=k.a.get(g+"/sets/"+t+"/booster"),o=k.a.get(g+"/sets/"+t+"/booster"),c=k.a.get(g+"/sets/"+t+"/booster"),i=k.a.get(g+"/sets/"+t+"/booster"),d=k.a.get(g+"/sets/"+t+"/booster"),e.next=10,Promise.all([a,s,n,r,o,c,i,d]).then(function(e){return e});case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getSets:function(){return k.a.get(g+"/sets?name=alpha|beta").then(function(e){return e.data})}},b={getAll:function(){return k.a.get("/api/decks").then(function(e){return e.data})},getById:function(e){return k.a.get("/api/decks/"+e).then(function(e){return e.data})},create:function(e,t){return k.a.post("/api/decks",e,t).then(function(e){return e.data})}},S=function(e){var t=e.card,a=e.backToCardList;return n.a.createElement("div",{className:"showCard"},n.a.createElement("div",null,n.a.createElement("button",{onClick:a,className:"btn buttonDefaultPurpleText"},"Back")),n.a.createElement("img",{src:t.imageUrl,alt:"card_image"}),n.a.createElement("div",{className:"row showCardRow"},n.a.createElement("div",{className:"col-sm-4 title-cell showCardLeftColumn"},"Name:"),n.a.createElement("div",{className:"col-sm-8 data-cell showCardRightColumn"},t.name)),n.a.createElement("div",{className:"row showCardRow"},n.a.createElement("div",{className:"col-sm-4 title-cell showCardLeftColumn"},"Set:"),n.a.createElement("div",{className:"col-sm-8 data-cell showCardRightColumn"},t.setName)),n.a.createElement("div",{className:"row showCardRow"},n.a.createElement("div",{className:"col-sm-4 title-cell showCardLeftColumn"},"Rarity:"),n.a.createElement("div",{className:"col-sm-8 data-cell showCardRightColumn"},t.rarity)),n.a.createElement("div",{className:"row cardText"},n.a.createElement("div",{className:"col-sm-12 title-cell"},t.text)))},p=function(e){var t=e.cards,a=e.showCardForMobile,s=e.showImageOrCard,r=e.mouseOver,o=e.mouseOut,c=e.color,l=e.showLinkForId;return n.a.createElement("div",{className:"cardList"},n.a.createElement("ul",{className:"cardListUl list-group"},t.map(function(e,t){return e.id===l?n.a.createElement("li",{key:t,onClick:s(e.id,e.imageUrl),onMouseOver:r(e.imageUrl),onMouseOut:o,className:"cardListLi list-group-item",style:{color:c}},e.name,n.a.createElement("br",null),n.a.createElement("button",{onClick:a(e.id),className:"btn showLinkForIdButton"},"Show")):n.a.createElement("li",{key:t,onClick:s(e.id,e.imageUrl),onMouseOver:r(e.imageUrl),onMouseOut:o,className:"cardListLi list-group-item",style:{color:c}},e.name)})))},C=function(e){var t=e.getCardsWithColor,a=e.playDraft,s=e.showDraftDeck,r=e.sets,o=e.draftDeck,c=e.savedDecksAmount,l=e.showSavedDecks;return n.a.createElement("div",{className:"navBarElements"},n.a.createElement("div",{className:"upperBtnRow"},n.a.createElement("button",{onClick:t("white"),className:"btn btn-default buttonWhite"},"White"),n.a.createElement("button",{onClick:t("blue"),className:"btn btn-default buttonBlue"},"Blue"),n.a.createElement("button",{onClick:t("black"),className:"btn btn-default buttonBlack"},"Black")),n.a.createElement("div",{className:"lowerBtnRow"},n.a.createElement("button",{onClick:t("red"),className:"btn btn-default buttonRed"},"Red"),n.a.createElement("button",{onClick:t("green"),className:"btn btn-default buttonGreen"},"Green")),n.a.createElement("div",{className:"draftSelectList"},n.a.createElement("select",{id:"draft-select",className:"form-control",onChange:a},n.a.createElement("option",{defaultValue:!0,hidden:!0},"Draft"),r.map(function(e,t){return n.a.createElement("option",{value:e.code,key:t},e.name)}))),n.a.createElement("button",{onClick:l,className:"btn buttonShowSavedDecks"},"Saved Decks (",c,")"),o.length>0?n.a.createElement("button",{onClick:s,className:"btn buttonShowDraftedDeck"},"Drafted Deck (",o.length,")"):null)},I=function(e){var t=e.boosters,a=e.addCardToDeck,s=e.boosterIndex,r=e.showDraftingInfo,o=e.toggleDraftingInfo;return n.a.createElement("div",{className:"draftCardList"},n.a.createElement("div",{className:"draftingInfo"},n.a.createElement("button",{onClick:o,className:"btn btn-default buttonDraftingInfo"},"Info"),r?n.a.createElement("div",{className:"draftingInfoText"},n.a.createElement("p",null,"You and 7 computer players each have 3 boosters, each containing 15 cards."),n.a.createElement("p",null,"Everybody opens the first booster and picks one card (computers by random)."),n.a.createElement("p",null,"After picking a card, you pass your booster with 14 cards and get a 14 card booster from other player and so on..."),n.a.createElement("p",null,"When all 15 cards are picked, each player opens a new booster and repeat the previous process."),n.a.createElement("p",null,"After drafting all 3 boosters you should have a 45 card deck which you can save to the database.")):null),t[s].map(function(e,t){return n.a.createElement("img",{src:e.imageUrl,alt:"imageUrl",key:t,className:"draftCardImage cardImage",onClick:a(e,s,t)})}))},O=function(e){var t=e.draftDeck,a=e.cardsLeft,s=e.getBackToDrafting,r=e.saveDeck,o=e.deckIsSaved,c=e.toggleShowSaveDeckForm,l=e.showSavedDeckForm,i=e.changeSavedDeckName,d=e.savedDeckName,u=e.showDeckHasBeenSavedText;return t.sort(function(e,t){var a="";if(e.colors){for(var s=0;s<e.colors.length;s++)a+=e.colors[s];a+=e.cmc}var n="";if(t.colors){for(var r=0;r<t.colors.length;r++)n+=t.colors[r];n+=t.cmc}return a<n?-1:a>n?1:0}),n.a.createElement("div",{className:"draftDeck"},n.a.createElement("div",{className:"savedDeckNameDiv"},u?n.a.createElement("p",{className:"goldenParagraph"},"Deck ",d," has been saved!"):null),a?n.a.createElement("div",null,n.a.createElement("button",{onClick:s,className:"btn btn-default buttonDefaultPurpleText"},"Back to drafting")):n.a.createElement("div",{className:"saveDeckDiv"},o?null:n.a.createElement("button",{onClick:c,className:"btn btn-default buttonDefaultPurpleText"},"Save Deck"),l?n.a.createElement("div",{className:"saveDeckForm"},n.a.createElement("input",{onChange:i,placeholder:"Deck Name",type:"text",id:"changeSavedDeckNameInput",autoFocus:!0}),n.a.createElement("button",{onClick:r(t,d),className:"btn saveDeckButton"},"Save")):null),t.map(function(e,t){return n.a.createElement("img",{src:e.imageUrl,alt:"imageUrl",key:t,className:"draftDeckCardImage cardImage"})}))},E=function(e){var t=e.savedDeck;return n.a.createElement("div",{className:"draftDeck"},n.a.createElement("h1",{className:"savedDeckName"},t.name),t.cards.map(function(e,t){return n.a.createElement("img",{src:e.imageUrl,alt:e.name,key:t,className:"savedDeckCardImage cardImage"})}))},N=function(e){var t=e.savedDecks,a=e.showSavedDeckById;return t.sort(function(e,t){return e.created_at>t.created_at?-1:e.created_at<t.created_at?1:0}),n.a.createElement("div",{className:"savedDecksList"},n.a.createElement("ul",{className:"savedDecksListUl list-group"},t.map(function(e){return n.a.createElement("li",{onClick:a(e.id),key:e.id,className:"savedDecksListLi list-group-item"},e.name)})))},y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).modifyLoadingText=a.modifyLoadingText.bind(Object(v.a)(Object(v.a)(a))),a.state={loadingText:"Loading",amountOfDots:0,dotsIncreasing:!0,loadingTextVisible:!0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.modifyLoadingText,200)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"modifyLoadingText",value:function(){var e="Loading";this.state.dotsIncreasing?this.setState({amountOfDots:this.state.amountOfDots+1}):this.setState({amountOfDots:this.state.amountOfDots-1}),this.state.dotsIncreasing&&3===this.state.amountOfDots&&this.setState({dotsIncreasing:!1}),this.state.dotsIncreasing||0!==this.state.amountOfDots||this.setState({dotsIncreasing:!0});for(var t=0;t<this.state.amountOfDots;t++)e+=".";this.setState({loadingText:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"loading"},n.a.createElement("div",{className:"loadingContent"},n.a.createElement("p",null,this.state.loadingText)))}}]),t}(s.Component),L=function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).getCardsWithColor=function(e){return function(t){t.preventDefault(),a.setState({loading:!0}),w.getColor(e).then(function(t){a.setState({cards:t.cards,showCard:null,mouseOver:!1,showDraftDeck:!1,showSavedDecks:!1,showSavedDeckForm:!1,hoverImageUrl:"",cardListColor:e,showLinkForId:"",savedDeckToShow:null,loading:!1})})}},a.playDraft=function(){var e=Object(i.a)(l.a.mark(function e(t){var s,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=document.getElementById("draft-select").value,a.setState({loading:!0,deckIsSaved:!1,boosters:[],draftSet:s}),document.getElementById("draft-select").value="Draft",n=[],e.next=7,w.getDraftBoosters(s).then(function(e){e.map(function(e){return n.push(e.data.cards)})});case 7:a.setState({cards:[],draftDeck:[],showCard:null,mouseOver:!1,showDraftDeck:!1,showSavedDecks:!1,showSavedDeckForm:!1,showDraftingInfo:!1,cardsLeft:!0,hoverImageUrl:"",cardListColor:"",showLinkForId:"",boosterIndex:0,draftRound:1,savedDeckToShow:null,boosters:n,loading:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.shuffleNewBoosters=function(){var e=Object(i.a)(l.a.mark(function e(t){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({boosters:[],showDraftingInfo:!1,cardsLeft:!0}),s=[],e.next=4,w.getDraftBoosters(a.state.draftSet).then(function(e){e.map(function(e){return s.push(e.data.cards)})});case 4:a.setState({cards:[],showCard:null,mouseOver:!1,hoverImageUrl:"",cardListColor:"",showLinkForId:"",boosterIndex:0,draftRound:t,loading:!1,boosters:s});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.showImageOrCard=function(e,t){return function(s){s.preventDefault(),a.state.touchsupport?a.state.hoverImageUrl===t?a.setState({mouseOver:!1,showDraftDeck:!1,showCard:null,showLinkForId:""}):a.setState({mouseOver:!0,showDraftDeck:!1,showSavedDecks:!1,hoverImageUrl:t,showCard:null,showLinkForId:e}):a.showCard(e)}},a.showCard=function(e){a.setState({loading:!0,hoverImageUrl:"",mouseOver:!1,showDraftDeck:!1,showSavedDecks:!1,showLinkForId:""}),w.getById(e).then(function(e){a.setState({showCard:e.card,loading:!1})})},a.showCardForMobile=function(e){return function(t){t.preventDefault(),a.setState({loading:!0,mouseOver:!1,showDraftDeck:!1,showSavedDecks:!1,hoverImageUrl:"",showLinkForId:""}),w.getById(e).then(function(e){a.setState({showCard:e.card,loading:!1})})}},a.mouseOver=function(e){return function(t){t.preventDefault(),a.state.touchsupport||a.setState({mouseOver:!0,hoverImageUrl:e})}},a.mouseOut=function(e){e.preventDefault(),a.state.touchsupport||a.setState({mouseOver:!1,hoverImageUrl:""})},a.addCardToDeck=function(e,t,s){return function(n){n.preventDefault();var r=a.state.boosterIndex;7===r?r=0:r+=1;var o=a.state.boosters;o.map(function(e,a){if(t===a)return e=e.filter(function(e,t){return t!==s}),o[a]=e;var n=Math.floor(Math.random()*Math.floor(e.length));return e=e.filter(function(e,t){return t!==n}),o[a]=e}),a.setState({draftDeck:a.state.draftDeck.concat(e),boosters:o,boosterIndex:r,showDraftingInfo:!1}),0===a.state.boosters[0].length&&a.state.draftRound<3?(a.setState({boosterIndex:0,cardsLeft:!1,loading:!0}),a.shuffleNewBoosters(a.state.draftRound+1)):0===a.state.boosters[0].length&&3===a.state.draftRound&&a.showDraftDeckWithoutEvent()}},a.showDraftDeck=function(e){e.preventDefault(),a.setState({cards:[],showCard:null,mouseOver:!1,showDraftDeck:!0,showSavedDeckForm:!1,hoverImageUrl:"",showLinkForId:"",cardListColor:"",showSavedDecks:!1,savedDeckToShow:null})},a.showDraftDeckWithoutEvent=function(){a.setState({cards:[],showCard:null,mouseOver:!1,showDraftDeck:!0,showSavedDeckForm:!1,hoverImageUrl:"",showLinkForId:"",cardListColor:"",showSavedDecks:!1,cardsLeft:!1,loading:!1})},a.getBackToDrafting=function(e){e.preventDefault(),a.setState({showDraftDeck:!1,showSavedDeckForm:!1})},a.toggleDraftingInfo=function(e){e.preventDefault(),a.state.showDraftingInfo?a.setState({showDraftingInfo:!1}):a.setState({showDraftingInfo:!0})},a.showSavedDecks=function(e){e.preventDefault(),a.setState({showSavedDecks:!0,cards:[],mouseOver:!1,showDraftDeck:!1,showSavedDeckForm:!1,loading:!1,showDraftingInfo:!1,showCard:null,hoverImageUrl:"",cardListColor:"",showLinkForId:"",savedDeckToShow:null})},a.showSavedDeckById=function(e){return function(t){t.preventDefault(),b.getById(e).then(function(e){a.setState({showSavedDecks:!1,showSavedDeckForm:!1,savedDeckToShow:e})})}},a.saveDeck=function(e,t){return function(){var s=Object(i.a)(l.a.mark(function s(n){var r;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(n.preventDefault(),t){s.next=5;break}alert("Name your deck!"),s.next=12;break;case 5:return a.setState({loading:!0}),r={name:t,cards:e},s.next=9,b.create(r).then(function(e){a.setState({deckIsSaved:!0,savedDeckName:e.name,showSavedDeckForm:!1,showDeckHasBeenSavedText:!0,loading:!1})});case 9:return setTimeout(function(){a.setState({savedDeckName:null,showDeckHasBeenSavedText:!1})},5e3),s.next=12,b.getAll().then(function(e){a.setState({savedDecks:e,savedDecksAmount:e.length})});case 12:case"end":return s.stop()}},s)}));return function(e){return s.apply(this,arguments)}}()},a.toggleShowSaveDeckForm=function(e){e.preventDefault(),!1===a.state.showSavedDeckForm?a.setState({showSavedDeckForm:!0}):a.setState({showSavedDeckForm:!1})},a.changeSavedDeckName=function(e){e.preventDefault(),a.setState({savedDeckName:e.target.value})},a.backToCardList=function(e){e.preventDefault(),a.setState({showCard:null})},a.getCardsWithColor=a.getCardsWithColor.bind(Object(v.a)(Object(v.a)(a))),a.playDraft=a.playDraft.bind(Object(v.a)(Object(v.a)(a))),a.showImageOrCard=a.showImageOrCard.bind(Object(v.a)(Object(v.a)(a))),a.showCard=a.showCard.bind(Object(v.a)(Object(v.a)(a))),a.showCardForMobile=a.showCardForMobile.bind(Object(v.a)(Object(v.a)(a))),a.mouseOver=a.mouseOver.bind(Object(v.a)(Object(v.a)(a))),a.mouseOut=a.mouseOut.bind(Object(v.a)(Object(v.a)(a))),a.addCardToDeck=a.addCardToDeck.bind(Object(v.a)(Object(v.a)(a))),a.shuffleNewBoosters=a.shuffleNewBoosters.bind(Object(v.a)(Object(v.a)(a))),a.showDraftDeck=a.showDraftDeck.bind(Object(v.a)(Object(v.a)(a))),a.showDraftDeckWithoutEvent=a.showDraftDeckWithoutEvent.bind(Object(v.a)(Object(v.a)(a))),a.toggleDraftingInfo=a.toggleDraftingInfo.bind(Object(v.a)(Object(v.a)(a))),a.getBackToDrafting=a.getBackToDrafting.bind(Object(v.a)(Object(v.a)(a))),a.showSavedDecks=a.showSavedDecks.bind(Object(v.a)(Object(v.a)(a))),a.showSavedDeckById=a.showSavedDeckById.bind(Object(v.a)(Object(v.a)(a))),a.saveDeck=a.saveDeck.bind(Object(v.a)(Object(v.a)(a))),a.toggleShowSaveDeckForm=a.toggleShowSaveDeckForm.bind(Object(v.a)(Object(v.a)(a))),a.changeSavedDeckName=a.changeSavedDeckName.bind(Object(v.a)(Object(v.a)(a))),a.backToCardList=a.backToCardList.bind(Object(v.a)(Object(v.a)(a)));var s="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return a.state={cards:[],boosters:[],draftDeck:[],savedDecks:[],sets:[],mouseOver:!1,showDraftDeck:!1,showSavedDecks:!1,loading:!1,showDraftingInfo:!1,showCard:null,showSavedDeckForm:!1,showDeckHasBeenSavedText:!1,savedDeckToShow:null,savedDeckName:null,deckIsSaved:!1,cardsLeft:!1,draftSet:"",hoverImageUrl:"",cardListColor:"",showLinkForId:"",boosterIndex:0,draftRound:0,savedDecksAmount:0,touchsupport:s},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,w.getSets().then(function(e){var a=e.sets.sort(function(e,t){return e.releaseDate>t.releaseDate?-1:e.releaseDate<t.releaseDate?1:0}).reduce(function(e,t){return t.booster?e.concat(t):e},[]);a.sort(function(e,t){return e.releaseDate<t.releaseDate}),t.setState({sets:a})});case 3:return e.next=5,b.getAll().then(function(e){t.setState({savedDecks:e,savedDecksAmount:e.length,loading:!1})});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(C,{getCardsWithColor:this.getCardsWithColor,playDraft:this.playDraft,sets:this.state.sets,draftDeck:this.state.draftDeck,showDraftDeck:this.showDraftDeck,savedDecksAmount:this.state.savedDecks.length,showSavedDecks:this.showSavedDecks}),null!==this.state.savedDeckToShow?n.a.createElement(E,{savedDeck:this.state.savedDeckToShow}):null,this.state.showSavedDecks?n.a.createElement(N,{savedDecks:this.state.savedDecks,showSavedDeckById:this.showSavedDeckById}):null,this.state.loading?n.a.createElement(y,null):null,this.state.showDraftDeck?n.a.createElement(O,{draftDeck:this.state.draftDeck,cardsLeft:this.state.cardsLeft,getBackToDrafting:this.getBackToDrafting,saveDeck:this.saveDeck,deckIsSaved:this.state.deckIsSaved,toggleShowSaveDeckForm:this.toggleShowSaveDeckForm,showSavedDeckForm:this.state.showSavedDeckForm,changeSavedDeckName:this.changeSavedDeckName,savedDeckName:this.state.savedDeckName,showDeckHasBeenSavedText:this.state.showDeckHasBeenSavedText}):null,this.state.cards.length>0&&!this.state.showCard&&!this.state.loading?n.a.createElement(p,{cards:this.state.cards,showCardForMobile:this.showCardForMobile,showImageOrCard:this.showImageOrCard,mouseOver:this.mouseOver,mouseOut:this.mouseOut,color:this.state.cardListColor,showLinkForId:this.state.showLinkForId}):null,!(this.state.boosters.length>0)||this.state.showDraftDeck||this.state.showSavedDecks||this.state.savedDeckToShow||0!==this.state.cards.length||this.state.showCard?null:n.a.createElement(I,{boosters:this.state.boosters,addCardToDeck:this.addCardToDeck,boosterIndex:this.state.boosterIndex,showDraftingInfo:this.state.showDraftingInfo,toggleDraftingInfo:this.toggleDraftingInfo}),null!==this.state.showCard?n.a.createElement(S,{card:this.state.showCard,backToCardList:this.backToCardList}):null,this.state.mouseOver?n.a.createElement("div",{className:"hoverImage"},n.a.createElement("img",{src:this.state.hoverImageUrl,alt:"imageUrl",className:"cardImage"})):null)}}]),t}(s.Component);a(44);o.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5b21c4e5.chunk.js.map