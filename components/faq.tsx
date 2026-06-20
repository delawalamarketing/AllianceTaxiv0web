'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Do you have surge pricing?',
    answer: 'No. Alliance Taxi Barrie never charges surge pricing. We believe in fair, transparent rates for all our customers, no matter what time of day or local demand.'
  },
  {
    question: 'What are your airport rates?',
    answer: 'We offer flat, upfront rates for trips from Barrie to Toronto Pearson Airport. Rates are fixed regardless of traffic or time of day. Call us to get a quote for your specific location.'
  },
  {
    question: 'How long does a taxi usually take to arrive?',
    answer: 'Response times vary based on location and availability. Our dispatchers aim for quick arrivals in Barrie and surrounding towns. When you call, we can give you an estimated pickup time.'
  },
  {
    question: 'Do you accept credit cards or only cash?',
    answer: 'We accept both cash and major credit cards. Payment methods can be discussed when you book or on arrival.'
  },
  {
    question: 'Can I book a taxi in advance?',
    answer: 'Yes. Call us ahead to reserve a taxi for your preferred time. This is especially recommended for airport trips and scheduled appointments.'
  },
  {
    question: 'Are your drivers professional and vetted?',
    answer: 'Yes. All Alliance Taxi Barrie drivers are professional, experienced, and familiar with the Barrie area. We prioritize passenger safety and comfort.'
  },
  {
    question: 'Do you service long-distance trips?',
    answer: 'Yes. For trips beyond our regular local service area, we&apos;re happy to provide a custom quote. Call us with your destination and we&apos;ll get you priced.'
  },
  {
    question: 'What if I leave something in the taxi?',
    answer: 'Contact us immediately with a description of your lost item and the approximate time of your ride. We&apos;ll check with the driver and do our best to help recover it.'
  },
  {
    question: 'How do I complain or provide feedback?',
    answer: 'Your feedback is important to us. Please call with concerns or compliments. We&apos;re committed to providing excellent service every time.'
  },
  {
    question: 'Is Alliance Taxi Barrie available 24/7?',
    answer: 'Call us to confirm our current availability. We aim to serve your transportation needs whenever you need us.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={index}
              open={openIndex === index}
              className="group border border-border rounded-lg bg-card transition-all"
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }}
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-foreground hover:bg-muted/30 transition-colors">
                <span className="text-base md:text-lg">{item.question}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
