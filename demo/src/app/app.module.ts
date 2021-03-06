import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgbModalStackModule} from 'ng-bootstrap-modal-stack';
import {NgbModule} from 'ng-bootstrap/src';

import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NgbdDemoModule} from './components';
import {NgbdSharedModule} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    GettingStarted
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    NgbModalStackModule.forRoot(),
    NgbdDemoModule,
    NgbdSharedModule
  ],
  bootstrap: [AppComponent]
})
export class NgbdModule {
}
