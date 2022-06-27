import Logo from '../assets/logo.png'

export function Header() {
    return (
        <header className='w-full h-16 flex items-center justify-center bg-element border-b border-gray-900'>
            <img className='w-30' src={Logo} alt="Logo do ignite lab" />
        </header>
    )
}