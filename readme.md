# Prerequisites

Python 3.10
Postgres 16
Node 20.10

# Poetry (tool for managing python dependencies)

Follow instructions on doc page to install: https://python-poetry.org/docs/

Add poetry shell plugin: `poetry self add poetry-plugin-shell`

# Database

Create database called zoo_project

# Backend

Go to backend directory: `cd backend/zoo_project`

Install python dependencies: `poetry install`

Activate virtualenv: `poetry shell`

Run migrations: `python manage.py migrate`

Launch backend server: `python manage.py runserver`

## Backend .env
Create a .env file in backend/zoo_project. Follow the format of the example file

Requires 5 different variables

`DJANGO_DEBUG` bool value can be set to True

`DJANGO_SECRET_KEY` str value can be set to 'django-insecure-'   

`ALLOWED_HOST=*`

`DATABASE_URL` set to the URL of database created in #Database step above

`CORS_ALLOWED_ORIGINS` set to the URL of the frontend 

# Frontend

Go to frontend directory: `cd frontend/zoo-project`

Install node dependencies: `npm install`

Launch frontend server: `npm run dev`

## Frontend .env
Create a .env file in frontend/zoo-project. Follow the format of the example file

Requires 1 variable

`VITE_API_URL`: the URL of the backend server
