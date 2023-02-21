import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export class TicketService {
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  addTicket(ticket, id) {
    return this.client.mutate({
      mutation: gql`
        mutation createTicket($input: createTicketInput!) {
          createTicket(input: $input) {
            ticket {
              id
              label
              closed
              description
              user_id
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
            user_id: id,
          },
        },
      },
    });
  }

  closeTicket(id) {
    return this.client.mutate({
      mutation: gql`
        mutation updateTicket($input: updateTicketInput!) {
          updateTicket(input: $input) {
            ticket {
              id
            }
          }
        }
      `,
      variables: {
        input: {
          where: {id: id},
          data: {
            closed: true,
          },
        },
      },
    });
  }

  userGetTickets(id, closed) {
    return this.client.query({
      query: gql`
        query ticketsConnection($where: JSON!) {
          ticketsConnection(where: $where) {
            values {
              id
              label
              description
              created_at
              updated_at
              closed
              user_id {
                id
                name
              }
            }
          }
        }
      `,
      variables: {
        sort: "updated_at:desc",
        limit: 50,
        where: {
          id: id,
          closed: closed,
        },
      },
    });
  }
}
