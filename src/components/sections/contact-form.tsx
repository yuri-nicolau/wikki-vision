'use client'

import type React from 'react'
import { useState } from 'react'

const handleSubmit = async (
	event: React.FormEvent<HTMLFormElement>,
	setMessageSent: React.Dispatch<React.SetStateAction<boolean>>
) => {
	event.preventDefault() // Impede o comportamento padrão do formulário

	setMessageSent(true)
	setTimeout(() => setMessageSent(false), 5000)

	const form = event.currentTarget
	const formData = new FormData(form)

	form.reset()

	// Envia os dados ao Google Apps Script
	await fetch(
		'https://script.google.com/macros/s/AKfycbxwhAFj6TLOl6RVzFdEW7jFa2yfXJPnVx4v4OMDzP8DCF4SzPKIJAtFTm-0UmbvHVQK/exec',
		{
			method: 'POST',
			body: formData,
		}
	)
}

export default function ContactFormSection() {
	const [messageSent, setMessageSent] = useState(false)

	return (
		<section className='w-full bg-card relative'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 lg:py-30 px-10 lg:px-20 relative gap-16 lg:gap-0'>
				{/* Esquerda - Ilustração */}
				<div className='px-0 xl:px-28 w-full'>
					<div className='flex-1 flex justify-center lg:items-left lg:justify-start max-w-[1536px] mx-auto w-full'>
						<div className='w-120 lg:h-40 rounded-lg flex items-center'>
							<h2 className='text-title1 text-center md:text-left'>
								Contact us to know more!
							</h2>
						</div>
					</div>
				</div>

				{/* Direita - Formulário */}
				<div className='lg:absolute lg:right-20 lg:bottom-[-4rem] bg-white shadow-lg rounded-xl p-8 lg:p-10 max-w-lg w-full lg:w-[400px] lg:translate-y-[20%] h-fit'>
					<h3 className='text-title4'>Contact us</h3>
					<p className='text-body mb-8'>Find out more about INSIGHT</p>

					<form
						className='space-y-4'
						onSubmit={e => handleSubmit(e, setMessageSent)}
					>
						{/* Mensagem de sucesso */}
						{messageSent && (
							<p className='text-green-600 font-bold text-center'>
								Message sent successfully!
							</p>
						)}

						<input
							type='text'
							placeholder='Name'
							name='Name'
							required
							className='w-full px-4 placeholder-body py-3 border border-border rounded-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<input
							type='email'
							placeholder='Email'
							name='Email'
							required
							className='w-full px-4 py-3 border placeholder-body border-border rounded-lg focus:outline-none hover:border-primary focus:ring-2 focus:ring-primary'
						/>
						<textarea
							placeholder='Please type your message here...'
							name='Message'
							required
							className='w-full px-4 py-3 border border-border placeholder-body rounded-lg focus:outline-none hover:border-primary focus:ring-2 focus:ring-primary h-32 resize-none'
						/>
						<button
							type='submit'
							className='text-lg leading-[1.6] px-6 py-4 shadow-md hover:shadow-xl rounded-xl w-full md:text-base transition-all duration-200 hover:opacity-90 bg-primary text-primary-foreground font-bold cursor-pointer'
						>
							Send message
						</button>
					</form>
				</div>
			</div>

			{/* Rodapé - Faixa Escura */}
			<div className='bg-black px-28'>
				<div className='py-8 md:py-20 text-primary-foreground text-center lg:text-left gap-20 max-w-[1536px] mx-auto'>
					<div>
						<h4 className='text-lg font-semibold'>E-mail</h4>
						<p>contact@wikkivision.com</p>
					</div>
				</div>
			</div>
		</section>
	)
}
