# Hackafy (Front-End)

A basic and simple web app to search for hackathons around the world, built with Angular.

It uses type ahead search and tries to make the minimum of requests to the server.

**Try it here: [Hackafy](https://hackathon-front-angular.vercel.app/)**

![Hackafy-Home](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-Home.png?raw=true)

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

![Hackafy-Search](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-Search.gif?raw=true)

### Search Filters

- Filter results by:
  - Location
  - Autocomplete using Google Places API

![Hackafy-Location](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-Location.gif?raw=true)

- Filter results in real time by:
  - Free events
  - Remote / online events

![Hackafy-Filters](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-Filters.gif?raw=true)

### CRUD

- Create, edit and delete hackathons
- Form with validation and alert messages for required fields
- Pagination for card results 

![Hackafy-AddForm](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-AddForm.png?raw=true)

![Hackafy-EditForm](https://github.com/samantafluture/hackathon-front-angular/blob/main/src/assets/Hackafy-EditForm.png?raw=true)

## Built with

- Angular
- Angular CLI
- Google Places API
- Ngx Pagination

Deploy: Vercel.

## Under Construction

Features that are being implemented: 

- [ ] Filter by date range (using date picker)
- [ ] Google and Github login with Firebase
- [ ] Support for uploading image file 
- [ ] Possitiblity to create a list with favorit events

Please feel free to contribute! This web app is still under development :coffee:
