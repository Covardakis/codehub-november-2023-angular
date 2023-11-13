<h1>Angular Learning and Development Path</h1>
<br><br>
<h2>Bug Reporting System</h2>
<br><br>
<h3>November 2023 - Powered By Code.Hub</h3>
<br><br>
<hr>
<br><br>
* Starting page: HomeComponent (in ./components/home)
* New bug form page: CreateNewFormComponent (in .components/create-new-form)
<br><br>
<hr>
* Utilize only GET (on all bugs) and POST (a single bug) on 'http://localhost:3000/bugs' endpoint (see ./services/bug.service)
<br><br>
<hr>
<br><br>
<h4>Home Page</h4>
* Table containing the bus currently in the database (here db.json).
* Styling found in 'styles.scss' file.
* Entries are sortable in a bi-directional way via clickable column headers. Sorting methods found in HomeComponent.
* 'Create New' button, opening a new page containing a plethora of input fields.
<br><br>
<hr>
<br><br>
<h4>Create New Form Page</h4>
* Styling found in 'styles.scss' file.
* Mandatory inputs of 'Title', 'Description', 'Priority' and 'Reporter'.
* 'Status' field is conditionally mandatory (see 'ngOnInit' method of 'CreateNewFormComponent')
* 'Priority', 'Reporter' and 'Status' chosen using drop-down menus of fixed values.
* 'Submit' button, which triggers the POST request to the server and redirects to 'home' page ('/') as soon as it is done, thus reloading all the bug entries.