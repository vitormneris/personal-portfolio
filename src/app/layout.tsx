import './globals.css';

export const metadata = {
    title: 'Portfolio',
    description: 'Portfólio de projetos interdisciplinares',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
