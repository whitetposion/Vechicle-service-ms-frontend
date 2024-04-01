import AddService from "@/components/AddService/AddService"
import MultiTabs from "@/components/MultiTabs/MultiTabs"

const Tickets: React.FC = () => {

    return (
        <div>
          This is ticket page
          <div className="flex justify-center bg-background">
          <MultiTabs
            topNav={["Details", "Services", "Parts", "Billing"]}
            components={[<AddService/>, <AddService/> , <AddService/> ,<AddService/>]}
            onComplete={()=>{}}
            onCancel={()=>{}}
          />
          </div>
        </div>
    )
}

export default Tickets
