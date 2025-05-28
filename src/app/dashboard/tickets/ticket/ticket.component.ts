import { Component, input, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);
  toggleDetails() {
    this.detailsVisible.update((current) => !current);
  }
}
