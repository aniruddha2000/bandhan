# For the backend
FROM python:3.6-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create a working directory for the django project
WORKDIR /code

# Copy requirements to the container
COPY Pipfile Pipfile.lock /code/

# Install the requirements to the container
RUN pip install pipenv && pipenv install --system

# Copy the project files into the working directory
COPY ./backend /code/
