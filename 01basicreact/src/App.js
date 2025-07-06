import React from 'react';

function App() {
  return (
    <div>
      <header className="bg-dark text-white p-4 text-center">
        <h1>My Simple React Website</h1>
        <nav>
          <a href="#about" className="text-white mx-3">About</a>
          <a href="#contact" className="text-white mx-3">Contact</a>
        </nav>
      </header>

      <div className="container mt-4">
        <section id="home" className="mb-5">
          <h2>Welcome</h2>
          <p>This is a simple React + Bootstrap 5 website.</p>
        </section>

        <section id="about" className="mb-5">
          <h2>About Me</h2>
          <p>I am learning how to create modern web apps with React and Bootstrap.</p>
        </section>

        <section id="contact" className="mb-5">
          <h2>Contact</h2>
          <p>Email: yourname@example.com</p>
        </section>
      </div>

      <footer className="bg-dark text-white text-center p-3">
        © 2025 Your Name
      </footer>
    </div>
  );
}

export default App;
