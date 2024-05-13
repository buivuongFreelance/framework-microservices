import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@microservices-shared/services";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
