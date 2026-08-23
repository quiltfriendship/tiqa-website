(function () {
"use strict";
var items=window.news2021Data||[];
var list=document.getElementById("news2021-list");
if(!list||!Array.isArray(items)||!items.length){return;}

items.forEach(function(item,index){
var article=document.createElement("article");
article.className="news2021-item";

var header=document.createElement("div");
header.className="news2021-item-header";

var meta=document.createElement("div");
meta.className="news2021-item-meta";

var date=document.createElement("time");
date.textContent=item.date||"";
date.setAttribute("datetime",(item.date||"").replace(/\//g,"-"));

var category=document.createElement("span");
category.textContent=item.category||"";

meta.appendChild(date);
meta.appendChild(category);

var title=document.createElement("h3");
title.textContent=item.title||"";

var summary=document.createElement("p");
summary.className="news2021-item-summary";
summary.textContent=item.summary||"";

header.appendChild(meta);
header.appendChild(title);
header.appendChild(summary);

var body=document.createElement("div");
body.className="news2021-item-body";
body.id="news2021-body-"+index;
body.hidden=true;

if(item.image){
var imageWrap=document.createElement("div");
imageWrap.className="news2021-item-image";
var image=document.createElement("img");
image.src=item.image;
image.alt=item.title||"";
image.loading="lazy";
imageWrap.appendChild(image);
body.appendChild(imageWrap);
}

if(Array.isArray(item.content)){
item.content.forEach(function(text){
var p=document.createElement("p");
p.textContent=text;
body.appendChild(p);
});
}

var button=document.createElement("button");
button.type="button";
button.className="news2021-toggle";
button.setAttribute("aria-expanded","false");
button.setAttribute("aria-controls",body.id);
button.textContent="閱讀更多 ＋";

button.addEventListener("click",function(){
var expanded=button.getAttribute("aria-expanded")==="true";
button.setAttribute("aria-expanded",String(!expanded));
body.hidden=expanded;
button.textContent=expanded?"閱讀更多 ＋":"收合內容 −";
});

article.appendChild(header);
article.appendChild(body);
article.appendChild(button);
list.appendChild(article);
});
})();