import { Checkbox } from '../ui/checkbox'
import React, { FC } from 'react'

interface FilterCheckboxProps {
  text: string
  value: string
  endAddorment?: React.ReactNode
  onCheckboxChange?: (checked: boolean) => void
  checked?: boolean
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  text,
  value,
  endAddorment,
  onCheckboxChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckboxChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAddorment}
    </div>
  )
}
