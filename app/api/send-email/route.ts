import { NextResponse } from 'next/server';

import { sendEmail } from 'util/sendEmail';

export async function POST(request: Request): Promise<
  NextResponse<{
    status: string;
    message: string;
  }>
> {
  // eslint-disable-next-line no-useless-escape
  const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const { antwort, name, nachricht, email, datenschutz } = await request.json();

  if (email) {
    return NextResponse.json({ status: 'success', message: 'Ihre Nachricht wurde erfolgreich versendet.' });
  }
  if (!datenschutz) {
    return NextResponse.json({ status: 'error', message: 'Sie müssen bestätigen die Datenschutzerklärung gelesen zu haben!' });
  }
  if (!antwort || !regexp.test(antwort)) {
    return NextResponse.json({ status: 'error', message: 'Ihre E-Mail Adresse ist nicht valide. Bitte geben Sie eine gültige ein!' });
  }

  const text = `Anfrage über die Walhallalauf-Homepage:

                Name: ${name}
                Kontakt: ${antwort}

                Nachricht:
                ${nachricht}`;

  await sendEmail(antwort, text)
    .then(() => {
      return NextResponse.json({ status: 'success', message: 'Ihre Nachricht wurde erfolgreich versendet.' });
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch(_error => {
      return NextResponse.json({ status: 'error', message: 'Beim Versenden Ihre Nachricht ist ein Fehler aufgetreten!' });
    });
  return NextResponse.json({ status: 'error', message: 'Ihre Nachricht konnte leider nicht versendet werden!' });
}
