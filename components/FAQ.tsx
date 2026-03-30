"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-16 mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          FAQs - House Construction in Pondicherry
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the construction cost per sq ft in Pondicherry?
            </AccordionTrigger>
            <AccordionContent>
              Eswari Builders offers house construction in Pondicherry starting
              from ₹1999 per sq.ft. The final cost depends on factors like plot
              size, number of floors, design complexity, and material
              specifications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does it take to build a house in Pondicherry?
            </AccordionTrigger>
            <AccordionContent>
              A typical residential construction project in Pondicherry takes
              around 12 to 18 months. We provide a detailed project timeline and
              milestone schedule before starting the construction.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you provide complete house construction services in
              Pondicherry?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We offer end-to-end turnkey house construction in
              Pondicherry, including soil testing, architectural design,
              structural construction, electrical work, plumbing, interior
              finishing, and final handover.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Which areas in Pondicherry do you serve?
            </AccordionTrigger>
            <AccordionContent>
              We provide house construction services across all major areas in
              Pondicherry, including White Town, Lawspet, Reddiarpalayam,
              Mudaliarpet, Muthialpet, Villianur, Ariyankuppam, and nearby
              regions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is your construction pricing transparent with no hidden costs?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We follow a transparent, milestone-based payment structure
              with a detailed Bill of Quantities (BOQ) shared before project
              initiation. This ensures complete clarity with zero hidden
              charges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Will I get regular updates during construction?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We provide regular site updates, including photos, videos,
              and progress reports, so you can track your project in real-time
              even if you are not present at the site.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Do you offer joint venture construction projects?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We collaborate with architects, builders, and contractors
              through joint venture partnerships. We handle structural design,
              engineering analysis, and compliance while coordinating with your
              team for smooth execution.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Do you assist with home loan approvals?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We assist clients in securing home loans through leading
              banks such as HDFC, ICICI, Axis Bank, etc ensuring a smooth
              financing process alongside construction.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              How can I get started with Eswari Builders?
            </AccordionTrigger>
            <AccordionContent>
              You can call us at +91 90920 97190 or fill out the free estimate
              form on this page. Our team will schedule a free site visit and
              provide a detailed construction estimate within 24 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
