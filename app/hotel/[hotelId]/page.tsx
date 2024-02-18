import { getHotelById } from "@/actions/getHotelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { auth } from "@clerk/nextjs";

interface Props {
    params: {
        hotelId: string
    }
}

async function HotelCreate({ params }: Props) {
    const hotel = await getHotelById(params?.hotelId)
    const { userId } = auth()

    if (!userId) return <div>Not Authenticated....</div>


    if (hotel && hotel?.userId !== userId) return <div>
        Access Denied!
    </div>

    return (
        <div>
            <AddHotelForm hotel={hotel} />
        </div>
    );
}

export default HotelCreate;