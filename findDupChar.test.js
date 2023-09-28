const findDupChar = require('./findDupChar');

describe('findDupChar', () => {
  it('should find characters occurring exactly twice', () => {
    expect(findDupChar('hello')).toEqual(['l']);
    expect(findDupChar('aabbc')).toEqual(['a', 'b']);
    expect(findDupChar('AaBbCc')).toEqual(['a', 'b', 'c']);
    expect(findDupChar('racecar')).toEqual(['r', 'a', 'c']);
  });

  it('should handle an empty string', () => {
    expect(findDupChar('')).toEqual([]);
  });

  it('should handle a string with no characters occurring exactly twice', () => {
    expect(findDupChar('world')).toEqual([]);
  });

  it('should handle a string with only spaces', () => {
    expect(findDupChar(' ')).toEqual([]);
  });

  it('should handle a single character string', () => {
    expect(findDupChar('a')).toEqual([]);
  });

  it('should handle a string with special characters', () => {
    expect(findDupChar('@#$%^')).toEqual([]);
  });
});
