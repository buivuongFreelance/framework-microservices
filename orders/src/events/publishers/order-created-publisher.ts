import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@microservices-shared/services";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
