import PartnershipImage from '@assets/partnership'

interface CustomProps {
	className?: string
}
export default function Partnership({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='py-8 flex justify-center items-center flex-order'>
				<PartnershipImage className='w-[130%] md:w-[50%] h-auto lg:ml-[-64px] lg:mr-[-32px]' />
				<div className='max-w-md flex flex-col gap-5 text-center'>
					<h2 className='text-title2'>Partnership with Petrobras</h2>
					<p className='text-body'>
						Solution being utilized for <strong>decision making </strong>in the{' '}
						<strong>largest oil company in Brazil </strong>following a joint
						development effort between WIKKI and Petrobras.
					</p>
				</div>
			</section>
		</div>
	)
}
