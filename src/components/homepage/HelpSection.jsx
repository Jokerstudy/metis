import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">占位符6</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/calendar.svg"
              alt="Book a demo"
              width="48"
              height="48"
            />
            <h3 className="my-3">占位符6.1</h3>
            <p className="text-zinc-600 dark:text-zinc-400">占位符6.1.1</p>
            <Link
              href="https://metis.so/schedule-demo"
              className="text-primary dark:text-primary-100"
            >
              占位符6.1.2 &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/customer.svg"
              alt="Support"
              width="48"
              height="48"
            />
            <h3 className="my-3">占位符6.2</h3>
            <p className="text-zinc-600 dark:text-zinc-400">占位符6.2.1</p>
            <Link
              href="https://metis.so/contact"
              className="text-primary dark:text-primary-100"
            >
              占位符6.2.2 &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/chat.svg"
              alt="FAQs"
              width="48"
              height="48"
            />
            <h3 className="my-3">占位符6.3</h3>
            <p className="text-zinc-600 dark:text-zinc-400">占位符6.3.1</p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              位符6.3.2 &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
