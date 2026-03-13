# Meme Central Web App

A Node.js + Express web application for browsing memes, built according to a client brief. 
Users can log in to view meme details, track viewed memes, and search memes by name.

---

## Technologies Used

- **Node.js** with **Express** framework
- **EJS** template engine
- **Bootstrap 5.2.3** (installed via NPM)
- **jQuery** (installed via NPM)
- **PassportJS** for authentication
- **express-session** for session handling
- Meme API: `http://jss.restapi.co.za/memes`

---

## How to install:
1. **Clone or download** the project.
2. Make sure you have **Node.js** installed.
3. Open a terminal in the project directory and run:

   npm install

4. NB! There is a possibility to run into a issue, something like:

cannot be loaded because running scripts is disabled on this system. For more information, 
see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npm start
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

5. If that happens, run this command:
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

This should make it possible to run the command:
    npm start


## Open the browser
Open the browser and write:
http://localhost:3001