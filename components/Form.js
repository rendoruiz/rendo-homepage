import * as React from 'react';

const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const nameMinLength = 1;
const emailMinLength = 5;
const messageMinLength = 2;

const encodeData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Form = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isMessageValid, setIsMessageValid] = React.useState(false);
  const [showInvalidatedInputs, setShowInvalidatedInputs] = React.useState(false);
  
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      
    }
  }

  React.useEffect(() => {
    setIsNameValid(name.length >= nameMinLength ? true : false);
  }, [name]);

  React.useEffect(() => {
    setIsEmailValid((email.length >= emailMinLength && email.includes('@')) && email.includes('.') ? true : false);
  }, [email]);

  React.useEffect(() => {
    setIsMessageValid(message.length >= messageMinLength ? true : false);
  }, [message]);


  return (  
    <>
      <form 
        method='post'
        className='grid content-start gap-4 font-light text-lg tracking-wide'
        onSubmit={handleSubmit}
      >
        <div className='grid gap-1'>
          <label htmlFor='contact-name'>
            Galactic identity
          </label>
          <input 
            type='text'
            id='contact-name'
            name='name'
            placeholder='Space Dog'
            required
            minLength={nameMinLength}
            autoComplete='off'
            className='peer border-2 border-stone-200 rounded-lg px-4 py-2 bg-transparent placeholder:opacity-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-stone-200/50 focus:bg-stone-800'
            value={name}
            onChange={handleNameChange}
          />
          <p className={
            'ml-1 text-sm text-red-400 max-h-0 overflow-hidden transition-all duration-200 ease-out ' +
            ((!isNameValid || (!isNameValid && showInvalidatedInputs)) ? 'peer-focus:max-h-[3rem]' : '')
          }>
            An identity is required
          </p>
        </div>
        
        <div className='grid gap-1'>
          <label htmlFor='contact-email'>
            Galactic electronic mail address
          </label>
          <input 
            type='email'
            id='contact-email'
            name='email'
            required
            minLength={emailMinLength}
            placeholder='dog@space.email'
            className='peer border-2 border-stone-200 rounded-lg px-4 py-2 bg-transparent placeholder:opacity-40 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-stone-200/50 focus:bg-stone-800'
            value={email}
            onChange={handleEmailChange}
          />
          <p className={
            'ml-1 text-sm text-red-400 max-h-0 overflow-hidden transition-all duration-200 ease-out ' +
            ((!isEmailValid || (!isEmailValid && showInvalidatedInputs)) ? 'peer-focus:max-h-[3rem]' : '')
          }>
            A e-mail address is required
          </p>
        </div>

        <div className='grid gap-1'>
          <label htmlFor='contact-message'>
            Galactic message signals
          </label>
          <textarea 
            id='contact-message'
            name='message'
            required
            minLength={messageMinLength}
            placeholder="I'm a cat, too, by the way. Just like you. UwU"
            className='peer border-2 border-stone-200 rounded-lg px-4 py-2 bg-transparent min-h-[120px] max-h-60 placeholder:opacity-40 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-stone-200/50 focus:bg-stone-800'
            value={message}
            onChange={handleMessageChange}
          />
          <p className={
            'ml-1 text-sm text-red-400 max-h-0 overflow-hidden transition-all duration-200 ease-out ' +
            ((!isMessageValid || (!isMessageValid && showInvalidatedInputs)) ? 'peer-focus:max-h-[3rem]' : '')
          }>
            A message is required
          </p>
        </div>

        <button
          type='submit'
          className='border-2 border-stone-200 rounded-lg mt-1 py-2 font-normal text-base text-center leading-tight tracking-wider uppercase transition-all hover:bg-stone-200 hover:text-black active:outline active:outline-2 active:outline-offset-4 active:outline-stone-200'
        >
          Send
        </button>
      </form>
    </>
  );
}

export default Form;