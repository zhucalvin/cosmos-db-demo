# Nosql-api project setup:

### Step #1: Install nest dependency
```
npm install -D @nx/nest
```
### Step #2: generate NestJS nosql-api application
```
Nx Console => generate => @nx/nest - application 
```
### Install configuration dependencies:
```
npm i --save @nestjs/config
npm i --save class-transformer
npm i --save class-validator
```

### Environment file in the folder: apps\nosql-api\\.env
```
ENVIRONMENT=Local
```

## Reference:
[NestJS configuration](https://docs.nestjs.com/techniques/configuration)