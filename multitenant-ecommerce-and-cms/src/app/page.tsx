import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    name: "Guaranteed Qulaity",
    Icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee,"
  },
  {
    name: "Fir the Planet",
    Icon: Leaf,
    description: "We've pleadged 1% of sales to the preservation and restoration of the nature and environment."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="items-center justify-center flex flex-col py-20 px-10">
        <div className='mx-auto text-center flex flex-col items-center max-w-3xl sm:text-6xl text-gray-900 font-bold text-4xl'>
          Your marketplace for high-qulity {' '}
          <span className="text-blue-500">digital assets.</span>
        </div>
        <p className="mt-6 text-center text-lg max-w-prose text-muted-foreground">
          Welcome to DigitalHippo. Every asset on our platform is verified by out team to ensure our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">
            Our quality promise &rarr;
          </Button>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm: grid-col-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => {
              return (
                <div key={perk.name} className="text-center md:flex md:items-center md:text-left lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground px-10 md:px-6">
                      {perk.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
