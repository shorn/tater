
## Doesn't work with simple external sources

https://stackoverflow.com/a/44115058/924597\

So if you want to do a mono-repo style and import source from code generators
(e.g open-api) you have to generate the code under your source tree.

Same for sharing code (between multiple apps, or anything else) - if you want
to refer to the code/types in your CRA - it has to be under your CRA source 
tree.

You can use productions like [Craco](https://stackoverflow.com/a/60353355/924597)
to customise, but those are external to CRA and usually are bodgey hacks with 
significant downsides - like needing more work to make them work with TypeScript.

I also didn't used to want to use projects like Craco, because then I couldn't
upgrade CRA without having to worry about compatibility - which
always lagged being by months if not years, with no guarantee the Craco etc. 
would _ever_ be updated.  This is precisely the kind of silliness I use 
CRA to _avoid_.

That said, now that CRA is a zombie project, worrying about Craco being 
up-to-date is less of concern.  Silver linings, I guess 😅

