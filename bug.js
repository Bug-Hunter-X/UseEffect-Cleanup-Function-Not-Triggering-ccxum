```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      // Cleanup function
      console.log('Unmounting!');
    };
  }, []); // Empty dependency array

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Incorrect usage of state update
    console.log(count); // This will always be the previous state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```