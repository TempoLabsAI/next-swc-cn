import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function SuccessPage() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-background to-muted">
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <div
          className="text-center"
        >
          <div
            className="mb-6 text-6xl"
          >
            🎉
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight">
            Welcome to Tempo&apos;s Starter
          </h1>
          <p className="mb-8 text-lg text-muted-foreground max-w-[600px]">
            You&apos;re all set! Your development environment is ready. Start building amazing applications with Next.js, Tailwind CSS, and modern tooling.
          </p>
          <div className="space-y-4">
            <Link href={"/dashboard"}>
            </Link>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary">Documentation</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/examples" className="text-sm text-muted-foreground hover:text-primary">Examples</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/github" className="text-sm text-muted-foreground hover:text-primary">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
