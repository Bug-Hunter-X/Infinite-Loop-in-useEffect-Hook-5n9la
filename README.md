# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies.

## Bug Description
The `useEffect` hook in `bug.js` attempts to update the state variable `count` within the effect function itself. Because the effect doesn't have any dependencies, it runs repeatedly, causing `count` to continuously increment, resulting in an infinite render loop.

## Solution
The solution in `bugSolution.js` demonstrates the correct way to use `useEffect`. The dependency array is now empty (`[]`), ensuring the effect runs only once after the initial render.  If you needed it to run on changes to `count`, you would put `[count]` as the dependency array.