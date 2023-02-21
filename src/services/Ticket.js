import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export class TicketService{
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  })

  addTicket(ticket, id){   
    return this.client
      .mutate({
        mutation: gql`
          mutation createTicket($input: createTicketInput!) {
            createTicket(input: $input) {
              ticket {
                id
                label
                closed
                description
              }
            }
          }
        `,
        variables: {
          input: {
            data: {
                label: ticket.label,
                closed: false,
                description: ticket.description,
                user_id: id
            },
          },
        },
      })
  }
}

