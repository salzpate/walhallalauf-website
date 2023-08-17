import { redirect } from 'next/navigation';

export async function GET() {
  redirect('mailto:1.vorstand@sv-donaustauf.de');
}
