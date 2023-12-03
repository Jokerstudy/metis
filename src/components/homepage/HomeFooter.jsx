import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';

const products = [
  {
    name: '页脚1.1',
    href: 'https://metis.so/video-sdk',
  },
  {
    name: '页脚1.2',
    href: 'https://metis.so/voice-sdk',
  },
  {
    name: '页脚1.3',
    href: 'https://metis.so/live-streaming-sdk',
  },
  {
    name: '页脚1.4',
    href: 'https://metis.so/chat-sdk',
  },
  {
    name: '页脚1.5',
    href: 'https://metis.so/pricing',
  },
];

const developers = [
  {
    name: '页脚2.1',
    href: 'https://dev.metis.so',
  },
  {
    name: '页脚2.2',
    href: 'https://docs.metis.so',
  },
  {
    name: '页脚2.3',
    href: 'https://metis.so/showcase',
  },
  {
    name: '页脚2.4',
    href: '/api',
  },
  {
    name: '页脚2.5',
    href: '/guides',
  },
];

const usecases = [
  { name: '页脚3.1', href: 'https://metis.so/use-cases/ed-tech' },
  { name: '页脚3.2', href: 'https://metis.so/use-cases/telehealth' },
  { name: '页脚3.3', href: 'https://metis.so/use-cases/hr-tech' },
  { name: '页脚3.4', href: 'https://metis.so/use-cases/fitness' },
  { name: '页脚3.5', href: 'https://metis.so/use-cases/social' },
  { name: '页脚3.6', href: 'https://metis.so/use-cases/gaming' },
  { name: '页脚3.7', href: 'https://metis.so/use-cases/events' },
];

const company = [
  { name: '页脚4.1', href: 'https://metis.so/about' },
  { name: '页脚4.2', href: 'https://metis.so/blog' },
  { name: '页脚4.3', href: 'https://jobs.lever.co/dyte-io' },
  { name: '页脚4.4', href: 'https://metis.so/community' },
  { name: '页脚4.5', href: 'https://metis.so/startups' },
  { name: '页脚4.6', href: 'https://metis.so/contact' },
  { name: '页脚4.7', href: '/faq' },
];

const comparisons = [
  { name: '页脚5.1', href: 'https://metis.so/agora-competitor' },
  { name: '页脚5.2', href: 'https://metis.so/zoom-sdk-competitor' },
  { name: '页脚5.3', href: 'https://metis.so/twilio-video-competitor' },
  { name: '页脚5.4', href: 'https://metis.so/vonage-video-alternative' },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        'flex h-24 max-w-[418px] overflow-clip rounded-2xl bg-white',
        className
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500">
        您的目标，
        <br />
        是我们的优先事项。
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/24h.png" />
        {/* <img src="/img/ird.png" /> */}
      </div>
    </div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: '香港业务均可办理',
  });

  useEffect(() => {
    if (typeof StatusPage !== 'undefined') {
      // eslint-disable-next-line no-undef
      var sp = new StatusPage.page({ page: 'wjlxrzb5h09l' });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://metis.so"
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-[#2DB002]',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>香港业务均可办理</div>
    </Link>
  );
}

function Links({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src="/logo/dyte.svg" alt="Dyte" className="h-9 w-fit lg:h-12" />

          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>
          <Safety className="flex w-full max-w-full lg:hidden" />

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://metis.so/privacy-policy"
              className="text-inherit hover:text-black hover:underline"
            >
              隐私政策
            </Link>
            &bull;
            <Link
              href="https://metis.so/terms-of-service"
              className="text-inherit hover:text-black hover:underline"
            >
              服务条款
            </Link>
            &bull;
            <Link
              href="https://metis.so/website-terms-of-use"
              className="text-inherit hover:text-black hover:underline"
            >
              网站使用条款
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} METIS LIMITED.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/dyte-io"
              aria-label="Dyte's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/dyteio"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/company/dyteio"
              aria-label="Dyte YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
