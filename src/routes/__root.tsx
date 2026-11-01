import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import '../styles.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'KIXIONLINE | Poupança colectiva' },
      { name: 'description', content: 'Organize a sua Kixikila com clareza e transparência.' },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="pt-AO">
      <head><HeadContent /></head>
      <body><Outlet /><Scripts /></body>
    </html>
  );
}
