# graphql

<http://graphql.org/graphql-js/>
<https://github.com/graphql/graphql.github.io/blob/source/site/graphql-js/>


## Chrome Devtools

<https://chrome.google.com/webstore/detail/graphql-network/igbmhmnkobkjalekgiehijefpkdemocm>

## Types

By default, every type is nullable.  
Type`!` is non-nullable.

* `String`
* `Int`
* `Float`
* `Boolean`
* `ID`

### List

`[Int]` is a list of Integers.

### Object

```
type User {
  name: String
  age: Int
}

type Query {
  user(name: String): User
}
```

## Queries

<http://graphql.org/learn/queries/>

## Mutation

How to mutate ql

```
mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}

{
  "input": {
    "author": "fujita",
    "content": "hello"
  }
}
```

Result

```
{
  "data": {
    "createMessage": {
      "id": "b6464231d16f2205721a"
    }
  }
}
```

Get

```
{
  getMessage(id: "b6464231d16f2205721a") {
    id
    author
    content
  }
}
```