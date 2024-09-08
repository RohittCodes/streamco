import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

const StudioLayout = (
    { children }: { children: React.ReactNode }
) => {
    if(!checkRole("creator")) {
        redirect("/login")
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default StudioLayout