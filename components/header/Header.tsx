import Link from 'next/link'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Logo } from '../logo/Logo'

export function Header() {
  return (
    <header className="relative">
      <div className="h-25 w-full">
        <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 lg:max-w-7xl lg:px-4">
          <Logo />
          <div className="flex items-center justify-between gap-x-5">
            <Link className="relative" href={'/'}>
              <HeartIcon className="size-8 text-slate-900" />
              <span className="absolute -top-0.75 -right-0.75 flex size-4 items-center justify-center rounded-full bg-slate-900 text-center text-xs text-white">
                0
              </span>
            </Link>
            <Link className="relative" href={'/'}>
              <ShoppingBagIcon className="size-8 text-slate-900" />
              <span className="absolute -top-0.75 -right-0.75 flex size-4 items-center justify-center rounded-full bg-slate-900 text-center text-xs text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
