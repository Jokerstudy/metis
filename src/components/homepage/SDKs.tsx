import React from 'react';
import Link from '@docusaurus/Link';

function SDK({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        占位符3.1
      </span>

      <h3 className="mb-12 text-4xl">占位符3.2</h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">占位符3.3</h4>

        <p className="mb-6 text-text-400">
          占位符3.3.1 Build faster with our prebuilt library of UI components,
          available for <span className="font-semibold">all</span> frameworks.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="占位符3.4.1"
            to="/react-ui-kit"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="占位符3.4.2"
            to="/angular-ui-kit"
            icon="/static/landing-page/sdk-icons/angular.png"
          />
          <SDK
            name="占位符3.4.3"
            to="/ui-kit"
            icon="/static/landing-page/sdk-icons/html.png"
          />
          <SDK
            name="占位符3.4.4"
            to="/flutter"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="占位符3.4.5"
            to="/react-native"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="占位符3.4.6"
            to="/ios"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="占位符3.4.7"
            to="/android"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
          <SDK
            name="占位符3.4.8"
            to="/android"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">占位符3.5</h4>

        <p className="mb-6 text-text-400">
          占位符3.5.1 Our easy to use Video + Voice + Livestreaming + Chat{' '}
          <span className="font-semibold">all in one</span> SDK
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="占位符3.5.2"
            to="/web-core"
            icon="/static/landing-page/sdk-icons/js.png"
          />
          <SDK
            name="占位符3.5.3"
            to="/react-web-core"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="占位符3.5.4"
            to="/flutter-core"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="占位符3.5.5"
            to="/rn-core"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="占位符3.5.6"
            to="/ios-core"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="占位符3.5.7"
            to="/android-core"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>
    </section>
  );
}
