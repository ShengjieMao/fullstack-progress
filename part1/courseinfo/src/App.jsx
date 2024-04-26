const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.part} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ part }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {part[0].exercises + part[1].exercises + part[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const info = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={info} />
      <Total part={info} />
    </div>
  );
};

export default App;
