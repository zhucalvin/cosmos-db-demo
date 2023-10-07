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
AZURE_COSMOS_DB_ENDPOINT=<your-cosmos-db-endpoint>
AZURE_COSMOS_DB_KEY=<your-cosmos-db-key>
```

### Note:
Make sure to add `content-type: application/json` in `Postman` for testing the `Create` and `Update` document functions

#### Get all Cars: 
```
Get: http://localhost:3000/api/cars
```
#### Get car by Id:
```
Get: http://localhost:3000/api/cars/<partition key>/<Id>
```
### Create a car:
```
POST: http://localhost:3000/api/cars
{
    "make": "handa",
    "model": "civic"
}
```
#### Update a car:
```
PATCH: http://localhost:3000/api/cars
{
    "id": "a87a54ec-26df-464a-b4cf-c0318cccf34b",
    "make": "toyota",
    "model": "Sennia"
}
```
#### Delete a car
```
Delete: http://localhost:3000/api/cars/<partition key>/<Id>
```
## Reference:
[NestJS configuration](https://docs.nestjs.com/techniques/configuration)