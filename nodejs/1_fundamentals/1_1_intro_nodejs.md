1. what is Node.js ? Why do we need it ?
-> NodeJS is a Js runtime environment. 

What is a runtime environment ?
-> A runtime environment is the software & configuration that 
executes a program and provides the services it needs while
running.

-> Built on Google's Open source V8 engine.
-> No matter if you write js or js framework like react or angular
code; that's all Javascript that gets executed inside a browser
by the browser.
-> In this case the browser is then the Javascript runtime. As,
here browser provides all the tools & libraries to execute and run
Javascript code.

-> For ex: When we use js in browser, browser also provides us some 
APIs like fetch API or getElementById function, querySelector Function,
even console.log() function.

-> Before 2009, js was only possible to run inside a browser, there was no way to run
a JS program outide of the browser environment.
And, in every browser there is a JS Engine, which is responsible for executing the
JS code.
JS Engine is a tool which is required by browsers to execute and run JS code.
Every browser has their own JS engine.

-> JS engine's of different browsers:
    1. Firefox -> SpiderMonkey
    2. Microsoft Edge -> Chakra
    3. Google Chrome -> V8 Engine
    -> So this V8 engine is one which is responsible for executing the JS program in the 
    chrome (google) browser.

-> It was not possible to run js engine outside of the browser, but in 2009 a programmer named as
Ryan Dahl, that it would be great to build js outside the browser. 
He took Google's V8 engine which is the fastest JS engine present at that time and embedded 
it inside a C++ program, and he called a node.js.

-> so that is why we say Node.js is a JS runtime environment which is built on Google's V8 JS engine.

-> Node.js also has certain APIs which provides en environment in for the JS code in node.js. These 
APIs are different from the APIs we have in the browser.
These APIs are as follows: 
1. fs
2. https
3. readline
4. Console.log()

-> So in the browser, the browser provides us some APIs and functions.
in the same way, node.js provides us some module and we can use this node.js programs 
in our modules in our node.js program.

-> in short, node.js is a program which used a V8 engine and some additional APIs that gives us 
capability to run Js outside the browser.


2. advantage of using node.js over any other frameworks  ?
now that we have Js outside of browser, in a standalone environment which is node.js we can do
so many things with js which were completely impossible before:

i. accessing the file system
ii. better network capabilities are now possible.
iii. All these factors together gives us the perfect condition to use node.js as a server side language.
iv. Meaning now, we can finally use js on the servr side of the development in order to build fast, 
highly scalable network application for powering the backend of a website or web application.


3. Why node.js is a good fit for backend development and where should we use node.js and where not ?
 
THE REASON WHY NODE.JS APPLICATIONS ARE SO FAST AN SO SCALABLE IS BECAUSE:
  -> NODE.JS is single threaded, event-driven & non-blocking I/O model.
  -> Which makes node.js very lightweight and efficient.
  -> it is perfect for building fast, scalable data-intensive applications.
  -> for e.g: we can build an API with database behind it using node.js.
  -> build an API using node.js and use mongoDB in the backend as a database.
  ->using the API which we will create, will fetch/insert/delete the data from mongoDB database. 

  -> not just only APIs, we can build all sorts of applications with node.js
  -> For example, we can build streaming applications like youtube or netflix, real-time chat apps, 
  or even server side web applications where the entire content is simply generated right on the server.

  -> WHICH TYPE OF APPS WE SHOULD NOT BUILT WITH NODE.JS:
  1. apps needing heavy server-side processing like heavy Image manipulation or video conversion
  or file compression. (LEARN THAT WHEN WE DIVE DEEPER INTO HOW NODE.JS WORKS)
  
  2. node.js was not bui;t for abpve purposes, but their are solutions for dealing with them, for these heavy 
  server side processing applications we should use python or php.
  
  3. netflix, google, paypal, uber etc they have already started using node.js, these adaptions prove that
  node.js is stable enough to use in production.

  4. the main advantage of using, with node.js since we are using js as a programming language,
  we can use the same technology across the entire stack.
  That means we can use JS for both frontend and backend development, and this is a lot easier 
  for you and your team, so there is no need to forth switching between different languages.
  It will make the whole entire process faster and efficient, another great reason for using node.js is
  that there is a huge library of open-source packages available for everyone for FREE.

  These packages are available in npm (node package manager)

  ** What a event-driven and non-blocking architecture is ?
   
