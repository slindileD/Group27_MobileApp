import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBulkWaterToCartPage } from './add-bulk-water-to-cart.page';

describe('AddBulkWaterToCartPage', () => {
  let component: AddBulkWaterToCartPage;
  let fixture: ComponentFixture<AddBulkWaterToCartPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulkWaterToCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBulkWaterToCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
