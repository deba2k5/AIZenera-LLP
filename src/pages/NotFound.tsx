import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSeo } from "../lib/hooks";

export default function NotFound() {
  useSeo("Page not found");
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-serif text-[8rem] italic leading-none text-accent sm:text-[12rem]">404</p>
      <h1 className="h-section mt-4">This page has wandered off.</h1>
      <p className="lead mt-5 max-w-md">The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn-primary mt-10"><ArrowLeft size={16} /> Back to home</Link>
    </section>
  );
}
