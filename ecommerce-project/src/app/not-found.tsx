"use client"
import { APP_NAME } from "@/lib/contants"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-6 rounded-lg shadow-md text-center w-1/3 items-center justify-center flex flex-col">
                <Image src="/images/logo.svg" height={48} width={48} alt={`${APP_NAME} logo`} priority={true} />
                <h1 className="text-2xl font-bold mb-2 pt-3">
                    Not Found
                </h1>
                <p className="text-destructive text-center">Could not find the requested page</p>
                <Button variant="outline" className="mt-4 ml-2" onClick={() => (window.location.href = "/")} > Back to Home</Button>
            </div>
        </div >
    )
}

export default NotFoundPage