# Clean Architecture con TDD

En este repositorio tenemos un proyecto realizado con Node.js, express y MongoDB preparado
para crear un API REST basándonos en [Clean Architecture][5] de Robert `"Uncle Bob"` Martin.

![Clean Architecture Diagram](docs/CleanArchitecture.jpg)

## Tests del dominio

Los tests del dominio los podemos ver en los siguientes ficheros:

* **Tests del dominio de check alive**.
  * [Tests][1] de hello world!.


## Tests de los servicios web http

* **Tests del API REST de hello**.
  * [Tests][6] de GET `/api/hello`.

## Arranque en local

Para esta proyecto realizado con [Node.js][2], [express][3] y [MongoDB][4], necesitamos:

* Levantar un mongoDB en el puerto 27017 local.
* Lanzar el script `npm start`. En caso de querer levantar un hot reloading, lanzar `npm start:dev`.

[1]: /test/domain/hello/hello.greet.spec.js
[2]: https://nodejs.org/es/
[3]: https://expressjs.com/es/
[4]: https://www.mongodb.com/es
[5]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
[6]: /test/endpoints/hello/hello.get.spec.js
