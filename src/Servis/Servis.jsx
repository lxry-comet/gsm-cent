export default function Whatwedo() {
	return (
		<section className='servis'>
			<div className='container servis__container'>
				<h2 className='servis__title'>NAPISZ O SWOIM PROBLEMIE</h2>
				<textarea type="text" name="message" id="message" placeholder="Opisz tutaj swój problem..." />
				<button>
					WYŚLIJ
				</button>
			</div>
		</section>
	)
}