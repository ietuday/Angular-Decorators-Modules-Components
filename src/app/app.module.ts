import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { ParentComponent } from './components/parent/parent.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ParentShareComponent } from './components/parent-share/parent-share.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { ChangeCaseDirective } from './directives/changeCase/change-case.directive';
import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageListComponent,
    MessageComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent,
    ParentShareComponent,
    OneComponent,
    TwoComponent,
    BuiltInStrDirComponent,
    BuiltInAttrDirComponent,
    ChangeCaseDirective,
    DirectiveHostComponent,
    UnlessDirective,
    AppendorPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
