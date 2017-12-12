Hi @gvaldambrini

So I've been unable to get storybook-router working with RR3. 

a few things to notice.

- RR4 is always in the node_modules of storybook-router. react router 3 is never present. Therefore the condition to check for RR3/RR4 in StoryRouter.js never falls into the else: https://github.com/gvaldambrini/storybook-router/blob/master/src/react.js#L57 the examples require react router 4 only, and the example for v3 is a false-positive its always running under as rr4.


Please test for yourself.

clone this repo and checkout the master branch.

Master is a project using RR3. You will find that after running:

```yarn && yarn storybook``` the storybook for react router does not work.

you can test it in the browser in normal app mode: ```yarn start``` its all setup correctly.

running ```npm ls react-router``` you can see 
```
$ npm ls react-router
storybook-router-v3@0.1.0 ~/projects/storybook-router-v3
├── react-router@3.2.0 -- I'm using RR3
└─┬ storybook-router@0.3.2
  └── react-router@4.2.0  -- Its always RR4.
```

Now checkout the rr4 branch: 
run ```rm -rf node_modules && yarn && yarn storybook``` you will see it all works.
```yarn start``` and you will see the app also runs in app mode.

Now can you see my confusion?

I think its best we support rr3 in an older release you must have?


