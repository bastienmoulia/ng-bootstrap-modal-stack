import {TestBed} from '@angular/core/testing';

import {NgbModalSecondaryBackdrop} from './modal-secondary-backdrop';

describe('ngb-modal-backdrop', () => {

  beforeEach(() => { TestBed.configureTestingModule({declarations: [NgbModalSecondaryBackdrop]}); });

  it('should render backdrop with required CSS classes', () => {
    const fixture = TestBed.createComponent(NgbModalSecondaryBackdrop);

    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveCssClass('modal-backdrop');
  });
});
