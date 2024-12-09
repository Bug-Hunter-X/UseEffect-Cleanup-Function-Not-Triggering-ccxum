```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounting!');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Correct usage of state update
    console.log(count); // This will show the updated count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```