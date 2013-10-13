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
