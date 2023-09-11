 
## Typing - integrating the router with a component library

The big thing I like about the router is the whole static typing thing.
But, I am struggling with getting the component library (i.e. MUI) to interact
seamlessly with the router.

Pretty sure I'm not doing it right at the moment, but there's not much doco 
on this.  Which is understandable, given the router hasn't had its first release
yet.

Note: the issue is about **type-checking** - this repo shows that router can
*function* with MUI, but I just can't figure out how to use MUI components
while maintaining the router's type-checking.

I'm not blaming router here - it's just that they're two completely
separate codebases with their own complicated typing arrangements. 


## Example documentation doesn't work in Firefox

The chosen sandbox example tooling doesn't support non-chrome very well:
https://developer.stackblitz.com/platform/webcontainers/browser-support#embedding

Probably not a big deal, author just doesn't want to deal with it right now.

Could potentially indicate a lack of interest in cross-browser - but I think
that's reading too much into it at this point.