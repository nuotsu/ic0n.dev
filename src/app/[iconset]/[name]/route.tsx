import { manifest, type Iconset } from '@/lib/iconManifest'
import { propsToString, renderToStaticMarkup } from '@/lib/utils'

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ iconset: Iconset; name: string }> },
) {
	const { iconset, name } = await params

	const IconComponent = manifest[iconset][name]

	if (!IconComponent) {
		return new Response('Icon not found', { status: 404 })
	}

	const { children, attr } = IconComponent({}).props
	const iconProps = IconComponent({}).type({}).props

	const searchParams = new URL(request.url).searchParams

	const props = {
		stroke: iconProps.stroke,
		fill:
			(searchParams.has('hex') && `#${searchParams.get('hex')}`) ||
			searchParams.get('fill') ||
			iconProps.fill,
		'stroke-width': iconProps.strokeWidth,
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
			},
		},
	)
}
