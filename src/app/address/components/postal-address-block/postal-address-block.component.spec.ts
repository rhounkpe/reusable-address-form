import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAddressBlockComponent } from './postal-address-block.component';

describe('PostalAddressBlockComponent', () => {
  let component: PostalAddressBlockComponent;
  let fixture: ComponentFixture<PostalAddressBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalAddressBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalAddressBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
