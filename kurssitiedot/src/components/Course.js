const Course = (props) => {

    const Header = (props) => {
        return (
            <h1>
            {props.course.name}
            </h1>
        )
    }

    const Part = (props) => {
        return (
        <div>
            {props.array.map(ex =>
            <p key={ex.id}>{ex.name} {ex.exercises}</p>
            )}
        </div>
        )
    }

    const Content = (props) => {
        return (
        <div>
            <Part array={props.parts} />
        </div>
        )
    }

    return (
        <div>
            
            <Header course={props.course} />
            <Content parts={props.course.parts} />
        </div>
    )
}

export default Course