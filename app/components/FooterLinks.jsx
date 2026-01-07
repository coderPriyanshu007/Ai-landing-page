
export default function({children,title}){
    return <div className=" max-w-[250px]">
        <h2 className="text-[#FF541F] text-base md:text-lg lg:text-xl font-semibold mb-2">{title}</h2>
        {children}
    </div>
}