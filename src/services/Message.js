import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export class MessageService {
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  addMessage(message, ticket_id, person_id) {
    return this.client.mutate({
      mutation: gql`
        mutation createTicketMessage($input: createTicketMessageInput!) {
          createTicketMessage(input: $input) {
            ticketMessage {
              id
              message
              person_id {
                id
                name
              }
              created_at
            }
          }
        }
      `,
      variables: {
        input: {
          data: {
            message: message,
            ticket_id: ticket_id,
            person_id: person_id,
          },
        },
      },
    });
  }

  getMessagesByTicket(id) {
    return this.client.query({
      query: gql`
        query ticketMessages($where: JSON!) {
          ticketMessages(where: $where, sort: "id:asc",) {
            id
            message
            created_at
            person_id {
              id
              name
            }
          }
        }
      `,
      variables: {
        where: {
          ticket_id: id,
        },
      },
    });
  }

  adminGetTickets(closed) {
    return this.client.query({
      query: gql`
        query ticketsConnection($where: JSON!) {
          ticketsConnection(where: $where, sort: "id:asc", limit: 50) {
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
        where: {
          closed: closed,
        },
      },
    });
  }
}
