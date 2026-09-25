import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils.spec';

describe('utils tests', () => {
  describe('getCurrentYear', () => {
    test('returns the correct current year dynamically without time bomb', () => {
      const currentYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    test('returns "Holberton School" when argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('returns the correct notification string', () => {
      expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
    });
  });
});
