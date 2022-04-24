import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './_components/child/child.component';
import {RouterModule} from '@angular/router';
import {RatingsRouting} from '../ratings/ratings.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {httpTranslateLoader} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {AlertModule} from '../../shared/services/_alert';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DataTablesModule} from 'angular-datatables';
import {ChildrenRouting} from './children.routing';
import { ChildClassesComponent } from './_components/child-classes/child-classes.component';

@NgModule({
  declarations: [ChildComponent, ChildClassesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ChildrenRouting),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AlertModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    DataTablesModule,
  ]
})
export class ChildrenModule {
}