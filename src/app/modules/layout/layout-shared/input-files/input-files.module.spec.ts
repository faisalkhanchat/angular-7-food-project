import { InputFilesModule } from './input-files.module';

describe('InputFilesModule', () => {
  let inputFilesModule: InputFilesModule;

  beforeEach(() => {
    inputFilesModule = new InputFilesModule();
  });

  it('should create an instance', () => {
    expect(inputFilesModule).toBeTruthy();
  });
});
