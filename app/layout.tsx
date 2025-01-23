/*
 * @Description: 
 * @Author: Nucleus
 * @Date: 2024-10-22 06:17:11
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/front';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
