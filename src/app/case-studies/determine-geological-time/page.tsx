import Header from '@components/header'
import Footer from '@components/footer'
import Image from 'next/image'

export default function FinancialImpactOnWellDowntime() {
	return (
		<div className=' flex flex-col justify-between items-center'>
			<Header />
			<section className='py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>Determine Geological Time</h1>
						<p className='text-body'>
							Strategic use of valve positioning in smart completions shows
							gains of up to 4 Million USD per well.
						</p>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/problem02-hero.png'
						width={834}
						height={556}
						alt='hero image'
						className='absolute h-[130%] w-screen object-cover overflow-visible !important'
						priority
					/>
				</div>
			</section>
			<div className='w-full bg-card padding'>
				<p className='max-w-186 m-auto py-24 text-justify text-5'>
					A notable example of the consequences of inadequate geological
					assessment occurred in 2008 when Statoil (now Equinor) implemented the
					world’s first SSBI (subsea separation, boosting, and injection)
					facility in the Tordis field on the Norwegian Continental Shelf. This
					ambitious £100 million installation was designed to increase recovery
					rates from 49% to 55%, with an expected gain of 35 million additional
					barrels of oil. Despite its promise, the project faced significant
					setbacks due to mischaracterized reservoir conditions, which
					ultimately led to operational failures and financial losses. <br />
					<br />
					Further investigations revealed that water injected into the Utsira
					Group reservoir was instead diverted into deeper turbidite layers with
					poor reservoir quality. The unexpected permeability differences
					resulted in high injection pressures that fractured overlying shales,
					leading to leakage onto the seabed. This posed environmental concerns
					in addition to technical and economic setbacks. The primary cause of
					these failures was a lack of thorough geological evaluation, which led
					to incorrect assumptions about the reservoir’s stratigraphy and its
					fluid migration pathways. <br />
					<br />
					Initial geological assessments had incorrectly identified the presence
					of the Utsira Group, a high-quality sand reservoir commonly used for
					water injection in the North Sea. However, later biostratigraphic
					studies confirmed its absence in the Tordis field, revealing that the
					injected water was being misdirected into formations with
					significantly lower porosity and permeability. This
					mischaracterization severely impacted the facility’s ability to
					enhance oil recovery, turning what was meant to be a pioneering
					project into a cautionary tale for future offshore developments.{' '}
					<br />
					<br />
					The case highlights the critical role of biostratigraphic analysis in
					petroleum exploration and production. By analyzing microfossil
					assemblages, palynology, and other biostratigraphic markers,
					geologists can establish precise stratigraphic correlations, ensuring
					accurate reservoir characterization. The use of AI to automate the
					process of identifying microfossils can save experts a significant
					amount of time, which can result in significant savings in exploratory
					operations. <br />
					<br />
					Another key benefit of improved biostratigraphic integration is better
					decision-making in drilling and production operations. Real-time data
					provides a more detailed and dynamic understanding of subsurface
					conditions, allowing operators to make adjustments to drilling and
					injection strategies as needed. This proactive approach minimizes
					risks associated with unexpected geological variations and optimizes
					hydrocarbon recovery. <br />
					<br />
					In offshore environments, where drilling costs are exceptionally high,
					accurate stratigraphic analysis is crucial to avoiding dry wells,
					misdirected injections, and reservoir damage. Biostratigraphy serves
					as an invaluable tool in reducing geological uncertainty,
					complementing seismic and petrophysical data to enhance exploration
					success. The Statoil case demonstrates that even with advanced
					engineering solutions, flawed geological assumptions can lead to
					costly interventions and diminished project viability. <br />
					<br />
					Beyond cost savings, biostratigraphic analysis also plays a key role
					in environmental risk mitigation. The leakage of injected water at
					Tordis highlighted the dangers of over-pressurization due to poor
					reservoir characterization. Proper stratigraphic evaluation would have
					helped avoid such environmental hazards by ensuring that injection
					strategies aligned with actual reservoir conditions. <br />
					<br />
					In an era where the oil and gas industry faces increasing scrutiny
					over environmental impact, the importance of accurate geological
					assessment cannot be overstated. Reliable biostratigraphic analysis
					contributes to sustainable resource extraction by minimizing waste,
					reducing intervention needs, and preventing incidents that could lead
					to regulatory penalties or reputational damage. <br />
					<br />
					The lessons from the Tordis project underscore that biostratigraphy
					should be an integral part of any reservoir characterization workflow.
					By incorporating high-resolution biostratigraphic data into
					exploration and production strategies, companies can mitigate
					geological risks, enhance recovery efficiency, and ensure the
					long-term viability of offshore developments. The failure at Tordis
					ultimately serves as a compelling argument for the widespread adoption
					of biostratigraphic methodologies in the oil and gas sector.
				</p>
			</div>

			<Footer />
		</div>
	)
}
