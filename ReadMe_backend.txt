This text file is a guide on how to start the test backend in postman.
1.- I have created a local database connection in MySQL, called webex. In the backend, following the path
src/main/resources/ in the application.properties file, I code the necessary elements for the connection.
2.- In the path src/main/java/com.example.webex_project_backend I have created several packages to configure the handling of the data.
3.- The first package created is: model, with a user file to create and structure a table in the database called test.
4.- Second, I have created a package (repositories) with a file (UserReposIntef) which calls the JpaRepository class
to work with the methods that come in it, such as findAll, findById, etc.
5.- Then I created a package (exception) with a file to control possible errors in the execution of calls.
6.- Finally I have created a package (controllers) with a file (UserController) that manages the different calls
to the table in the database. Currently I am working on it. At first I made a sentence for testing a user list. It is working.

Now I am trying to create a login command (in progress).

I am using IntelliJ IDEA platform 2022.3.3 (Ultimate Edition) for frontend(react js) and backend(Spring Boot).
Backend:
    - Maven
    - Java 17
    - Packaging Jar
    - Dependencies: Spring Boot DevTools, Spring Data JPA, MySQL Driver, Spring Web.

Frontend: React js, Bootstrap, react-toastify

You can run the backend and test the list on Postman to see the result:
- GET - http://localhost:8080/api/users/list - to display all the records contained in the users table.