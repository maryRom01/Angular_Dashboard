import { ConvertBytes } from "./convert-bytes.pipe";

describe('ConvertBytesPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new ConvertBytes();

  it('transforms "80000, 3, true" to "80.000 KB"', () => {
    expect(pipe.transform(80000, 3, true)).toBe('80.000 KB');
  });

  it('transforms "0" to "0.00 bytes"', () => {
    expect(pipe.transform(0)).toBe('0.00 bytes');
  });

  it('transforms "1350000, 5" to "1.35000 megabytes"', () => {
    expect(pipe.transform(1350000, 5)).toBe('1.35000 megabytes');
  });

  it('transforms "1344450000, 1, true" to "1.3 GB"', () => {
    expect(pipe.transform(1344450000, 1, true)).toBe('1.3 GB');
  });

});
