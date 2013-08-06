WiserTogether Backbone Test
===========================

This is a skeleton app based on backbone.js designed for you to demonstrate your
skills in writing Javascript-based features and templates. The application is
structured so that it will deliver a static set of information about a health
condition. Follow the instructions below to complete the test and submit your 
work.

Setting Up
==========
If you have cloned this repository, then you are pretty much good to go. Open the
index.html file in your favorite development browser and you should see a screen
that says "Test Application" and "Welcome to the WiserTogether test Backbone
Application". If you see this, then everything is working properly as it stands.

The Test
========
This is a simple test. A model has been created in the apps/test/models.js file
called ``TestApp.Models.Condition``. This model has ``fetch`` and ``save`` methods
on it. When fetching, it will deliver the content outlined in the data structure.
The data structure is a JSON object describing treatments for the "Aneurysm" 
condition (a health condition having to do with the heart).

Your goal is to accomplish the following:

1. Convert the existing namespaced Javascript to [javascript modules](https://github.com/amdjs/amdjs-api/wiki/AMD)
   using the async script loader of your choice. We have included [require.js](http://requirejs.org/docs/start.html) 
   and [the requirejs handlebars plugin](https://github.com/SlexAxton/require-handlebars-plugin) 
   in the repository for your convenience, but feel free to use an alternate 
   async loader if you prefer.
2. Create a link on the first page of the app that brings the user to the 
    Aneurysm page
    * This page should be bookmarkable with a hash-based URL (``#/slug/``)
    * The browser Back button should work to move between this page and the
    main page
3. Create a Template to render the Aneurysm content
    * Be sure this Template utilizes data supplied by the Condition model
4. Create a View to render the Aneurysm content
    * The View needs to fetch data from the Condition model
    * The View needs to render the Template you have created

Once you have a working link and Aneurysm page displaying, do one more thing:

**Do something interesting to make your demo a little bit better.**

Submitting Your Results
=======================
Submit your results by emailing us a patchset created via the git format-patch
command.

Email your patchset to: tech-jobs@wisertogether.com


Installation
============

Install node.js and npm::

    $ sudo apt-get install nodejs npm

Install coffee-script and r.js

    $ sudo npm install -g coffee-script requirejs


Usage
=====

To build main JS file from CoffeeScript::

    $ source ./build_script.sh