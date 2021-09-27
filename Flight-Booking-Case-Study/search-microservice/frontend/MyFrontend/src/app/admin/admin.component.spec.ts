import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog'
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        MatDialogModule,
      ],
      declarations: [ AdminComponent ]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
