import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@microservices-shared/services";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
