import {NgbActiveModal, NgbModalRef} from '../modal/modal-ref';

/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
export class NgbActiveModalSecondary extends NgbActiveModal {}

/**
 * A reference to a newly opened modal.
 */
export class NgbModalSecondaryRef extends NgbModalRef {}
