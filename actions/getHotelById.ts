import prismaDb from "@/lib/prismaDb"

export const getHotelById = async (hotelId: string) => {
    try {
        const hotel = await prismaDb.hotel.findUnique({
            where: {
                id: hotelId
            },
            include: {
                rooms: true
            }
        })
        if (!hotel) return null

        return hotel
    } catch (error: any) {
        throw new Error(error)
    }
}