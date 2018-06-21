import {DOCUMENT} from '@angular/common';
import {
  ApplicationRef,
  Injectable,
  Injector,
  Inject,
  ReflectiveInjector,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef
} from '@angular/core';

import {ContentRef} from '../util/popup';
import {isDefined, isString} from '../util/util';

import {NgbModalSecondaryBackdrop} from './modal-secondary-backdrop';
import {NgbModalSecondaryWindow} from './modal-secondary-window';
import {NgbActiveModalSecondary, NgbModalSecondaryRef} from './modal-secondary-ref';

@Injectable()
export class NgbModalSecondaryStack {
  private _document: any;
  private _windowAttributes = ['backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
  private _backdropAttributes = ['backdropClass'];

  constructor(
      private _applicationRef: ApplicationRef, private _injector: Injector,
      private _componentFactoryResolver: ComponentFactoryResolver, @Inject(DOCUMENT) document) {
    this._document = document;
  }

  open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options): NgbModalSecondaryRef {
    const containerEl =
        isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;

    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }

    const activeModal = new NgbActiveModalSecondary();
    const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);

    let backdropCmptRef: ComponentRef<NgbModalSecondaryBackdrop> =
        options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
    let windowCmptRef: ComponentRef<NgbModalSecondaryWindow> = this._attachWindowComponent(containerEl, contentRef);
    // tslint:disable-next-line:max-line-length
    let ngbModalRef: NgbModalSecondaryRef = new NgbModalSecondaryRef(<any>windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    activeModal.close = (result: any) => { ngbModalRef.close(result); };
    activeModal.dismiss = (reason: any) => { ngbModalRef.dismiss(reason); };

    this._applyWindowOptions(windowCmptRef.instance, options);

    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
    }
    return ngbModalRef;
  }

  private _attachBackdrop(containerEl: any): ComponentRef<NgbModalSecondaryBackdrop> {
    let backdropFactory: ComponentFactory<NgbModalSecondaryBackdrop> =
        this._componentFactoryResolver.resolveComponentFactory(NgbModalSecondaryBackdrop);
    let backdropCmptRef = backdropFactory.create(this._injector);
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }

  private _attachWindowComponent(containerEl: any, contentRef: any): ComponentRef<NgbModalSecondaryWindow> {
    let windowFactory = this._componentFactoryResolver.resolveComponentFactory(NgbModalSecondaryWindow);
    let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }

  private _applyWindowOptions(windowInstance: NgbModalSecondaryWindow, options: Object): void {
    this._windowAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }

  private _applyBackdropOptions(backdropInstance: NgbModalSecondaryBackdrop, options: Object): void {
    this._backdropAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }

  private _getContentRef(
      moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
      context: NgbActiveModalSecondary): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, context);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(moduleCFR, contentInjector, content, context);
    }
  }

  private _createFromTemplateRef(content: TemplateRef<any>, context: NgbActiveModalSecondary): ContentRef {
    const viewRef = content.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }

  private _createFromString(content: string): ContentRef {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }

  private _createFromComponent(
      moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
      context: NgbActiveModalSecondary): ContentRef {
    const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
    const modalContentInjector =
        ReflectiveInjector.resolveAndCreate([{provide: NgbActiveModalSecondary, useValue: context}], contentInjector);
    const componentRef = contentCmptFactory.create(modalContentInjector);
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
  }
}
