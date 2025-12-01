import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockSend = vi.fn();

interface MockMailerSend {
  email: {
    send: typeof mockSend;
  };
}

interface MockEmailParams {
  setFrom: ReturnType<typeof vi.fn>;
  setTo: ReturnType<typeof vi.fn>;
  setReplyTo: ReturnType<typeof vi.fn>;
  setSubject: ReturnType<typeof vi.fn>;
  setText: ReturnType<typeof vi.fn>;
}

interface MockSenderRecipient {
  email: string;
  name: string;
}

vi.mock('mailersend', () => {
  return {
    MailerSend: vi.fn(function (this: MockMailerSend) {
      this.email = {
        send: mockSend,
      };
    }),
    EmailParams: vi.fn(function (this: MockEmailParams) {
      this.setFrom = vi.fn().mockReturnThis();
      this.setTo = vi.fn().mockReturnThis();
      this.setReplyTo = vi.fn().mockReturnThis();
      this.setSubject = vi.fn().mockReturnThis();
      this.setText = vi.fn().mockReturnThis();
      return this;
    }),
    Sender: vi.fn(function (this: MockSenderRecipient, email: string, name: string) {
      this.email = email;
      this.name = name;
    }),
    Recipient: vi.fn(function (this: MockSenderRecipient, email: string, name: string) {
      this.email = email;
      this.name = name;
    }),
  };
});

vi.stubEnv('MAILERSEND_API_KEY', 'test-api-key');

describe('sendEmail', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should send email with correct parameters', async () => {
    const mockResponse = { statusCode: 200, body: {} };
    mockSend.mockResolvedValue(mockResponse);

    const { sendEmail } = await import('./sendEmail');
    const result = await sendEmail('test@example.com', 'Test message');

    expect(mockSend).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });

  it('should handle send errors', async () => {
    const error = new Error('Send failed');
    mockSend.mockRejectedValue(error);

    const { sendEmail } = await import('./sendEmail');

    await expect(sendEmail('test@example.com', 'Test message')).rejects.toThrow('Send failed');
  });
});
