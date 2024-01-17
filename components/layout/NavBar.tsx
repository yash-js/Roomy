'use client'

import { UserButton, useAuth } from "@clerk/nextjs";
import Containter from "../container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
    const router = useRouter()
    const { userId } = useAuth()
    return (
        <div className="sticky top-0 border border-b-primary/10 bg-secondary">
            <Containter>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push('/')} >
                        <Image
                            src={'/logo.svg'}
                            width={'30'}
                            height={'30'}
                            alt="Logo"
                        />
                        <div className="font-bold text-xl">
                            Roomy
                        </div>
                    </div>
                    <SearchInput />
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-between flex-grow">
                            <ModeToggle />
                            <NavMenu />
                        </div>

                        {userId ? <UserButton afterSignOutUrl="/" />
                            :
                            <>
                                <Button
                                    variant={'outline'}
                                    onClick={() => router.push('/sign-in')}
                                    size={'sm'} >
                                    Sign  in
                                </Button>
                                <Button
                                    onClick={() => router.push('/sign-in')}

                                >
                                    Sign up
                                </Button>
                            </>
                        }
                    </div>
                </div>
            </Containter >
        </div >
    );
}

export default NavBar;