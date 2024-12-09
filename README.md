# React useEffect Cleanup Function Not Triggering

This example demonstrates a common issue with the `useEffect` cleanup function in React.  The cleanup function is designed to run before the component unmounts or before the next effect runs.  However, if it's not used correctly, it might not work as expected. 

**Problem:** The cleanup function in the provided `bug.js` is not triggered when the component unmounts.  Additionally, the example demonstrates an incorrect way to use state updates in React, leading to a stale closure issue.

**Solution:** The `bugSolution.js` shows the correct way to implement the useEffect hook and use state update. The console logs correctly display the unmounting process, and the state is updated correctly.

This repository serves as a learning resource to understand the proper handling of `useEffect` hooks and state updates in React.  It helps to avoid common pitfalls and write more robust and predictable React applications.