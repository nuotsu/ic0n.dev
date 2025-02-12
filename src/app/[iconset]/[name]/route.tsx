import { manifest } from '@/lib/manifest'
import { propsToString, renderToStaticMarkup } from '@/lib/utils'

/**
 * @pattern https://ic0n.dev/<iconset>/<name>?[fill|hex]=<color>
 */
export async function GET(
	request: Request,
	{ params }: { params: Promise<{ iconset: Icon.Set; name: string }> },
) {
	const { iconset, name } = await params

	const IconComponent = manifest[iconset][name]

	if (!IconComponent) {
		return new Response('Icon not found', { status: 404 })
	}

	const { children, attr } = IconComponent({}).props
	const iconProps = IconComponent({}).type({}).props

	const { searchParams } = new URL(request.url)
	const color =
		(searchParams.has('hex') && `#${searchParams.get('hex')}`) ||
		searchParams.get('fill')
	const hasStroke = attr.strokeLinecap || attr.strokeLinejoin

	const props = {
		stroke: hasStroke && color ? color : attr.stroke || 'currentColor',
		'stroke-width': attr.strokeWidth || 0,
		'stroke-linecap': attr.strokeLinecap,
		'stroke-linejoin': attr.strokeLinejoin,
		fill: hasStroke ? 'none' : color || attr.fill,
		viewBox: attr.viewBox,
		height: iconProps.height,
		width: iconProps.width,
		xmlns: iconProps.xmlns,
	}

	return new Response(
		`<svg ${propsToString(props)}>${renderToStaticMarkup({ children })}</svg>`,
		{
			headers: {
				'Content-Type': 'image/svg+xml',
				'Access-Control-Allow-Origin': '*',
			},
		},
	)
}
