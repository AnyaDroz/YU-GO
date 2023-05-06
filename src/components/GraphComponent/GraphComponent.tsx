import React from "react";

import CardGraph from "../Graph/CardGraph";
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useTheme } from 'styled-components'





const GraphComponent = () => {
const theme: any = useTheme() // bad anyA, bad bad anyA.
 const themeContext = useContext(ThemeContext)
console.log('Current theme: ', theme)

  console.log('Current theme: ', themeContext)
	 console.log({...theme})
	 console.log(theme.h1LineHeight)
	 console.log(theme.h1LineHeight)

	return (
		//so i know can get theme in two different ways - bot usetHEME
		//AND usecontext return theme as an object
		//but i cant pass it through this guy
		// ahh ok so they the same
			<div><CardGraph theme={theme}/></div>
		
		// useTheme is just a wrapper around useContext, it's kinda standard way to use providers
		// does your own theme have a type somewhere?
		// so then the squiggles are because typescript doesn't know what types are allowed on yuor theme	
// no
//ahhh yesss because its .js - ahhh
//fine by me - i can add types thats easy
//following yup
// hold on though... can you follow me?

// so now i am guessing, because i don't know how styled compeonnts themes work
// but there must be a way to tell styledcomponents what the types are
// or to not use DefaultTheme and instead have your Theme
// but i don't know this, sorry
// you can use the any escape hatch if you like, but you know what i think about that
//yup ill do that for now - like
//my main issue is
//HOW do i shove theme into cardgraph...????
);
};

export default GraphComponent
