import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyAndEventBindingComponent } from './property-and-event-binding/property-and-event-binding.component';
import { StructuralDirectivesComponent } from '../directives/structural-directives.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChildParentTransferComponent } from './child-parent-transfer/child-parent-transfer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LifecyleHooksComponent } from './lifecyle-hooks/lifecyle-hooks.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { IngPipe } from '../custom-pipe/ing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyAndEventBindingComponent,
    StructuralDirectivesComponent,
    TwoWayDataBindingComponent,
    PipesComponent,
    ChildParentTransferComponent,
    ContentProjectionComponent,
    LifecyleHooksComponent,
    HighlightDirective,
    IngPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
