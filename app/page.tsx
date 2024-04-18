import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-6 justify-center ">
      This is for the landing page maybe?
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4">
        <Link
          href="/login"
          className="font-light flex gap-3 btn-brand items-center"
        >
          <span className="text-[1.7rem]  flex items-center justify-center">
            Login{' '}
          </span>
        </Link>
        <Link
          href="/sign-up"
          className="font-light flex gap-3 btn-brand items-center"
        >
          <span className="text-[1.7rem]  flex items-center justify-center">
            Sign up{' '}
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
