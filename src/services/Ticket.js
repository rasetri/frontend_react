import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export class TicketService {
  client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    link: createUploadLink({ uri: "http://127.0.0.1:1337/graphql" }),
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
              user_id {
                id
                name
              }
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
          where: { id: id },
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
          ticketsConnection(where: $where, sort: "updated_at:desc", limit: 50) {
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
          user_id: { id: id },
          closed: closed,
        },
      },
    });
  }

  adminGetTickets(closed) {
    return this.client.query({
      query: gql`
        query ticketsConnection($where: JSON!) {
          ticketsConnection(where: $where, sort: "updated_at:desc", limit: 50) {
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

  uploadfile(file) {
    console.log("query", file);
    return this.client.mutate({
      mutation: gql`
        mutation UPLOAD_FILE($file: Upload!) {
          upload(file: $file) {
            id
            url
          }
        }
      `,
      variables: {
        file: file,
      },
    });
  }

  linkFile(file, is_ticket, id) {
    return this.client.mutate({
      mutation: gql`
        mutation createAttachment($input: createAttachmentInput!) {
          createAttachment(input: $input) {
            attachment {
              id
              file
              message_id {id}
              ticket_id {id}
            }
          }
        }
      `,
      variables: {
        input: {
          data: {
            file: file,
            message_id: !is_ticket? id : null,
            ticket_id: is_ticket? id : null
          },
        },
      },
    });
  }

  getFilesByParent(is_ticket, id){
    const forTicket = {ticket_id: id};
    const forMessage = {message_id: id};
    const _where = is_ticket? forTicket : forMessage;

    return this.client.query({
      query: gql`
        query attachmentsConnection($where: JSON!) {
          attachmentsConnection(where: $where, sort: "updated_at:desc") {
            values {
              id
              file
              message_id{id}
              ticket_id{id}
              created_at
              updated_at
            }
          }
        }
      `,
      variables: {
        where: _where,
      },
    });
  }
}
