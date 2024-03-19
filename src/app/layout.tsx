import type { Metadata } from 'next';
import { Grommet, Page, PageContent } from 'grommet';

import { roboto_flex } from '@/fonts';
import { theme } from '@/theme';
import '@/styles/globals.css';
import { HeaderNav } from '@/components';

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
        <Grommet theme={theme} full>
          <Page>
            <HeaderNav>Quad Trick Exchange</HeaderNav>

            <PageContent>{children}</PageContent>

            <p>
              &copy;{' '}
              <a href="https://sparkbird.works" target="_blank">
                Sparkbird Works LLC
              </a>
              , 2024
            </p>
          </Page>
        </Grommet>
      </body>
    </html>
  );
}
