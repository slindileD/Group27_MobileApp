import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWaterWorldWaterToCartPage } from './add-water-world-water-to-cart.page';

describe('AddWaterWorldWaterToCartPage', () => {
  let component: AddWaterWorldWaterToCartPage;
  let fixture: ComponentFixture<AddWaterWorldWaterToCartPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWaterWorldWaterToCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWaterWorldWaterToCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
