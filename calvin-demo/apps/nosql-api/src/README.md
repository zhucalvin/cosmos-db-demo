# Nosql-api project setup:

### Step #1: Install nest dependency
```
npm install -D @nx/nest
```
### Step #2: generate NestJS nosql-api application
```
Nx Console => generate => @nx/nest - application 
```
### Step #3: Install configuration dependencies:
```
npm i --save @nestjs/config
npm i --save class-transformer
npm i --save class-validator
```

### Step #4: Install cosmosDB dependency:
```
npm install @azure/cosmos --save
```

### Environment file in the folder: apps\nosql-api\\.env
```
ENVIRONMENT=Local
AZURE_COSMOS_DB_ENDPOINT=<your-cosmos-db-endpoint>
AZURE_COSMOS_DB_KEY=<your-cosmos-db-key>
```

## Reference:
[NestJS configuration](https://docs.nestjs.com/techniques/configuration)