import { css } from 'lit';

//TDOO: me tengo que traer las imagenes y colores del otro proyecto

export const litButtonStyles = css`

:host {
    --color__red--100: #ff8da3;
    --color__red--200: #fe718e;
    --color__red--300: #fd566c;
    --color__red--400: #fc273f;
    --color__red--500: #d31b3d;
    --color__red--600: #aa1834;
    --color__red--800: #641432; 
    --color__blue--100: #acc2dd;
    --color__blue--500: #42638c;
    --color__blue--600: #2e4869;
    --color__blue--650: #042b43;
    --color__blue--680: #04273c;
    --color__blue--700: #172f48;
    --color__blue--800: #031f30;
    --color__blue--900: #011523;
    --color__purple--100: #c2b4fc;
    --color__purple--400: #8d5fff;
    --color__purple--600: #55419e;
    --color__purple--800: #26224c;
    --color__white: #fff;
    --color__grey--input: #f3f3f3;
    --color__grey--100: #f7f7f7;
    --color__grey--200: #f8f8f8;
    --color__grey--300: #e5e5e5;
    --color__grey--400: #d7d8d6;
    --color__grey--500: #babcbc;
    --color__grey--600: #9c9ea0;
    --color__grey--800: #53565a;
    --color__success: #8dbf3d;
    --color__warning: #f6c348;
    --color__danger: #fc273f;
    font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }

.lit-button-container {
	display: flex;
	width: 100%;
	cursor: pointer;
	margin: 0.5rem 0rem;
}

.lit-button-container[active] span {
	background-color: var(--color__blue--680)!important;
	color: var(--color__white)!important;
}

.lit-button-container[active] .lit-button-close {
	background-image: url(./icon-x-white.svg);
}

.lit-button-code, .lit-button-description, .lit-button-close, .lit-button-no-close {
	display: block;
	width: -webkit-fill-available;
    background-color: var(--color__grey--input);
    border: 0;
}

.lit-button-code {
    display: flex;
    align-items: center;
    justify-content: center;
	width: 20%;
	max-width: 20%;
    padding: 0.8rem 0.5rem 0.8rem 1rem;
    font-size: 13px!important;
    text-align: center;
    color: var(--color__red--400);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}

.lit-button-description {
	padding: 0.8rem;
	width: 75%;
	max-width: 75%;
}

.lit-button-close{
	width: 5%;
    max-width: 10%;
    padding: 0.8rem 1rem 0.8rem 0.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background-image: url(./icon-x.svg);
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 16px 12px;  
}

.lit-button-no-close{
	width: 10%;
    max-width: 10%;
    padding: 0.8rem 1rem 0.8rem 0.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem; 
}

.centrar-texto{
    text-align: center
}


`;