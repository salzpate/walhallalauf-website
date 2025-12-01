import { describe, it, expect, vi } from 'vitest';

// Mock environment variables before importing
vi.stubEnv('SANITY_DATASET', 'test-dataset');
vi.stubEnv('SANITY_PROJECT_ID', 'test-project-id');

describe('sanityClient', () => {
  it('should export dataset from environment', async () => {
    const { dataset } = await import('./sanityClient');
    expect(dataset).toBe('test-dataset');
  });

  it('should export projectId from environment', async () => {
    const { projectId } = await import('./sanityClient');
    expect(projectId).toBe('test-project-id');
  });

  it('should create sanity client', async () => {
    const { client } = await import('./sanityClient');
    expect(client).toBeDefined();
    expect(client.config()).toMatchObject({
      apiVersion: '2025-03-04',
      useCdn: false,
    });
  });
});
