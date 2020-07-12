# Sudoku-Solver-Py
Sudoku-Solver-Py is a flask application for providing quick solution to sudoku puzzles.<br>The algorithms used in the backend follow backtracking approaches to solve the sudoku puzzle quickly and display the solved sudoku puzzle.<br> 
Check it out running live [here](https://sudoku-solver-py.herokuapp.com/)<hr>
![website](https://github.com/iamhrishikeshpadhye/Sudoku-Solver-Py/blob/master/images/website.png)
<hr>

## Modification

Feel free to raise issues or create PRs <br>
To modify the original setup clone the repo

```
$ git clone https://github.com/iamhrishikeshpadhye/Sudoku-Solver-Py.git
$ cd Sudoku-Solver-Py
```

All the files are in the `app` directory.<br>
The project follows the `flask` application architecture.<br>
The HTML files are in the `templates` dire while the CSS and JS files are in the `static` dir.<br>
The files `sudopy.py` and `views.py` hold the main code for generating the solution and views respectively.<hr>

## Running locally
To run the application on the local machine you need to have `flask` installed and updated as per the `requirements.txt`<br>
To install all the requirements use the command 

```
$ pip install -r requirements.txt
```
Once all the requirements are installed, you can run the application simply by using the command
```
$ flask run --host=0.0.0.0
```
Take a note that the `--host=0.0.0.0` option lets your application available on your entire local network.
 
## Deploying on Heroku
This application can be easily deployed on `Heroku` with the help of `heroku CLI`<br>

```
$ cd Sudoku-Solver-Py
$ heroku login
$ heroku create
$ git push heroku master
```
Once deployed, you will get a link to your application which can be renamed later. (Don't forget to add the new remote name) 
## Author

### Hrishikesh Padhye

* Twitter: [@Hrishi_says_so](https://twitter.com/Hrishi_says_so)
* Github: [iamhrishikeshpadhye](https://github.com/iamhrishikeshpadhye)

### Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues](https://github.com/iamhrishikeshpadhye/Sudoku-Solver-Py/issues) page.

### Support this project :)

Give a ⭐️ if you like this!
