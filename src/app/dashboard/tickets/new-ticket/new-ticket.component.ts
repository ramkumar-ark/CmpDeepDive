import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('ticketForm')
  // private ticketForm?: ElementRef<HTMLFormElement>;
  private ticketForm =
    viewChild.required<ElementRef<HTMLFormElement>>('ticketForm');
  onSubmit() {
    this.ticketForm().nativeElement.reset();
  }
}
