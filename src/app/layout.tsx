import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Icons',
	description: ' SVG icon URLs, courtesy of react-icons',
	icons: {
		icon: '/fa/FaReact?fill=dodgerblue',
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
