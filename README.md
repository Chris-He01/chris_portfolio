#
View Live demo at: (https://www.chrisheportfolio.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `npm run startApp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Run Docker Container

### build container
docker build -t chris_web .

### run container
docker run --rm -p 4200:80 --name chris_web_ui chris_web

### check contents in container
docker exec -it /bin/bash
