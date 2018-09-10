import { SharedModule } from './../shared/shared.module';
import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { MatFormFieldModule,
         MatInputModule, 
         MatIconModule, 
         MatButtonModule, 
         MatCardModule, 
         MatGridListModule 
        } from '@angular/material';


@NgModule({
    declarations: [
        LoginComponent
          ],
      imports: [
        SharedModule,
        CommonModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,        

        // Angular Material
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        //Covalente Teradata
      
      ],
      exports: [
        LoginComponent
      ],
      providers: []

})
export class LoginModule {}