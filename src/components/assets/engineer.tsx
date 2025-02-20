import type { JSX, SVGProps } from 'react'

export default function Engineer(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			className={props.className} // Permite customização via Tailwind/CSS externo
			width={50} // Define valores padrão mas permite customização
			height={50}
			viewBox='0 0 50 50' // Ajuste correto para exibir o SVG inteiro
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			{...props}
		>
			<title>Engineer</title>
			<g fillRule='evenodd' clipRule='evenodd'>
				<path
					d='M89.5 45c0 24.577-19.923 44.5-44.5 44.5S.5 69.577.5 45 20.423.5 45 .5 89.5 20.423 89.5 45z'
					fill='#E5E7EB'
					stroke='url(#a)'
				/>
				<g filter='url(#b)'>
					<path
						d='M78 45c0 18.225-14.775 33-33 33S12 63.225 12 45s14.775-33 33-33 33 14.775 33 33z'
						fill='#fff'
					/>
					<path
						d='M77.25 45c0 17.811-14.439 32.25-32.25 32.25S12.75 62.811 12.75 45 27.189 12.75 45 12.75 77.25 27.189 77.25 45z'
						stroke='#D1D5DC'
						strokeWidth='1.5'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M45.73 28.33c-.192-.191-.519-.354-.764-.327-.245 0-.6.163-.764.354-.163.19-.327.924-.381 1.659l-.055 1.332c-2.344.68-3.135 1.197-4.116 2.203-1.008.98-1.526 1.768-1.8 2.747l-.408 1.36c-2.426.218-2.999.435-3.19.734-.218.354-.218.626 0 .952.191.327.764.544 1.745.626 1.281.109 1.5.218 1.636.816.109.38.436 1.17.763 1.768.3.598.9 1.414 1.336 1.822.409.38 1.308 1.006 1.99 1.36.981.49 1.663.625 3.271.625 1.663 0 2.29-.136 3.408-.734.736-.38 1.69-1.06 2.071-1.496.382-.408.873-1.06 1.118-1.441.245-.381.545-1.115.681-1.632.246-.925.3-.952 1.718-1.088.981-.082 1.554-.3 1.745-.598.218-.354.218-.626 0-.952-.191-.327-.764-.544-1.745-.626-1.281-.109-1.5-.217-1.636-.816-.109-.38-.436-1.17-.736-1.768-.3-.598-1.09-1.55-1.744-2.121-.655-.571-1.745-1.197-2.426-1.387-1.227-.354-1.227-.354-1.309-1.686-.054-.735-.245-1.496-.409-1.687zm-3.19 15.366c-.655-.326-1.554-1.088-1.963-1.686-.436-.599-.763-1.306-.763-1.578 0-.435.436-.462 10.631-.462l-.327.87c-.19.49-.763 1.333-1.309 1.85-.517.516-1.444 1.115-2.044 1.278-.6.19-1.527.353-2.044.353-.518 0-1.5-.271-2.181-.625zM48.264 47.15c-.981-.218-2.508-.353-3.407-.353-.9 0-2.426.19-3.408.408-.981.19-2.562.761-3.544 1.25-1.172.544-2.426 1.524-3.707 2.775-1.336 1.332-2.18 2.475-2.753 3.699-.464.979-.982 2.42-1.145 3.182-.164.789-.3 1.85-.3 2.312 0 .49.136 1.06.327 1.25.273.273 3.49.327 14.666.327 11.122 0 14.42-.082 14.666-.354.19-.163.327-.761.327-1.278s-.19-1.686-.436-2.584c-.218-.897-.736-2.311-1.145-3.127-.409-.87-1.526-2.312-2.644-3.427-1.363-1.387-2.454-2.176-3.817-2.829-1.036-.49-2.698-1.06-3.68-1.25zm-8.968 5.684c-.164.19-.273 1.197-.218 2.475.027 1.687.163 2.203.517 2.448.355.218.627.218.955 0 .381-.245.518-.761.545-2.448.054-1.432-.036-2.266-.273-2.502-.163-.19-.518-.353-.763-.326-.245 0-.6.163-.763.353zm9.813 0c-.163.19-.272 1.197-.218 2.475.028 1.687.164 2.203.518 2.448.355.218.627.218.954 0 .382-.245.518-.761.545-2.448.055-1.432-.036-2.266-.272-2.502-.164-.19-.518-.353-.763-.326-.246 0-.6.163-.764.353z'
					fill='#000'
				/>
				<defs>
					<linearGradient
						id='a'
						x1='45'
						y1='0'
						x2='45'
						y2='90'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#D1D5DC' stopOpacity='.2' />
						<stop offset='1' stop-color='#D1D5DC' />
					</linearGradient>
					<filter
						id='b'
						x='0'
						y='6'
						width='90'
						height='90'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='6' />
						<feGaussianBlur stdDeviation='6' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0' />
						<feBlend
							in2='BackgroundImageFix'
							result='effect1_dropShadow_240_6277'
						/>
						<feBlend
							in='SourceGraphic'
							in2='effect1_dropShadow_240_6277'
							result='shape'
						/>
					</filter>
				</defs>
			</g>
		</svg>
	)
}
