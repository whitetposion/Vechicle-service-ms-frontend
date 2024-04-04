import AddService from "@/components/AddService/AddService"
import MultiTabs from "@/components/MultiTabs/MultiTabs"

const Tickets: React.FC = () => {
    return (
        <div className="relative w-full h-full p-4 flex justify-center items-center bg-background">
          <MultiTabs
            topNav={["Details", "Services", "Parts", "Billing"]}
            components={[AddService, AddService , AddService ,AddService]}
            onComplete={()=>{}}
            onCancel={()=>{}}
          />
        </div>
    )
}

export default Tickets
