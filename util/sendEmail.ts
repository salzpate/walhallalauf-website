/* eslint-disable @typescript-eslint/ban-types */
import { ClientResponse, MailService } from '@sendgrid/mail';

export const sendEmail = async (from: string, text: string): Promise<[ClientResponse, {}]> => {
  const sgMail = new MailService();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  return sgMail.send({
    to: 'orga@walhallalauf.de',
    from: 'Walhallalauf-Homepage <orga@walhallalauf.de>',
    replyTo: from,
    subject: 'E-Mail Anfrage aus der Walhallalauf-Homepage',
    text: text,
  });
};
