import type { Metadata } from 'next'
import '@/styles/app.css'

export const metadata: Metadata = {
	title: 'ic0n.dev',
	description:
		'SVG icons as URLs to use in <img> tags, courtesy of react-icons.',
	icons: {
		icon: '/vsc/VscCode?hex=fff',
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
			<body className="bg-canvas text-ink">
				<main>{children}</main>
			</body>
		</html>
	)
}
