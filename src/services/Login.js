import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export class LoginService {
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  addPerson(person) {
    return this.client.mutate({
      mutation: gql`
        mutation createPerson($input: createPersonInput!) {
          createPerson(input: $input) {
            person {
              id
              name
              email
              role
            }
          }
        }
      `,
      variables: {
        input: {
          data: {
            name: person.name,
            email: person.email,
            password: person.password,
            role: person.role,
          },
        },
      },
    });
  }

  login(person) {
    return this.client.query({
      query: gql`
        query peopleConnection($where: JSON!) {
          peopleConnection(where: $where) {
            values {
              id
              name
              email
              role
            }
          }
        }
      `,
      variables: {
        where: {
          email: person.email,
          password: person.password,
        },
      },
    });
  }
}
