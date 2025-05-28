import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { NewTicket } from './new-ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private ticketForm =
    viewChild.required<ElementRef<HTMLFormElement>>('ticketForm');
  add = output<NewTicket>();
  onSubmit(ticketTitle: string, ticketRequest: string) {
    const newTicket: NewTicket = {
      title: ticketTitle,
      request: ticketRequest,
    };
    this.add.emit(newTicket);
    this.ticketForm().nativeElement.reset();
  }
}
