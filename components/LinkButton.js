const LinkButton = ({
  href = "",
  text = "button",
}) => (
  <a 
    href={href}
    className='border-2 border-stone-200 rounded-lg py-2 text-base uppercase text-center leading-tight tracking-wider'
    target='_blank'
    ref='noreferrer'
  >
    {text}
  </a>
)
 
export default LinkButton;