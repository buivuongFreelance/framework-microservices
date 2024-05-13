import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@microservices-shared/services";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
