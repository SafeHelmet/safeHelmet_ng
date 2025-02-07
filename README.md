# SafeCapNg

This repo contains the front-end part of the Safe Helmet project.
The objective of this work is create a concept product that make massive use of IoT (Internet of Things) and related technology to fullfill the requirements given for the exam 
of "IoT".

The front-end part contains the showroom of the product to impress the possible buyers, then a protected environment to manage all the stuff that composes SafeHelmet.


### Admin area

The people with access to the management area will see the list of all worksites, workers, reports and helmets.

All the data shown in the web page is requested via API to the backend deployed in a different server

### Worksites

- List view
- Creation view
- Detail view
- Edit view
- Delete option

### Workers

- List view
- Creation view
- Detail view
- Edit view
- Delete option

### Reports

- List view
- Detail view

### Helmets

- List view
- Creation view
- Detail view
- Edit view
- Delete view


# Deploy Manual

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

Frontend structure: [Excalidraw link](https://excalidraw.com/#json=MXndE9h4bg5w1BFbguuHb,D3uYARk-Efb_LiCI9S1KWQ)

## Production deploy checklist

Having the main branch cloned in local, execute these steps in order to update the actual version of WEB Page


### Build in production mode

The project is built and put in the `docs` folder this in order to trigger github-pages deploy
```bash
ng build --configuration=production
```

### Execute bash script 
This script move files from the `docs` subfolder's `browser` in the correct position so `docs` root
```bash
./move-to-docs.sh
```

### Commit and push

Pushing to the main branch will trigger the github deploy action 
```bash
git add docs                       
git commit -m "Fix: Moved build"
git push origin main
```


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.



Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
