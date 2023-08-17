import { redirect } from 'next/navigation';

export async function GET() {
  redirect('mailto:1.ausdauer@sv-donaustauf.de');
}
