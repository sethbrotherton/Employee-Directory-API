# Employee-Directory-API
This project uses jquery and ajax to retrieve info from a public api(a random profile api)
and formats and displays the info as an employee directory.
When the page is loaded or refreshed 12 random profiles of individuals from us, au, and gb
are loaded.  When a profile card is clicked on, more info about that individual is displayed
in the modal window.  From there, you can navigate to the previous or next profile via the
previous or next buttons, or you can close the modal window.
There is a search input dynamically added to the page in the header section.  A keyup
event is listening to match the search input with the names of the individuals displayed on
the page, so it will automatically filter out non-matches.
Changes that I've made to the styling include: bgcolor, font-size of heading,
transorm(scale) of cards on hover, border-radius of cards, and border of profile image
in modal view.
