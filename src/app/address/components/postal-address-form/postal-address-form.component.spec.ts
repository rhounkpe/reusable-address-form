import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAddressFormComponent } from './postal-address-form.component';

describe('PostalAddressFormComponent', () => {
  let component: PostalAddressFormComponent;
  let fixture: ComponentFixture<PostalAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
