---
layout: page
title: Resume
permalink: resume
---

> ###### Education: Master of Science, Computer Science (1993)
> * **Universities:** [Norwegian Institute of Technology](https://en.wikipedia.org/wiki/Norwegian_Institute_of_Technology) (now [NTNU](https://en.wikipedia.org/wiki/Norwegian_University_of_Science_and_Technology)), Trondheim, Norway; thesis written as an ERASMUS exchange student at the [University of Marburg](https://en.wikipedia.org/wiki/University_of_Marburg), Marburg an der Lahn, Germany
> * **Specialisation:** Digital image processing, natural language processing, knowledge based systems
> * **Master's thesis:** [A Software Based Approach to Real-Time Eye Tracking](https://github.com/andersblehr/Scrapbook#masters-thesis-a-software-based-approach-to-real-time-eye-tracking-1993)

## Work experience

### Independent developer (2016-present)

#### 2017-present: [Telia Norge](https://en.wikipedia.org/wiki/Telia_Norge)

> ###### Full-stack developer, technical architect, advisor
> * **Infrastructure:** Linux, Apache, PHP-FPM, OCI8
> * **Languages:** PHP, HTML, CSS, JavaScript, PL/SQL, SQL, TypeScript
> * **Frameworks & libraries:** Laravel, Symfony, jQuery, Node.js, Vue.js, React, Ionic, Angular
> * **Database:** Oracle
> * **Tools:** Git, PhpStorm, Xdebug, Webpack, Gulp, Toad for Oracle, SQL Developer, JIRA, Confluence, Bamboo, BitBucket Server, Docker, Vagrant, Xcode, iTunes Connect
> * **Standards:** REST, HTTP, OAuth2, JSON, JWT, CORS
> * **Methodologies:** Agile, Kanban, TDD, BDD

I work with the OCMC Systems group, which develops, maintains and operates web & customer portals, mobile apps and internal CRM systems for Telia's [OneCall](https://onecall.no) and [MyCall](https://mycall.no) brands. My key accomplishments in approximately reverse chronological order are:

* **Chief architect, lead developer and advisor to project management** on upcoming market offering, MyCall: I architected the overall solution and have been the lead (and mostly sole) developer, covering frontend (PHP/Laravel, JavaScript, CSS/Sass), user authentication and authorisation (OAuth2), service layer (REST, PHP/Laravel, OCI8), data modeling and stored procedures (Oracle, PL/SQL), and third party vendor integration (OAuth2, REST).
* **Lead deployment engineer** for new production and staging environments, OneCall & MyCall: I set up new production and staging servers (CentOS 7.5, Apache 2.4, PHP 7.2, OCI8 and other dependencies), deployed, verified and – if required – made compatibility updates to all production sites as well as key staging sites, and put the servers live once QA had signed off.
* **Lead planner and architectural advisor** on new customer portal, OneCall: I created JIRA epics and user stories that pulled fragmented Sketch designs into a coherent whole, met with key developers to create an estimate for the overall development effort and used these to convince the leadership team to revise the proposed timeline. I argued that the new portal should be built on a modern JavaScript framework instead of PHP + vanilla JS/jQuery, and specifically on React to better align with Telia's technology stack. The development effort is now underway on React.
* **Chief architect, developer, lead deployment engineer and advisor to project management** on new web portal, OneCall: I helped enforce improved coding standards (PHP/Laravel), built support for JWT authentication in the service and database layers (JWT, OAuth2, REST, PHP/Laravel, PL/SQL, Oracle), architected and orchestrated the integration of the new web portal with the existing customer portal (vanilla PHP, Smarty), set up the new production servers (RHEL 7.4, Apache 2.4, PHP 7.2, OCI8 and other dependencies) and orchestrated the deployment of web & customer portals, service layer and authentication framework in time for launch.
* **Cross-brand improvement activities:** Among other things, I have worked to <u>reduce functional overlap and minimise gaps</u> in the service layers by better aligning them with [RESTful principles](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design); to <u>improve code quality</u> by elevating the PR approval process from a formality to a fruitful dialogue between peers, and by incorporating existing test suites into CI builds; and to <u>reduce setup costs of doing local development</u> by creating a set of lean, Xdebug-enabled Docker development containers.
* **Cross-brand feature development and maintenance:** Additionally, I have done general troubleshooting, bugfixing and development of small to medium features and offerings across web, apps, service layers, and databases.

#### 2016-2017: [Norgesjakten](https://itunes.apple.com/us/app/norgesjakten/id1230397632)

> ###### Full-stack developer, chief technical architect
> * **Infrastructure:** iOS, Android, Amazon AWS (Lambda, DynamoDB, API Gateway, S3, CloudWatch)
> * **Languages:** Swift, JavaScript, Python, Java, Bash, HTML, CSS, TypeScript
> * **Frameworks & libraries:** Cocoa Touch, Core Data, MapBox, [JSONCache](https://github.com/andersblehr/JSONCache), Wikitude AR, python-geohash, Angular
> * **Database:** AWS DynamoDB
> * **Tools:** Git, Xcode, Atom, Android Studio, QuickDBD, AWS CLI, AWS Toolkit for Eclipse, emulambda, Swagger, Apiary, GitLab, iTunes Connect, TestFlight
> * **Standards:** REST, HTTP, JSON, CORS

I only took part in the initial MVP phase of this concept for gamification in marketing, but the serverless architecture and most of the code I wrote made it through to the final product. The Android app and the shared Wikitude AR world was written by another team member; everything else was done by me.

* **Augmented reality iOS app:** I wrote the app from the ground up, fetching data over the backend REST API based on the user's current location, caching it in Core Data on device and laying out nearby 'game points' in an interactive, MapBox based map, launching an augmented reality game (implemented in JavaScript, bridged via the Wikitude iOS SDK) when the user gets close enough to a game point while incrementally persisting the current game status back to the backend, accumulating points and prizes.
* **Serverless NoSQL powered REST API:** I defined the data model, created schema scripts and set up separate development and production tables on AWS DynamoDB (NoSQL), set up staged serverless AWS Lambda instances and wrote a versioned Lambda handler in Python that based on the resource path of an incoming request branches out to separate Python modules that handle basic CRUD operations for individual data entities, and also supports sideloading of partial or full object graphs rooted at the requested entity or entities via an optional `include` query parameter. To tie it all together, I documented the corresponding REST endpoints in Swagger and shared them with the team via Apiary, set up staged, endpoint agnostic AWS API Gateway instances and hooked them up to the corresponding AWS Lambda handlers.
* **Single-page campaign management console:** I wrote a management console in Angular 2+, hosted on AWS S3, that over the same REST API that the app uses lets campaign managers create, update and delete campaigns and locations available for gameplay.
* **Utilities and libraries:** I wrote a suite of Python and Bash scripts to manage the DynamoDB and Lambda handler instances and deploy to AWS over the AWS CLI, and in my own time I wrote and open sourced a Swift [JSON caching library](https://github.com/andersblehr/JSONCache) that the app utilises to cache data locally (in part based on the replication engine I built for Origon; see below), and also a [random test data generator](https://github.com/andersblehr/dyndb_random) for DynamoDB tables that I used to generate dummy campaign data during development.

### [Origon](https://origon.co) (2012-2016)

> ###### Original idea, design, all development
> * **Infrastructure:** iOS, Google App Engine
> * **Languages:** Objective-C, Java
> * **Frameworks & libraries:** Cocoa Touch, Core Data, RESTEasy, Objectify
> * **Database:** Google Cloud Datastore
> * **Standards:** REST, HTTP, JSON
> * **Tools:** Git, Xcode, Eclipse, Google Plugin for Eclipse, Maven, iTunes Connect, TestFlight

This was the app idea that I 'bet the house on' when I quit Microsoft in 2012. From Origon's [web page](https://origon.co):

> _With Origon's shared contact lists, everybody keeps their own contact information up to date. Whenever one of your contacts updates their address, email or phone number, you will have their updated information at your fingertips the next time you open Origon. This way, the contact lists always stay up to date._

To enable users to mirror each other's contact information, the app (iOS only) accesses a set of REST endpoints exposed by the backend. Together, the app and the backend constitute a replication framework that seemlessly persists changes from indvidual users and pushes those same changes back out to linked users. The app is implemented in Objective-C, while the backend, implemented in Java, runs serverlessly on Google App Engine (GAE) and utilises RESTEasy for the API and Objectify for interfacing with the Google Cloud Datastore.

