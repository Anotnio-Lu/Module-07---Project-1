# RepairFind
## Get your vehicles information from your vin number, and find your nearest mechanic.

RepairFind is a live web application designed to help motorists streamline the process to find mechanical assistance.

## Table of Contents
- [User Story](#user-story)
- [Acceptance criteria](#acceptance-criteria)
- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [Development](#development)
- [Credits](#credits)
- [License](#license)

## User Story
As a car owner, I want to be able to provide my accurate car information to mechanics drawn from my VIN, and know what local mechanics are available to me, in any given area. 

## Acceptance Criteria
- WHEN I go to the homepage, there is a search bar that allows me to put in the Vehicle Identification Number (VIN) of my car.
- THEN I click the search button, it directs me to another page displaying the primary information of my car: make, model, and year.
- WHEN I view the landing page
- THEN I can see a map that shows me local mechanics and my search history
- WHEN I inspect local storage
- THEN I see my search history has been saved
- WHEN I click a button to clear history
- THEN my local storage is cleared

## Features

- Populate your vehicles primary information by using your vin number. 
- Display your nearest mechanic in Google Maps.
- Save your search history locally for quick reference. 

## Technologies

RepairFind uses a number of technologies, including:

- HTML
- JavaScript
- CSS
- Skeleton CSS boilerplate
- Jquery
- Google Maps API
- VIN API

More information and links to external technologies can be found in our "Credits" section. 

## Usage

On opening the RepairFind Homepage, users are presented with an input box, a search button, and simple directions on where they can find their vin number. 

![RepairFind Homepage](images/readmeHomePage.png)

Once the user inputs their vin number, they are redirected to the landing page. The user is presented with their vehicles make, model, and year, and (if the user has allowed location services) mechanics located within a variety or radii from their current location. 

If the user navigates directly to the landing page, they are presented with a search input box, and placeholders for each of the search results and Google Maps results. The user is able to use the search function from the landing page. 

![RepairFind Landing Page](images/readmeLandingPageDefault.png)


- loacl search preserves search history

## Development

RepairFind was developed by Team 7, as a joint effort. Antonio Liu and Anna Art provided the JavaScript, API functionality, and local storage capabilities. Steven Dong and Briony Sherrell designed the website, ensured all technologies were incorporated into the HTML, and provided the READ.ME file. 

## Credits

Skeleton: A dead simple, responsive boilerplate. http://getskeleton.com/

GIO Insurance, How do I find my vin? https://www.gio.com.au/faqs/car-insurance/how-do-i-find-my-vin.html

Parts Navigator: https://partsnavigator.com.au/

Dillinger.io: live markdown editor

https://dillinger.io/


## License

None Applicable

