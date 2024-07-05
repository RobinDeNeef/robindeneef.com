import Link from "next/link";

export default function BlogLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a
          className="hover:underline text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:dark:text-yellow-600"
          {...otherProps}
        />
      </Link>
    </>
  );
}
