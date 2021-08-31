import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegenerateOrderReceiptPage } from './regenerate-order-receipt.page';

describe('RegenerateOrderReceiptPage', () => {
  let component: RegenerateOrderReceiptPage;
  let fixture: ComponentFixture<RegenerateOrderReceiptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegenerateOrderReceiptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegenerateOrderReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
