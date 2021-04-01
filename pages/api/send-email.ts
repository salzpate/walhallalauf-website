import { NextApiRequest, NextApiResponse  } from 'next';
import { sendEmail } from 'util/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      const { antwort, name, nachricht, email, datenschutz } = req.body;

     if (email) {
      return res.status(200).json({'status': 'success', 'message': 'Ihre Nachricht wurde erfolgreich versendet.'});
     }
     if (!datenschutz) {
      return res.status(200).json({'status': 'error', 'message': 'Sie müssen bestätigen die Datenschutzerklärung gelesen zu haben!'});
     }
     if(!antwort || !regexp.test(antwort)) {
      return res.status(200).json({'status': 'error', 'message': 'Ihre E-Mail Adresse ist nicht valide. Bitte geben Sie eine gültige ein!'});
     }

     let text = `Anfrage über die Walhallalauf-Homepage:

                 Name: ${name}
                 Kontakt: ${antwort}

                 Nachricht:
                 ${nachricht}`;

      await sendEmail(antwort, text)
      .then(() => {
        return res.status(200).json({'status': 'success', 'message': 'Ihre Nachricht wurde erfolgreich versendet.'});
      })
      .catch((error) => {
        return res.status(200).json({'status': 'error', 'message': 'Ihre Nachricht konnte leider nicht versendet werden!'});
      });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}

