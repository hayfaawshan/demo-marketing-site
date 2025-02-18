import React, { useState } from 'react';

interface MyComponentProps {
 prop1?: string;
  prop2?: string;
}

const MyComponent: React.FC<MyComponentProps> = props => {
  const [state1, setState1] = useState<string>('');
  const [state2, setState2] = useState<string>('Hello World');
  const [inputValue, setInputValue] = useState<string>('Click me');
  const [count, setCount] = useState<number>(0);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setState1('Button clicked!');
    setCount(count + 1);
  };

  // const handleFormSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   // Add form submission logic here
  //   console.log('Form submitted with input:', inputValue);
  // };

  return (
    <div>
      <h1>My Component</h1>
      <p>{props.prop1}</p>
      <p>{props.prop2}</p>
      <p>{state1}</p>
      <p>{state2}</p>
      <p>Current count: {count}</p>
      {/* <form onSubmit={handleFormSubmit}> */}
      <input
        type="text"
        placeholder="Enter some text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      {/* </form> */}
      <button onClick={handleButtonClick}>Click me</button>
      <button onClick={() => setState2((prev) => prev + '!')}>
        Append "!"
      </button>;
    </div>
  );
};

MyComponent.defaultProps = {
  prop1: 'Hello',
  prop2: 'World',
};

export type { MyComponentProps };

export default MyComponent;