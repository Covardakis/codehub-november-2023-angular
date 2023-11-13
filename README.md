<h1>Angular Learning and Development Path</h1>
<br><br>
<h2>Bug Reporting System</h2>
<br><br>
<h3>October 2023 - Powered By Code.Hub</h3>
<br><br>
<hr>
<br>
<ul>
    <li>Starting page: HomeComponent (in ./components/home)</li>
    <li>New bug form page: CreateNewFormComponent (in .components/create-new-form)</li>
</ul>
<br><br>
<hr>
* Utilize only GET (on all bugs), POST (a single bug) and GET SORTED (on all bugs) on 'http://localhost:3000/bugs' endpoint (see ./services/bug.service)
<br><br>
<hr>
<br>
<h4>Home Page</h4>
<br>
<ul>
    <li>Table containing the bus currently in the database (here db.json).</li>
    <li>Styling found in 'styles.scss' file.</li>
    <li>Entries are sortable server-side via clickable column headers, thus sending the appropriate GET request with parameters.</li>
    <li>'Create New' button, opening a new page containing a plethora of input fields.</li>
</ul>
<br><br>
<hr>
<br>
<h4>Create New Form Page</h4>
<br>
<ul>
    <li>Styling found in 'styles.scss' file.</li>
    <li>Mandatory inputs of 'Title', 'Description', 'Priority' and 'Reporter'.</li>
    <li>'Status' field is conditionally mandatory (see 'ngOnInit' method of 'CreateNewFormComponent')</li>
    <li>'Priority', 'Reporter' and 'Status' chosen using drop-down menus of fixed values.</li>
    <li>'Submit' button, which triggers the POST request to the server and redirects to 'home' page ('/') as soon as it is done, thus reloading all the bug entries.</li>
</ul>