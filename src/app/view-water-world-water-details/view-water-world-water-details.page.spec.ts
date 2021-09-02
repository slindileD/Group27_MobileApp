import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewWaterWorldWaterDetailsPage } from './view-water-world-water-details.page';

describe('ViewWaterWorldWaterDetailsPage', () => {
  let component: ViewWaterWorldWaterDetailsPage;
  let fixture: ComponentFixture<ViewWaterWorldWaterDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWaterWorldWaterDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWaterWorldWaterDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
