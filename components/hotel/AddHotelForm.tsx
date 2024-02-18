"use client"

import { Hotel, Room } from "@prisma/client";

export type HotelWithRooms = Hotel & {
    rooms: Room[]
}

interface Props {
    hotel: HotelWithRooms | null
}

function AddHotelForm({ hotel }: Props) {
    return (
        <div>
            ADd
        </div>
    );
}

export default AddHotelForm;