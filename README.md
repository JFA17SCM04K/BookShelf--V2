BookShelf:
This project finds it’s application in the library management and analysis. So, the existing book details can be added/edited/deleted/viewed by the user. 
In other words, it is MEAN Stack API aimed at performing the CRUD operations with MongoDB following the RESTful architecture.
Further, the components of this application are implemented using the Angular Material and PrimeNG.

The following tools, frameworks, and modules are required for this tutorial:
- Node.js
- Angular CLI 1.7.3
- Angular 5
- MongoDB 
- Express.js
- Mongoose.js
- IDE or Text Editor

SETUP:

1.	Assuming that Node.js is installed, the first step is to update or install Angular CLI on Windows/Node command line.

npm install -g @angular/cli

2.	Create the new Angular application:

ng new goji-final

3.	Go to the new application and now install the following dependencies:
npm install –save express body-parser morgan serve-fevicon

4.	Create a new folder bin :
 mkdir bin

Create a new file in it ‘www’ and configure the ports for the app to listen on them.



 
5.	For running the server from bin/www, open the package.json and change the scripts start to:
  

6.	Create a new file app.js in order to include and use all the express dependencies.
 
7.	Running the project:
npm start

THE BOOKSHELF APPLICATION:
There are two major parts of the application:
•	BACK END -- Data Flow
•	UI -- Front End
•	Navigation (Angular Router and UI-Router for Angular 2+)

DATA FLOW

1.	The database connectivity is done using the ‘mongoose’ package. I have used mLabs:
which is the largest cloud MongoDB service in the world.(app.js)

 

2.	Setting the Routes:
All the REST  routes are set in the routes/book.js file:
 


3.	Now, comes the most important part of the application- CommonService present inside the shared folder. Now, this service is responsible for sending all of the httprequests to the backend thus, hitting the corresponding routes to perform the CRUD operations.

 

4.	Now, for the front-end part:
The application is broken down into following components:
•	BookComponent
Responsible for displaying all of the books stored in the database.
•	BookCreateComponent
Responsible for creating/adding new books to the database.
•	BookDetailComponent
Responsible for getting the details of one particular book.
•	BookEditComponent
Responsible for editing one particular book present in the database and storing them back again in thee database.
•	ChartComponent
Responsible for displaying the analysis of books in the form off pie chart.

Services:
•	CommonService
All of the above components utilize the CommonService in order to get the data that they display on the screen.


 




UI -- Front End
Front End of the application makes use of the components from Material Angular and PrimeNG.

COMPONENTS	USAGE
ANGULAR MATERIAL
Nav		
	SideNav	Used as a SideNav to navigate to ADD BOOKS and ANALYSIS.

	Toolbar	Toolbar is right at the top that holds the title.
	Menu	Menu is another way to navigate away.
Layout	Card	All the components are place on the card.
	Tabs	Book details are presented using the material Tabs.
Buttons	Button	Buttons are made using this.
	Chips	Chips are used to make buttons.
Popups	Snackbar	After every interaction with the database, a message is popped up in the form of snackbar to let the user knows what he/she is trying has been done
PrimeNG
Form Controls	Datepicker	Used to get date of the book published.
	Input	Get the book title,author,author,publisher as inputs
	Radio	To get the availability of book in the BookShelf
	Checkbox	To get the genre of the book
	InpuTextArea	To get the description of the book
Overlay	Dialog	As an informative dialog box on the very first page to tell about the BookShelf
Charts		Used Pie charts to apply analytics on the books by using the aggregate querries.
Messages	Messages	To validate the type of inputs the user is entering while creating a new book
	Growl	To clear the fields of the edit form

NAVIGATION

Version 1:
Navigation is an important aspect of any application because it keeps it connected. For the version 1 of the project, I have made use of the Angular Router to define the routes and navigate through them. This is done with the help of RouterModule and Routes from '@angular/router';


 


 


Version 2:

For the version 2 of the project, I have made use of the UI-Router for Angular 2+  to define the routes and navigate through them. This is done with the help of RouterModule and Routes from '@angular/router';











Running the App:
1.	Download the code from github:
Version 1: https://github.com/JFA17SCM04K/BookShelf---V1
Version 2: https://github.com/JFA17SCM04K/BookShelf--V2
Setup an account with mlabs.
2.	Run npm install to install all the dependencies from the package.json.

To see the application in action, open the browser and navigate to : https://secure-sierra-24983.herokuapp.com/books








