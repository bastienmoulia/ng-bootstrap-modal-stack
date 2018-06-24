
export * from './modal';

import {NgModule} from '@angular/core';

import {NgbdSharedModule} from '../shared';

import {NgbdModalModule} from './modal';

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdModalModule
  ],
  exports: [
    NgbdModalModule
  ]
})
export class NgbdDemoModule {}
