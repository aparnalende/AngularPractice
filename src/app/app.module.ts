import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ValidateformdemoComponent } from './Forms/validateformdemo/validateformdemo.component';
import { LifecyclemethodsComponent } from './lifecycle/lifecyclemethods/lifecyclemethods.component';
import { ReactiveformComponent } from './Forms/reactiveform/reactiveform.component';
import { ServicedemoComponent } from './services/servicedemo/servicedemo.component';
import { EmployeecrudservicedemoComponent } from './services/employeecrudservicedemo/employeecrudservicedemo.component';
import { RegistrationbuilderComponent } from './Forms/registrationbuilder/registrationbuilder.component';
import { RegisterserviceComponent } from './services/registerservice/registerservice.component';
import { CaptchaService } from './services/registerservice/captcha.service';
import { TemplateForComponentComponent } from './Forms/template-for-component/template-for-component.component';
import { CustomvalidationComponent } from './Forms/customvalidation/customvalidation.component';
import { Observabledemo1Component } from './services/observabledemo1/observabledemo1.component';
import { HttpclientdemoComponent } from './services/httpclientdemo/httpclientdemo.component';
import { ServiceusinghttpclientComponent } from './services/serviceusinghttpclient/serviceusinghttpclient.component';
import { FormArrayDemoComponent } from './Forms/form-array-demo/form-array-demo.component';
// import { StudentComponent } from './Student_Crud_Api/student/student.component';
import { StudentService } from './Student_Crud_Api/student.service';
import { HomeComponent } from './RoutingDemo/home/home.component';
import { AboutComponent } from './RoutingDemo/about/about.component';
import { ContactComponent } from './RoutingDemo/contact/contact.component';
import { NotfoundComponent } from './RoutingDemo/notfound/notfound.component';
import { AbouthomeComponent } from './RoutingDemo/abouthome/abouthome.component';
import { AboutItemComponent } from './RoutingDemo/about-item/about-item.component';
import { ProductComponent } from './RoutingDemo/product/product.component';
import { ProductdetailsComponent } from './RoutingDemo/productdetails/productdetails.component';
import { UserapicompComponent } from './User_Crud_Boot_Api/userapicomp/userapicomp.component';
import { UserFormComponent } from './User_Crud_Boot_Api/user-form/user-form.component';
import { AuthguardGuard } from './authguard.guard';
import { LoginComponent } from './RoutingDemo/login/login.component';
import { LogoutComponent } from './RoutingDemo/logout/logout.component';
import { DashBoardComponent } from './RoutingDemo/dash-board/dash-board.component';
import { FormarrayComponent } from './Forms/formarray/formarray.component';
import { UloadFilesComponent } from './components/uload-files/uload-files.component';
import { DynamicformarrayComponent } from './Forms/dynamicformarray/dynamicformarray.component';
import { SelectdemoComponent } from './Forms/selectdemo/selectdemo.component';
import { LoginbuilderComponent } from './Forms/loginbuilder/loginbuilder.component';
// import { FormarraydemoComponent } from './Forms/formarraydemo/formarraydemo.component';
// import { ArrayformComponent } from './Forms/arrayform/arrayform.component';
// import { ValidationdemoComponent } from './Forms/validationdemo/validationdemo.component';
// import { InputvalidationComponent } from './Forms/inputvalidation/inputvalidation.component';

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
    ValidateformdemoComponent,
    LifecyclemethodsComponent,
    ReactiveformComponent,
    ServicedemoComponent,
    EmployeecrudservicedemoComponent,
    RegistrationbuilderComponent,
    RegisterserviceComponent,
    TemplateForComponentComponent,
    CustomvalidationComponent,
    Observabledemo1Component,
    HttpclientdemoComponent,
    ServiceusinghttpclientComponent,
    FormArrayDemoComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    AbouthomeComponent,
    AboutItemComponent,
    ProductComponent,
    ProductdetailsComponent,
    UserapicompComponent,
    UserFormComponent,
    LoginComponent,
    LogoutComponent,
    DashBoardComponent,
    FormarrayComponent,
    UloadFilesComponent,
    DynamicformarrayComponent,
    SelectdemoComponent,
    LoginbuilderComponent,
    // FormarraydemoComponent,
    // ArrayformComponent,
    // StudentComponent,
    // ValidationdemoComponent,
    // InputvalidationComponent,
  
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CaptchaService,StudentService,AuthguardGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
