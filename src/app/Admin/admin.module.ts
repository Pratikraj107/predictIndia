import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollFormComponent } from './poll-form/poll-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PollTableComponent } from './poll-table/poll-table.component';
import { MatTableModule } from '@angular/material/table';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    PollFormComponent,
    CandidateFormComponent,
    SidenavAdminComponent,
    PollTableComponent,
    CandidateEditComponent,
    CandidateTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule
  ],
  exports:[
    PollFormComponent
  ]
})
export class AdminModule { }
