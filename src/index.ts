import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgbModalModule, NgbModal, NgbModalOptions, NgbModalRef, ModalDismissReasons} from './modal/modal.module';
import {
  NgbModalSecondaryModule,
  NgbModalSecondary,
  NgbModalSecondaryOptions,
  NgbModalSecondaryRef
} from './modal-secondary/modal-secondary.module';

export {
  NgbModalModule,
  NgbModal,
  NgbModalOptions,
  NgbActiveModal,
  NgbModalRef,
  ModalDismissReasons
} from './modal/modal.module';
export {
  NgbModalSecondaryModule,
  NgbModalSecondary,
  NgbModalSecondaryOptions,
  NgbActiveModalSecondary,
  NgbModalSecondaryRef
} from './modal-secondary/modal-secondary.module';

const NGB_MODULES = [NgbModalModule, NgbModalSecondaryModule];

@NgModule({imports: [NgbModalModule.forRoot(), NgbModalSecondaryModule.forRoot()], exports: NGB_MODULES})
export class NgbRootModule {
}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgbModalStackModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbRootModule}; }
}
