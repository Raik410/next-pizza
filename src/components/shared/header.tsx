import { cn } from '@/lib/utils'
import { FC } from 'react'
import { Container } from './Container'
import Image from 'next/image'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

interface IHeader {
  className?: string
}

export const Header: FC<IHeader> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left peace  */}
        <div className="flex items-center gap-4">
          <Image alt="pizzalogo" src="/logo.png" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкуснее уже некуда
            </p>
          </div>
        </div>
        {/* right peace  */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-3" variant="outline">
            <User size={16} />
            <p>Войти</p>
          </Button>

          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
