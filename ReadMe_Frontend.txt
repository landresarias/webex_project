This text file is a guide on how to start the frontend with React JS.
1.- In the src route I have modified the App.js file. the Switch in react-router-dom doesn't work
and I replaced them with Routes. the same instead of Component now Element is used.
2.- Next, I've created a folder (components) to house various files that structure the interface.
3.- In components, I create a file for the construction of a navigation bar adding bootstrap elements.
4.- In components I create a file for the construction of a Footer adding bootstrap elements.
5.- In components, I create a file (index) to manage the name of all the pages, it is easier
to import in the App file.
6.- Within the components, I create a package (pages), this will house the pages such as: Home, Setup, contact.
7.- The Home page is the main page and shows a welcome message.
8.- The Setup page start to requesting a signin that is under construction. The idea here is that if the
login is correct it allows you to go to the setup page.
9.- On the Setup page there are three buttons: Webex Connection to start the connection to the WEBEX API,
Creating Meeting to hold an online meeting, Meetings List to show a list of meetings pending
to be held (in progress).
10.- A Contact page created only to test the backend connections (So far only the call to the
database to display a list of users works)

I am using IntelliJ IDEA platform 2022.3.3 (Ultimate Edition) for frontend(react js) and backend(Spring Boot).