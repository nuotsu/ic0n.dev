import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import type { Metadata } from 'next'
import '@/styles/app.css'

export const metadata: Metadata = {
	title: 'ic0n.dev',
	description:
		'SVG icons as URLs to use in <img> tags, courtesy of react-icons.',
	icons: {
		icon: '/ri/RiCreativeCommonsZeroFill?fill=orangered',
	},
	alternates: {
		canonical: 'https://ic0n.dev',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-canvas text-ink flex min-h-svh flex-col font-mono">
				<Header />

				<main className="grid grow place-content-center">{children}</main>

				<Footer />
			</body>
		</html>
	)
}
