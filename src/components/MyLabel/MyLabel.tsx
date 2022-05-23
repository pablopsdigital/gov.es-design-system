import React from 'react'
import './myLabel.css'
import { AllCaps } from '../../stories/components/MyLabel.stories';


export interface  MyLabelProps {

  /**
   * This is the text message displayed by the label
   */
  label: string;

  /**
   * This is the text size by the label
   */
  size: 'default'|'h1'|'h2'|'h3';

  /**
   * Modify text to uppercase
   */
  allCaps:boolean;


  /**
   * Select color for text
   */
  color: 'primary'|'secondary'|'tertiary'

  /**
   * Select custom color for text
   */
  fontColor?: string

}

export const MyLabel=({
  label='No Label',
  size = 'default',
  allCaps=false,
  color='primary',
  fontColor //optional

}:MyLabelProps)=> {
  return (
    <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
      {allCaps?label.toUpperCase():label}
    </span>
  )
}
