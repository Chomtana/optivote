const GitHubButton = () => {
  return (
    <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#D0D5DD] px-6 py-2 text-md font-semibold text-[#344054] shadow transition duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <g clip-path="url(#clip0_7018_464)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_7018_464">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      Sign in with GitHub
    </button>
  );
};

export default GitHubButton;
