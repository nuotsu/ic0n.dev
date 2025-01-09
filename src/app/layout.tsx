import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'Icons as <img> tags',
	description: ' SVG icon URLs, courtesy of react-icons',
	icons: {
		icon: '/fa/FaReact?fill=dodgerblue',
	},
	alternates: {
		canonical: 'https://icons.nuotsu.dev',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="grid items-center gap-4">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
