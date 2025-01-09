import pkg from '$/package.json'

export default function Header() {
	return (
		<header className="p-4 text-center">
			<div className="flex flex-wrap items-center justify-center gap-2">
				<h1 className="text-2xl">
					<span className="text-dodgerblue">Icons</span>
					{' as '}
					<code className="text-neutral-400">
						{'<'}
						<span className="text-dodgerblue">img</span>
						{'>'}
					</code>
					{' tags'}
				</h1>

				<code className="rounded bg-neutral-100 px-1 text-xs text-neutral-500">
					v{pkg.version}
				</code>
			</div>

			<p className="text-sm">
				Courtesy of{' '}
				<a
					className="text-react-icons"
					href="https://react-icons.github.io/react-icons/"
				>
					<code>react-icons</code>
				</a>
			</p>

			<a
				className="bg-dodgerblue absolute top-0 right-2 rounded-b-lg p-2 pt-1 shadow-xl md:right-4"
				href="https://github.com/nuotsu/icons"
			>
				<img
					className="size-6"
					src="https://icons.nuotsu.dev/vsc/VscGithub?fill=white"
					alt="GitHub"
				/>
			</a>
		</header>
	)
}
