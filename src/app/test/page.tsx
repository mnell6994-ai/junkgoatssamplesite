"use client";

export default function TestPage() {
  console.log('Test page rendering');
  
  const handleClick = () => {
    console.log('Button clicked!');
    alert('Button works!');
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Test Page</h1>
      
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold"
      >
        TEST BUTTON
      </button>
      
      <div className="mt-8">
        <p className="text-lg">If you can see this page and click the button, then React is working.</p>
        <p className="text-lg">If the button doesn't work, there's a JavaScript issue.</p>
      </div>
    </div>
  );
}
