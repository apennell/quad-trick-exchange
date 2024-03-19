import type { Metadata } from 'next';

import { HeaderNav } from '@/components';
import { roboto_flex } from '@/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Quad Trick Exchange',
  description:
    'A community exchange for sharing aggressive roller skate tricks, collaborating to share names, definitions, and tips.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto_flex.variable}>
      <body>
        <HeaderNav>Quad Trick Exchange</HeaderNav>

        {children}

        <p>
          &copy;{' '}
          <a href="https://sparkbird.works" target="_blank">
            Sparkbird Works LLC
          </a>
          , 2024
        </p>
      </body>
    </html>
  );
}
