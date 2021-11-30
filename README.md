# Welcome to events-n-stuff!

This project was created by Tom Ames, Nick Davis, and Anthony Surace. 

Looking for Backend? Check out the <a href="https://github.com/ajsur1017/events-n-stuff-backend">Backend Repo</a>.

Looking for Trello? Check out the <a href="https://trello.com/b/ejpanVcd/event-track-app">Events n' Stuff Trello Board</a>.

Looking for Heroku? Check out the <a href="https://events-n-stuff.herokuapp.com/events/">Events Database</a>.

Want to get to your Event-Planning? Check out <a href="https://events-n-stuff.netlify.app/">Events n' Stuff</a>!

## Mission

Create an application that allows logged-in users to create events, publicize events, edit events, and delete events. Any user is able to access the site freely and view details on any events that have been posted to the site, and logged in users have the ability to edit their own events, schedule attendance at any event, post new events, and view any events they host or attend.

## Technologies Used 

- HTML / CSS
- Javascript
- React
- Express
- MongoDB
- Github
- Heroku (back-end)
- Netlify (front-end)

## MVP / Achieved Targets

- Allow full CRUD functionality
- Create User Authentication / Authorization
- Create Search Functionality
- Incorporate Bootstrap

## Stretch Goals

- Implement with Public Events API

## Site Info

The Events n' Stuff website was created to allow users to browse/search events, create an account, and create/update/delete events. Users will access the site and be presented with the below index:

<img src="https://imgur.com/EoAM825.png"/>

Users can utilize the Search bar to browse events and filter the Carousel by Location/Name:

<img src="https://imgur.com/ipPLT5h.png"/>

Users can select "Login" or "Sign Up" in the top right and be presented with the below sign-in and login screens:

<img src="https://imgur.com/h4zVC2N.png"/>

<img src="https://imgur.com/UqMkVsY.png"/>

Logged-in users can access the access the Create Event option on the site, inaccessible unauthenticated users:

<img src="https://imgur.com/uRLzjkg.png"/>

Any users can click on the Linked event name to access its "Show" page. Only logged-in users have the ability to update or delete information for their own events, and only logged-in users can access the Attend option for events:

<img src="https://imgur.com/T3oAIRb.png"/>

Logged in users can access their My Events page to view created events that they host, or pivot to a list of events they attend:

<img src="https://imgur.com/Bz2Z2hl.png"/>

## Code Snippets

### User Verification 

App.js

Checked for Logged in User:
<img src="https://imgur.com/cEOenqQ.png"/>

Feed Global State Token to Main and Login/Signup Component:s
<img src="https://imgur.com/Ia4Za0l.png"/>

Login.js
<img src="https://imgur.com/oeeg2vd.png"/>

Singup.js
<img src="https://imgur.com/O7HgDcV.png"/>

### Search / Filter / Map Function / Carousel
Index.js
<img src="https://imgur.com/D2cP4fw.png"/>

MyEvents.js
<img src="https://imgur.com/SFioayp.png"/>

### Conditional User Authorization

Create Event:

<img src="https://imgur.com/szONf4v.png"/>

Update/Delete Event:

<img src="https://imgur.com/wXmd4lD.png"/>

## Contributor Info

Anthony Surace<br>
Release Manager / Backend Developer<br>
<a href="https://github.com/ajsur1017">Anthony's Github</a>

Tom Ames<br>
Product Manager / Front-End Developer <br>
<a href="https://github.com/tsames">Tom's Github</a>

Nick Davis<br>
Product Manager / Front-End Developer <br>
<a href="https://github.com/nickdavis1018">Nick's Github</a>