This app is built using javascript with help from JQuery, Underscore and Moment.js libraries. I've used an adapter pattern to handle the request to the JSON files.

This program needs a local server running in order to handle the XHR requests correctly. I've been using SimpleHTTPServer as a server. SimpleHTTPServer comes with Python.
Please run the following code in the project's main directory at the command line to start the server.
$ python -m SimpleHTTPServer

A few call-outs:
1. The number of unpublished articles in the top header updates every time a request for more articles is made.
2. Articles can be sorted in descending and ascending order by clicking on 'Words' or 'Submitted' in the header.
3. The sort order is persistent. This information is stored in the browser's local storage. Local storage saves if the rows are sorted and if they are sorted by 'Words' or 'Submitted' and if they are ascending or descending.
4. When articles are loaded they are added to the bottom of the list and not automatically sorted. The user needs to select to sort the articles before they are sorted into the list. I wanted the user to be able to see the articles that are newly loaded before they are sorted.
5. Instead of showing the 'bootcamp' label as shown on the screenshot, I'm showing the list of tags relevant to the article per Anthony's email.
6. In order to correctly calculate how long ago an article was submitted I utilized moment.js so that the calculations would work correctly across browsers. Safari does not support Date.parse(date) natively for changing a string date to milliseconds. Chrome does support Date.parse(date) natively.

If you have any questions please reach out. My contact info is below:

Josh Zizmor
201-321-2470
joshzizmor@gmail.com
