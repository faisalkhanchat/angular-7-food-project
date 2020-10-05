import { AddNotificationModule } from './add-notification.module';

describe('AddNotificationModule', () => {
  let addNotificationModule: AddNotificationModule;

  beforeEach(() => {
    addNotificationModule = new AddNotificationModule();
  });

  it('should create an instance', () => {
    expect(addNotificationModule).toBeTruthy();
  });
});
