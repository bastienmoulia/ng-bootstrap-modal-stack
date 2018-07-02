import {NgModule, ModuleWithProviders} from '@angular/core';

import {
  NgbModalSecondaryModule,
  NgbModalSecondary,
  NgbModalSecondaryOptions,
  NgbModalSecondaryRef
} from './modal-secondary/modal-secondary.module';

export {
  NgbModalSecondaryModule,
  NgbModalSecondary,
  NgbModalSecondaryOptions,
  NgbActiveModalSecondary,
  NgbModalSecondaryRef
} from './modal-secondary/modal-secondary.module';

const NGB_MODULES = [NgbModalSecondaryModule];

@NgModule({imports: [NgbModalSecondaryModule.forRoot()], exports: NGB_MODULES})
export class NgbRootModule {
}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgbModalStackModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbRootModule}; }
}
