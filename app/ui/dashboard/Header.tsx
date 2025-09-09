export default function(){
    return (
        <header className="max-w-(--widthApp) mx-auto p-5 flex justify-between h-20 items-center">
            <div id="logo" className="flex gap-2 items-center">
                <img src={undefined} className="bg-"/>
                <h3 className="text-2xl">Porcigest</h3>
            </div>
            <div id="profile-user" className="flex gap-2">
                <span>nombre de usuario</span>
                <img src={undefined}/>
            </div>
        </header>
    )
}