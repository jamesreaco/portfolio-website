import Link from 'next/link'
import { SettingsPayload } from '@/types'
import Logo from '@/components/shared/logo'
import Button from '@/components/shared/button'

interface NavbarProps {
  logoText: SettingsPayload['logoText'] 
  navbarButtonText: SettingsPayload['navbarButtonText']  
  navbarButtonLink: SettingsPayload['navbarButtonLink']   
  navbarMenuItems: SettingsPayload['navbarMenuItems']   
}

export default function Navbar(props: NavbarProps) {
  
  const { 
    logoText, 
    navbarButtonText, 
    navbarButtonLink, 
    navbarMenuItems 
  } = props

  return (
    <header 
      className='z-50 hidden sticky top-0 md:flex backdrop-blur-sm items-center justify-between max-w-8xl mx-auto my-0 py-6 px-6 md:px-12 rounded-bl-xl rounded-br-xl border-b border-b-[#efeff1] bg-[#F6F6F1] bg-opacity-80'
    >
      <Logo text={logoText} />
      <nav>
        <ul className='hidden md:flex gap-12 items-center list-none'>
          {navbarMenuItems.map(item => (
            <li key={item._id}>
              <Link 
                href={`${item.link}`}
                className='text-lg tracking-wider hover:underline underline-offset-[12px] decoration-2'
              >
                {item.title}
              </Link>
           </li>
          ))}
          <li>
            <Button 
              text={navbarButtonText} 
              destination={`${navbarButtonLink}`} 
              variant="dark"
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}