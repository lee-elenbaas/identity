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

Status:	Resolving address of ols18.com
Status:	Connecting to 64.64.131.159:21...
Status:	Connection established, waiting for welcome message...
Response:	220---------- Welcome to Pure-FTPd [privsep] [TLS] ----------
Response:	220-You are user number 29 of 550 allowed.
Response:	220-Local time is now 10:08. Server port: 21.
Response:	220-This server supports FXP transfers
Response:	220-IPv6 connections are also welcome on this server.
Response:	220 You will be disconnected after 15 minutes of inactivity.
Command:	AUTH TLS
Response:	234 AUTH TLS OK.
Status:	Initializing TLS...
Status:	Verifying certificate...
Command:	USER lee_elenbaas
Status:	TLS/SSL connection established.
Response:	331 User lee_elenbaas OK. Password required
Command:	PASS ***********
Response:	230 OK. Current directory is /
Command:	SYST
Response:	215 UNIX Type: L8
Command:	FEAT
Response:	211-Extensions supported:
Response:	 EPRT
Response:	 IDLE
Response:	 MDTM
Response:	 SIZE
Response:	 MFMT
Response:	 REST STREAM
Response:	 MLST type*;size*;sizd*;modify*;UNIX.mode*;UNIX.uid*;UNIX.gid*;unique*;
Response:	 MLSD
Response:	 AUTH TLS
Response:	 PBSZ
Response:	 PROT
Response:	 ESTA
Response:	 PASV
Response:	 EPSV
Response:	 SPSV
Response:	 ESTP
Response:	211 End.
Status:	Server does not support non-ASCII characters.
Command:	PBSZ 0
Response:	200 PBSZ=0
Command:	PROT P
Response:	200 Data protection level set to "private"
Status:	Connected
Status:	Retrieving directory listing...
Command:	CWD /test.elenbaas.org.il
Response:	550 Can't change directory to /test.elenbaas.org.il: No such file or directory
Command:	PWD
Response:	257 "/" is your current location
Command:	TYPE I
Response:	200 TYPE is now 8-bit binary
Command:	PASV
Response:	227 Entering Passive Mode (64,64,131,159,19,114)
Command:	MLSD
Response:	150 Accepted data connection
Response:	226-Options: -a -l 
Response:	226 9 matches total
Status:	Directory listing successful
Status:	Retrieving directory listing...
Command:	CWD test.elenbaas.org.il
Response:	550 Can't change directory to test.elenbaas.org.il: No such file or directory
Error:	Failed to retrieve directory listing
Status:	Resolving address of ols18.com
Status:	Connecting to 64.64.131.159:21...
Status:	Connection established, waiting for welcome message...
Response:	220---------- Welcome to Pure-FTPd [privsep] [TLS] ----------
Response:	220-You are user number 32 of 550 allowed.
Response:	220-Local time is now 10:09. Server port: 21.
Response:	220-This server supports FXP transfers
Response:	220-IPv6 connections are also welcome on this server.
Response:	220 You will be disconnected after 15 minutes of inactivity.
Command:	AUTH TLS
Response:	234 AUTH TLS OK.
Status:	Initializing TLS...
Status:	Verifying certificate...
Command:	USER lee_elenbaas
Status:	TLS/SSL connection established.
Response:	331 User lee_elenbaas OK. Password required
Command:	PASS ***********
Response:	230 OK. Current directory is /
Status:	Server does not support non-ASCII characters.
Command:	PBSZ 0
Response:	200 PBSZ=0
Command:	PROT P
Response:	200 Data protection level set to "private"
Status:	Connected
Status:	Starting download of /test.elenbaas.org.il
Command:	CWD /
Response:	250 OK. Current directory is /
Command:	PWD
Response:	257 "/" is your current location
Error:	Failed to open "/home/lee/projects/test.elenbaas.org.il" for writing
Error:	File transfer failed
Status:	Starting download of /test.elenbaas.org.il
Error:	Failed to open "/home/lee/projects/test.elenbaas.org.il" for writing
Error:	File transfer failed
Status:	Starting download of /test.elenbaas.org.il
Error:	Failed to open "/home/lee/projects/test.elenbaas.org.il" for writing
Error:	File transfer failed
Status:	Retrieving directory listing...
Command:	CWD /test.elenbaas.org.il
Response:	550 Can't change directory to /test.elenbaas.org.il: No such file or directory
Error:	Failed to retrieve directory listing
Status:	Disconnected from server
