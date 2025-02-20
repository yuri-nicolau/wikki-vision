import Image from 'next/image'

interface CustomProps {
	className?: string
}
export default function Quote({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='px-6 md:px-12 lg:px-20 xl:px-28 py-12 sm:py-24 md:py-48 flex flex-col gap-28'>
				<div className='flex flex-order gap-[60px] justify-center items-center'>
					<div className='flex flex-row items-center gap-4 min-w-[200px]'>
						<Image
							src={'/rodrigo.jpg'}
							width={56}
							height={56}
							alt='hero image'
							className='shadow rounded-full'
						/>
						<div className='max-w-md flex flex-col text-left'>
							<h2 className='text-title2'>Rodrigo Dias</h2>
							<p className='text-body'>CEO - Wikki</p>
						</div>
					</div>
					<div className='max-w-[700px]'>
						<p className='text-title2'>
							« Hac contractus, progressionem at est mutuum, arcu offecerunt
							odio hac AD poenis at integer jormavit mus dimidium impedimento
							mirum, sequentia saepius debile, scomata sem promotionibus
							innotescet. Quia utrumque ut quia gallicismum mus perpftuam
							inceptos at wisi annihilat neque il expedita te modeste ad
							possumus constituerc ut est constituerc quas me palmam longas dis
							AC detrimenta »
						</p>
					</div>
				</div>
				<div className='flex flex-order gap-[60px] justify-center items-center'>
					<div className='max-w-[700px]'>
						<p className='text-title2 text-right'>
							« Porvigere eum gordius popularitas inriti ac y annuere iste
							debitam te incuriam inscriptionem aequitate hic qui mortem, atque
							sed vero ab w class gubernium. Duis ut leo aut mi lius
							probationes: te dulcedo submissionem te odio contemptus eum
							sacrilegam nam, conferenduin, te institutionis »
						</p>
					</div>
					<div className='flex flex-row items-center gap-4 min-w-[250px]'>
						<div className='max-w-xl flex flex-col text-right'>
							<h2 className='text-title2'>Danilo Colombo</h2>
							<p className='text-body'>
								Reliability Consultant
								<br /> Petrobras - CENPES
							</p>
						</div>
						<Image
							src={'/danilo.jpg'}
							width={56}
							height={56}
							alt='hero image'
							className='shadow rounded-full'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
