/*
---

description: Request.LatestGithub is a Plugin MooTools which allows you to display latest public repos or all the projects from any user GitHub as a widget by expanding the class Request.JSONP from MooTools More.

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.3: '*'

provides:
  - Request.LatestGitHub
...
*/

Request.LatestGitHub=new Class({Extends:Request.JSONP,options:{url:"http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fgithub.com%2F{username}%22%20and%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'first'%5D%2Ful%5B%40class%3D'repositories'%5D%2Fli%5B%40class%3D'public'%5D%22%20limit%20{amount}%0A",data:{format:"xml",diagnostics:"true",},style:"requeststyle.css",gitstyleID:"gitid"},load:function(user,amount){this.user=user||"thinkphp";this.amount=(!!amount&&!(amount<=0)&&($type(amount)=="number"))?amount:2;this.options.url=this.options.url.substitute({username:this.user,amount:this.amount});this.send()},updateResponse:function(resp){var ul='<ul class="repositories">';for(var i=0;i<resp.length;i++){ul+=resp[i].replace(/ href="/g,' href="http://github.com').replace(/ src="/g,' src="http://github.com')}ul+="</ul>";return ul},success:function(o,script){this.response=this.updateResponse(o[0].results);this.parent(this.response,script);this.addStyle()},addStyle:function(){if(!document.id(this.options.gitstyleID)){new Element("link",{rel:"stylesheet",type:"text/css",href:this.options.style,id:this.options.gitstyleID}).inject($(document.body))}}});Element.implement({loadLatestGitHub:function(user,amount){var target=this;new Request.LatestGitHub({onSuccess:function(badge){$(target).set("html",badge)},onRequest:function(){$(target).set("text","Loading...")}}).load(user,amount);return this}});