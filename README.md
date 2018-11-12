# Desafio Fullstack com Angular e Spring Boot

Após pull dos arquivos recomendamos utilizar o VSCode para execultar o frontend e o Spring Tools para carregar o backend.

# Necessário
  - Maven 3+
  - NodeJS 8+
  - Java 1.8 JDK
  - Springboot 2.1.0 cli (incluir no PATH)

# Executando a aplicação - DEBUG

### Front-end
```sh
$ cd desafio-front
$ npm install 
$ npm start
```

# Executando a aplicação - DEBUG

### Front-end
```sh
$ cd desafio-front
$ npm install 
$ npm start
```

### Back-end
```sh
$ cd desafio-back
$ mvnw clean install
$ mvnw spring-boot:run -Drun.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"
```
# Executando a aplicação - PRODUCTION

### Front-end
```sh
$ cd desafio-front
$ npm install 
$ npm build
```
### Back-end
```sh
$ cd desafio-back
$ mvnw clean install
$ mvnw spring-boot:run
```

# Executando testes

### Front-end
Unitários via Karma

$ ng test

### Back-end

Integração e unitários via Junit

$ mvnw test
