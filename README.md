# Investment Portfolio (KI Technical Test)
## How to start the development
<mark>This project requires Docker and Docker Compose to run, and tested with Macbook Pro 14 M1 Pro</mark>

Clone the repository and go to the project directory
```
git clone https://github.com/vinhdoanthe/ki-technical-test
cd ki-technical-test
```

Create .env.override file
```
touch backend/.env.override
```

Run project with docker and docker compose plugin
```
docker compose up
```

Migrate database
```
docker compose run api python manage.py migrate
```

Load sample data
```
docker compose run api python manage.py loaddata fixtures.json
```

Goto http://localhost:4200 to view the application

## Some notes

#### How did I generate the sample data?
* First, I got the csv file from the link in the GitHub repository: https://www.data.gouv.fr/fr/datasets/operations-de-construction-et-de-renovation-dans-les-lycees-francilens/ I saw that the fields match with the data in JSON file prodived in the test
* Then I created the Investment model based on the csv file
* Import the csv file into the database (I just used a tool to do that :) )
* Export the data to the fixtures.json file with the command: `docker compose run api python manage.py dumpdata > backend/fixtures.json`

#### Admin
Create a superuser account
```bash
docker compose run api python manage.py createsuperuser
```
Goto http://localhost:8000/admin to access the admin page

#### How to run the tests
```bash
docker compose run api python manage.py test
```

There are some tests for the APIs, written in the `backend/investment/tests.py` file
* Get list of investments
* Get investment information
* Update investment 