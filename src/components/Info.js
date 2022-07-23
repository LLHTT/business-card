import React from 'react';

export default function Info() {
  return (
    <div className="info--container">
      <img
        src="https://lawrence9z.github.io/hosted-assets/my-profile.png"
        alt="my profile"
        className="info--img"
      />
      <h1 className="info--name">Lawrence Le</h1>
      <h5 className="info--title">Frontend Developer</h5>
      <p className="info--website">
        <a
          href="https://lawrence9z.github.io/Personal-Portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          lawrencele.website
        </a>
      </p>
      <a href="mailto:lawrencele1991@gmail.com">
        <button className="info--button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="envelope"
            className="svg-inline--fa fa-envelope"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
            ></path>
          </svg>{' '}
          Email
        </button>
      </a>
      {/* Some changes */}
    </div>
  );
}
