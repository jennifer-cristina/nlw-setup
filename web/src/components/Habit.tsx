
interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className='bg-zinc-50 w-10 h-10 text-black rounded m-2 text-center flex items-center justify-center'>
            {props.completed}
        </div>
    )
}