# HashPass
A no-storage and no-logs password managment solution

## What is HashPass?
HashPass is a no-storage password managment solution, where everything happens without logs or any info saved. It works by using the information you put into it to generate a secure password that can be reproduced on any instance of HashPass across the world, as long as you use the same values. First, it smashes together the domain, username, and master password. then, it uses a hashing algorithm of your choosing, encrypts that data, and then encodes it into base64. Finally, the password gets trimmed to your requested length and copied to your clipboard.

## Where did it come from?
To make a long story short, a friend of mine called [Devenison](https://devenison.com) got the idea for this kind of software from 4Chan and made it into a bash script. In the state that he found it in, it was just a series of commands that would output the final password in plaintext in the shell, which is obviouslynot a good idea. From there, he sent it to me, and I thought it was pretty cool, and decided to turn it into a simple web GUI :D

## Techstack
<img height="48px" src="https://raw.githubusercontent.com/arithefirst/hashpass/refs/heads/master/README-DEPS/meltui.svg" title="MeltUI"> <img src="https://go-skill-icons.vercel.app/api/icons?i=svelte" title="SvelteKit"> <img src="https://go-skill-icons.vercel.app/api/icons?i=tailwindcss" title="TailwindCSS"> <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript" title="TypeScript">
