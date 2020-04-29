---
layout: page
title: Resume
permalink: resume
---

{% capture content %}
###### Education: Master of Science, Computer Science (1993)
* **Universities:** [Norwegian Institute of Technology](https://en.wikipedia.org/wiki/Norwegian_Institute_of_Technology)
(now [NTNU](https://en.wikipedia.org/wiki/Norwegian_University_of_Science_and_Technology)), Trondheim, Norway; thesis
written as an ERASMUS exchange student at the
[University of Marburg](https://en.wikipedia.org/wiki/University_of_Marburg), Germany
* **Specialisation:** Digital image processing, natural language processing, knowledge based systems
* **Master's thesis:** [A Software Based Approach to Real-Time Eye Tracking](https://github.com/andersblehr/Scrapbook#masters-thesis-a-software-based-approach-to-real-time-eye-tracking-1993)
{% endcapture %}
{% include infobox.html content=content %}

## Work experience

### Independent software engineer &sdot; 2016-present

#### 2019-present: Ruter AS

I work as solution architect, tech lead and full-stack developer on a team that develops and maintains an event driven
microservices architecture for processing, monitoring and visualising live and historic public transport data.

{% capture content %}
* **Languages:** Java, Kotlin, TypeScript, SQL
* **Frameworks & libraries:** Spring Boot, Kafka Streams, Reactive Streams (Reactor), React, Hibernate/JPA, Apollo
GraphQL, JetBrains Exposed, JUnit
* **Persistence:** PostgreSQL, Elasticsearch, Cassandra
* **Technologies:** Amazon AWS, Kubernetes, Docker, Linux, Kafka, REST, GraphQL
* **Tools:** Gradle, Git, GitLab CI/CD, Prometheus, Grafana, Datadog, JIRA, Confluence
* **Methods:** DevOps, Scrum, Kanban, Domain Driven Design, TDD
{% endcapture %}
{% include infobox.html content=content %}

#### 2018-2019: Telenor Digital

I worked with the Digital Distribution Technologies team (since spun off as [Millom](https://millom.com)),
which develops, maintains and operates a set of APIs that enable Google, Facebook and other service providers to
deliver services directly to subscribers across Telenor business units in Asia and Europe.

In particular, I developed an API in partnership with Google that bridges from REST via gRPC over to Telenor's
Diameter/SCTP peering network, to facilitate subscriber authentication and phone number verification over EAP-AKA
directly from the subscriber's handset.

{% capture content %}
* **Languages:** Java, Python, Groovy, HCL, Bash, C, Go
* **Frameworks & libraries:** JAX-RS, Protocol Buffers, jDiameter, JUnit
* **Technologies:** Amazon AWS, Linux, Docker/Kubernetes, Elasticsearch, gRPC, Diameter/SCTP, Nginx, OAuth2
* **Tools:** Intellij IDEA, Gradle, Git, Wireshark, Terraform, Jenkins, Loggly, New Relic, Kafka, JIRA, Confluence
* **Methods:** DevOps, Scrum, TDD
{% endcapture %}
{% include infobox.html content=content %}

#### 2017-2018: Telia Norge

{% capture content %}
###### In brief
* Full-stack developer (web, app, API, backend, DB)
* Technical architect & advisor
* Advisor to project management
* Systems operations
{% endcapture %}
{% include infobox.html content=content %}

{% capture content %}
I worked with the OCMC Engineering group, which was responsible for developing, maintaining and operating web & customer
portals, mobile apps and internal CRM systems for Telia's [OneCall](https://onecall.no) and [MyCall](https://mycall.no)
brands. Key accomplishments:

* **Chief architect, lead developer and advisor to project management** on
[MyCall Money Transfer](https://web.archive.org/web/20190613081053/https://mycall.no/money-transfer/learn-more), an
offering developed in partnership with Western Union: I <u>architected the overall solution</u> and was the <u>lead
(and mostly sole) developer</u>, covering frontend (PHP/Laravel, JavaScript, CSS/Sass), user authentication and
authorisation (OAuth2), service layer (REST, PHP/Laravel, OCI8), data modeling and stored procedures (Oracle, PL/SQL),
and integration with Western Union (OAuth2, REST).
* **Chief architect, developer, lead deployment engineer and advisor to project management** on new web portal, OneCall:
I helped <u>enforce improved coding standards</u> (PHP/Laravel), <u>built support for JWT authentication</u> in the
service and database layers (JWT, OAuth2, REST, PHP/Laravel, PL/SQL, Oracle), <u>architected and orchestrated the
integration of the new web portal with the existing customer portal</u> (vanilla PHP, Smarty), <u>set up the new
production servers</u> (RHEL 7.4, Apache 2.4, PHP 7.2, OCI8 and other dependencies) and <u>orchestrated the deployment
of web & customer portals, service layer and authentication framework</u> in time for launch.
* **Lead planner and architectural advisor** on new customer portal, OneCall: I created JIRA epics and user stories that
<u>pulled fragmented Sketch designs into a coherent whole</u>, met with key developers to create an <u>estimate for the
overall development effort</u> and used these to convince the management team to revise the proposed timeline and to
<u>build the new portal on React</u> instead of PHP + vanilla JS/jQuery, to better align with Telia's overall technology
stack.
* **Lead deployment engineer** for new production and staging environments, OneCall & MyCall: I <u>set up new production
and staging servers</u> (CentOS 7.5, Apache 2.4, PHP 7.2, OCI8 and other dependencies), deployed, verified and – if
required – <u>made compatibility updates to all production sites</u> (as well as key staging sites) before go-live.
* **Cross-brand improvement activities:** Among other things, I worked to <u>reduce functional overlap and minimise
gaps</u> in the service layers by better aligning them with
[RESTful principles](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design); to <u>improve code
quality</u> by elevating the PR approval process from a formality to a fruitful dialogue between peers, and by
incorporating existing test suites into CI builds; and to <u>reduce setup costs of doing local development</u> by
creating a set of lean, Xdebug-enabled Docker development containers.
* **Cross-brand feature development and maintenance:** Additionally, I did general <u>troubleshooting, bugfixing and
development</u> of small to medium features and offerings across web, mobile apps, service layers, and databases.
{% endcapture %}
{% include expandable.html content=content %}

{% capture content %}
* **Languages:** PHP, HTML, CSS, JavaScript, PL/SQL, SQL, TypeScript
* **Frameworks & libraries:** Laravel, Symfony, Smarty, GuzzleHttp, jQuery, Node.js, Vue.js, React, Ionic, Angular
* **Infrastructure:** Linux, Apache, PHP-FPM, OCI8, REST
* **Database:** Oracle
* **Tools:** PhpStorm, Xdebug, Webpack, Gulp, Toad for Oracle, SQL Developer, Git/BitBucket Server, Bamboo, Docker,
Vagrant, JIRA, Confluence, Vim, Xcode, iTunes Connect
* **Standards & formats:** HTTP, OAuth2, JWT, JSON, CORS
* **Methods:** DevOps, Agile, Kanban, TDD
{% endcapture %}
{% include infobox.html content=content %}

#### 2016-2017: [Norgesjakten](https://itunes.apple.com/us/app/norgesjakten/id1230397632)

{% capture content %}
###### In brief
* Chief technical architect
* Full-stack developer (app, web, API, backend, DB)
* Systems operations
{% endcapture %}
{% include infobox.html content=content %}

{% capture content %}
I worked as chief technical architect and full stack developer for a _Pokémon Go_ inspired <u>augmented reality concept
for product marketing</u>. Key accomplishments:

* **iOS\* app for augmented reality enhanced product marketing:** The app fetches campaign locations based on the user's
current location and lays them out in an interactive, MapBox based map, launching an <u>augmented reality game</u>
(implemented in JavaScript\*, bridged via the Wikitude iOS SDK) when the user gets close enough to a location,
incrementally persisting the current game status back to the backend, accumulating points and prizes.
* **Serverless NoSQL REST API:** I <u>defined the data model</u>, <u>set up separate development and production tables
on AWS DynamoDB</u>, <u>set up staged serverless AWS Lambda instances</u> and wrote a versioned Lambda handler in Python
that handles basic CRUD operations for individual data entities, and also supports <u>optional sideloading of partial or
full object graphs</u> rooted at the requested entity or entities. To tie it all together, I documented the
corresponding <u>REST endpoints in Swagger</u> and shared them with the team via Apiary, <u>set up staged, endpoint
agnostic AWS API Gateway instances and hooked them up to the corresponding AWS Lambda handlers</u>.
* **Single-page campaign management console:** I <u>wrote a management console</u> in Angular 2+, <u>hosted on AWS
S3</u>, that over the same REST API that the app uses <u>lets campaign managers create, update and delete campaigns</u>
and locations available for gameplay.
* **Utilities and libraries:** I wrote a suite of Python and Bash <u>scripts to manage the DynamoDB and Lambda handler
instances and deploy to AWS</u> over the AWS CLI, and <u>in my own time I wrote and open sourced</u> a Swift
[JSON caching library](https://github.com/andersblehr/JSONCache) that the app utilises to cache data locally (in part
based on the replication engine I built for Origon; see below), as well as a
[random test data generator](https://github.com/andersblehr/dyndb_random) for DynamoDB tables that I used to generate
dummy campaign data during development.

<small><em>* An identical Android app, as well as the shared AR world, were implemented by another team member.</em>
</small>
{% endcapture %}
{% include expandable.html content=content %}

{% capture content %}
* **Languages:** Swift, Objective-C, Python, TypeScript, HTML, CSS
* **Frameworks & libraries:** Cocoa Touch, Core Data, MapBox, [JSONCache](https://github.com/andersblehr/JSONCache),
Wikitude AR, Angular, AWS CLI
* **Infrastructure:** iOS, Android, REST, Amazon AWS (Lambda, DynamoDB, API Gateway, S3, CloudWatch)
* **Database:** AWS DynamoDB (NoSQL)
* **Tools:** Git/GitLab, Xcode, Atom, Android Studio, QuickDBD, AWS CLI, AWS Toolkit for Eclipse, emulambda, Swagger,
Apiary, iTunes Connect, TestFlight
* **Standards & formats:** HTTP, JSON, CORS
{% endcapture %}
{% include infobox.html content=content %}

### Origon &sdot; 2012-2016

{% capture content %}
###### In brief
* Original idea, all UX, design & development\*
{% endcapture %}
{% include infobox.html content=content %}

{% capture content %}
The unifying idea behind this app (iOS only) for <u>shared contact lists</u> ([full feature set](https://origon.co)) is
<u>per list data replication</u>: I maintain and give you access to my contact information, and you maintain and give me
access to yours. This way, our shared contact lists stay up to date.

To enable users to mirror each other's contact information, <u>the app and the backend together constitute a replication
framework</u> that seemlessly persists changes from indvidual users and pushes those same changes back out to linked
users.

The app is implemented in Objective-C ([code](https://github.com/andersblehr/Origon)), while the backend, implemented in
Java ([code](https://github.com/andersblehr/OrigonBackend)), runs serverlessly on Google App Engine and utilises
RESTEasy for the replication API and Objectify for object graph persistence in Google Cloud Datastore.
{% endcapture %}
{% include expandable.html content=content %}

{% capture content %}
* **Languages:** Objective-C, Java
* **Frameworks & libraries:** Cocoa Touch, Core Data, MapKit, Core Location, RESTEasy, JAX-RS, Jackson, Objectify
* **Infrastructure:** iOS, REST, Google App Engine
* **Database:** Google Cloud Datastore (NoSQL)
* **Tools:** Git, Xcode, Eclipse, Google Plugin for Eclipse, Maven, iTunes Connect, TestFlight
* **Standards & formats:** HTTP, JSON
{% endcapture %}
{% include infobox.html content=content %}

<small><em>\* I no longer maintain Origon, but it's still
[available](https://itunes.apple.com/us/app/origon-shared-contact-lists/id988915565) in the App Store, which it will
continue to be until it stops working.</em></small>

### Microsoft Development Center Norway &sdot; 2008-2012

<u>FAST was acquired by Microsoft in 2008</u>, and after a transition period under the name _FAST, a Microsoft
Subsidiary_, FAST became Microsoft Development Center Norway, an integral part of the Microsoft Office organisation.

{% capture content %}
###### In brief
* Feature owner for topology management, scaling, backup & restore for Search in SharePoint 2013
* Development lead for for the Enterprise Search core in SharePoint 2010
{% endcapture %}
{% include infobox.html content=content %}

#### 2010-2012: Senior Program Manager

{% capture content %}
For Search in SharePoint 2013, FAST's <u>next generation search</u>, which had been under development for a few years
prior to the acquisition, was <u>ported from Java to .NET and C# and adapted as a SharePoint Service Application</u>, to
replace the search options built for SharePoint 2010. I was <u>feature owner for topology management and scaling</u>
(provisioning, enablement, disablement and removal of search nodes in the distributed search architecture, and
distribution of search components among nodes) and <u>backup & restore of distributed search indices across
topologies</u>.

For this, I worked with the local development and test disciplines, and in addition <u>managed a remote team of 10-15
developers and testers</u> in Colombo, Sri Lanka.
{% endcapture %}
{% include expandable.html content=content %}

#### 2008-2010: Senior Development Lead

{% capture content %}
The Office 2010 wave was nearly halfway to completion when Microsoft acquired FAST, which effectively meant that we had
less than two years to <u>integrate organisationally</u>, identify and <u>remediate any non-compliant use of open source
software</u>, and develop and <u>ship an integrated search solution as part of SharePoint 2010</u>.

I <u>lead a team of highly skilled and fiercely independent developers</u> who had been working on the search core since
the very early days of FAST. They were apprehensive about the acquisistion and what it would mean for them and their
code, but they put their doubts aside and did their utmost to <u>make the the search core pluggable as a SharePoint
Service Application</u>.

In the period leading up to code freeze ahead of release, I was <u>part of the management group that conducted daily bug
triages</u> for the overall FAST team. I also <u>defended bugfixes in the Office-wide bug triage in Redmond</u>, among
which was a group of <u>fixes for a ship/no-ship performance issue that it had taken us weeks of profiling and analysis
to narrow down</u>.
{% endcapture %}
{% include expandable.html content=content %}

{% capture content %}
* **Languages:** C#, C++, Java, Python
* **Framework:** .NET
* **Infrastructure:** Windows Server, SharePoint, .NET, WCF/SOAP, Linux, TCP/IP, IP sockets
* **Database:** SQL Server
* **Standards & formats:** HTTP, SOAP, WSDL, XML
* **Tools:** Git, Visual Studio, PowerShell, SharePoint, Product Studio (internal bug tracker), Remote Desktop
* **Methods:** Scrum, TDD
{% endcapture %}
{% include infobox.html content=content %}

### Fast Search & Transfer (FAST) &sdot; 2005-2008

I first returned to FAST in 2004 as a hired consultant from Accenture, working on customer projects with FAST's Global
Services organisation. Then in 2005 I formally rejoined FAST.

{% capture content %}
###### In brief
* Created collaboration and deployment tools for efficient customer installations of ESP (Enterprise Search Platform)
* Established guidelines and best practices for streamlined and repeatable customer installations of ESP
* Built tailored search solutions for customers across Europe
{% endcapture %}
{% include infobox.html content=content %}

#### 2007-2008: Director, Solutions Architecture Center EMEA

{% capture content %}
In addition to <u>following up on ongoing customer projects</u> and <u>driving the work to establish guidelines and best
practices</u> for streamlined and repeatable customer installations, I <u>created <em>ESPedia</em>, a Wikipedia-like
collection of technical documents</u> ranging from configuration HOWTOs, via the aforementioned guidelines and best
practices, to the inner workings of ESP, <u>written and maintained by myself and other FAST engineers</u>, and with
read-only access for certified partners. In addition, I <u>developed an Apache Maven plugin to automate as much as
possible</u> of the manual, error prone and often repetitive work that was involved in a typical customer installation
of ESP.
{% endcapture %}
{% include expandable.html content=content %}

#### 2005-2007: Senior Solutions Architect, Global Services (GS)

{% capture content %}
ESP was a <u>scalable, distributed search offering</u> with many moving parts <u>running on anything from a single to
clusters of ten or more servers</u>. I worked with customers across Europe to <u>build tailored search solutions</u>,
including the main Yellow Pages sites in France, Austria, the Baltics, and Norway; information & analytics companies
(Reed Elsevier, ProQuest), major newspapers (The Financial Times), major retailers (Carrefour), classifieds (Loot),
academic institutions (NTNU), as well as government and municipal organisations (UK Department for Work and Pensions,
Hereford County Council).

Together with a select group of experienced engineers, I was <u>handpicked to join a newly formed <em>Solutions
Architecture Center</em></u> within Global Services, whose mandate it was to <u>establish best practices and develop
guidelines, support tools and reusable project templates</u> in order to make projects more repeatable from customer to
customer.
{% endcapture %}
{% include expandable.html content=content %}

{% capture content %}
* **Product:** FAST Enterprise Search Platform (ESP)
* **Languages:** C++, Python, Java
* **Infrastructure:** Linux, Solaris, AIX, Windows, TCP/IP, IP sockets, RAID, SAN, NAS
* **Tools:** CVS, Emacs, Vim, VNC, SSH tunneling, Confluence, JIRA, Excel
{% endcapture %}
{% include infobox.html content=content %}

### Accenture &sdot; 2001-2005

I'm working my way back in time, please come back later :)
