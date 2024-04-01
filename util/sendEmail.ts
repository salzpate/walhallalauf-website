import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { APIResponse } from 'mailersend/lib/services/request.service';

export const sendEmail = async (from: string, text: string): Promise<APIResponse> => {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY as string,
  });

  const sentFrom = new Sender('orga@walhallalauf.de', 'Walhallalauf-Homepage <orga@walhallalauf.de>');

  const recipients = [new Recipient('orga@walhallalauf.de', 'orga@walhallalauf.de')];

  const replyTo = new Recipient(from, from);

  const emailParams = new EmailParams().setFrom(sentFrom).setTo(recipients).setReplyTo(replyTo).setSubject('E-Mail Anfrage aus der Walhallalauf-Homepage').setText(text);

  return mailerSend.email.send(emailParams);
};
