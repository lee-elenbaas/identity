identity
========

Identity Management Sub Site.

This web application should provide the folowing services:
1. Oauth provider for the other sub applications
2. A way to combine and manage authentication methods into a single place & Single Record
2.1. OAuth from another trusted OAuth provider
2.2. Automatic email validation
2.3. Automatic SMS validation (in future stage))
2.4. Password (for specific accounts alone)
3. Avatar definition
3.1. Gravatar usage
3.2. Any possible url

Structure
=========

This will be based on 2 parts:
* Static Files: (Html, JS, CSS, Images)
* CppCMS application that will provide RESTfull API for performing all actions

Data
====

Data will be stored in an SQL db using the CPPDB library, while connection string will be defined in the 
configuration file to allow replacing the backend DB. The default configuration will be for SQLight.

The necesary schema will be auto generated when app is loading, if it does not exists.

Road Map
========
1. Initially just get a password authentication working.
2. Support Email validation.
3. Support OAuth identifications.
4. Support resource related messages from one user to another
5. Support messages frm one user to another without an attached resource (chat)
6. Support client side encription for all the user messages
7. 

Technology
==========
* Server Side: [CppCMS](http://cppcms.com/)
* Markdown: [markdown-js](https://github.com/evilstreak/markdown-js) ([sample](http://www.markdownviewer.com/))
* Crypto: [Stanford Javascript Crypto Library](http://crypto.stanford.edu/sjcl/) or [OpenPGP-js](https://github.com/openpgpjs/openpgpjs) (I will need to support different structure for pub/private pair vs shared secret model of encryption)
* 

Blog
====

2013-11-06

> I took the initial steps to use requireJS and build a plugable login form that will allow placing the login form and choosing between login forms. It forced me to start on some framework tasks, like orgenizing the folders, and placing the views in separate html files.

2013-11-09

> While starting to build me login forms, and make the login form switchable, I found out that my original intention of usink KnockoutJS went out the window very fast. The reason was that i want my design to be plugable, so that authentication/login forms will be configurable, and that it will be possible to add new authentication forms from the site hosting the identity library.

> The to achieve this flexibility is by exposing a config object, that manipulating its properties will allow performing this. This way any script that require my configuration script, can perform those manipulations, and have his changes used by my code.
> Part of what the configuration contains is a complete HTML markup for the different login methods. This markup is used by my code to generate the login form and uses dynamic bindings based on data-id-XXX attributes in order to perform its job.
> To achieve the same level of flexibility using KnockoutJS i needed to provide both a way to extend my viewmodel, and a way to extend my view. Extending the view by using template binding is feirly easy, but it polluts the html namespace.

> As i write this i fegured out how wrong i was in this. And how much my life will be easier for going back to my original templating scheme, so i will attempt it now and then go back to see if i have anything else to add.

