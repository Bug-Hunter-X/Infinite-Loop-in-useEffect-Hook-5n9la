```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This effect runs only once after the initial render
    console.log('Component Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```