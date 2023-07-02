import NewChat from "./NewChat"

function Sidebar() {
  return (
    <div className="flex flex-col 2x h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                <div>
                    {/* model selection */}
                </div>
                {/* chat list */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar