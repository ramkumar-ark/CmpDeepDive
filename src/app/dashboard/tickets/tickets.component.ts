import { Component, signal } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { NewTicket } from './new-ticket/new-ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  addTicket(newTicket: NewTicket) {
    const ticket: Ticket = {
      id: Math.random() * Math.random() * 100000 + '',
      title: newTicket.title,
      request: newTicket.request,
      status: 'open',
    };
    this.tickets.update((currentTickets) => [...currentTickets, ticket]);
  }

  markTicketAsCompleted(ticketId: string) {
    this.tickets.update((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: 'closed' } : ticket
      )
    );
  }
}
