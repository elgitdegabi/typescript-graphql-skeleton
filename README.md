# typescript-graphql-skeleton
## Overview
Basic skeleton just to initialize and run a Typescript project follow minimum configuration steps
## Tech Stack
* typescript
* typeorm
* graphql
* express
* apolloserver
* docker
* mysql / sqlite3
## Implementation
File dependency.manager.ts is used to create singleton instances of MVC layers and "injects" these classes as "dependencies", simulating IoC frameworks behavior.
Application parameters and constants are configured at constants.ts file.
### Entity mapping
**Product (/entity/Product)**

Defines Product attributes for ORM and GraphQL end-points:
* id
* name
* description
* quantity
* create / update timestamp (jORMHibernate configuration using **synchronize** DDL strategy, so database initialization scripts are not included or executed.

## Run locally
### Run docker
```
docker-compose -f ./docker/docker-compose-local.yaml up
```
### Run app
```
npm run dev
```
### Graphql dashboard
```
http://localhost:3000/graphql
```
### API end-points
```
curl --request GET \
  --url http://localhost:3000/api/products \
  --header 'Content-Type: application/json'
```
```
curl --request GET \
  --url http://localhost:3000/api/product/6 \
  --header 'Content-Type: application/json'
```
```
curl --request POST \
  --url http://localhost:3000/api/product/add \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "samsung galaxy a33",
	"description": "mobile phone model 2022",
	"quantity": 45
}'
```
```
curl --request POST \
  --url http://localhost:3000/api/product/update \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 6,
	"quantity": 42
}'
```
```
curl --request POST \
  --url http://localhost:3000/api/product/delete \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 1
}'
```
## Tests
### Unit tests
```
npm run test
```
### Unit tests coverage report
```
npm run test-coverage
```
### Integration tests
```
npm run test-integration
```
## Contact
Blog: https://gabelopment.wordpress.com/

Github: https://github.com/elgitdegabi

Linkedin: https://www.linkedin.com/in/gabogil/
