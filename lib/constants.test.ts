import { describe, it, expect } from 'vitest';
import { SITE_URL, SITE_TITLE, SITE_DESC, HEADER_LINE_1, HEADER_LINE_2, START_TIME_10, START_TIME_7, START_TIME_5, START_TIME_NORDIC, START_TIME_KIDS_1000, START_TIME_KIDS_400, START_TIME_KIDS_600 } from './constants';

describe('constants', () => {
  it('should export SITE_URL', () => {
    expect(SITE_URL).toBe('https://www.walhallalauf.de');
  });

  it('should export SITE_TITLE', () => {
    expect(SITE_TITLE).toBe('Walhallalauf - Ausdauer - SV Donaustauf');
  });

  it('should export SITE_DESC', () => {
    expect(SITE_DESC).toBe('Der Lauf am Fuße der Walhalla.');
  });

  it('should export HEADER_LINE_1', () => {
    expect(HEADER_LINE_1).toBe('15. Walhallalauf');
  });

  it('should export HEADER_LINE_2', () => {
    expect(HEADER_LINE_2).toBe('26.04.2026');
  });

  it('should export all start times', () => {
    expect(START_TIME_10).toBe('13:35 Uhr');
    expect(START_TIME_7).toBe('11:45 Uhr');
    expect(START_TIME_5).toBe('13:45 Uhr');
    expect(START_TIME_NORDIC).toBe('11:50 Uhr');
    expect(START_TIME_KIDS_1000).toBe('10:50 Uhr');
    expect(START_TIME_KIDS_400).toBe('10:15 Uhr');
    expect(START_TIME_KIDS_600).toBe('10:30 Uhr');
  });
});
