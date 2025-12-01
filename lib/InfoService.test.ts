import { describe, it, expect, vi, beforeEach } from 'vitest';
import infoService, { INFO_QUERY } from './InfoService';
import { client } from './sanityClient';

vi.mock('./sanityClient', () => ({
  client: {
    fetch: vi.fn(),
  },
}));

describe('InfoService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should export INFO_QUERY', () => {
    expect(INFO_QUERY).toBeDefined();
    expect(INFO_QUERY).toContain('*[_type == "info"]');
  });

  it('should fetch infos from sanity', async () => {
    const mockData = [{ _id: '1', title: 'Test Info', message: 'Test Message' }];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(client.fetch).mockResolvedValue(mockData as any);

    const result = await infoService.getInfos();

    expect(client.fetch).toHaveBeenCalledWith(INFO_QUERY, {}, { next: { revalidate: 30 } });
    expect(result).toEqual(mockData);
  });

  it('should handle fetch errors', async () => {
    const error = new Error('Fetch failed');
    vi.mocked(client.fetch).mockRejectedValue(error);

    await expect(infoService.getInfos()).rejects.toThrow('Fetch failed');
  });
});
