
const SideCard = ({ blog }) => {
    const { image, title, date } = blog;
    return (
        <div className="grid lg:grid-cols-1 gap-6">
            <div className="flex gap-2 mt-4">
                <div>
                    <img className="w-[56px] h-[56px] rounded-full" src={image} alt="" />
                </div>
                <div className="font-bold text-[13px] mt-3">
                    {title}
                    <div className="text-[11px] font-thin text-[#374151]">
                        {date}
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default SideCard;
