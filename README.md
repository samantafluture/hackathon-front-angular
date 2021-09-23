# Hackafy (Front-End)

A basic and simple web app to search for hackathons around the world, built with Angular.

It uses type ahead search and tries to make the minimum of requests to the server.

Try it here: [Hackafy](https://hackathon-front-angular.vercel.app/)

This front-end uses the following backend: [Hackathon API](https://hackathon-api-nest-mongo.herokuapp.com/event/all). 

## Features

### Search Bar 

- Type ahead search field
  - Filter through results by typing
- User experience tied to performance
  - Starts to search from 3 typed letters
  - Uses debounce time 
  - Does only one request if the value wasn't changed
  - Manipulates API results with `rxjs operators`

### Search Filters

- Filter results in real time by:
  - Location (autocomplete using Google Places API)
  - Free events
  - Remote / online events

### CRUD

- Create, edit and delete hackathons
- Form with validation and alert messages for required fields
- Pagination for card results 

## Built with

- Angular
- Angular CLI
- Google Places API
- Ngx Pagination

Deploy: Vercel.

## Screens

![Hackafy-Home]()
![Hackafy-AddForm]()
![Hackafy-EditForm]()

![Hackafy-Search]()
![Hackafy-Location]()
![Hackafy-Filters]()

## Under Construction

Features that are being implemented: 

- [ ] Filter by date range (using date picker)
- [ ] Google and Github login with Firebase
- [ ] Support for uploading image file 
- [ ] Possitiblity to create a list with favorit events

Please feel free to contribute! This web app is still under development :coffee:
