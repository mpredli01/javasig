Meteor.startup(function () {
    if(Meetings.find().count() === 0) {
        Meetings.insert({
            month: 'January',
            year: 2001,
            title: 'No Meeting (Java Users Group Being Formed)',
            description: 'Formation of ACGNJ Java Users Group'
            });

        Meetings.insert({
            month: 'February',
            year: 2001,
            title: 'NervousText Applet',
            description: 'A source code review of the NervousText applet that is included with the Java Developement Kit (JDK).'
            });

        Meetings.insert({
            month: 'March',
            year: 2001,
            title: 'Introduction to Object-Oriented Programming',
            description: 'An introduction to the object-oriented programming (OOP) paradigm.'
            });

        Meetings.insert({
            month: 'April',
            year: 2001,
            title: 'No Meeting (Shared Meeting Night with PC Symposium)',
            description: 'TCF preparation and shared night with PC Symposium.'
            });

        Meetings.insert({
            month: 'May',
            year: 2001,
            title: 'No Meeting (Shared Meeting Night with PC Symposium)',
            description: 'TCF preparation and shared night with PC Symposium.'
            });

        Meetings.insert({
            month: 'June',
            year: 2001,
            title: 'Dynamic Web Page Generation Using Java and Databases',
            description: 'A source code review of an application that dynamically builds an HTML page from data contained within an Access database.'
            });

        Meetings.insert({
            month: 'July',
            year: 2001,
            title: 'A Comparison of Java and C++',
            description: 'A source code review of a wind chill application developed in Java and C++ to demonstrate the differences between the two languages.'
            });

        Meetings.insert({
            month: 'August',
            year: 2001,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2001,
            title: 'No Meeting (World Trade Center Attacks)',
            description: 'Meeting cancelled due to WTC attacks.'
            });

        Meetings.insert({
            month: 'October',
            year: 2001,
            title: 'Clock Applet',
            description: 'A source code review of the Clock applet that is included with the Java Development Kit (JDK).'
            });

        Meetings.insert({
            month: 'November',
            year: 2001,
            title: 'Technical Overview of JUnit: A Simple Framework to Write Repeatable Tests',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2001,
            title: 'Developing Dynamic Content Web Applications',
            description: 'Presented by Nicki Newby'
            });

        Meetings.insert({
            month: 'January',
            year: 2002,
            title: 'Sorting in Java',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2002,
            title: 'Sunrise/Sunset Calculator',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2002,
            title: 'Displaying Database Records with JTable - Part 1',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2002,
            title: 'No Meeting',
            description: 'Scheduling conflict.'
            });

        Meetings.insert({
            month: 'May',
            year: 2002,
            title: 'Displaying Database Records with JTable - Part 2',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2002,
            title: 'Technical Overview of SilverStream\'s Web Services and Related Technologies',
            description: 'A technical overview of the core web services technologies in detail, including SOAP, WSDL, and UDDI - and how to leverage industry standards such as J2EE and XML.'
            });

        Meetings.insert({
            month: 'July',
            year: 2002,
            title: 'Generating Documents with DocumentBuilder',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2002,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2002,
            title: 'A Practical Use of the Facade Design Pattern',
            description: 'A source code review of a an application utilizing the facade design pattern.'
            });

        Meetings.insert({
            month: 'October',
            year: 2002,
            title: 'A Practical Use of the Observer Design Pattern',
            description: 'A source code review of a an application utilizing the observer design pattern.'
            });

        Meetings.insert({
            month: 'November',
            year: 2002,
            title: 'A Practical Use of the Factory Design Pattern',
            description: 'A source code review of an application utilizing the Composite Pattern.'
            });

        Meetings.insert({
            month: 'December',
            year: 2002,
            title: 'Technical Overview of Ant: A Java-Based Build Tool',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2003,
            title: 'Building Java Objects With Digester',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2003,
            title: 'Developing Dynamic Web Applications with EJBs and WebLogic',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2003,
            title: 'Developing Dynamic Web Applications with JavaBeans and JavaServer Pages',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2003,
            title: 'Technical Overview of Salmon LLC\'s SOFIA Framework',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2003,
            title: 'A Simple Chat Application',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2003,
            title: 'Binding Java Objects to XML Data with JAXB',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2003,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2003,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2003,
            title: 'Generating EJBs with XDoclet',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2003,
            title: 'Technical Overview of Struts',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2003,
            title: 'The Use of Java in Embedded Systems',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2003,
            title: 'Technical Overview of Hibernate',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2004,
            title: 'Technical Overview of Cayenne',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2004,
            title: 'Top 15 Best Ant Practices/Introduction to Tapestry',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2004,
            title: 'Technical Overview of J#.NET',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2004,
            title: 'A First Look at J2SE 1.5',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2004,
            title: 'Accelerating Web Application Development with JBoost',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2004,
            title: 'Using Web Services with the J2EE 1.4 Platform - Part 1',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2004,
            title: 'Using Web Services with the J2EE 1.4 Platform - Part 2',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2004,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'September',
            year: 2004,
            title: 'Technical Overview of JAMES',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2004,
            title: 'Dynamic Sorting with Java',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2004,
            title: 'Technical Overview of PMD',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2004,
            title: 'Technical Overview of Spring',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2005,
            title: 'Enhancing Tasks with AntFlow',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2005,
            title: 'Developing Applications with Tapestry, Hibernate, and Spring',
            description: 'Paul Hart'
            });

        Meetings.insert({
            month: 'March',
            year: 2005,
            title: 'Technical Overview of ArgoUML',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2005,
            title: 'Using Java Messaging in Real-Time Trading Systems',
            description: 'Yakov Fain'
            });

        Meetings.insert({
            month: 'May',
            year: 2005,
            title: 'Rapid GUI Development with Thinlet',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2005,
            title: 'JBuilder 2005 Presentation/Demonstration',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2005,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2005,
            title: 'Special Project',
            description: 'null'
            });

        Meetings.insert({
            month: 'September',
            year: 2005,
            title: 'Technical Overview of JBoss Remoting',
            description: 'John Mazzitelli & Rich Friedman'
            });

        Meetings.insert({
            month: 'October',
            year: 2005,
            title: 'J2SE 5.0: Using Annotations',
            description: 'Yakov Fain'
            });

        Meetings.insert({
            month: 'November',
            year: 2005,
            title: 'Decorating Your Java Objects',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2005,
            title: 'Technical Overview of xProcess',
            description: 'Chris Page & David Jindra'
            });

        Meetings.insert({
            month: 'January',
            year: 2006,
            title: 'Parsing XML Documents with XMLtp',
            description: 'A custom XML parser/processor written by Thomas Weidenfeller.'
            });

        Meetings.insert({
            month: 'February',
            year: 2006,
            title: 'Enhancing Applications Development with the Spring Framework',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'March',
            year: 2006,
            title: 'Using Java for Developing Ajax-Enabled Web Applications',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2006,
            title: 'Mapping a POJO Domain Model to an SOA Using Intermediation and Dynamic Composition',
            description: 'A webinar presented by Matthew Adams of Xcalia SA'
            });

        Meetings.insert({
            month: 'May',
            year: 2006,
            title: 'Fast and Easy Web Development Using Ruby on Rails',
            description: 'Presented by Barry Burd'
            });

        Meetings.insert({
            month: 'June',
            year: 2006,
            title: 'RSS, Atom, APP, and All That: a Course for Developers',
            description: 'Presented by Elliotte Rusty Harold'
            });

        Meetings.insert({
            month: 'July',
            year: 2006,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2006,
            title: 'Special Project',
            description: 'null'
            });

        Meetings.insert({
            month: 'September',
            year: 2006,
            title: 'Technical Overview of Apache Geronimo',
            description: 'Presented by Aaron Mulder'
            });

        Meetings.insert({
            month: 'October',
            year: 2006,
            title: 'Using Dependency Injection in Your Java Applications with the Spring Framework',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2006,
            title: 'Using Aspect-Oriented Programming in Your Java Applications',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2006,
            title: 'Implementing Design Patterns with AspectJ',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2007,
            title: 'Technical Overview of Spring MVC',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2007,
            title: 'Developing Amazon Web Services with Java',
            description: 'Presented by Jinesh Varia'
            });

        Meetings.insert({
            month: 'March',
            year: 2007,
            title: 'Developing Web Applications using Spring MVC',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2007,
            title: 'Technical Overview of Java Code Quality Tools',
            description: 'Presented by Paul Furbacher'
            });

        Meetings.insert({
            month: 'May',
            year: 2007,
            title: 'Using Design Patterns in Java Applications Development',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2007,
            title: 'Getting Started with Adobe Flex 2',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2007,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2007,
            title: 'Special Project',
            description: 'null'
            });

        Meetings.insert({
            month: 'September',
            year: 2007,
            title: 'Getting Groovy with Java',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2007,
            title: 'Exploring Ajax Frameworks for Eclipse:  RAP &amp; ATF',
            description: 'presented by Barry Burd'
            });

        Meetings.insert({
            month: 'November',
            year: 2007,
            title: 'Technical Overview of Maven 2',
            description: 'presented by Paul Shemansky'
            });

        Meetings.insert({
            month: 'December',
            year: 2007,
            title: 'Technical Overview of OSGi',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2008,
            title: 'Exploring Ajax Frameworks for Eclipse:  RAP &amp; ATF (Reprise)',
            description: 'presented by Barry Burd'
            });

        Meetings.insert({
            month: 'February',
            year: 2008,
            title: 'Technical Overview of iScript',
            description: 'presented by Manny Goyenechea'
            });

        Meetings.insert({
            month: 'March',
            year: 2008,
            title: 'Crushing the Config Chaos of Application Servers',
            description: 'Presented by Phurnace Software'
            });

        Meetings.insert({
            month: 'April',
            year: 2008,
            title: 'Hands-On Java Workshop',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2008,
            title: 'Database Access with JDBC, Spring, and Groovy',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2008,
            title: 'Using Java to Interact with the OS',
            description: 'Presented by Barry Burd'
            });

        Meetings.insert({
            month: 'July',
            year: 2008,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2008,
            title: 'Special Project',
            description: 'null'
            });

        Meetings.insert({
            month: 'September',
            year: 2008,
            title: 'Rapid Web Application Development with Grails',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2008,
            title: 'Technical Overview of the Google Web Toolkit (GWT)',
            description: 'Presented by Paul Furbacher'
            });

        Meetings.insert({
            month: 'November',
            year: 2008,
            title: 'Technical Overview of iScript 2.0',
            description: 'Presented by Manny Goyenechea'
            });

        Meetings.insert({
            month: 'December',
            year: 2008,
            title: 'Using the JavaMail API for Developing a Mail Merge Application',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2009,
            title: 'Open Forum',
            description: 'An open forum to discuss and review Java-related technologies.'
            });

        Meetings.insert({
            month: 'February',
            year: 2009,
            title: 'The Two Crows: Haskell and Jaskell',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'March',
            year: 2009,
            title: 'Getting Started with the Stripes Framework',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2009,
            title: 'Technical Overview of Hudson',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'May',
            year: 2009,
            title: 'Eliminating Cross Cutting Concerns with Aspect-Oriented Programming',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2009,
            title: 'No Meeting',
            description: 'Scheduling conflict.'
            });

        Meetings.insert({
            month: 'July',
            year: 2009,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2009,
            title: 'Special Project',
            description: 'Extend the functionality of the java.util.Scanner class by adding new methods nextChar() and hasNextChar().'
            });

        Meetings.insert({
            month: 'September',
            year: 2009,
            title: 'Technical Overview of the Java Message System (JMS)',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2009,
            title: 'Open Forum',
            description: 'Facilitated by Paul Furbacher.  An open forum to discuss and review Java-related technologies.'
            });

        Meetings.insert({
            month: 'November',
            year: 2009,
            title: 'Technical Overview of the Twitter API',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2009,
            title: 'The New King of JEE - Cold Fusion - Who Knew?',
            description: 'Presented by Bill Brutzman.'
            });

        Meetings.insert({
            month: 'January',
            year: 2010,
            title: 'Technical Overview of Java FX',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'February',
            year: 2010,
            title: 'No Meeting',
            description: 'Inclement weather and illness.'
            });

        Meetings.insert({
            month: 'March',
            year: 2010,
            title: 'Introduction to the Facebook API',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2010,
            title: 'Java Concurrent Animated',
            description: 'Presented by Victor Grazi.'
            });

        Meetings.insert({
            month: 'May',
            year: 2010,
            title: 'Developing Applications for the BlackBerry using Java and Eclipse',
            description: 'Presented by Manny Goyenechea.'
            });

        Meetings.insert({
            month: 'June',
            year: 2010,
            title: 'Tinkering with Android - Sharing Some Experiences with Android Development',
            description: 'Presented by Bob Lutz.'
            });

        Meetings.insert({
            month: 'July',
            year: 2010,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2010,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2010,
            title: 'Technical Overview of Rackspace Cloud Hosting',
            description: 'Presented by Bob Lutz.'
            });

        Meetings.insert({
            month: 'October',
            year: 2010,
            title: 'Getting Started with Clojure',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2010,
            title: 'Application Development with Clojure',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2010,
            title: 'Rapid Web Application Development with Grails',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2011,
            title: 'Spring Roo - Developer Productivity Tool for Spring Developers',
            description: 'Presented by Ken Rimple of Chariot Solutions.'
            });

        Meetings.insert({
            month: 'February',
            year: 2011,
            title: 'Android 101',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'March',
            year: 2011,
            title: 'Open Forum',
            description: 'An open forum to discuss and review Java-related technologies.'
            });

        Meetings.insert({
            month: 'April',
            year: 2011,
            title: 'An Introduction to Interactive Programming for the Internet of Things',
            description: 'Presented by Bob Lutz.'
            });

        Meetings.insert({
            month: 'May',
            year: 2011,
            title: 'A Spring Potpourri',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'June',
            year: 2011,
            title: 'Latest Work with iScript and iBuild',
            description: 'Presented by Manny Goyenechea.'
            });

        Meetings.insert({
            month: 'July',
            year: 2011,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2011,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2011,
            title: 'Open Forum',
            description: 'An open forum to discuss and review Java-related technologies.'
            });

        Meetings.insert({
            month: 'October',
            year: 2011,
            title: 'Technical Overview of Gradle',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2011,
            title: 'Exploring Java 7',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2011,
            title: 'Exploring Java 7 (reprise)',
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2012,
            title: 'Technical Overview of the Play! Framework',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'February',
            year: 2012,
            title: 'Technical Overview of iText',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2012,
            title: 'Technical Overview of iText (continued)',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2012,
            title: 'Technical Overview of Closures for the Java Programming Language',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'May',
            year: 2012,
            title: 'Technical Overview of the Twitter API: An Update',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2012,
            title: 'Technical Overview of Spring Data for MongoDB',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2012,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2012,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2012,
            title: 'Technical Overview of Dart',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2012,
            title: 'The \'Politics\' of Java',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2012,
            title: 'Technical Overview of JavaFX 2 - Part 1',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'December',
            year: 2012,
            title: 'Technical Overview of JavaFX 2 - Part 2',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'January',
            year: 2013,
            title: 'Technical Overview of Scala',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2013,
            title: 'Technical Overview of Meteor',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2013,
            title: 'Technical Overview of Spring Data JPA',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'April',
            year: 2013,
            title: 'Technical Overview of Griffon',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2013,
            title: 'Anatomy of a Web App',
            description: 'Presented by Bill Brutzman.'
            });

        Meetings.insert({
            month: 'June',
            year: 2013,
            title: 'Technical Overview of AppDynamics',
            description: 'Presented by Chris Carr and Myk Shaforostov from AppDynamics.'
            });

        Meetings.insert({
            month: 'July',
            year: 2013,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2013,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2013,
            title: 'Technical Overview of Google Guava',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2013,
            title: 'Technical Overview of Java 8 Collections',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'November',
            year: 2013,
            title: 'Technical Overview of Credit Card Coding with Stripe',
            description: 'Presented by Bill Brutzman.'
            });

        Meetings.insert({
            month: 'December',
            year: 2013,
            title: 'Technical Overview of Utilities, Maven &amp; Github',
            description: 'Meeting canceled due to inclement weather.'
            });

        Meetings.insert({
            month: 'January',
            year: 2014,
            title: 'Technical Overview of Utilities, Maven &amp; Github',
            description: 'null'
            });

        Meetings.insert({
            month: 'February',
            year: 2014,
            title: 'Technical Overview of Utilities, Maven &amp; Gradle',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2014,
            title: 'Designing and Implementing RESTful Web Services with Spring',
            description: 'Presented by Paul Furbacher.'
            });

        Meetings.insert({
            month: 'April',
            year: 2014,
            title: 'Technical Overview of Spring Data for MongoDB',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2014,
            title: 'Technical Overview of Vert.x',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2014,
            title: 'Open Forum',
            description: 'Open forum to include Java web frameworks and the Java Unsafe class.'
            });

        Meetings.insert({
            month: 'July',
            year: 2014,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2014,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2014,
            title: 'Technical Overview of Spring Shell',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2014,
            title: 'A Review of the JavaOne Conference',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2014,
            title: 'Technical Overview of Meteor 1.0',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2014,
            title: 'Open Forum',
            description: 'Open forum to include a demonstration of Project Tango.'
            });

        Meetings.insert({
            month: 'January',
            year: 2015,
            title: 'Technical Overview of Gradle',
            description: 'Meeting rescheduled to January 27, but then canceled due to inclement weather.'
            });

        Meetings.insert({
            month: 'February',
            year: 2015,
            title: 'Technical Overview of Gradle',
            description: 'null'
            });

        Meetings.insert({
            month: 'March',
            year: 2015,
            title: 'Technical Overview of Rust (part 1)',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2015,
            title: 'Technical Overview of Rust (part 2)',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2015,
            title: 'Technical Overview of Coding Ground',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2015,
            title: 'Want es.next now? Traceur your way back to ES5 and feel the Harmony',
            description: 'Presented by Ken Rimple.'
            });

        Meetings.insert({
            month: 'July',
            year: 2015,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2015,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2015,
            title: 'Technical Overview of Google Polymer',
            description: 'Presented by Bill Brutzman.'
            });

        Meetings.insert({
            month: 'October',
            year: 2015,
            title: 'Technical Overview of Amazon Echo',
            description: 'Presented by Barry Burd.'
            });

        Meetings.insert({
            month: 'November',
            year: 2015,
            title: 'Building Web Apps with Meteor and AngularJS',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2015,
            title: "Parsing JSON with Java",
            description: 'null'
            });

        Meetings.insert({
            month: 'January',
            year: 2016,
            title: 'Firebase 101',
            description: 'Presented by Paulmichael Blasucci'
            });

        Meetings.insert({
            month: 'February',
            year: 2016,
            title: 'Why Rust?',
            description: 'Presented by Paulmichael Blasucci'
            });

        Meetings.insert({
            month: 'March',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'April',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'May',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'June',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'July',
            year: 2015,
            title: 'Yearly Review &amp; Planning Meeting',
            description: 'null'
            });

        Meetings.insert({
            month: 'August',
            year: 2015,
            title: 'No Meeting (Summer Break)',
            description: 'Summer break.'
            });

        Meetings.insert({
            month: 'September',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'October',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'November',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });

        Meetings.insert({
            month: 'December',
            year: 2016,
            title: 'To Be Determined',
            description: 'null'
            });
        }
    });
