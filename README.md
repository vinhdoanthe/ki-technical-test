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
