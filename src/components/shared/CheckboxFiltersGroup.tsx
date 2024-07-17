import React, { FC } from 'react'
import { FilterCheckboxProps } from './FilterCheckbox'

interface Props {
  className?: string
  items: Item[]
  defaultItems?: Item[]
  title: string
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

type Item = FilterCheckboxProps

export const CheckboxFiltersGroup: FC<Props> = ({ className }) => {
  return <div className={className}></div>
}
