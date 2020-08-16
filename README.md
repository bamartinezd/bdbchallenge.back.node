# bdbchallenge.back.nodeJS

Node JS backend RESTFull API with Create & Read actions that uses a MySQL for persistence.

To mount the MySql Database you can pull and use the docker image from 

>docker pull bamartinezd/challengebdb_01:version1.0

or create Mysql Instance based on YML file in db folder and use the script to create db and objects.

After the clone repository, you need to run: 

>npm install

For install all required dependencies.

and run with command

>npm run dev

Then you can go to test the API GET methot in the browser

>http://localhost:3000/api/employee
