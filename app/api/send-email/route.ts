import { NextResponse } from 'next/server';

import { sendEmail } from 'util/sendEmail';

export async function POST(request: Request): Promise<
  NextResponse<{
    status: string;
    message: string;
  }>
> {
  const regexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
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

  return sendEmail(antwort, text)
    .then(() => {
      return NextResponse.json({ status: 'success', message: 'Ihre Nachricht wurde erfolgreich versendet.' });
    })
    .catch(error => {
      console.error('Email send error:', error);
      return NextResponse.json({ status: 'error', message: 'Beim Versenden Ihre Nachricht ist ein Fehler aufgetreten!' });
    });
}
