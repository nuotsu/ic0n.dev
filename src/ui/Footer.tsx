import Courtesy from '@/ui/Courtesy'

export default function Footer() {
	return (
		<footer className="flex flex-wrap justify-between gap-x-[1ch]">
			<Courtesy />

			<div className="text-ink/50 flex gap-x-[1ch]">
				<p>
					Built by{' '}
					<a className="text-ink" href="https://nuotsu.dev">
						nuotsu
					</a>
				</p>
				/
				<a className="hover:text-ink" href="https://github.com/nuotsu/ic0n.dev">
					GitHub
				</a>
			</div>
		</footer>
	)
}
