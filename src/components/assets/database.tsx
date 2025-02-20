import type { JSX, SVGProps } from 'react'

export default function Database(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			className={props.className} // Permite customização via Tailwind/CSS externo
			width={props.width || '32'} // Define valores padrão mas permite customização
			height={props.height || '32'}
			viewBox='0 0 32 32' // Ajuste correto para exibir o SVG inteiro
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			{...props}
		>
			<title>Report</title>
			<g fillRule='evenodd' clipRule='evenodd'>
				<path
					d='M29.3327 7.3335C29.3327 7.3335 29.3327 24.0417 29.3327 25.3335C29.3327 27.5426 23.3631 29.3335 15.9993 29.3335C8.63555 29.3335 2.66604 27.5426 2.66604 25.3335C2.66604 24.095 2.66602 7.3335 2.66602 7.3335'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29.3327 19.3335C29.3327 21.5426 23.3631 23.3335 15.9993 23.3335C8.63555 23.3335 2.66602 21.5426 2.66602 19.3335'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29.3327 13.3335C29.3327 15.5426 23.3631 17.3335 15.9993 17.3335C8.63555 17.3335 2.66602 15.5426 2.66602 13.3335'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.9993 10.6665C23.3631 10.6665 29.3327 8.87564 29.3327 6.6665C29.3327 4.45736 23.3631 2.6665 15.9993 2.6665C8.63555 2.6665 2.66602 4.45736 2.66602 6.6665C2.66602 8.87564 8.63555 10.6665 15.9993 10.6665Z'
					fill='black'
					stroke='black'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</svg>
	)
}
