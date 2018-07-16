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
> * **Frameworks:** Laravel, Symfony, jQuery, Node.js, Vue.js, React, Ionic, Angular
> * **Database:** Oracle
> * **Standards:** REST, HTTP, OAuth2, JSON, JWT, CORS
> * **Tools:** Git, PhpStorm, Xdebug, Webpack, Gulp, Toad for Oracle, SQL Developer, JIRA, Confluence, Bamboo, BitBucket Server, Docker, Vagrant, Xcode, iTunes Connect
> * **Methodologies:** Agile, Kanban, TDD, BDD

I work with the OCMC Systems group, which develops, maintains and operates web & customer portals, mobile apps and internal CRM systems for Telia's [OneCall](https://onecall.no) and [MyCall](https://mycall.no) brands. My key accomplishments in approximately reverse chronological order are:

* **Chief architect, lead developer and advisor to project management** on upcoming market offering, MyCall: I architected the overall solution and have been the lead (and mostly sole) developer, covering frontend (PHP/Laravel, JavaScript, CSS/Sass), user authentication and authorisation (OAuth2), service layer (REST, PHP/Laravel, OCI8), data modeling and stored procedures (Oracle, PL/SQL), and third party vendor integration (OAuth2, REST).
* **Lead deployment engineer** for new production and staging environments, OneCall & MyCall: I set up new production and staging servers (CentOS 7.5, Apache 2.4, PHP 7.2, OCI8 and other dependencies), deployed, verified and – if required – made compatibility updates to all production sites as well as key staging sites, and put the servers live once QA had signed off.
* **Lead planner and architectural advisor** on new customer portal, OneCall: I created JIRA epics and user stories that pulled fragmented Sketch designs into a coherent whole, met with key developers to create an estimate for the overall development effort and used these to convince the leadership team to revise the proposed timeline. I argued that the new portal should be built on a modern JavaScript framework instead of PHP + vanilla JS/jQuery, and specifically on React to better align with Telia's technology stack. The development effort is now underway on React.
* **Chief architect, developer, lead deployment engineer and advisor to project management** on new web portal, OneCall: I helped enforce improved coding standards (PHP/Laravel), built support for JWT authentication in the service and database layers (JWT, OAuth2, REST, PHP/Laravel, PL/SQL, Oracle), architected and orchestrated the integration of the new web portal with the existing customer portal (PHP/Smarty), set up the new production servers (RHEL 7.4, Apache 2.4, PHP 7.2, OCI8 and other dependencies) and orchestrated the deployment of web & customer portals, service layer and authentication framework in time for launch.
* **Cross-brand improvement activities:** Among other things, I have worked to <u>reduce functional overlap and minimise gaps</u> in the service layers by better aligning them with [RESTful principles](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design); to <u>improve code quality</u> by elevating the PR approval process from a formality to a fruitful dialogue between peers and incorporate existing test suites into CI builds; and to <u>reduce the setup cost of doing local development</u> by creating a set of lean, Xdebug-enabled Docker development containers.
* **Cross-brand feature development and maintenance:** Additionally, I have done general troubleshooting, bugfixing and development of small to medium features and offerings across web, apps, service layers, and databases.

#### 2016-2017: [Norgesjakten](https://itunes.apple.com/us/app/norgesjakten/id1230397632)

> ###### Full-stack developer, chief technical architect
> * **Infrastructure:** iOS, Android, Amazon AWS (Lambda, DynamoDB, API Gateway, S3, CloudWatch)
> * **Languages:** Swift, Python, Java, JavaScript, Bash, HTML, CSS, TypeScript
> * **Frameworks:** Cocoa Touch, Core Data, MapBox, [JSONCache](https://github.com/andersblehr/JSONCache), Wikitude AR, AWS, Angular
> * **Database:** AWS DynamoDB
> * **Standards:** REST, HTTP, JSON, CORS
> * **Tools:** Git, Xcode, Atom, Android Studio, AWS CLI, AWS Toolkit for Eclipse, emulambda, Apiary, Swagger, QuickDBD, GitLab, iTunes Connect, TestFlight

I only took part in the initial MVP phase of this concept for gamification in marketing, but the serverless architecture and most of the code I wrote made it through to the final product.

* **Serverless NoSQL powered REST API on Amazon AWS:** I defined the data model, created schema scripts and set up separate development and production tables on AWS's NoSQL DynamoDB, set up staged serverless AWS Lambda instances and wrote a versioned Lambda handler in Python that based on the resource path of an incoming request branches out to separate Python modules that handle basic CRUD operations for individual data entities, and also supports sideloading of partial or full object graphs rooted at the requested entity or entities via an optional `include` query parameter. Finally, I defined and documented the required REST endpoints in Swagger and Apiary, set up staged, endpoint agnostic AWS API Gateway instances and hooked them up to the corresponding AWS Lambda handlers.
* **Augmented reality iOS app:** 
* **Management console:** 

API:
- Definerte REST-API for kommunikasjon mot backend fra iOS- og Android-klienter.
- Definerte JSON-formatet på datautvekslingen mot backend.
- API dokumentert i Swagger/OpenAPI på swagger.io og apiary.io.

Backend:
- Satte opp generisk REST-endpoint på Amazon AWS API Gateway.
- Knyttet REST-endpoint opp mot serverless backend på Amazon AWS Lambda.
- Implementerte API-endpoints som Python-moduler under AWS Lambda.
- Satte opp og modellerte NoSQL-database på Amazon AWS DynamoDB.
- Satte opp versjonerte DEV-, BETA- og LIVE-miljøer på tvers av DynamoDB, Lambda og API Gateway.
- Skrev Python-script som genererer tilfeldige testdata ved behov.
- Laget Python-scripts for å administrere databasen.
- Foresto skjemakonvertering og datamigrering mellom versjoner.

iOS-klient:
- Ble bedt om å bistå på iOS-siden og utviklet caching-lag for caching av data fra backend i Core Data på klient.
- Utvidet caching-laget til å isolere og abstrahere bort alt av backend- og Core Data-tilgang fra resten av klientkoden.
- Overtok etter hvert hele ansvaret for iOS-prototypen da det ble klart at iOS-utvikleren ikke hadde de rette kvalifikasjonene.
- Reimplementerte iOS-prototypen fra bunnen av for å sikre kvalitet og vedlikeholdbarhet, med MapKit/MapBox, Core Data, Core Location, Core Motion og Augmented Reality via Wikitude.
- Reimplementerte JSON/Core Data-grensesnittet fra bunnen av da det ble klart at Sync-biblioteket som ble brukt til dette formålet, har en bug som gjør at det ikke fungerer med String-primærnøkler.
- Skilte ut JSON/Core Data-grensesnittet som iOS-framework, la det ut som open source på GitHub (https://github.com/andersblehr/JSONCache) og reintegrerte det inn i iOS-klientkoden.


### [Origon](https://origon.co) (2012-2016)

> ###### Original idea, designer, full-stack developer
> * **Infrastructure:** macOS, iOS, Google Cloud
> * **Languages:** Objective-C, Java
> * **Frameworks:** Cocoa Touch, Core Data, RESTeasy, Objectify
> * **Database:** Google Cloud Datastore
> * **Standards:** REST, HTTP, JSON
> * **Tools:** Git, Xcode, Eclipse, iTunes Connect, TestFlight

adsasd