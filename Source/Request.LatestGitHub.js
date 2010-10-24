/*
---

description: Request.LatestGithub is a Plugin MooTools which allows you to display latest public repos or all the projects from any user GitHub as a widget expanding the class Request and using PHP, YQL and JSONP-X.

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

Request.LatestGitHub = new Class({

       Extends: Request,

       options: {
          url: 'requestgit.php',
          method: 'get',
          style: 'requeststyle.css',
          gitstyleID: 'gitid' 
       }, 
 
       load: function(user, amount) {
          this.user = user || 'thinkphp';
          this.amount = (!!amount && !(amount<=0) && ($type(amount)== 'number')) ? amount : 2;
          this.send({
               data:{
                    user: this.user,
                    amount: this.amount
                    }
          }); 
       },
       updateResponse: function(resp) {
           var ul = '<ul class="repositories">';
               ul += resp;
               ul += '</ul>';
          return ul; 
       },
       success: function(resp) {
          this.response = this.updateResponse(resp);
          this.fireEvent('success',[this.response]);
          this.addStyle(); 
       },
       addStyle: function() {
          if(!document.id(this.options.gitstyleID)) {  
              new Element('link',{rel: 'stylesheet',
                                  type:'text/css',
                                  href: this.options.style, 
                                  id: this.options.gitstyleID
              }).inject($(document.body));
          }
       }
});

Element.implement({

       loadLatestGitHub: function(user, amount) {
              var target = this; 
              new Request.LatestGitHub({ 
                           onSuccess: function(badge) {
                                $(target).set('html', badge);
                           },
                           onRequest: function() {
                                $(target).set('text', 'Loading...');
                           }
              }).load(user, amount);

          return this; 
       } 
});