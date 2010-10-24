Request.LatestGitHub
====================

Request.LatestGithub is a Plugin MooTools which allows you to display latest public repos or all the projects from any user GitHub as a widget by expanding the class Request.JSONP from MooTools More.

![Screenshot](http://farm5.static.flickr.com/4151/5103040626_4bc61b102f.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
        <script type="text/javascript" src="mootools-core.js"></script>
        <script type="text/javascript" src="JSONP.js"></script>
        <script type="text/javascript" src="Request.LatestGitHub.js"></script>

In your JS.

       #JS
       window.addEvent('domready',function(){ 
              //#example 1
              var git = new Request.GitHub({ 
                           onSuccess: function(badge) {
                                document.id('gh').set('html', badge);
                           },
                           onRequest: function() {
                                document.id('gh').set('text', 'Loading...');
                           }
              });
              //call latest 3 projects from jquery github
              git.load('jquery',3);

              //#example 2
              //call latest 3 projects from mootools github
              document.id('gh2').loadLatestGitHub('mootools',3);
       });


In your HTML.

       #HTML
       <div id="gh"></div>
       <div id="gh2"></div>

### Notes:

You can view in action:

- [http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v1.0/](http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v1.0/)
- [http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v2.0/](http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v2.0/)
- [http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v2.0/form.html](http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v2.0/form.html)