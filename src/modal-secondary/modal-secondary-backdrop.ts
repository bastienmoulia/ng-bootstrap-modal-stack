import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngb-modal-secondary-backdrop',
  template: '',
  host:
      {'[class]': '"modal-backdrop modal-secondary-backdrop fade show" + (backdropClass ? " " + backdropClass : "")'}
})
export class NgbModalSecondaryBackdrop {
  @Input() backdropClass: string;
}
