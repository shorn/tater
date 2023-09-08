## Sometimes fails on large projects

* https://github.com/vitejs/vite/issues/2433
* https://rollupjs.org/troubleshooting/#error-javascript-heap-out-of-memory


## Vite behaves differently during "dev" and "build" modes

So that’s 2x the potential configuration.  
Not to mention to old “supported by X, but not by Y” issues that will inevitably happen.

> Vite uses esbuild at devtime, rollup at prod time. This can mean you have to configure two completely separate systems sometimes
>  
> https://www.reddit.com/r/reactjs/comments/12x6k9x/it_looks_like_createreactapp_is_dead_what_should/jhk2ha5/


### Different compile errors between dev and prod

* `npm run dev`
  * if a file with a compile error in it is not referenced - it's tree shaken 
  and no error is shown to the developer.
* `npm run build` 
  * if there's any compile errors in any file, even if not referenced in the App
  you will get a compile error
  * this means the dev needs to manually do a `build` every time before they 
  commit/push - or else they'll break the build (presuming the CI environment
  will run `build`)
  
So you have to run the "slow" `build` command all the time with Vite anyway, so
much for "it's faster".

Note that implementing the Vite recommendations from the generated readme
for a "production application" doesn't change this.

None of the work-around mechanisms are seem feasible for real projects:
https://vitejs.dev/guide/features.html#typescript


## Issues with proxying

* https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng
* https://ruslan.rocks/posts/vite-proxy-how-to-setup
* https://stackoverflow.com/questions/64677212/how-to-configure-proxy-in-vite


## Still a young ecosystem

https://www.reddit.com/r/reactjs/comments/120l05i/should_i_migrate_from_createreactapp/jdm670k/


## Vite needs a plugin to work with absolute imports

https://stackoverflow.com/a/68250175/924597


## Defaults are not setup for production applications

This is the warning generated in the readme for a new project:

```
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## HMR breaks with non-react stuff in TSX files

https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports

I think this means that Vite HMR requires you not define anything in a TSX file
except React components.  No utility functions, classes, constants or types.

And it breaks with no notification in the browser either, so you have to check 
the console all the time.

I use non-react TypeScript exports a lot in my TSX files - because it's the
sensible way to do many things.  

Tater example: defining and exporting the route constant from the TSX file where
the component that renders the route lives.  This was breaking HMR when I was 
frobbing things from using `aboutRoute` to explicit `/about` strings - each time
I did that, the HMR would freak out.

This makes Vite HMR close to useless the way I write apps.

