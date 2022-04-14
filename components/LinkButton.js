const LinkButton = ({
  href = "",
  text = "button",
}) => (
  <a 
    href={href}
    className='border-2 border-stone-200 rounded-lg py-2 font-normal text-base text-center leading-tight tracking-wider uppercase transition-all hover:bg-stone-200 hover:text-black active:outline active:outline-2 active:outline-offset-4 active:outline-stone-200'
    target='_blank'
    rel='noreferrer'
  >
    {text}
  </a>
)
 
export default LinkButton;