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

    const Total = (props) => {
        const { parts } = props
        const initialValue = 0
        const array = []
        for (let i in parts) {
            array.push(parts[i].exercises)
        }
        //console.log('taulukko ', array)
        const sumWithInitial = array.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        return (
            <h3>
               Total of { sumWithInitial } exercises
            </h3>
        )
    }

    return (
        <div>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course