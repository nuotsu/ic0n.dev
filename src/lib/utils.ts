import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function propsToString(props: Record<string, any>): string {
	return Object.entries(props)
		.filter(([key]) => key !== 'children')
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => {
			// convert camelCase to kebab-case
			const kebabCaseKey =
				key !== 'viewBox' ? key.replace(/([A-Z])/g, '-$1').toLowerCase() : key
			return `${kebabCaseKey}="${value}"`
		})
		.join(' ')
}

export function renderToStaticMarkup({
	children,
}: {
	children: Array<React.ReactElement<Record<string, any>>>
}): string {
	return children
		.map(
			(child) =>
				`<${child.type} ${propsToString(child.props)}>${renderToStaticMarkup({ children: child.props.children })}</${child.type}>`,
		)
		.join('')
}
