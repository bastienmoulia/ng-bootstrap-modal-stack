import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgbModalSecondaryBackdrop} from './modal-secondary-backdrop';
import {NgbModalSecondaryWindow} from './modal-secondary-window';
import {NgbModalSecondaryStack} from './modal-secondary-stack';
import {NgbModalSecondary} from './modal-secondary';

export {NgbModalSecondary, NgbModalSecondaryOptions} from './modal-secondary';
export {NgbModalSecondaryRef, NgbActiveModalSecondary} from './modal-secondary-ref';
export {ModalDismissReasons} from './modal-secondary-dismiss-reasons';

@NgModule({
  declarations: [NgbModalSecondaryBackdrop, NgbModalSecondaryWindow],
  entryComponents: [NgbModalSecondaryBackdrop, NgbModalSecondaryWindow],
  providers: [NgbModalSecondary]
})
export class NgbModalSecondaryModule {
  // tslint:disable-next-line:max-line-length
  static forRoot(): ModuleWithProviders { return {ngModule: NgbModalSecondaryModule, providers: [NgbModalSecondary, NgbModalSecondaryStack]}; }
}
