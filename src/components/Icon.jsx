const icons = {
  menu: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M4 7h16M4 12h16M4 17h16"
    />
  ),
  close: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M6 6l12 12M18 6L6 18"
    />
  ),
  arrowUp: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M12 19V5m0 0l-6 6m6-6l6 6"
    />
  ),
  arrowRight: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M5 12h14m-5-5l5 5-5 5"
    />
  ),
  mail: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M6.5 5.5c.6-.6 1.7-.5 2.2.2l1.3 1.8c.4.6.4 1.3-.1 1.8l-1 1c1.2 2.1 2.9 3.8 5 5l1-1c.5-.5 1.2-.5 1.8-.1l1.8 1.3c.7.5.8 1.6.2 2.2l-.8.8c-.9.9-2.2 1.3-3.5 1-2.8-.7-5.4-2.2-7.5-4.3s-3.6-4.7-4.3-7.5c-.3-1.3.1-2.6 1-3.5l.9-.7Z"
    />
  ),
  linkedin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M7 9v8M7 6.75v.5M11 17V9h4a2 2 0 0 1 2 2v6M3.75 3.75h16.5v16.5H3.75z"
    />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.5v-1.8c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.3.8 1.3.8.7 1.2 1.8.9 2.2.7.1-.5.3-.9.5-1.1-2-.2-4.2-1-4.2-4.5 0-1 .4-1.9 1-2.6-.1-.2-.4-1.1.1-2.3 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.2.2 2.1.1 2.3.7.7 1 1.6 1 2.6 0 3.5-2.2 4.3-4.2 4.5.3.3.6.8.6 1.7v2.4c0 .3.2.6.6.5A8.5 8.5 0 0 0 12 3.5Z"
    />
  ),
  copy: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 9h9v11H9z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M6 15H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1"
      />
    </>
  ),
  check: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="m5 12 4.2 4.2L19 6.5"
    />
  ),
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10"
    />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" strokeWidth="1.8" />
      <path strokeWidth="1.8" d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path strokeWidth="1.8" d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  layers: (
    <>
      <path strokeWidth="1.8" d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path strokeWidth="1.8" d="m4 12 8 4 8-4" />
      <path strokeWidth="1.8" d="m4 16 8 4 8-4" />
    </>
  ),
  tool: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="m14.7 6.3 3 3M4 20l5.5-5.5m0 0 6.8-6.8a2.8 2.8 0 1 0-4-4l-6.8 6.8m4 4-4-4"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M12 3 5 6v5c0 4.4 2.9 7.7 7 10 4.1-2.3 7-5.6 7-10V6l-7-3Z"
    />
  ),
  briefcase: (
    <>
      <path strokeWidth="1.8" d="M4 8h16v10H4z" />
      <path strokeWidth="1.8" d="M9 8V6h6v2" />
      <path strokeWidth="1.8" d="M4 12h16" />
    </>
  ),
  cap: (
    <>
      <path strokeWidth="1.8" d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path strokeWidth="1.8" d="M7 11.5V16c1.5 1 3.2 1.5 5 1.5s3.5-.5 5-1.5v-4.5" />
    </>
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="m12 4 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 4Z"
    />
  ),
};

function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export default Icon;
