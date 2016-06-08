This app is built using javascript with help from JQuery and the underscore libraries. It is built using an an adapter pattern to handle the request to the JSON files.

This program needs a server running in order to run correctly. I've been running this at the command line to run a local server:
python -m SimpleHTTPServer

A couple call-outs:
1. The number of unpublished articles in the top header updates every time a request for more articles is made.
2. Articles can be sorted in descending and ascending order by Words or the time Submitted by clicking on Words in the header or Submitted in the header.
3. The sort order is persistent. This information is stored in the browser's local storage. The variable stores if the rows are sorted, if they are sorted by Words or Time Submitted and if they are ascending or descending.
4. When articles are loaded they are added to the bottom of the list and not automatically sorted. The user needs to select 'Words' or 'Submitted' to sort the articles. I wanted the user to be able to see the articles that are newly loaded before they sort them.
5. The JSON files are at this path: 



still to do:

- number of articles at the top
- add tags


Still to do:
1. border around cells - DONE
2. Load More Button functionality - DONE
3. Localstorage - DONE
4. sorting - http://tablesorter.com/docs/  - using the paradigm 'words-up', 'words-down', 'time-up', 'time-down'
5. time correctly - http://stackoverflow.com/questions/1787939/check-time-difference-in-javascript
