import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export class LoginService{
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  })

  addPerson(person){   
    const response = {
      status: false,
      data: {}
    }    
  
    this.client
      .mutate({
        mutation: gql`
          mutation createPersonne($input: createPersonneInput!) {
            createPersonne(input: $input) {
              personne {
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
              role: "user",
            },
          },
        },
      })
      .then(async (res) => {
        response.status = true;
        response.data = res.data;
      })
      .catch(() => {
        response.status = false;
      });
  
    return response;
  }
}

