import Header from '@components/header'
import Footer from '@components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function TheHighCostOfInaccuracy() {
	return (
		<div className=' flex flex-col justify-between items-center'>
			<Header />
			<section className='py-28 padding flex gap-8 lg:gap-0 flex-order flex-grow max-w-[1760px] justify-between items-center w-full'>
				<div className='lg:max-w-2xl flex flex-col gap-12 lg:pr-10 z-10'>
					<div className='flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-header'>Assisting Well Placement</h1>
						<p className='text-body'>
							In offshore operations, well positioning errors can cost up to
							$200 million. Biostratigraphy helps prevent such losses.
						</p>
					</div>
				</div>
				<div className='relative w-screen h-125 flex items-center justify-center overflow-visible !important'>
					<Image
						src='/problem01-hero.png'
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
					Offshore oil exploration faces significant challenges, including
					optimizing well placement, reducing nonproductive drilling, and
					minimizing the high costs associated with offshore operations. In this
					context, the adoption of advanced biostratigraphy analysis, integrated
					with geoscience-based predictive models, has proven to be an effective
					solution for enhancing well positioning and reducing overall drilling
					expenditures. <br />
					<br />
					Biostratigraphy enables precise determination of geological age and
					depositional environments by analyzing microfossils present in rock
					samples. This allows geologists to infer the presence of
					hydrocarbon-bearing zones with greater accuracy. However, effectively
					utilizing this data requires sophisticated analytical tools.
					Specialized software, employing stratigraphic modeling and machine
					learning, enables the prediction of optimal drilling targets, reducing
					uncertainty and increasing operational efficiency. <br />
					<br />
					The implementation of this technology allows for better well
					placement, minimizing the need for costly sidetracks or over-drilling.
					As a result, exploration teams can achieve more accurate reservoir
					penetration, leading to a significant reduction in unnecessary
					drilling. For example, in wells with an average depth of 7,250 meters,
					a 5–10% decrease in nonproductive drilling—equivalent to eliminating
					360–720 meters of unnecessary drilling—can generate savings of $8.2 to
					$16.3 million per well, based on high-end cost estimates of $22,700
					per meter. Even at the lower estimated cost of $14,200 per meter, the
					savings would still range from $5.2 to $10.4 million per well{' '}
					<Link
						href={
							'https://www.researchgate.net/publication/348188528_A_Review_of_Exploration_Development_and_Production_Cost_Offshore_Newfoundland'
						}
						className='text-blue-600 hover:text-black'
					>
						(M. J. Kaiser, 2021)
					</Link>
					. <br />
					<br />
					Another key benefit is improved decision-making, as real-time
					biostratigraphic analysis provides a more detailed understanding of
					subsurface conditions. This allows operators to adjust drilling
					strategies dynamically, prioritizing the most promising zones and
					avoiding unnecessary interventions. In deepwater projects where
					individual well costs range between $150 and $200 million, these
					savings become particularly relevant, significantly enhancing project
					feasibility and profitability (SHALE OIL AND GAS HANDBOOK, 2017).{' '}
					<br />
					<br />
					Case studies indicate that companies that have integrated advanced
					biostratigraphic analysis into their exploration programs have
					achieved substantial cost reductions and improved drilling success
					rates. A study covering exploration wells drilled between 1998 and
					2018 showed that wells with enhanced stratigraphic control experienced
					lower overall drilling costs and higher reservoir contact efficiency,
					demonstrating the tangible benefits of this approach{' '}
					<Link
						href={
							'https://www.researchgate.net/publication/348188528_A_Review_of_Exploration_Development_and_Production_Cost_Offshore_Newfoundland'
						}
						className='text-blue-600 hover:text-black'
					>
						(M. J. Kaiser, 2021)
					</Link>
					. <br />
					<br />
					The integration of advanced biostratigraphy with specialized software
					represents a strategic advancement for offshore exploration. The
					ability to refine well positioning and dynamically adjust drilling
					operations not only maximizes efficiency but also promotes more
					sustainable and economically viable oil extraction in complex
					geological settings, as evidenced by industry applications and
					technical literature.
				</p>
			</div>

			<Footer />
		</div>
	)
}
