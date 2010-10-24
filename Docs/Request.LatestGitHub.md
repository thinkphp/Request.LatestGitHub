Class: Request.LatestGitHub (#Request.LatestGitHub)
===================================================

Request.LatestGithub is a Plugin MooTools which allows you to display latest public repos or all the projects from any user GitHub as a widget by expanding the class Request.JSONP from MooTools More.

### Extends:

Request.JSONP

Request.LatestGitHub Method: constructor(#Request.LatestGitHub: constructor)
---------------------------------------------------------------------------

### Notes:

- *Request.LatestGitHub* requires MooTools Core  Request.JSONP from MooTools More dependencies.
- visit [http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/](http://thinkphp.ro/apps/js-hacks/Request.LatestGitHub/v2.0) for example usages.

### Syntax: 

var git = new Request.LatestGitHub([options]);

#### Arguments:

### options

- all options known of Request.JSONP.
- style (*String*, default 'requeststyle.css') (optional) path css filename for styled badge.
- gitstyleID (*String* - default 'gitid') (optional) the ID of link Element which is injected at the end of the body for style.

### Returns:

(*Object*) A Request.LatestGitHub instance

### Events:

All the events you know from Request.

#### success

(*Function*) Fired when the request has completed. This overrides the signature of the Request.JSONP success event and called this.parent.

#### Signature:

onSuccess(response);

##### Arguments:

1. response (*string*) the response from service YQL received through JSONP-X callback.

### Request.LatestGitHub Method: load (#Request.LatestGitHub : load)

With this public method you can load the latest badges from any user github.

#### Syntax:
     var obj = new Request.LatestGitHub([options]); 
     obj.load(username, amount); 

#### Arguments:

1. username (*String*) - the username Github you want.
2. amount (*integer*) - number of badges you want to display in your website.


## Element Method: loadLatestGitHub

Updates the content of an Element with the desired badge GitHub by username and amount.

### Syntax:

    myDiv.loadLatestGitHub(username, amount);

#### Arguments:  

1. username (*String*) - the username Github you want.
2. amount (*integer*) - number of badges you want to display in your website.

### Returns: 

(*Element*) - the target Element.

### Example: 

    #html
    <div id="mybadge"></div>
 
    #js 
    $('mybadge').loadLatestGitHub('mootools', 2);

### Proof for the both

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
              //latest 4 project from git
              git.load('thinkphp',4);

              //#example 2
              document.id('gh2').loadLatestGitHub('mootools',2);
       });

      #HTML
      <div id="gh"></div>
      <div id="gh2"></div>


