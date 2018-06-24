import {Injectable, Injector, ComponentFactoryResolver} from '@angular/core';
import {NgbModal, NgbModalOptions} from '../modal/modal';

import {NgbModalSecondaryStack} from './modal-secondary-stack';

/**
 * Represent options available when opening new modal windows.
 */
export interface NgbModalSecondaryOptions extends NgbModalOptions {}

/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
@Injectable()
export class NgbModalSecondary extends NgbModal {
  constructor(
      private moduleCFR: ComponentFactoryResolver, private injector: Injector,
      private modalStack: NgbModalSecondaryStack) {
    super(moduleCFR, injector, <any>modalStack);
  }
}
