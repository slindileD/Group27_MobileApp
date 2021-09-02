import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCartWaterWorldWaterPage } from './view-cart-water-world-water.page';

describe('ViewCartWaterWorldWaterPage', () => {
  let component: ViewCartWaterWorldWaterPage;
  let fixture: ComponentFixture<ViewCartWaterWorldWaterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCartWaterWorldWaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCartWaterWorldWaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
