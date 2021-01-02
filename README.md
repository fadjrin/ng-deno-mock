# NgDenoMock

This project is composed by two parts:

- **Angular**: it follows the classical Angular project structure. A service exposes all CRUD operations available to the app and the data is displayed using a mat-table.

- **Deno server**: inside the `webServer` folder. Provides endpoints to a generic client and allows to decouple the client app from eventual local JSON mocks.

## Context

This is the practical demo for the a Angular application uses mock APIs implemented using Deno.

<p align="center">
<img src="https://github.com/ramanujprasad/ng-deno-mock/blob/main/src/assets/visual.png" alt="app_layout">
</p> 

## Run the Angular app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run Deno mock server

From the `webServer` folder, run `deno run --allow-net webServer/server.ts` to start the server (you might want to add Deno to your env variables if you want to run it from any path). By default, it will listen on PORT 8280. If you change it, align the PORT value with the variable used by Angular in the `environments` folder (within the Angular app scope). 
