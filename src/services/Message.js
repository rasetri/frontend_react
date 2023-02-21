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
                id name
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

  userGetTickets(id, closed) {
    return this.client.query({
      query: gql`
        query ticketsConnection($where: JSON!) {
          ticketsConnection(where: $where) {
             {
              id
              message
              created_at
              updated_at
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
          closed: closed
        },
      },
    });
  }
}
