const Course = (props) => {

    const Header = (props) => {
        return (
            <div>
                <h1 key={props.course.id}>{props.course.name}</h1>
            </div>
        )
    }

    const Part = (props) => {
        return (
        <div>
            <Header course={props.array} />
            {props.array.parts.map(part =>
            <p key={part.id}>{part.name} {part.exercises}</p>)}
            <Total total={props.array.parts} />
        </div>
        )
    }

    const Content = (props) => {
        return (
        <div>
            {props.parts.map((part, i) => <Part key={i} array={part} /> )}
        </div>
        )
    }

    const Total = (props) => {
        const initialValue = 0
        const exercises = props.total.map(ex => ex.exercises)
        const sumWithInitial = exercises.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        return (
            <h3>
               total of { sumWithInitial } exercises
            </h3>
        )
    }

    return (
        <div>
            <Content parts={props.courses} />
        </div>
    )
}

export default Course