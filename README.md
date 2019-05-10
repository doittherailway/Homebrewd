# README
![ut_header](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+9.42.54+AM.png)

Homebrewd, an Untappd clone, is a beer rating/review application that allows users to check-in and rate home-brewed beers. Users can add their own beers and see reviews and photos for different beers and users. This project was implemented under a deadline of 10 days.

See it live at [homebrewd.beer](http://www.homebrewd.beer/#/)

## Technologies
### Back end:
* Ruby 2.5.1
* Rails 5.2.3
* Postgresql

### Front end:
* React
* Redux
* Javascript/ES6


## Features

### Splash Page/User Auth

![splash_page](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+9.57.06+AM.png)

The splash page is kept simple and clean to match the real site, with buttons to sign in or sign up for the site. Users can't access the site unless they are logged in, but a demo login is provided to see the full functionality of the site.

![create_account](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/signup.png)


### Beer Index and Creation/Editing

![beer_index](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+10.28.09+AM.png)

Users can view a list of all the beers currently on the site, and add their own or edit existing beers. 

![beer_edit](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+9.48.04+AM.png)

Users also have the ability to search for a beer with an autocomplete dropdown feature that allows them to go directly to the beers page when clicked.

![beer_search1](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+10.20.28+AM.png) ![beer_search2](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+10.23.14+AM.png)


The search features an autocomplete option, that uses a debounce (a higher level function) to delay sending the search request to the database until the user has stopped typing for 0.5 seconds using a timeout that is reset upon the function it is bound to being called. This debounce function is bound to the submit event of the search input. 

```javascript
this.handleSubmit = this.handleSubmit.bind(this).myDebounce(500);
```
The dropdown is populated using Javascript to find the element, and append the search results as options to the list once they are retrieved from the database.
```javascript
beerOptions() {
        let dataList = document.getElementById('beer-list-res');
        let input = document.getElementById('search-input');

        this.props.results.forEach((beer, index) => {
            var option = document.createElement('option');
            option.value = beer;
            dataList.appendChild(option);
        });
        input.placeholder = "Find a beer...";
    }
```


### Checkin

![checkin](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+9.45.55+AM.png)

Users can checkin/review a beer, with a rating, description and optional location, and upload a photo. 

### User Profile and Review Feed

![user_profile](https://s3-us-west-1.amazonaws.com/homebrewd-seeds/Screen+Shot+2019-05-10+at+9.44.35+AM.png)

Each user has a profile that displays their information, including accurate statistics on the number of checkins/beers drank (both total and unique). There is also a feed of their checkins they have made, with an option to delete a checkin.


## Future features

* Average rating for beers based on their checkins
* Breweries have their own page and users can add/edit/delete breweries
* Location linked to Venues, to see who is drinking what where.
* Badges for reaching milestones (5 unique beers, 10 lagers consumed etc)
