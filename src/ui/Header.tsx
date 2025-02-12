import Link from 'next/link'
import AddressBar from '@/ui/AddressBar'
import { iconsets } from '@/lib/manifest'
import IconsetButton from './IconsetButton'

export default function Header() {
	return (
		<header className="flex">
			<h1>
				<Link href="/">ic0n.dev</Link>
			</h1>

			<div className="relative">
				<AddressBar />

				<menu className="absolute top-full left-[1ch] columns-4 gap-0">
					{iconsets.map((iconset) => (
						<li key={iconset}>
							<IconsetButton iconset={iconset} />
						</li>
					))}
				</menu>
			</div>
		</header>
	)
}
