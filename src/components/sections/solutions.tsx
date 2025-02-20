import Image from 'next/image'

interface CustomProps {
	className?: string
}
export default function Solutions({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='solution'
				className='py-10 md:py-28 flex flex-order gap-12 md:gap-24 lg:gap-0 justify-center items-center'
			>
				<div className='w-screen relative h-75 lg:-left-16 lg:mx-[-32px] flex justify-center items-center overflow-visible !important'>
					<Image
						src={'/solutions.png'}
						fill
						alt='hero image'
						className='absolute h-[150%] w-auto object-cover overflow-visible !important'
					/>
				</div>
				<div className='flex flex-col gap-12 lg:pl-24 w-full'>
					<div className='flex flex-col gap-4 text-center items-center lg:items-start lg:text-left'>
						<h2 className='text-title1 lg:max-w-md'>
							Save millions in drilling and time
						</h2>
						<p className='text-body lg:max-w-lg'>
							With our unique solution and real-time data, the operator will be
							able to estimate production by zone to plan valve movements for
							greater productivity.
						</p>
					</div>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/ai.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Automatic identification of microfossils using AI in web
								software
							</p>
						</div>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/report.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Web based automated Reports containing key information for
								assist well placement
							</p>
						</div>
						<div className='flex flex-row gap-4 items-center'>
							<Image
								src={'/well.png'}
								width={50}
								height={50}
								alt='hero image'
								className='object-cover'
							/>
							<p className='text-body'>
								Similarity search of microfossil specimens in an integrated
								database
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
