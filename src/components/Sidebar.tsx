import { Lesson } from "./Lesson";

export function Sidebar() {
    return (
        <aside className="w-80 bg-element px-4">
            <span className="py-4 px-2 border-b border-gray-900 block">Cronograma das aulas</span>

            <div className="space-y-1">
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
            </div>
        </aside>
    )
}