import { cn } from '@/lib/utils'
import { FC, PropsWithChildren } from 'react'

interface IContainer {
  className?: string
}

export const Container: FC<PropsWithChildren<IContainer>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  )
}
