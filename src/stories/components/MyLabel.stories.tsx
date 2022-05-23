import React from 'react';
import {MyLabel} from '../../components/MyLabel/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: {control:'select', options:['default','h1','h2','h3']},
        // color:{control:'select'},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args)=><MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'default',
    allCaps:false,
    color:'secondary',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'default',
    allCaps: true,
    color:'primary'
}

export const Secondary = Template.bind({})
Secondary.args={
    size: 'default',
    allCaps:false,
    color:'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args={
    size: 'default',
    allCaps:false,
    color:'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args={
    size: 'default',
    allCaps:false,
    fontColor:'#5517ac'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args={
    size: 'default',
    allCaps:false,
    fontColor:'white',
    backgroundColor:'black'
}

