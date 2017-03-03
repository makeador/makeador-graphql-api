# makeador-graphql-api


<p>
  <a href="https://travis-ci.org/makeador/makeador-graphql-api">
    <img src="https://travis-ci.org/makeador/makeador-graphql-api.svg?branch=master"
         alt="Build Status">
  </a>
</p>

`makeador-graphql-api` is a microservice that exposes a GraphQL API to consume apparently random –but not random, we swear. It's destiny.) _makea_ states, to decide if stuff makes sense (hence _makea_).

## Documentation
### GraphQL query
```graphql
{
  makea
}
```
### Possible responses
#### _Apparently random. But not random, we swear. It's destiny._
```JSON
{
  "data": {
    "makea": "Not sure if makea"
  }
}
```
```JSON
{
  "data": {
    "makea": "Makea"
  }
}
```
```JSON
{
  "data": {
    "makea": "No makea"
  }
}
```
