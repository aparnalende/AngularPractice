import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeCrudExampleComponent } from './CRUD/employee-crud-example/employee-crud-example.component';
import { PipedemoComponent } from './pipe/pipedemo/pipedemo.component';
import { PipedemotwoComponent } from './pipe/pipedemotwo/pipedemotwo.component';
import { CustompipePipe } from './pipe/custompipe.pipe';
import { EmployeefilterpipeComponent } from './pipe/employeefilterpipe/employeefilterpipe.component';
import { MyfilterPipe } from './pipe/employeefilterpipe/myfilter.pipe';
import { EmployeepipexamplePipe } from './CRUD/employee-crud-example/employeepipexample.pipe';
import { ProductpipedemoComponent } from './pipe/productpipedemo/productpipedemo.component';
import { CaldiscountPipe } from './pipe/productpipedemo/caldiscount.pipe';
import { MsgdemopipeComponent } from './pipe/msgdemopipe/msgdemopipe.component';
import { SentencePipe } from './pipe/msgdemopipe/sentence.pipe';
import { FilterpanelComponent } from './componentcommunication/filterpanel/filterpanel.component';
import { ProductsdataComponent } from './componentcommunication/productsdata/productsdata.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildforlifecycleComponent } from './lifecycle/childforlifecycle/childforlifecycle.component';
import { ParentforlifecycleComponent } from './lifecycle/parentforlifecycle/parentforlifecycle.component';
import { ParentcycleComponent } from './lifecycle/parentcycle/parentcycle.component';
import { ChildcycleComponent } from './lifecycle/childcycle/childcycle.component';
import { ParentsearchComponent } from './componentcommunication/parentsearch/parentsearch.component';
import { ChildsearchComponent } from './componentcommunication/childsearch/childsearch.component';
import { ContactformComponent } from './Forms/contactform/contactform.component';
import { TemplateformComponent } from './Forms/templateform/templateform.component';

// import { LoginComponent } from './first_demo/login.component';
// import { DemobindingComponent } from './demobinding/demobinding.component';
// import { RegisterdemoComponent } from './registerdemo/registerdemo.component';
// import { DemoComponent } from './demo/demo.component';
// import { CalculatorComponent } from './calculator.component';
// import { EventbindingComponent } from './first_demo/eventbinding.component';
// import { EmployeeComponent } from './Task/employee.component';
// import { LoginComponent } from './Task/login.component';
// import { SalaryslipComponent } from './Task/salaryslip.component';
// import { RegistrationComponent } from './Task/registration.component';
// import { StudentinfoComponent } from './Task/studentinfo.component';
// import { FordemoComponent } from './directives/fordemo.component';
// import { IfdemoComponent } from './directives/ifdemo/ifdemo.component';
// import { FordemoComponent } from './directives/fordemodirective/fordemo1.component';
// import { ProductComponent } from './CRUD/product.component';
// import { StudentComponent } from './CRUD/student.component';
// import { TestswitchComponent } from './directives/testswitch/testswitch.component';
// import { IterationdemoComponent } from './demo/iterationdemo/iterationdemo.component';
// import { IterationandconditionComponent } from './demo/iterationandcondition/iterationandcondition.component';
// import { StyledemoComponent } from './attributedirective/styledemo/styledemo.component';
// import { ClassdemoComponent } from './attributedirective/classdemo/classdemo.component';
// import { ComponentComponent } from './eventbinding/component/component.component';
// import { BrosereventdemoComponent } from './eventbinding/brosereventdemo/brosereventdemo.component';
// import { ChildComponent } from './componentcommunication/child/child.component';
// import { ParentComponent } from './componentcommunication/parent/parent.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeCrudExampleComponent,
    PipedemoComponent,
    PipedemotwoComponent,
    CustompipePipe,
    EmployeefilterpipeComponent,
    MyfilterPipe,
    EmployeepipexamplePipe,
    ProductpipedemoComponent,
    CaldiscountPipe,
    MsgdemopipeComponent,
    SentencePipe,
    FilterpanelComponent,
    ProductsdataComponent,
    LifecycleComponent,
    ChildforlifecycleComponent,
    ParentforlifecycleComponent,
    ParentcycleComponent,
    ChildcycleComponent,
    ParentsearchComponent,
    ChildsearchComponent,
    ContactformComponent,
    TemplateformComponent,
  
    // LoginComponent,
    // DemobindingComponent,
    // RegisterdemoComponent,
    // DemoComponent,
    // CalculatorComponent,
    // EventbindingComponent,
    // EmployeeComponent,
    // RegistrationComponent,
    // StudentinfoComponent,
    // SalaryslipComponent,
    // FordemoComponent,
    // ProductComponent,
    // IfdemoComponent,
    // StudentComponent,
    // TestswitchComponent,
    // IterationdemoComponent,
    // IterationandconditionComponent,
    // StyledemoComponent,
    // ClassdemoComponent,
    // ComponentComponent,
    // BrosereventdemoComponent,
    // ChildComponent,
    // ParentComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
